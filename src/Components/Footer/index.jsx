import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.text}>
          © {new Date().getFullYear()} Desenvolvido por
          <span> Guilherme Reis</span>
        </p>
        <nav className={styles.nav}>
          <a
            className={styles.link}
            href="https://github.com/Guilherme-210"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <ion-icon name="logo-github"></ion-icon>
          </a>
          <a
            className={styles.link}
            href="https://github.com/Guilherme-210/Working-with-SPAs.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            Diretório do Projeto
          </a>
        </nav>
        <button
          className={styles.backToTop}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      </div>
    </footer>
  )
}
