import "./Button.css";

export const Button = ({ label, onClick, href, className }) => {
  return (
    <a
      href={href ? href : "#"}
      className={`button ${href ? "" : "disabled"} ${className}`}
      onClick={onClick}
    >
      {href ? label : "Link is disabled."}
    </a>
  );
};
