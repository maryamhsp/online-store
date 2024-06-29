import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AddToCart } from "./Cart.js";
import { UseSetCart } from "./UseSetCart.js";

export const List = () => {
  const [data, setData] = useState([]);
  const [cart, setCart] = UseSetCart();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const jsondata = await response.json();
      setData(jsondata.products);
    };
    fetchData();
  }, []);

  const ListItems = data.map((value) => {
    return (
      <div key={value.id} className="border rounded-5 p-3">
        <br></br>
        <Link to="/store/:Id" className="text-decoration-none">
          <h5>{value.title}</h5>
        </Link>
        <p>Price: {value.price}</p>
        <p>Ratting: {value.rating}</p>
        <button onClick={() => AddToCart(value, setCart)}>AddToCart</button>
        <img src={value.thumbnail} alt="" />
      </div>
    );
  });

  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-4 ">
        <ul>{ListItems}</ul>
      </div>
      <div className="col-4"></div>
    </div>
  );
};
export const StorePage = () => {
  return (
    <div>
      <List />
    </div>
  );
};
