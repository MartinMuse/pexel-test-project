import {Background} from "./Background/Background";
import React, {FC, useContext, useEffect, useState} from "react";
import './Header.css'
import {Center_container} from "./Center_container/Center_container";
import {createClient, Photo} from "pexels";
import {Footer} from "./Footer/Footer";
import {LangContext} from "../../../context/lang";

const client = createClient('563492ad6f91700001000001b51076f5275b4acf85e7bbb56e355012');

interface IHeaderProps {
    onSearch: (value: string) => void
}

export const Header: FC<IHeaderProps> = ({onSearch}) => {
    const { state: { language}, dispatch: { setLanguage, translate } } = useContext(LangContext);
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
            <Footer authorName={background?.photographer} authorUrl={background?.photographer_url} translate={translate}/>
            <Center_container onSearch={onSearch} translate={translate}/>
        </header>
    )
}
