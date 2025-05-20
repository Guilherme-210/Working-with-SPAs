import { createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home/index.jsx"
import Product from "./Pages/Product/index.jsx"
import ProductEdit from "./Pages/ProductEdit/index.jsx"
import Products from "./Pages/Products/index.jsx"
import NewProducts from "./Pages/NewProducts/index.jsx"
import Cart from "./Pages/Cart/index.jsx"
import Admin from "./Pages/Admin/index.jsx"
import RootLayout from "./Pages/RootLayout/index.jsx"
import LoadProduct from "./Loaders/LoadProduct.js"
import ProductBoundary from "./Error/Boundaries/ProductBoundary/index.jsx"

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
        path: "products/:id",
        element: <Product />, 
        loader: LoadProduct,
        errorElement: <ProductBoundary />,
      },
      {
        path: "products/edit/:id",
        element: <ProductEdit />,
        loader: LoadProduct,
        errorElement: <ProductBoundary />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "newProducts",
        element: <NewProducts />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
])

export default router
