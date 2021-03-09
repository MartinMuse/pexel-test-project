import React, {Fragment, useEffect, useState} from "react";
import {Header} from "./Header/Header";
import "./Main.css"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {getCuratedPhotos, getPhotos, setError} from "../../Redux/actions/photoActions";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import {Loader} from "../Loader/Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export function Main() {
    const dispatch = useDispatch()
    const {photos, total_results, error} = useSelector((state: RootState) => state.photos)
    const [loading, setLoading] = useState(false);
    const [searchFor, setSearchFor] = useState('')
    const [page, setPage] = useState(1);
    const [mode, setMode] = useState('trending')
    const [title, setTitle] = useState('Trending')

    useEffect(() => {
        dispatch(getCuratedPhotos(1, () => setLoading(false), () => setLoading(false)));
    }, [dispatch]);


    const searchPhotosHandler = (query: string) => {
        if (error) {
            setError('')
        }
        setMode('search')
        setLoading(true);
        setSearchFor(query);
        setPage(prevState => ++prevState);
        setTitle(query)
        dispatch(getPhotos(page, query, () => setLoading(false), () => setLoading(false)))
    }

    const infinitePhotoHandler = () => {
        setLoading(false)
        setPage(prevState => prevState+1)
        if (mode==='trending'){
            dispatch(getCuratedPhotos(page+1, () => setLoading(false), () => setLoading(false)));
        }
        else
        {
            dispatch(getPhotos(page, searchFor, () => setLoading(false), () => setLoading(false)))
        }
    }


    let content = null
    if (loading) {
        content=<Loader/>
    } else {
        content = (
            error
                ? <div className={'notification is-danger mt-6 has-text-centered'}>{error}</div>
                : <Fragment>
                    <h2 className={'is-size-1 has-text-centered py-6'}>{title}</h2>
                    {photos.length > 0
                        ? <InfiniteScroll dataLength={photos.length}
                                          next={infinitePhotoHandler}
                                          hasMore={true}
                                          loader={<Loader/>}>
                            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3, 1200: 4}}>
                                <Masonry gutter={10}>
                                    {photos.map(photo => (
                                        <div key={photo.id} className={'masonry-item'}>
                                            <a href={'/#'} onClick={(e) => {
                                            }}>
                                                <img src={photo.src.large} alt={''}/>
                                            </a>
                                        </div>
                                    ))}
                                </Masonry>

                        </ResponsiveMasonry>
                    </InfiniteScroll>
                        : <p className={'has-text-centered'}>No results</p>
                    }
                </Fragment>
        )
    }
    return (
        <div className={'main'}>
            <Header onSearch={searchPhotosHandler}/>
            <div className={'l-container home-page'}>
                {content}
            </div>
        </div>
    )
}
