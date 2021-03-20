import {FC, useState} from "react";
import './Navbar.css'
import {SearchBar} from "../SearchBar/SearchBar";

interface INavbarProps {
    onSearch: (value: string) => void
    isAlwaysActive?: boolean
}

export const Navbar: FC<INavbarProps> = ({onSearch, isAlwaysActive = false}) => {
    const [navbar, setNavbar] = useState(isAlwaysActive?'active_nav':'')
    const [searchbar, setSearchbar] = useState(isAlwaysActive?'active_search':'none')
    const changeBackground = () => {
        if (window.scrollY >= 130) {
            setNavbar('active_nav')
            setSearchbar('active_search')
        } else if (!isAlwaysActive) {
            setNavbar('')
            setSearchbar('none')
        }
    }
    window.addEventListener('scroll', changeBackground)


    return (
        <nav className={`main-nav-bar ${navbar}`}>
            <a className="main-nav-bar__logo" href="/main" title="Free Stock Photos">
                <div className="main-nav-bar__logo__img">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 32 32">
                        <path d="M2 0h28a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"
                              fill="#05A081"></path>
                        <path
                            d="M13 21h3.863v-3.752h1.167a3.124 3.124 0 1 0 0-6.248H13v10zm5.863 2H11V9h7.03a5.124 5.124 0 0 1 .833 10.18V23z"
                            fill="#fff"></path>
                    </svg>
                </div>
                <div className="hide-when-mid-size-and-smaller main-nav-bar__logo__text">Pexels</div>
            </a>
            <div className={'main-nav-bar__search-bar'}>
                <SearchBar onSearch={onSearch} placeHolder={'Search for free photos'} activeClass={searchbar}/>
            </div>
            <ul>
            </ul>
        </nav>)

}
