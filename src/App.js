import React, { useState } from "react";
import generate from "./utils/RandomName";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import LinkButton from "./components/linkButton"
import "./App.css";

function App() {
  const links = [
    {
      "text": "Contact",
      "url": "https://github.com/Greenvahn"
    },
    {
      "text": "Other",
      "url": "https://github.com/Greenvahn"
    }
  ]

  const [name, setName] = useState();
  const clickMe = (event) => {
    event.preventDefault();
    setName(generate());
  };
  return (
    <div className="d-flex h-100 text-center text-white bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-5">
          <div>
            <h3 className="float-md-start mb-0">Sylos <span className="fw-light fs-5">| Profile Generator</span></h3>
            <NavBar links={links}/>
          </div>
        </header>

        <main className="px-3">
          <p className="lead">
            Generate random characters
          </p>
          <p className="lead">
            <LinkButton text="Ramdomize" action={clickMe}/>
          </p>
          <p style={{fontSize: "33px"}}>{name}</p>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
