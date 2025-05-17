import Table from "../Table"
import TableFilter from "../TableFilter"
import styles from "./conteinerTable.module.css"

export default function ConteinerTable() {
  return (
    <section className={styles.conteinerTables}>
      <Table />
      <TableFilter />
    </section>
  )
}
