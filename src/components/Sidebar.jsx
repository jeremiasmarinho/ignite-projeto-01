import styles from './Sidebar.module.css';
import capa from '../assets/capa.svg' 
export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={capa} />

      <div className={styles.profile}>
        <strong>Jeremias Marinho</strong>
        <span>Web Develop</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}