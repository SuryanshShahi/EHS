import React, { useState } from "react";
import { Fridge, Second } from "../Data/Content";
import "./WashingM.css";
import Vector from "./Images/Vector.png";
import Date from "./Images/date.png";
import Sit from "./Images/sit.png";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import arrow from "../Images/left.png";

function WashingM() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  const handleIncrement = (id) => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = (id) => {
    setCount((prevCount) => (prevCount - 1 < 0 ? 0 : prevCount - 1));
  };

  const handleIncrement1 = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  const handleDecrement1 = () => {
    setCounter((prevCount) => (prevCount - 1 < 0 ? 0 : prevCount - 1));
  };

  const next = () => {
    document.getElementById("Next").style.display = "block";
    document.getElementById("show").style.display = "none";
    document.getElementById("arrow").style.display = "block";
  };
  const back = () => {
    document.getElementById("Next").style.display = "none";
    document.getElementById("show").style.display = "block";
    document.getElementById("arrow").style.display = "none";
  };

  return (
    <section>
      <div className="py-lg-5 py-md-5 " id="WashingM">
        <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12 text-white justify-content-center d-flex my-5">
            <div className="pt-5">
              <h1 className="font-weight-bolder pt-4"  style={{fontFamily:"Poppins"}}>
                Washing Machine Repair<br></br> in Chandigarh
              </h1>
              <ul className="font-weight-bolder pt-4"  style={{fontFamily:"Poppins"}}>
                <li className="pb-4">30 Days service warranty </li>
                <li>Experienced technician at your doorstep</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 justify-content-center justify-content-lg-end d-flex gx-0">
            <div className="px-lg-5 position-relative py-lg-3 py-md-3">
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
                  <div id="Fridge" className="active tab-pane">
                    <div className="py-2">
                      <ul className="list-unstyled">
                        <h5>
                          <b>Repair</b>
                        </h5>
                        <li className="row py-1">
                          <div className="col">
                            Fully Automatic (Top load) Checkup
                          </div>
                          <div className="col-2">
                            <input
                              type="checkbox"
                              className="form-check"
                              style={{ cursor: "pointer", width: "18px" }}
                            ></input>
                          </div>
                        </li>
                        <li className="row py-1">
                          <div className="col">
                            Fully Automatic (Front load) Checkup
                          </div>
                          <div className="col-2">
                            <input
                              type="checkbox"
                              className="form-check"
                              style={{ cursor: "pointer", width: "18px" }}
                            ></input>
                          </div>
                        </li>
                        <li className="row py-1">
                          <div className="col">Semi Automatic Checkup</div>
                          <div className="col-2">
                            <input
                              type="checkbox"
                              className="form-check"
                              style={{ cursor: "pointer", width: "18px" }}
                            ></input>
                          </div>
                        </li>
                        <div
                          className="text-center text-success py-4"
                          style={{ fontSize: "14px" }}
                        >
                          *Visiting Charges Rs 299 For Checking
                        </div>

                        <h5>
                          <b>Installation</b>
                        </h5>
                        {Fridge.map((elem) => {
                          const { name, amount, id } = elem;
                          return (
                            <div>
                              <li className="row py-1">
                                <div className="col">{name}</div>
                                <div className="col">{amount}</div>
                                <div className="col d-flex justify-content-end pr-4 counter">
                                  <div
                                    className="text-white btn"
                                    onClick={() => handleDecrement(id)}
                                    style={{
                                      fontSize: "45px",
                                      marginTop: "-30px",
                                      cursor: "pointer",
                                      height: "0px",
                                    }}
                                  >
                                    -
                                  </div>
                                  <span
                                    className="px-2"
                                    style={{ fontSize: "17px" }}
                                  >
                                    {count}
                                  </span>
                                  <div
                                    className="text-white btn"
                                    onClick={() => handleIncrement(id)}
                                    style={{
                                      fontSize: "30px",
                                      marginTop: "-19px",
                                      cursor: "pointer",
                                      height: "0px",
                                    }}
                                  >
                                    +
                                  </div>
                                </div>
                              </li>
                            </div>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>

                <div
                  id="Next"
                  style={{
                    height: "450px",
                    display: "none",
                    overflowY: "auto",
                    color: "white",
                  }}
                >
                  <div className="py-2 px-4">
                    <ul className="list-unstyled">
                      <h5>
                        <b>Service Details</b>
                      </h5>
                      {Second.map((elem) => {
                        const { name1, amount, quantity } = elem;
                        return (
                          <div>
                            <li className="row text-center py-1">
                              <div className="col">{name1}</div>
                              <div className="col">{quantity}</div>
                              <div className="col">Rs {amount}</div>
                            </li>
                          </div>
                        );
                      })}
                      <br></br>
                      <h5>
                        <b>Choose Date</b>
                      </h5>
                      <div className="text-center pt-4 mt-4 pb-4">
                        <label for="Date"></label>
                        <input
                          type="date"
                          value="2000-05-05"
                          id="Date"
                          name="Date"
                          className="border-0 text-center pr-3"
                          style={{
                            outline: "none",
                            height: "40px",
                            borderRadius: "50px",
                            color: "white",
                            background: "#ffffff59",
                            cursor: "pointer",
                            fontSize: "17px",
                          }}
                        />
                      </div>
                      <br></br>
                      <div>
                        <h5>
                          <b>Choose Time Slot</b>
                        </h5>
                        <div className="row time">
                          <div className="col-4 pt-3">
                            <div className="btn px-2">09 Am to 10 Am</div>
                          </div>
                          <div className="col-4 pt-3">
                            <div className="btn px-2">10 Am to 11 Am</div>
                          </div>
                          <div className="col-4 pt-3">
                            <div className="btn px-2">11 Am to 12 Pm</div>
                          </div>
                          <div className="col-4 pt-3">
                            <div className="btn px-2">12 Pm to 01 Pm</div>
                          </div>
                          <div className="col-4 pt-3">
                            <div className="btn px-2">01 Pm to 02 Pm</div>
                          </div>
                          <div className="col-4 pt-3">
                            <div className="btn px-2">02 Pm to 03 Pm</div>
                          </div>
                          <div className="col-4 pt-3">
                            <div className="btn px-2">03 Pm to 04 Pm</div>
                          </div>
                          <div className="col-4 pt-3">
                            <div className="btn px-2">04 Pm to 05 Pm</div>
                          </div>
                          <div className="col-4 pt-3">
                            <div className="btn px-2">05 Pm to 06 Pm</div>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>

                <div className="mx-4 py-4 row homebtn">
                  <div className="pt-3 pt-lg-0 pt-md-0 pt-sm-0 d-flex align-items-center">
                    <div
                      className="mr-5"
                      id="arrow"
                      style={{ display: "none" }}
                    >
                      <img
                        src={arrow}
                        style={{
                          cursor: "pointer",
                          color: "white",
                        }}
                        className="img-fluid arrow"
                        alt="arrow"
                        onClick={back}
                      />
                    </div>
                    <div
                      className="btn border-0 tab text-white"
                      id="next"
                      style={{
                        borderRadius: "50px",
                        width: "100%",
                        maxHeight: "46px",
                        padding: "11px 0px",
                      }}
                      onClick={next}
                    >
                      Next
                    </div>
                  </div>
                </div>
              </div>
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
              style={{fontFamily:"Poppins"}}
            >
              How to Book Service
            </h4>
            <span style={{ fontSize: "17px" }}>3 steps booking process</span>
          </div>
          <div className="row text-center pb-5">
            <div className="col-lg-4 col-md-4 col-12 pb-5">
              <img src={Vector} className="img-fluid" alt="vector"></img>
              <div
                className="font-weight-bolder pt-3"
                style={{ fontSize: "20px" }}
              >
                Choose service you need
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 pb-5">
              <img src={Date} className="img-fluid" alt="date"></img>
              <div
                className="font-weight-bolder pt-3"
                style={{ fontSize: "20px" }}
              >
                Choose your date & time slot
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12 pb-2">
              <img src={Sit} className="img-fluid" alt="sit"></img>
              <div
                className="font-weight-bolder pt-3"
                style={{ fontSize: "20px" }}
              >
                Sit back & relax
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-lg-5">
        <div className="text-center py-5">
          <h4
            className="font-weight-bolder"
            style={{fontFamily:"Poppins"}}
          >
            Service Inclusions & Exclusions
          </h4>
          <div style={{ fontSize: "17px" }}>Approx time: 1 Hour</div>
        </div>
        <div className="container-fluid px-lg-5">
          <div className="row pb-4 px-lg-5" style={{ fontSize: "16.5px" }}>
            <div className="col-lg-6 col-md-6 col-12 list-unstyled pb-5">
              <li>
                <div className="fa fa-check-circle pr-2 text-"></div>Servicing
                Includes: Outer body,inlet pipe and drain pipe cleaning
              </li>
              <li>
                <div className="fa fa-check-circle pr-2 text-"></div>Pulsater
                cleaning(inner drum and chemical cleaning not included)
              </li>
              <li>
                <div className="fa fa-check-circle pr-2 text-"></div>Gasket
                cleaning(in Front load machines)
              </li>
              <li>
                <div className="fa fa-check-circle pr-2 text-"></div>Dump
                valve,Detergent dispenser tray,Inlet valve cleaning
              </li>
              <li>
                <div className="fa fa-check-circle pr-2 text-"></div>Belt ,Legs
                and inlet Tap adjustment
              </li>
            </div>
            <div className="col-lg-6 col-md-6 col-12 list-unstyled">
              <li>
                <div className="fa fa-minus-circle pr-2"></div>Scale removal of
                the Drum is not included
              </li>
              <li>
                <div className="fa fa-minus-circle pr-2"></div>Epic Home Service
                is not liable for any pre-existing issues
              </li>
              <li>
                <div className="fa fa-minus-circle pr-2"></div>Our technicians
                do not carry ladders. If required, a ladder has to be provided
                by the customer.
              </li>
            </div>
          </div>
        </div>
      </div>

      <div
        className=""
        style={{ backgroundColor: "rgba(222, 224, 236, 0.92)" }}
      >
        <div className="container-fluid px-lg-5 px-md-4">
          <div className="text-center py-5">
            <h4
              className="font-weight-bolder"
              style={{fontFamily:"Poppins"}}
            >
              Frequently Asked Questions
            </h4>
          </div>
          <div className="container-fluid px-lg-5">
            <div className="row pb-4 px-lg-5" style={{ fontSize: "16.5px",textAlign:"justify" }}>
              <div className="col-lg-6 col-md-6 col-12 list-unstyled pb-5">
                <Accordion expanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                      <b>How much will i be charged for service?</b>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="px-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </AccordionDetails>
                </Accordion>
                <Accordion className="mt-2">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                      <b>How much will i be charged for service?</b>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="px-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </AccordionDetails>
                </Accordion>
                <Accordion className="mt-2">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                      <b>How much will i be charged for service?</b>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="px-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </AccordionDetails>
                </Accordion>
                <Accordion className="mt-2">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                      <b>How much will i be charged for service?</b>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="px-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="col-lg-6 col-md-6 col-12 list-unstyled">
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                      <b>How much will i be charged for service?</b>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="px-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </AccordionDetails>
                </Accordion>
                <Accordion className="mt-2">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                      <b>How much will i be charged for service?</b>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="px-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </AccordionDetails>
                </Accordion>
                <Accordion className="mt-2">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                      <b>How much will i be charged for service?</b>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="px-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </AccordionDetails>
                </Accordion>
                <Accordion className="mt-2">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                      <b>How much will i be charged for service?</b>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="px-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </AccordionDetails>
                </Accordion>
                <Accordion className="mt-2">
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>
                      <b>How much will i be charged for service?</b>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className="px-5">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-lg-5 px-md-5 px-sm-4">
        <div className="py-5">
          <h4
            className="font-weight-bolder text-center pb-4"
            style={{fontFamily:"Poppins"}}
          >
            All About Washing Machine Repair in Chandigarh
          </h4>
          <div className="mx-lg-5" style={{ fontSize: "17px",textAlign:"justify" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum.
          </div>
        </div>
        <div className="px-lg-5">
          <div className="row pb-4 px-lg-5" style={{ fontSize: "16.5px",textAlign:"justify" }}>
            <div className="col-lg-6 col-md-6 col-12 list-unstyled pb-5 px-lg-4">
              <b>5 Common Washing Machine Problems</b>
              <ol className="ml-4">
                <li className="pt-2">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </li>
                <li>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,{" "}
                </li>
              </ol>
            </div>
            <div className="col-lg-6 col-md-6 col-12 list-unstyled px-lg-4">
              <b>
                Why Epic Home Service for Washing Machine Repair Service in
                Chandigarh{" "}
              </b>
              <ol className="ml-4">
                <li className="pt-2">
                  Easy to Book: Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an
                </li>
                <li>
                  Easy to Book: Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an
                </li>
                <li>
                  Easy to Book: Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an
                </li>
                <li>
                  Easy to Book: Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an
                </li>
              </ol>
            </div>
            <div className="col-lg-6 col-md-6 col-12 list-unstyled px-lg-4">
              <b>Service offered in Washing Machine Repaired</b>
              <ol className="ml-4">
                <li className="pt-2">
                  Easy to Book: Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an
                </li>
                <li>
                  Easy to Book: Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an
                </li>
                <li>
                  Easy to Book: Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an
                </li>
                <li>
                  Easy to Book: Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WashingM;
