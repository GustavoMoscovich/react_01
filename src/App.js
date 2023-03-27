import React, {Component} from "react";
import './App.css';

// Componentes
//import Header from  "./components/Header/Header";
import NavBar from  "./components/NavBar/NavBar";
import BloqueSuperior from "./components/BloqueSuperior/BloqueSuperior";
import Gridprod from "./components/Gridrprod/Gridprod";

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <NavBar/>
        </div>
        <div className="App">
          <BloqueSuperior tituloPrinc="Only Smart Watchs" />
        </div>
        <Gridprod />
      </div>
    );
  }
}

export default App;
