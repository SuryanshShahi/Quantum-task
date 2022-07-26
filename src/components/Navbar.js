import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { dropdown } from "./Data/Content";
import logo from "./Images/logo.png";
import logoWhite from "./Images/logo-white.png";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [B, setHeader] = useState(false);
  const [back, setBack] = useState(false);
  const [bars, setBars] = useState(false);
  const [isActive, setActive] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
      setHeader(true);
      setBack(true);
      setBars(true);
      setActive(true);
    } else {
      setNavbar(false);
      setHeader(false);
      setBack(false);
      setBars(false);
      setActive(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <section>
      <div className="position-absolute" style={{ zIndex: "-1" }} id="top">
        .
      </div>
      <header className="fixed-top" id="header">
        <nav
          style={{ boxShadow: "0 8px 20px 0 rgb(0 0 0 / 10%)" }}
          className={
            navbar
              ? "navbar active navbar-expand-lg bg-white text-dark"
              : "navbar navbar-expand-lg bg-transparent"
          }
        >
          <div className="mx-lg-5 d-flex" style={{ width: "100%" }}>
            <div className="navbarinline" style={{ width: "100%" }}>
              <div className="d-flex mx-3 align-items-center">
                {" "}
                <a
                  className="navbar-brand"
                  href="https://quantumitinnovation.com/"
                >
                  {!isActive ? (
                    <img
                      alt="data"
                      src={logoWhite}
                      className="img-fluid Qlogo py-1"
                      style={{ width: "140px", height: "60px" }}
                    />
                  ) : (
                    <img
                      alt="data"
                      src={logo}
                      className="img-fluid Qlogo py-1"
                      style={{ width: "140px", height: "60px" }}
                    />
                  )}
                </a>
                <div className="ml-auto">
                  <button
                    className="navbar-toggler"
                    type="button"
                    style={{ zIndex: "1" }}
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span
                      className={
                        bars
                          ? "fa fa-bars fa-lg border-0"
                          : "fa fa-bars text-white fa-lg border-0"
                      }
                      style={{ outline: "none" }}
                    ></span>
                  </button>
                </div>
              </div>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul
                  className={
                    B
                      ? "B active ml-auto navbar-nav pl-lg-5 mb-2 mb-lg-0"
                      : "B navbar-nav ml-auto pl-lg-5 mb-2 mb-lg-0"
                  }
                >
                  <li className="active nav-item pl-3">
                    <NavLink
                      to="/"
                      exact
                      className="nav-link d-flex align-items-center"
                    >
                      Services<span className="fa fa-angle-down pl-1"></span>
                    </NavLink>
                    <div className="dropdown-menu menu rounded-0 border-0 py-lg-4 py-4 w-100">
                      <div
                        className="row mr-lg-0 mr-1 bg-white py-4"
                        style={{
                          borderBottom: "3px solid #086AD8",
                          maxHeight: "80vh",
                          overflowY: "scroll",
                        }}
                      >
                        <div className="col-lg-3 col-md-6 col-12 px-4 pt-2">
                          <div className="text-dark">
                            <b className="pl-3">Digital Marketing</b>

                            {dropdown.map((e) => {
                              return (
                                <div
                                  className="py-1 dropdownHover pl-3"
                                  key={e.id}
                                >
                                  <div className="fa fa-angle-right pr-2"></div>
                                  {e.name}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 px-4 pt-2">
                          <div className="text-dark">
                            <b className="pl-3">Web & Apps Development</b>

                            {dropdown.map((e) => {
                              return (
                                <div
                                  className="py-1 dropdownHover pl-3"
                                  key={e.id}
                                >
                                  <div className="fa fa-angle-right pr-2"></div>
                                  {e.name}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 px-4 pt-2">
                          <div className="text-dark">
                            <b className="pl-3">Paid Marketing</b>

                            {dropdown.map((e) => {
                              return (
                                <div
                                  className="py-1 dropdownHover pl-3"
                                  key={e.id}
                                >
                                  <div className="fa fa-angle-right pr-2"></div>
                                  {e.name}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item pl-3">
                    <NavLink
                      to="/market"
                      className="nav-link d-flex align-items-center"
                    >
                      Market<span className="fa fa-angle-down pl-1"></span>
                    </NavLink>
                    <div className="dropdown-menu menu rounded-0 border-0 py-lg-4 py-4 w-100">
                      <div
                        className="row mr-lg-0 mr-1 bg-white py-4"
                        style={{
                          borderBottom: "3px solid #086AD8",
                          maxHeight: "80vh",
                          overflowY: "scroll",
                        }}
                      >
                        <div className="col-lg-3 col-md-6 col-12 px-4 pt-2">
                          <div className="text-dark">
                            <b className="pl-3">Digital Marketing</b>

                            {dropdown.map((e) => {
                              return (
                                <div
                                  className="py-1 dropdownHover pl-3"
                                  key={e.id}
                                >
                                  <div className="fa fa-angle-right pr-2"></div>
                                  {e.name}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 px-4 pt-2">
                          <div className="text-dark">
                            <b className="pl-3">Web & Apps Development</b>

                            {dropdown.map((e) => {
                              return (
                                <div
                                  className="py-1 dropdownHover pl-3"
                                  key={e.id}
                                >
                                  <div className="fa fa-angle-right pr-2"></div>
                                  {e.name}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 px-4 pt-2">
                          <div className="text-dark">
                            <b className="pl-3">Paid Marketing</b>

                            {dropdown.map((e) => {
                              return (
                                <div
                                  className="py-1 dropdownHover pl-3"
                                  key={e.id}
                                >
                                  <div className="fa fa-angle-right pr-2"></div>
                                  {e.name}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-12 px-4 pt-2">
                          <div className="text-dark">
                            <b className="pl-3">Others</b>

                            {dropdown.map((e) => {
                              return (
                                <div
                                  className="py-1 dropdownHover pl-3"
                                  key={e.id}
                                >
                                  <div className="fa fa-angle-right pr-2"></div>
                                  {e.name}
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item pl-3 position-relative">
                    <NavLink
                      to="/pricing"
                      className="nav-link d-flex align-items-center"
                    >
                      Pricing<span className="fa fa-angle-down pl-1"></span>
                    </NavLink>
                    <div
                      className="dropdown-menu menu rounded-0 border-0 py-lg-4 py-4"
                      style={{ width: "fit-content" }}
                    >
                      <div className=" justify-content-center d-flex">
                        <div
                          className="mr-lg-0 mr-1 bg-white"
                          style={{ borderBottom: "3px solid #086AD8" }}
                        >
                          <div className="dropdownHover py-2 px-3">
                            SEO Packages
                          </div>
                          <div className="dropdownHover py-2 px-3">
                            SMO Packages
                          </div>
                          <div className="dropdownHover py-2 px-3">
                            PPC Packages
                          </div>
                          <div className="dropdownHover py-2 px-3">
                            WEB Packages
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="nav-item pl-3">
                    <NavLink to="/protfolio" className="nav-link">
                      Portfolio
                    </NavLink>
                  </li>
                  <li className="nav-item pl-3">
                    <NavLink to="/about" className="nav-link">
                      About Us
                    </NavLink>
                  </li>
                  <li className="nav-item pl-3">
                    <NavLink to="/testimonial" className="nav-link">
                      Testimonial
                    </NavLink>
                  </li>
                  <li className="nav-item pl-3">
                    <NavLink to="/blog" className="nav-link">
                      Blog
                    </NavLink>
                  </li>
                  <li className="nav-item pl-3">
                    <a
                      href="#"
                      data-target="#mymodal"
                      data-toggle="modal"
                      className="nav-link"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item pl-lg-3 mx-lg-0 mx-5 mb-lg-0 mb-3">
                    <div className="btn btn-primary" style={{ width: "100%" }}>
                      Free Consultation
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="all">
        <div className="position-absolute" style={{ width: "100%" }}>
          <div
            className="text-white justify-content-center align-items-center d-flex"
            style={{
              width: "100%",
              height: "80vh",
            }}
          >
            <div className="text-center">
              <div
                style={{
                  fontSize: "46px",
                  width: "100%",
                }}
              >
                SEO Packages
              </div>
              <div>
                <span style={{ fontSize: "12px", fontWeight: "normal" }}>
                  <span className="centertag">
                    <NavLink to="/" className="text-decoration-none">
                      Home
                    </NavLink>
                  </span>{" "}
                  / SEO Packages
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="hero"></div>
      </div>

      <div
        className="container-fluid justify-content-start align-items-center position-fixed d-flex"
        style={{ bottom: "8%", left: "5%", zIndex: "1" }}
      >
        <a
          href="tel:0123456789"
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            background: "rgb(71 146 230)",
          }}
          className="fa fa-phone fa-lg position-absolute text-decoration-none shadow-lg justify-content-center text-white align-items-center d-flex"
        ></a>
        <span
          className="position-relative text-white px-3 py-1 shadow-lg"
          style={{
            background: "rgb(71 146 230)",
            borderRadius: "5px",
            marginLeft: "60px",
          }}
        >
          Call Us
        </span>
      </div>

      <div className="backtotop container-fluid justify-content-end d-flex">
        <a
          href="#top"
          className={
            back
              ? "back active fa fa-angle-up position-absolute text-decoration-none hello text-white text-center"
              : "back fa fa-angle-up position-absolute text-decoration-none hello text-white text-center d-none"
          }
        >
          {" "}
        </a>
      </div>

      <div className="modal fade " id="mymodal">
        <div className="modal-dialog modal-xl">
          <div className="modal-content modalcompare">
            <div className="container">
              <div className="mt-2 text-center">
                <h1 className=" pt-3" style={{ fontWeight: "700" }}>
                  Get
                  <span
                    className="font-weight-bolder pl-2"
                    style={{ color: "#086AD8" }}
                  >
                    In Touch
                  </span>
                </h1>
                <div>
                  Tell us what's on your mind and we'll get right back to you !
                </div>
              </div>
              <div className="card border-0 my-4 pt-3">
                <iframe
                  className="map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9877019028863!2d77.377948115009!3d28.63013068241875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceffd525cc01b%3A0x2855561fbab51402!2sQuantum%20IT%20Innovation!5e0!3m2!1sen!2sbg!4v1658829798658!5m2!1sen!2sbg"
                  loading="lazy"
                  title="map"
                  style={{ height: "400px" }}
                ></iframe>

                <div className="container justify-content-center d-flex">
                  <div className="row">
                    <div className="col-lg-4 col-12 pt-5">
                      <div className="d-flex">
                        <div className="fa fa-map-marker px-3 fa-2x contact text-center mr-3"></div>
                        <div className="">
                          <label className="font-weight-bolder">
                            LOCATION:
                          </label>
                          <p className="">
                            India: H-11, 1st Floor, Sector 63, Noida - 201301
                          </p>
                        </div>
                      </div>
                      <br></br>

                      <div className="d-flex">
                        <div className="fa fa-envelope px-3 fa-lg contact text-center mr-3"></div>
                        <div>
                          <label className="font-weight-bolder">
                            SAY HELLO:
                          </label>
                          <p className="">sales@quantumitinnovation.com</p>
                        </div>
                      </div>
                      <br></br>
                      <br></br>

                      <div className="d-flex">
                        <div className="fa fa-mobile-phone fa-2x contact text-center mr-3"></div>
                        <div>
                          <label className="font-weight-bolder">
                            CALL FOR ADVICE NOW!
                          </label>
                          <div>
                            {" "}
                            <a
                              href="tel:+91 971 799 8517"
                              className="text-decoration-none"
                            >
                              <b>+91 971 799 8517</b>
                            </a>
                          </div>
                          <div>
                            <a
                              href="tel:+1 877 877 3644"
                              className="text-decoration-none"
                            >
                              <b>+1 877 877 3644</b>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-8 col-12">
                      <div className="mx-auto py-5 w-auto px-5">
                        <form>
                          <div className="row">
                            <div className="col-lg-6 col-md-6">
                              <div className="mb-3">
                                <label className="form-label font-weight-bold">
                                  Full Name:
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="input"
                                  placeholder="Enter Full Name"
                                  required
                                />
                              </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                              <div className="mb-3">
                                <label className="form-label font-weight-bold">
                                  Phone:
                                </label>
                                <input
                                  type="tel"
                                  className="form-control"
                                  id="input1"
                                  placeholder="Enter Phone No."
                                  required
                                />
                              </div>
                            </div>
                          </div>
                          <div className="mb-3">
                            <label className="form-label font-weight-bold">
                              Email:
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="input2"
                              placeholder="Enter Email"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label className="form-label font-weight-bold">
                              Message:
                            </label>
                            <textarea
                              className="form-control"
                              id="textarea1"
                              rows="3"
                            ></textarea>
                          </div>
                          <button
                            type="submit"
                            className="btn btn-primary rounded-pill shadow-lg px-4 py-2 text-white"
                            to="/"
                          >
                            Send Message
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
