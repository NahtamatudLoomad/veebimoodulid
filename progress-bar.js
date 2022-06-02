export class ProgressBar extends HTMLElement {
  static get observedAttributes() {
    return ['total', 'current'];
  }
  
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  
  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue
    this.shadowRoot.innerHTML = this.render();
  }
  
  style() {
    return `:host {
                     display: grid;
                     align-items: center;
                     justify-content: center;
                     width: 100%;
                     grid-template-columns: 1fr;
                     position: relative;
                     grid-rows: 4;
                     font-family:var(--basic-font, "Arial");
                  }
                  
                 h3 {
                     text-align: center;
                     grid-row: 2;
                 }
                  
                .meter { 
                    height: 20px;
                    position: relative;
                    background: var(--grey, #ecf0f1);
                    border-radius: 5px;
                    padding: 5px;
                    display:grid;
                    align-items:center;
                    width: 100%;
                    grid-row: 3;
                  }
                  
                  span {
                      font-weight:bold;
                      font-size: 14px;
                  }
                
                  .current-fill {
                      display: block;
                      height: 100%;
                      background: var(--blue, #1abc9c);
                   }
                   
                   .current-value {
                      position: absolute;
                      color: var(--black, black);
                      left: 0;
                      font-weight: bold;
                   }
                   
                   .total-value {
                     grid-row: 3;
                     margin-left: 15px;
                     display:grid;
                     grid-template-columns: 10px 1fr 1fr;
                     grid-gap: 0 5px;
                   }
                   
                   .total-value span {
                     font-size: clamp(12px, 4vw, 22px);
                   }
                `;
  }

  connectedCallback() {
    this.title = this.getAttribute("title") || "";
    this.hideTotal = this.getAttribute("hideTotal") == "" || null;
    this.shadowRoot.innerHTML = this.render();
  }

  render() {
    const percentage = (this.current / this.total) * 100;
    return`
      <style>${this.style()}</style>
      ${this.title != 'null' && `<h3>${this.title}</h3>` || ""}
      <div class="meter">
        <span class="current-fill" style="width:${percentage}%"></span>
        <span class="current-value" style="left:${Math.abs(percentage - 5)}%">${this.current}€</span>
      </div>
      ${!this.hideTotal && 
          `<div class="total-value"> 
            <span style="color:var(--blue, #1abc9c)">/</span>
            <span>${this.total}</span> 
            <span style="color:var(--blue, #1abc9c)">€</span>
          </div>` || ""
        }
      `;
  }
}

customElements.define("progress-bar", ProgressBar);
