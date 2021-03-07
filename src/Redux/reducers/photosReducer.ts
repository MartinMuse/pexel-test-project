import {Photo} from 'pexels'
import {GET_PHOTOS, IPhotosState, PhotosActions} from "../types";

const initialState: IPhotosState = {
    photos: [],
    total_results: 0,
    error: ''
}

export const photoReducer = (state = initialState, action: PhotosActions): IPhotosState => {
    switch (action.type) {
        case GET_PHOTOS: {
            const {page, photos, total_results} = action.payload;
            let photosArr: Photo[] = []
            if (page > 1) {
                photosArr = [...state.photos, ...photos]
            } else {
                photosArr = photos;
            }
            return {
                ...state,
                photos: photosArr,
                total_results: total_results,
                error: ''
            }
        }
        case "SET_ERROR":
            return {
                ...state,
                error: action.payload
            }
        default: {
            return state;
        }
    }
}
