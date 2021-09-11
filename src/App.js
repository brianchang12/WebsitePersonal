import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import WorkExperiencePage from "./pages/WorkExperiencePage";
import CoursesPage from "./pages/CoursesPage";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header className="text" />
      </div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/work-experiences">
          <WorkExperiencePage />
        </Route>
        <Route path="/courses">
          <CoursesPage />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
