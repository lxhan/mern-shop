import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Col, Card, Row, Image } from "antd";
import { NavLink } from "react-router-dom";

const { Meta } = Card;

const HomePage = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    Axios.post("/api/product/getProducts").then((response) => {
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        alert("Failed to fectch products");
      }
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  const renderCards = products.map((product, index) => {
    return (
      <Col lg={6} md={8} xs={24} key={index}>
        <Card
          hoverable={true}
          cover={
            <NavLink to={`/product/${product._id}`}>
              <Image
                preview={false}
                src={product.image}
                alt={product.title}
                width="100"
              />
            </NavLink>
          }
        >
          <Meta title={product.title} description={`$${product.price}`} />
        </Card>
      </Col>
    );
  });

  return (
    <div style={{ width: "75%", margin: "3rem auto" }}>
      <div style={{ textAlign: "center" }}>
        <h2>Products </h2>
      </div>

      {products.length === 0 ? (
        <div
          style={{
            display: "flex",
            height: "300px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2>No products ...</h2>
        </div>
      ) : (
        <div>
          <Row gutter={[16, 16]}>{renderCards}</Row>
        </div>
      )}
    </div>
  );
};

export default HomePage;
