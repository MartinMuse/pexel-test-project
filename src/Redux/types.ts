import  {Photo} from 'pexels';

export const GET_PHOTOS='GET_PHOTOS';
export const SET_ERROR='SET_ERROR';
export const SET_LIKE='SET_LIKE';
export const DELETE_LIKE='DELETE_LIKE'

export interface IPhotosState{
    photos: Photo[];
    total_results: number;
    error: string;
}

interface IGetPhotosAction{
    type: typeof GET_PHOTOS;
    payload:{
        photos: Photo[];
        page: number,
        total_results: number;
    }
}

interface ISetErrorAction{
    type: typeof SET_ERROR;
    payload: string;
}

interface ISetLike{
    type:typeof SET_LIKE;
    payload: number
}
interface IDeleteLike{
    type:typeof DELETE_LIKE;
    payload: number
}

export type PhotosActions = ISetErrorAction | IGetPhotosAction
export type LikesActions = ISetLike | IDeleteLike


