import styles from "./NewProducts.module.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { addProduct } from "../../utils/localStorageUtils.js"

export default function NewProducts() {
  const [formData, setFormData] = useState({
    name: "",
    quantity: 0,
    price: 0,
    category: "",
    description: "",
    image: "",
  })

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const newProduct = {
      id: Date.now(),
      ...formData,
      quantity: Number(formData.quantity),
      price: parseFloat(formData.price),
    }

    addProduct(newProduct)

    setFormData({
      name: "",
      quantity: "",
      price: "",
      category: "",
      description: "",
      image: "",
    })
  }

  return (
    <>
      <div className={styles.container}>
        <section>
          <h1 className={styles.title}>Adicionar Produtos</h1>
          <div className={styles.rotesButtons}>
            <Link to="/products">
              <button className={styles.productsButton}>Todos os Itens</button>
            </Link>
            <Link to="/newProducts">
              <button className={styles.newProductsButton}>Novo Item</button>
            </Link>
          </div>
        </section>

        <section>
          <form onSubmit={handleSubmit}>
            <div className={styles.contentInputs}>
              <div className={styles.divInput}>
                <label htmlFor="name"> Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nome do produto"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.divInput}>
                <label htmlFor="quantity"> Quantidade:</label>
                <input
                  type="number"
                  min={1}
                  id="quantity"
                  name="quantity"
                  placeholder="Quantidade de produtos em estoque"
                  value={formData.quantity}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.divInput}>
                <label htmlFor="price"> Preço:</label>
                <input
                  type="number"
                  id="price"
                  name="price"
                  min={1.0}
                  step="0.01"
                  placeholder="Digite o valor"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.divInput}>
                <label htmlFor="category"> Categoria:</label>
                <input
                  type="text"
                  id="category"
                  name="category"
                  placeholder="Categoria do produto"
                  value={formData.category}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.divInput}>
              <label htmlFor="image">Imagem do Produto:</label>
              <input
                type="text"
                id="image"
                name="image"
                placeholder="imagem-ptoduto.*"
                value={formData.image}
                onChange={handleChange}
              />
            </div>

            <div className={styles.divTextarea}>
              <label htmlFor="description">Descrição do produto</label>
              <textarea
                name="description"
                id="description"
                rows="5"
                placeholder="Descrilção do produto"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div className={styles.formButtons}>
              <button type="submit">salvar</button>
              <button
                type="reset"
                onClick={() =>
                  setFormData({
                    name: "",
                    quantity: 1,
                    price: 1,
                    category: "",
                    description: "",
                  })
                }
              >
                apagar
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}
