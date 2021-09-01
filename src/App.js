import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Header className="text"/>
      </div>
    </Router>
  );
}

export default App;
