import { createBrowserRouter } from "react-router-dom";
import { Cart, Home, Login, Products } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/products",
        element: <Products />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "/login",
        element: <Login />
    }
])