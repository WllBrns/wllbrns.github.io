import "./Navbar.css";

export const Navbar = ({ links }) => {
  const navbarlinks = links.map((link) => (
    <a key={link.href} href={`#${link.href}`}>
      {link.name}
    </a>
  ));

  return <div className="navbar">{navbarlinks}</div>;
};
