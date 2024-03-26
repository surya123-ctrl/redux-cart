import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductComponent from "./ProductComponent";
import axios from "axios";
import { setProducts, fetchProducts } from "../redux/actions/productActions";
const ProductListing = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();
  //   console.log(products);
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get("https://fakestoreapi.com/products");
  //       console.log("Products: ", response.data);
  //       dispatch(setProducts(response.data));
  //     } catch (error) {
  //       console.log("Error in fetching products");
  //     }
  //   };
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="ui grid container">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
