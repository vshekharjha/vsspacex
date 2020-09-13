import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

import "./global.css";
import "./index.css";
import LaunchYearComponent from "./launchYearComponent";
import Tiles from "./tiles";

export default function Index() {
  const [data, setData] = useState([]);
  const [selectedYear, setSelectedYear] = useState("2015");
  const [succfullLaunchStatus, setsuccfullLaunchStatus] = useState();
  const [succfullLandingStatus, setsuccfullLandingStatus] = useState();

  useEffect(() => {
    let url = "https://api.spaceXdata.com/v3/launches?limit=100";
    url = selectedYear ? url + "&launch_year=" + selectedYear : url;
    url = succfullLaunchStatus
      ? url + "&launch_success=" + succfullLaunchStatus
      : url;
    url = succfullLandingStatus
      ? url + "&land_success=" + succfullLandingStatus
      : url;

    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, [selectedYear, succfullLaunchStatus, succfullLandingStatus]);

  // TODO: you can make filter option dynamic By uncommenting below code
  // if filter option is avilable without data its bad user experience.
  // let uniqueLaunchYear = _.map(data, "launch_year");

  const uniqueLaunchYear = [
    "2006",
    "2007",
    "2008",
    "2009",
    "2010",
    "2011",
    "2012",
    "2013",
    "2014",
    "2015",
    "2016",
    "2017",
    "2018",
    "2019",
    "2020",
  ];

  let fileredData = _.filter(data, { launch_year: selectedYear });

  function handleBtnOnclick(e) {
    e.preventDefault();

    setSelectedYear(e.currentTarget.innerText);
    setsuccfullLaunchStatus(undefined);
    setsuccfullLandingStatus(undefined);
  }

  function succesfullLaunchFilter(e) {
    e.preventDefault();
    setsuccfullLaunchStatus(e.currentTarget.innerText);
  }
  function succesfullLandingFilter(e) {
    e.preventDefault();
    setsuccfullLandingStatus(e.currentTarget.innerText);
  }

  return (
    <div>
      <div class="wrapper">
        <header class="header">SpaceX Launch Programme</header>
        <aside class="aside aside-1">
          <LaunchYearComponent
            handleBtnOnclick={handleBtnOnclick}
            selectedYear={selectedYear}
            succfullLaunchStatus={succfullLaunchStatus}
            succfullLandingStatus={succfullLandingStatus}
            succesfullLaunchFilter={succesfullLaunchFilter}
            succesfullLandingFilter={succesfullLandingFilter}
            uniqueLaunchYear={uniqueLaunchYear}
          />
        </aside>
        <article class="main">
          <Tiles data={fileredData} />
        </article>
      </div>

      <div class="footer">Developed By: Vishnu Shekhar</div>
    </div>
  );
}
