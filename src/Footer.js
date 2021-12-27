import React from "react";
import FB from "./Images/fb.png";
import YT from "./Images/Yt.png";
import insta from "./Images/insta.png";
import linkedin from "./Images/linkedin.png";
import print from "./Images/print.png";
import play from "./Images/playstore.png";

function Footer() {
  return (
    <section id="footer">
      <footer
        className="pt-2 text-white footer"
        style={{ background: "black", fontFamily:"Poppins" }}
      >
        <div className="row mx-5 py-4">
          <div className="col-lg-3 col-6 pb-3">
            <b>CITIES WE SERVE</b>
            <ul className="list-unstyled pt-2">
              <li>Chandigarh</li>
              <li>Mohali</li>
              <li>Zirakpur</li>
              <li>Panchkula</li>
              <li>Patna</li>
              <li>Purnia</li>
              <li>Noida</li>
            </ul>
          </div>
          <div className="col-lg-3 col-6 pb-3">
            <b>COMPANY</b>
            <ul className="list-unstyled pt-2">
              <li>About us</li>
              <li>Terms & Condition</li>
              <li>Privacy Policy</li>
              <li>Blog</li>
              <li>Career</li>
              <li>Contact</li>
              <li>Reviews</li>
              <li>Near Me Services</li>
            </ul>
          </div>
          <div className="col-lg-6 col-12 pb-4">
            <b>SERVICES</b>
            <div className="row pt-2">
              <div className="col list-unstyled">
                <li className="">Ac Service</li>
                <li className="">Washing Machine</li>
                <li className="">RO</li>
                <li className="">Electrician</li>
                <li className="">TV Repair</li>
                <li className="">Plumber</li>
                <li className="">Carpenter</li>
                <li className="">Painter</li>
                <li className="">Geyser</li>
              </div>
              <div className="col list-unstyled">
                <li className="">Interior Designer</li>
                <li className="">Wallpaper</li>
                <li className="">Modular Kitchen</li>
                <li className="">Handyman</li>
                <li className="">Inverter</li>
                <li className="">Water Tank Cleaning</li>
                <li className="">CCTV Camera</li>
                <li className="">DTH</li>
                <li className="">Fridge</li>
                <li className="">POP/PVC</li>
              </div>
            </div>
          </div>
        </div>
        <hr className="" style={{ height: "2px", margin: "0" }}></hr>
        <div className="mx-5 py-3 row">
          <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center">
            <img
              src="https://www.epicvila.com/image/logo1.png"
              className="img-fluid pr-5"
              alt="image"
              width={135}
            ></img>
            <span style={{ fontSize: "14px" }}>
              COPYRIGHT 2017-2021 EPIC VILA PRO SERVICES PRIVATE LIMITED
            </span>
          </div>
          <div className="col-lg-4 col-12 align-items-center d-flex justify-content-center pt-4 pt-lg-0 socials">
            <img
              src={FB}
              className="img-fluid px-3 px-sm-4 px-md-4 px-lg-4"
            ></img>
            <img
              src={insta}
              className="img-fluid px-3 px-sm-4 px-md-4 px-lg-4"
            ></img>
            <img
              src={print}
              className="img-fluid px-3 px-sm-4 px-md-4 px-lg-4"
            ></img>
            <img
              src={linkedin}
              className="img-fluid px-3 px-sm-4 px-md-4 px-lg-4"
            ></img>
            <img
              src={YT}
              className="img-fluid px-3 px-sm-4 px-md-4 px-lg-4"
            ></img>
          </div>
          <div className="col-lg-4 col-12 d-flex justify-content-center align-items-center pt-4 mt-2 pt-lg-0">
            <img
              src={play}
              className="img-fluid ml-lg-auto"
              style={{ width: "25px", height: "30px" }}
            ></img>
            &nbsp;&nbsp;App Available on Playstore
          </div>
        </div>
      </footer>
    </section>
  );
}

export default Footer;

// <div className="col-lg-4 col-md-6 col-12">
// <iframe
//   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3432.650246939581!2d76.74300621472712!3d30.6438130969645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb0ef52bb239%3A0xeb63e5e8a6be72fc!2sEpic%20Vila!5e0!3m2!1sen!2sin!4v1629208244622!5m2!1sen!2sin"
//   style={{ border: "0", width: "100%", height: "100%" }}
//   allowfullscreen=""
//   loading="lazy"
// ></iframe>
// </div>
