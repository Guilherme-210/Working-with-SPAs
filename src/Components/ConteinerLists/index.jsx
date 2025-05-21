import Table from "../Table"
import TableFilter from "../TableFilter"
import styles from "./conteinerTable.module.css"
import { addToCart } from "../../utils/localStorageUtils.js"

export default function ConteinerTable({ products }) {
  return (
    <section className={styles.conteinerTables}>
      <Table
        products={products}
        onBuy={(product) => {
          addToCart(product)
          // alert(`🛒 ${product.name} foi adicionado ao carrinho!`)
        }}
      />
      <TableFilter
        products={products}
        onBuy={(product) => {
          addToCart(product)
          // alert(`🛒 ${product.name} foi adicionado ao carrinho!`)
        }}
      />
    </section>
  )
}
