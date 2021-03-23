import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {Main} from './Main/Main'
import {Route, Redirect, useHistory} from 'react-router';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Redux/store";
import {getCuratedPhotos, getPhotos, setError} from "../Redux/actions/photoActions";
import {Photo} from "pexels";
import {SearchPage} from "./SearchPage/SearchPage";

export interface IPictureInf {
    src: string
    authorUrl: string
    authorName: string
    pictureId: number

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
    const [pictureInf, setPictureInf] = useState<IPictureInf>({
        src: '',
        authorUrl: '',
        authorName: '',
        pictureId: 0,
    })

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
        setPictureInf({
            src: '',
            authorUrl: '',
            authorName: '',
            pictureId: 0,

        })
        document.body.style.overflow = 'auto'
    }

    const setLoadingHandler = (loadingValue: boolean) => {
        setLoading(loadingValue)
    }

    const imageClickHandler = (e: MouseEvent, photo: Photo) => {
        e.preventDefault()
        setPictureInf({
            src: photo.src.large,
            authorUrl: photo.photographer_url,
            authorName: photo.photographer,
            pictureId: photo.id,
        })
        setShowModal(true)
        document.body.style.overflow = 'hidden'
    }

    return (
        <div className={'App'}>
            <Route exact path={'/'}>
                <Redirect to="/main"/>
            </Route>
            <Route exact path={'/main'} render={() => <Main imageClickHandler={imageClickHandler}
                                                            infinitePhotoHandler={infinitePhotoHandler}
                                                            modalCloseHandler={modalCloseHandler}
                                                            searchPhotosHandler={searchPhotosHandler}
                                                            setLoadingHandler={setLoadingHandler}
                                                            showModal={showModal} loading={loading}
                                                            pictureInf={pictureInf}/>}/>

            <Route path={'/search'} render={() => <SearchPage imageClickHandler={imageClickHandler}
                                                              infinitePhotoHandler={infinitePhotoHandler}
                                                              modalCloseHandler={modalCloseHandler}
                                                              searchPhotosHandler={searchPhotosHandler}
                                                              setLoadingHandler={setLoadingHandler}
                                                              showModal={showModal} loading={loading}
                                                              pictureInf={pictureInf}
                                                              search={searchFor}
            />}/>

        </div>
    );
}

export default App;
