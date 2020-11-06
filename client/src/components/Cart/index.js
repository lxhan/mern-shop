import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  getCartItems,
  removeCartItem,
  onSuccessBuy,
} from "../../store/actions/user";
import Items from "./Items";
import { Result, Empty, Button } from "antd";

const CartPage = (props) => {
  const dispatch = useDispatch();
  const [total, setTotal] = useState(0);
  const [showTotal, setShowTotal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const cartItems = [];
    if (props.user.userData && props.user.userData.cart) {
      if (props.user.userData.cart.length > 0) {
        props.user.userData.cart.forEach((item) => {
          cartItems.push(item.id);
        });
        dispatch(getCartItems(cartItems, props.user.userData.cart)).then(
          (response) => {
            if (response.payload.length > 0) {
              calculateTotal(response.payload);
            }
          }
        );
      }
    }
  }, [props.user.userData, dispatch]);

  const calculateTotal = (cartDetail) => {
    let total = 0;

    cartDetail.map((item) => {
      return (total +=
        (parseInt(item.price) + parseInt(item.fee)) * item.quantity);
    });

    setTotal(total);
    setShowTotal(true);
  };

  const removeFromCart = (productId) => {
    dispatch(removeCartItem(productId)).then((response) => {
      if (response.payload.cartDetail.length <= 0) {
        setShowTotal(false);
      } else {
        calculateTotal(response.payload.cartDetail);
      }
    });
  };

  const transactionSuccess = (data) => {
    dispatch(
      onSuccessBuy({
        cartDetail: props.user.cartDetail,
      })
    ).then((response) => {
      if (response.payload.success) {
        setShowSuccess(true);
        setShowTotal(false);
      }
    });
  };

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h1>Cart</h1>
      <div>
        <Items products={props.user.cartDetail} removeItem={removeFromCart} />

        {showTotal ? (
          <div style={{ marginTop: "3rem" }}>
            <h2>Total amount: {total} </h2>
          </div>
        ) : showSuccess ? (
          <Result status="success" title="Success" />
        ) : (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Empty description="Cart is empty" />
          </div>
        )}
      </div>

      {showTotal && (
        <Button type="primary" onClick={transactionSuccess}>
          Buy
        </Button>
      )}
    </div>
  );
};

export default CartPage;
