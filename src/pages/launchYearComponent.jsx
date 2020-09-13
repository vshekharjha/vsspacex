import React, { useState, useEffect } from "react";

export default function LaunchYearComponent(props) {
  const [selectedLaunchYear, setselectedLaunchYear] = useState();

  return (
    <>
      <div style={{ width: "100%", backgroundColor: "white" }}>
        <div class="assideFilterHeading">Filters</div>
        <div>
          <div class="underLineHeading">Launch Year</div>
        </div>
        <div style={{ width: "100%", display: "block" }}>
          {props.uniqueLaunchYear.map((item) => {
            return props.selectedYear === item ? (
              <button
                onClick={(e) => props.handleBtnOnclick(e)}
                class="btn btnStyl selectedBtn"
              >
                {item}
              </button>
            ) : (
              <button
                class="btn btnStyl"
                onClick={(e) => props.handleBtnOnclick(e)}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div class="underLineHeading">Successful Launch</div>
        <button
          className={
            "btn btnStyl " +
            (props.succfullLaunchStatus == "True" ? "selectedBtn" : "")
          }
          onClick={(e) => props.succesfullLaunchFilter(e)}
        >
          True
        </button>
        <button
          className={
            "btn btnStyl " +
            (props.succfullLaunchStatus == "False" ? "selectedBtn" : "")
          }
          onClick={(e) => props.succesfullLaunchFilter(e)}
        >
          False
        </button>
        <div class="underLineHeading">Successful Landing</div>
        <button
          className={
            "btn btnStyl " +
            (props.succfullLandingStatus == "True" ? "selectedBtn" : "")
          }
          onClick={(e) => props.succesfullLandingFilter(e)}
        >
          True
        </button>
        <button
          className={
            "btn btnStyl " +
            (props.succfullLandingStatus == "False" ? "selectedBtn" : "")
          }
          onClick={(e) => props.succesfullLandingFilter(e)}
        >
          False
        </button>
      </div>
    </>
  );
}
