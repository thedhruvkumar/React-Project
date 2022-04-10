import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Slideshow from './Components/Slideshow';

function App() {
  return (
    <>
    <div className="main">
      <NavBar></NavBar>
      <div className="m-auto w-75 h-50">
      <Slideshow></Slideshow>
      </div>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;
