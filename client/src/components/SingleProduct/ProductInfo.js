import React, { useEffect, useState } from "react";
import { Button, Descriptions } from "antd";

const ProductInfo = (props) => {
  const [Product, setProduct] = useState({});

  useEffect(() => {
    setProduct(props.detail);
  }, [props.detail]);

  const addToCartHandler = () => {
    props.addToCart(props.detail._id);
  };

  return (
    <div>
      <Descriptions title="Product Info">
        <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
        <Descriptions.Item label="Fee"> {Product.fee}</Descriptions.Item>
        <Descriptions.Item label="Description">
          {Product.description}
        </Descriptions.Item>
      </Descriptions>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <Button
          size="large"
          shape="round"
          type="danger"
          onClick={addToCartHandler}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
