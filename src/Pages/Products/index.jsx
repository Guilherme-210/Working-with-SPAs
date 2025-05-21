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
  const [selectProduct, setSelectProduct] = useState(null)

  const handleViewProduct = (product) => {
    setSelectProduct(product)
  }

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
              onView={handleViewProduct}
            />
          )}
        </section>
      </div>
      {selectProduct && (
        <ProductModal
          product={selectProduct}
          onClose={() => setSelectProduct(null)}
        />
      )}
    </>
  )
}

export function Table({ products, onDelete, onBuy, onView }) {
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
                    <button
                      type="button"
                      className={styles.viewDetailsButton}
                      onClick={() => onView(p)}
                    >
                      Ver
                    </button>
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

export function ProductModal({ product, onClose }) {
  if (!product) return null

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este produto?"
    )
    if (confirmDelete) {
      deleteProduct(product.id)
      onClose()
      window.location.reload(ProductsPage)
    }
  }

  const handleBuy = () => {
    addToCart(product)
    alert("Produto adicionado ao carrinho! 🛒")
  }

  return (
    <>
      <div className={styles.modalBackdrop}>
        <div className={styles.containerModal}>
          <button className={styles.closeModalButton} onClick={() => onClose()}>
            &times;
          </button>
          <section className={styles.productCardModal}>
            <h2 className={styles.titleModal}>{product.name}</h2>

            <img
              className={styles.imageModal}
              src={product.image}
              alt={product.name}
            />

            <div className={styles.contentDescriptionModal}>
              <div className={styles.descriptionBoxModal}>
                <div className={styles.descriptionModal}>
                  <p>Categoria: {product.category}</p>
                </div>
                <div className={styles.descriptionModal}>
                  <p>Quantidade em estoque: {product.quantity}</p>
                </div>
                <div className={styles.descriptionModal}>
                  <p className={styles.priceModal}>
                    Preço: R$ {product.price.toFixed(2)}
                  </p>
                </div>
              </div>
              <p>{product.description}</p>
            </div>

            <div className={styles.containerButtonsModal}>
              <Link to={`/products/edit/${product.id}`}>
                <button className={styles.addToCartButtonModal}>Editar</button>
              </Link>
              <button
                className={styles.addToCartButtonModal}
                onClick={handleBuy}
              >
                Comprar
              </button>
              <button
                className={styles.dellToCartButtonModal}
                onClick={handleDelete}
              >
                Excluir
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
