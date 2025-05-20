import { Outlet } from "react-router-dom"
import Footer from "../../Components/Footer"
import Header from "../../Components/Header"

export default function RootLayout() {
  return (
    <>
      <Header
        Title="Loja de Produtos"
        Rotas={[
          { name: "Home", path: "/" },
          { name: "Produtos", path: "/products" },
          { name: "Carrinho", path: "/cart" },
          { name: "Cadastrar produto", path: "/newProducts" },
          { name: "Admin", path: "/admin" },
        ]}
      />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}
