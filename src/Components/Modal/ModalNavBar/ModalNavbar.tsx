import React, {FC} from "react";
import './ModalNavbar.css'

interface IModalNavbarProps{
    onClose:()=>void
}

export const ModalNavbar:FC<IModalNavbarProps>=({onClose})=>{
    return(
        <div className="photo-page-navbar">
            <div className="level" style={{height: '100%'}}>
                <div className="level__left">
                    <div className="level__item">
                        <button
                            className="js-modal-close-button rd__button rd__button--text rd__button--circle-icon" onClick={onClose}>
                            <i className="rd__svg-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                </svg>
                            </i>
                        </button>
                    </div>
                </div>
                <div className="level__right"></div>
            </div>
        </div>
    )
}
