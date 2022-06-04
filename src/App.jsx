import { Header } from './components/Header'
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import "./global.css"


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
          author="Jeremias Marinho" 
          content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quidem atque ipsa eaque, commodi, nostrum recusandae voluptates veniam cumque doloribus beatae asperiores molestias placeat odit expedita tempore praesentium veritatis itaque."
        />
     
     
        </main>
      </div>
    </>
  )
}


