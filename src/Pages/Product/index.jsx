import { Link, useParams } from "react-router-dom"
import Products from "../../database.js"
import styles from "./product.module.css"

export default function Product() {
  const { productId } = useParams()

  const product = Products.find((p) => p.id === +productId)
  // O sinal "+" antes do "productId" e usado com o mesmo objetivo que o nunber() e o parseFloat()

  if (!product) {
    return <h2>Oops... Produto não foi encontrado (error: 404 Not Found)</h2>
  }
  
  return (
    <>
      <div className={styles.container}>
        <section className={styles.productCard}>
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <span>R$ {product.price.toFixed(2)}</span>

          <Link to="/products">
            <button className={styles.viewDetailsButton}>Voltar</button>
          </Link>
          <button className={styles.addToCartButton}>Comprar</button>
        </section>
      </div>
    </>
  )
}
