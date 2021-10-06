import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import parents from "./Images/parents.png";
import smartphone from "./Images/smartphone.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [back, setBack] = useState(false);
  const [location1, setLocation] = useState([]);

  const backtotop = () => {
    if (window.scrollY >= 150) {
      setBack(true);
    } else {
      setBack(false);
    }
  };
  window.addEventListener("scroll", backtotop);

  const getLocation = () => {
    fetch(
      "https://geolocation-db.com/json/b6e7f2d0-1874-11ec-9f88-41fa3915186f"
    )
      .then((res) => res.json())
      .then((data) => setLocation(data));
  };

  const showUser =()=>{
    document.getElementById("user").style.display = "block";
  }
  return (
    <section>
      <div id="top">..</div>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{ background: "black" }}
      >
        <div className="container-fluid px-5">
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://www.epicvila.com/image/logo1.png"
              className="img-fluid"
              alt="image"
              width={120}
            ></img>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="fa fa-bars"
              style={{ color: "white", fontSize: "27px" }}
            ></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-lg-auto mb-2 mb-lg-0 justify-content-center align-items-center d-flex">
              <NavLink
                to="/"
                data-target="#mymodalLocation"
                data-toggle="modal"
                className="fa fa-map-marker text-white fa-lg pr-3 text-decoration-none"
                style={{ cursor: "pointer" }}
              >
                &nbsp;&nbsp;
                <span className="font-weight-bold text-white" style={{ fontSize: "17px" }}>
                  Chandigarh
                </span>{" "}
                <b style={{ fontSize: "20px", color:"white" }}>🡓</b>
              </NavLink>
              <div
                className="d-flex mr-lg-auto pt-lg-0 pt-4 align-items-center"
                style={{ width: "100%", maxWidth: "300px" }}
              >
                <div
                  className="fa fa-search fa-lg position-absolute"
                  style={{ padding: "0px 10px" }}
                ></div>
                <input
                  className="form-control border-0"
                  type="search"
                  placeholder="Serarch Service"
                  aria-label="Search"
                  style={{
                    borderRadius: "50px",
                    width: "400px",
                    textAlign: "center",
                    maxHeight: "40px",
                  }}
                />
              </div>
              <li className="nav-item pt-lg-0 pt-4 ml-4 mr-2">
                <NavLink
                  to="/services"
                  className="nav-link text-white active"
                  aria-current="page"
                  // data-toggle="collapse"
                  // data-target="#navbarTogglerDemo02"
                >
                  Services
                </NavLink>
              </li>
              <li className="nav-item pt-lg-0 pt-3 mx-2">
                <NavLink to="/register" className="nav-link text-white">
                  Register as Professional
                </NavLink>
              </li>
              <li className="nav-item pt-lg-0 pt-3 mx-2">
                <Link
                  to={{ pathname: "https://blog.epicvila.com/" }}
                  target="_blank"
                  className="text-white text-decoration-none px-2"
                >
                  Blog
                </Link>
              </li>
              <li className="nav-item pt-lg-0 pt-3 ml-2">
                <NavLink
                  to="/"
                  data-target="#mymodal"
                  data-toggle="modal"
                  className="nav-link text-white"
                >
                  Login/Signup
                </NavLink>
              </li>
              <li className="nav-item pt-lg-0 pt-3 ml-2" id="user" style={{display:"none"}}>
                <NavLink
                  to="/userProfile"
                  className="nav-link text-white"
                >
                  User<span className="fa fa-user-circle-o text-white fa-lg pl-2"></span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="modal fade " id="mymodal">
        <div className="modal-dialog">
          <div
            className="modal-content justify-content-center d-flex border-0"
            style={{ background: "#dedeea" }}
          >
            <div className="ml-auto pt-3">
              <div
                className="close pr-3"
                data-dismiss="modal"
                style={{ cursor: "pointer" }}
              >
                &times;
              </div>
            </div>
            <div className="container text-center px-lg-4 pb-5 pt-3">
              <div
                className="font-weight-bolder pb-4"
                style={{ fontSize: "26px" }}
              >
                Continue with Phone
              </div>
              <div className="justify-content-center d-flex pb-5">
                <img src={smartphone} className="img-fluid"></img>
              </div>
              <div className="justify-content-center d-flex pt-3 pb-4">
                <input
                  type="phone"
                  placeholder="Enter Phone No."
                  className="form-control text-center bg-transparent"
                  style={{
                    borderRadius: "50px",
                    borderWidth: "2.5px",
                    borderColor: "black",
                    color: "black",
                  }}
                ></input>
              </div>
              <div className="justify-content-center d-flex py-3">
                <div
                  className="btn btn-primary border-0 text-white align-items-center d-flex justify-content-center font-weight-bold"
                  style={{
                    borderRadius: "50px",
                    // background: "rgb(39 13 253 / 77%)",
                    fontSize: "19px",
                    height: "41.58px",
                    width: "100%",
                  }}
                  data-target="#mymodalOTP"
                  data-toggle="modal"
                  data-dismiss="modal"
                >
                  Request OTP
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade " id="mymodalOTP">
        <div className="modal-dialog">
          <div
            className="modal-content justify-content-center d-flex border-0"
            style={{ background: "#dedeea" }}
          >
            <div className="ml-auto mt-3">
              <div
                className="close pr-3"
                data-dismiss="modal"
                style={{ cursor: "pointer" }}
              >
                &times;
              </div>
            </div>
            <div className="container text-center px-lg-4 pb-5 pt-4">
              <div
                className="font-weight-bolder pb-4"
                style={{ fontSize: "26px" }}
              >
                OTP
              </div>
              <div className="justify-content-center d-flex pb-3">
                <img src={smartphone} className="img-fluid"></img>
              </div>
              <div className="font-weight-bolder" style={{ fontSize: "26px" }}>
                Enter Verification Code
              </div>
              <span className="font-weight-bolder">
                We have sent the four digit verification code to your mobile
                number
                <br></br>
                <br></br>
                <span style={{ fontSize: "19px" }}>
                  +91 XXXXXXXXXX
                  <div
                    className="fa fa-pencil ml-3"
                    data-target="#mymodal"
                    style={{ cursor: "pointer" }}
                    data-toggle="modal"
                    data-dismiss="modal"
                  ></div>
                </span>
              </span>
              <div className="justify-content-center d-flex pt-3 pb-4">
                <input
                  type="phone"
                  placeholder="Enter OTP"
                  className="form-control text-center bg-transparent"
                  style={{
                    borderRadius: "50px",
                    borderWidth: "2.5px",
                    borderColor: "black",
                    color: "black",
                  }}
                ></input>
              </div>
              <div className="justify-content-center d-flex py-3">
                <div
                  className="btn btn-primary border-0 text-white align-items-center d-flex justify-content-center font-weight-bold"
                  style={{
                    borderRadius: "50px",
                    // background: "rgb(39 13 253 / 77%)",
                    fontSize: "19px",
                    height: "41.58px",
                    width: "100%",
                  }}
                  data-target="#mymodalDetails"
                  data-toggle="modal"
                  data-dismiss="modal"
                >
                  Submit
                </div>
              </div>
              <br></br>
              <NavLink
                to="/"
                className="font-weight-bolder text-decoration-none"
                style={{ fontSize: "14px" }}
              >
                Resend OTP
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade " id="mymodalDetails">
        <div className="modal-dialog">
          <div
            className="modal-content justify-content-center d-flex border-0"
            style={{ background: "#dedeea" }}
          >
            <div className="ml-auto pt-3">
              <div
                className="close pr-3"
                data-dismiss="modal"
                style={{ cursor: "pointer" }}
              >
                &times;
              </div>
            </div>
            <div className="container text-center px-lg-4 pb-5 pt-4">
              <div
                className="font-weight-bolder pb-4"
                style={{ fontSize: "26px" }}
              >
                OTP
              </div>
              <div className="justify-content-center d-flex pb-3">
                <img src={parents} className="img-fluid"></img>
              </div>

              <div className="justify-content-center d-flex pt-3 pb-1">
                <input
                  type="text"
                  className="form-control bg-transparent text-center"
                  placeholder="Enter Full Name"
                  style={{
                    borderRadius: "50px",
                    borderWidth: "2.5px",
                    borderColor: "black",
                    color: "black",
                  }}
                ></input>
              </div>
              <div className="justify-content-center d-flex pt-3 pb-4">
                <input
                  type="Email"
                  className="text-center form-control bg-transparent"
                  placeholder="Enter Email"
                  style={{
                    borderRadius: "50px",
                    borderWidth: "2.5px",
                    borderColor: "black",
                    color: "black",
                  }}
                ></input>
              </div>
              <div className="justify-content-center d-flex pt-3 pb-4">
                <div className="align-items-center d-flex mr-5">
                  <input
                    type="radio"
                    id="male"
                    name="btn"
                    style={{ width: "17px", height: "17px", cursor: "pointer" }}
                  />
                  <label for="male">
                    <b>&nbsp;&nbsp;Male</b>
                  </label>
                </div>
                <div className="align-items-center d-flex ml-5">
                  <input
                    type="radio"
                    id="female"
                    name="btn"
                    style={{ width: "17px", height: "17px", cursor: "pointer" }}
                  />
                  <label for="female">
                    <b>&nbsp;&nbsp;Female</b>
                  </label>
                </div>
              </div>

              <div className="justify-content-center d-flex py-3">
                <div
                  className="btn btn-primary border-0 text-white align-items-center d-flex justify-content-center font-weight-bold"
                  style={{
                    borderRadius: "50px",
                    // background: "rgb(39 13 253 / 77%)",
                    fontSize: "19px",
                    height: "41.58px",
                    width: "100%",
                  }}
                  data-target="#mymodalDetails"
                  data-toggle="modal"
                  data-dismiss="modal"
                  onClick={showUser}
                >
                  Submit
                </div>
              </div>
              <br></br>
              <NavLink
                to="/"
                className="font-weight-bolder text-decoration-none"
                style={{ fontSize: "14px" }}
                data-dismiss="modal"
              >
                Skip Step
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="backtotop container-fluid justify-content-end d-flex">
        <a
          href="#top"
          className={
            back
              ? "back active fa fa-arrow-up fa-lg position-absolute text-decoration-none text-white d-flex justify-content-center align-items-center"
              : "back fa fa-arrow-up position-absolute text-decoration-none text-white d-none"
          }
        >
          {" "}
        </a>
      </div>

      <div className="modal fade" id="mymodalLocation">
        <div className="modal-dialog">
          <div
            className="modal-content justify-content-center d-flex border-0"
            style={{ background: "#dedeea" }}
          >
            <div className="modal-header mx-2" style={{ padding: "13px" }}>
              <div className="">
                <div className="fa fa-map-marker fa-lg pr-2"></div>
                <b>Current Location</b>
              </div>
              <div
                className="justify-content-end d-flex font-weight-bold text-primary"
                style={{ fontSize: "14px", cursor: "pointer" }}
                onClick={getLocation}
              >
                Detact Using GPS
              </div>
            </div>

            <hr style={{ height: "2px", margin: "0" }}></hr>

            <div className="justify-content-center d-flex pt-3">
              <div
                className="d-flex align-items-center modal-body"
                style={{ width: "100%" }}
              >
                <div
                  className="fa fa-search fa-sm pl-4 ml-5 position-absolute"
                  style={{ padding: "0px 10px" }}
                ></div>
                <input
                  className="form-control border-0 py-2 pl-5 mx-5"
                  type="search"
                  placeholder="Search for Locality/Appartment/Society"
                  aria-label="Search"
                  style={{
                    borderRadius: "18px",
                    // width: "400px",
                    fontSize: "14px",
                    height: "41px",
                    maxHeight: "41px",
                  }}
                />
              </div>
            </div>

            <div className="pb-3 px-4 pt-5" style={{ bottom: "0" }}>
              {location1 && (
                <div className="text-primary font-weight-bold py-1">
                  Saved Address:{" "}
                  {`${location1.country_code},${location1.country_name},${location1.postal}`}
                </div>
              )}
              <div className="fa fa-map-marker fa-sm">
                <span
                  className="pl-2 font-weight-bold"
                  style={{ fontSize: "14px" }}
                >
                  Flat no 298, 1st Floor, TDI City, Sector 110, Mohali......
                </span>
              </div>
              <div className="fa fa-map-marker fa-sm">
                <span
                  className="pl-2 font-weight-bold"
                  style={{ fontSize: "14px" }}
                >
                  Flat no 298, 1st Floor, TDI City, Sector 110, Mohali......
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;

// <img
// src="https://www.epicvila.com/image/logo1.png"
// className="img-fluid"
// alt="image"
// width={120}
// style={{ background: "black" }}
// ></img>
