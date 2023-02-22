import React from "react";
import { MdDashboard } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { BsFillCalendarDayFill } from "react-icons/bs";
import { BsFillWalletFill } from "react-icons/bs";
import { BsLifePreserver } from "react-icons/bs";
import { GrGroup } from "react-icons/gr";
import { FaSitemap } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { CgOrganisation } from "react-icons/cg";
import { HiDocumentReport } from "react-icons/hi";
import { AiFillSetting } from "react-icons/ai";

import "./menu.scss";

const MenuSection = () => {
  return (
    <div className="menu-section">
      <div className="brand">
        <div className="logo">
          <img
            src="https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png"
            alt="logo"
          />
        </div>
        <h4>Human R.</h4>
      </div>
      <div className="menu-items">
        <h5>MENU</h5>
        <ul >
          <li className="active">
            <div className="menu-icon">
              <MdDashboard />
            </div>
            Dashboard
          </li>
          <li>
            <div className="menu-icon">
              <AiFillMessage />
            </div>
            Message
          </li>
          <li>
            <div className="menu-icon">
              <BsFillCalendarDayFill />
            </div>
            Calender
          </li>
        </ul>
        <h5>RECRUITMENT</h5>
        <ul>
          <li>
            <div className="menu-icon">
              <BsFillWalletFill />
            </div>
            Jobs
          </li>
          <li>
            <div className="menu-icon">
              <GrGroup />
            </div>
            Candidates
          </li>
          <li>
            <div className="menu-icon">
              <BsLifePreserver />
            </div>
            My Referals
          </li>
          <li>
            <div className="menu-icon">
              <FaSitemap />
            </div>
            Career Site
          </li>
        </ul>
        <h5>ORGANIZATION</h5>
        <ul>
          <li>
            <div className="menu-icon">
              <FaUserCheck />
            </div>
            Employee
          </li>
          <li>
            <div className="menu-icon">
              <CgOrganisation />
            </div>
            Structure
          </li>
          <li>
            <div className="menu-icon">
              <HiDocumentReport />
            </div>
            Report
          </li>
          <li>
            <div className="menu-icon">
              <AiFillSetting />
            </div>
            Setting
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuSection;
