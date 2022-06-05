import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from './Comment.module.css'
export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/jeremiasmarinho.png" />
        <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jeremias Marinho</strong>
              <time title="3 de junho às 08:13h" dateTime="2022-06-03 08:13:30">Cerca de uma hora atrás</time>
            </div>
            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>
        <footer>
           <button>
             <ThumbsUp />
             Aplaudir <span>20</span>
           </button>
        </footer>
        </div>
      </div>
  )
}