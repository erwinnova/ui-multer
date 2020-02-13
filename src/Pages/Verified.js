import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string'
import Axios from 'axios';
import { API_URL } from '../support/API_URL';

class Verified extends Component {
    state = { 
        Redirect: false
     }

     componentDidMount(){
        let params = queryString.parse(this.props.location.search)
        let username = params.username;
        let password = params.password
        Axios.post(API_URL +'/users/emailverification', {
            username,
            password
        })
        .then((res) => {
            this.setState({Redirect: true})
        })
        .catch((err) => {
            console.log(err)
        })
     }

    render() { 
        console.log(this.props.location.search)
        if(this.state.Redirect){
            return(
                <Redirect to='/'>

                </Redirect>
            )
        }
        return ( 
            <div>
                ini halaman Verified
            </div>
         );
    }
}
 
export default Verified;