import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button/Button';
import { ProjectArticle } from './components/ProjectArticle/ProjectArticle';

function App() {

  function Alert() {
    window.alert("yay");
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button label="Click me" onClick={Alert}/>
      </header>

      <article className='projects'>
        <h2>Projects</h2>
        <ProjectArticle 
          name="First Project" 
          img="../public/placeholder.jpeg" 
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        >

        </ProjectArticle>
        <ProjectArticle name="Second Project" img="../public/placeholder.jpeg" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."></ProjectArticle>
      </article>

    </div>
  );
}

export default App;
