import React, {FC, useEffect, useState} from 'react';
import './App.css';
import {Main} from './Main/Main'
import {Route, Redirect} from 'react-router';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../Redux/store";
import {getCuratedPhotos, getPhotos, setError} from "../Redux/actions/photoActions";
import {Photo} from "pexels";

const App: FC = () => {
    const dispatch = useDispatch()
    const {photos, total_results, error} = useSelector((state: RootState) => state.photos)
    const [searchFor, setSearchFor] = useState('')
    const [page, setPage] = useState(1);
    const [mode, setMode] = useState('trending')
    const [title, setTitle] = useState('Free Stock Photos')
    const [showModal, setShowModal] = useState(false)
    const [src, setSrc] = useState('')
    const [authorUrl, setAuthorUrl] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [likesCount, setLikesCount] = useState(0)
    const [pictureId, setPictureId] = useState(0)
    const [loading, setLoading] = useState(false);

    const searchPhotosHandler = (query: string) => {
        if (error) {
            setError('')
        }
        setMode('search')
        setLoading(true);
        setSearchFor(query);
        setPage(prevState => ++prevState);
        setTitle(query)
        dispatch(getPhotos(1, query, () => setLoading(false), () => setLoading(false)))
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
        setSrc('');
        setAuthorUrl('')
        setAuthorName('')
        setShowModal(false)
        setPictureId(0)
        document.body.style.overflow = 'auto'
    }

    const setLoadingHandler = (loadingValue: boolean) => {
        setLoading(loadingValue)
    }

    const imageClickHandler = (e: MouseEvent, photo: Photo) => {
        e.preventDefault()
        setSrc(photo.src.large)
        setAuthorUrl(photo.photographer_url)
        setAuthorName(photo.photographer)
        setPictureId(photo.id)
        setShowModal(true)
        document.body.style.overflow = 'hidden'
    }

    return (
        <div className={'App'}>
            <Route exact path={'/'}>
                <Redirect to="/main"/>
            </Route>
            <Route exact path={'/main'} render={() => <Main photos={photos} imageClickHandler={imageClickHandler}
                                                            infinitePhotoHandler={infinitePhotoHandler}
                                                            pictureId={pictureId} authorUrl={authorUrl}
                                                            authorName={authorName} src={src} error={error} likesCount={likesCount}
                                                            modalCloseHandler={modalCloseHandler}
                                                            searchPhotosHandler={searchPhotosHandler}
                                                            showModal={showModal} title={title} loading={loading}
                                                            setLoadingHandler={setLoadingHandler}/>}/>

        </div>
    );
}

export default App;
