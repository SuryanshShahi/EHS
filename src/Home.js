import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
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
  BookingAddress,
  Designing,
} from "./Data/Content";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import KitchenIcon from "@mui/icons-material/Kitchen";
import TvIcon from "@mui/icons-material/Tv";
import OpacityIcon from '@mui/icons-material/Opacity';
import ImagesearchRollerIcon from '@mui/icons-material/ImagesearchRoller';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
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
    breakpoint: { max: 1024, min: 800 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
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
  const history = useHistory();
  const handleIncrement = (id) => {
    const updatedCount = AC.filter((curElem) => {
      if (curElem.id === id) {
        // return ((prevCount) => prevCount + 1);
        console.log(curElem.id);
      }
    });
    setCount((prevCount) => prevCount + 1);
    // setCount(updatedCount);
  };
  const handleDecrement = (id) => {
    setCount((prevCount) => (prevCount - 1 < 0 ? 0 : prevCount - 1));
  };

  const handleIncrement1 = (id) => {
    setCounter((prevCount) => prevCount + 1);
  };

  const handleDecrement1 = (id) => {
    setCounter((prevCount) => (prevCount - 1 < 0 ? 0 : prevCount - 1));
  };

  const summation = () => {
    // console.log((Second.reduce((a,v) =>  a + v.amount , 0 )))
    return Second.reduce((a, v) => a + v.amount, 0);
  };
  const completeBooking = () => {
    history.push("/userProfile");
  };
  const next = () => {
    document.getElementById("Next").style.display = "block";
    document.getElementById("forAddress").style.display = "block";
    document.getElementById("show").style.display = "none";
    document.getElementById("next").style.display = "none";
  };
  const navtabs = () => {
    setCount(0);
    setCounter(0);
    document.getElementById("Next").style.display = "none";
    document.getElementById("show").style.display = "block";
    document.getElementById("next").style.display = "block";
    document.getElementById("forAddress").style.display = "none";
  };
  const background = () => {
    document.getElementById("home").style.background =
      "url('https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349') fixed no-repeat";
    document.getElementById("home").style.backgroundSize = "100% 100%";
  };
  const Orgbackground = () => {
    document.getElementById("home").style.background = "";
  };

  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <section>
      <div className="py-lg-5 py-md-4" id="home">
        <div className="mx-lg-5 position-relative pb-1">
          <TabContext value={value}>
            <Box>
              <TabList
                className="mr-lg-2 mr-md-2"
                onChange={handleChange}
                onClick={navtabs}
                variant="scrollable"
                scrollButtons={true}
                // aria-label="scrollable prevent tabs example"
                sx={{ background: "rgba(0, 0, 0, 0.9)", maxWidth: "1000px" }}
              >
                <Tab
                  label="AC Service"
                  value="1"
                  icon={<AcUnitIcon/>}
                  onClick={Orgbackground}
                  sx={{ height: "100px", color: "white", fontWeight: "bolder" }}
                ></Tab>
                <Tab
                  label="Fridge Repair"
                  value="2"
                  icon={<KitchenIcon />}
                  onClick={background}
                  sx={{ height: "100px", color: "white", fontWeight: "bolder" }}
                ></Tab>
                <Tab
                  label="Washing Machine"
                  value="3"
                  icon={<LocalLaundryServiceIcon/> }
                  fontSize= "large"
                  sx={{fontSize:"30"}}
                  sx={{
                    height: "100px",
                    color: "white",
                    fontWeight: "bolder",
                    outline: "none",
                  }}
                ></Tab>
                <Tab
                  label="TV Repair"
                  value="4"
                  icon={<TvIcon />}
                  sx={{
                    height: "100px",
                    color: "white",
                    fontWeight: "bolder",
                    outline: "none",
                  }}
                ></Tab>
                <Tab
                  label="RO Service"
                  value="5"
                  icon={<OpacityIcon/>}
                  sx={{
                    height: "100px",
                    color: "white",
                    fontWeight: "bolder",
                    outline: "none",
                  }}
                ></Tab>
                <Tab
                  label="Painter"
                  value="6"
                  icon={<ImagesearchRollerIcon/>}
                  sx={{
                    height: "100px",
                    color: "white",
                    fontWeight: "bolder",
                    outline: "none",
                  }}
                ></Tab>
                <Tab
                  label="Electrician"
                  value="7"
                  icon={<ElectricalServicesIcon/>}
                  sx={{
                    height: "100px",
                    color: "white",
                    fontWeight: "bolder",
                    outline: "none",
                  }}
                ></Tab>
                <Tab
                  label="Plumber"
                  icon={<PlumbingIcon/>}
                  value="8"
                  sx={{
                    height: "100px",
                    color: "white",
                    fontWeight: "bolder",
                    outline: "none",
                  }}
                ></Tab>
              </TabList>

              <div
                style={{ background: "rgba(0, 0, 0, 0.9)", maxWidth: "550px" }}
              >
                <div
                  id="show"
                  style={{
                    height: "450px",
                    overflow: "auto",
                    fontSize: "14px",
                  }}
                >
                  <TabPanel value="1">
                    <div id="AC" className="text-white">
                      <div className="py-2">
                        {AC.map((elem) => {
                          const { name, amount, id, subServices } = elem;
                          return (
                            <ul className="list-unstyled">
                              <h5>
                                <b style={{ fontSize: "17px" }}>{name}</b>
                              </h5>
                              <li className="row py-1" key={id}>
                                <div className="col">
                                  {subServices[0]["name1"]}
                                </div>
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
                                  <span
                                    className="px-2"
                                    style={{ fontSize: "17px" }}
                                  >
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
                  </TabPanel>

                  <TabPanel value="2">
                    <div id="Fridge" className="text-white">
                      <div className="py-2">
                        <ul className="list-unstyled">
                          <h5>
                            <b style={{ fontSize: "17px" }}>Repair</b>
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
                  </TabPanel>

                  <TabPanel value="3">
                    <div id="WashingMachine" className="text-white">
                      <div className="py-2">
                        {WashingMachine.map((elem) => {
                          const { name, amount, subServices } = elem;
                          return (
                            <ul className="list-unstyled">
                              <h5>
                                <b style={{ fontSize: "17px" }}>{name}</b>
                              </h5>
                              <li className="row py-1">
                                <div className="col">
                                  {subServices[0]["name1"]}
                                </div>
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
                  </TabPanel>

                  <TabPanel value="4">
                    <div id="TV" className="text-white">
                      <div className="py-2">
                        {TV.map((elem) => {
                          const { name, amount, subServices } = elem;
                          return (
                            <ul className="list-unstyled">
                              <h5>
                                <b style={{ fontSize: "17px" }}>{name}</b>
                              </h5>
                              <li className="row py-1">
                                <div className="col">
                                  {subServices[0]["name1"]}
                                </div>
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
                  </TabPanel>

                  <TabPanel value="5">
                    <div id="RO" className="text-white">
                      <div className="py-2">
                        {RO.map((elem) => {
                          const { name, amount, subServices } = elem;
                          return (
                            <ul className="list-unstyled">
                              <h5>
                                <b style={{ fontSize: "17px" }}>{name}</b>
                              </h5>
                              <li className="row py-1">
                                <div className="col">
                                  {subServices[0]["name1"]}
                                </div>
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
                  </TabPanel>

                  <TabPanel value="6">
                    <div id="Painter" className="text-white">
                      <div className="py-2">
                        {Painter.map((elem) => {
                          const { name, amount, subServices } = elem;
                          return (
                            <ul className="list-unstyled">
                              <h5>
                                <b style={{ fontSize: "17px" }}>{name}</b>
                              </h5>
                              <li className="row py-1">
                                <div className="col">
                                  {subServices[0]["name1"]}
                                </div>
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
                  </TabPanel>

                  <TabPanel value="7">
                    <div id="Electrician" className="text-white">
                      <div className="py-2">
                        {Electrician.map((elem) => {
                          const { name, amount, subServices } = elem;
                          return (
                            <ul className="list-unstyled">
                              <h5>
                                <b style={{ fontSize: "17px" }}>{name}</b>
                              </h5>
                              <li className="row py-1">
                                <div className="col">
                                  {subServices[0]["name1"]}
                                </div>
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
                  </TabPanel>

                  <TabPanel value="8">
                    <div id="Plumber" className="text-white">
                      <div className="py-2">
                        {Plumber.map((elem) => {
                          const { name, amount, subServices, id } = elem;
                          return (
                            <ul className="list-unstyled">
                              <h5>
                                <b style={{ fontSize: "17px" }}>{name}</b>
                              </h5>
                              <li className="row py-1">
                                <div className="col">
                                  {subServices[0]["name1"]}
                                </div>
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
                                  <span
                                    className="px-2"
                                    style={{ fontSize: "17px" }}
                                  >
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
                  </TabPanel>
                </div>

                <div
                  className="mx-2"
                  id="Next"
                  style={{
                    height: "450px",
                    display: "none",
                    overflowY: "auto",
                    color: "white",
                    maxWidth: "550px",
                    background: "black",
                  }}
                >
                  <div className="pt-4 pb-2 px-4">
                    <ul className="list-unstyled">
                      <h5>
                        <b style={{ fontSize: "17px" }}>Service Details</b>
                      </h5>
                      {Second.map((elem) => {
                        const { name1, amount, quantity } = elem;
                        return (
                          <div>
                            <li className="row py-1">
                              <div className="col">{name1}</div>
                              <div className="col">{quantity}</div>
                              <div className="col">Rs {amount}</div>
                            </li>
                          </div>
                        );
                      })}
                      <div className="row text-center font-weight-bold py-1">
                        <div className="col">Total amount</div>
                        <div className="col">Rs {summation()}</div>
                      </div>

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
                          <div className="col-lg-4 col-md-4 col-6 pt-3 justify-content-center d-flex">
                            <div className="btn px-3">9 Am to 11 Am</div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-6 pt-3 justify-content-center d-flex">
                            <div className="btn px-3">9 Am to 11 Am</div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-6 pt-3 justify-content-center d-flex">
                            <div className="btn px-3">9 Am to 11 Am</div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-6 pt-3 justify-content-center d-flex">
                            <div className="btn px-3">9 Am to 11 Am</div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-6 pt-3 justify-content-center d-flex">
                            <div className="btn px-3">9 Am to 11 Am</div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-6 pt-3 justify-content-center d-flex">
                            <div className="btn px-3">9 Am to 11 Am</div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-6 pt-3 justify-content-center d-flex">
                            <div className="btn px-3">9 Am to 11 Am</div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-6 pt-3 justify-content-center d-flex">
                            <div className="btn px-3">9 Am to 11 Am</div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-6 pt-3 justify-content-center d-flex">
                            <div className="btn px-3">9 Am to 11 Am</div>
                          </div>
                          
                        </div>
                      </div>
                    </ul>
                  </div>
                </div>

                <div className="mx-4 py-4 row homebtn">
                  <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                    <NavLink to="/washingMachine">
                      <div
                        className="btn border-0 text-white float-left"
                        style={{
                          borderRadius: "50px",
                          width: "100%",
                          padding: "11px 0px",
                        }}
                      >
                        Know More
                      </div>
                    </NavLink>
                  </div>
                  <div
                    className="col-lg-6 col-md-6 col-sm-6 col-6"
                    id="next"
                  >
                    <div
                      className="btn border-0 tab text-white"
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
                  <div
                    className="col-lg-6 col-md-6 col-sm-6 col-6"
                    id="forAddress"
                    style={{ display: "none" }}
                  >
                    <div
                      className="btn border-0 tab text-white"
                      style={{
                        borderRadius: "50px",
                        width: "100%",
                        padding: "11px 0px",
                      }}
                      data-target="#foraddress"
                      data-toggle="modal"
                    >
                      Next
                    </div>
                  </div>

                  <div className="modal fade " id="foraddress">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                      <div
                        className="modal-content justify-content-center d-flex border-0"
                        style={{ background: "#E8E4FD" }}
                      >
                        <div className="ml-auto pt-3">
                          <div
                            className="close pr-3"
                            data-dismiss="modal"
                            style={{ cursor: "pointer", fontSize: "30px" }}
                          >
                            &times;
                          </div>
                        </div>
                        <div className="container px-lg-4 pb-4">
                          <div
                            className="font-weight-bolder text-center pb-5"
                            style={{ fontSize: "26px" }}
                          >
                            Select Address
                          </div>
                          <div className="px-4">
                            {BookingAddress.map((elem) => {
                              const { Address } = elem;
                              return (
                                <div>
                                  <div className="form-check pb-4">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      style={{ width: "17px", height: "17px" }}
                                      name="radio"
                                      id="radio"
                                      checked
                                    />
                                    <label
                                      className="form-check-label"
                                      for="radio"
                                    >
                                      <b>{Address}</b>
                                    </label>
                                  </div>
                                </div>
                              );
                            })}
                            <div
                              className="fa fa-plus-circle font-weight-bold fa-lg d-flex pt-2"
                              style={{ cursor: "pointer" }}
                            >
                              &nbsp;&nbsp;
                              <span
                                style={{
                                  color: "#4A56E2",
                                  fontFamily: "sans-serif",
                                  cursor: "pointer",
                                  fontSize: "1rem",
                                }}
                              >
                                Add New Address
                              </span>
                            </div>
                            <div
                              className="rounded-pill btn btn-secondary border-0 w-100 align-bottom font-weight-bold"
                              style={{
                                background: "#4A56E2",
                                marginTop: "150px",
                              }}
                              data-target="#forPayment"
                              data-toggle="modal"
                              data-dismiss="modal"
                            >
                              Continue With This Address
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal fade " id="forPayment">
                    <div className="modal-dialog modal-lg modal-dialog-centered">
                      <div
                        className="modal-content justify-content-center d-flex border-0"
                        style={{ background: "#E8E4FD" }}
                      >
                        <div className="ml-auto pt-3">
                          <div
                            className="close pr-3"
                            data-dismiss="modal"
                            style={{ cursor: "pointer", fontSize: "30px" }}
                          >
                            &times;
                          </div>
                        </div>
                        <div className="container px-lg-4 pb-4">
                          <div className="row">
                            <div className="col-lg-6 col-12 px-5 d-flex">
                              <div
                                className="font-weight-bolder"
                                id="paymentMethod"
                              >
                                <span style={{ fontSize: "24px" }}>
                                  {" "}
                                  Payment Method
                                </span>

                                <div
                                  className="nav nav-tabs"
                                  style={{ background: "none" }}
                                >
                                  <div
                                    className="active btn font-weight-bolder mt-3 w-100 py-2 tab text-decoration-none"
                                    type="button"
                                    data-toggle="tab"
                                    style={{
                                      borderRadius: "20px",
                                      minWidth: "150px",
                                    }}
                                  >
                                    Pay Online After Service
                                  </div>
                                  <div
                                    className="btn font-weight-bolder mt-3 w-100 py-2 tab text-decoration-none"
                                    type="button"
                                    data-toggle="tab"
                                    style={{
                                      borderRadius: "20px",
                                      minWidth: "150px",
                                    }}
                                  >
                                    Pay Cash After Service
                                  </div>
                                  <div
                                    className="btn font-weight-bolder mt-3 w-100 py-2 tab text-decoration-none"
                                    type="button"
                                    data-toggle="tab"
                                    style={{
                                      borderRadius: "20px",
                                      minWidth: "150px",
                                    }}
                                  >
                                    Pay with Debit Card
                                  </div>
                                  <div
                                    className="btn font-weight-bolder mt-3 w-100 py-2 tab text-decoration-none"
                                    type="button"
                                    data-toggle="tab"
                                    style={{
                                      borderRadius: "20px",
                                      minWidth: "150px",
                                    }}
                                  >
                                    Pay with Credit Card
                                  </div>
                                  <div
                                    className="btn font-weight-bolder mt-3 w-100 py-2 tab text-decoration-none"
                                    type="button"
                                    data-toggle="tab"
                                    style={{
                                      borderRadius: "20px",
                                      minWidth: "150px",
                                    }}
                                  >
                                    Wallets
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6 col-12 pt-lg-0 pt-4 px-5 payment">
                              <div
                                className="font-weight-bolder pb-3"
                                style={{ fontSize: "24px" }}
                              >
                                Payment Summary
                              </div>
                              <div
                                className="container bg-white"
                                style={{
                                  borderRadius: "20px",
                                  borderColor: "black",
                                  borderStyle: "solid",
                                  borderWidth: "2px 2px",
                                }}
                              >
                                <div className="">
                                  <div
                                    className="pt-4"
                                    style={{ fontFamily: "sans-serif" }}
                                  >
                                    Service Total
                                    <span
                                      className="float-right font-weight-bolder"
                                      style={{ fontFamily: "sans-serif" }}
                                    >
                                      Rs {summation()}
                                    </span>
                                  </div>
                                  <div
                                    className="pt-4"
                                    style={{ fontFamily: "sans-serif" }}
                                  >
                                    Extra Charges
                                    <span
                                      className="float-right font-weight-bolder"
                                      style={{ fontFamily: "sans-serif" }}
                                    >
                                      Rs 100
                                    </span>
                                  </div>
                                  <div
                                    className="pt-5 font-weight-bolder"
                                    style={{ fontFamily: "sans-serif" }}
                                  >
                                    Total Service Amount
                                    <span
                                      className="float-right"
                                      style={{ fontFamily: "sans-serif" }}
                                    >
                                      Rs 3100
                                    </span>
                                  </div>
                                  <div
                                    className="py-4 font-weight-bolder"
                                    style={{ fontFamily: "sans-serif" }}
                                  >
                                    Amount Payable
                                    <span
                                      className="float-right"
                                      style={{ fontFamily: "sans-serif" }}
                                    >
                                      Rs 3100
                                    </span>
                                  </div>
                                  <div className=""></div>
                                  <div className=""></div>
                                </div>
                              </div>
                              <div className="justify-content-center d-flex pl-3 pt-1">
                                <div
                                  className="font-weight-bolder"
                                  style={{ fontSize: "11px" }}
                                >
                                  By Procedding, You accept our{" "}
                                  <span className="text-primary">
                                    Terms & Conditions, Privacy Policy &
                                    Cancellation Policy.
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <NavLink
                            to="/userProfile"
                            className="rounded-pill btn btn-secondary border-0 w-100 align-bottom font-weight-bold"
                            style={{
                              background: "#4A56E2",
                              marginTop: "100px",
                            }}
                            data-dismiss="modal"
                            onClick={completeBooking}
                          >
                            Complete Booking
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Box>
          </TabContext>
        </div>
      </div>

      <div
        className="px-4 px-lg-5 py-5 position-relative"
        style={{ background: "rgb(222 224 236 / 92%)" }}
      >
        <div className="justify-content-center d-flex pb-4">
          <div className="text-center">
            <div
              className="font-weight-bolder"
              style={{ fontSize: "22px", fontFamily: "sans-serif" }}
            >
              Appliance Repair Service
            </div>
            <div style={{ color: "#524E4E", fontFamily: "Nunito" }}>
              <b>Servicing, installation, uninstallation & repair</b>
            </div>
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

      <div className="px-4 px-lg-5 py-5">
        <div className="justify-content-center d-flex pb-4">
          <div className="text-center">
            <div
              className="font-weight-bolder"
              style={{ fontSize: "22px", fontFamily: "sans-serif" }}
            >
              Repair & Maintenence
            </div>
            <div style={{ color: "#524E4E", fontFamily: "Nunito" }}>
              <b>Minor repair, fitting, servicing & many more</b>
            </div>
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
        className="px-4 px-lg-5 py-5"
        style={{ background: "rgb(222 224 236 / 92%)" }}
      >
        <div className="justify-content-center d-flex pb-4">
          <div className="text-center">
            <div
              className="font-weight-bolder"
              style={{ fontSize: "22px", fontFamily: "sans-serif" }}
            >
              Painter & Interior Designing
            </div>
            <div style={{ color: "#524E4E", fontFamily: "Nunito" }}>
              <b>House painter, house decor, false ceiling & designing</b>
            </div>
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
