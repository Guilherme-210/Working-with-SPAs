import { getProducts } from "../utils/localStorageUtils.js"

export default function LoadProduct({ params }) {
  const { id } = params

  if (!id) {
    throw new Response(
      JSON.stringify({
        message: "ID do produto não informado.",
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    )
  }

  const products = getProducts()
  const product = products.find((p) => String(p.id) === String(id))

  if (!product) {
    throw new Response(
      JSON.stringify({
        message: "Produto não encontrado.",
      }),
      {
        status: 404,
        headers: { "Content-Type": "application/json" },
      }
    )
  }

  return product
}
