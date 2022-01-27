import './App.css';
import Homepage from './page/Homepage';
import {Switch,Route} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage}/>
    </Switch>
  );
}

export default App;
