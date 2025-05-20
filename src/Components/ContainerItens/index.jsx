import styles from "./containerItens.module.css"

export default function ContainerItens({ products }) {
  const totalItens = products.length
  const totalInventario = products.reduce((acc, item) => acc + item.quantity, 0)
  const itensAcabando = products.filter((p) => p.quantity <= 10).length

  const itensRecentes = products.filter((p) => {
    if (!p.createdAt) return false

    const [day, month, year] = p.createdAt.split("/")
    const createdAtDate = new Date(`${year}-${month}-${day}`)
    const now = new Date()
    const sevenDaysAgo = new Date(now)
    sevenDaysAgo.setDate(now.getDate() - 7)

    return createdAtDate >= sevenDaysAgo
  }).length

  return (
    <section className={styles.container}>
      <TotalItens title={"Diversidade de produtos"} amount={totalItens} />
      <TotalItens title={"Inventario total"} amount={totalInventario} />
      <TotalItens title={"Modificados a 7 dias"} amount={itensRecentes} />
      <TotalItens title={"Itens acabando"} amount={itensAcabando} />
    </section>
  )
}

export function TotalItens({ title, amount }) {
  return (
    <div className={styles.containerIten}>
      <span>{title}</span>
      <div>
        <p>{amount}</p>
      </div>
    </div>
  )
}
