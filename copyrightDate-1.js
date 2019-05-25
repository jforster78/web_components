//Copyright Date
class copyrightDate extends HTMLElement {
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
      .footer__copyright {
        font-size: 90%;
      }
    </style>

    <p class="footer__copyright"><small>Copyright &copy;<span id="date"> 2019 </span> JF Web</small></p>`;

    //Get current date.
    const copyright = new Date();
    //Set current year.
    // @ts-ignore
    this._root.getElementById("date").innerHTML = copyright.getFullYear();
  }
}
customElements.define("copyright-date", copyrightDate);


//Add this to the HTML sheet
<copyright-date></copyright-date>