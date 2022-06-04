import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <img className={styles.avatar} src="https://github.com/jeremiasmarinho.png" />
            <div className={styles.authorInfo}>
              <strong>Jeremias Marinho</strong>
              <span>Web Developer</span>
            </div>
          </div>

          <time title="3 de junho às 08:13h" dateTime="2022-06-03 08:13:30">Publicado há 1 hora</time>
        </header>
          <div className={styles.content}>

           <p>Fala galeraa 👋</p>

           <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

           <p>👉{' '}<a href="#"> jane.design/doctorcare</a></p>

           <p>
              <a href="#">#novoprojeto </a>
              <a href="#">#nlw </a>
              <a href="#">#rocketseat</a>
            </p>

          </div>

          <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea 
              placeholder="Deixe um comentário"
            />
            <button type="submit">Comentar</button>
          </form>

    </article>
  )
}