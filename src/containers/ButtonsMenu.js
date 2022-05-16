import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { sortProducts } from '../redux/actions/productsActions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ButtonsMenu = () => {
  const category = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const options = [
    { value: 'Sort', label: 'Sort' },
    { value: '1', label: 'Start' },
    { value: '2', label: 'End' },
  ];

  const [selectedOption, setSelectedOption] = useState({});
  console.log(selectedOption);

  const onChanged = (e) => {
    navigate('/' + e.target.value);
  }

  return (
    <div style={{ marginTop: `${category.categoryId === undefined ? "5.5em" : "0.5em"}`, display: "flex", justifyContent: 'center' }} >

      <select onChange={onChanged} style={{ marginRight: "1em", }} class="ui inverted secondary dropdown">
        <option value="">Sort</option>
        <option value="">Start</option>
        <option value="desc">End</option>
      </select>

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