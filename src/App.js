
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'

import './App.css';
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header/Header'
import LeftSidebar from './components/Sidebar/LeftSidebar'
import RightSidebar from './components/Sidebar/RightSidebar'
import Subheader from './components/Header/Subheader/Subheader'
import Subnav from './components/Header/Subheader/Subnav'
import Main from './components/Main/Main'
import Soccer from './components/Pages/Soccer/Soccer'
import Basketball from './components/Pages/Basketball/Basketball'
import Tables from './components/Pages/Soccer/Tables'
import Results from './components/Pages/Soccer/Tables/Results'
import Tennis from './components/Pages/Tennis/Tennis'
import { DataProvider } from './components/GlobalContext/GlobalContext'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App-wraer">
      <Router>
        <Header />
          <main className="app-container">
            <LeftSidebar />
            <section className="main-section">
              <Subheader />
              <Subnav />
              <DataProvider>
                <Switch>
                  <Route exact path="/"><Main /></Route>
                  <Route  path="/sport" component={Soccer} />
                  <Route  path="/table">
                      <Tables />
                  </Route>
                  <Route  path="/result" component={Results} />
                  <Route exact path="/basketball"><Basketball /></Route>
                  <Route exact path="/tennis"><Tennis /></Route>
                </Switch>
              </DataProvider>
            </section>
            <RightSidebar />
          </main>
      <Footer />
      </Router>

    </div>
  );
}
        // <Header />
        // <ScrollToTop />
        

export default App;
