import Footer from "../../Components/Footer"
import Header from "../../Components/Header"
import styles from "./AdminHome.module.css"
import { Link } from "react-router-dom"
import { FaBoxOpen, FaShoppingCart, FaChartBar } from "react-icons/fa"

export default function AdminHome() {
  return (
    <>
      <Header
        Title="Painel Administrativo"
        Rotas={[
          { name: "Home", path: "/" },
          { name: "Produtos", path: "/products" },
          { name: "Carrinho", path: "/cart" },
          { name: "Cadastrar produto", path: "/newProducts" },
        ]}
      />
      <main>
        <div className={styles.container}>
          <h1 className={styles.title}>Bem-vindo à Área Administrativa 👋</h1>
          <p className={styles.description}>
            Aqui você gerencia <strong>produtos</strong>, acompanha o{" "}
            <strong>estoque</strong> e visualiza <strong>relatórios</strong> da
            loja.
          </p>

          <div className={styles.cardContainer}>
            <Link to="/products" className={styles.card}>
              <FaBoxOpen className={styles.icon} />
              <span>Gerenciar Produtos</span>
            </Link>

            <Link to="/cart" className={styles.card}>
              <FaShoppingCart className={styles.icon} />
              <span>Ver Carrinho</span>
            </Link>

            <Link to="/" className={styles.card}>
              <FaChartBar className={styles.icon} />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
