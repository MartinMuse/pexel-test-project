import {LangActionType, LangState, SetLanguageAction} from "./types";

const localStorageLang = localStorage.getItem('language')
export const initialState = {
    language: localStorageLang ? localStorageLang : 'EN'
}

export const languageReducer = (state: LangState, action: SetLanguageAction): LangState => {
    switch (action.type) {
        case LangActionType.SET_LANGUAGE:
            return {
                language: action.payload
            }
        default:
            return state
    }
}
