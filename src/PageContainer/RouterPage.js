import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PageContainer } from "./PageContainer";
import { HomePage } from "./HomePage";
import { ErrorPage } from "./ErrorPage";
import { StorePage } from "./StorePage";
import { SingleProductPage } from "./SingleProductPage";
import { ShoppingCartPage } from "./ShoppingCartPage";
import { CheckOut } from "./CheckoutPage";

const x = createBrowserRouter([
  {
    path: "/",
    element: <PageContainer />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/store",
        element: <StorePage />,
      },
      {
        path: "/store/:Id",
        element: <SingleProductPage />,
      },
      {
        path: "/myshoppingcart",
        element: <ShoppingCartPage />,
      },
      {
        path: "/checkout",
        element: <CheckOut />,
      },
    ],
  },
]);

export const RouterPage = () => {
  return (
    <div>
      <RouterProvider router={x} />
    </div>
  );
};
