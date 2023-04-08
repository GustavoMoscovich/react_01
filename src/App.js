import "./App.css";
// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

// PAGES
import Home from "./pages/Home/Home";
import ProdDetail from "./pages/ProdDetail/ProdDetail";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:brand" element={<Home />} />
          <Route path="/ProdDetail/:id" element={<ProdDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
