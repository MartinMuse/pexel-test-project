import React, {FC} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";
import {Photo} from "pexels";
import {PhotoItem} from "../Photo/PhotoItem";
import {useSelector} from "react-redux";
import {RootState} from "../../Redux/store";

interface IInfiniteScrollContainerProps{
    photos: Photo[]
    next:()=>void
    hasMore: boolean
    loader: any
    imageClickHandler:(e: MouseEvent, photo: Photo)=>void,
    likes:number[]
}

export const InfiniteScrollContainer: FC<IInfiniteScrollContainerProps> = ({photos,next,hasMore,loader,imageClickHandler,likes}) => {
    return (
        <InfiniteScroll dataLength={photos.length}
                        next={next}
                        hasMore={hasMore}
                        loader={loader}>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 1400: 3, 1600: 4}}>
                <Masonry gutter={18} className={'photos'}>
                    {photos.map(photo => {
                        let isLiked=false
                        if(likes.indexOf(photo.id)>-1)
                            isLiked=true
                        return <PhotoItem photo={photo} imageClickHandler={imageClickHandler} isLiked={isLiked}/>}
                    )}
                </Masonry>
            </ResponsiveMasonry>
        </InfiniteScroll>
    )
}
