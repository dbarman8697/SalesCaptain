import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./Signin.css";
import { useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

const Signin = () => {
  const [formState, setFormState] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

 const handleLogin = (e) => {
   e.preventDefault();
   axios
     .post("https://reqres.in/api/login", formState, {
       headers: {
         "Content-Type": "application/json",
       },
     })
     .then((res) => {
       console.log(res.data.token);
       localStorage.setItem("token", res.data);
       toast({
         title: "Logged in Successfully.",
         status: "success",
         duration: 5000, // 5 seconds
         isClosable: true,
       });
     });
 };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "105vh", height: "99vh" }}>
        <Link to="/">
          <div>
            <img
              className="signinlogo"
              src="https://app.salescaptain.com/static/media/loginLogo.3814067f45867b0a416c.png"
              alt="SalesCaptain Logo"
            />
          </div>
        </Link>
        <p style={{ textAlign: "center", fontWeight: "600", fontSize: "20px" }}>
          Login
        </p>
        <div>
          <form className="signinsection" onSubmit={handleLogin}>
            <input
              className="signinput"
              placeholder="Email"
              type="email"
              name="email"
              onChange={handleChange}
            />
            <div className="password-input">
              <input
                className="signinput"
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                name="password"
                onChange={handleChange}
              />
              <FontAwesomeIcon
                className="password-icon"
                icon={!showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
              />
            </div>
            <button className="signinput1" type="submit" value="Submit">
              Sign In
            </button>
          </form>
        </div>
        <div className="Forgotpassword">
          <a href="/" style={{ textDecoration: "none" }}>
            <p>Forgot Password</p>
          </a>
        </div>
      </div>
      <div className="image-container">
        <div className="image-overlay">
          <div className="businesscard">
            <h1 style={{ fontSize: "36px", lineHeight: "40px" }}>
              Give your business a SalesCaptain Upgrade
            </h1>
            <p style={{ fontSize: "14px" }}>
              Our AI-powered tools help local businesses modernize how
              <br />
              they communicate with their customers by facilitating online
              <br />
              reviews, personalized marketing campaigns, web chats,
              <br />
              payments, and more.
            </p>
            <p style={{ fontSize: "14px" }}>
              To learn more, talk to an expert today.
            </p>
            <button className="bookappointment">Book an appointment</button>
          </div>
        </div>
        <img
          className="background-image"
          src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62defe243b03ce85cb2d8c9d_Mask%20Group%20165.webp"
          alt="Business Card"
        />
      </div>
    </div>
  );
};

export default Signin;
