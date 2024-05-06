import { MDBContainer } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/authSlice";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { users, signuser } = useSelector((state) => state.authuser);
  const data = { email, password };

  const handleLoginEvent = (e) => {
    e.preventDefault();
    let userCredential = { email, password };
    dispatch(loginUser(userCredential)).then((result) => {
      if (result.payload) {
        setEmail("");
        setPassword("");
        navigate("/");
        // (!signuser == users ? navigate('/'): alert("please first signup"));
      }
    });
  };

  return (
    <>
      <MDBContainer>
        <form
          className="form-group custom-form mt-5 col-md-6 mx-auto"
          onSubmit={handleLoginEvent}
        >
          <label>Email</label>
          <input
            type="email"
            required
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label>Password</label>
          <input
            type="password"
            required
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <button type="submit" className="btn btn-success btn-md mx-3">
            LOGIN
          </button>

          <Link to="/register">
            <button type="submit" className="btn btn-success btn-md">
              New User
            </button>
          </Link>
        </form>
      </MDBContainer>
    </>
  );
};

export default Login;
