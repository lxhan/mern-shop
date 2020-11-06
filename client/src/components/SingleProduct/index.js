import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Row, Col, Image } from "antd";
import ProductInfo from "./ProductInfo";
import { addToCart } from "../../store/actions/user";
import { useDispatch } from "react-redux";

const SingleProductPage = (props) => {
  const dispatch = useDispatch();
  const productId = props.match.params.productId;
  const [product, setProduct] = useState([]);

  useEffect(() => {
    Axios.get(`/api/product/getProduct?id=${productId}&type=single`).then(
      (response) => {
        setProduct(response.data[0]);
      }
    );
  }, [productId]);

  const addToCartHandler = (productId) => {
    dispatch(addToCart(productId));
  };

  return (
    <div className="postPage" style={{ width: "100%", padding: "3rem 4rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>{product.title}</h1>
      </div>

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <Image width={200} src={product.image} />
        </Col>
        <Col lg={12} xs={24}>
          <ProductInfo addToCart={addToCartHandler} detail={product} />
        </Col>
      </Row>
    </div>
  );
};

export default SingleProductPage;
