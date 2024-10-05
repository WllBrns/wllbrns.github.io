import "./Button.css";

export const Button = ({ label, onClick, href }) => {
  return (
    <a
      href={href ? href : "#"}
      className={`button ${href ? "" : "disabled"}`}
      onClick={onClick}
    >
      {href ? label : "Link is disabled."}
    </a>
  );
};
