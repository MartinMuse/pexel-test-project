import {FC} from "react";
import './SearchTags.css'

const LIST_OF_TAGS = [
    'sheep', 'fish', 'love', 'sky',
    'flowers', 'ocean', 'summer', 'sunset',
    'pets', 'woman', 'desert', 'France',
    'Israel', 'Australia', 'horses', 'Paris',
    'rose', 'Belarus', 'rain', 'palm',
    'winter', 'spring', 'beach', 'reading',
    'butterfly','animal','snow','rock',
    'car','mountain','forest','red',
    'yellow', 'city', 'colors', 'tango',
    'pray', 'nature', 'cute','landscape'
]

const MAX_SIZE = 7;

export const SearchTags: FC = () => {

    const randomElement = (arr: Array<string>): string => {
        const random = Math.floor(Math.random() * arr.length);
        return arr[random]
    }

    const createTagsSet = (): any => {
        const result = new Set()
        while (result.size < MAX_SIZE) {
            result.add(randomElement(LIST_OF_TAGS))
        }
        return result
    }

    const createTagsList = (): any => {
        const tagsSet = createTagsSet();
        const result = [];
        for (let tag of tagsSet) {
            result.push(
                <li className="hero__search-container__search-tags__tag-container__tag">
                    <a className="js-popular-search-tag" href="/#">{tag}</a>
                </li>
            )
        }
        return result
    }

    const tagsList = createTagsList()

    return (
        <div className="hero__search-container__search-tags">
            <ul className="hero__search-container__search-tags__tag-container">
                <li className="hero__search-container__search-tags__tag-container__suggested">
                    Suggested<span>:</span></li>
                <li>
                    <ul>
                        {tagsList}
                    </ul>
                </li>
            </ul>
        </div>
    )
}
