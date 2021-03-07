import React, {Fragment, useState} from "react";
import {Header} from "./Header/Header";
import styles from "./Main.module.css"
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../Redux/store";
import {getPhotos, setError} from "../../Redux/actions/photoActions";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";


export function Main() {
    const dispatch = useDispatch()
    const {photos, total_results, error} = useSelector((state: RootState) => state.photos)
    const [loading, setLoading] = useState(false);
    const [searchFor, setSearchFor] = useState('')
    const [page, setPage] = useState(1);
    const [mode, setMode] = useState('trending')
    const [title, setTitle] = useState('Trending')

    const searchPhotosHandler = (query: string) => {
        if (error) {
            setError('')
        }
        setMode('search')
        setLoading(true);
        setSearchFor(query);
        setPage(1);
        dispatch(getPhotos(1, query, () => setLoading(false), () => setLoading(false)))

    }

    let content = null
    if (loading) {
        content = <div className={'is-flex is-justify-content-center py-6'}>
            <div className={'loading'}>loading</div>
        </div>
    } else {
        content = (
            error
                ? <div className={'notification is-danger mt-6 has-text-centered'}>{error}</div>
                : <Fragment>
                    <h2 className={'is-size-1 has-text-centered py-6'}>{title}</h2>
                    {photos.length > 0
                        ? <ResponsiveMasonry columnsCountBreakPoint={{480: 2, 900: 3}}>
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
                        : <p className={'has-text-centered'}>No results</p>
                    }
                </Fragment>
        )
    }
    return (
        <div className={styles.main}>
            <Header onSearch={searchPhotosHandler}/>
            <div className="container">
                { content }
            </div>
        </div>
    )
}
