import React from "react";

export const Footer = () => {
  return (
    <div
      style={{
        width: "100%",
        bottom: "0",
        position: "fixed",
      }}
    >
      <div className="card">
        <div className="card-footer ">
          <div className="p-3">
            <h5>Contact Us</h5>
            <p>Email: support@onlinestore.com</p>
            <p>Phone: +1(800)123-4567</p>
            <p>Address: 1234 Market St, Suite 500, San Francisco, CA 94103</p>
          </div>
        </div>
      </div>
    </div>
  );
};
