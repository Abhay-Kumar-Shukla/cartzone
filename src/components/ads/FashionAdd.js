import React from "react";
import "./FashionAdd.css";

import women1 from "../assets/ads/image 3.svg";
import women2 from "../assets/ads/image 4.svg";
import women3 from "../assets/ads/image 5.png";

export default function FashionAdd() {
  return (
    <div className="fasionadd" style={{ margin: "20px 0" }}>
      <div className="fasionadd__container">
        <div className="fasionadd__col__left">
          <div className="fasionadd__col__left__row__one">
            <div className="fasionadd__col__left__row__one__img">
              <img src={women1} alt="women1" />
            </div>
            <div className="fasionadd__col__left__row__one__desc">
              <div className="fasionadd__col__left__row__one__desc__container">
                <h1>
                  Choose your <br /> Look
                </h1>
                <p>See our Clothing collections</p>
              </div>
            </div>
          </div>
          <div className="fasionadd__col__left__row__two">
            <div className="fasionadd__col__left__row__two__desc">
              <div className="fasionadd__col__left__row__two__desc__container">
                <h1>
                  Brand new <br /> Style
                </h1>
                <p>Popular Clothing brands</p>
              </div>
            </div>
            <div className="fasionadd__col__left__row__two__img">
              <img src={women2} alt="women2" />
            </div>
          </div>
        </div>
        <div className="fasionadd__col__right">
          <div className="fasionadd__col__right__desc">
            <div className="fasionadd__col__right__desc__container">
              <h1>
                UP TO <br /> 40 % <br />
                OFF
              </h1>
              <p>Special offers and great deal</p>
            </div>
          </div>
          <div className="fasionadd__col__right__img">
            <img src={women3} alt="women3" />
          </div>
        </div>
      </div>
    </div>
  );
}
