import { RouterProvider } from "react-router-dom"
import router from "./router"
import "./App.css"
import { useEffect } from "react"
import productsFromFile from "./utils/database.js"
import { getProducts, saveProducts } from "./utils/localStorageUtils.js"

function App() {
  useEffect(() => {
    const storedProducts = getProducts()

    if (storedProducts.length === 0) {
      saveProducts(productsFromFile)
      console.log("Produtos carregados no localStorage pela primeira vez! 🚀")
    }
  }, [])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
