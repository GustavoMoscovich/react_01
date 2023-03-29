import "./App.css";
// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

// PAGES
import Home from "./pages/Home/Home";
import Colmi from "./pages/Colmi/Colmi";
import Garmin from "./pages/Garmin/Garmin";
import Samsung from "./pages/Samsung/Samsung";
import Xiaomi from "./pages/Xiaomi/Xiaomi";
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
          <Route path="/Colmi" element={<Colmi />} />
          <Route path="/Garmin" element={<Garmin />} />
          <Route path="/Samsung" element={<Samsung />} />
          <Route path="/Xiaomi" element={<Xiaomi />} />
          <Route path="/ProdDetail/:id" element={<ProdDetail />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
