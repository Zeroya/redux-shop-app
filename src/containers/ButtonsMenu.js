import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { sortProducts } from '../redux/actions/productsActions';
import { useDispatch } from 'react-redux';

const ButtonsMenu = () => {
  const category = useParams();
  const dispatch = useDispatch();

  return (
    <div style={{ marginTop: `${category.categoryId === undefined ? "5.5em" : "0.5em"}`, display: "flex", justifyContent: 'center' }} >


      <select style={{ marginRight: "1em", }} class="ui inverted secondary dropdown">
        <option value="">Sort</option>
        <option  value="1">Start</option>
        <option  value="0"><Link to={'/desc'}>End</Link></option>
      </select>

      <Link to={`/desc`}>
        <button class="ui inverted secondary button">
          All
        </button>
      </Link>

      <Link to={`/category/men's clothing`}>
        <button style={{ marginLeft: "1em", }} class="ui inverted secondary button">
          Men's Clothing
        </button>
      </Link>

      <Link to={`/category/women's clothing`}>
        <button style={{ marginLeft: "1em" }} class="ui inverted secondary button">
          Women's Clothing
        </button>
      </Link>

      <Link to={`/category/jewelery`}>
        <button style={{ marginLeft: "1em", marginRight: "1em" }} class="ui inverted secondary button">
          Jewelery
        </button>
      </Link>

      <Link to={`/category/electronics`}>
        <button class="ui inverted secondary button">
          Electronics
        </button>
      </Link>

    </div>
  );
};

export default ButtonsMenu;