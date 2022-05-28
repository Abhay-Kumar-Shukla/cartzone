import React from "react";
import "./PaymentAdd.css";
import paymentAddImg from "../../../Assets/images/WhatsApp Image 2022-01-07 at 1.02 1.png";
export default function () {
  return (
    <div className="paymentadd">
      <div className="paymentadd_container">
        <img src={paymentAddImg} alt="payment add" />
      </div>
    </div>
  );
}
