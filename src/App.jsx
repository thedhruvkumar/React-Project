import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Slideshow from './Components/Slideshow';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>
    <div className="main">
      <NavBar></NavBar>
      <div className="container">
      <TextForm></TextForm>
      </div>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;
