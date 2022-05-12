import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ButtonsMenu = () => {
  const category = useParams();
  return (
    <div style={{ marginTop:`${category.categoryId === undefined ? "5.5em" : "0.5em" }`, display: "flex", justifyContent: 'center' }} >

      <Link to={`/`}>
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