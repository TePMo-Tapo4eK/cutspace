import { useState } from 'react'
import Header from './Header/Header'
import styles from './App.module.scss'
import MainInfo from './MainInfo/MainInfo'

function App() {

  return (
    <div className={styles.App}>
      <Header/>
      <MainInfo/>
    </div>
  )
}

export default App
