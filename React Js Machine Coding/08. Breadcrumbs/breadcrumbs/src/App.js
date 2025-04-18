import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import ProductListing from "./pages/ProductListing";
import Breadcrumbs from "./components/Breadcrumbs";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <h1>Heading</h1>
        <Breadcrumbs />
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
