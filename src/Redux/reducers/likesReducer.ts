import {DELETE_LIKE, LikesActions, SET_LIKE} from "../types";

const setStartSet = () => {
    const likes = localStorage.getItem('likes')
    if (likes)
        return JSON.parse(likes)
    return []
}

interface ILikesState {
    likes: number[]
}

const initialState: ILikesState = {
    likes: setStartSet()
}

export const likesReducer = (state = initialState, action: LikesActions): ILikesState => {
    switch (action.type) {
        case SET_LIKE: {
            const likes = [...state.likes, action.payload]
            localStorage.setItem('likes', JSON.stringify(likes))
            return {
                likes: likes
            }
        }
        case DELETE_LIKE:
            const likes = [...state.likes]
            const index = likes.indexOf(action.payload)
            if (index > -1)
                likes.splice(index, 1)
            localStorage.setItem('likes', JSON.stringify(likes))
            return {
                likes: likes
            }
        default: {
            return state;
        }
    }
}
