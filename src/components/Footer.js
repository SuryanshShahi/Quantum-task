import React from "react";
import { FooterBanner } from "./Data/Content";
// import Googlepartner from "./Images/PartnerBadgeClickable.svg";
// import footerImg from "./Images/footerimg.png";
import India from "./Images/indian.png";
import Usa from "./Images/usa.png";
import { Carousel } from "react-bootstrap";

function Footer() {
  return (
    <section id="footer">
      <div className="container-fluid pt-5">
        <div className="row justify-content-center d-flex">
          <div className="col-lg-5 col-md-5 col-sm-6 col-12 pb-lg-0 pb-5">
            <div className="">
              <b className="text-white" style={{ fontSize: "17px" }}>
                PARTNER LOCATIONS
              </b>
              <div
                className="px-2 mt-3 py-1 mb-2 rounded shadow-sm bg-dark text-white"
                style={{ border: "1px solid grey" }}
              >
                USA: 173 E Columbine LN, Westfield, Indiana 46074-9741.
              </div>
              <div
                className="px-2 py-1 mb-2 rounded shadow-sm bg-dark text-white"
                style={{ border: "1px solid grey" }}
              >
                USA: 1001 Avenida Pico Suite C -256 San Clemente, CA 92673.
              </div>
              <div
                className="px-2 py-1 mb-2 rounded shadow-sm bg-dark text-white"
                style={{ border: "1px solid grey" }}
              >
                USA: 127 Mountainside Dr Pompton Lakes, NJ 07442.
              </div>
            </div>

            <div className="py-3">
              <b className="text-white" style={{ fontSize: "17px" }}>
                DEVELOPMENT CENTER (HEAD OFFICE)
              </b>
              <div
                className="p-2 my-2 rounded shadow-sm bg-dark text-white"
                style={{ border: "1px solid grey" }}
              >
                <div>India: H-11, 1st Floor, Sector 63, Noida - 201301</div>
                <div className="fa fa-envelope py-2 text-primary fa-md">
                  <span
                    className="text-white pl-2"
                    style={{ fontSize: "16px" }}
                  >
                    sales@quantumitinnovation.com
                  </span>
                </div>
                <br />
                <div
                  className="fa fa-mobile text-primary"
                  style={{ fontSize: "22px" }}
                >
                  <a
                    href="tel: + 91 971 799 8517"
                    className="text-white text-decoration-none pl-2"
                    style={{ fontSize: "15px" }}
                  >
                    + 91 971 799 8517
                  </a>
                </div>
              </div>
              <div className="p-2">
                <div className="fa fa-envelope pb-2 text-primary fa-md">
                  <span
                    className="pl-2 text-white"
                    style={{ fontSize: "16px" }}
                  >
                    sales@quantumitinnovation.com
                  </span>
                </div>
                <br></br>
                <div className="fa fa-envelope text-primary fa-md">
                  <span
                    className="pl-2 text-white"
                    style={{ fontSize: "16px" }}
                  >
                    hr@quantumitinnovation.com
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-6 col-12 pt-lg-0 pb-5 text-white">
            <div className="font-weight-bold" style={{ fontSize: "17px" }}>
              TOP SERVICES
              <ul
                className="pt-3 list-unstyled"
                style={{ fontWeight: "lighter", fontSize: "15px" }}
              >
                <li className="pb-2">Artificial Intelligence</li>
                <li className="pb-2">Internet Of Things</li>
                <li className="pb-2">Cross-Platform</li>
                <li className="pb-2">Swift App Development</li>
                <li className="pb-2">Ruby On Rails</li>
                <li className="pb-2">IOS App Development</li>
                <li className="pb-2">PHP Development</li>
                <li className="pb-2">.Net Development</li>
                <li className="pb-2">Seo In NJ</li>
                <li className="pb-2">Professional Seo Services</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-2 col-sm-6 col-12 pt-lg-0 pb-5 text-white">
            <div className="font-weight-bold" style={{ fontSize: "17px" }}>
              QUICK LINKS
              <ul
                className="pt-3 list-unstyled"
                style={{ fontWeight: "lighter", fontSize: "15px" }}
              >
                <li className="pb-2">Privacy Policy</li>
                <li className="pb-2">Refund & Cancellation</li>
                <li className="pb-2">Terms and Condition</li>
                <li className="pb-2">Partnership</li>
                <li className="pb-2">Disclaimer</li>
                <li className="pb-2">Request Quote</li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-6 col-12 text-white">
            <div className="font-weight-bold" style={{ fontSize: "17px" }}>
              CONTACT US
            </div>
            <ul className="list-unstyled pt-3">
              <li className="pb-3">
                <img
                  alt="data"
                  src={India}
                  className="img-fluid"
                  style={{ width: "25px", height: "17px" }}
                />
                <a
                  href="tel:+91 971 7998 517"
                  className="text-decoration-none pl-2"
                >
                  +91 971 7998 517
                </a>
              </li>
              <li>
                <img
                  alt="data"
                  src={Usa}
                  className="img-fluid"
                  style={{ width: "25px", height: "17px" }}
                />
                <a
                  href="tel: + 1 877 877 3644"
                  className="text-decoration-none pl-2"
                >
                  + 1 877 877 3644
                </a>
              </li>
            </ul>
            <div className="font-weight-bold" style={{ fontSize: "17px" }}>
              ASSOCIATIONS
              <div className="my-5 slider">
                <Carousel style={{ width: "200px" }}>
                  {FooterBanner.map((e) => {
                    return (
                      <Carousel.Item interval="3000" key={e.id}>
                        <img src={e} className="img-fluid" alt="data"></img>
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        <hr className="m-0" style={{ color: "white" }} />

        <div className="d-lg-flex d-md-flex d-sm-flex container py-2 align-items-center text-center socialicons mt-lg-0 mt-md-0 mt-sm-0 py-3">
          <div className="text-white">
            © 2020 Quantum IT Innovation. All Rights Reserved.
          </div>
          <div className="ml-auto d-flex justify-content-center mt-lg-0 mt-md-0 mt-sm-0 mt-4">
            <span
              className="fa fa-facebook-square fa-lg bg-dark align-items-center d-flex justify-content-center"
              data-toggle="tooltip"
              data-placement="top"
              title="Facebook"
              style={{
                color: "grey",
                border: "1px solid white",
                borderRadius: "50%",
                height: "50px",
                width: "50px",
              }}
            ></span>
            <span
              className="fa fa-instagram mx-3 fa-lg bg-dark align-items-center d-flex justify-content-center"
              data-toggle="tooltip"
              data-placement="top"
              title="Instagram"
              style={{
                color: "grey",
                border: "1px solid white",
                borderRadius: "50%",
                height: "50px",
                width: "50px",
              }}
            ></span>
            <span
              className="fa fa-twitter fa-lg bg-dark align-items-center d-flex justify-content-center"
              data-toggle="tooltip"
              data-placement="top"
              title="Twitter"
              style={{
                color: "grey",
                border: "1px solid white",
                borderRadius: "50%",
                height: "50px",
                width: "50px",
              }}
            ></span>
            <span
              className="fa fa-youtube-play mx-3 fa-lg bg-dark align-items-center d-flex justify-content-center"
              data-toggle="tooltip"
              data-placement="top"
              title="Youtube"
              style={{
                color: "grey",
                border: "1px solid white",
                borderRadius: "50%",
                height: "50px",
                width: "50px",
              }}
            ></span>
            <span
              className="fa fa-linkedin fa-lg bg-dark align-items-center d-flex justify-content-center"
              data-toggle="tooltip"
              data-placement="top"
              title="LinkedIn"
              style={{
                color: "grey",
                border: "1px solid white",
                borderRadius: "50%",
                height: "50px",
                width: "50px",
              }}
            ></span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
