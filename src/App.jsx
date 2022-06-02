import { Header } from './components/Header'
import { Post } from './Post'

import styles from './App.module.css'

import "./global.css"
import { Sidebar } from './components/Sidebar'

export function App() {
  

  return (
    <>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post 
          author="Jeremias Marinho" 
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quidem atque ipsa eaque, commodi, nostrum recusandae voluptates veniam cumque doloribus beatae asperiores molestias placeat odit expedita tempore praesentium veritatis itaque."
     />
      <Post 
          author="Anna Victória"
          content="Lorem ipsum dolor sit,"
      />
        </main>
      </div>
    </>
  )
}


