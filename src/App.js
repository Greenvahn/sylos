import React from "react";
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
  return (
    <div className="d-flex h-100 text-center text-white bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Sylos</h3>
            <NavBar links={links}/>
          </div>
        </header>

        <main className="px-3">
          <h1>Cover your page.</h1>
          <p className="lead">
            Cover is a one-page template for building simple and beautiful home
            pages. Download, edit the text, and add your own fullscreen
            background photo to make it your own.
          </p>
          <p className="lead">
            <LinkButton text="Ramdomize"/>
          </p>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
