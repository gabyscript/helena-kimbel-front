
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {library} from '@fortawesome/fontawesome-svg-core';
import {fab} from '@fortawesome/free-brands-svg-icons';

import LandingPage from './Views/landingPage/landingPage';
import Bio from './Views/Bio/Bio';
import Galeria from './Views/Galeria/Galeria';
import Obra from './Views/Obra/Obra';
import Contacto from './Views/Contacto/Contacto';
import Faq from './Views/Faq/Faq';


library.add(fab)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/galeria/:id" element={<Obra />} />
        </Routes>   
      </BrowserRouter>
      
    </div>
  );
}

export default App;
