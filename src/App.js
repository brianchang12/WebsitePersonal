import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import WorkExperience from "./pages/WorkExperience";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header className="text" />
      </div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/work-experiences">
          <WorkExperience />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
