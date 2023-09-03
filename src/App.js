import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./components/component.css";
import About from "./components/About";
import Alumni from "./components/Alumni/Alumni";
import Events from "./components/Events/Events";
import Notice from "./components/Notices/Notice";
import Forms from "./components/Forms/Forms";
import Support from "./components/Support/Support";

function App() {

  return (
    <div id="app" className="w-full">
      <Navbar/>
      <Home/>
      <About />
      <Alumni /> 
      <Events />
      <Notice />
      <Forms />
      <Support />
    </div>
  );
}

export default App;
