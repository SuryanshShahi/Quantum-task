import React from "react";
import { SEOAnalysis, OnPage, OffPage, testimonials } from "./Data/Content";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import StarsRating from "stars-rating";
import Google from "./Images/powered_by_google.png"

function Home() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
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
  return (
    <div style={{ marginTop: "100px" }}>
      <div className="container py-5">
        <div className="text-center pb-4">
          <div style={{ fontSize: "45px" }}>Our SEO Plans</div>
          <div style={{ fontSize: "22px" }}>
            Choose the plan that right for you and let’s get started
          </div>
        </div>

        <div className="row mt-5">
          <div
            className="col-lg-3 col-md-6 col-12 justify-content-center d-flex py-4"
            style={{ boxShadow: "0 0 3px 3px rgb(0 0 0 / 8%)" }}
          >
            <div className="text-center">
              <div
                className="text-success"
                style={{ fontSize: "33px", fontWeight: "lighter" }}
              >
                BASIC
              </div>
              <div className="pt-4 pb-3 position-relative">
                <span
                  className="position-absolute mt-2"
                  style={{ fontSize: "22px" }}
                >
                  $
                </span>
                <span
                  className="text-success font-weight-bold"
                  style={{ fontSize: "48px" }}
                >
                  &nbsp;500
                </span>
                /MONTH
              </div>
              <div>
                <div className="pb-2">No. of Keywords – 30</div>
                <div className="pb-2">Backlinks (per month) – 40</div>
                <div className="pb-2">GMB – ✘</div>
                <div className="pb-2">Geotagging – ✘</div>
                <div
                  className="btn btn-dark bg-transparent rounded-pill px-4 py-2 my-4"
                  style={{
                    border: "2px solid black",
                    color: "black",
                    fontWeight: "500",
                  }}
                >
                  START TODAY
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 col-12 justify-content-center d-flex py-4"
            style={{ boxShadow: "0 0 3px 3px rgb(0 0 0 / 8%)" }}
          >
            <div className="text-center">
              <div
                className="text-dark"
                style={{ fontSize: "33px", fontWeight: "lighter" }}
              >
                SILVER
              </div>
              <div className="pt-4 pb-3 position-relative">
                <span
                  className="position-absolute mt-2"
                  style={{ fontSize: "22px" }}
                >
                  $
                </span>
                <span
                  className="text-dark font-weight-bold"
                  style={{ fontSize: "48px" }}
                >
                  &nbsp;700
                </span>
                /MONTH
              </div>
              <div>
                <div className="pb-2">No. of Keywords – 30</div>
                <div className="pb-2">Backlinks (per month) – 40</div>
                <div className="pb-2">GMB – ✓</div>
                <div className="pb-2">Geotagging – ✘</div>
                <div
                  className="btn btn-dark bg-transparent rounded-pill px-4 py-2 my-4"
                  style={{
                    border: "2px solid black",
                    color: "black",
                    fontWeight: "500",
                  }}
                >
                  START TODAY
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 col-12 justify-content-center d-flex py-4"
            style={{ boxShadow: "0 0 3px 3px rgb(0 0 0 / 8%)" }}
          >
            <div className="text-center">
              <div
                className="text-warning"
                style={{ fontSize: "33px", fontWeight: "lighter" }}
              >
                GOLD
              </div>
              <div className="pt-4 pb-3 position-relative">
                <span
                  className="position-absolute mt-2"
                  style={{ fontSize: "22px" }}
                >
                  $
                </span>
                <span
                  className="text-warning font-weight-bold"
                  style={{ fontSize: "48px" }}
                >
                  &nbsp;1000
                </span>
                /MONTH
              </div>
              <div>
                <div className="pb-2">No. of Keywords – 30</div>
                <div className="pb-2">Backlinks (per month) – 40</div>
                <div className="pb-2">GMB – ✓</div>
                <div className="pb-2">Geotagging – ✓</div>
                <div
                  className="btn btn-dark bg-transparent rounded-pill px-4 py-2 my-4"
                  style={{
                    border: "2px solid black",
                    color: "black",
                    fontWeight: "500",
                  }}
                >
                  START TODAY
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6 col-12 justify-content-center d-flex py-4"
            style={{ boxShadow: "0 0 3px 3px rgb(0 0 0 / 8%)" }}
          >
            <div className="text-center">
              <div
                className="text-primary"
                style={{ fontSize: "33px", fontWeight: "lighter" }}
              >
                PREMIUM
              </div>
              <div className="pt-4 pb-3 position-relative">
                <span
                  className="position-absolute mt-2"
                  style={{ fontSize: "22px" }}
                >
                  $
                </span>
                <span
                  className="text-primary font-weight-bold"
                  style={{ fontSize: "48px" }}
                >
                  &nbsp;1800
                </span>
                /MONTH
              </div>
              <div>
                <div className="pb-2">No. of Keywords – 30</div>
                <div className="pb-2">Backlinks (per month) – 40</div>
                <div className="pb-2">GMB – ✓</div>
                <div className="pb-2">Geotagging – ✓</div>
                <div
                  className="btn btn-dark bg-transparent rounded-pill px-4 py-2 my-4"
                  style={{
                    border: "2px solid black",
                    color: "black",
                    fontWeight: "500",
                  }}
                >
                  START TODAY
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-3 col-md-6 col-12">
            <hr />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <hr />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <hr />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <hr />
          </div>
        </div>

        <div className="row mt-lg-5 mt-4">
          <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-4 px-4">
            <div
              className="mb-4 text-center"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              FIRST HAND SEO ANALYSIS
            </div>
            {SEOAnalysis.map((e) => {
              return (
                <div
                  className="d-flex pb-2"
                  style={{ fontWeight: "lighter" }}
                  key={e.id}
                >
                  {e.data}
                  <div className="ml-auto">{e.sign}</div>
                </div>
              );
            })}
          </div>

          <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-4 px-4">
            <div
              className="mb-4 text-center"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              FIRST HAND SEO ANALYSIS
            </div>
            {SEOAnalysis.map((e) => {
              return (
                <div
                  className="d-flex pb-2"
                  style={{ fontWeight: "lighter" }}
                  key={e.id}
                >
                  {e.data}
                  <div className="ml-auto">{e.sign}</div>
                </div>
              );
            })}
          </div>

          <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-4 px-4">
            <div
              className="mb-4 text-center"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              FIRST HAND SEO ANALYSIS
            </div>
            {SEOAnalysis.map((e) => {
              return (
                <div
                  className="d-flex pb-2"
                  style={{ fontWeight: "lighter" }}
                  key={e.id}
                >
                  {e.data}
                  <div className="ml-auto">{e.sign}</div>
                </div>
              );
            })}
          </div>

          <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-4 px-4">
            <div
              className="mb-4 text-center"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              FIRST HAND SEO ANALYSIS
            </div>
            {SEOAnalysis.map((e) => {
              return (
                <div
                  className="d-flex pb-2"
                  style={{ fontWeight: "lighter" }}
                  key={e.id}
                >
                  {e.data}
                  <div className="ml-auto">{e.sign}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="row mt-3">
          <div className="col-lg-3 col-md-6 col-12">
            <hr />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <hr />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <hr />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <hr />
          </div>
        </div>

        <div className="row mt-lg-5 mt-4">
          <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-4 px-4">
            <div
              className="mb-4 text-center"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              ON-PAGE OPTIMIZATION ACTIVITIES
            </div>
            {OnPage.map((e) => {
              return (
                <div
                  className="d-flex pb-2"
                  style={{ fontWeight: "lighter" }}
                  key={e.id}
                >
                  {e.data}
                  <div className="ml-auto">{e.sign}</div>
                </div>
              );
            })}
            <div className="d-flex pb-2" style={{ fontWeight: "lighter" }}>
              On Site Blog Posting – Applicable from 1st month
              <div className="ml-auto">1</div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-4 px-4">
            <div
              className="mb-4 text-center"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              ON-PAGE OPTIMIZATION ACTIVITIES
            </div>
            {OnPage.map((e) => {
              return (
                <div
                  className="d-flex pb-2"
                  style={{ fontWeight: "lighter" }}
                  key={e.id}
                >
                  {e.data}
                  <div className="ml-auto">{e.sign}</div>
                </div>
              );
            })}
            <div className="d-flex pb-2" style={{ fontWeight: "lighter" }}>
              On Site Blog Posting – Applicable from 1st month
              <div className="ml-auto">2</div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-4 px-4">
            <div
              className="mb-4 text-center"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              ON-PAGE OPTIMIZATION ACTIVITIES
            </div>
            {OnPage.map((e) => {
              return (
                <div
                  className="d-flex pb-2"
                  style={{ fontWeight: "lighter" }}
                  key={e.id}
                >
                  {e.data}
                  <div className="ml-auto">{e.sign}</div>
                </div>
              );
            })}
            <div className="d-flex pb-2" style={{ fontWeight: "lighter" }}>
              On Site Blog Posting – Applicable from 1st month
              <div className="ml-auto">4</div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-4 px-4">
            <div
              className="mb-4 text-center"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              ON-PAGE OPTIMIZATION ACTIVITIES
            </div>
            {OnPage.map((e) => {
              return (
                <div
                  className="d-flex pb-2"
                  style={{ fontWeight: "lighter" }}
                  key={e.id}
                >
                  {e.data}
                  <div className="ml-auto">{e.sign}</div>
                </div>
              );
            })}
            <div className="d-flex pb-2" style={{ fontWeight: "lighter" }}>
              On Site Blog Posting – Applicable from 1st month
              <div className="ml-auto">5</div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-6 col-12">
            <hr />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <hr />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <hr />
          </div>
          <div className="col-lg-3 col-md-6 col-12">
            <hr />
          </div>
        </div>

        <div className="row mt-lg-5 mt-4">
          <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-4 px-4">
            <div
              className="mb-4 text-center"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              ON-PAGE OPTIMIZATION ACTIVITIES
            </div>
            {OffPage.map((e) => {
              return (
                <div
                  className="d-flex pb-2"
                  style={{ fontWeight: "lighter" }}
                  key={e.id}
                >
                  {e.data}
                  <div className="ml-auto">{e.sign}</div>
                </div>
              );
            })}
          </div>

          <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-4 px-4">
            <div
              className="mb-4 text-center"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              ON-PAGE OPTIMIZATION ACTIVITIES
            </div>
            {OffPage.map((e) => {
              return (
                <div
                  className="d-flex pb-2"
                  style={{ fontWeight: "lighter" }}
                  key={e.id}
                >
                  {e.data}
                  <div className="ml-auto">{e.sign}</div>
                </div>
              );
            })}
          </div>

          <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-4 px-4">
            <div
              className="mb-4 text-center"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              ON-PAGE OPTIMIZATION ACTIVITIES
            </div>
            {OffPage.map((e) => {
              return (
                <div
                  className="d-flex pb-2"
                  style={{ fontWeight: "lighter" }}
                  key={e.id}
                >
                  {e.data}
                  <div className="ml-auto">{e.sign}</div>
                </div>
              );
            })}
          </div>

          <div className="col-lg-3 col-md-6 col-12 pt-lg-0 pt-4 px-4">
            <div
              className="mb-4 text-center"
              style={{ fontWeight: "lighter", fontSize: "20px" }}
            >
              ON-PAGE OPTIMIZATION ACTIVITIES
            </div>
            {OffPage.map((e) => {
              return (
                <div
                  className="d-flex pb-2"
                  style={{ fontWeight: "lighter" }}
                  key={e.id}
                >
                  {e.data}
                  <div className="ml-auto">{e.sign}</div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="my-5 py-5 px-2 row" style={{background:"#efefef"}}>
          <div className="col-lg-3 col-md-3 col-12 justify-content-center d-flex align-items-center">
            <div className="d-flex">
              <div
                className="bg-success justify-content-center align-items-center d-flex text-white mr-2"
                style={{
                  borderRadius: "50%",
                  height: "45px",
                  width: "45px",
                  fontSize: "20px",
                }}
              >
                D
              </div>
              <div className="">
                <div className="text-primary" style={{ fontWeight: "500" }}>
                  Digital Guider
                </div>
                <StarsRating
                  className=""
                  count={5}
                  size={24}
                  value={4.4}
                  edit={false}
                  color2={"orange"}
                />
                <div className="mt-2">
                  Based on 97 reviews<br></br>
                  <img src={Google} className="img-fluid" width="144" height="18"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-9 col-12 pt-lg-0 pt-md-0 pt-4">
            <MultiCarousel {...setting}>
              {testimonials.map((e) => {
                return (
                  <div
                    className="border-0 my-2 mx-2 rounded p-lg-3 p-2"
                    style={{
                      boxShadow: "#80808069 0px 0px 7px 0.5px",
                      maxWidth: "303px",
                      background:"#fafafa",
                      maxHeight: "222px",
                    }}
                  >
                    <div className="d-flex">
                      <span
                        className="bg-success align-items-center justify-content-center d-flex text-white mr-2"
                        style={{
                          borderRadius: "50%",
                          height: "45px",
                          width: "45px",
                          fontSize: "17px",
                        }}
                      >
                        {e.fLetter}
                      </span>
                      <div className="">
                        <div
                          className="text-primary"
                          style={{ fontWeight: "500" }}
                        >
                          {e.name}
                        </div>
                        <div style={{ color: "gray", fontSize: "12px" }}>
                          {e.duration}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <StarsRating
                        className=""
                        count={5}
                        size={24}
                        value={e.rating}
                        edit={false}
                        color2={"orange"}
                      />
                    </div>
                    <div
                      className="testomonials"
                      style={{
                        fontSize: "12px",
                        overflowY: "overlay",
                        height: "110px",
                      }}
                    >
                      {e.description}
                    </div>
                  </div>
                );
              })}
            </MultiCarousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
