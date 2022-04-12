import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Dictionary from './Components/Dictionary';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<TextForm></TextForm>}/>
          <Route path="/blogs" element={<Footer/>} />
          <Route path="/dict" element={<Dictionary />} />
          <Route path="/text" element={<TextForm/>} />
          <Route path="/contact" element={<Contact/>} />
        
      </Routes>
    </BrowserRouter>
    <Footer></Footer>
    </>
  );
}

export default App;
