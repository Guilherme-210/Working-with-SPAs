export function saveProducts(products) {
  localStorage.setItem("products", JSON.stringify(products))
}

export function getProducts() {
  return JSON.parse(localStorage.getItem("products")) || []
}

export function addProduct(product) {
  const products = getProducts()
  const updated = [...products, product]
  saveProducts(updated)
}
