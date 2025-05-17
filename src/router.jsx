import { createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home/index.jsx"
import Products from "./Pages/Products/index.jsx"
import Product from "./Pages/Product/index.jsx"
import Cart from "./Pages/Cart/index.jsx"
import Admin from "./Pages/Admin/index.jsx"
import RootLayout from "./Pages/RootLayout/index.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <Product />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
])

export default router
