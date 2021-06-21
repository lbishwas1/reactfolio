import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import AboutPage from './pages/AboutPage'
import Landing  from './pages/Landing';
function App() {
  return (
    <>
        <Router>
  
    <Switch>
      <Route path="/" exact component={Landing}/>
      <Route path="/about" component={AboutPage} />
    </Switch>
    </Router>

    </>
  );
}

export default App;
