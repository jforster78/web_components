//SlideShow
class slideShow extends HTMLElement {
  constructor() {
    //Always call parent constructor first
    super();

    //Attach a Shodow Root to the custom element
    this._root = this.attachShadow({ mode: "open" });

    //Set Class attribute
    let slideShow = document.querySelector('slide-show');
    slideShow.setAttribute('class', 'grid__slideShow');
  }

  //Functionality of component
  connectedCallback() {
    this._root.innerHTML = `
    <style>
      .grid__slideShow {
        grid-area: grid__slideShow;
        position: relative;
        padding: 0;
        max-width: 100%;
        min-height: 100%;
      }
      .grid__slideShow img {
        -webkit-transition: opacity 2.5s;
        transition: opacity 2.5s;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        object-fit: cover;
      }
      @media only screen and (min-width: 900px) {
        .grid__slideShow img {
          min-height: 100%;
        }
      }
      .grid__slideShow img.fadeIn {
        opacity: 1;
      }
    </style>

    <div class="grid__slideShow"></div>`;

    //Variables
    let curIndex = 0,
      slider = this._root.querySelector(".grid__slideShow"),
      slides = slider.childNodes,
      imgArray = [
        "img/slideShow/img1.jpg",
        "img/slideShow/img2.jpg",
        "img/slideShow/img3.jpg"
      ];
    //Build the slideshow
    const buildSlideShow = arr => {
      for (let i = 0; i < arr.length; i++) {
        const img = document.createElement("img");
        img.src = arr[i];
        slider.appendChild(img).setAttribute("alt", "Slide " + [i]);
      }
    };
    //Fade in/out each slide
    const fade = () => {
      const fadeIn = ev => {
        ev.className = "fadeIn";
      };
      const fadeOut = ev => {
        ev.className = "";
      };

      fadeOut(slides[curIndex]);
      curIndex++;
      if (curIndex === slides.length) {
        curIndex = 0;
      }

      fadeIn(slides[curIndex]);

      //Fade in/out every 10 seconds
      setTimeout(() => {
        fade();
      }, 10000); //10 seconds
    };
    buildSlideShow(imgArray);
    fade();
  }
}
customElements.define("slide-show", slideShow);


//Add this to the HTML sheet
<slide-show></slide-show>