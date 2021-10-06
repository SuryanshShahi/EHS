import React from "react";
import "./Register.css";
import Vector from "../WashingMachine/Images/Vector.png";
import Date from "../WashingMachine/Images/date.png";
import Sit from "../WashingMachine/Images/sit.png";

function Register() {
  const border = (e) => {
    var x = document.getElementById("select");
    if (x.style.borderRadius === "50px") {
      x.style.borderRadius = "10px 10px 0px 0px";
    } else {
      x.style.borderRadius = "50px";
    }
    if (!x.contains(e.target)) {
      x.style.display = "none";
    }
  };
  return (
    <section style={{ marginTop: "46px" }}>
      <div className="py-5 align-items-center d-flex" id="Register">
        <div className="container-fluid row pr-lg-5">
          <div className="col-lg-6 col-md-6 col-12 justify-content-lg-end justify-content-center d-flex my-5">
            <div className="pt-5" style={{ color: "black" }}>
              <h1 className="font-weight-bolder pt-4">
                Join with Epic Home<br></br> Service
              </h1>
              <ul className="font-weight-bolder pt-4">
                <li className="pb-4">Earn upto 25000+ Per Month</li>
                <li>Available across 10+ Cities in India</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 justify-content-center py-4 justify-content-lg-end d-flex">
            <div className="px-lg-5 position-relative py-3 w-75 py-4">
              <div
                className="pt-3 px-2"
                style={{
                  // background: "rgba(0, 0, 0, 0.8)",
                  background: "black",
                  maxWidth: "550px",
                }}
              >
                <form action="/">
                  <div
                    className="tab-content text-white content overflow-auto px-2 px-lg-4"
                    id="show"
                    // style={{ height: "450px" }}
                  >
                    <h4 className="text-center font-weight-bold pt-2">
                      Fill up The Form
                    </h4>

                    <div className="px-lg-4 py-4">
                      <input
                        type="text"
                        className="form-control border-0 mt-4 pl-4"
                        placeholder="Name"
                        required
                        style={{
                          borderRadius: "50px",
                          height: "41px",
                          marginBottom: " 30px",
                        }}
                      ></input>
                      <input
                        type="phone"
                        className="form-control border-0 pl-4"
                        placeholder="Mobile Number"
                        required
                        style={{
                          borderRadius: "50px",
                          height: "41px",
                          marginBottom: " 30px",
                        }}
                      ></input>
                      <input
                        type="email"
                        className="form-control border-0 pl-4"
                        placeholder="Email"
                        required
                        style={{
                          borderRadius: "50px",
                          height: "41px",
                          marginBottom: " 30px",
                        }}
                      ></input>
                      <select
                        className="border-0"
                        id="select"
                        required
                        style={{
                          paddingLeft: "20px",
                          cursor: "pointer",
                          width: "100%",
                          transition: "0.5s",
                          outline: "none",
                          height: "41px",
                          borderRadius: "50px",
                        }}
                        onClick={border}
                      >
                        <option value="">Select Service</option>
                        <option value="NA">NA</option>
                        <option value="NA">NA</option>
                        <option value="NA">NA</option>
                      </select>
                    </div>
                  </div>
                  <div className="mx-5 justify-content-center d-flex pb-2">
                    <button
                      type="submit"
                      className="btn nextbtn border-0 tab text-white my-3"
                      id="next"
                      style={{
                        borderRadius: "50px",
                        width: "100%",
                        maxWidth: "250px",
                        maxHeight: "46px",
                        padding: "11px 0px",
                        background: "#4627cf",
                      }}
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className=""
        style={{ backgroundColor: "rgba(222, 224, 236, 0.92)" }}
      >
        <div className="container-fluid px-5">
          <div className="text-center py-5">
            <h4
              className="font-weight-bolder"
              style={{ fontFamily: "sans-serif" }}
            >
              How to Book Service
            </h4>
            <span style={{ fontSize: "17px" }}>3 easy steps </span>
          </div>
          <div className="row text-center pb-5">
            <div className="col-lg-4 col-md-4 col-12 pb-5">
              <img src={Vector} className="img-fluid" alt="vector"></img>
              <div
                className="font-weight-bolder pt-3"
                style={{ fontSize: "20px" }}
              >
                Fill up the Form & Submit
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 pb-5">
              <img src={Date} className="img-fluid" alt="date"></img>
              <div
                className="font-weight-bolder pt-3"
                style={{ fontSize: "20px" }}
              >
                Choose your Expertise Service & Submit Documents
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 pb-2">
              <img src={Sit} className="img-fluid" alt="sit"></img>
              <div
                className="font-weight-bolder pt-3"
                style={{ fontSize: "20px" }}
              >
                Our Team will verify all your Documents
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
