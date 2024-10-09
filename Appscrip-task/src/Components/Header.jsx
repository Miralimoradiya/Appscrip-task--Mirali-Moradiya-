import React from "react";
import { LuBoxes } from "react-icons/lu";
import { IoLogoElectron } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="Header-Top">
        <div className="item">
          <span>
            <LuBoxes />
          </span>
          <span>Lorem, ipsum dolor.</span>
        </div>
        <div className="item">
          <span>
            <LuBoxes />
          </span>
          <span>Lorem, ipsum dolor.</span>
        </div>
        <div className="item">
          <span>
            <LuBoxes />
          </span>
          <span>Lorem, ipsum dolor.</span>
        </div>
      </div>
      <header className="header">
        <div className="headersec1">
          <div className="logo-container">
            <IoLogoElectron className="logo-icon" />
          </div>
          <div className="title-container">
            <h1 className="logo-text">LOGO</h1>
          </div>
          <div className="icon-container">
            <CiSearch className="icon" />
            <FaRegHeart className="icon" />
            <IoBagHandleOutline className="icon" />
            <FaRegUser className="icon" />
            <select className="language-select">
              <option value="Eng">Eng</option>
              <option value="Esp">Esp</option>
              <option value="Fra">Fra</option>
            </select>
          </div>
        </div>
        <div className="headersec2">
          <ul>
            <li>
              <a href="">Shop</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Stories</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}
