import React, { useState } from "react";
import { Typography, Button, Form, Input } from "antd";
import Axios from "axios";

const { Title } = Typography;
const { TextArea } = Input;

const AddProductPage = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [fee, setFee] = useState(0);
  const [image, setImage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    if (!title || !description || !price || !image) {
      return alert("All fields are required");
    }

    const variables = {
      user: props.user.userData._id,
      title,
      description,
      image,
      price,
      fee,
    };

    Axios.post("/api/product/addProduct", variables).then((response) => {
      if (response.data.success) {
        alert("Product Successfully Uploaded");
        props.history.push("/");
      } else {
        alert("Failed to upload Product");
      }
    });
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}>Add Product</Title>
      </div>

      <Form onSubmit={onSubmit} className="add-product">
        <label>Title</label>
        <Input onChange={(e) => setTitle(e.target.value)} value={title} />
        <label>Description</label>
        <TextArea
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <label>Image URL</label>
        <Input onChange={(e) => setImage(e.target.value)} value={image} />
        <label>Price</label>
        <Input
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          type="number"
        />
        <label>Fee</label>
        <Input
          onChange={(e) => setFee(e.target.value)}
          value={fee}
          type="number"
        />
        <Button onClick={onSubmit}>Submit</Button>
      </Form>
    </div>
  );
};

export default AddProductPage;
