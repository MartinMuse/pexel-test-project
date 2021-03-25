import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {Main} from './Main/Main'
import {Route, Redirect, useHistory} from 'react-router';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Redux/store";
import {getCuratedPhotos, getPhotos, setError} from "../Redux/actions/photoActions";
import {Photo} from "pexels";
import {SearchPage} from "./SearchPage/SearchPage";
import {CollectionPage} from "./CollectionPage/CollectionPage";

export interface IPictureInf {
    src: string
    authorUrl: string
    authorName: string
    pictureId: number
    photo:Photo|null
}

const App: FC = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [searchFor, setSearchFor] = useState('')
    const [page, setPage] = useState(1);
    const [mode, setMode] = useState('trending')
    const [showModal, setShowModal] = useState(false)
    const [loading, setLoading] = useState(false);
    const {photos, total_results, error} = useSelector((state: RootState) => state.photos)
    const [activePhoto, setActivePhoto] = useState<Photo|null>(null)

    const searchPhotosHandler = (query: string) => {
        if (error) {
            setError('')
        }
        setMode('search')
        setLoading(true);
        setSearchFor(query);
        setPage(prevState => ++prevState);
        dispatch(getPhotos(1, query, () => setLoading(false), () => setLoading(false)))
        history.push(`/search/${query}`)
    }

    const infinitePhotoHandler = () => {
        setPage(prevState => prevState + 1)
        if (mode === 'trending') {
            dispatch(getCuratedPhotos(page + 1, () => setLoading(false), () => setLoading(false)));
        } else {
            dispatch(getPhotos(page + 1, searchFor, () => setLoading(false), () => setLoading(false)))
        }
    }

    const modalCloseHandler = () => {
        setShowModal(false)
        setActivePhoto(null)
        document.body.style.overflow = 'auto'
    }

    const setLoadingHandler = (loadingValue: boolean) => {
        setLoading(loadingValue)
    }

    const imageClickHandler = (e: MouseEvent, photo: Photo) => {
        e.preventDefault()
        setActivePhoto(photo)
        setShowModal(true)
        document.body.style.overflow = 'hidden'
    }

    return (
        <div className={'App'}>
            {/*<Route exact path={'/'}>*/}
            {/*    <Redirect to="/main"/>*/}
            {/*</Route>*/}
            <Route exact path={'/'} render={() => <Main imageClickHandler={imageClickHandler}
                                                            infinitePhotoHandler={infinitePhotoHandler}
                                                            modalCloseHandler={modalCloseHandler}
                                                            searchPhotosHandler={searchPhotosHandler}
                                                            setLoadingHandler={setLoadingHandler}
                                                            showModal={showModal} loading={loading}
                                                            activePhoto={activePhoto}/>}/>

            <Route path={'/search'} render={() => <SearchPage imageClickHandler={imageClickHandler}
                                                              infinitePhotoHandler={infinitePhotoHandler}
                                                              modalCloseHandler={modalCloseHandler}
                                                              searchPhotosHandler={searchPhotosHandler}
                                                              setLoadingHandler={setLoadingHandler}
                                                              showModal={showModal} loading={loading}
                                                              activePhoto={activePhoto}
                                                              search={searchFor}/>}/>
            <Route path={'/collection'} render={()=><CollectionPage  imageClickHandler={imageClickHandler}
                                                                    infinitePhotoHandler={infinitePhotoHandler}
                                                                    modalCloseHandler={modalCloseHandler}
                                                                    searchPhotosHandler={searchPhotosHandler}
                                                                    setLoadingHandler={setLoadingHandler}
                                                                    showModal={showModal}
                                                                    activePhoto={activePhoto} loading={false}/>}/>
        </div>
    );
}

export default App;
