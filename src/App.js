import { Routes, Route } from "react-router-dom";
import { CreateCharacter } from "./Components/CreateCharacter";
import { Teste } from "./Components/Teste";
import { Home } from "./Components/Home";
import { CharacterPage } from "./Components/CharacterPage";
import { EditCharacter } from "./Components/EditCharacter";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCharacter />} />
        <Route path="/characters/:characterId" element={<CharacterPage/>} />
        <Route path="/editCharacter/:characterId" element={<EditCharacter/>} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </div>
  );
}

export default App;
