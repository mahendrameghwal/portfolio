
import { BrowserRouter, Routes , Route, useNavigate } from "react-router-dom";
import AboutMe from "./components/innerComponent/AboutMe";
import Contacts from "./components/innerComponent/Contacts";
import Projects from "./components/innerComponent/Projects";
import Skills from "./components/innerComponent/Skills";
import Wrapper from "./components/Wrapper";

function App() {



 
  return (



    <div className="App">
    
     <BrowserRouter>
     <Routes>
     <Route   path="/" element={<Wrapper/>}>
     
     <Route  path="/" element={<AboutMe/>}/>
     <Route path="/projects" element={<Projects/>}/>
     <Route path="/skills" element={<Skills/>}/>
     <Route path="/contacts" element={<Contacts/>}/>
     
     </Route>
     </Routes>
     
     </BrowserRouter>

    </div>
  );
}

export default App;
