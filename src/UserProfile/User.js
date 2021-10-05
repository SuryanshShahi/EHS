import React from "react";
import "./User.css";
import { Ongoing, Completed, Cancelled } from "../Data/Content";
import send from "../Images/send.png";
function User() {
  return (
    <div style={{ marginTop: "47px" }}>
      <div className="user">
        <div className="nav nav-tabs w-100 bg-white justify-content-center d-flex overflow-auto">
          <div
            className="active font-weight-bolder px-5 py-2 tab rounded-0 text-decoration-none align-items-center d-flex"
            type="button"
            data-toggle="tab"
            href="#MyBookings"
          >
            My Booking
          </div>
          <div
            className="font-weight-bolder px-5 py-2 tab rounded-0 text-decoration-none align-items-center d-flex"
            type="button"
            data-toggle="tab"
            href="#address"
          >
            Addresses
          </div>
          <div
            className="font-weight-bolder px-5 py-2 tab rounded-0 text-decoration-none align-items-center d-flex"
            type="button"
            data-toggle="tab"
            href="#profile"
          >
            Edit Profile
          </div>
          <div
            className="font-weight-bolder px-5 py-2 tab rounded-0 text-decoration-none align-items-center d-flex"
            type="button"
            data-toggle="tab"
            href="#payment"
          >
            Payment
          </div>
          <div
            className="font-weight-bolder px-5 py-2 tab rounded-0 text-decoration-none align-items-center d-flex"
            type="button"
            data-toggle="tab"
            href="#refer"
          >
            Refer & Earn
          </div>
        </div>
      </div>
      <div
        className="tab-content"
        style={{ background: "rgba(222, 224, 236, 0.92)" }}
      >
        <div id="MyBookings" className="active tab-pane pt-2">
          <h4 className="text-center font-weight-bolder py-4">My Booking</h4>
          <div className="justify-content-center d-flex">
            <div
              className="nav nav-tabs justify-content-center d-flex"
              style={{ background: "rgba(222, 224, 236, 0.92)" }}
            >
              <li
                className="active mb-4 mx-4 font-weight-bolder px-5 py-2 tab text-decoration-none align-items-center d-flex"
                type="button"
                data-toggle="tab"
                href="#ongoing"
              >
                Ongoing
              </li>
              <li
                className="mx-4 font-weight-bolder mb-4 px-5 py-2 tab text-decoration-none align-items-center d-flex"
                type="button"
                data-toggle="tab"
                href="#completed"
              >
                Completed
              </li>
              <li
                className="mx-4 font-weight-bolder px-5 py-2 tab text-decoration-none align-items-center d-flex"
                type="button"
                data-toggle="tab"
                href="#cancelled"
              >
                Cancelled
              </li>
            </div>
          </div>
          <div className="tab-content pt-5 pb-4">
            <div id="ongoing" className="active tab-pane container">
              <div className="row justify-content-center d-flex">
                {Ongoing.map((elem) => {
                  const { name, price, date, time, technician } = elem;
                  return (
                    <div className="col-lg-4 col-md-6 col-sm-6 col-12 pb-4 justify-content-center d-flex">
                      <div
                        className="bg-white border-0"
                        style={{ borderRadius: "20px", maxWidth: "350px", boxShadow:"#8080808c 2px 0px 2px 0px" }}
                      >
                        <div className="row px-4 py-2">
                          <div className="col-6">
                            <div
                              className="font-weight-bolder"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: "20px",
                              }}
                            >
                              {" "}
                              {name}
                            </div>
                            <div
                              className="font-weight-bold py-2"
                              style={{ fontSize: "14px" }}
                            >
                              Date:{date}
                            </div>
                          </div>
                          <div className="col-6">
                            <div
                              className="float-right font-weight-bolder"
                              style={{
                                fontFamily: "sans-serif",
                                fontSize: "18px",
                              }}
                            >
                              {price}
                            </div>
                            <br></br>
                            <div
                              className="float-right font-weight-bold py-2"
                              style={{ fontSize: "12px" }}
                            >
                              Time Slot:{time}
                            </div>
                          </div>
                          <div
                            className="font-weight-bold"
                            style={{ fontSize: "12px" }}
                          >
                            Technician Assigned:{technician}
                          </div>
                        </div>
                        <div className="px-4 row py-2">
                          <div className="col">
                            <div className="fa fa-phone fa-lg"></div>
                          </div>
                          <div className="col text-center">
                            <div className="fa fa-commenting fa-lg"></div>
                          </div>
                          <div className="col">
                            <img
                              src={send}
                              className="img-fluid float-right"
                              alt="image"
                            ></img>
                          </div>
                        </div>
                        <div className="row pt-2">
                          <div className="col gx-1">
                            <div
                              className="text-center text-white py-1"
                              style={{
                                borderRadius: "0px 0px 0px 20px",
                                background: "black",
                                marginLeft: "10px",
                              }}
                            >
                              {" "}
                              Cancel
                            </div>
                          </div>
                          <div className="col gx-1">
                            <div
                              className="text-center text-white py-1"
                              style={{
                                borderRadius: "0px 0px 20px 0px",
                                background: "black",
                                marginRight: "10px",
                              }}
                            >
                              {" "}
                              Reshedule
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div id="completed" className="tab-pane fade container">
              <div className="">
                <div className="row justify-content-center d-flex">
                  {Completed.map((elem) => {
                    const { name, amount, date, time, technician } = elem;
                    return (
                      <div className="col-lg-4 col-md-6 col-sm-6 col-12 pb-4 justify-content-center d-flex">
                        <div
                          className="bg-white border-0"
                          style={{ borderRadius: "20px", maxWidth: "350px", boxShadow:"#8080808c 2px 0px 2px 0px" }}
                        >
                          <div className="row px-4 py-2">
                            <div className="col-6">
                              <div
                                className="font-weight-bolder"
                                style={{
                                  fontFamily: "sans-serif",
                                  fontSize: "20px",
                                }}
                              >
                                {" "}
                                {name}
                              </div>
                              <div
                                className="font-weight-bold py-2"
                                style={{ fontSize: "14px" }}
                              >
                                Date:{date}
                              </div>
                            </div>
                            <div className="col-6">
                              <div
                                className="float-right font-weight-bolder"
                                style={{
                                  fontFamily: "sans-serif",
                                  fontSize: "18px",
                                }}
                              ></div>
                              <br></br>
                              <div
                                className="float-right font-weight-bold py-2"
                                style={{ fontSize: "12px" }}
                              >
                                Time Slot:{time}
                              </div>
                            </div>
                            <div
                              className="font-weight-bold"
                              style={{ fontSize: "12px" }}
                            >
                              Technician Assigned:{technician}
                            </div>
                            <div className="text-center pt-3 pb-1 font-weight-bolder">
                              Amount Charged:&nbsp;&nbsp;{amount}
                            </div>
                          </div>
                          <div className="px-4 row py-2">
                            <div className="col">
                              <div className="fa fa-phone fa-lg"></div>
                            </div>
                            <div className="col text-center">
                              <div className="fa fa-commenting fa-lg"></div>
                            </div>
                            <div className="col">
                              <img
                                src={send}
                                className="img-fluid float-right"
                                alt="image"
                              ></img>
                            </div>
                          </div>
                          <div className="row pt-2">
                            <div className="col gx-1">
                              <div
                                className="text-center text-white py-1"
                                style={{
                                  borderRadius: "0px 0px 0px 20px",
                                  background: "black",
                                  marginLeft: "10px",
                                }}
                              >
                                {" "}
                                Cancel
                              </div>
                            </div>
                            <div className="col gx-1">
                              <div
                                className="text-center text-white py-1"
                                style={{
                                  borderRadius: "0px 0px 20px 0px",
                                  background: "black",
                                  marginRight: "10px",
                                }}
                              >
                                {" "}
                                Reshedule
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div id="cancelled" className="tab-pane fade container">
              <div className="">
                <div className="row justify-content-center d-flex">
                  {Cancelled.map((elem) => {
                    const { name, amount, date, time, technician } = elem;
                    return (
                      <div className="col-lg-4 col-md-6 col-sm-6 col-12 pb-4 justify-content-center d-flex">
                        <div
                          className="bg-white border-0"
                          style={{ borderRadius: "20px", maxWidth: "350px", boxShadow:"#8080808c 2px 0px 2px 0px" }}
                        >
                          <div className="row px-4 py-2">
                            <div className="col-6">
                              <div
                                className="font-weight-bolder"
                                style={{
                                  fontFamily: "sans-serif",
                                  fontSize: "20px",
                                }}
                              >
                                {" "}
                                {name}
                              </div>
                              <div
                                className="font-weight-bold py-2"
                                style={{ fontSize: "14px" }}
                              >
                                Date:{date}
                              </div>
                            </div>
                            <div className="col-6">
                              <div
                                className="float-right font-weight-bolder"
                                style={{
                                  fontFamily: "sans-serif",
                                  fontSize: "18px",
                                }}
                              ></div>
                              <br></br>
                              <div
                                className="float-right font-weight-bold py-2"
                                style={{ fontSize: "12px" }}
                              >
                                Time Slot:{time}
                              </div>
                            </div>
                            <div
                              className="text-danger text-center pt-2 font-weight-bolder"
                              style={{ fontFamily: "sans-serif" }}
                            >
                              Cancelled
                            </div>
                          </div>
                          <div className="px-4 row py-2">
                            <div className="col">
                              <div
                                className="fa fa-phone fa-lg"
                                style={{ color: "#C4C4C4" }}
                              ></div>
                            </div>
                            <div className="col text-center">
                              <div
                                className="fa fa-commenting fa-lg"
                                style={{ color: "#C4C4C4" }}
                              ></div>
                            </div>
                            <div className="col">
                              <img
                                src={send}
                                className="img-fluid float-right"
                                alt="image"
                              ></img>
                            </div>
                          </div>

                          <div className=" pt-2">
                            <div
                              className="text-center text-white py-1"
                              style={{
                                borderRadius: "0px 0px 20px 20px",
                                background: "black",
                              }}
                            >
                              {" "}
                              Book Again
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="address" className="tab-pane fade">
          <div className="text-danger py-4">dcfsvcds</div>
        </div>
        <div id="profile" className="tab-pane fade">
          <div className="text-danger py-4">dcfsvcds</div>
        </div>
        <div id="payment" className="tab-pane fade">
          <div className="text-danger py-4">dcfsvcds</div>
        </div>
        <div id="refer" className="tab-pane fade">
          <div className="text-danger py-4">dcfsvcds</div>
        </div>
      </div>
    </div>
  );
}

export default User;
