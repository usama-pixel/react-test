import React from "react";
import "./App.css";
import { useState } from "react";
// import Modal from "./Model";
import axios from "axios";

import Calendar from "react-calendar";
import logo from "./images/logo.png";
import hamberg from "./images/clipart365828.png";
import imagusere from "./images/pic.webp";
import search from "./images/[CITYPNG.COM]White Search Icon Button PNG IMG - 512x512.png";
import home from "./images/home-run.svg";
import Mask from "./images/Screenshot 2022-10-08 085506.png";
import PngItem_464455 from "./images/Screenshot 2022-10-08 085444.png";
import userhead from "./images/Screenshot 2022-10-08 084316.png";
import homeuser from "./images/Screenshot 2022-10-08 084346.png";
import box from "./images/Screenshot 2022-10-08 084405.png";
import percent from "./images/Screenshot 2022-10-08 084421.png";
import wallet from "./images/Screenshot 2022-10-08 084432.png";
import graph from "./images/Screenshot 2022-10-09 113943.png";
import ghantey from "./images/Screenshot 2022-10-08 084443.png";
import award from "./images/Screenshot 2022-10-08 084455.png";
import customercare from "./images/Screenshot 2022-10-08 084506.png";
import threeheads from "./images/Screenshot 2022-10-08 084518.png";
import people from "./images/Screenshot 2022-10-08 084528.png";

import { Box } from "@mui/material";
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import SearchIcon from '@mui/icons-material/Search';

import customer from "./images/icons8-management-64.png";
import order from "./images/icons8-shopaholic-24.png";
import delivery from "./images/icons8-car-16.png";
import userss from "./images/icons8-protect-24.png";
import revenueww from "./images/icons8-total-sales-24.png";
import rating from "./images/icons8-star-filled-24.png";
import dots from "./images/icons8-menu-vertical-24.png";

import upwardarrow from "./images/icons8-up-arrow-24.png";
import downwardarrow from "./images/icons8-down-arrow-24.png";
import updownarrow from "./images/icons8-up-down-arrow-24.png";
import karai from "./images/NoPath - Copy (14)-4.png";
import okmark from "./images/icons8-box-important-24.png";
import smiley from './images/smiley.jpg'
import { useEffect, useContext } from "react";

import { AreaChart } from "reaviz";
import trend from "./images/icons8-account-24 (1).png";
import PENCIL from "./images/icons8-pencil-96.png";
import calendar from "./images/icons8-calendar-50.png";
import time from "./images/Screenshot 2022-10-09 171855.png";
import vbnh from "./images/Screenshot 2022-10-09 171938.png";
import ticky from "./images/Screenshot 2022-10-09 172241.png";
import medal from "./images/Screenshot 2022-10-09 172442.png";

import boxesd from "./images/Screenshot 2022-10-09 170359.png";
import Chart from "./Chart";

