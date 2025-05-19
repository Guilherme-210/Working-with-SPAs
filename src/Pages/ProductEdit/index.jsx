import { useLoaderData } from "react-router-dom"
import styles from "./product.module.css"
import { useState } from "react"

export default function ProductEdit() {
  const product = useLoaderData()
  const [editCategory, setEditCategory] = useState(product.category)
  const [editQuantity, setEditQuantity] = useState(product.quantity)
  const [editPrice, setEditPrice] = useState(product.price.toFixed(2))
  const [editDescription, setEditDescription] = useState(product.description)

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

          <div className={styles.contentInput}>
            <div className={styles.inputsBox}>
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
            <button className={styles.saveButton}>Salvar</button>
          </div>
        </section>
      </div>
    </>
  )
}
