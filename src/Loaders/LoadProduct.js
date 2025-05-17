import Products from "../database.js"

export default function LoadProduct({ params }) {
  const product = Products.find((p) => p.id === +params.productId)

  if (!product) {
    throw new Response("404 not found", { status: 404 })
  }

  return product
}
