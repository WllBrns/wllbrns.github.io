import "./Button.css";

export const Button = ({ label, onClick, href }) => {
  return (
    <a href={href} className="button" onClick={onClick}>
      {label}
    </a>
  );
};
