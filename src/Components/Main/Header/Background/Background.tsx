import styles from './Background.module.css'
import image from '../../../../pexels-image.jpg'

export function Background() {
    return(
        <div className={styles.background}>
            <img src={image} />
        </div>
    )
}
