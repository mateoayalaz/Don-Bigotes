
import './App.css';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar navbar-expand-lg navbar-light px-6  py-3">
          <div className="container-fluid">
            <a href={'http://google.com'}>
              <img src="img/Logo.svg" width="123" height="43" className="d-inline-block align-top" alt=""/>
              Google</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href={'http://google.com'}>Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={'http://google.com'}>Servicios</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={'http://google.com'}>Mis Reservas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={'http://google.com'}>Nosotros</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href={'http://google.com'}>Contacto</a>
                </li>
                
              </ul>
              <div className="d-flex align-items-center">
                  <button type="button" className="btn btn-sm px-3 me-2">
                    Registrarse
                  </button>
                  <button type="button" id="boton-iniciar-sesion" className="btn btn-sm  px-3">
                    Iniciar Sesion
                  </button>
              </div>
          </div>
        </div>
      </nav>
        
          
      </header>
    </div>
  );
}

export default App;
