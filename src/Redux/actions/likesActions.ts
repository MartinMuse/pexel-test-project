import {DELETE_LIKE, LikesActions, SET_LIKE} from "../types";

export const deleteLike=(id:number):LikesActions=>{
    return{
        type:DELETE_LIKE,
        payload:id
    }
}
export const setLike=(id:number):LikesActions=>{
    return{
        type:SET_LIKE,
        payload:id
    }
}
