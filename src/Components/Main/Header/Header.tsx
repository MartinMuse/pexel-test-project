import {Background} from "./Background/Background";
import React from "react";
import styles from './Header.module.css'

export function Header () {
    return(
        <div className={styles.image}>
            <Background/>
        </div>
    )
}
