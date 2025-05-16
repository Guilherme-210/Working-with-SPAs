import { Link } from "react-router-dom"
import styles from "./header.module.css"

export default function Header({ Rotas, Title }) {
  return (
    <header className={styles.Header}>
      <h1 className={styles.TitlePage}>{Title}</h1>

      <div className={styles.nav}>
        <nav>
          <ul>
            {Rotas.map((Rota, index) => (
              <li key={index}>
                <Link to={Rota.path}>{Rota.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
