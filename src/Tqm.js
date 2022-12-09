import React from "react";
import PENCI from "./images/icons8-pencil-96.png";

function tqm() {
  return (
    <div>
      <div className="maindiv-tqm">
        <div className="quality-performance">
          <div></div>
          <div>
            <button className="quality">Quality</button>
            <button className="Performance">Perfromance</button>
          </div>
          <div>
            {" "}
            <img
              src={PENCI}
              className="iamgerounf pencil"
              width="50"
              height="50"
              alt=""
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default tqm;
