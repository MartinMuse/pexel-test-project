import React, {FC, useEffect, useState} from "react";
import "./Modal.css"
import "./ModalMedia.css"
import {ModalNavbar} from "./ModalNavBar/ModalNavbar";
import {PhotoDetailsSection} from "./PhotoDetailsSection/PhotoDetailsSection";
import {deleteLike, setLike} from "../../Redux/actions/likesActions";
import {useDispatch} from "react-redux";

interface IModalProps {
    src: string
    onClose: () => void
    authorName: string
    authorUrl: string
    pictureId: number,
    isLiked:boolean
}

export const Modal: FC<IModalProps> = ({src, onClose, authorName, authorUrl, pictureId,isLiked}) => {
    const dispatch=useDispatch()
    const onClickLikeHandler = () => {
        if (isLiked) {
            dispatch(deleteLike(pictureId))
        } else {
            dispatch(setLike(pictureId))
        }
    }
    return (
        <div className='rd__modal rd__modal--open'>
            <ModalNavbar onClose={onClose}/>
            <div className={'rd__modal__overlay'}>
                <button
                    className="js-modal-close-button rd__modal__exit rd__button rd__button--text-white rd__button--circle-icon"
                    onClick={onClose}>
                    <i className="rd__svg-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path
                                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                        </svg>
                    </i>
                </button>
                <div className={'rd__modal__content'}>
                    <div className={"photo-page"}>
                        <section className="photo-page__section photo-page__section--action-bar" id="photo-page-top">
                            <div className="level level--responsive">
                                <div className="level__left photo-page__hidden-on-mobile">
                                    <div className="level__item">
                                        <div className="level level--responsive-large">
                                            <div className="level__item">
                                                <a className="js-photo-page-mini-profile-link photo-page__mini-profile" href={authorUrl} target="_blank">
                                                    <div
                                                        className="js-photo-page-mini-profile-avatar photo-page__mini-profile__avatar rd__avatar rd__avatar--large">
                                                        <img alt="undefined" height="50"
                                                             src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                                                             width="50"/>
                                                    </div>
                                                    <div className="photo-page__mini-profile__text">
                                                        <h3 className="js-photo-page-mini-profile-full-name
                                                         photo-page__mini-profile__text__title">{authorName}</h3>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="level__right photo-page__action-buttons-level-item">
                                    <div className="level__item photo-page__action-buttons-level-item">
                                        <div className="rd__button-group photo-page__action-buttons">
                                            <button
                                                className={`js-like js-photo-page-action-buttons-like
                                                 rd__button rd__button--white rd__button--with-icon-left ${isLiked ? "rd__button--like--active" : ""}`}
                                                onClick={onClickLikeHandler}>
                                                <i className="rd__button--like--not-active--icon rd__svg-icon"
                                                   style={isLiked ? {display: "none"} : {}}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24">
                                                        <path
                                                            d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path>
                                                    </svg>
                                                </i>
                                                <i className="rd__button--like--active rd__svg-icon"
                                                   style={isLiked ? {} : {display: "none"}}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24">
                                                        <path
                                                            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                                                    </svg>
                                                </i>
                                            </button>

                                            <button
                                                className="js-collect js-photo-page-action-buttons-collect rd__button rd__button--white rd__button--with-icon-left"
                                                data-photo-id="6569318" data-initialized="true">
                                                <i className="rd__button--collect--not-active--icon rd__svg-icon">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24">
                                                        <path
                                                            d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                                                    </svg>
                                                </i>
                                                <span>Collect</span>
                                            </button>

                                            <div className="js-photo-page-action-buttons-download">
                                                <div
                                                    className="rd__button-group
                                                    rd__button-group--space-with-margin-left
                                                    rd__button-group--bar rd__button-group--bar--border-between "
                                                    style={{height: "100%"}}>
                                                    <a className="js-download-a-tag rd__button rd__button--download rd-button-download--background"
                                                       download=""
                                                       href={`https://www.pexels.com/photo/${pictureId}/download/`}
                                                       rel="nofollow">
                                                        <span>Free Download</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="photo-page__section photo-page__section--photo">
                            <div className="photo-page__photo">
                                    <div className="photo-page__photo__image" style={{}}>
                                        <img className="js-photo-page-image-img"
                                             src={src}
                                             style={{
                                                 background: "rgb(68, 56, 50)",
                                                 maxHeight: "75vh",
                                                 maxWidth: "calc(50vh)",
                                                 minHeight: "30mт0px",
                                                 minWidth: "calc(200px)"
                                             }}/>
                                    </div>
                            </div>
                        </section>
                        <PhotoDetailsSection authorName={authorName} authorUrl={authorUrl}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
