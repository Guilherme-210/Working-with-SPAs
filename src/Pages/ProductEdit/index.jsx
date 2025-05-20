import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getProducts, updateProduct } from "../../utils/localStorageUtils"
import styles from "./product.module.css"

export default function ProductEdit() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [editName, setEditName] = useState("")
  const [editCategory, setEditCategory] = useState("")
  const [editQuantity, setEditQuantity] = useState(0)
  const [editPrice, setEditPrice] = useState(0)
  const [editDescription, setEditDescription] = useState("")

  useEffect(() => {
    const products = getProducts()
    const found = products.find((p) => String(p.id) === String(productId))
    if (found) {
      setProduct(found)
      setEditName(found.name)
      setEditCategory(found.category)
      setEditQuantity(found.quantity)
      setEditPrice(found.price)
      setEditDescription(found.description)
    }
  }, [productId])

  const handleSave = () => {
    if (!product) return
    updateProduct({
      ...product,
      name: editName,
      category: editCategory,
      quantity: Number(editQuantity),
      price: Number(editPrice),
      description: editDescription,
    })
    navigate("/products")
  }

  return (
    <>
      <section className={styles.productCard}>
        <h2 className={styles.title}>{product.name}</h2>

        <img className={styles.image} src={product.image} alt={product.name} />

        <div className={styles.inputsBox}>
          <div className={styles.inputLabel}>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Qual vai ser o mono nome?"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
            />
          </div>
          <div className={styles.inputLabel}>
            <label htmlFor="category">Categoria:</label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Nova categoria"
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
            />
          </div>
          <div className={styles.inputLabel}>
            <label htmlFor="quantity">Quantidade:</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="Quantidade em estoque"
              value={editQuantity}
              onChange={(e) => setEditQuantity(e.target.value)}
            />
          </div>
          <div className={styles.inputLabel} id={styles.inputPrice}>
            <label htmlFor="price">Preço:</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Preço do produto"
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.textareaLabel}>
          <label htmlFor="description">Descrição do produto:</label>
          <textarea
            name="Description"
            id="description"
            placeholder="Nova descrição"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
          ></textarea>
        </div>

        <div className={styles.containerButtons}>
          <button className={styles.saveButton} onClick={handleSave}>
            Salvar
          </button>
        </div>
      </section>
    </>
  )
}
