import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Dictionary from './Components/Dictionary';
import Contact from './Components/Contact';
import Login from './Components/Login';

function App() {
  return (
    <>
    
    <BrowserRouter>
    <NavBar/>
      <Routes>
          <Route index element={<div className='container m-5 p-5'>Navigate through links</div>}/>
          <Route path="/blogs" element={<Footer/>} />
          <Route path="/dict" element={<Dictionary />} />
          <Route path="/text" element={<TextForm/>} />
          <Route path="/contact" element={<Contact/>} />
      <Route path="/login" element={<Login></Login>}/>        
      </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
