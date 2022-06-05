import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import capa from '../assets/capa.svg' 
import { Avatar } from './Avatar';
export function Sidebar(){
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src={capa} />

      <div className={styles.profile}>
        <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/87774323?v=4"/>

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