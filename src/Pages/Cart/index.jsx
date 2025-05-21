import styles from "./cart.module.css"
import { getCartItems, removeFromCart } from "../../utils/localStorageUtils"
import { useEffect, useState } from "react"

export default function Cart() {
  const [cartItems, setCartItems] = useState([])
  const [removedMsg, setRemovedMsg] = useState("")

  useEffect(() => {
    setCartItems(getCartItems())
  }, [])

  const handleRemove = (id) => {
    removeFromCart(id)
    setCartItems(getCartItems())
    setRemovedMsg("Produto removido do carrinho!")
    setTimeout(() => setRemovedMsg(""), 1500)
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
  const totalPrice = groupedList.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  )
  
  const formatCurrency = (value) =>
    new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Carrinho</h1>
      <p className={styles.description}>
        Aqui você pode revisar os produtos que adicionou ao carrinho.
      </p>
      <div>
        {removedMsg && <p className={styles.removedMsg}>{removedMsg}</p>}
      </div>
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
                    <p>Preço unitário: R$ {formatCurrency(item.price)}</p>
                    <p>
                      Total:{" "}
                      {formatCurrency(Number(item.price) * item.quantity)}
                    </p>
                  </span>
                  <button
                    className={styles.removeButton}
                    onClick={() => handleRemove(item.id)}
                    aria-label={`Remover ${item.name} do carrinho`}
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
          <h2>Total: {formatCurrency(totalPrice)}</h2>
        </div>
        <button
          className={styles.button}
          disabled={groupedList.length === 0}
          aria-disabled={groupedList.length === 0}
        >
          Finalizar Compra
        </button>
      </section>
    </div>
  )
}
