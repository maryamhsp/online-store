import React, { useEffect, useState } from "react";
import { AddToCart, RemoveFromCart } from "./Cart.js";
import { UseSetCart } from "./UseSetCart.js";

export const ShoppingCartPage = () => {
  const [cart, setCart] = UseSetCart();

  const CartList = cart.map((value) => {
    return (
      <tr key={value.id}>
        <td>{value.name}</td>
        <td>{value.price}</td>
        <td>
          <img src={value.image} width={"40px"} height={"40px"} />{" "}
        </td>
        <td>{value.quantity}</td>
        <td>{value.totalprice}</td>
        <td>
          <button
            className="btn btn-outline-success"
            onClick={() => AddToCart(value, setCart)}
          >
            +
          </button>{" "}
          <button
            className="btn btn-outline-danger"
            onClick={() => RemoveFromCart(value, setCart)}
          >
            -
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <table className="table table-striped">
        <tr>
          <th>Title</th>
          <th>Price</th>
          <th>Picture</th>
          <th>Quantity</th>
          <th>Total Price</th>
          <th>ADD REMOVE</th>
        </tr>
        {CartList}
      </table>
    </div>
  );
};
