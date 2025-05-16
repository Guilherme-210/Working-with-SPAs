import styles from "./products.module.css"
import Products from "../../database.js"

export default function ProductsPage() {
  return (
    <main className={styles.main}>
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
                <button className={styles.viewDetailsButton}>
                  Ver Detalhes
                </button>
                <button className={styles.addToCartButton}>
                  Adicionar ao Carrinho
                </button>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  )
}
