import React from 'react';
import './App.css';


function App() {
  const users = [
    { nom: "Zarrouk", prenom: "ahmed", post: "CEO" },
    { nom: "Limam", prenom: "karima", post: "Executive director" },
    { nom: "Bouziri", prenom: "Rached", post: "Head Master" },
    { nom: "Mouhli", prenom: "Salma", post: "Head of research" },
    { nom: "Kamel", prenom: "Zeineb", post: "Manager" }
  ];
  return (
    <div className="main">
      <div className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="App.js">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="App.js">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="App.js">
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
      <h3> Notre equipe</h3>
      <div className="bigDiv">
        {users.map((ele) => (
          <div>
            <div className="card">
              <img
                src="imageInPublic.jpeg"
                className="card-img-top"
                alt="image1"
              />
              <div className="card-body">
                <span className="card-title">
                  <h5>{ele.nom + " " + ele.prenom}</h5>
                  <br />
                  <h6>{ele.post}</h6>
                </span>
              </div>
              <a href="App.js" className="btn btn-primary">
                plus de details
              </a>
            </div>
          </div>
        ))}
      </div>
      <video width="320" height="240" controls>
        <source src="Angular.mp4" type="video/mp4" />
      </video>
    </div>
  );   
}  
export default App;

