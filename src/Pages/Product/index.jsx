import { Link, useLoaderData } from "react-router-dom"
import styles from "./product.module.css"

export default function Product() {
  const product = useLoaderData()  
  
  // throw new Error("error qualquer");
  

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
