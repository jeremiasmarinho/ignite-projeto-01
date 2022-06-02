import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import capa from '../assets/capa.svg' 
export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={capa} />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/87774323?v=4" alt="Foto de perfil" />

        <strong>Jeremias Marinho</strong>
        <span>Web Develop</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}