import React from "react";
import styles from '../../styles/Nav.module.css'

const Nav: React.FC<{}> = () => {
    return (
        <div className={styles.Nav}>
            <div className={styles.Title}>
                *name*
            </div>
            <div className={styles.menuList}>
                
            </div>
        </div>
    )
}

export default Nav;