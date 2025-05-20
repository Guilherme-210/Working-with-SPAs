import Table from "../Table"
import TableFilter from "../TableFilter"
import styles from "./conteinerTable.module.css"

export default function ConteinerTable({ products }) {
  return (
    <section className={styles.conteinerTables}>
      <Table products={products} />
      <TableFilter products={products} />
    </section>
  )
}
