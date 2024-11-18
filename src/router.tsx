import { createBrowserRouter } from "react-router-dom";
import { Cart, Home, NotFound } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/cart",
        element: <Cart />
    },
    {
        path: "*",
        element: <NotFound />
    }
])
