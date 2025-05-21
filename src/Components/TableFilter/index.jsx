import { useState } from "react"
import styles from "./Table.module.css"
import { Link } from "react-router-dom"

export default function TableFilter({ products, onBuy }) {
  const [filterQuantity, setFilterQuantity] = useState(0)

  const filteredProducts = products.filter((p) => {
    const quantityNumber = Number(filterQuantity)
    return filterQuantity !== "" && p.quantity <= quantityNumber
  })

  return (
    <>
      <div className={styles.contentTable}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>Itens acabando</th>
              <th>
                <label htmlFor="filterQuantity">Quantidade</label>{" "}
                <input
                  type="number"
                  name="filterQuantity"
                  className={styles.filterQuantity}
                  id="filterQuantity"
                  value={filterQuantity}
                  onChange={(ev) => setFilterQuantity(ev.target.value)}
                />
              </th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {filteredProducts.length === 0 ? (
              <tr>
                <td
                  colSpan="3"
                  style={{
                    textAlign: "center",
                    padding: "1rem",
                    color: "#aaa",
                  }}
                >
                  Nenhum item com estoque menor ou igual a {filterQuantity || 0}
                </td>
              </tr>
            ) : (
              filteredProducts.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.quantity}</td>
                  <td>
                    <div className={styles.buttons}>
                      <Link to={`/products/${p.id}`}>
                        <button type="button" className={styles.button}>
                          ver
                        </button>
                      </Link>
                      <Link to={`/products/edit/${p.id}`}>
                        <button type="button" className={styles.button}>
                          <ion-icon name="pencil-outline"></ion-icon>
                        </button>
                      </Link>
                      <button
                        type="button"
                        className={styles.addToCartButton}
                        onClick={() => onBuy(p)}
                      >
                        <ion-icon name="cart-outline"></ion-icon>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}
