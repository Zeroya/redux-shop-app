import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { selectedProduct, removeSelectedProduct, addToCard } from "../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";

const Searched = () => {

  const [searchedRecipes, setSearchedRecipes] = useState([]);
  let product = useSelector((state) => state.product);
  let params = useParams();
  const { image, title, price, category, description } = product;
  const dispatch = useDispatch();

  const GetSearched = async (name) => {
    const data = await fetch(`https://fakestoreapi.com/products/${name}`);
    const recipes = await data.json();
    dispatch(selectedProduct(recipes));
  }

  useEffect(() => {
    if (params.searched && params.searched !== "")  GetSearched(params.searched);
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [params.searched])

  const addCard = (product) => {
    dispatch(addToCard(product))
  }

  return (
    <div className="ui grid container" >
      {Object.keys(product).length === 0 ? (
        <div style={{ marginBottom: '300 !important', marginRight: 'auto', marginLeft: "auto" }} >...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui one column center aligned grid">

            <div style={{ marginTop: 30 }} className="column">
              <img style={{ marginLeft: '38%', width: 270, maxHeight: 320, minHeight: 200 }} className="ui fluid image" src={image} />
            </div>

            <div className="column">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">${price}</a>
              </h2>
              <h3 style={{ color: "brown" }}>{category}</h3>
              <p style={{ width: "50%", marginRight: 'auto', marginLeft: "auto" }}>{description}</p>

              <div className="ui four column centered grid">
                <div class="four column centered row">

                  <div onClick={() => addCard(product)} to="/" style={{ maxWidth: "12rem", marginLeft: "5em" }} class="column">
                    <div class=" ui vertical animated ui green basic button" tabindex="0">
                      <div class="hidden content">Add to Card</div>
                      <div class="visible content">
                        <i class="shop icon"></i>
                      </div>
                    </div>
                  </div>

                  <Link to="/cards" style={{ marginLeft: "-12vh" }} class="column">
                    <div >
                      <button class="ui blue button">Go to Card</button>
                    </div>
                  </Link>

                </div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default Searched;