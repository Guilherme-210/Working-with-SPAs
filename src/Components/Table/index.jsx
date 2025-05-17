import styles from "./Table.module.css"

const products = [
  {
    id: 1,
    name: "7 Wonders",
    category: "Tabuleiro",
    price: 199.9,
    quantity: 11,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis: Card Game",
    category: "Cartas",
    price: 149.99,
    quantity: 40,
  },
  {
    id: 3,
    name: "Catan",
    category: "Tabuleiro",
    price: 229.0,
    quantity: 3,
  },
  {
    id: 4,
    name: "Dixit",
    category: "Família",
    price: 169.5,
    quantity: 8,
  },
  {
    id: 5,
    name: "Uno",
    category: "Cartas",
    price: 29.9,
    quantity: 20,
  },
  {
    id: 6,
    name: "7 Wonders",
    category: "Tabuleiro",
    price: 199.9,
    quantity: 11,
  },
  {
    id: 7,
    name: "O Senhor dos Anéis: Card Game",
    category: "Cartas",
    price: 149.99,
    quantity: 40,
  },
  {
    id: 8,
    name: "Catan",
    category: "Tabuleiro",
    price: 229.0,
    quantity: 3,
  },
  {
    id: 9,
    name: "Dixit",
    category: "Família",
    price: 169.5,
    quantity: 8,
  },
  {
    id: 10,
    name: "Uno",
    category: "Cartas",
    price: 29.9,
    quantity: 20,
  },
  {
    id: 11,
    name: "7 Wonders",
    category: "Tabuleiro",
    price: 199.9,
    quantity: 11,
  },
  {
    id: 12,
    name: "O Senhor dos Anéis: Card Game",
    category: "Cartas",
    price: 149.99,
    quantity: 40,
  },
  {
    id: 13,
    name: "Catan",
    category: "Tabuleiro",
    price: 229.0,
    quantity: 3,
  },
  {
    id: 14,
    name: "Dixit",
    category: "Família",
    price: 169.5,
    quantity: 8,
  },
  {
    id: 15,
    name: "Uno",
    category: "Cartas",
    price: 29.9,
    quantity: 20,
  },
]

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
