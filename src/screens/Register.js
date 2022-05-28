import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";
import { register } from "../Redux/Actions/userActions";
import Header from "./../components/Header";
import { toast } from "react-toastify";
import Toast from "../components/LoadingError/Toast";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const Register = ({ location, history }) => {
  window.scrollTo(0, 0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toastId = React.useRef(null);

   const Toastobjects = {
    pauseOnFocusLoss: false,
    draggable: false,
    pauseOnHover: false,
    autoClose: 2000,
  };

  const dispatch = useDispatch();
  const redirect = location.search ? location.search.split("=")[1] : "/";

  const userRegister = useSelector((state) => state.userRegister);
  const { error, loading, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [userInfo, history, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Password does not match", Toastobjects);
      }
    } else {
      dispatch(register(firstName, lastName, email, tel, password));
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success("Account Created", Toastobjects);
      }
    }
  };

  return (
    <>
      <Toast/>
      <Header />
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        {error && <Message variant="alert-danger">{error}</Message>}
        {loading && <Loading />}

        <form 
        className="Login col-md-8 col-lg-4 col-11"
        onSubmit={submitHandler}
        >
          <input 
          type="text" 
          placeholder="First Name" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          />
           <input 
          type="text" 
          placeholder="Last Name" 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          />
          <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
          <input 
          type="tel"
          placeholder="Phone Number"
          value={tel}          
          onChange={(e) => setTel(e.target.value)}
          />
          <input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
          <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type="submit">Register</button>
          <p>
            <Link to={redirect ? `/login?redirect=${redirect}` : "/login"}>
              I Have Account <strong>Login</strong>
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
