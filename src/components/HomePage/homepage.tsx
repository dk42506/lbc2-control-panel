import Nav from '@/components/Nav/Nav'
import styles from '../../styles/homepage.module.css'

export default function HomePage() {
    return (
      <>
        <div className={styles.Container}>
          <Nav />
          <div className={styles.Main}>
            <div className={styles.Greeting}>
                <div className={styles.Welcome}>
                  Welcome
                </div>
                <div className={styles.Name}>
                  Name
                </div>
            </div>
          </div>
        </div>
      </>
    )
  }