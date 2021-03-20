import {SearchBar} from '../../../SearchBar/SearchBar'
import  './Center_container.css'
import {FC} from "react";
import {SearchTags} from "./SearchTags/SearchTags";

interface IHeaderProps {
    onSearch: (value: string) => void
}

export const Center_container: FC<IHeaderProps> = ({onSearch}) => {
    return (
        <section className={'hero__content hero__content--centered'}>
            <h1 className={'hero__title'}>The best free stock photos &
                videos shared by talented creators.</h1>
            <div className="hero__search-container">
                <SearchBar onSearch={onSearch} extraClass={'search-bar--jumbo'}/>
                <SearchTags onSearch={onSearch}/>
            </div>


        </section>
    )
}
