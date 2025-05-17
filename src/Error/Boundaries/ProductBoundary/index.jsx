import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import styles from "./styles.module.css"

export default function ProductBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    switch (error.status) {
      case 500:
        return (
          <div className={styles.container}>
            <span className={styles.emoji}>💥</span>
            <p className={styles.message}>
              <strong>Erro Interno:</strong> Algo deu errado no servidor. Tente
              novamente mais tarde!
            </p>
            <ButtonError />
          </div>
        )

      case 404:
        return (
          <div className={styles.container}>
            <span className={styles.emoji}>🔍</span>
            <p className={styles.message}>
              <strong>Produto não encontrado:</strong> Parece que esse item não
              existe ou foi removido.
            </p>
            <ButtonError />
          </div>
        )

      case 401:
        return (
          <div className={styles.container}>
            <span className={styles.emoji}>🔒</span>
            <p className={styles.message}>
              <strong>Acesso negado:</strong> Você precisa estar logado para
              acessar essa página.
            </p>
            <ButtonError />
          </div>
        )

      case 400:
        return (
          <div className={styles.container}>
            <span className={styles.emoji}>⚠️</span>
            <p className={styles.message}>
              <strong>Requisição inválida:</strong> Houve um problema com as
              informações enviadas.
            </p>
            <ButtonError />
          </div>
        )

      default:
        return (
          <div className={styles.container}>
            <span className={styles.emoji}>❗</span>
            <p className={styles.message}>
              <strong>Erro inesperado:</strong> Código {error.status}. Algo
              estranho aconteceu.
            </p>
            <ButtonError />
          </div>
        )
    }
  }

  return (
    <div className={styles.container}>
      <span className={styles.emoji}>🤔</span>
      <p className={styles.message}>
        <strong>Erro desconhecido:</strong> Não foi possível identificar o
        problema.
      </p>
      <ButtonError />
    </div>
  )
}

export function ButtonError() {
  return <button className={styles.button}>Entre em contato</button>
}
