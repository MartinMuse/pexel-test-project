import  './Background.css'
import image from './pexels-image.jpg'
import {createClient} from 'pexels';
import {useEffect, useState} from "react";

const client = createClient('563492ad6f91700001000001b51076f5275b4acf85e7bbb56e355012');


export function Background() {
    const [background, setBackground] = useState<any>()
    useEffect(() => {
        client.photos.random().then(res => {
            if ("src" in res) {
                setBackground(res.src)
            }
        })
    }, [])
    if (background) {
        return (
            <div className={'hero__background'}>
                <img src={background.original}/>
            </div>
        )
    } else
        return <div>Загрузка...</div>
}
