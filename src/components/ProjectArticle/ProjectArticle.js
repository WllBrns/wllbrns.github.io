import "./ProjectArticle.css";
import { Button } from "../Button/Button";

export const ProjectArticle = ({ articleData }) => {
  const { name, img, description } = articleData;
  return (
    <article className="projectArticle">
      <img className="projectImg" src={img} />
      <h2>{name}</h2>
      <p>{description}</p>
      <Button label={`Go to ${name}`}></Button>
    </article>
  );
};
