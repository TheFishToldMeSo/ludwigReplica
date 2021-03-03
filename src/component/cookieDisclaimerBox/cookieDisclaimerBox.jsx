import React from "react";
import "./cookieDisclaimerBox.scss";

export default class CookieDisclaimerBox extends React.Component {
  render() {
    return (
      <div id="disclaimer-box" className="cookieDisclaimerBox">
        <div id="cookie-box" className="cookieBox">
          <div className="cookieBoxWrapper">
            <p className="cookieBoxContent">
              By clicking "I Accept" or "X" on this banner, or using our site,
              you accept our{" "}
              <a href="https://ludwig.guru/privacy#cookies">
                cookie and privacy policy
              </a>
              .
            </p>
            <div className="cookieBoxAction">
              <div className="cookieBoxActionWrapper1">
                <span
                  className="cookieBoxActionContent"
                  id="close-cookie"
                  title="close-cookie"
                  alt="close-cookie"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    aria-labelledby="close-cookie"
                    className="cookieBoxSvg"
                  >
                    <title id="closeOutline">close-cookie</title>
                    <use href="/sprite.svg#closeOutline" />
                  </svg>
                </span>
              </div>
              <div className="cookieBoxActionWrapper2">
                <span id="accept-cookie" className="cookieBoxActionContent2">
                  <span className="cookieBoxActionContent3">
                    <span className="cookieBoxActionContent4">
                      <span>I Accept</span>
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
