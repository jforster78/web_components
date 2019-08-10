//Web Component
class webComponent extends HTMLElement {
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
      //styles goe here...
    </style>

    //HTML goes here...`;

    //script goes here...
  }
}
customElements.define("web-component", webComponent);

//Add this to the HTML sheet
<web-component></web-component>

//<!-- Load the polyfill for Ms Edge -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
