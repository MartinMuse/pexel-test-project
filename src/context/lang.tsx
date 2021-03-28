import {createContext, FC, useReducer} from "react";
import ru from '../i18n/ru.json'
import en from '../i18n/en.json'
import {ContextProps, LangActionType, LangStateProps} from "./types";
import {initialState, languageReducer} from "./languageReducer"

export const LangContext = createContext({} as ContextProps)

const LangState: FC<LangStateProps> = ({children}) => {
    const [state, dispatch] = useReducer(languageReducer, initialState)

    const setLanguage = (lang: string) => {
        localStorage.setItem('language', lang)
        dispatch({
            type: LangActionType.SET_LANGUAGE,
            payload: lang
        })
    }

    const translate = (key: string): string => {
        const {language} = state
        let langData: { [key: string]: string } = {}

        if (language === 'EN') {
            langData = en;
        } else if (language === 'RU') {
            langData = ru;
        }
        return langData[key]

    }
    return (
        <LangContext.Provider value={{state, dispatch: {setLanguage, translate}}}>
            {children}
        </LangContext.Provider>
    )

}
export default LangState
