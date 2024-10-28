import logo from "./logo.svg";
import "./App.css";
import { Button } from "./components/Button/Button";
import { ProjectArticle } from "./components/ProjectArticle/ProjectArticle";
import { Navbar } from "./components/Navbar/Navbar";
import { useState } from "react";

function App() {
  const [isToggle, setIsToggled] = useState(false);

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

      {/* <button onClick={() => setIsToggled(!isToggle)}>{`${
        isToggle ? "x" : "-"
      }`}</button> */}
    </div>
  );
}

export default App;
