import {FC} from "react";
import './Footer.css'

interface IFooterProps {
    authorName: string|undefined,
    authorUrl:string|undefined
}

export const Footer: FC<IFooterProps> = ({authorName='',authorUrl='/#'}) => {
    return(
        <div className="hero__footer">
            <div className="hero__footer__item"></div>
            <div className="hero__footer__item hero__footer__item--align-right">
                <a href={authorUrl} target={'_blank'}>
                    Photo by {authorName}
                </a>
            </div>
        </div>
    )
}
