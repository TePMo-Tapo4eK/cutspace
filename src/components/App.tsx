import { useState } from 'react'
import Header from './Header/Header'
import styles from './App.module.scss'
import MainInfo from './MainInfo/MainInfo'
import Comp from './Companies/Comp'
import Space from './SpaceForYou/Space'

function App() {

  return (
    <div className={styles.App}>
      <Header/>
      <MainInfo/>
      <Comp/>
      <Space/>
    </div>
  )
}

export default App
