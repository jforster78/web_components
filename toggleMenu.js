//Toggle Menu
class toggleMenu extends HTMLElement {
  constructor() {
    //Always call parent constructor first
    super();

    //Attach a Shodow Root to the custom element
    this._root = this.attachShadow({ mode: "open" });
  }

  //Functionality of component
  connectedCallback() {
    this._root.innerHTML = `
      <style>
        @media only screen and (min-width: 1024px) {
          .header__nav {
            width: 960px;
            margin: auto;
          }
        }
        @media only screen and (min-width: 1240px) {
          .header__nav {
            width: 1100px;
            margin: auto;
          }
        }
        @media only screen and (min-width: 1440px) {
          .header__nav {
            width: 1300px;
            margin: auto;
          }
        }
        .header__h1 {
          margin: 0;
        }
        .header__navlist {
          display: flex;
          justify-content: flex-start;
          flex-direction: column;
          list-style-type: none;
          margin: 0;
          padding: 0 1rem;
          background-color: #191919;
        }
        @media only screen and (min-width: 900px) {
          .header__navlist {
            flex-direction: row;
            background-color: #586c8c;
          }
        }
        .header__navitem {
          font-family: "subHeadings", serif;
        }
        @media only screen and (min-width: 900px) {
          .header__navitem {
            padding: 0.5rem 0 0;
          }
        }
        .header__navitem--left {
          font-family: "title", cursive;
          color: #fff;
          padding: 0.75rem 1rem;
        }
        @media only screen and (min-width: 900px) {
          .header__navitem--left {
            padding: 1.4rem 0 1rem 1rem;
            flex-grow: 1;
          }
        }
        .header__link {
          text-decoration: none;
          color: #fff;
        }
        .header__navlink {
          text-decoration: none;
          color: #fff;
          border-bottom: 1px solid #fff;
          display: none;
          padding: 1.5rem 0.5rem;
        }
        .header__navlink:hover {
          color: #586c8c;
        }
        @media only screen and (min-width: 900px) {
          .header__navlink {
            display: block;
            border-bottom: none;
            padding: 1.5rem 1rem;
          }
          .header__navlink:hover {
            color: #191919;
          }
        }
        .header__navlink--noborder {
          border-bottom: none;
        }
        .header__navbutton {
          align-self: flex-end;
          display: initial;
          position: absolute;
          cursor: pointer;
          right: 1rem;
          top: 1.1rem;
          font-size: 1.5rem;
          display: block;
        }
        @media only screen and (min-width: 900px) {
          .header__navbutton {
            display: none;
          }
        }
        .header__navbar1, .header__navbar2, .header__navbar3 {
          width: 25px;
          padding: 1px 0;
          margin: 7px;
          transition: 0.4s;
          background-color: #fff;
        }
        .header__navbutton--change .header__navbar1 {
          -webkit-transform: rotate(-45deg) translate(-5px, 6px);
          transform: rotate(-45deg) translate(-5px, 6px);
        }
        .header__navbutton--change .header__navbar2 {
          opacity: 0;
        }
        .header__navbutton--change .header__navbar3 {
          -webkit-transform: rotate(45deg) translate(-6.75px, -8px);
          transform: rotate(45deg) translate(-6.75px, -8px);
        }
        .header__navshow {
          display: flex;
        }
      </style>

      <header class="header">
        <nav class="header__nav">
          <div class="header__navbutton">
            <div class="header__navbar1"></div>
            <div class="header__navbar2"></div>
            <div class="header__navbar3"></div>
          </div>
          <ul class="header__navlist">
            <li class="header__navitem header__navitem--left"><a href="index.html" class="header__link"><h1 class="header__h1">JF Web</h1></a></li>
            <li class="header__navitem"><a class="header__navlink" href="#help">Services</a></li>
            <li class="header__navitem"><a class="header__navlink" href="#portfolio">Portfolio</a></li>
            <li class="header__navitem"><a class="header__navlink" href="#process">Process</a></li>
            <li class="header__navitem"><a class="header__navlink header__navlink--noborder" href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>`;

    //Build the menu toggle
    const buildTheToggle = () => {
      const navs = this._root.querySelectorAll(".header__navlink");
      navs.forEach(nav => nav.classList.toggle("header__navshow"));
    };
    //Build the menu button animation
    const toggleButton = () => {
      const bars = this._root.querySelector(".header__navbutton");
      bars.classList.toggle("header__navbutton--change");
    };
    //Toggles menu opened/closed
    const toggleEventListener = this._root.querySelector(".header__navbutton");
    toggleEventListener.addEventListener("click", () => {
      buildTheToggle();
      toggleButton();
    });
  }
}
customElements.define("toggle-menu", toggleMenu);


//Add this to the HTML sheet
<toggle-menu></toggle-menu>