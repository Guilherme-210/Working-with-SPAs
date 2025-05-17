import { isRouteErrorResponse, useRouteError } from "react-router-dom"
import styles from "./styles.module.css"

export default function ProductBoundary() {
  const error = useRouteError()

  if (isRouteErrorResponse(error)) {
    const { status, data } = error

    const messages = {
      500: {
        emoji: "💥",
        title: "Erro Interno:",
        message: "Algo deu errado no servidor. Tente novamente mais tarde!",
      },
      404: {
        emoji: "🔍",
        title: "Produto não encontrado:",
        message:
          typeof data === "object" && "message" in data
            ? data.message
            : "Esse item não existe ou foi removido.",
      },
      401: {
        emoji: "🔒",
        title: "Acesso negado:",
        message: "Você precisa estar logado para acessar essa página.",
      },
      400: {
        emoji: "⚠️",
        title: "Requisição inválida:",
        message:
          data?.message || "Houve um problema com as informações enviadas.",
      },
    }

    const errorInfo = messages[status] || {
      emoji: "❗",
      title: "Erro inesperado:",
      message: `Código ${status}. Algo estranho aconteceu.`,
    }

    return (
      <div className={styles.container}>
        <span className={styles.emoji}>{errorInfo.emoji}</span>
        <p className={styles.message}>
          <strong>{errorInfo.title}</strong> {errorInfo.message}
        </p>
        <ButtonError />
      </div>
    )
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