function Home() {
  // const [showCalendar, setShowCalendar] = useState(false);
  const [shows, setshow] = useState(false);
  const [dataa, setdta] = useState([]);

  useEffect(() => {
    return () => {
      console.log(shows);
    };
  }, []);
  const Loaddata = () => { };

  // console.log("entere");
  // axios
  //   .get("http://localhost:4000/basket/" + vag)
  //   .then(function (response) {
  //     setdta(response.data);
  //     console.log(dataa);
  //     // handle success
  //     console.log(response);
  //     console.log("qwe", dataa[0].user);
  //   })
  //   .catch(function (error) {
  //     // handle error
  //     console.log(error);
  //   })
  //   .then(function () {
  //     // always executed
  //   });

  const ShowUnshow = () => {
    if (shows == true) {
      setshow(false);
      console.log(shows);
    } else {
      setshow(true);
      console.log(shows);
    }
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bgcolor">
        <a class="navbar-brand" href="#">
          <img src={logo} width="100" height="100" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                <img src={hamberg} width="40" height="40" alt="" />
              </a>
            </li>
          </ul>
          <span class="navbar-text">
            <div className="dispaly">
              <div className="margin-right">
                {" "}
                <img src={search} width="50" height="50" alt="" />
              </div>
              <div>
                {" "}
                <img
                  src={imagusere}
                  className="iamgerounf"
                  width="50"
                  height="50"
                  alt=""
                />
              </div>
            </div>
          </span>
        </div>
      </nav>

      <div className=" mt-1 container-fluid w-100 madin-second-container">
        <div className="col-1 sidebar ">
          <a class="pt-3" href="#">
            <img className="left" src={home} width="50" height="44" alt="" />
          </a>{" "}
          <a class="mt-5 left" href="#">
            <img src={Mask} width="50" height="44" alt="" />
          </a>{" "}
          <a class="mt-5 left" href="#">
            <img src={PngItem_464455} width="50" height="44" alt="" />
          </a>{" "}
          <a class="mt-5 left" href="#">
            <img src={userhead} width="50" height="44" alt="" />
          </a>{" "}
          <a class="mt-5 left" href="#">
            <img src={homeuser} width="50" height="44" alt="" />
          </a>{" "}
          <a class="mt-5 left" href="#">
            <img src={box} width="50" height="44" alt="" />
          </a>{" "}
          <a class="mt-5 left" href="#">
            <img src={percent} width="50" height="44" alt="" />
          </a>{" "}
          <a class="mt-5 left" href="#">
            <img src={wallet} width="50" height="44" alt="" />
          </a>{" "}
          <a class="mt-5 left" href="#">
            <img src={ghantey} width="50" height="44" alt="" />
          </a>{" "}
          <a class="mt-5 left" href="#">
            <img src={award} width="50" height="44" alt="" />
          </a>{" "}
          <a class="mt-5 left" href="#">
            <img src={customercare} width="50" height="44" alt="" />
          </a>{" "}
          <a class="mt-5 left" href="#">
            <img src={threeheads} width="50" height="44" alt="" />
          </a>{" "}
          <a class="mt-5 left" href="#">
            <img src={people} width="50" height="44" alt="" />
          </a>{" "}
        </div>
        <div className="col-11 main-div">
          {shows == false ? (
            <div className="">
              <div className="">
                <div className="top-button mt-5">
                  <div>
                    <button type="button" class="btn btn-lg btn-light">
                      Filter By
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={(e) => {
                        ShowUnshow();
                      }}
                      type="button"
                      class="TQM-Button rounded-pill btn btn-danger btn-lg"
                    >
                      TQM
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-5 graph-boxes-div">
                <div className="col-6">
                  <div className="boxes">
                    <div className="box-data">
                      {" "}
                      <div>
                        {" "}
                        <img
                          src={customer}
                          className="center"
                          width="30"
                          height="30"
                          alt=""
                        />
                        <p className="text">Customers</p>
                      </div>
                      <div className="mt-2">
                        <h4 className="numbers">7777</h4>
                      </div>
                    </div>
                    <div className="box-data">
                      <div>
                        {" "}
                        <img
                          src={order}
                          className="center"
                          width="30"
                          height="30"
                          alt=""
                        />
                        <p className="text">Order</p>
                      </div>
                      <div className="mt-2">
                        <h4 className="numbers">123</h4>
                      </div>
                    </div>
                    <div className="box-data">
                      {" "}
                      <div>
                        {" "}
                        <img
                          src={delivery}
                          className="center"
                          width="30"
                          height="30"
                          alt=""
                        />
                        <p className="text">Delivery</p>
                      </div>
                      <div className="mt-2">
                        <h4 className="numbers">9000</h4>
                      </div>
                    </div>
                    <div className="box-data">
                      {" "}
                      <div>
                        {" "}
                        <img
                          src={userss}
                          className="center"
                          width="30"
                          height="30"
                          alt=""
                        />
                        <p className="text">Users</p>
                      </div>
                      <div className="mt-2">
                        <h4 className="numbers">191221</h4>
                      </div>
                    </div>
                  </div>
                  <div className="boxes mt-3">
                    <div className="box-data">
                      <div>
                        {" "}
                        <img
                          src={revenueww}
                          className="center"
                          width="30"
                          height="30"
                          alt=""
                        />
                        <p className="text">REVENUE</p>
                      </div>
                      <div className="mt-2">
                        <h4 className="numbers">$9991</h4>
                      </div>
                    </div>
                    <div className="box-data">
                      <div>
                        {" "}
                        <img
                          src={rating}
                          className="center"
                          width="30"
                          height="30"
                          alt=""
                        />
                        <p className="text">AVG.RATING</p>
                      </div>
                      <div className="mt-2">
                        <h4 className="numbers">4.5</h4>
                      </div>
                    </div>
                    <div className="box-data">
                      <div>
                        {" "}
                        <img
                          src={revenueww}
                          className="center"
                          width="30"
                          height="30"
                          alt=""
                        />
                        <p className="text">
                          AVG.REVENUE <br></br>PER CUSTOMER
                        </p>
                      </div>
                      <div className="mt-2">
                        <h4 className="numbers">$118231</h4>
                      </div>
                    </div>
                    <div className="box-data">
                      <div>
                        {" "}
                        <img
                          src={revenueww}
                          className="center"
                          width="30"
                          height="30"
                          alt=""
                        />
                        <p className="text">
                          AVG.REVENUE<br></br> PER USER
                        </p>
                      </div>
                      <div className="mt-2">
                        <h4 className="numbers">$99191</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="graph">
                    <div className="graphseting-top">
                      <div>
                        {" "}
                        <p className="userstatic">USER STATISTICS</p>
                      </div>
                      <div>
                        <img
                          src={dots}
                          className="iamgerounf"
                          width="20"
                          height="20"
                          alt=""
                        />
                      </div>
                    </div>
                    <hr className="hr"></hr>
                    {/* <div
                      className="chart"
                    > */}
                    <Chart />
                    {/* </div> */}
                    <div className="down-raph">
                      <div className="sdfg">
                        <p className="graph-textc">Weekly User</p>
                        <br></br>
                        <p className="numbertr">8210</p>
                      </div>
                      <div className="sdfg">
                        <p className="graph-textc">Monthly User</p>
                        <br></br>
                        <p className="numbertr">8210</p>
                      </div>
                      <div className="sdfg">
                        <p className="graph-textc">Trend</p>
                        <br></br>
                        <img
                          src={trend}
                          className="numbertr"
                          width="20"
                          height="20"
                          alt=""
                        />{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="top-custoemrs">
                <div className=" topcsutomers">
                  <div>
                    <p className="top-label">Top Customers</p>
                  </div>
                  <div className="nameandpaisa">
                    <div className="bnsjfd">
                      <img
                        src={imagusere}
                        className="iamgerounf"
                        width="50"
                        height="50"
                        alt=""
                      />
                      <p className="text123">Usama</p>
                    </div>
                    <div>
                      <p className="top-customers-numbers">$90,225</p>
                    </div>
                  </div>
                  <div className="revenue-month">
                    <div>
                      <p className="revenue-text">REVENUE / MONTH</p>
                    </div>
                    <div>
                      <p className="revenue-text">PROCESSED ORDERS / MONTH</p>
                    </div>
                  </div>
                  <div className="revenue-month">
                    <div className="number-esring">
                      <p className="top-customers-numbers-dollar"> $33667 </p>
                      <img
                        src={upwardarrow}
                        className="iamgerounf"
                        width="20"
                        height="15"
                        alt=""
                      />

                      <p className="top-customers-numbers-dollarpercent">12%</p>
                    </div>
                    <div>
                      <div className="number-esring">
                        <p className="top-customers-numbers-dollar"> $13464 </p>
                        <img
                          src={downwardarrow}
                          className="iamgerounf"
                          width="20"
                          height="15"
                          alt=""
                        />

                        <p className="top-customers-numbers-dollarpercent changecolor">
                          12%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" topcsutomers">
                  <div>
                    <p className="top-label">Top Customers</p>
                  </div>
                  <div className="nameandpaisa">
                    <div className="bnsjfd">
                      <img
                        src={imagusere}
                        className="iamgerounf"
                        width="50"
                        height="50"
                        alt=""
                      />
                      <p className="text123">Ali</p>
                    </div>
                    <div>
                      <p className="top-customers-numbers">$90,225</p>
                    </div>
                  </div>
                  <div className="revenue-month">
                    <div>
                      <p className="revenue-text">REVENUE / MONTH</p>
                    </div>
                    <div>
                      <p className="revenue-text">PROCESSED ORDERS / MONTH</p>
                    </div>
                  </div>
                  <div className="revenue-month">
                    <div className="number-esring">
                      <p className="top-customers-numbers-dollar"> $12345 </p>
                      <img
                        src={upwardarrow}
                        className="iamgerounf"
                        width="20"
                        height="15"
                        alt=""
                      />

                      <p className="top-customers-numbers-dollarpercent">12%</p>
                    </div>
                    <div>
                      <div className="number-esring">
                        <p className="top-customers-numbers-dollar"> $13464 </p>
                        <img
                          src={downwardarrow}
                          className="iamgerounf"
                          width="20"
                          height="15"
                          alt=""
                        />

                        <p className="top-customers-numbers-dollarpercent changecolor">
                          12%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" topcsutomers">
                  <div>
                    <p className="top-label">Top Customers</p>
                  </div>
                  <div className="nameandpaisa">
                    <div className="bnsjfd">
                      <img
                        src={imagusere}
                        className="iamgerounf"
                        width="50"
                        height="50"
                        alt=""
                      />
                      <p className="text123">
                        Usama <br></br> Ali
                      </p>
                    </div>
                    <div>
                      <p className="top-customers-numbers">$90,225</p>
                    </div>
                  </div>
                  <div className="revenue-month">
                    <div>
                      <p className="revenue-text">REVENUE / MONTH</p>
                    </div>
                    <div>
                      <p className="revenue-text">PROCESSED ORDERS / MONTH</p>
                    </div>
                  </div>
                  <div className="revenue-month">
                    <div className="number-esring">
                      <p className="top-customers-numbers-dollar"> $12345 </p>
                      <img
                        src={upwardarrow}
                        className="iamgerounf"
                        width="20"
                        height="15"
                        alt=""
                      />

                      <p className="top-customers-numbers-dollarpercent">12%</p>
                    </div>
                    <div>
                      <div className="number-esring">
                        <p className="top-customers-numbers-dollar"> $13464 </p>
                        <img
                          src={downwardarrow}
                          className="iamgerounf"
                          width="20"
                          height="15"
                          alt=""
                        />

                        <p className="top-customers-numbers-dollarpercent changecolor">
                          12%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="active-order">Active Orders</h4>

              <div class="table-wrapper">
                <table class="fl-table">
                  <thead>
                    <tr>
                      <th>
                        Type{" "}
                        <span>
                          {" "}
                          <img
                            src={updownarrow}
                            className="iamgerounf"
                            width="20"
                            height="20"
                            alt=""
                          />
                        </span>
                      </th>
                      <th>
                        Order #{" "}
                        <span>
                          {" "}
                          <img
                            src={updownarrow}
                            className="iamgerounf"
                            width="20"
                            height="20"
                            alt=""
                          />
                        </span>
                      </th>
                      <th>
                        Customer{" "}
                        <span>
                          {" "}
                          <img
                            src={updownarrow}
                            className="iamgerounf"
                            width="20"
                            height="20"
                            alt=""
                          />
                        </span>
                      </th>
                      <th>
                        Zip Code{" "}
                        <span>
                          {" "}
                          <img
                            src={updownarrow}
                            className="iamgerounf"
                            width="20"
                            height="20"
                            alt=""
                          />
                        </span>
                      </th>
                      <th>
                        Order Time{" "}
                        <span>
                          {" "}
                          <img
                            src={updownarrow}
                            className="iamgerounf"
                            width="20"
                            height="20"
                            alt=""
                          />
                        </span>
                      </th>
                      <th>
                        Vendors{" "}
                        <span>
                          {" "}
                          <img
                            src={updownarrow}
                            className="iamgerounf"
                            width="20"
                            height="20"
                            alt=""
                          />
                        </span>
                      </th>
                      <th>
                        Rider{" "}
                        <span>
                          {" "}
                          <img
                            src={updownarrow}
                            className="iamgerounf"
                            width="20"
                            height="20"
                            alt=""
                          />
                        </span>
                      </th>
                      <th>
                        Order Amount{" "}
                        <span>
                          {" "}
                          <img
                            src={updownarrow}
                            className="iamgerounf"
                            width="20"
                            height="20"
                            alt=""
                          />
                        </span>
                      </th>
                      <th>
                        Performance{" "}
                        <span>
                          {" "}
                          <img
                            src={updownarrow}
                            className="iamgerounf"
                            width="20"
                            height="20"
                            alt=""
                          />
                        </span>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a className="yellow-pill rounded-pill">
                          Squad
                        </a>
                      </td>
                      <td className="">2564</td>
                      <td>
                        <div className="tablecustomer997">
                          <div className="bnsjfd">
                            <img
                              src={imagusere}
                              className="iamgerounf iamgerounfc"
                              width="50"
                              height="50"
                              alt=""
                            />
                          </div>
                          <div className="ml-2">
                            <p className="text23">Hillary</p>
                            <p className="text223">Pakistan</p>
                            <p className="text223">09-007801</p>
                          </div>
                        </div>
                      </td>
                      <td>2345</td>
                      <td>3:12 PM</td>
                      <td>
                        {" "}
                        <img
                          src={karai}
                          className=""
                          width="40"
                          height="40"
                          alt=""
                        />
                      </td>
                      <td>Bill Cohen</td>
                      <td>
                        {" "}
                        <button
                          type="button"
                          className=" green-pill rounded-pill"
                        >
                          $515
                        </button>
                      </td>
                      <td>
                        <img
                          src={okmark}
                          className="iamgerounf"
                          width="30"
                          height="30"
                          alt=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a className="yellow-pill rounded-pill">
                          Squad
                        </a>
                      </td>
                      <td className="">2564</td>
                      <td>
                        <div className="tablecustomer997">
                          <div className="bnsjfd">
                            <img
                              src={imagusere}
                              className="iamgerounf iamgerounfc"
                              width="50"
                              height="50"
                              alt=""
                            />
                          </div>
                          <div className="ml-2">
                            <p className="text23">Usama</p>
                            <p className="text223">Pakistan</p>
                            <p className="text223">09-007801</p>
                          </div>
                        </div>
                      </td>
                      <td>2345</td>
                      <td>3:12 PM</td>
                      <td>
                        {" "}
                        <img
                          src={karai}
                          className=""
                          width="40"
                          height="40"
                          alt=""
                        />
                      </td>
                      <td>Bill Cohen</td>
                      <td>
                        {" "}
                        <a
                          type="button"
                          class=" green-pill rounded-pill"
                        >
                          $718
                        </a>
                      </td>
                      <td>
                        <img
                          src={smiley}
                          className="iamgerounf"
                          width="30"
                          height="30"
                          alt=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a className=" yellow-pill rounded-pill">
                          Squad
                        </a>
                      </td>
                      <td className="">2564</td>
                      <td>
                        <div className="tablecustomer997">
                          <div className="bnsjfd">
                            <img
                              src={imagusere}
                              className="iamgerounf iamgerounfc"
                              width="50"
                              height="50"
                              alt=""
                            />
                          </div>
                          <div className="ml-2">
                            <p className="text23">Hillary</p>
                            <p className="text223">Pakistan</p>
                            <p className="text223">09-007801</p>
                          </div>
                        </div>
                      </td>
                      <td>2345</td>
                      <td>3:12 PM</td>
                      <td>
                        {" "}
                        <img
                          src={karai}
                          className=""
                          width="40"
                          height="40"
                          alt=""
                        />
                      </td>
                      <td>Bill Cohen</td>
                      <td>
                        {" "}
                        <button
                          type="button"
                          class=" green-pill rounded-pill"
                        >
                          $121
                        </button>
                      </td>
                      <td>
                        <img
                          src={okmark}
                          className="iamgerounf"
                          width="30"
                          height="30"
                          alt=""
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a className="yellow-pill rounded-pill">
                          Squad
                        </a>
                      </td>
                      <td className="">2564</td>
                      <td>
                        <div className="tablecustomer997">
                          <div className="bnsjfd">
                            <img
                              src={imagusere}
                              className="iamgerounf iamgerounfc"
                              width="50"
                              height="50"
                              alt=""
                            />
                          </div>
                          <div className="ml-2">
                            <p className="text23">Usama</p>
                            <p className="text223">Pakistan</p>
                            <p className="text223">09-007801</p>
                          </div>
                        </div>
                      </td>
                      <td>2345</td>
                      <td>3:12 PM</td>
                      <td>
                        {" "}
                        <img
                          src={karai}
                          className=""
                          width="40"
                          height="40"
                          alt=""
                        />
                      </td>
                      <td>Bill Cohen</td>
                      <td>
                        {" "}
                        <button
                          type="button"
                          class=" green-pill rounded-pill"
                        >
                          $111
                        </button>
                      </td>
                      <td>
                        <img
                          src={smiley}
                          className="iamgerounf"
                          width="30"
                          height="30"
                          alt=""
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            <div>
              <div className="maindiv-tqm">
                <div className="quality-performance">
                  <div></div>
                  <div>
                    <button className="quality">Quality</button>
                    <button className="Performance">Perfromance</button>
                  </div>
                  <div>
                    <a
                      class="btn pencil "
                      href="#"
                    >
                      <img
                        src={PENCIL}
                        className="iamgerounf"
                        width="50"
                        height="50"
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <div className="mt-5 ljhdf">
                  <div className="klass-setting">
                    {" "}
                    <img src={calendar} width="40" height="40" alt="" />
                  </div>
                  <div className="calendar12467">
                    <div class="input-group group2 mb-3">
                      <div class="input-group-prepend"></div>
                      <input
                        type="text"
                        placeholder="Search Vendor or Rider"
                        class="form-control"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      {/* <div class="input-group-append"> */}
                      <span class="input-group-text">

                        <SearchIcon />
                        {/* <img src={search} width="20" height="20" alt="" /> */}
                      </span>
                      {/* </div> */}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="active-order">Company Insights</p>
                </div>
                <div className="cards-oerd">
                  <div className="card-">
                    <div>
                      {" "}
                      <img
                        src={boxesd}
                        className="full-width"
                        width="100"
                        height="100"
                        alt=""
                      />{" "}
                    </div>
                    <div>
                      {" "}
                      <p className="oder-acceptance">Order Acceptance</p>
                    </div>
                    <div>
                      <div className="jdhfjdfjha">
                        {" "}
                        <p className="oder-acceptance"> 85% </p>
                        <span className="span-center">
                          <img
                            src={downwardarrow}
                            className="iamgerounf"
                            width="20"
                            height="23"
                            alt=""
                          />
                          <p className=" changecolor">12%</p>{" "}
                        </span>
                      </div>
                      <div>
                        <button className="phase-uttonm">Phase 1 Goal</button>
                      </div>
                    </div>
                  </div>
                  <div className="card-">
                    <div>
                      {" "}
                      <img
                        src={time}
                        className="full-width"
                        width="100"
                        height="90"
                        alt=""
                      />{" "}
                    </div>
                    <div>
                      {" "}
                      <p className="oder-acceptance">Reaching Vendor</p>
                    </div>
                    <div>
                      <div className="jdhfjdfjha">
                        {" "}
                        <p className="oder-acceptance"> 95% </p>
                        <span className="span-center">
                          <img
                            src={upwardarrow}
                            className="iamgerounf"
                            width="20"
                            height="23"
                            alt=""
                          />
                          <p className=" changecolor22">12%</p>{" "}
                        </span>
                      </div>
                      <div>
                        <button className="phase2-uttonm">Phase 2 Goal</button>
                      </div>
                    </div>
                  </div>
                  <div className="card-">
                    <div>
                      {" "}
                      <img
                        src={vbnh}
                        className="full-width"
                        width="100"
                        height="90"
                        alt=""
                      />{" "}
                    </div>
                    <div>
                      {" "}
                      <p className="oder-acceptance">Delivery Order</p>
                    </div>
                    <div>
                      <div className="jdhfjdfjha">
                        {" "}
                        <p className="oder-acceptance"> 85% </p>
                        <span className="span-center">
                          <img
                            src={downwardarrow}
                            className="iamgerounf"
                            width="20"
                            height="23"
                            alt=""
                          />
                          <p className=" changecolor">99%</p>{" "}
                        </span>
                      </div>
                      <div>
                        <button className="Ultimate-uttonm">
                          Ultimate Goal
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cccards-oerd mt-5">
                  <div className="card-">
                    <div>
                      {" "}
                      <img
                        src={ticky}
                        className="full-width"
                        width="100"
                        height="100"
                        alt=""
                      />{" "}
                    </div>
                    <div>
                      {" "}
                      <p className="oder-acceptance">Clearing Payments</p>
                    </div>
                    <div>
                      <div className="jdhfjdfjha">
                        {" "}
                        <p className="oder-acceptance"> 85% </p>
                        <span className="span-center">
                          <img
                            src={downwardarrow}
                            className="iamgerounf"
                            width="20"
                            height="23"
                            alt=""
                          />
                          <p className=" changecolor">65%</p>{" "}
                        </span>
                      </div>
                      <div>
                        <button className="phase-">None</button>
                      </div>
                    </div>
                  </div>
                  <div className="card-">
                    <div>
                      {" "}
                      <img
                        src={medal}
                        className="full-width"
                        width="100"
                        height="100"
                        alt=""
                      />{" "}
                    </div>
                    <div>
                      {" "}
                      <p className="oder-acceptance">Total Quality Score</p>
                    </div>
                    <div>
                      <div className="jdhfjdfjha">
                        {" "}
                        <p className="oder-acceptance"> 95% </p>
                        <span className="span-center">
                          <img
                            src={upwardarrow}
                            className="iamgerounf"
                            width="20"
                            height="23"
                            alt=""
                          />
                          <p className=" changecolor22">12%</p>{" "}
                        </span>
                      </div>
                      <div>
                        <button className="phase2-uttonm">Phase 2 Goal</button>
                      </div>
                    </div>
                  </div>
                  <div className="card---"></div>
                </div>
              </div>
            </div>
          )}
          {/* Whn become false */}
          {/* tqm when show becomes true */}
        </div>
      </div>
    </div >
  );
}

export default Home;
