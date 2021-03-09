import {createClient, ErrorResponse, Photos, PhotosWithTotalResults} from "pexels";
import {ThunkAction} from "redux-thunk";

import {RootState} from "../store";
import {GET_PHOTOS, PhotosActions, SET_ERROR} from "../types";

const client = createClient('563492ad6f91700001000001f3da6c8357e54f0489449c8eea658713')

export const getPhotos = (page: number, searchQuery: string,
                          onSuccess: () => void, onError: () => void)
    : ThunkAction<void, RootState, null, PhotosActions> => {
    return async dispatch => {
        try {
            const photos: PhotosWithTotalResults | ErrorResponse = await client.photos.search({
                page: page,
                query: searchQuery,
                per_page: 28
            });
            if ("error" in photos) {
                throw new Error(photos.error)
            } else {
                dispatch({
                        type: GET_PHOTOS,
                        payload: {
                            photos: photos.photos,
                            page:page,
                            total_results: photos.total_results
                        }
                    })
                onSuccess();
            }
        } catch (err) {
            dispatch(setError(err.message))
            onError();
        }

    }
}

export const getCuratedPhotos=(page:number, onSuccess:()=>void,onError:()=>void)
    :ThunkAction<void, RootState, null, PhotosActions> =>{
    return async dispatch=>{
        try{
            const photos: Photos|ErrorResponse=await client.photos.curated({page,per_page:28});
            if("error" in photos){
                throw new Error(photos.error);
            }else {
                dispatch({
                    type: GET_PHOTOS,
                    payload: {
                        photos: photos.photos,
                        page: page,
                        total_results: 0
                    }
                })
                onSuccess();
            }
        }catch (err){
            dispatch(setError(err.message));
            onError();
        }
    }
}

export const setError=(err:string):PhotosActions=>{
    return{
        type:SET_ERROR,
        payload:err
    }
}
