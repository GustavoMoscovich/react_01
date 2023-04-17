import "./App.css";
// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// COMPONENTS
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

// PAGES
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Cart from "./pages/Cart/Cart"
import Sell from "./pages/Sell/Sell";

// Firebase
import { db } from "./components/Firebase/FirebaseConfig"

// CONTEXT
import { ProductsProvider } from "./context/ContextProd";
import { CartServices } from "./context/ContextCart";


const App = () => {

  return (
    <Router>
      <ProductsProvider  >
        <CartServices >
          <div className="App">
            <NavBar />
            <Header />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/:brand" element={<ItemListContainer />} />
              <Route path="/ItemDetailContainer/:id" element={<ItemDetailContainer />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Sell" element={<Sell />} />
            </Routes>
          </div>
        </CartServices>
      </ProductsProvider>
    </Router>

  );
};

export default App;
