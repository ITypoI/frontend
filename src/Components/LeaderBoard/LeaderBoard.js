import React from "react";
import Navbar from "../Navbar/Navbar";
import "./LeaderBoard.css";

const LeaderBoard = () => {
  return (
    <div class="LeaderBoard_mainDiv">
      <Navbar></Navbar>
      <div className="contentDiv">
        <div className="content-first">
          <h1>LeaderBoard</h1>
          <h2>{/* 15<span>s</span>/30<span>s</span>/60<span>s</span> */}</h2>
        </div>
        <div className="LeaderBoard-Table">
          <div className="container">
            <ul className="responsiveTable">
              <div className="table-header-div">
                <li className="table-header">
                  <div className="col-1">#</div>
                  <div className="col-2">Name</div>
                  <div className="col-3">Streak</div>
                  <div className="col-4">wpm</div>
                  <div className="col-5">Accuracy</div>
                  <div className="col-6">Date</div>
                </li>
                /
              </div>
              <li className="table-row">
                <div className="col-1" data-label="#">
                  1.
                </div>
                <div className="col-2" data-label="Name">
                  Shaunak
                </div>
                <div className="col-3" data-label="Streak">
                  150
                </div>
                <div className="col-4" data-label="wpm">
                  82
                </div>
                <div className="col-5" data-label="Accuracy">
                  89%
                </div>
                <div className="col-6" data-label="Date">
                  Apr 14,2022
                </div>
              </li>
              <li className="table-row">
                <div className="col-1" data-label="#">
                  2.
                </div>
                <div className="col-2" data-label="Name">
                  Krishan
                </div>
                <div className="col-3" data-label="Streak">
                  150
                </div>
                <div className="col-4" data-label="wpm">
                  82
                </div>
                <div className="col-5" data-label="Accuracy">
                  89%
                </div>
                <div className="col-6" data-label="Date">
                  Apr 14,2022
                </div>
              </li>
              <li className="table-row">
                <div className="col-1" data-label="#">
                  3.
                </div>
                <div className="col-2" data-label="Name">
                  Pranshu
                </div>
                <div className="col-3" data-label="Streak">
                  150
                </div>
                <div className="col-4" data-label="wpm">
                  82
                </div>
                <div className="col-5" data-label="Accuracy">
                  89%
                </div>
                <div className="col-6" data-label="Date">
                  Apr 14,2022
                </div>
              </li>
              <li className="table-row">
                <div className="col-1" data-label="#">
                  4.
                </div>
                <div className="col-2" data-label="Name">
                  Nishant
                </div>
                <div className="col-3" data-label="Streak">
                  150
                </div>
                <div className="col-4" data-label="wpm">
                  82
                </div>
                <div className="col-5" data-label="Accuracy">
                  89%
                </div>
                <div className="col-6" data-label="Date">
                  Apr 14,2022
                </div>
              </li>
              <li className="table-row">
                <div className="col-1" data-label="#">
                  5.
                </div>
                <div className="col-2" data-label="Name">
                  Ameya
                </div>
                <div className="col-3" data-label="Streak">
                  150
                </div>
                <div className="col-4" data-label="wpm">
                  82
                </div>
                <div className="col-5" data-label="Accuracy">
                  89%
                </div>
                <div className="col-6" data-label="Date">
                  Apr 14,2022
                </div>
              </li>
              <li className="table-row">
                <div className="col-1" data-label="#">
                  6.
                </div>
                <div className="col-2" data-label="Name">
                  Rohan
                </div>
                <div className="col-3" data-label="Streak">
                  150
                </div>
                <div className="col-4" data-label="wpm">
                  82
                </div>
                <div className="col-5" data-label="Accuracy">
                  89%
                </div>
                <div className="col-6" data-label="Date">
                  Apr 14,2022
                </div>
              </li>
              <li className="table-row">
                <div className="col-1" data-label="#">
                  7.
                </div>
                <div className="col-2" data-label="Name">
                  Sharansh
                </div>
                <div className="col-3" data-label="Streak">
                  150
                </div>
                <div className="col-4" data-label="wpm">
                  82
                </div>
                <div className="col-5" data-label="Accuracy">
                  89%
                </div>
                <div className="col-6" data-label="Date">
                  Apr 14,2022
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
