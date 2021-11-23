import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,  BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Academics from './components/Academics/Academics';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Courses from './components/Courses/Courses';


function App() {
  return (
    <div className="App">
     <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/home"><Home></Home></Route>
          <Route exact path="/courses"><Courses></Courses></Route>
          <Route exact path="/academics"><Academics></Academics></Route>
          <Route exact path="/about"><About></About></Route>
          <Route path="*"><NotFound></NotFound></Route>
        </Switch>
        <Footer></Footer>
     </Router>
    </div>
  );
}

export default App;
