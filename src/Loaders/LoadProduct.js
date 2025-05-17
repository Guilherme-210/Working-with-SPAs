import Products from "../database.js"

export default function LoadProduct({ params }) {
  const { productId } = params

  // Verifica se o ID foi passado
  if (!productId) {
    throw new Response(JSON.stringify({
      message: "ID do produto não informado.",
    }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Converte e valida o ID
  const id = Number(productId)

  if (isNaN(id)) {
    throw new Response(JSON.stringify({
      message: "ID do produto inválido. Deve ser um número.",
    }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  // Busca o produto
  const product = Products.find((p) => p.id === id)

  if (!product) {
    throw new Response(JSON.stringify({
      message: "Produto não encontrado.",
    }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    })
  }

  return product
}
