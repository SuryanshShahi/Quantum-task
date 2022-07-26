import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { dropdown } from "./Data/Content";

function Navbar() {
  const [navbar, setNavbar] = useState(false);
  const [B, setHeader] = useState(false);
  const [back, setBack] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 150) {
      setNavbar(true);
      setHeader(true);
      setBack(true);
    } else {
      setNavbar(false);
      setHeader(false);
      setBack(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <section>
      <div className="position-absolute" id="tagline">
        abc
      </div>
      <header className="fixed-top" id="header">
        <nav
          style={{ boxShadow: "rgb(0 0 0 / 12%) 0 1px 3px" }}
          className={
            navbar
              ? "navbar active navbar-expand-lg bg-white text-dark"
              : "navbar navbar-expand-lg bg-transparent"
          }
        >
          <div className="container">
            <NavLink
              className="navbar-brand "
              style={{ fontWeight: "500" }}
              to="/"
            >
              <div className="text-info">
                DIGITAL<span className="text-danger">GUIDER</span>
              </div>
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              style={{ zIndex: "1", background: "white" }}
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="fa fa-bars border-0 " style={{outline:"none"}}></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className={
                  B
                    ? "B active navbar-nav pl-lg-5 mb-2 mb-lg-0"
                    : "B navbar-nav pl-lg-5 mb-2 mb-lg-0"
                }
              >
                <li className="active nav-item pl-3">
                  <NavLink to="/" exact className="nav-link">
                    Services
                  </NavLink>
                  <div className="dropdown-menu menu rounded-0 border-0 py-lg-4 py-4 w-100">
                    <div
                      className="row bg-white py-4"
                      style={{ borderTop: "3px solid orange" }}
                    >
                      <div className="col-3 px-4 pt-2">
                        <div className="text-dark">
                          <b className="pl-3">Digital Marketing</b>

                          {dropdown.map((data) => {
                            console.log(data);
                            return (
                              <div className="py-1 dropdownHover pl-3">
                                <div className="fa fa-angle-right pr-2"></div>
                                {data}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="col-3 px-4 pt-2">
                        <div className="text-dark">
                          <b className="pl-3">Web & Apps Development</b>

                          {dropdown.map((data) => {
                            console.log(data);
                            return (
                              <div className="py-1 dropdownHover pl-3">
                                <div className="fa fa-angle-right pr-2"></div>
                                {data}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="col-3 px-4 pt-2">
                        <div className="text-dark">
                          <b className="pl-3">Paid Marketing</b>

                          {dropdown.map((data) => {
                            console.log(data);
                            return (
                              <div className="py-1 dropdownHover pl-3">
                                <div className="fa fa-angle-right pr-2"></div>
                                {data}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item pl-3">
                  <NavLink to="/market" className="nav-link">
                    Market
                  </NavLink>
                  <div className="dropdown-menu menu rounded-0 border-0 py-lg-4 py-4 w-100">
                    <div
                      className="row bg-white py-4"
                      style={{ borderTop: "3px solid orange" }}
                    >
                      <div className="col-3 px-4 pt-2">
                        <div className="text-dark">
                          <b className="pl-3">Digital Marketing</b>

                          {dropdown.map((data) => {
                            console.log(data);
                            return (
                              <div className="py-1 dropdownHover pl-3">
                                <div className="fa fa-angle-right pr-2"></div>
                                {data}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="col-3 px-4 pt-2">
                        <div className="text-dark">
                          <b className="pl-3">Web & Apps Development</b>

                          {dropdown.map((data) => {
                            console.log(data);
                            return (
                              <div className="py-1 dropdownHover pl-3">
                                <div className="fa fa-angle-right pr-2"></div>
                                {data}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="col-3 px-4 pt-2">
                        <div className="text-dark">
                          <b className="pl-3">Paid Marketing</b>

                          {dropdown.map((data) => {
                            console.log(data);
                            return (
                              <div className="py-1 dropdownHover pl-3">
                                <div className="fa fa-angle-right pr-2"></div>
                                {data}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="col-3 px-4 pt-2">
                        <div className="text-dark">
                          <b className="pl-3">Others</b>

                          {dropdown.map((data) => {
                            console.log(data);
                            return (
                              <div className="py-1 dropdownHover pl-3">
                                <div className="fa fa-angle-right pr-2"></div>
                                {data}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item pl-3">
                  <NavLink to="/pricing" className="nav-link">
                    Pricing
                  </NavLink>
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
                  <NavLink to="/contact" className="nav-link">
                    Contact Us
                  </NavLink>
                </li>
                <li className="nav-item pl-lg-3 mx-lg-0 mx-5 mb-lg-0 mb-3">
                  <div className="nav-link btn btn-danger">
                    Free Consultation
                  </div>
                </li>
              </ul>
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
                  <span className="centertag">Home</span> / SEO Packages
                </span>
              </div>
            </div>
          </div>
        </div>
        <div id="hero"></div>
      </div>

      <div className="container-fluid justify-content-start align-items-center position-fixed d-flex" style={{bottom:"8%", left:"5%", zIndex:"1"}}>
        <a
          href="tel:0123456789"
          style={{
            height: "50px",
            width: "50px",
            borderRadius: "50%",
            background: "rgb(85, 110, 237)",
          }}
          className="fa fa-phone fa-lg position-absolute text-decoration-none shadow-lg justify-content-center text-white align-items-center d-flex"
        ></a>
        <span
          className="position-relative text-white px-3 py-1 shadow-lg"
          style={{
            background: "rgb(85, 110, 237)",
            borderRadius: "5px",
            marginLeft: "60px",
          }}
        >
          Call Us
        </span>
      </div>

      <div className="backtotop container-fluid justify-content-end d-flex">
        <a
          href="#tagline"
          className={
            back
              ? "back active fa fa-angle-up bg-dark position-absolute text-decoration-none hello text-white text-center"
              : "back fa fa-angle-up bg-dark position-absolute text-decoration-none hello text-white text-center d-none"
          }
        >
          {" "}
        </a>
      </div>
    </section>
  );
}

export default Navbar;
// <video autoPlay loop muted className="w-100 back">
// <source src={car} />
// </video>
