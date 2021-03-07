import  {Photo} from 'pexels';

export const GET_PHOTOS='GET_PHOTOS';
export const SET_ERROR='SET_ERROR';

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

export type PhotosActions = ISetErrorAction | IGetPhotosAction


