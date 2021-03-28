import {ReactNode} from "react";

export enum LangActionType {
    SET_LANGUAGE = 'SET_LANGUAGE'
}

export interface LangState {
    language: string,
}

export interface LangStateProps {
    children: ReactNode
}

export interface SetLanguageAction {
    type: typeof LangActionType.SET_LANGUAGE,
    payload: string
}

export interface ContextProps {
    state: LangState,
    dispatch: {
        setLanguage: (lang: string) => void;
        translate: (key: string) => string
    }
}
