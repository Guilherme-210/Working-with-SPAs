import styles from "./products.module.css"
import { Link } from "react-router-dom"
import {
  getProducts,
  deleteProduct,
  addToCart,
} from "../../utils/localStorageUtils.js"
import { useEffect, useState } from "react"

export default function ProductsPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const storedProducts = getProducts()
    setProducts(storedProducts)
  }, [])

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Tem certeza que quer deletar?")
    if (confirmDelete) {
      deleteProduct(id)
      setProducts(getProducts())
    }
  }

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
          {products.length === 0 ? (
            <p className={styles.emptyMessage}>Nenhum produto cadastrado 😕</p>
          ) : (
            <Table
              products={products}
              onDelete={handleDelete}
              onBuy={(product) => {
                addToCart(product)
                // alert(`🛒 ${product.name} foi adicionado ao carrinho!`)
              }}
            />
          )}
        </section>
      </div>
    </>
  )
}

export function Table({ products, onDelete, onBuy }) {
  return (
    <>
      <div className={styles.contentTable}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th>Id</th>
              <th>Nome</th>
              <th>Em Estoque</th>
              <th>Categoria</th>
              <th>modificado</th>
              <th></th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.quantity}</td>
                <td>{p.category}</td>
                <td>{p.createdAt}</td>
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
                      <button type="button" className={styles.viewToCartButton}>
                        <ion-icon name="pencil-outline"></ion-icon>
                      </button>
                    </Link>
                  </span>
                  <span>
                    <button
                      type="button"
                      className={styles.removeToCartButton}
                      onClick={() => onDelete(p.id)}
                    >
                      <ion-icon name="trash-bin-outline"></ion-icon>
                    </button>
                  </span>
                  <span>
                    <button
                      type="button"
                      className={styles.addToCartButton}
                      onClick={() => onBuy(p)}
                    >
                      <ion-icon name="cart-outline"></ion-icon>
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
