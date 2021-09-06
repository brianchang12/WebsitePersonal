import Header from "./components/Header";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header className="text" />
      </div>
      <Switch>
        <Route path="/">
            <Home/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
