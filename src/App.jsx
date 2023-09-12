// import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
 import Category from "./components/Category";
import OrderConfirmation from "./pages/orderConfirmation";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Basket from "./pages/Basket";
import RootLayout from "./pages/RootLayout";

function App(props) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [       
        { path: "/home", element: <Home /> },       
        { path: "/basket", element: <Basket /> },
        { path: "/orderConfirmation", element: <OrderConfirmation /> },
        { path: "/Checkout", element: <Checkout /> },
        { path: "/categories/:catId", element: <Category /> },
        { path: "/products/:id", element: <ProductDetails /> },
       
      ],
    },  
  ]);
 
  
  return (
    <>
      <RouterProvider router={router} />
    

      
      <Footer />
    </>
  );
}

export default App;
