
import {Routes, Route} from "react-router-dom"
import { CreateCharacther } from "./Components/CreateCharacther";
import { Home } from "./Components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<CreateCharacther/>} />
      </Routes>
    </div>
  );
}

export default App;
