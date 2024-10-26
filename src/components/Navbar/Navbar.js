import "./Navbar.css";

export const Navbar = ({ links }) => {
  const navbarlinks = links.map((link) => <a>{link}</a>);

  return <div className="navbar">{navbarlinks}</div>;
};
