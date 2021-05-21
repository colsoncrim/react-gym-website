import './App.css';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Crossfit from './components/pages/Crossfit'
import PersonalTraining from './components/pages/PersonalTraining';
import OpenGym from './components/pages/OpenGym';
import GroupClass from './components/pages/GroupClass';
import FunctionalTraining from './components/pages/FunctionalTraining';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path="/crossfit" component={Crossfit} />
        <Route path="/personal-training" component={PersonalTraining} />
        <Route path="/open-gym" component={OpenGym} />
        <Route path="/group-class" component={GroupClass} />
        <Route path="/functional-training" component={FunctionalTraining} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
