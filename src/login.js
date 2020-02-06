import React from 'react';
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './gsass.sass';
import { Link } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  getvalue = (e) => {
    this.setState({ [e.target.type]: e.target.value })
  }
  loginverify = () => {
    const { email, password } = this.state
    if (email === localStorage.getItem("email")) {
      if (password === localStorage.getItem("password")) {
        return (localStorage.setItem("token", true));
      }
    }


  }
  render() {
    return (
      <div className="Login">
        <div className="loginbox">
          <h1>Login</h1>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => this.getvalue(e)} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => this.getvalue(e)} />
            </Form.Group>
            <Form.Label>with incorrect credantial you log into guest mode</Form.Label>
            <Link to="/Protected">
            <Button variant="primary" type="button" onClick={() => this.loginverify()}>
              Login
             </Button>
             </Link>
          </Form>
        </div>
      </div>
    );
  }
}

export default Login;
