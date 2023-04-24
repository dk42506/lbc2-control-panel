import React from "react";
import styles from '../../styles/Nav.module.css'
import Link from 'next/link';


const Nav: React.FC<{}> = () => {
    return (
        <div className={styles.Nav}>
            <div className={styles.Title}>
                *name*
            </div>
            <div className={styles.menuList}>
                <div className={styles.element}>
                    <Link href='/homepage' className={styles.menuButton}>Home</Link>
                </div>
                <div className={styles.element}>
                    <Link href='/challengecreator' className={styles.menuButton}>Challenge Creator</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;