import {CollectionActions, DELETE_COLLECTION_ITEM, SET_COLLECTION_ITEM} from "../types";
import {Photo} from "pexels";

const setStartSet = () => {
    const collection = localStorage.getItem('collection')
    if (collection)
        return JSON.parse(collection)
    return []
}

interface ICollectionState {
    collection: Photo[]
}

const initialState: ICollectionState = {
    collection: setStartSet()
}

export const collectionReducer = (state = initialState, action: CollectionActions): ICollectionState => {
    switch (action.type) {
        case SET_COLLECTION_ITEM: {
            const collection = [...state.collection, action.payload]
            localStorage.setItem('collection', JSON.stringify(collection))
            return {
                collection: collection
            }
        }
        case DELETE_COLLECTION_ITEM:
            const collection = [...state.collection]
            const index = collection.findIndex(photo=>photo.id===action.payload)
            if (index > -1)
                collection.splice(index, 1)
            localStorage.setItem('collection', JSON.stringify(collection))
            return {
                collection: collection
            }
        default: {
            return state;
        }
    }
}
