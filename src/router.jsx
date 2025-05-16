import { createBrowserRouter } from "react-router-dom"
import Home from "./Pages/Home/index.jsx"
import Products from "./Pages/Products/index.jsx"
import Cart from "./Pages/Cart/index.jsx"
import Admin from "./Pages/Admin/index.jsx"
import Header from "./Components/Header/index.jsx"
import Footer from "./Components/Footer/index.jsx"

const router = createBrowserRouter([
  
  {
    path: "/",
    element: (
      <>
        <Header
          Title="Loja de Produtos"
          Rotas={[
            { name: "Produtos", path: "/products" },
            { name: "Carrinho", path: "/cart" },
            { name: "Admin", path: "/admin" },
          ]}
        />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/products",
    element: (
      <>
        <Header
          Title="Loja de Produtos"
          Rotas={[
            { name: "Home", path: "/" },
            { name: "Carrinho", path: "/cart" },
            { name: "Admin", path: "/admin" },
          ]}
        />
        <Products />
        <Footer />
      </>
    ),
    children: [],
  },
  {
    path: "/cart",
    element: (
      <>
        <Header
          Title="Carrinho"
          Rotas={[
            { name: "Home", path: "/" },
            { name: "Produtos", path: "/products" },
            { name: "Admin", path: "/admin" },
          ]}
        />
        <Cart />
        <Footer />
      </>
    ),
  },
  {
    path: "/admin",
    element: (
      <>
        <Header
          Title="Admin"
          Rotas={[
            { name: "Home", path: "/" },
            { name: "Produtos", path: "/products" },
            { name: "Carrinho", path: "/cart" },
          ]}
        />
        <Admin />
        <Footer />
      </>
    ),
  },
])

export default router
