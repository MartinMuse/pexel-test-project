import {SearchBar} from './SearchBar/SearchBar'
import styles from './Center_container.module.css'
import {FC, useState, Fragment} from "react";

interface IHeaderProps {
    onSearch: (value: string) => void
}

export const Center_container: FC<IHeaderProps> = ({onSearch}) => {
    return (
        <section className={styles.Center_container}>
            <h1 className={styles.hero__title}>The best free stock photos &
                videos shared by talented creators.</h1>
            <div>
                <SearchBar onSearch={onSearch}/>
            </div>
        </section>
    )
}
