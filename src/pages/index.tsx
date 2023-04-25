import Link from 'next/link';
import styles from '../styles/index.module.css'

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.panel}>
          <div className={styles.title}>
            <h1>LBC2 Control Panel</h1>
          </div>
          <Link href='/homepage'><button>Log In</button></Link>
        </div>
      </main>
    </>
  )
}

