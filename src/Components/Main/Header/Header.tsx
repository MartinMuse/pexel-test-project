import {Background} from "./Background/Background";
import React, {FC, useEffect, useState} from "react";
import './Header.css'
import {Center_container} from "./Center_container/Center_container";
import {createClient, Photo} from "pexels";
import {Footer} from "./Footer/Footer";

const client = createClient('563492ad6f91700001000001b51076f5275b4acf85e7bbb56e355012');

interface IHeaderProps {
    onSearch: (value: string) => void
}

export const Header: FC<IHeaderProps> = ({onSearch}) => {
    const [background, setBackground] = useState<Photo>()
    useEffect(() => {
        client.photos.random().then(res => {
            if ("src" in res) {
                setBackground(res)
            }
        })
    }, [])
    return (
        <header className={'hero'}>
            {background
                ? <Background picture={background.src.original}/>
                : <div></div>}
            <Footer authorName={background?.photographer} authorUrl={background?.photographer_url}/>
            <Center_container onSearch={onSearch}/>
        </header>
    )
}
