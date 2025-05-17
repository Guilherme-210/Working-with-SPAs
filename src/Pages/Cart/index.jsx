import styles from "./cart.module.css"
import Products from "../../database"

export default function Cart() {
  const totalPrice = Products.reduce(
    (total, item) => total + item.price,
    0
  ).toFixed(2) 

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Carrinho</h1>
        <p className={styles.description}>
          Aqui você pode revisar os produtos que adicionou ao carrinho.
        </p>
        <section>
          <ul className={styles.productList}>
            {Products.map((Product) => (
              <li key={Product.id} className={styles.productCard}>
                <img
                  src={Product.image}
                  alt={Product.name}
                  className={styles.productImage}
                />
                <div className={styles.productData}>
                  <h4>{Product.name}</h4>
                  <span>R$ {Product.price.toFixed(2)}</span>
                  <button className={styles.removeButton}>Remover</button>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <div className={styles.total}>
            <h2>Total: R$ {totalPrice}</h2>
          </div>
          <button className={styles.button}>Finalizar Compra</button>
        </section>
      </div>
    </>
  )
}
