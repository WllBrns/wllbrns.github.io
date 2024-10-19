import "./ProjectArticle.css";
import { Button } from "../Button/Button";

export const ProjectArticle = ({ articleData }) => {
  const { name, img, description, projectLink } = articleData;
  return (
    <article className="projectArticle">
      <img className="projectImg" src={img} />
      <h2 className="projectHeading">{name}</h2>
      <p className="projectParagraph">{description}</p>
      <Button
        className="projectButton"
        href={projectLink}
        label={`Click me`}
      ></Button>
    </article>
  );
};
