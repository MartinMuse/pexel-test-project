import {Photo} from 'pexels';

import React, {FC, useState} from "react";

import './PhotoItem.css'


interface IPhotoItem {
    photo: Photo,
    imageClickHandler:(e:any,photo:Photo)=>void,
}


export const PhotoItem: FC<IPhotoItem> = ({photo,imageClickHandler}) => {
    const [isClicked,setIsClicked]=useState(false)
    //
    // const handleClick=(id)=>{
    //     const obj=[]
    //
    // }


    return (<div key={photo.id} className={'masonry-item overlay'}>
                <a href={'/#'} onClick={(e) => {}}>
                    <img src={photo.src.large} alt={''} onClick={(e)=>imageClickHandler(e,photo)} className={'masonry-item__img'}/>
                </a>
                <a className={`masonry-item__photographer`} href="/#">
                    <span className="masonry-item__name">{photo.photographer}</span>
                </a>
            <div className="masonry-item__info">
                <button
                    className={`js-like js-like-6357726 rd__button rd__button--like
                     rd__button--no-padding rd__button--text-white rd__button--with-icon ${isClicked?'rd__button--like--active':''}`}
                    data-photo-id="6357726" data-initialized="true" onClick={()=>setIsClicked(prevState => !prevState)}>
                    <i className="rd__button--like--not-active--icon rd__svg-icon" style={isClicked?{display: 'none'}:{}} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                            <path
                                d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                        </svg>
                    </i>
                    <i className="rd__button--like--active--icon rd__svg-icon" style={isClicked?{}:{display: 'none'}} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                            <path
                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                        </svg>
                    </i>
                </button>
            </div>
            </div>
    )
}
