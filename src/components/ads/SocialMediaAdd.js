//Social contact advertisement

import React from "react";
import "./SocialMediaAdd.css";
export default function SocialMediaAdd() {
  return (
    <div className="socialmedia__add" id="contact-socials">
      <div className="socialmedia__add__container">
        <div className="socialmedia__add__header">
          <h1>Join Our Social Commerce</h1>
          <p>You can now order through any of these platforms</p>
        </div>
        <div className="socialmedia__add__icons">
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
  );
}
