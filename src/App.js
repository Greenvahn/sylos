import React from "react";
import Footer from "./components/footer";
import LinkButton from "./components/linkButton"
import "./App.css";

function App() {
  return (
    <div className="d-flex h-100 text-center text-white bg-dark">
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto">
          <div>
            <h3 className="float-md-start mb-0">Sylos</h3>
            <nav className="nav nav-masthead justify-content-center float-md-end">
              <a
                className="nav-link fw-bold py-1 px-0 active"
                aria-current="page"
                href="https://getbootstrap.com/docs/5.2/examples/cover/#"
              >
                Home
              </a>
              <a
                className="nav-link fw-bold py-1 px-0"
                href="https://getbootstrap.com/docs/5.2/examples/cover/#"
              >
                Features
              </a>
              <a
                className="nav-link fw-bold py-1 px-0"
                href="https://getbootstrap.com/docs/5.2/examples/cover/#"
              >
                Contact
              </a>
            </nav>
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
