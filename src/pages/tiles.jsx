import React from "react";
import "./global.css";
export default function DataFetchComponent(props) {
  return (
    <>
      {props.data.map((item) => (
        <div class="tilesCard" key={item.id}>
          <div class="imgWrapper">
            <img width="100px" src={item.links.mission_patch} alt="something" />
          </div>
          <div class="uniqueIdWrapper">
            {item.mission_name} #{item.flight_number}
          </div>
          <div>
            <span class="TilesLblTxt">Mission Ids:</span> {item.mission_id}
          </div>
          <div>
            <span class="TilesLblTxt"> Launch Year:</span>
            {item.launch_year}
          </div>
          <div>
            <span class="TilesLblTxt"> Successful Launch:</span>
            {item.launch_success ? "True" : "False"}
          </div>
          <div>
            <span class="TilesLblTxt"> Successful Landing:</span>
            {item.launch_landing ? "True" : "False"}
          </div>
        </div>
      ))}
    </>
  );
}
