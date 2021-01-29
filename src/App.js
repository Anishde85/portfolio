import proj from './pro.js'
import cc from './cp.js'
import edu from './educ.js'
import intro from './intro.js'
import back2 from './back2.jpg'
import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './index.css';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'
class App extends Component {render(){
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route  exact path="/" component={intro}/>
        <Route  path="/edu" component={edu}/>
        <Route  path="/cp" component={cc}/>
        <Route  path="/projects" component={proj}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}
}

export default App;