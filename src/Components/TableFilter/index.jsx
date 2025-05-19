import styles from "./Table.module.css"
import products from "../../database"
import { Link } from "react-router-dom"


export default function TableFilter() {
  return (
    <>
      <div className={styles.contentTable}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>Itens acabando</th>
              <th>Quatidade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {products.map((p) => {
              if (p.quantity <= 10) {
                return (
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
                      </div>
                    </td>
                  </tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
