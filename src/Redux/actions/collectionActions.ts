import {CollectionActions, DELETE_COLLECTION_ITEM, SET_COLLECTION_ITEM} from "../types";
import {Photo} from "pexels";

export const deleteCollectionItem=(id:number):CollectionActions=>{
    return{
        type:DELETE_COLLECTION_ITEM,
        payload:id
    }
}
export const setCollectionItem=(photo:Photo):CollectionActions=>{
    return{
        type:SET_COLLECTION_ITEM,
        payload:photo
    }
}
