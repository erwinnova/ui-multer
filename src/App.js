import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './Pages/Home';
import LoginPage from './Pages/Login';
import { connect } from 'react-redux';
import { Login, keepLogin } from './redux/action';
import RegisterPage from './Pages/Register';
import Verified from './Pages/Verified';

class App extends Component {
  state = { 
    addImageFileName : 'Select File',
    addImageFile: undefined,
    data : []
  }

  componentDidMount(){
    let token = localStorage.getItem('token')
    if(token){
      this.props.keepLogin()
    }
  }

  render() { 
    return ( 
      <div>
        <Route path='/' component={Home} exact />
        <Route path='/login' component={LoginPage} />
        <Route path='/register' component={RegisterPage} />
        <Route path='/verified' component={Verified} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return{
    auth: state.user
  }
}
 
export default connect(mapStateToProps, { keepLogin })(App);