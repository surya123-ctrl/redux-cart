import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  selectedProduct,
  removeSelectedProduct,
  fetchProductDetails,
} from "../redux/actions/productActions";
const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);
  console.log(product);
  //   const fetchProductDetail = async () => {
  //     try {
  //       const response = await axios.get(
  //         `https://fakestoreapi.com/products/${productId}`
  //       );
  //       //   console.log(response);
  //       dispatch(selectedProduct(response.data));
  //     } catch (error) {
  //       console.log("error in fetching product detail", error);
  //     }
  //   };
  useEffect(() => {
    if (productId && productId !== "") dispatch(fetchProductDetails(productId));
    return () => {
      dispatch(removeSelectedProduct());
    };
  }, [productId]);
  return (
    <div className="ui grid container" style={{ marginTop: "2rem" }}>
      {Object.keys(product).length === 0 ? (
        <div>
          <h1>{`...Loading `}</h1>
        </div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img
                  className="ui fluid image"
                  src={product.image}
                  alt={product.title}
                />
              </div>
              <div className="column rp">
                <h1>{product.title}</h1>
                <h2>
                  <a className="ui teal tag label">${product.price}</a>
                </h2>
                <h3 className="ui brown block header">{product.category}</h3>
                <p>{product.description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
