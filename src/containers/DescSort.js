import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { sortProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from "react-router-dom";

const DescSort = () => {
  const sort = useSelector((state) => state.sortReducer.products)
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products?sort=desc`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(sortProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", sort);
  return (
    <div class="ui grid container" style={{marginTop:25 , marginRight: 200, marginLeft: 200}}>
      {sort.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div className="four wide column" style={{ height: 520 }} key={id}>
        <Link to={`/product/${id}`}>
          <div className="ui link cards">
            <Card color='teal' style={{minHeight: 425 }}>
              <Image wrapped ui={false}>
                <img style={{ width: "100%", maxHeight: 290, minHeight: 290 }} src={image} alt={title} />
              </Image>
              <Card.Content>
                <Card.Header>{title.substring(0, 23)}</Card.Header>
                <Card.Meta>$ {price} </Card.Meta>
                <Card.Meta>{category} </Card.Meta>
                <div style={{textAlign:"center", marginTop:"4%"}} > <button class="ui inverted secondary button" style={{textAlign:"center"}} >Buy</button></div>
              </Card.Content>
            </Card>
          </div>
        </Link>
      </div>
    );
  })}
    </div>
  );
};

export default DescSort;