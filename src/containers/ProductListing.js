import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
import { Grid, Image } from 'semantic-ui-react';

const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const sort = useSelector((state) => state?.setProducts?.start)
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log("Products :", products);
  return (
    <div class="ui grid container" style={{marginTop:25 , marginRight: 200, marginLeft: 200}}>
      <ProductComponent />
    </div>
  );
};

export default ProductPage;
