import Axios from 'axios';
import { API_URL } from '../../support/API_URL';

export const Login = (username, password) => {
    return(dispatch) => {
        Axios.post(API_URL + '/users/login', {
            username,
            password
        })
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            console.log(res.data)
            dispatch({
                type: 'LOGIN',
                payload: res.data
            })
        })
        .catch((err) => {
            localStorage.removeItem('token')
            console.log(err)
            dispatch({
                type: 'LOGOUT'
            })
        })
    }
}

export const keepLogin = () => {
    return(dispatch) => {
        const token = localStorage.getItem('token');
        console.log(token);
        if(token){
            const headers = {
                headers : {
                    'Authorization' : `Bearer ${token}`
                }
            }
            Axios.post(API_URL + '/users/keeplogin', {}, headers)
            .then((res) => {
                dispatch({
                    type: 'LOGIN',
                    payload: res.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: 'LOGOUT'
                })
            })
        }
    }
}

export const Register = (data) => {
    return(dispatch) => {
        Axios.post(API_URL + '/users/register', data)
            .then((res) => {
                console.log(res)
                // console.log(res.data)
                localStorage.setItem('token', res.data.token)
                console.log(res.data.verified)
                dispatch({
                    type: 'LOGIN',
                    payload: res.data
                })
            })
            .catch((err) => {
                console.log(err)
                dispatch({
                    type: 'LOGOUT'
                })
            })
    }
}