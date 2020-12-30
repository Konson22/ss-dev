
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import About from './components/About/About'
import Courses from './components/Courses/Courses'
import Projects from './components/Projects/Projects'
import Team from './components/Team/Team'
import Profile from './components/Team/Profile'
import Footer from './components/Footer/Footer'
import Login from './components/Forms/Login'
import Signup from './components/Forms/Signup'
import RegisterForm from './components/RegisterForm/RegisterForm'

function App() {
  return (
    <div className="App-wraper">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/"><Main /></Route>
          <Route exact path="/ss-dev"><Main /></Route>
          <Route exact path="/about"><About /></Route>
          <Route exact path="/courses"><Courses /></Route>
          <Route exact path="/projects"><Projects /></Route>
          <Route exact path="/team"><Team /></Route>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/signup"><Signup /></Route>
          <Route exact path="/register"><RegisterForm /></Route>
          <Route exact path="/profile/:id"><Profile /></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
