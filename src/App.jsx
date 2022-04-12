import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Dictionary from './Components/Dictionary';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
        <NavBar/>
        <TextForm/>
        <Footer/>
          </>}>
          <Route index element={<TextForm/>} />
          <Route path="/blogs" element={<Footer/>} />
          <Route path="/contact" element={<Dictionary />} />
          <Route path="/text" element={<TextForm/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
