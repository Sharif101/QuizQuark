import React from "react";
import img from "../images/Screenshot_3-removebg-preview.png";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      <section is="banner-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="text">
                <h2>Online testing</h2>
                <h5>YOU DON’T NEED HIGH I.Q. TO BE SMART. YOU NEED QUIZ!</h5>
                <p>
                  QUIZ is an absorbing word-game that challenges players to
                  solve or decode quotations from speeches and writings of the
                  great and famous.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
