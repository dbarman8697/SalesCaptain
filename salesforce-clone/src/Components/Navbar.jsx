import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div
      data-animation="default"
      data-collapse="medium"
      data-duration="400"
      data-easing="ease"
      data-easing2="ease"
      role="banner"
      className="navbar w-nav"
      style={{
        display: "flex",
        boxShadow: "rgba(33, 35, 38, 0.1) 0px 10px 10px -10px",
        paddingBottom: "20px",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        backgroundColor: "#FFF",
      }}
    >
      <div
        className="container-62 w-container"
        style={{ display: "felx", paddingRight: "30px" }}
      >
        {/* Brand Logo */}
        <a
          href="/"
          aria-current="page"
          className="brand w-nav-brand w--current"
          aria-label="home"
        >
          <img
            src="https://assets.website-files.com/62a83ee090ccdee139c347e5/62d857bb593d0d6f444528aa_full_logo-p-500.webp"
            loading="lazy"
            width="161px"
            sizes="(max-width: 479px) 100vw, (max-width: 991px) 167.3984375px, 100vw"
            alt="logo"
            className="image-88"
          />
        </a>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          marginTop: "23px",
          fontWeight: "450",
        }}
      >
        {/* Navigation Links */}
        <p>Products</p>
        <p>Solutions</p>
        <p>Pricing</p>
        <p>Resources</p>
        <p>Support</p>

        {/* Sign In Button */}
        <button className="navButton">Sign in</button>

        {/* Get Started Button */}
        <button className="getStartedButton">Get started</button>
      </div>
    </div>
  );
};

export default Navbar;
