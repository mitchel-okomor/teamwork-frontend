import React, {Component} from 'react';
import './login.css';
import {connect} from 'react-redux';
import {userLoginFetch} from '../../state/actions/index';

class Login extends Component {
  state = {
    email: "",
    password: ""
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state);
    this.props.userLoginFetch(this.state)
  }

  render() {


    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <h1>Login</h1>

        <label>Username</label>
        <input
          name='email'
          placeholder='Email'
          value={this.state.username}
          onChange={this.handleChange}
          /><br/>

        <label>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={this.state.password}
          onChange={this.handleChange}
          /><br/>

        <input type='submit'/>
      </form>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);