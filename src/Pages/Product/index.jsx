import { Link, useLoaderData } from "react-router-dom"
import styles from "./product.module.css"

export default function Product() {
  const product = useLoaderData()

  return (
    <>
      <div className={styles.container}>
        <section className={styles.productCard}>
          <h2 className={styles.title}>{product.name}</h2>

          <img
            className={styles.image}
            src={product.image}
            alt={product.name}
          />

          <div className={styles.contentDescription}>
            <div className={styles.descriptionBox}>
              <div className={styles.description}>
                <p>Categoria {product.category}</p>
              </div>
              <div className={styles.description}>
                <p>Quantidade em estoque: {product.quantity}</p>
              </div>
              <div className={styles.description}>
                <p className={styles.price}>
                  Preço: R$ {product.price.toFixed(2)}
                </p>
              </div>
            </div>
            <p>{product.description}</p>
          </div>

          <div className={styles.containerButtons}>
            <Link to="/products">
              <button className={styles.viewDetailsButton}>Voltar</button>
            </Link>
            <Link to={`/products/edit/${product.id}`}>
              <button className={styles.addToCartButton}>Editar</button>
            </Link>
            <button className={styles.addToCartButton}>Comprar</button>
            <button className={styles.dellToCartButton}>Excluir</button>
          </div>
        </section>
      </div>
    </>
  )
}
