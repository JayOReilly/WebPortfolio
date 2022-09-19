
import Tailwind from './index.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import {Canvas} from "@react-three/fiber";
import Work from "./components/Work";






function App() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }


  return (

    
    
   <div className="flex flex-col pattern-cross  pattern-blue-500 pattern-bg-white 
   pattern-size-6 pattern-opacity-40">
    

    
    <Navbar />
    
    <Home />

    <About />

    <Work />

    <Skills />

    <Contact />

    
   

    

   </div>
    
   
   
  );
  
}

export default App;

