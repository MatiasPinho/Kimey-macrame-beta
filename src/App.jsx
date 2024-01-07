import "./App.css";
import { Header } from "./components/header/Header";

import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import { MainHtml } from "./components/pages/main-html/MainHtml";
import { AboutPage } from "./components/pages/about-page/AboutPage";
import { ProductPage } from "./components/pages/product-page/ProductPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<MainHtml />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="products" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
