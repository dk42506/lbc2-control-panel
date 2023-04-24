import React from "react";
import styles from '../../styles/Nav.module.css'

const Nav: React.FC<{}> = () => {
    return (
        <div className={styles.Nav}>
            <div className={styles.Title}>
                Welcome **name**
            </div>
        </div>
    )
}

export default Nav;