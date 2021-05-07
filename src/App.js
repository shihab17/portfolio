import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import NoFound from './Components/Shared/NoFound/NoFound';
import Blogs from './Components/Blogs/Blogs';
import PFiveJS from './Components/Project/PFiveJS/PFiveJS';
import Navbar from './Components/Shared/Navbar/Navbar';
import SocialButtons from './Components/Shared/SocialButtons/SocialButtons';
import Footer from './Components/Shared/Footer/Footer';
import ProjectDetails from './Components/ProjectDetails/ProjectDetails';
function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <Navbar></Navbar>
          <SocialButtons></SocialButtons>
          <About></About>
          <Footer></Footer>
        </Route>
        <Route path='/projects'>
          <Navbar></Navbar>
          <SocialButtons></SocialButtons>
          <Projects></Projects>
          <Footer></Footer>
        </Route>
        <Route path='/blog'>
          <Blogs></Blogs>
        </Route>
        <Route path='/contact'>
          <Navbar></Navbar>
          <Contact></Contact>
          <Footer></Footer>
        </Route>
        <Route path='/projectDetails/:projectId'>
          <ProjectDetails></ProjectDetails>
        </Route>
        <Route path='/p5js'>
          <PFiveJS></PFiveJS>
        </Route>
        <Route path='*'>
          <NoFound></NoFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
