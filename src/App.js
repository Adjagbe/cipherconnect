
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './PAGES/Home/Home';
import Connexion from "./PAGES/Connexion/Connexion";
import Inscription from "./PAGES/Inscription/Inscription"
import EditMotDePasse from './PAGES/MotDePasseOublie/MotDePasseOublie'
import Service from './PAGES/Service/Service'
import NumeroClient from "./PAGES/Service/NumeroClient";
import EcranMoniteur from './PAGES/EcranMoniteur/Moniteur'

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/Connexion" element={<Connexion/>}/>
      <Route path="/Inscription" element={<Inscription/>}/>
      <Route path="/Mot_de_passe_oublie" element={<EditMotDePasse/>}/>
      <Route path="/Service" element={<Service/>}/>
      <Route path="/Service/Votre_numero_client" element={<NumeroClient/>}/>
      <Route path="/Moniteur" element={<EcranMoniteur/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
