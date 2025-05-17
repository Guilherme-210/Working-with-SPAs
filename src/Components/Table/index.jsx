import styles from "./Table.module.css"
import products from "../../database"

export default function Table() {
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
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>
                  <button type="button" className={styles.button}>
                    ver
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
