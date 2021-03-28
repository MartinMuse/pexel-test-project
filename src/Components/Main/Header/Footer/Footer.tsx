import {FC} from "react";
import './Footer.css'

interface IFooterProps {
    authorName: string|undefined,
    authorUrl:string|undefined,
    translate: (value: string) => string
}

export const Footer: FC<IFooterProps> = ({authorName='',authorUrl='/#',translate}) => {
    return(
        <div className="hero__footer">
            <div className="hero__footer__item"></div>
            <div className="hero__footer__item hero__footer__item--align-right">
                <a href={authorUrl} target={'_blank'}>
                    {`${translate('backgroundAuthor')} ${authorName}`}
                </a>
            </div>
        </div>
    )
}
