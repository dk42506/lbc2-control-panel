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
          <div className={styles.welcomeMessage}>
            <h2>
              Welcome to the LBC2 Control Panel!
            </h2>
          </div>
          <div className={styles.infoMessage}>
            <h4>
              This panel is used to plan, manage, and create material used in the
            </h4>
            <h4>
              Loyola Blakefiled Cyber Challange event. 
            </h4>
          </div>
          <div>
            <input type='email' className={styles.emailInput}></input>
          </div>
          <div>
            <input type='email' className={styles.emailInput}></input>
          </div>

          <Link href='/homepage'><button className={styles.logInButton}>Log In</button></Link>
        </div>
      </main>
    </>
  )
}

