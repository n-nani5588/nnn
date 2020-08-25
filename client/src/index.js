import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import App from './App';
import Admin from './Admin/index';




ReactDOM.render(
  <React.StrictMode>
 <Router>
    {/* <App /> */}
    <Switch>
              <Route path="/" exact component={App}/>
              <Route path="/App"  component={App}/>
              <Route path="/Admin/c91eb3dc-1ad7-489a-9465-8f5b815b8d50" exact component={Admin}/>
            
              {/* <Route path="/Plan" component={Bussiness_plan}></Route> */}
              {/* <Route path="/Signup/:username" exact component={Signup}/> */}
     </Switch>
 </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
 serviceWorker.unregister();
