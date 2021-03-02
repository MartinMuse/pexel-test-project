import React from "react";
import {Header} from "./Header/Header";
import styles from "./Main.module.css"

export function Main() {
    return (
        <div className={styles.main}>
            <Header/>
        </div>
    )
}
