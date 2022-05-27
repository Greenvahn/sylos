import React, { useState } from "react";
import generateName from "./utils/RandomName";
import generateAge from "./utils/RandomAge";
import generateGender from "./utils/RandomGender";
import storyteller from "./utils/RandomDescription";
import NavBar from "./components/navBar";
import Description from "./components/description";
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
  const [age, setAge] = useState();
  const [gender, setGender] = useState();
  // const nameRef = useRef(name);
  // const genderRef = useRef(gender);
  // const [description, setDescription] = useState();

  const clickMe = () => {
    setName(generateName());
    setAge(generateAge());
    setGender(generateGender());
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
          {name ? <p style={{fontSize: "32px"}}>{name}</p> : false}
          <div className="row gx-3 gy-2 align-items-center mx-auto mb-5" style={{maxWidth: "365px"}}>
            <div className="col-sm">{age ? <p style={{fontSize: "22px"}}>Age: {age}</p> : false}</div>
            <div className="col-sm">{gender ? <p style={{fontSize: "22px"}}>Gender: {gender.gen}</p> : false}</div>
          </div>
          {name && gender ? <Description text={storyteller(name, gender)} /> : false}
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
