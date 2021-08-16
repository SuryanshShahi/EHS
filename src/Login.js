import React from "react";

function Login() {
  return (
    <section>
      <div className="container justify-content-center d-flex mt-5">
        <div
          className="card w-50 border-0 px-lg-5 px-2"
          style={{
            background: "#e2e7ec",
            boxShadow: "1px 1px 3px 1px #b5b2b2",
            maxWidth:"500px",
            borderRadius:"25px"
          }}
        >
          <div className="container text-center pt-5 px-lg-4">
            <div className="font-weight-bolder pt-5 pb-4" style={{fontSize:"26px"}}>
              Continue with Phone
            </div>
            <div className="justify-content-center d-flex pb-5">
              <div
                className="bg-danger"
                style={{
                  borderRadius: "100%",
                  height: "100px",
                  width: "100px",
                }}
              ></div>
            </div>
            <div className="justify-content-center d-flex pt-3 pb-4">
              <input
                type="phone"
                className="form-control bg-transparent"
                style={{
                  borderRadius: "50px",
                  borderWidth: "2.68px",
                  borderColor: "black",
                }}
              ></input>
            </div>
            <div className="justify-content-center d-flex py-3">
              <div
                className="btn border-0 text-white align-items-center d-flex justify-content-center font-weight-bold"
                style={{
                  borderRadius: "50px",
                  background: "rgb(39 13 253 / 77%)",
                  fontSize: "19px",
                  height: "41.58px",
                  width:"100%"
                }}
              >
                Request OTP
              </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
