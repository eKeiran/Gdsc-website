import "./App.css";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import Home from './components/otherComponents/home';
import Events from "./components/Events/Events";
import Team from "./components/otherComponents/team";
import Members from "./components/Members/Members"


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/team" element={<Team/>}/>
      <Route path="/events" element={<Events/>}/>
      <Route path="/members" element={<Members />} />

      
    </Routes>
   </BrowserRouter> 
  );
}

export default App;