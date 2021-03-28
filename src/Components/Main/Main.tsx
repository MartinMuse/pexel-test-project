import React, {FC, Fragment, useContext, useEffect, useState} from "react";
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
import {IPictureInf} from "../App";
import {LangContext} from "../../context/lang";

interface IMainProps {
    infinitePhotoHandler: () => void
    searchPhotosHandler: (query: string) => void
    modalCloseHandler: () => void
    imageClickHandler: (e: MouseEvent, photo: Photo) => void
    showModal: boolean,
    loading: boolean
    setLoadingHandler: (value: boolean) => void
    activePhoto: Photo | null
}


export const Main: FC<IMainProps> = ({infinitePhotoHandler, searchPhotosHandler, modalCloseHandler, imageClickHandler, showModal, loading, setLoadingHandler, activePhoto}) => {
    const dispatch = useDispatch()
    const {photos, total_results, error} = useSelector((state: RootState) => state.photos)
    const { dispatch: { translate }} = useContext(LangContext);
    const {likes} = useSelector((state: RootState) => state.likes)
    const {collection} = useSelector((state: RootState) => state.collection)


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
                        <div className="js-home-links-title title-tabs__title">{translate('containerTitle')}</div>
                    </div>
                    {photos.length > 0
                        ? <InfiniteScrollContainer likes={likes} imageClickHandler={imageClickHandler} loader={<Loader/>}
                                                   photos={photos} hasMore={true} next={infinitePhotoHandler}
                                                   collection={collection}/>
                        : <p className={'has-text-centered'}>{translate('noResultTitle')}</p>
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
            {activePhoto ?
                showModal && <Modal isLiked={likes.indexOf(activePhoto.id) !== -1}
                                    isCollected={collection.findIndex((p)=>p.id===activePhoto.id)!==-1} onClose={modalCloseHandler} photo={activePhoto}/>
                : <></>}
        </div>
    )

}

