import Home from "./components/Home";
import Navbar from "./components/Navbar";
import "./components/popup.css";
import About from "./components/About";
import Alumni from "./components/Alumni/Alumni";
import Events from "./components/Events/Events";
import Notice from "./components/Notices/Notice";
import Forms from "./components/Forms/Forms";
import Support from "./components/Support/Support";

function App() {

  return (
    <>
      <Navbar />
      <Home/>
      <About />
      <Alumni /> 
      <Events />
      <Notice />
      <Forms />
      <Support />
    </>
  );
}

export default App;
