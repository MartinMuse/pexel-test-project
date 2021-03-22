import React, {FC} from "react";
import './PhotoDetailsSection.css'

interface IPhotoDetailsSectionProps{
    authorName:string,
    authorUrl: string,
}

export const PhotoDetailsSection:FC<IPhotoDetailsSectionProps>=({authorUrl,authorName})=>{
    return (
        <section className="photo-page__section photo-page__section--photo-details">
            <div className="photo-page__photo-details-overview js-photo-page-photo-details">
                <div className="photo-page__visible-on-mobile">
                    <div className="rd__card js-photo-page-photographer-card">
                        <div className="rd__card__title js-photo-page-photographer-card-title">
                            Photographer
                        </div>
                        <div className="rd__card__section">
                            <a className="js-photo-page-photographer-card-link photo-page__mini-profile"
                               data-track-action="medium-info-photographer"
                               data-track-label="mini-profile-link" href={authorUrl}>
                                <div
                                    className="photo-page__mini-profile__avatar rd__avatar rd__avatar--large">
                                    <img alt={authorName}
                                         className="js-photo-page-photographer-card-img" height="50"
                                         src="https://image.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg"
                                         width="50"/>
                                </div>
                                <div className="photo-page__mini-profile__text">
                                    <h3 className="js-photo-page-photographer-card-full-name photo-page__mini-profile__text__title">{authorName}</h3>
                                    <h4 className="photo-page__mini-profile__text__subtitle">
                                    </h4>
                                </div>
                            </a>
                        </div>
                        <div className="rd__card__section">

                        </div>
                    </div>
                </div>
                <p className="js-photo-details-description photo-page__photo-details-overview__description"></p>

            </div>
        </section>
    )
}
