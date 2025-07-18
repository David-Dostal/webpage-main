import React, { Component } from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiX, FiMenu } from "react-icons/fi";

import logoDefault from "../../assets/images/logo/logo.png";
import logoLight from "../../assets/images/logo/logo-light.png";
import logoDark from "../../assets/images/logo/logo-dark.png";
import logoSymbolDark from "../../assets/images/logo/logo-symbol-dark.png";
import logoSymbolLight from "../../assets/images/logo/logo-symbol-light.png";
import ScrollSpy from "../common/ScrollSpy";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/david.s.dostal.5/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/in/david-dostál-4a36a4372/" },
  { Social: <FaTwitter />, link: "https://x.com/DavidDostl42748/" },
];
class HeaderThree extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);
    this.closeSidebar = this.closeSidebar.bind(this);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    window.addEventListener("load", function () {
      console.log("All assets are loaded");
    });
  }
  menuTrigger() {
    document.querySelector(".header-wrapper")?.classList.toggle("menu-open");
  }
  CLoseMenuTrigger() {
    document.querySelector(".header-wrapper")?.classList.remove("menu-open");
  }

  closeSidebar() {
    document.querySelector(".header-wrapper")?.classList.remove("menu-open");
  }

  stickyHeader() {}

  render() {
    window.addEventListener("scroll", function () {
      var value = window.scrollY;
      if (value > 0) {
        document.querySelector(".header--fixed")?.classList.add("sticky");
      } else {
        document.querySelector(".header--fixed")?.classList.remove("sticky");
      }
    });

    var elements = document.querySelectorAll(".has-droupdown > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement
            .querySelector(".submenu")
            ?.classList.toggle("active");
          this?.classList.toggle("open");
        };
      }
    }
    const { logo, color = "default-color" } = this.props;
    let logoUrl;
    if (logo === "light") {
      logoUrl = <img src={logoLight} alt="Digital Agency" />;
    } else if (logo === "dark") {
      logoUrl = <img src={logoDark} alt="Digital Agency" />;
    } else if (logo === "symbol-dark") {
      logoUrl = <img src={logoSymbolDark} alt="Digital Agency" />;
    } else if (logo === "symbol-light") {
      logoUrl = <img src={logoSymbolLight} alt="Digital Agency" />;
    } else {
      logoUrl = <img src={logoDefault} alt="Digital Agency" />;
    }
    

    return (
      <header className={`header-area header-style-two header--fixed ${color}`}>
        <div className="header-wrapper">
          <div className="header-left d-flex align-items-center">
            <div className="logo">
              <a href={this.props.homeLink}>{logoUrl}</a>
            </div>
            <nav className="mainmenunav d-lg-block ml--50">
              <ul className="mainmenu">
                <ScrollSpy
                  sectionIds={[
                    "#home",
                    "#about",
                    "#service",
                    "#portfolio",
                    "#contact",
                  ]}
                />
              </ul>
            </nav>
          </div>
          <div className="header-right">
            <div className="social-share-inner">
              <ul className="social-share social-style--2 color-black d-flex justify-content-start liststyle">
                {SocialShare.map((val, i) => (
                  <li key={i}>
                    <a href={`${val.link}`}>{val.Social}</a>
                  </li>
                ))}
              </ul>
            </div>
            {/* Start Humberger Menu  */}
            <div className="humberger-menu d-block d-lg-none pl--20">
              <span
                onClick={this.menuTrigger}
                className="menutrigger text-white"
              >
                <FiMenu />
              </span>
            </div>
            {/* End Humberger Menu  */}
            <div className="close-menu d-block d-lg-none">
              <span onClick={this.CLoseMenuTrigger} className="closeTrigger">
                <FiX />
              </span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default HeaderThree;
