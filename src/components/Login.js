import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            redirect: '/default_theme',

        }
    }
    handleSubmit(event) {
        const dataPost = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post(`http://itstrana.vh118.hosterby.com/teleworking/api/auth/`, dataPost)
            .then(res => {
                console.log(res);
                if (res.data["user"]) {
                    localStorage.setItem('group',res.data["user"].groups[0]);
                }
                else {
                    alert ('test');
                }
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            } )
    }
    changeEmail(event) {
        this.setState({email: event.target.value})
    }
    changePassword(event) {
        this.setState({password: event.target.value})
    }
    render() {
        if (localStorage.getItem('group') === '3') {
            this.setState({email:'', password:''});
            return <Redirect to={this.state.redirect}/>
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input value={this.state.email} onChange={this.changeEmail.bind(this)} type={'text'} required={true} placeholder={'email'}/>
                    <input value={this.state.password} onChange={this.changePassword.bind(this)} type={'text'} required={true} placeholder={'password'}/>
                    <input type={'submit'}/>
                </form>
            </div>
        );
    }

}

export default Login;