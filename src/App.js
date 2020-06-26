import React, { Component } from "react";
import { ToastContainer } from 'react-toastify';
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import Logout from './components/logout';
import MovieForm from "./components/movieForm";
import Navbar from "./components/navigation/navbar";
import Costumers from "./components/costumers";
import Rentals from "./components/navigation/rentals";
import NotFound from "./components/navigation/notFound";
import LoginForm from './components/navigation/loginForm';
import RegisterForm from './components/registerForm';
import ProtectedRoute from './components/protectedRoute';
import auth from './services/authService'
import 'react-toastify/dist/ReactToastify.css'
import "./App.css";



class App extends Component {
  state = {};
  componentDidMount() {
    const user = auth.getCurrentUser()
    this.setState({ user })
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        <Navbar user={user} />
        <ToastContainer />
        <div className='content'>
          <Switch>
            <Route path='/loginForm' component={LoginForm} />
            <Route path='/registerForm' component={RegisterForm} />
            <Route path='/logout' component={Logout} />
            <ProtectedRoute
              path='/movies/:id'
              component={MovieForm}
            />
            <Route
              path='/movies'
              render={props => <Movies {...props} user={this.state.user} />} />
            <Route path='/costumers' component={Costumers} />
            <Route path='/rentals' component={Rentals} />
            <Route path='/not-found' component={NotFound} />
            <Redirect from='/' exact to='/movies' />
            <Redirect to='/not-found' />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
