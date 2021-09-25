import React, { useState } from "react";
import "./Register.css";

function Register() {

  return (
    <section style={{ marginTop: "46px" }}>
      <div className="py-5 " id="Register">
        <div className="container-fluid row">
          <div className="col-lg-6 col-md-6 col-12 text-white justify-content-center d-flex my-5">
            <div className="pt-5 text-dark">
              <h1 className="font-weight-bolder pt-4">
                Join with Epic Home<br></br> Service
              </h1>
              <ul className="font-weight-bolder pt-4">
                <li className="pb-4">Earn upto 25000+ Per Month</li>
                <li>Available across 10+ Cities in India</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 justify-content-center justify-content-lg-end d-flex">
            <div className="px-lg-5 position-relative py-3 w-75">
              <div
                className="pt-3 px-2"
                style={{
                  background: "rgba(0, 0, 0, 0.8)",
                  // background: "black",
                  maxWidth: "550px",
                }}
              >
                <div
                  className="tab-content text-white content overflow-auto px-2 px-lg-4"
                  id="show"
                  style={{ height: "450px" }}
                >
                  <h4 className="text-center font-weight-bold">Join Now</h4>
                </div>
                <div className=" mx-5">
                <div
                  className="btn border-0 tab text-white my-3"
                  id="next"
                  style={{
                    borderRadius: "50px",
                    width: "100%",
                    maxHeight: "46px",
                    padding: "11px 0px",
                    background: "#4627cf",
                  }}
                >
                  Next
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
