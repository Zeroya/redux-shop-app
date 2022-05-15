import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import ButtonsMenu from './containers/ButtonsMenu';
import Category from './containers/Category';
import Contact from './containers/Contact';
import FalsePage from './containers/FalsePage';
import BreadCrumb from './containers/BreadCrumb';
import Cards from './containers/Cards';
import About from './containers/About';
import Searched from './containers/Searched';
import DescSort from './containers/DescSort';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<><ButtonsMenu /><ProductListing /></>} />
          <Route path="/desc" exact element={<><ButtonsMenu /><DescSort /></>} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/searched/:searched" element={<Searched />} />
          <Route path="/category/:categoryId" element={<><BreadCrumb/><ButtonsMenu /><Category /></>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cards" element={<Cards/>} />
          <Route path="/404" element={<FalsePage />} />
          <Route path="/about" element={<About />} />
          <Route>404 not found</Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
