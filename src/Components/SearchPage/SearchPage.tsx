import React, {FC, useState} from "react";
import {Navbar} from "../Navbar/Navbar";
import {Header} from "../Main/Header/Header";
import {Modal} from "../Modal/Modal";

interface ISearchPageProps{
    onSearch:()=>void,
}

export const SearchPage:FC=()=>{
    const [showModal, setShowModal] = useState(false)
    const [src, setSrc] = useState('')
    const [authorUrl, setAuthorUrl] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [likesCount, setLikesCount] = useState(0)
    const [pictureId,setPictureId]=useState(0)

    const modalCloseHandler = () => {
        setSrc('');
        setAuthorUrl('')
        setAuthorName('')
        setShowModal(false)
        setPictureId(0)
        document.body.style.overflow='auto'
    }



    return(
        <div className={'main'}>
            {/*<Navbar onSearch={searchPhotosHandler}/>*/}
            <div className={'l-container home-page'}>

            </div>
            {showModal && <Modal src={src} authorName={authorName}
                                 authorUrl={authorUrl} onClose={modalCloseHandler} pictureId={pictureId}/>}
        </div>
    )
}
