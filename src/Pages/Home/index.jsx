import { Link } from 'react-router-dom';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Bem-vindo à minha loja!</h1>
        <p className={styles.description}>
          Aqui você encontrará uma variedade de produtos incríveis.
        </p>
        <Link to="/products" className={styles.button}>
          Ver Produtos
        </Link>
      </div>
    </main>
  )
}