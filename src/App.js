import { Routes, Route } from "react-router-dom";
import { CreateCharacter } from "./Components/CreateCharacter";
import ImageWithStatusText from "./Components/Loading";
import { Home } from "./Components/Home";
import { CharacterPage } from "./Components/CharacterPage";
import { EditCharacter } from "./Components/EditCharacter";
import { NavBar } from "./Components/NavBar";
import { Footer } from "./Components/Footer";
import style from "./style.module.css"

function App() {
  return (
    <div className={style.App}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCharacter />} />
        <Route path="/characters/:characterId" element={<CharacterPage />} />
        <Route path="/editCharacter/:characterId" element={<EditCharacter />} />
        <Route
          path="/teste"
          element={
            <ImageWithStatusText
              imageUrl={
                "https://media.tenor.com/1YaP7VXYpz0AAAAM/patrick-star.gif"
              }
            />
          }
        />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
