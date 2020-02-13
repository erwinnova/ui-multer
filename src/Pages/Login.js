import React, { Component } from 'react';
import { Button, CustomInput } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Login, keepLogin } from '../redux/action';
import { API_URL } from '../support/API_URL';
import Axios from 'axios';


class LoginPage extends Component {
    state = { 
        // error: false,
        addImageFileName : 'Select File',
        addImageFile : undefined
     }
    componentDidMount(){
       let { keepLogin } = this.props;
       keepLogin()
    }

    onBtnLogIn = () => {
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        this.props.Login(username, password)
    }

    onBtnUploadFile = (e) => {
        if(e.target.files[0]){
            this.setState({ addImageFileName: e.target.files[0].name, addImageFile : e.target.files[0] })
        }else{
            this.setState({ addImageFileName: 'Select Image', addImageFile: undefined})
        }
    }

    uploadImage = () => {
        let { addImageFile } = this.state;
        console.log(addImageFile)
        if(addImageFile){
            let formData = new FormData()
            formData.append('image', addImageFile)
            Axios.post(API_URL + '/image/upload', formData)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    render() { 
        return ( 
            <div className='container'>
                <div className='d-flex justify-content-center'>
                    <form className='box'>
                    <div className='p-5'>
                        <h1 style={{textAlign:"center"}}>Welcome Back!</h1>
                    <input ref='username' type='text' className='form-control mt-3' placeholder='Username or Email'/>
                    <input ref='password' type='password' className='form-control mt-3' placeholder='Password'/>
                    {
                        this.state.error 
                        ? 
                        <div className='alert alert-danger mt-3'>
                        {this.state.error} 
                        <span onClick={() => this.setState({error : ''})} style={{fontWeight:"bolder", cursor:"pointer", float:"right"} }>x</span></div>
                        :
                        null 
                    }
                    <Button size='lg' style={{borderRadius:'24px', backgroundColor:'white', color:'black', marginTop: '20px'}} className='form-control login-btn' onClick={this.onBtnLogIn}>Sign In</Button>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <p className='mt-3'>
                            Don't have an account? 
                        <Link to='/register'>
                            <span style={{textDecoration : "underline"}}> Create yours today! </span>
                        </Link>
                        </p>
                    </div>
                    </form>
                </div>
                <CustomInput onChange={this.onBtnUploadFile} label={this.state.addImageFileName} type='file'/>
                <Button onClick={this.uploadImage}>
                    Upload 
                </Button>
            </div>
        );
    }
}

const mapStatetoProps = ({ user }) => {
    return{
        user
    }
}
 
export default connect(mapStatetoProps, { Login, keepLogin }) (LoginPage);