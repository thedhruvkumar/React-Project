import './App.css';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Slideshow from './Components/Slideshow';

function App() {
  return (
    <>
    <div className="main">
      <NavBar></NavBar>
      <div className="my-40">

      <Slideshow></Slideshow>
      </div>
      <Footer></Footer>
    </div>
    </>
  );
}

export default App;
