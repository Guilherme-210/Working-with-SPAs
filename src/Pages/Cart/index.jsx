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

  // Agrupando os produtos iguais (por nome e preço)
  const groupedItems = cartItems.reduce((acc, item) => {
    const key = `${item.name}-${item.price}`
    if (!acc[key]) {
      acc[key] = { ...item, quantity: 1 }
    } else {
      acc[key].quantity += 1
    }
    return acc
  }, {})

  const groupedList = Object.values(groupedItems)

  // Preço total somado de todos os produtos
  const totalPrice = groupedList.reduce((acc, item) => {
    return acc + Number(item.price) * item.quantity
  }, 0)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Carrinho</h1>
      <p className={styles.description}>
        Aqui você pode revisar os produtos que adicionou ao carrinho.
      </p>
      <section>
        {groupedList.length === 0 ? (
          <p className={styles.description}>Seu carrinho está vazio 🛒</p>
        ) : (
          <ul className={styles.productList}>
            {groupedList.map((item) => (
              <li
                key={`${item.name}-${item.price}`}
                className={styles.productCard}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.productImage}
                />
                <div className={styles.productData}>
                  <h4>{item.name}</h4>
                  <span>
                    <p>Quantidade: {item.quantity}</p>
                    <p>Preço unitário: R$ {Number(item.price).toFixed(2)}</p>
                    <p>
                      Total: R${" "}
                      {(Number(item.price) * item.quantity).toFixed(2)}
                    </p>
                  </span>
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
