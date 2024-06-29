import React from "react";

export const Header = () => {
  return (
    <div>
      <div>
        <div
          className="card rounded-4 rounded-top-0 border-3"
          style={{ height: "40%" }}
        >
          <div className="row, card-header">
            <nav className="nav">
              <a className="nav-link active" aria-current="page" href="/">
                HomePage
              </a>
              <a className="nav-link" href="/store">
                StorePage
              </a>
              <a className="nav-link" href="/checkout">
                CheckOut
              </a>
              <form className="d-flex ms-auto " role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
              <a className="nav-link" href="myshoppingcart">
                {" "}
                MyShopCart
              </a>
            </nav>
          </div>
          <div className="card-body bg-light">
            <h4 className="card-title text-center py-3">ONLINE STORE</h4>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-6"> </div>
        <div className="col-5"></div>
        <div className="col-1"> </div>
      </div>
    </div>
  );
};
