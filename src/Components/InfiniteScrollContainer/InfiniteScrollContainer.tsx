import React, {FC} from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import InfiniteScroll from "react-infinite-scroll-component";
import {Photo} from "pexels";
import {PhotoItem} from "../Photo/PhotoItem";

interface IInfiniteScrollContainerProps{
    photos: Photo[]
    next:()=>void
    hasMore: boolean
    loader: any
    imageClickHandler:(e: MouseEvent, photo: Photo)=>void
}

export const InfiniteScrollContainer: FC<IInfiniteScrollContainerProps> = ({photos,next,hasMore,loader,imageClickHandler}) => {
    return (
        <InfiniteScroll dataLength={photos.length}
                        next={next}
                        hasMore={hasMore}
                        loader={loader}>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 1400: 3, 1600: 4}}>
                <Masonry gutter={18} className={'photos'}>
                    {photos.map(photo => (
                        <PhotoItem photo={photo} imageClickHandler={imageClickHandler}/>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        </InfiniteScroll>
    )
}
