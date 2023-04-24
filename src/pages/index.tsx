import Head from 'next/head'
import Image from 'next/image'
import Nav from '@/components/Nav/Nav'
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <>
      <div className={styles.Container}>
        <Nav />
        <main>
          <div className={styles.Welcome}>
            <p>Welcome Name</p>
          </div>
        </main>
      </div>
    </>
  )
}
