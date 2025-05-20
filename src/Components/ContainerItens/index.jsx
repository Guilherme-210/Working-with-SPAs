import styles from "./containerItens.module.css"

export default function ContainerItens({ products }) {
  const totalItens = products.length
  const totalInventario = products.reduce((acc, item) => acc + item.quantity, 0)
  const itensRecentes = products.slice(-5).length 
  const itensAcabando = products.filter((p) => p.quantity <= 10).length

  return (
    <section className={styles.container}>
      <TotalItens title={"Diversidade de itens"} amount={totalItens} />
      <TotalItens title={"Inventario total"} amount={totalInventario} />
      <TotalItens title={"Itens recentes"} amount={itensRecentes} />
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
