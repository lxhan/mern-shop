import React from "react";
import { Menu, Badge } from "antd";
import axios from "axios";
import { NavLink, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const logoutHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      if (response.status === 200) {
        history.push("/login");
      } else {
        alert("Log Out Failed");
      }
    });
  };
  return (
    <nav style={{ position: "fixed", zIndex: 5, width: "100%" }}>
      {user.userData && !user.userData.isAuth ? (
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="mail">
            <NavLink to="/login">Signin</NavLink>
          </Menu.Item>
          <Menu.Item key="app">
            <NavLink to="/register">Signup</NavLink>
          </Menu.Item>
        </Menu>
      ) : (
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="history">
            <NavLink to="/history">History</NavLink>
          </Menu.Item>

          <Menu.Item key="add">
            <NavLink to="/product/add">Add Product</NavLink>
          </Menu.Item>

          <Menu.Item key="cart">
            <Badge count={user.userData && user.userData.cart.length}>
              <NavLink to="/user/cart">Cart</NavLink>
            </Badge>
          </Menu.Item>

          <Menu.Item key="logout">
            <a href="//#endregion" onClick={logoutHandler}>
              Logout
            </a>
          </Menu.Item>
        </Menu>
      )}
    </nav>
  );
};

export default NavBar;
