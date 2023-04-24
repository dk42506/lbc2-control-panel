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
                <div className={styles.challengeCreator}>
                <Link href='/challengecreator' style={{textDecoration: 'none', color: 'black'}}>Challenge Creator</Link>
                </div>
            </div>
        </div>
    )
}

export default Nav;