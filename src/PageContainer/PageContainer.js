import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Body/Header";
import { Footer } from "./Body/Footer";

export const PageContainer = () => {
  return (
    <div>
      <Header />
      <div>
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};
