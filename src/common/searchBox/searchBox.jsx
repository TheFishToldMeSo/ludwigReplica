//import React to use return component function
import React from "react";
import Button from "../button/button";
import { RiSearchLine } from "react-icons/ri";
import "./searchBox.scss";

export default class SearchBox extends React.Component {
  searchWords() {
    alert("what chu looking for bro?");
  }

  render() {
    return (
      <div className="searchWords">
        <div id="input-wrapper">
          <form className="inputBar" name="search" action=".">
            <label className="searchGroup" for="input-search"></label>
            <input
              id="input-search"
              className="searchArea2"
              name="search"
              autoComplete="off"
              autoCapitalize="none"
              placeholder="Search here..."
            ></input>
          </form>
        </div>

        <div className="searchButtonIconz">
          <Button
            iconOnly="true"
            isIcon="true"
            name="Search"
            onclick={this.searchWords}
            icon={<RiSearchLine />}
          />
        </div>
      </div>
    );
  }
}
