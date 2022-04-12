import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Slideshow from "./Components/Slideshow"
import Dictionary from "./Components/Dictionary"
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="features" element={<Slideshow></Slideshow>} />
      <Route path="dictionary" element={<Dictionary/>} />
    </Routes>
  </BrowserRouter>,
  rootElement
);