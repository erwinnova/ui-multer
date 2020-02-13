import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <center>
                    Ini Home
                    <br/>
                    <br/>
                    <br/>
                    <Link to="/login">
                        <Button>Login</Button>
                    </Link>
                    <br/>
                    <br/>
                    <Link to="/register">
                        <Button>Register</Button>
                    </Link>
                </center>
                <div>
                    {
                        this.props.verified
                        ?
                        null
                        :
                        <div>
                            Your account is not verified
                        </div>
                    }
                </div>
            </div>
        );
    }
}

const mapStatetoProps = (state) => {
    return{
        verified: state.user.verified
    }
}

 
export default connect(mapStatetoProps)(Home);