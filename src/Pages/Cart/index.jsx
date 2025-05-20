import styles from "./cart.module.css"
import { getCartItems, removeFromCart } from "../../utils/localStorageUtils"
import { useEffect, useState } from "react"

export default function Cart() {
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    setCartItems(getCartItems())
  }, [])

  const handleRemove = (id) => {
    removeFromCart(id)
    setCartItems(getCartItems())
  }

  const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.price), 0)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Carrinho</h1>
      <p className={styles.description}>
        Aqui você pode revisar os produtos que adicionou ao carrinho.
      </p>
      <section>
        {cartItems.length === 0 ? (
          <p className={styles.description}>Seu carrinho está vazio 🛒</p>
        ) : (
          <ul className={styles.productList}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.productCard}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.productImage}
                />
                <div className={styles.productData}>
                  <h4>{item.name}</h4>
                  <span>R$ {Number(item.price).toFixed(2)}</span>
                  <button
                    className={styles.removeButton}
                    onClick={() => handleRemove(item.id)}
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>
      <section>
        <div className={styles.total}>
          <h2>Total: R$ {totalPrice.toFixed(2)}</h2>
        </div>
        <button className={styles.button}>Finalizar Compra</button>
      </section>
    </div>
  )
}