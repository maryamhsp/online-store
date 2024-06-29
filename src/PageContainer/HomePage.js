import React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1>Hi This is main page</h1>
      <button>
        <Link className="text-decoration-none" to="/store">
          Go To Store
        </Link>
      </button>
    </div>
  );
};
