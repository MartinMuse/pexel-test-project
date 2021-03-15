import  './Background.css'
import image from './pexels-image.jpg'
import {createClient} from 'pexels';
import {useEffect, useState} from "react";

const client = createClient('563492ad6f91700001000001f3da6c8357e54f0489449c8eea658713');


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
