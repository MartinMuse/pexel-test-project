import React, {FC, Fragment, useEffect, useState} from "react";
import {Header} from "./Header/Header";
import "./Main.css"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {getCuratedPhotos, getPhotos, setError} from "../../Redux/actions/photoActions";
import {Loader} from "../Loader/Loader";
import {Navbar} from "../Navbar/Navbar";
import {Modal} from "../Modal/Modal";
import {Photo} from "pexels";
import {InfiniteScrollContainer} from "../InfiniteScrollContainer/InfiniteScrollContainer";

interface IMainProps {
    infinitePhotoHandler: () => void
    searchPhotosHandler: (query: string) => void
    modalCloseHandler: () => void
    imageClickHandler: (e: MouseEvent, photo: Photo) => void
    photos: Photo[]
    title: string
    error: any,
    authorName: string,
    src: string,
    showModal: boolean,
    authorUrl: string,
    pictureId: number
    likesCount: number
    loading: boolean
    setLoadingHandler: (value: boolean) => void
}


export const Main: FC<IMainProps> = ({infinitePhotoHandler, searchPhotosHandler, modalCloseHandler,
                                         imageClickHandler, photos, title, src, pictureId,
                                         likesCount, showModal, authorUrl, authorName, error, loading,
                                         setLoadingHandler}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCuratedPhotos(1, () => setLoadingHandler(false), () => setLoadingHandler(false)));
    }, [dispatch]);
    let content = null
    if (loading) {
        content = <Loader/>
    } else {
        content = (
            error
                ? <div className={'notification is-danger mt-6 has-text-centered'}>{error}</div>
                : <Fragment>
                    <div className="title-tabs">
                        <div className="js-home-links-title title-tabs__title">{title}</div>
                    </div>
                    {photos.length > 0
                        ? <InfiniteScrollContainer imageClickHandler={imageClickHandler} loader={<Loader/>}
                                                   photos={photos} hasMore={true} next={infinitePhotoHandler}/>
                        : <p className={'has-text-centered'}>No results</p>
                    }
                </Fragment>
        )
    }
    return (
        <div className={'main'}>
            <Navbar onSearch={searchPhotosHandler}/>
            <Header onSearch={searchPhotosHandler}/>
            <div className={'l-container home-page'}>
                {content}
            </div>
            {showModal && <Modal src={src} authorName={authorName}
                                 authorUrl={authorUrl} onClose={modalCloseHandler} pictureId={pictureId}/>}
        </div>
    )

}

