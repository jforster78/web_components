class toTop extends HTMLElement {
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
      .backToTheTop {
        display: none;
        position: fixed;
        bottom: 90px;
        right: 15px;
        opacity: 0.7;
        cursor: pointer;
        background-color: #586c8c;
        padding: 18px 15px 5px;
        border-radius: 50%;
      }
        @media only screen and (min-width: 900px) {
        .backToTheTop {
          background-color: #191919;
        }
      }
      .backToTheTop__button {
        border: solid #eef0f3;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 7px;
        -webkit-transform: rotate(-135deg);
        transform: rotate(-135deg);
      }
    </style>

    <!-- Back to the top-->
    <div class="backToTheTop">
      <div class="backToTheTop__button"></div>
    </div>`;

    //On scroll
    window.onscroll = () => {
      //Show button once scrolled down more than 150px
      const scrollDown = () => {
        window.scrollY > 350
          ? (this._root.querySelector(".backToTheTop").style.display = "block")
          : (this._root.querySelector(".backToTheTop").style.display = "none");
      };
      scrollDown();
    };
    let intervalId = 0;
    //Scroll step
    const scrollStep = () => {
      window.scrollY === 0
        ? clearInterval(intervalId)
        : window.scroll(0, window.scrollY - 100);
    };
    //Scroll every 16 milliseconds
    const scrollToTop = () => {
      intervalId = setInterval(() => {
        scrollStep();
      }, 16); //16 milliseconds
    };
    //Scroll back to the top
    const scrollButtonEventListener = this._root.querySelector(".backToTheTop");
    scrollButtonEventListener.addEventListener("click", () => {
      scrollToTop();
    });
  }
}
customElements.define("to-top", toTop);


//Add this to the HTML sheet
<to-top></to-top>