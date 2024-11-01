import "./App.css";
import { ProjectArticle } from "./components/ProjectArticle/ProjectArticle";
import { Navbar } from "./components/Navbar/Navbar";
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

  const navbarLinks = ["Home", "About", "Projects", "Contact"];

  const article = projectData.map((article) => (
    <ProjectArticle articleData={article} />
  ));

  return (
    <div className="App">
      <head>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
        </style>
      </head>

      <Navbar links={navbarLinks} />

      <div className="Section">
        <h2 className="SectionHeader">
          Hi, my name is <strong>Will</strong>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      <div className="Section">
        <h2 className="SectionHeader">Projects</h2>
        {article}
      </div>

      <div className="Section">
        <h2 className="SectionHeader">Let's talk</h2>
        <p>
          Email: <a href="burnsw72@gmail.com"> burnsw72@gmail.com</a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/WllBrns"> https://github.com/WllBrns</a>
        </p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/william-burns-4a18bb225/">
            https://www.linkedin.com/in/william-burns-4a18bb225/
          </a>
        </p>
      </div>

      {/* <button onClick={() => setIsToggled(!isToggle)}>{`${
        isToggle ? "x" : "-"
      }`}</button> */}
    </div>
  );
}

export default App;
