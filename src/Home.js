import React, { useState } from "react";
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
  Appliance,
  Repair,
  Designing,
} from "./Data/Content";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import bg1 from "./Images/bg.png";
import Ac from "./Images/air-conditioner.png";
import fridge from "./Images/fridge.png";
import plumber from "./Images/plumber.png";
import electrician from "./Images/electrician.png";
import more from "./Images/more-than.png";
import tv from "./Images/tv.png";
import washingM from "./Images/washing-machine.png";
import water from "./Images/water-filter.png";
import painter from "./Images/painter.png";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
var setting = {
  responsive: responsive,
  centerMode: true,
};
const responsive1 = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
var settings = {
  responsive: responsive1,
  centerMode: true,
};

function Home() {
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);

  const handleIncrement = (id) => {
    // const updatedImg = AC.filter((curElem) => {
    //   if (curElem.id === id) {
    //     // return curElem.id;
    //     setCount((prevCount) => prevCount + 1);
    //   console.log(curElem.id);
    //   }
    // });
    setCount((prevCount) => prevCount + 1);
    // setCount(updatedImg);
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
  };
  const navtabs = () => {
    setCount(0);
    setCounter(0);
    document.getElementById("Next").style.display = "none";
    document.getElementById("show").style.display = "block";
  };
  const background = () => {
    document.getElementById("home").style.background =
      "url('https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349') fixed no-repeat";
    document.getElementById("home").style.backgroundSize = "100% 100%";
  };
  const Orgbackground = () => {
    document.getElementById("home").style.background = "";
  };
  return (
    <section style={{ marginTop: "48px" }}>
      <div className="py-5" id="home">
        <div className="mx-lg-5 position-relative pb-1">
        <ul
            className="nav nav-tabs mx-4 mx-md-5 mx-lg-5 px-2 d-flex"
            style={{ borderRadius: "0px 22px 22px 0px",overflowX:"auto" }}
            onClick={navtabs}
          >
          
            <li>
              <a
                className="active font-weight-bolder py-2 tab text-decoration-none"
                type="button"
                id="ac"
                data-toggle="tab"
                href="#AC"
                onClick={Orgbackground}
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
                onClick={background}
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
                style={{width:"112px"}}
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
                href=""
              >
                <img src={more} className="img-fluid"></img>
                <div className="text-white pt-2">More Services</div>
              </a>
            </li>
            </ul>
          <div
            className="px-2 mx-4 mx-md-5 mx-lg-5 pt-3"
            style={{
              background: "rgba(0, 0, 0, 0.7)",
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
                    const { name, amount, id } = elem;
                    return (
                      <ul className="list-unstyled">
                        <h5>
                          <b>{name}</b>
                        </h5>
                        <li className="row py-1">
                          <div className="col">Split {name}</div>
                          <div className="col text-center">{amount}</div>
                          <div className="col d-flex justify-content-end pb-2 pr-4 counter">
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
                            <span className="px-2" style={{ fontSize: "17px" }}>
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
                        <li className="row py-1">
                          <div className="col">Window {name}</div>
                          <div className="col text-center">{amount}</div>
                          <div className="col d-flex justify-content-end pr-4 counter">
                            <div
                              className="text-white btn"
                              onClick={() => handleDecrement1(id)}
                              style={{
                                fontSize: "45px",
                                marginTop: "-30px",
                                cursor: "pointer",
                                height: "0px",
                              }}
                            >
                              -
                            </div>
                            <span className="px-2" style={{ fontSize: "17px" }}>
                              {counter}
                            </span>
                            <div
                              className="text-white btn"
                              onClick={() => handleIncrement1(id)}
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
                      </ul>
                    );
                  })}
                </div>
              </div>

              <div id="Fridge" className="tab-pane fade">
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

              <div id="WashingMachine" className="tab-pane fade">
                <div className="py-2">
                  {WashingMachine.map((elem) => {
                    const { name, amount } = elem;
                    return (
                      <ul className="list-unstyled">
                        <h5>
                          <b>{name}</b>
                        </h5>
                        <li className="row py-1">
                          <div className="col">Split {name}</div>
                          <div className="col text-center">{amount}</div>
                          <div className="col"></div>
                        </li>
                        <li className="row py-1">
                          <div className="col">Window {name}</div>
                          <div className="col text-center">{amount}</div>
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
                        <li className="row py-1">
                          <div className="col">Split {name}</div>
                          <div className="col text-center">{amount}</div>
                          <div className="col"></div>
                        </li>
                        <li className="row py-1">
                          <div className="col">Window {name}</div>
                          <div className="col text-center">{amount}</div>
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
                        <li className="row py-1">
                          <div className="col">Split {name}</div>
                          <div className="col text-center">{amount}</div>
                          <div className="col"></div>
                        </li>
                        <li className="row py-1">
                          <div className="col">Window {name}</div>
                          <div className="col text-center">{amount}</div>
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
                        <li className="row py-1">
                          <div className="col">Split {name}</div>
                          <div className="col text-center">{amount}</div>
                          <div className="col"></div>
                        </li>
                        <li className="row py-1">
                          <div className="col">Window {name}</div>
                          <div className="col text-center">{amount}</div>
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
                        <li className="row py-1">
                          <div className="col">Split {name}</div>
                          <div className="col text-center">{amount}</div>
                          <div className="col"></div>
                        </li>
                        <li className="row py-1">
                          <div className="col">Window {name}</div>
                          <div className="col text-center">{amount}</div>
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
                    const { name, amount, id } = elem;
                    return (
                      <ul className="list-unstyled">
                        <h5>
                          <b>{name}</b>
                        </h5>
                        <li className="row py-1">
                          <div className="col">Split {name}</div>
                          <div className="col text-center">{amount}</div>
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
                            <span className="px-2" style={{ fontSize: "17px" }}>
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
                        <li className="row py-1">
                          <div className="col">Window {name}</div>
                          <div className="col text-center">{amount}</div>
                          <div className="col d-flex justify-content-end pr-4 counter">
                            <div
                              className="text-white btn"
                              onClick={() => handleDecrement1(id)}
                              style={{
                                fontSize: "45px",
                                marginTop: "-30px",
                                cursor: "pointer",
                                height: "0px",
                              }}
                            >
                              -
                            </div>
                            <span className="px-2" style={{ fontSize: "17px" }}>
                              {counter}
                            </span>
                            <div
                              className="text-white btn"
                              onClick={() => handleIncrement1(id)}
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
                  );
                })}
              </div>
            </div>

            <div className="mx-4 py-4 row homebtn">
              <div className="col-lg-6 col-md-6 col-sm-6 col-19">
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
              <div className="col-lg-6 col-md-6 col-sm-6 col-19 pt-3 pt-lg-0 pt-md-0 pt-sm-0">
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
      </div>

      <div
        className="px-5 py-5 mt-5 position-relative"
        style={{ background: "rgb(222 224 236 / 92%)" }}
      >
        <div className="justify-content-center d-flex pb-4">
          <div className="text-center">
            <div className="font-weight-bolder" style={{ fontSize: "24px" }}>
              Appliance Repair Service
            </div>
            <div> Servicing, installation, uninstallation & repair</div>
          </div>
        </div>
        <MultiCarousel {...setting}>
          {Appliance.map((elem) => {
            const { name, image, price } = elem;
            return (
              <NavLink
                to="/products"
                className="text-decoration-none appliance"
              >
                <div className="px-2 pt-4">
                  <div className="text-center pb-3">
                    <img src={image} className="img-fluid " alt="menupic"></img>
                  </div>
                  <div
                    className="text-center font-weight-bolder"
                    style={{ fontSize: "16px", color: "black" }}
                  >
                    {name}
                  </div>
                </div>
              </NavLink>
            );
          })}
        </MultiCarousel>
      </div>

      <div className="px-5 py-5">
        <div className="justify-content-center d-flex pb-4">
          <div className="text-center">
            <div className="font-weight-bolder" style={{ fontSize: "24px" }}>
              Repair & Maintenence
            </div>
            <div> Minor repair, fitting, servicing & many more</div>
          </div>
        </div>
        <MultiCarousel {...settings}>
          {Repair.map((elem) => {
            const { name, image, price } = elem;
            return (
              <NavLink
                to="/products"
                className="text-decoration-none appliance"
              >
                <div className="px-2 pt-4">
                  <div className="text-center pb-3">
                    <img src={image} className="img-fluid " alt="menupic"></img>
                  </div>
                  <div
                    className="text-center font-weight-bolder"
                    style={{ fontSize: "16px", color: "black" }}
                  >
                    {name}
                  </div>
                </div>
              </NavLink>
            );
          })}
        </MultiCarousel>
      </div>

      <div
        className="px-5 py-5"
        style={{ background: "rgb(222 224 236 / 92%)" }}
      >
        <div className="justify-content-center d-flex pb-4">
          <div className="text-center">
            <div className="font-weight-bolder" style={{ fontSize: "24px" }}>
              Painter & Interior Designing
            </div>
            <div> House painter, house decor, false ceiling & designing</div>
          </div>
        </div>
        <MultiCarousel {...settings}>
          {Designing.map((elem) => {
            const { name, image, price } = elem;
            return (
              <NavLink
                to="/products"
                className="text-decoration-none appliance"
              >
                <div className="px-2 pt-4">
                  <div className="text-center pb-3">
                    <img src={image} className="img-fluid" alt="menupic"></img>
                  </div>
                  <div
                    className="text-center font-weight-bolder"
                    style={{ fontSize: "16px", color: "black" }}
                  >
                    {name}
                  </div>
                </div>
              </NavLink>
            );
          })}
        </MultiCarousel>
      </div>
    </section>
  );
}

export default Home;
