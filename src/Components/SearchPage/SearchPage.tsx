import React, {FC, Fragment, useContext, useState} from "react";
import {Navbar} from "../Navbar/Navbar";
import {Modal} from "../Modal/Modal";
import {Photo} from "pexels";
import {IPictureInf} from "../App";
import {Loader} from "../Loader/Loader";
import './SearchPage.css'
import {InfiniteScrollContainer} from "../InfiniteScrollContainer/InfiniteScrollContainer";
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {LangContext} from "../../context/lang";

interface ISearchPageProps {
    infinitePhotoHandler: () => void
    searchPhotosHandler: (query: string) => void
    modalCloseHandler: () => void
    imageClickHandler: (e: MouseEvent, photo: Photo) => void
    showModal: boolean,
    loading: boolean
    setLoadingHandler: (value: boolean) => void
    activePhoto:Photo|null,
    search: string
}

export const SearchPage: FC<ISearchPageProps> = ({searchPhotosHandler, infinitePhotoHandler, modalCloseHandler, imageClickHandler,
                                                     showModal, loading, activePhoto, search}) => {
    const { dispatch: { translate }} = useContext(LangContext);
    const {photos, total_results, error} = useSelector((state: RootState) => state.photos)
    const {likes} = useSelector((state: RootState) => state.likes)
    const {collection} = useSelector((state: RootState) => state.collection)
    let content = null
    if (loading) {
        content = <Loader/>
    }else{
         content = (
            error
                ?   <h1 className="search__header__title">{Error}</h1>
                : <Fragment>
                    <section className="search__header">
                        <h1 className="search__header__title">{search}</h1>
                    </section>
                    <div className={'search__grid'}>
                        {photos.length > 0
                            ? <InfiniteScrollContainer imageClickHandler={imageClickHandler} loader={<Loader/>}
                                                       photos={photos} hasMore={true} likes={likes} next={infinitePhotoHandler} collection={collection}/>
                            : <h1 className="search__header__title">{translate("noResultTitle")}</h1>
                        }
                    </div>
                </Fragment>
        )
    }
    return (
        <div className={'page-wrap'}>
            <Navbar onSearch={searchPhotosHandler} isAlwaysActive={true}/>
            <div className="main-nav-bar-padding"></div>
            <div className={'search'}>
                {content}
            </div>
            {activePhoto ?
                showModal && <Modal isLiked={likes.indexOf(activePhoto.id) !== -1}
                                    isCollected={collection.findIndex((p)=>p.id===activePhoto.id)!==-1} onClose={modalCloseHandler} photo={activePhoto}/>
                : <></>}
        </div>
    )
}
