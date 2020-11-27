import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [count, setCount] = useState(0)

  const inc = () => {
    setCount(count+1)
  }

  const dec = () => {
    setCount(count-1)
  }

  return (
    <div className={styles.container}>
      <h1>{count}</h1>
      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
    </div>
  )
}
