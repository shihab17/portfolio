import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Projects from './Components/Projects/Projects';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import NoFound from './Components/Shared/NoFound/NoFound';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/about'>
          <About></About>
        </Route>
        <Route path='/projects'>
          <Projects></Projects>
        </Route>
        <Route path='/blog'>
          <Blog></Blog>
        </Route>
        <Route path='/contact'>
          <Contact></Contact>
        </Route>
        <Route path='*'>
          <NoFound></NoFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
