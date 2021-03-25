import React, {FC, Fragment, useState} from "react";
import {Navbar} from "../Navbar/Navbar";
import {Modal} from "../Modal/Modal";
import {Photo} from "pexels";
import {IPictureInf} from "../App";
import {Loader} from "../Loader/Loader";
import './CollectionPage.css'
import {InfiniteScrollContainer} from "../InfiniteScrollContainer/InfiniteScrollContainer";
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {Footer} from "../Footer/Footer";

interface ICollectionPageProps {
    infinitePhotoHandler: () => void
    searchPhotosHandler: (query: string) => void
    modalCloseHandler: () => void
    imageClickHandler: (e: MouseEvent, photo: Photo) => void
    showModal: boolean,
    loading: boolean
    setLoadingHandler: (value: boolean) => void
    activePhoto:Photo|null,
}

export const CollectionPage: FC<ICollectionPageProps> = ({searchPhotosHandler, infinitePhotoHandler, modalCloseHandler, imageClickHandler,
                                                     showModal, loading, activePhoto}) => {

    const {collection} = useSelector((state: RootState) => state.collection)
    const {likes} = useSelector((state: RootState) => state.likes)
    let content = null
    if (loading) {
        content = <Loader/>
    }else{
         content = <Fragment>
                    <section className="search__header">
                        <h1 className="search__header__title">Collection</h1>
                    </section>
                    <div className={'search__grid'}>
                        {collection.length > 0
                            ? <InfiniteScrollContainer imageClickHandler={imageClickHandler} loader={<Loader/>}
                                                       photos={collection} hasMore={false} likes={likes} next={infinitePhotoHandler} isCollectionPage={true}/>
                            : <h1 className="search__header__title">No results</h1>
                        }
                    </div>
                </Fragment>
    }
    return (
        <div className={'page-wrap'}>
            <Navbar onSearch={searchPhotosHandler} isAlwaysActive={true}/>
            <div className="main-nav-bar-padding"></div>
            <div className={'search'}>
                {content}
            </div>
            <Footer/>
            {activePhoto ?
                showModal && <Modal isLiked={likes.indexOf(activePhoto.id) !== -1}
                                    isCollected={collection.findIndex((p)=>p.id===activePhoto.id)!==-1} onClose={modalCloseHandler} photo={activePhoto}/>
                : <></>}
        </div>
    )
}