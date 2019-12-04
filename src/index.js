import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';import {
   Router,
  Switch,
  Route,  withRouter, BrowserRouter,  HashRouter,
} from "react-router-dom"; 

import   Loadable  from 'react-loadable'; 
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { createBrowserHistory as createHistory } from 'history';

import SignIn from './SignIn';
const theme = createMuiTheme({
 
    "palette": {
      "common": {
        "black": "#000",
        "white": "#fff"
      },
      "background": {
        "paper": "#fff",
        "default": "#fafafa"
      },
      "primary": {
        "light": "#7986cb",
        "main": "rgba(58, 110, 255, 1)",
        "dark": "rgba(34, 72, 177, 1)",
        "contrastText": "#fff"
      },
      "secondary": {
        "light": "#3a6eff",
        "main": "rgba(36, 153, 139, 1)",
        "dark": "rgba(26, 134, 121, 1)",
        "contrastText": "#fff"
      },
      "error": {
        "light": "#e57373",
        "main": "#f44336",
        "dark": "#d32f2f",
        "contrastText": "#fff"
      },
      "text": {
        "primary": "rgba(0, 0, 0, 0.87)",
        "secondary": "rgba(0, 0, 0, 0.54)",
        "disabled": "rgba(0, 0, 0, 0.38)",
        "hint": "rgba(0, 0, 0, 0.38)"
      },
      "varient":{
        "outlined": {
          backgroundColor: "red!important"
        } 
      }
    },
    typography: {
      "fontFamily": "\"Roboto\", \"Helvetica\", \"Arial\", sans-serif",
      "fontSize": 16,
      "fontWeightLight": 300,
      "fontWeightRegular": 400,
      "fontWeightMedium": 500,
      button: {
        fontSize: '14px',
        fontFamily:'Roboto',

      },
      
      h1:{
        fontWeight:"normal",
        fontSize: '24px',
    fontWeight: '400',
      },
      span:{
        fontSize: '12px'
      }
    }
});
const history = createHistory();
 
const Dashboard = Loadable({
  loader: () => import("./dashboard"),
  loading: Loading  
}); 

function Loading() {
  return <h3>Loading...</h3>;
}
const routing = (
  <MuiThemeProvider theme={theme}>
<HashRouter>
  <Switch>
          <Route default exact path="/">
            <SignIn />
          </Route>
          <Route path="/dashboard" component ={withRouter(Dashboard)} >
         
          </Route> 
           
        </Switch>
      
    </HashRouter>
    </MuiThemeProvider>
  )
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA    //  <Route path="/" component ={SignIn} />
serviceWorker.unregister();
