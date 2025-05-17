import styles from "./containerItens.module.css"

export default function ContainerItens() {
  return (
    <section className={styles.container}>
      <TotalItens title={"Diversidade de itens"} amount={"2"} />
      <TotalItens title={"Inventario total"} amount={"40"} />
      <TotalItens title={"Itens recentes"} amount={"2"} />
      <TotalItens title={"Itens acabando"} amount={"1"} />
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
