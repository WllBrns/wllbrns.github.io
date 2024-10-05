import './ProjectArticle.css';
import { Button } from '../Button/Button';

export const ProjectArticle = ({name, description, img}) => {
    return <article className='projectArticle'>
        <img className='projectImg' src={img}></img>
        <h2>{name}</h2>
        <p>{description}</p>
        <Button></Button>
    </article>
}