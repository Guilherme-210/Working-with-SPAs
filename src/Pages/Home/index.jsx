import { useEffect, useState } from "react"
import ContainerItens from "../../Components/ContainerItens"
import ConteinerLists from "../../Components/ConteinerLists"
import styles from "./home.module.css"
import { getProducts } from "../../utils/localStorageUtils"

export default function Home() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const allProducts = getProducts()
    setProducts(allProducts)
  }, [])

  return (
    <div className={styles.container}>
      <ContainerItens products={products} />
      <ConteinerLists products={products} />
    </div>
  )
}
