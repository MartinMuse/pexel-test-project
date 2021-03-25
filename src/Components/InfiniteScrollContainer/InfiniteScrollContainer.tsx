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
    likes:number[],
    isCollectionPage?:boolean,
    collection?:Photo[]
}

export const InfiniteScrollContainer: FC<IInfiniteScrollContainerProps> = ({photos,next,hasMore,loader,imageClickHandler,likes,isCollectionPage=false,collection=[]},) => {
    return (
        <InfiniteScroll dataLength={isCollectionPage? collection.length : photos.length}
                        next={next}
                        hasMore={hasMore}
                        loader={loader}>
            <ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 1400: 3, 1600: 4}}>
                <Masonry gutter={18} className={'photos'}>
                    {photos.map(photo => {
                        let isLiked=false
                        let isCollected=false
                        if(likes.indexOf(photo.id)>-1)
                            isLiked=true
                        if(isCollectionPage || (collection?.findIndex((el)=>el.id===photo.id)>-1))
                            isCollected=true
                        return <PhotoItem photo={photo} imageClickHandler={imageClickHandler} isLiked={isLiked} isCollected={isCollected}/>}
                    )}
                </Masonry>
            </ResponsiveMasonry>
        </InfiniteScroll>
    )
}
