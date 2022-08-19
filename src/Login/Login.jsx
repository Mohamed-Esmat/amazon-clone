import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();

    //some fancy firebase login shittttt....
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/', { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  const handleRegister = (e) => {
    e.preventDefault();
    //some fancy firebase register shittttt....
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // it successfully created a new user with email and password
        console.log(auth);
        if (auth) {
          navigate('/', { replace: true });
        }
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="login">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login__container">
        <p className="signInWord">Sign-in</p>
        <form action="">
          <p className="email-word">E-mail</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="password-word">Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="login__signInButton"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </form>
        <p className="agree-conditions-para">
          By signing in you agree to Esmat's Conditions of Use Sale. please see
          our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button
          type="submit"
          className="login__registerButton"
          onClick={handleRegister}
        >
          Create your Amazon account
        </button>
      </div>
    </div>
  );
};

export default Login;
