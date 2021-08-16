import React from "react";
import { NavLink } from "react-router-dom";
import {
  AC,
  Fridge,
  WashingMachine,
  TV,
  RO,
  Painter,
  Electrician,
  Plumber,
  Second,
} from "./Data/Content";
import Ac from "./Images/air-conditioner.png";
import fridge from "./Images/fridge.png";
import plumber from "./Images/plumber.png";
import electrician from "./Images/electrician.png";
import more from "./Images/more-than.png";
import tv from "./Images/tv.png";
import washingM from "./Images/washing-machine.png";
import water from "./Images/water-filter.png";
import painter from "./Images/painter.png";

const next = () => {
  document.getElementById("Next").style.display = "block";
  document.getElementById("show").style.display = "none";
};
const navtabs = () => {
  document.getElementById("Next").style.display = "none";
  document.getElementById("show").style.display = "block";
};

function Home() {
  return (
    <section id="home">
      <div className="mx-5 pt-5">
        <ul
          className="nav nav-tabs mx-5 px-2"
          style={{ borderRadius: "0px 22px 22px 0px" }}
          onClick={navtabs}
        >
          <li>
            <a
              className="active font-weight-bolder py-2 tab text-decoration-none"
              type="button"
              data-toggle="tab"
              href="#AC"
            >
              <img src={Ac} className="img-fluid"></img>
              <div className="text-white pt-2">AC Service</div>
            </a>
          </li>
          <li>
            <a
              className="mx-1 font-weight-bolder px-2 py-2 tab text-decoration-none"
              type="button"
              data-toggle="tab"
              href="#Fridge"
            >
              <img src={fridge} className="img-fluid"></img>
              <div className="text-white pt-2">Fridge Repair</div>
            </a>
          </li>
          <li>
            <a
              className="mx-1 font-weight-bolder px-2 py-2 tab text-decoration-none"
              type="button"
              data-toggle="tab"
              href="#WashingMachine"
            >
              <img src={washingM} className="img-fluid"></img>
              <div className="text-white pt-2">Washing Machine</div>
            </a>
          </li>
          <li>
            <a
              className="mx-1 font-weight-bolder px-2 py-2 tab text-decoration-none"
              type="button"
              data-toggle="tab"
              href="#TV"
            >
              <img src={tv} className="img-fluid"></img>
              <div className="text-white pt-2">TV Repair</div>
            </a>
          </li>
          <li>
            <a
              className="mx-1 font-weight-bolder px-2 py-2 tab text-decoration-none"
              type="button"
              data-toggle="tab"
              href="#RO"
            >
              <img src={water} className="img-fluid"></img>
              <div className="text-white pt-2">RO Service</div>
            </a>
          </li>
          <li>
            <a
              className="mx-1 font-weight-bolder px-2 py-2 tab text-decoration-none"
              type="button"
              data-toggle="tab"
              href="#Painter"
            >
              <img src={painter} className="img-fluid"></img>
              <div className="text-white pt-2">Painter</div>
            </a>
          </li>
          <li>
            <a
              className="mx-1 font-weight-bolder px-2 py-2 tab text-decoration-none"
              type="button"
              data-toggle="tab"
              href="#Electrician"
            >
              <img src={electrician} className="img-fluid"></img>
              <div className="text-white pt-2">Electrician</div>
            </a>
          </li>
          <li>
            <a
              className="mx-1 font-weight-bolder px-2 py-2 tab text-decoration-none"
              type="button"
              data-toggle="tab"
              href="#Plumber"
            >
              <img src={plumber} className="img-fluid"></img>
              <div className="text-white pt-2">Plumber</div>
            </a>
          </li>
          <li style={{ paddingRight: "6px" }}>
            <a
              className="mx-1 font-weight-bolder px-2 py-2 tab text-decoration-none"
              type="button"
              data-toggle="tab"
              href="#Plumber"
            >
              <img src={more} className="img-fluid"></img>
              <div className="text-white pt-2">More Services</div>
            </a>
          </li>
        </ul>
        <div
          className="px-2 mx-5 pt-3"
          style={{
            background: "black",
            // height: "fit-content",
            maxWidth: "550px",
          }}
        >
          <div
            className="tab-content text-white px-4 content overflow-auto"
            id="show"
            style={{ height: "450px" }}
          >
            <div id="AC" className="active tab-pane">
              <div className="py-2">
                {AC.map((elem) => {
                  const { name, amount } = elem;
                  return (
                    <ul className="list-unstyled">
                      <h5>
                        <b>{name}</b>
                      </h5>
                      <li className="row text-center py-1">
                        <div className="col">Split {name}</div>
                        <div className="col">{amount}</div>
                        <div className="col"></div>
                      </li>
                      <li className="row text-center py-1">
                        <div className="col">Window {name}</div>
                        <div className="col">{amount}</div>
                        <div className="col"></div>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>

            <div id="Fridge" className="tab-pane fade">
              <div className="py-2">
                {Fridge.map((elem) => {
                  const { name, amount } = elem;
                  return (
                    <ul className="list-unstyled">
                      <h5>
                        <b>{name}</b>
                      </h5>
                      <li className="row text-center py-1">
                        <div className="col">Split {name}</div>
                        <div className="col">{amount}</div>
                        <div className="col"></div>
                      </li>
                      <li className="row text-center py-1">
                        <div className="col">Window {name}</div>
                        <div className="col">{amount}</div>
                        <div className="col"></div>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>

            <div id="WashingMachine" className="tab-pane fade">
              <div className="py-2">
                {WashingMachine.map((elem) => {
                  const { name, amount } = elem;
                  return (
                    <ul className="list-unstyled">
                      <h5>
                        <b>{name}</b>
                      </h5>
                      <li className="row text-center py-1">
                        <div className="col">Split {name}</div>
                        <div className="col">{amount}</div>
                        <div className="col"></div>
                      </li>
                      <li className="row text-center py-1">
                        <div className="col">Window {name}</div>
                        <div className="col">{amount}</div>
                        <div className="col"></div>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>

            <div id="TV" className="tab-pane fade">
              <div className="py-2">
                {TV.map((elem) => {
                  const { name, amount } = elem;
                  return (
                    <ul className="list-unstyled">
                      <h5>
                        <b>{name}</b>
                      </h5>
                      <li className="row text-center py-1">
                        <div className="col">Split {name}</div>
                        <div className="col">{amount}</div>
                        <div className="col"></div>
                      </li>
                      <li className="row text-center py-1">
                        <div className="col">Window {name}</div>
                        <div className="col">{amount}</div>
                        <div className="col"></div>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>

            <div id="RO" className="tab-pane fade">
              <div className="py-2">
                {RO.map((elem) => {
                  const { name, amount } = elem;
                  return (
                    <ul className="list-unstyled">
                      <h5>
                        <b>{name}</b>
                      </h5>
                      <li className="row text-center py-1">
                        <div className="col">Split {name}</div>
                        <div className="col">{amount}</div>
                        <div className="col"></div>
                      </li>
                      <li className="row text-center py-1">
                        <div className="col">Window {name}</div>
                        <div className="col">{amount}</div>
                        <div className="col"></div>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>

            <div id="Painter" className="tab-pane fade">
              <div className="py-2">
                {Painter.map((elem) => {
                  const { name, amount } = elem;
                  return (
                    <ul className="list-unstyled">
                      <h5>
                        <b>{name}</b>
                      </h5>
                      <li className="row text-center py-1">
                        <div className="col">Split {name}</div>
                        <div className="col">{amount}</div>
                        <div className="col"></div>
                      </li>
                      <li className="row text-center py-1">
                        <div className="col">Window {name}</div>
                        <div className="col">{amount}</div>
                        <div className="col"></div>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>

            <div id="Electrician" className="tab-pane fade">
              <div className="py-2">
                {Electrician.map((elem) => {
                  const { name, amount } = elem;
                  return (
                    <ul className="list-unstyled">
                      <h5>
                        <b>{name}</b>
                      </h5>
                      <li className="row text-center py-1">
                        <div className="col">Split {name}</div>
                        <div className="col">{amount}</div>
                        <div className="col"></div>
                      </li>
                      <li className="row text-center py-1">
                        <div className="col">Window {name}</div>
                        <div className="col">{amount}</div>
                        <div className="col"></div>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>

            <div id="Plumber" className="tab-pane fade">
              <div className="py-2">
                {Plumber.map((elem) => {
                  const { name, amount } = elem;
                  return (
                    <ul className="list-unstyled">
                      <h5>
                        <b>{name}</b>
                      </h5>
                      <li className="row text-center py-1">
                        <div className="col">Split {name}</div>
                        <div className="col">{amount}</div>
                        <div className="col"></div>
                      </li>
                      <li className="row text-center py-1">
                        <div className="col">Window {name}</div>
                        <div className="col">{amount}</div>
                        <div className="col"></div>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          </div>

          <div
            id="Next"
            style={{
              height: "450px",
              background: "black",
              display: "none",
              overflowY: "auto",
              color: "white",
            }}
          >
            <div className="py-2 px-4">
              {Second.map((elem) => {
                const { name1, amount } = elem;
                return (
                  <ul className="list-unstyled">
                    <h5>
                      <b>Service Details</b>
                    </h5>
                    <li className="row text-center py-1">
                      <div className="col">Split {name1}</div>
                      <div className="col">2</div>
                      <div className="col">{amount}</div>
                    </li>
                    <li className="row text-center py-1">
                      <div className="col">Split {name1}</div>
                      <div className="col">1</div>
                      <div className="col">{amount}</div>
                    </li>
                    <br></br>
                    <h5>
                      <b>Choose Date</b>
                    </h5>
                    <div className="text-center pt-4 mt-4 pb-4">
                      <label for="Date"></label>
                      <input
                        type="date"
                        id="Date"
                        name="Date"
                        className="border-0 text-center"
                        style={{
                          outline: "none",
                          height: "40px",
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
                          <div className="btn px-2">9 Am to 10 Am</div>
                        </div>
                        <div className="col-4 pt-3">
                          <div className="btn px-2">9 Am to 10 Am</div>
                        </div>
                        <div className="col-4 pt-3">
                          <div className="btn px-2">9 Am to 10 Am</div>
                        </div>
                        <div className="col-4 pt-3">
                          <div className="btn px-2">9 Am to 10 Am</div>
                        </div>
                        <div className="col-4 pt-3">
                          <div className="btn px-2">9 Am to 10 Am</div>
                        </div>
                        <div className="col-4 pt-3">
                          <div className="btn px-2">9 Am to 10 Am</div>
                        </div>
                        <div className="col-4 pt-3">
                          <div className="btn px-2">9 Am to 10 Am</div>
                        </div>
                        <div className="col-4 pt-3">
                          <div className="btn px-2">9 Am to 10 Am</div>
                        </div>
                        <div className="col-4 pt-3">
                          <div className="btn px-2">9 Am to 10 Am</div>
                        </div>
                      </div>
                    </div>
                  </ul>
                );
              })}
            </div>
          </div>

          <div className="mx-4 py-4 row">
            <div className="col">
              <div
                className="btn border-0 text-white float-left"
                style={{
                  borderRadius: "50px",
                  width: "100%",
                  padding: "11px 0px",
                }}
              >
                View Details
              </div>
            </div>
            <div className="col">
              <div
                className="btn border-0 tab text-white"
                id="next"
                style={{
                  borderRadius: "50px",
                  width: "100%",
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
    </section>
  );
}

export default Home;
