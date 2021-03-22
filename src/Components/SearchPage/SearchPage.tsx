import React, {FC, Fragment, useState} from "react";
import {Navbar} from "../Navbar/Navbar";
import {Header} from "../Main/Header/Header";
import {Modal} from "../Modal/Modal";
import {Photo} from "pexels";
import {IPictureInf} from "../App";
import {Loader} from "../Loader/Loader";
import './SearchPage.css'
import {InfiniteScrollContainer} from "../InfiniteScrollContainer/InfiniteScrollContainer";
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/store";

interface ISearchPageProps {
    infinitePhotoHandler: () => void
    searchPhotosHandler: (query: string) => void
    modalCloseHandler: () => void
    imageClickHandler: (e: MouseEvent, photo: Photo) => void
    showModal: boolean,
    loading: boolean
    setLoadingHandler: (value: boolean) => void
    pictureInf: IPictureInf,
    search: string
}

export const SearchPage: FC<ISearchPageProps> = ({searchPhotosHandler, infinitePhotoHandler, modalCloseHandler, imageClickHandler,
                                                     showModal, loading, pictureInf, search}) => {

    const {photos, total_results, error} = useSelector((state: RootState) => state.photos)
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
                                                       photos={photos} hasMore={true} next={infinitePhotoHandler}/>
                            : <h1 className="search__header__title">No results</h1>
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
            {showModal && <Modal src={pictureInf.src} authorName={pictureInf.authorName}
                                 authorUrl={pictureInf.authorUrl} onClose={modalCloseHandler}
                                 pictureId={pictureInf.pictureId}/>}
        </div>
    )
}
