import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from 'redux-thunk';

import {photoReducer} from './reducers/photosReducer';
import {likesReducer} from "./reducers/likesReducer";
import {collectionReducer} from "./reducers/collectionReducer";

const rootReducer = combineReducers({
    photos: photoReducer,
    likes:likesReducer,
    collection:collectionReducer,
});
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export type RootState = ReturnType<typeof rootReducer>

export default store





