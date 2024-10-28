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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      projectLink: "https://www.google.com",
    },
    {
      name: "Second Project",
      img: "https://picsum.photos/208/130",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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

      <Navbar links={navbarLinks}></Navbar>

      <div className="AboutSection">
        <h2>
          Hi, my name is <bold>Will</bold>
        </h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </p>
      </div>

      {article}

      {/* <button onClick={() => setIsToggled(!isToggle)}>{`${
        isToggle ? "x" : "-"
      }`}</button> */}
    </div>
  );
}

export default App;
