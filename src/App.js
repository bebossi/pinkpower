import { Routes, Route } from "react-router-dom";
import { CreateCharacter } from "./Components/CreateCharacter";
import { Home } from "./Components/Home";
import { CharacterPage } from "./Components/CharacterPage";
import { EditCharacter } from "./Components/EditCharacter";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import style from "./style.module.css"

import { Toaster } from "react-hot-toast";
import { AboutUs } from "./Components/teste";


function App() {
  return (
    <div className={style.App}>
      <Toaster />

      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCharacter />} />
        <Route path="/characters/:characterId" element={<CharacterPage />} />
        <Route path="/editCharacter/:characterId" element={<EditCharacter />} />
        <Route path="/teste" element={<AboutUs/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
