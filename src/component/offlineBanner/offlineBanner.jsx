import React from "react";
import "./offlineBanner.scss";

export default class OfflineBanner extends React.Component {
  render() {
    return (
      <div className="offlineBanner">haha
        <span
          title="connectionIcon"
          alt="connectionIcon"
          class="offlineBannerWrapper"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.4em"
            height="1.4em"
            viewBox="0 0 24 24"
            aria-labelledby="connectionIcon"
            class="css-0 e18qkthh1"
          >
            <title id="connectionIcon">connectionIcon</title>
            <use href="/sprite.svg#connectionIcon" />
          </svg>
        </span>

        <div class="css-1nd347d e144vdpy0">You are offline.</div>
      </div>
    );
  }
}
