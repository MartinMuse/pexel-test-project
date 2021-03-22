import  './Background.css'
import {createClient} from 'pexels';
import {FC} from "react";

const client = createClient('563492ad6f91700001000001b51076f5275b4acf85e7bbb56e355012');

interface IBackgroundProps{
    picture: string
}

export const  Background:FC<IBackgroundProps>=({picture})=> {
    return (
            <div className={'hero__background'}>
                <img src={picture} alt={''}/>
            </div>
        )
    }
