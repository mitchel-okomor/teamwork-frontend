import React, {Component} from 'react';
import './signup.css';
import {connect} from 'react-redux';
import {userPostFetch} from '../../state/actions/index';
import Form from 'react-bootstrap/Form';

class Signup extends Component {
  state = {};

  handleChange = event => {
    this.setState ({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault ();
    console.log (this.state);
    this.props.userPostFetch (this.state);
  };

  render () {
    return (

      <form className="signup" onSubmit={this.handleSubmit}>
        <h1>Sign Up For An Account</h1>

        <label>First name</label>
        <input
          name="firstname"
          placeholder="First name"
          value={this.state.firstname}
          onChange={this.handleChange}
        />
        <br />

        <label>Last name</label>
        <input
          name="lastname"
          placeholder="Last name"
          value={this.state.lastname}
          onChange={this.handleChange}
        />
        <br />

        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={this.state.email}
          onChange={this.handleChange}
        />
        <br />

        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <br />

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            as="select"
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          >
            <option>Male</option>
            <option>Female</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Job role</Form.Label>
          <Form.Control
            as="select"
            name="role"
            value={this.state.role}
            onChange={this.handleChange}
          >
            <option>Admin</option>
            <option>Employee</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Department</Form.Label>
          <Form.Control
            as="select"
            name="department"
            value={this.state.department}
            onChange={this.handleChange}
          >
            <option>IT</option>
            <option>Finance</option>
            <option>Customer Service</option>
            <option>Security</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>isAdmin</Form.Label>
          <Form.Control
            as="select"
            name="isAdmin"
            value={this.state.isAdmin}
            onChange={this.handleChange}
          >
            <option>true</option>
            <option>false</option>
          </Form.Control>
        </Form.Group>

        <label>address</label>
        <input
          name="address"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />

        <label>date of Birth</label>
        <input
          name="dateOfBirth"
          placeholder="Username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <br />

        <input type="submit" />
      </form>

      
    );
  }
}

const mapDispatchToProps = dispatch => ({
  userPostFetch: userInfo => dispatch (userPostFetch (userInfo)),
});

export default connect (null, mapDispatchToProps) (Signup);
