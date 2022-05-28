import React from "react";
import "./DeliveryAdd.css";
import DeliveryAddImg from "../../../Assets/images/Prime Vogue Website Front/undraw_Deliveries_2r4y-removebg-preview 1.svg";
import underLineCurve from "../../../Assets/images/Vector 12.svg";
export default function DeliveryAdd() {
  return (
    <div className="delivery__add">
      <div className="delivery__add__container">
        <div className="delivery__add__container__desc">
          <div className="delivery__add__container__desc__container">
            <h1>Everything Delivered in 6 Hours </h1>
            <img
              src={underLineCurve}
              alt="underline"
              className="underline__img"
            />

            <p>To enjoy instant delivery of EveryThing from Prime Vogue</p>
          </div>
        </div>

        <div className="delivery__add__container__img">
          <img src={DeliveryAddImg} alt="delivery add img" />
        </div>
      </div>
    </div>
  );
}
