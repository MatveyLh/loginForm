import React,  {useState, useEffect, useRef}  from 'react';
import Login from "./components/Login";
import Content from "./components/Content";
import { Redirect } from "react-router-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoaded:false,
            redirect: '/default_theme',
        }
    }

    render() {
        return(
            <React.Fragment>
                <Router basename={process.env.PUBLIC_URL}>
                    <Route  path='/login' component={Login}/>
                    <Route  path='/default_theme' component={Content}/>
                    <Route exact path='/'>
                    </Route>
                    <Redirect to={this.state.redirect}/>
                </Router>
            </React.Fragment>
        )
    }
}

export default App;
