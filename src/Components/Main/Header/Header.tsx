import {Background} from "./Background/Background";
import React, {FC} from "react";
import styles from './Header.module.css'
import {Center_container} from "./Center_container/Center_container";

interface IHeaderProps {
    onSearch: (value: string) => void
}

export const Header: FC<IHeaderProps> = ({onSearch}) => {
    return (
        <header className={styles.hero}>
            <Background/>
            <Center_container onSearch={onSearch}/>
        </header>
    )
}
