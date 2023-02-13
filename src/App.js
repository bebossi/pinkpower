
import {Routes, Route} from "react-router-dom"
import { CreateCharacter } from "./Components/CreateCharacter";
import { Home } from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreateCharacter/>} />
      </Routes>
    </div>
  );
}

export default App;
