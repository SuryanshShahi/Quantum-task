import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { dropdown } from "./Data/Content";
import logo from "./Images/logo.png";
import logoWhite from "./Images/logo-white.png";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [NavDropdown, setHeader] = useState(false);
  const [back, setBack] = useState(false);
  const [bars, setBars] = useState(false);
  const [isActive, setActive] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
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
          style={{padding:"0"}}
          className={
            navbar
              ? "navbar active navbar-expand-lg bg-white text-dark py-lg-2"
              : "navbar navbar-expand-lg bg-transparent py-lg-2"
          }
        >
          <div className="mx-lg-5 d-flex" style={{ width: "100%" }}>
            <div className="navbarinline mx-lg-5" style={{ width: "100%" }}>
              <div className="d-flex mx-3 align-items-center py-lg-0 py-1">
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
                style={{zIndex:"1"}}
                  className={
                    NavDropdown
                      ? "NavDropdown active ml-auto navbar-nav pl-lg-5 mb-2 mb-lg-0"
                      : "NavDropdown navbar-nav ml-auto pl-lg-5 mb-2 mb-lg-0"
                  }
                >
                  <li className="nav-item pl-4 pt-lg-0 pt-2">
                    <NavLink to="/" exact className="active nav-link">
                      HOME
                    </NavLink>
                  </li>
         
                  <li className="nav-item pl-4 position-relative">
                    <NavLink
                      to="/company"
                      className="nav-link d-flex align-items-center"
                    >
                      COMPANY<span className="fa fa-angle-down pl-1"></span>
                    </NavLink>
                    <div
                      className="dropdown-menu menu rounded-0 border-0 py-lg-4 py-4"
                      style={{ width: "fit-content" }}
                    >
                      <div className=" justify-content-center d-flex">
                        <div
                          className=""
                          style={{
                            borderBottom: "3px solid #086AD8",
                            background: "#fffffff2",
                            boxShadow: "0 2px 29px rgb(0 0 0 / 5%)",width:"max-content"
                          }}
                        >
                          <div className="dropdownHover py-2 px-4">
                     Why Quantum It Innovation?
                          </div>
                          <div className="dropdownHover py-2 px-4">
                     Partnership
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
             
                  <li className="nav-item pl-4">
                    <NavLink
                      to="/service"
                      className="nav-link d-flex align-items-center"
                    >
                      SERVICE<span className="fa fa-angle-down pl-1"></span>
                    </NavLink>

                    <div
                      className="dropdown-menu menu rounded-0 border-0 py-lg-4 py-4"
                      style={{ width: "100%" }}
                    >
                      <div className="justify-content-center d-flex">
                        <div className="mr-lg-0 mr-4">
                          <div
                            className="row gx-0 py-4"
                            style={{
                              background: "#fffffff2",
                              width: "fit-content",
                              boxShadow: "0 2px 29px rgb(0 0 0 / 5%)",
                              borderBottom: "3px solid #086AD8",
                              maxHeight: "80vh",
                              overflowY: "scroll",
                            }}
                          >
                            <div className="col-lg-3 col-md-6 col-12 pt-2">
                              <div className="text-dark">
                                <div className="pl-3 pb-3">
                                  <b>APP DEVELOPMENT</b>
                                </div>

                                {dropdown.map((e) => {
                                  return (
                                    <div
                                      className="py-1 dropdownHover px-3"
                                      key={e.id}
                                    >
                                      {e.app}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 pt-2">
                              <div className="text-dark">
                                <div className="pl-3 pb-3">
                                  <b>WEB DEVELOPMENT</b>
                                </div>

                                {dropdown.map((e) => {
                                  return (
                                    <div
                                      className="py-1 dropdownHover px-3"
                                      key={e.id}
                                    >
                                      {e.web}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 pt-2">
                              <div className="text-dark">
                                <div className="pl-3 pb-3">
                                  <b>DIGITAL MARKETING</b>
                                </div>

                                {dropdown.map((e) => {
                                  return (
                                    <div
                                      className="py-1 dropdownHover px-3"
                                      key={e.id}
                                    >
                                      {e.marketing}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-12 pt-2">
                              <div className="text-dark">
                                <div className="pl-3 pb-3">
                                  <b>EMERGING TECHNOLOGY</b>
                                </div>

                                {dropdown.map((e) => {
                                  return (
                                    <div
                                      className="py-1 dropdownHover px-3"
                                      key={e.id}
                                    >
                                      {e.emerging}
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                
                  <li className="nav-item pl-4">
                    <NavLink to="/protfolio" className="nav-link">
                      PORTFOLIO
                    </NavLink>
                  </li>
                  
                  <li className="nav-item pl-4">
                    <NavLink to="/blog" className="nav-link">
                      BLOGS
                    </NavLink>
                  </li>
                  
                  <li className="nav-item pl-4">
                    <a
                      href="#"
                      data-target="#mymodal"
                      data-toggle="modal"
                      className="nav-link"
                    >
                      CONTACT
                    </a>
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
            className="text-white justify-content-center align-items-center d-flex bannerHeading"
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
        <div id="banner"></div>
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
                      <div className="mx-auto py-5 w-auto px-lg-5">
                        <form>
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
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
                            <div className="col-lg-6 col-md-6 col-12">
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
