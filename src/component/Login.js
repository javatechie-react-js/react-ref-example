import React from 'react';

export default class Login extends React.Component {


    constructor() {
        super();
        this.state = {
            "message": ""
        }
    }

    loginForm = () => {
        if (this.refs.uname.value == 'admin' && this.refs.pwd.value == 'password') {
            this.setState({
                'message': 'Login Success'
            })
        } else {
            this.setState({
                'message': 'Login Failed..'
            })
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <p>
                    <input type='text' ref='uname' placeholder='Enter Username' />
                </p>
                <p>
                    <input type='password' ref='pwd' placeholder='Enter Password' />
                </p>
                <button onClick={this.loginForm}>login</button>
            </div>
        );
    }
}
