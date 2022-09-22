import { Avatar } from '../Avatar/Avatar';
import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1663174495879-1f6fa6d3a89c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50" 
      />

      <div className={styles.profile}>
        <Avatar src="http://github.com/gustavoctt.png" />

        <strong>Gustavo Tartare</strong>
        <span>Software Enginner</span>
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