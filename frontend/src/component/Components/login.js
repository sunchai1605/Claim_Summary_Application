import React from "react";
import '../Styles/style.css';
import useForm from '../Validation/useForm';
import validate from '../Validation/validate';
import { Button } from "react-bootstrap";

const Login = ({submitForm}) => {
  const {handleSubmit,handleChange,errors,user} = useForm(submitForm, validate);
  return (
    <div>
      <div>
      </div>
      <div class="main">
        <p class="sign" align="center">
          Signin
        </p><br/>
        <form class="form1" onSubmit={handleSubmit}>
          <div>
          <input
            class="un "
            type="text"
            align="center"
            name ="username" 
            id = "username"
            placeholder="Employee ID"
            onChange={handleChange} value = {user.username}
          /><br />
          <span className="text-danger">{errors.username}</span>
          </div>
          <div>
          <input
            class="pass"
            type="password"
            align="center"
            placeholder="Password"
            name = "password"
            onChange={handleChange} value = {user.password}
          /><br />
          <span className="text-danger">{errors.password}</span><br />
          </div>
          <Button
            class="submit"
            type="submit"
            align="center"
            data-testid="login"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
