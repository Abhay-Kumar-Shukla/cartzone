// static data for delivery locations avilable
import React from "react";
import "./DeliveryList.css";
const delivery_list = [
  "Alipore",

  "Carmac Street",
  "JL Nehru Road",
  "Kalighat",
  "Kona Expressway",
  "New town",
  "Park Street",
  "Rajarhat",
  "Salt Lake City",
  "Sarat Bose Road",
  "Science City",
  "Shyambazar",
  "Bagbazar",
  "Kumartuli",
  "Shobhabazar",
  "Posta",
  "Jorasanko",
  "Rajabazar",
  "Phoolbagan",
  "Maniktala",

  "Kankurgachi",
  "Ultadanga",
  "Chitpur",
  " Belgachia",
  "Tala",
  "Cossipore",
  "Sinthee",
];

export default function DeliveryList() {
  return (
    <div className="deliverylist">
      <div className="deliverylist__container">
        <div className="deliverylist__header">
          <h2>Areas We Deliver In 6 Hours</h2>
        </div>
        <div className="deliverylist__list">
          <div className="deliverylist__list__col">
            <ul>
              {/* converts every item in list to an element */}
              {delivery_list.map((item, i) => {
                return <li key={i}> {item}</li>;
              })}
            </ul>
          </div>
          <div className="deliverylist__list__col">
            <ul>
              {delivery_list.map((item, i) => {
                return <li key={i}> {item}</li>;
              })}
            </ul>
          </div>
          <div className="deliverylist__list__col">
            <ul>
              {delivery_list.map((item, i) => {
                return <li key={i}> {item}</li>;
              })}
            </ul>
          </div>
          <div className="deliverylist__list__col">
            <ul>
              {delivery_list.map((item, i) => {
                return <li key={i}> {item}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="deliverylist__footer">
          <h2>We also deliver in All over India</h2>
        </div>
      </div>
    </div>
  );
}
