import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import styles from "./AdminHome.module.css"

export default function AdminHome() {
  return (
    <>
      <Header
        Title="Admin"
        Rotas={[
          { name: "Home", path: "/" },
          { name: "Produtos", path: "/products" },
          { name: "Carrinho", path: "/cart" },
        ]}
      />
      <main>
        <div className={styles.container}>
          <h1 className={styles.title}>Bem-vindo à área administrativa!</h1>
          <p className={styles.description}>
            Aqui você pode gerenciar os produtos e pedidos da loja.
          </p>
          <button className={styles.button}>Gerenciar Produtos</button>
        </div>
      </main>
      <Footer />
    </>
  )
}

