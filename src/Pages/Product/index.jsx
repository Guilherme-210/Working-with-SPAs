import { Link, useNavigate, useLoaderData } from "react-router-dom"
import styles from "./product.module.css"
import { deleteProduct } from "../../utils/localStorageUtils"
import { addToCart } from "../../utils/localStorageUtils"

export default function Product() {
  const product = useLoaderData()
  const navigate = useNavigate()

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja excluir este produto?"
    )
    if (confirmDelete) {
      deleteProduct(product.id)
      navigate("/products")
    }
  }

  const handleBuy = () => {
    addToCart(product)
    alert("Produto adicionado ao carrinho! 🛒")
  }

  return (
    <>
      <div className={styles.container}>
        <section className={styles.productCard}>
          <h2 className={styles.title}>{product.name}</h2>

          <img
            className={styles.image}
            src={product.image}
            alt={product.name}
          />

          <div className={styles.contentDescription}>
            <div className={styles.descriptionBox}>
              <div className={styles.description}>
                <p>Categoria: {product.category}</p>
              </div>
              <div className={styles.description}>
                <p>Quantidade em estoque: {product.quantity}</p>
              </div>
              <div className={styles.description}>
                <p className={styles.price}>
                  Preço: R$ {product.price.toFixed(2)}
                </p>
              </div>
            </div>
            <p>{product.description}</p>
          </div>

          <div className={styles.containerButtons}>
            <Link to="/products">
              <button className={styles.viewDetailsButton}>Voltar</button>
            </Link>
            <Link to={`/products/edit/${product.id}`}>
              <button className={styles.addToCartButton}>Editar</button>
            </Link>
            <button className={styles.addToCartButton} onClick={handleBuy}>
              Comprar
            </button>
            <button className={styles.dellToCartButton} onClick={handleDelete}>
              Excluir
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
