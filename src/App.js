import "./App.css";
// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

// PAGES
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Cart from "./pages/Cart/Cart"
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

// CONTEXT
import { ProductsProvider } from "./context/ContextProd";
import { CartServices } from "./context/ContextCart";

const App = () => {

  return (
    <Router>
      <ProductsProvider  >
        <CartServices >
          <div className="App">
            <ToastContainer enableMultiContainer containerId={'long'} autoClose={3000} theme="colored" />
            <ToastContainer enableMultiContainer containerId={'short'} autoClose={1000} theme="colored" />
            <NavBar />
            <Header />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/brand/:brand" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </div>
        </CartServices>
      </ProductsProvider>
    </Router>

  );
};

export default App;
