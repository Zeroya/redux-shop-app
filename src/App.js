import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import ButtonsMenu from './containers/ButtonsMenu';
import Category from './containers/Category';
import Contact from './containers/Contact';
import FalsePage from './containers/FalsePage';
import BreadCrumb from './containers/BreadCrumb';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<><ButtonsMenu /><ProductListing /></>} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/category/:categoryId" element={<><BreadCrumb/><ButtonsMenu /><Category /></>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<FalsePage />} />
          <Route>404 not found</Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
