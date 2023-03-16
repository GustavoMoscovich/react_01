import React, {Component} from "react";
import './App.css';

// Componentes
import Header from  "./components/Header/Header";
import NavBar from  "./components/NavBar/NavBar";


class App extends Component {
  render() {
    return (
      <div>
      <div className="App">
        <NavBar/>
      </div>
      <div className="App">
        <Header tituloPrinc="POK-Ecommerce" tituloSecund="El Ecommerce de los amantes de Pokemon"/>
      </div>


      </div>
    );
  }
}

export default App;
