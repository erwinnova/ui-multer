import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Register } from '../redux/action';

class RegisterPage extends Component {
    state = { 
        loading: false,
        error: false
    }

    onBtnRegister = () => {
        let username = this.refs.username.value;
        let email = this.refs.email.value;
        let password = this.refs.password.value;
        let confirmPass = this.refs.confirmPassword.value;
        if(password === confirmPass){
            console.log('nasd')
            let obj = {
                username,
                email,
                password
            }
            this.props.Register(obj)
            
        }
    }

    render() {
        console.log(this.props.username)
        if(this.props.username){
            return(
                <Redirect to='/'>

                </Redirect>
            )
        }
        return ( 
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <form className='box'>
                    <div className='p-5'>
                        <h1 style={{textAlign:"center"}}>Register Now!</h1>
                    <input ref='username' type='text' className='form-control mt-3' placeholder='Username'/>
                    <input ref='email' type='text' className='form-control mt-3' placeholder='Email'/>
                    <input ref='password' type='password' className='form-control mt-3' placeholder='Password'/>
                    <input ref='confirmPassword' type='password' className='form-control mt-3' placeholder='Confirm Password'/>
                    {/* {
                        this.state.error 
                        ? 
                        <div className='alert alert-danger mt-3'>
                        {this.state.error} 
                        <span onClick={() => this.setState({error : ''})} style={{fontWeight:"bolder", cursor:"pointer", float:"right"} }>x</span></div>
                        :
                        null 
                    } */}
                    <Button size='lg' style={{borderRadius:'24px', backgroundColor:'white', color:'black', marginTop: '20px'}} className='form-control login-btn' onClick={this.onBtnRegister}>Register</Button>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <p className='mt-3'>
                            Already have an account?
                        <Link to='/login'>
                            <span style={{textDecoration : "underline"}}> Sign In </span>
                        </Link>
                        </p>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return{
        username: state.user.username
    }
}
 
export default connect(mapStatetoProps, { Register }) (RegisterPage);