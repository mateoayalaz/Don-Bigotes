import './App.css';
import Header from './components/Header/Header';
import Descripcion from './components/Descripcion/Descripcion';
import Contenedor from './components/Contenedor/Contenedor';
import Footer from './components/Footer/Footer';

function App() {
  return (
    
    <div className="App">
      <Header/>
      <Descripcion/>
      <Contenedor/>
      <Footer/>
    </div>
  );
}
export default App;
