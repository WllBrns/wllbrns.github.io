import { IoMdMail } from "react-icons/io";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import "./App.css";
import { ProjectArticle } from "./components/ProjectArticle/ProjectArticle";
import { Navbar } from "./components/Navbar/Navbar";
import { Section } from "./components/Section/Section";
// import { useState } from "react";

function App() {
  // const [isToggle, setIsToggled] = useState(false);

  const projectData = [
    {
      name: "First Project",
      img: "https://picsum.photos/208/130",
      description:
        "It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of  using Lorem Ipsum",
      projectLink: "https://www.google.com",
    },
    {
      name: "Second Project",
      img: "https://picsum.photos/208/130",
      description:
        "It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout. The point of  using Lorem Ipsum",
      projectLink: "https://www.google.com",
    },
  ];

  const navbarLinks = [
    { name: "About", href: "aboutSection" },
    { name: "Projects", href: "projectsSection" },
    { name: "Contact", href: "contactSection" },
  ];

  const article = projectData.map((article) => (
    <ProjectArticle key={article.name} articleData={article} />
  ));

  return (
    <div className="App">
      <Navbar links={navbarLinks} />

      <Section
        heading={
          <span>
            Hi, my name is <span id="Will">Will</span>
          </span>
        }
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </Section>

      <Section heading={"Projects"} children={article} />

      <Section heading={"Let's Talk"}>
        <p className="contactP">
          <a href="mailto:burnsw72@gmail.com">
            <IoMdMail /> burnsw72@gmail.com
          </a>
        </p>
        <p className="contactP">
          <a href="https://github.com/WllBrns">
            <FaGithub /> https://github.com/WllBrns
          </a>
        </p>
        <p className="contactP">
          <a href="https://www.linkedin.com/in/william-burns-4a18bb225/">
            <FaLinkedin /> https://www.linkedin.com/in/william-burns-4a18bb225/
          </a>
        </p>
      </Section>

      {/* <button onClick={() => setIsToggled(!isToggle)}>{`${
        isToggle ? "x" : "-"
      }`}</button> */}
    </div>
  );
}

export default App;
