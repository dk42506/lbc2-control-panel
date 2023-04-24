import Head from 'next/head'
import Image from 'next/image'
import Nav from '@/components/Nav/Nav'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <>
    <body className={styles.Body}>
      <Nav />
      <main>
        <div className={styles.Welcome}>
          Welcome Name
        </div>
      </main>
    </body>
    </>
  )
}
