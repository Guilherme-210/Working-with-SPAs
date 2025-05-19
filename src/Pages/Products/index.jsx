import styles from "./products.module.css"
import stylesTable from "../../Components/Table/Table.module.css"
import Products from "../../database.js"
import { Link } from "react-router-dom"

export default function ProductsPage() {
  return (
    <>
      <div className={styles.container}>
        <section>
          <h1 className={styles.title}>Produtos</h1>
          <div className={styles.rotesButtons}>
            <Link to="/products">
              <button className={styles.productsButton}>Todos os Itens</button>
            </Link>
            <Link to="/newProducts">
              <button className={styles.newProductsButton}>Novo Item</button>
            </Link>
          </div>
        </section>

        <section className={styles.productList}>
          <Table products={Products} />
        </section>
      </div>
    </>
  )
}

export function Table({ products }) {
  return (
    <>
      <div className={stylesTable.contentTable}>
        <table className={stylesTable.table}>
          <thead className={stylesTable.thead}>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Em Estoque</th>
              <th>Categoria</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody className={stylesTable.tbody}>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>{p.category}</td>
                <td className={styles.tdButtons}>
                  <span>
                    <Link to={`/products/${p.id}`}>
                      <button
                        type="button"
                        className={styles.viewDetailsButton}
                      >
                        Ver
                      </button>
                    </Link>
                  </span>
                  <span>
                    <Link to={`/products/edit/${p.id}`}>
                      <button type="button" className={styles.addToCartButton}>
                        <ion-icon name="pencil-outline"></ion-icon>
                      </button>
                    </Link>
                  </span>
                  <span>
                    <button type="button" className={styles.removeToCartButton}>
                      <ion-icon name="trash-bin-outline"></ion-icon>
                    </button>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
