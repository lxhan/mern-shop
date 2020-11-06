import React from "react";
import { Button } from "antd";

const Items = (props) => {
  const renderItems = () =>
    props.products &&
    props.products.map((product) => (
      <tr key={product._id}>
        <td>
          <img style={{ width: "70px" }} alt="product" src={product.image} />
        </td>
        <td>{product.quantity} EA</td>
        <td>{product.price} </td>
        <td>{product.fee} </td>
        <td>
          <Button danger onClick={() => props.removeItem(product._id)}>
            Remove
          </Button>
        </td>
      </tr>
    ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Quantity</th>
            <th>Product Price</th>
            <th>Product Fee</th>
            <th>Remove from Cart</th>
          </tr>
        </thead>
        <tbody>{renderItems()}</tbody>
      </table>
    </div>
  );
};

export default Items;
