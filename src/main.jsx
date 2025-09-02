import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Shop from "./pages/ShopPage/Shop.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Product from "./pages/ProductPage/Product.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/RootLayout.jsx";
import Cart from "./pages/CartPage/Cart.jsx";
const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/shop", element: <Shop /> },
      { path: "/shop/product/:id/:productName", element: <Product /> },
      { path: "/cart", element: <Cart /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
