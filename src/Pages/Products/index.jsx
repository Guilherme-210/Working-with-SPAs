import styles from "./products.module.css"
import Products from "../../database.js"
import { Link } from "react-router-dom"

export default function ProductsPage() {

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Produtos</h1>
        <p className={styles.description}>
          Aqui você pode ver todos os produtos disponíveis na loja.
        </p>
        <section>
          <ul className={styles.productList}>
            {Products.map((product) => (
              <li key={product.id} className={styles.productCard}>
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <span>R$ {product.price.toFixed(2)}</span>
                <Link to={`/products/${product.id}`}>
                  <button className={styles.viewDetailsButton}>
                    Ver Detalhes
                  </button>
                </Link>
                <button className={styles.addToCartButton}>
                  Adicionar ao Carrinho
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  )
}
