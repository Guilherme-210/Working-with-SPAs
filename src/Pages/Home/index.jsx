import ContainerItens from "../../Components/ContainerItens"
import ConteinerLists from "../../Components/ConteinerLists"
import styles from "./home.module.css"

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <ContainerItens />

        <ConteinerLists />
      </div>
    </>
  )
}
