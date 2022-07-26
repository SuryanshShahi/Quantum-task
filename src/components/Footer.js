import React from "react";
import { ServiceAreas } from "./Data/Content";
import Googlepartner from "./Images/PartnerBadgeClickable.svg";
import footerImg from "./Images/footerimg.png";

function Footer() {
  return (
    <section style={{background:"#f7f8f9"}}>
      <div className="container-fluid py-5">
        <div className="row justify-content-center d-flex">
          <div className="col-lg-4 col-md-4 col-sm-6 col-12 pb-lg-0 pb-5">
            <div className="text-center">
              <b style={{fontSize:"17px"}}>ADDRESS</b>
              <div className="mt-4">
                30 N. GOULD ST, SUITE 6573 SHERIDAN, WY 82801
                <br></br>
                Email: info@digitalguider.com
              </div>
            </div>

            <div className="justify-content-center d-flex">
              <div
                className="btn btn-dark bg-transparent rounded-pill px-4 py-2 my-4"
                style={{
                  border: "2px solid black",
                  color: "black",
                  fontWeight: "500",
                  fontSize: "12px",
                }}
              >
                GET DIRECTION
              </div>
            </div>
            <div className="justify-content-center d-flex">
              <img
                src={Googlepartner}
                style={{ width: "45%", height: "75%" }}
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 col-12 pt-lg-0 pb-5">
            <div className="text-center font-weight-bold" style={{fontSize:"17px"}}>
              JOIN OUR SOCIAL COMMUNITY
              <div className="pt-4">
                <span
                  className="fa fa-facebook-square fa-lg pr-2"
                  style={{ color: "grey" }}
                ></span>
                <span
                  className="fa fa-instagram fa-lg px-2"
                  style={{ color: "grey" }}
                ></span>
                <span
                  className="fa fa-twitter fa-lg px-2"
                  style={{ color: "grey" }}
                ></span>
                <span
                  className="fa fa-youtube-play fa-lg px-2"
                  style={{ color: "grey" }}
                ></span>
                <span
                  className="fa fa-linkedin fa-lg px-2"
                  style={{ color: "grey" }}
                ></span>
              </div>
              <img
                src={footerImg}
                style={{ width: "70%", height: "75%", marginTop:"100px" }}
                className="img-fluid"
              />
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6 col-12">
            <div className="text-center font-weight-bold" style={{fontSize:"17px"}}>SERVICE AREAS</div>
            <div className="row pl-lg-0 pl-md-0 pl-2 pt-4">
              <div className="col-6 gx-0">
                {ServiceAreas.slice(0, 8).map((e) => {
                  return (
                    <div className="serviceAreas">
                      <div className="fa fa-angle-right pr-1"></div>
                      {e}
                      <hr style={{height:"0.5px"}} className="text-dark"></hr>
                    </div>
                  );
                })}
              </div>

              <div className="col-6 gx-0">
                <div className="">
                  {ServiceAreas.slice(8).map((e) => {
                    return (
                      <div className="serviceAreas">
                        <div className="fa fa-angle-right pr-1"></div>
                        {e}
                        <hr style={{height:"0.5px"}} className="text-dark mr-4"></hr>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

export default Footer;
