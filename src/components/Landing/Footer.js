// for footer at bottom of page 
import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          {/* attach logo to the footer */}
          <h1><img src="./assets/logo.png" style={{ maxHeight: "150px" }} /></h1>   
          <p>Try before you buy</p>
        </div>
        <div className="footer__col">
          <div className="footer__col__header">Get To Know Us</div>
          <div className="footer__col__content">
            <ul>
              <li>Our Company</li>
              <li>Sell on Cartzone</li>
              <li>Advertise With Us</li>
              <li>Collaboration</li>
              <li>Partner</li>
            </ul>
          </div>
        </div>
        <div className="footer__col">
          {" "}
          <div className="footer__col__header">Customer Service</div>
          <div className="footer__col__content">
            <ul>
              <li>Returns</li>
              <li>Cancellation and Refunds</li>
              <li>Payments</li>
            </ul>
          </div>
        </div>
        <div className="footer__col">
          {" "}
          <div className="footer__col__header">Registered Office Address</div>
          <div className="footer__col__content">
            <ul>
              <li>Cartzone</li>
              <li>Sikdar Technologies Private Limited,</li>
              <li>Near The Neotia University,</li>
              <li>Cheowra</li>
              <li>Sarisha, 743368,</li>
              <li>Kolkata, India</li>
              <li>CIN : U52599WB2021PTC242735</li>
              <li>Telephone: 6289166961</li>
            </ul>
          </div>
        </div>
        <div className="footer__contact">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>contact@cartzone.in
            </li>
            <li>
              <i className="fas fa-phone-alt"></i>6289166961
            </li>
          </ul>
          <div className="footer__contact__social__icons">
            <div className="socialmedia__add__icons__yt">
              <i className="fab fa-youtube"></i>
            </div>
            <div className="socialmedia__add__icons__fb">
              <i className="fab fa-facebook"></i>
            </div>
            <div className="socialmedia__add__icons__tw">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="socialmedia__add__icons__ln">
              <i className="fab fa-linkedin"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__sub__footer">
        <div className="footer__sub__footer__terms__and__conditions">
          <ul>
            <li>Terms of Use</li> <li>Our Ads</li> <li>Privacy And Security</li>
          </ul>
        </div>
        <div className="footer__sub__footer__copyright">
          2022 Cartzone.in
        </div>
      </div>
    </div>
  );
}
