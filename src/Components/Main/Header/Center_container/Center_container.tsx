import {SearchBar} from '../../../SearchBar/SearchBar'
import  './Center_container.css'
import {FC, ReactNode, useContext} from "react";
import {SearchTags} from "./SearchTags/SearchTags";
import {LangContext} from "../../../../context/lang";

interface IHeaderProps {
    onSearch: (value: string) => void
    translate: (value: string) => string
}

export const Center_container: FC<IHeaderProps> = ({onSearch,translate}) => {

    return (
        <section className={'hero__content hero__content--centered'}>
            <h1 className={'hero__title'}>{translate('headerTitle')}</h1>
            <div className="hero__search-container">
                <SearchBar onSearch={onSearch} extraClass={'search-bar--jumbo'}/>
                <SearchTags onSearch={onSearch} translate={translate}/>
            </div>


        </section>
    )
}
