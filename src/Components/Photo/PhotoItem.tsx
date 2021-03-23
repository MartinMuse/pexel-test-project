import {Photo} from 'pexels';

import React, {FC, useState} from "react";

import './PhotoItem.css'
import {useDispatch} from "react-redux";
import {deleteLike, setLike} from "../../Redux/actions/likesActions";


interface IPhotoItem {
    photo: Photo,
    imageClickHandler: (e: any, photo: Photo) => void,
    isLiked: boolean
}


export const PhotoItem: FC<IPhotoItem> = ({photo, imageClickHandler, isLiked}) => {
    const dispatch = useDispatch()
    const onClickHandler = () => {
        if (isLiked) {
            dispatch(deleteLike(photo.id))
        } else {
            dispatch(setLike(photo.id))
        }
    }

    return (
        <div key={photo.id} className={'masonry-item overlay'}>
            <a href={'/#'} onClick={(e) => {
            }}>
                <img src={photo.src.large} alt={''} onClick={(e) => imageClickHandler(e, photo)}
                     className={'masonry-item__img'}/>
            </a>

            <a className={`masonry-item__photographer`} href={photo.photographer_url} target="_blank">
                <img className="photo-item__avatar" height="30" width="30" role="presentation"
                     data-overview-tooltip-pointer-element="true"
                     src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"/>
                <span className="masonry-item__name">{photo.photographer}</span>
            </a>
            <div className="masonry-item__info">
                <a className="js-download js-download-6569318 rd__button rd__button--download rd__button--no-padding rd__button--text-white rd__button--with-icon"
                   data-medium-id="6569318" data-request-path="/after_download_modal/" download=""
                   href={`https://www.pexels.com/photo/${photo.id}/download/`}>
                    <i className="rd__button--download--not-active--icon rd__svg-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="100px" width="100px" fill="#000000"
                             version="1.1" x="0px" y="0px"
                             viewBox="0 0 100 100" style={{background: 'new 0 0 100 100'}}>
                            <g>
                                <path
                                    d="M72.2,43.2L58,57.4V17c0-2.2-1.8-4-4-4s-4,1.8-4,4v40.4L35.8,43.2c-1.6-1.6-4.1-1.6-5.7,0c-1.6,1.6-1.6,4.1,0,5.7l21,21   C52,70.7,53,71,54,71s2-0.4,2.8-1.2l21-21c1.6-1.6,1.6-4.1,0-5.7C76.3,41.6,73.8,41.6,72.2,43.2z"></path>
                                <path
                                    d="M32,87h44c2.2,0,4-1.8,4-4s-1.8-4-4-4H32c-2.2,0-4,1.8-4,4S29.8,87,32,87z"></path>
                            </g>
                        </svg>
                    </i>
                </a>
                <button
                    className="js-collect rd__button rd__button--collect rd__button--no-padding rd__button--text-white rd__button--with-icon">
                    <i className="rd__button--collect--not-active--icon rd__svg-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                        </svg>
                    </i>
                </button>
                <button
                    className={`js-like rd__button rd__button--like rd__button--no-padding rd__button--text-white rd__button--with-icon ${isLiked ? 'rd__button--like--active-tiny' : ''}`}
                    onClick={() => onClickHandler()}>
                    <i className="rd__button--like--not-active--icon rd__svg-icon"
                       style={isLiked ? {display: 'none'} : {}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                        </svg>
                    </i>
                    <i className="rd__button--like--active--icon rd__svg-icon" style={isLiked ? {} : {display: 'none'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                        </svg>
                    </i>
                </button>
            </div>
        </div>
    )
}
