import {FC} from "react";
import './Footer.css'

export const Footer:FC=()=>{
    return(
        <footer className="footer">

            <ul className="footer__body">
                <li style={{flexBasis:'80%'}}>
                    <ul className="footer__body__column">
                        <li>
                            <div className="footer__body__column__title">Pexels</div>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/about/" target={"_blank"}>About</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/blog" target={"_blank"}>Blog</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://help.pexels.com/hc/en-us" target={"_blank"}>FAQ</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/hero/" target={"_blank"}>Become a hero</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/become-a-partner/" target={"_blank"}>Partner with Pexels</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/api/" target={"_blank"}>Image &amp; Video API</a>
                        </li>
                        <li>
                            <div className="rd__button-group rd__button-group--bar rd__button-group--no-shadow">
                                <a className="footer__link rd__button rd__button--text-white" href="https://www.facebook.com/pexels"
                                 style={{paddingLeft:'0'}} target="_blank" title="Facebook">
                                    <i className="icon-facebook"></i>
                                </a>
                                <a className="footer__link rd__button rd__button--text-white"
                                   href="https://twitter.com/pexels" target="_blank" title="Twitter">
                                    <i className="icon-twitter"></i>
                                </a>
                                <a className="footer__link rd__button rd__button--text-white"
                                  href="https://instagram.com/pexels/"
                                   target="_blank" title="Instagram">
                                    <i className="icon-instagram"></i>
                                </a>
                                <a className="footer__link rd__button rd__button--text-white"
                                  href="https://www.pinterest.com/pexels" target="_blank" title="Pinterest">
                                    <i className="icon-pinterest"></i>
                                </a>
                            </div>
                        </li>
                    </ul>
                </li>
                <li style={{flexBasis:'80%'}}>
                    <ul className="footer__body__column">
                        <li>
                            <div className="footer__body__column__title">Apps &amp; Plugins</div>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link"
                               href="https://itunes.apple.com/us/app/pexels/id1434330413"
                               target="_blank">Pexels for iOS</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link"
                               href="https://play.google.com/store/apps/details?id=com.pexels.app" target="_blank">Pexels for Android</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/pro/" target={"_blank"}>Other plugins &amp; apps</a>
                        </li>
                    </ul>
                </li>
                <li style={{flexBasis:'120%'}}>
                    <ul className="footer__body__column">
                        <li>
                            <div className="footer__body__column__title">Free Stock Photos</div>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/popular-searches/" target={"_blank"}>Popular searches</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/search/black%20and%20white/" target={"_blank"}>Black and white
                                photography</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link"href="https://www.pexels.com/search/happy%20birthday/" target={"_blank"}>Happy birthday
                                images</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/search/videos/business/" target={"_blank"}>Free business
                                videos</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/search/happy%20new%20year/" target={"_blank"}>Happy new year
                                images</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/search/cool%20wallpaper/" target={"_blank"}>Cool wallpaper</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/search/HD%20wallpapers/" target={"_blank"}>Best HD
                                wallpapers</a>
                        </li>
                    </ul>
                </li>
                <li style={{flexBasis:'90%'}}>
                    <ul className="footer__body__column">
                        <li>
                            <div className="footer__body__column__title">Wallpapers</div>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/search/galaxy%20wallpaper/" target={"_blank"}>Galaxy
                                wallpaper</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/search/lock%20screen%20wallpaper/" target={"_blank"}>Lock
                                screen wallpaper</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/search/iphone%20wallpaper/" target={"_blank"}>Iphone
                                wallpaper</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/search/4k%20wallpaper/" target={"_blank"}>4k wallpaper</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/search/samsung%20wallpaper/" target={"_blank"}>Samsung
                                wallpaper</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/search/love%20wallpaper/" target={"_blank"}>Love wallpaper</a>
                        </li>
                        <li>
                            <a className="footer__link footer__body__column__link" href="https://www.pexels.com/search/mobile%20wallpaper/" target={"_blank"}>Mobile
                                wallpaper</a>
                        </li>
                    </ul>
                </li>
            </ul>

        </footer>
    )
}
