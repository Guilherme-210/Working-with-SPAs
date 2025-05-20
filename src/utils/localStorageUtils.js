const PRODUCTS_KEY = "products"
const CART_KEY = "cart"

// Produtos
export function saveProducts(products) {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products))
}

export function getProducts() {
  return JSON.parse(localStorage.getItem(PRODUCTS_KEY)) || []
}

export function addProduct(product) {
  const products = getProducts()
  saveProducts([...products, product])
}

export function deleteProduct(id) {
  const products = getProducts().filter((p) => p.id !== id)
  saveProducts(products)
}

export function setProducts(products) {
  saveProducts(products) 
}

export function updateProduct(updatedProduct) {
  const products = getProducts()
  const idx = products.findIndex((p) => p.id === updatedProduct.id)
  if (idx !== -1) {
    products[idx] = updatedProduct
    saveProducts(products)
  }
}

// Carrinho
export function getCartItems() {
  return JSON.parse(localStorage.getItem(CART_KEY)) || []
}

export function setCartItems(items) {
  localStorage.setItem(CART_KEY, JSON.stringify(items))
}

export function addToCart(product) {
  const cart = getCartItems()
  setCartItems([...cart, product])
}

export function removeFromCart(productId) {
  const cart = getCartItems().filter((item) => item.id !== productId)
  setCartItems(cart)
}
