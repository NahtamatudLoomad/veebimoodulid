import { LitElement, html, css } from "https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js";


export class Modal extends LitElement {
  constructor(content) {
    super();
    this.content = content;
    document.body.append(this);
  }

  static get styles() {
    return css`
            :host {
                width: 100vw;
                min-height: 100vh;
                position: fixed;
                top: 0;
                left: 0;
                background: rgba(52, 73, 94, 0.4);
                display: grid;
                grid-template-columns: 1fr;
                justify-content: center;
                justify-items: center;
                z-index: 50;
                max-height: 100vh;
                height: auto;
                overflow-y: scroll;
                z-index: 99;
            }
			
            #close {
                position: fixed;
                top: 5vw;
                right: 5vw;
                width: 40px;
                height: 40px;
                fill: var(--black);
                cursor: pointer;
                z-index: 999;
              }
            }

            #content {
              display: grid;
              justify-content: center;
              align-items: center;
              padding: 15px;
            }
        `;
  }

  close() {
    this.dispatchEvent(new CustomEvent('close', {}));
  }

  render() {
    return html`
      <svg
        @click=${this.close}
        id="close"
        fill="blac"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width="30px"
        height="30px"
      >
        <path
          d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"
        />
      </svg>
      <div id="content">
        ${this.content}
      </div>
    `;
  }
}

customElements.define('modal-component', Modal);

export class SmallModal extends LitElement {
  constructor({ content, title }) {
    super();
    this.title = title;
    this.content = content;
    document.body.append(this);
  }

  static get styles() {
    return css`
      :host {
        width: 100vw;
        min-height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(52, 73, 94, 0.4);
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        justify-items: center;
        z-index: 50;
        max-height: 100vh;
        height: auto;
        overflow-y: scroll;
        z-index: 99;
      }

      #body {
        display: grid;
        grid-template-columns: 1fr;
        justify-content: center;
        align-items: start;
        align-content: start;
        align-self: center;
        justify-self: center;
        min-width: 500px;
        min-height: 500px;
        border: solid 1px var(--grey);
        box-shadow: 0px 1px 2px var(--black);
        background: var(--white);
        border-radius: 15px;
      }

      #close {
        width: 25px;
        height: 25px;
        fill: var(--blue);
        cursor: pointer;
      }

      #head {
        font-size: 20px;
        text-align: center;
        align-items: center;
        display: grid;
        grid-template-columns: 1fr 25px;
        border-bottom: solid 1px var(--dark-grey);
        padding: 15px;
        margin-bottom: 20px;
      }

      #content {
        display: grid;
        justify-content: center;
        align-items: center;
        padding: 15px;
      }
    `;
  }

  close() {
    this.dispatchEvent(new CustomEvent('close', {}));
  }

  render() {
    return html`
      <section id="body">
        <section id="head">
          <span>${this.title}</span>

          <svg
            @click=${this.close}
            id="close"
            fill="blac"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            width="30px"
            height="30px"
          >
            <path
              d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"
            />
          </svg>
        </section>
        <div id="content">
          ${this.content}
        </div>
      </section>
    `;
  }
}

customElements.define('modal-small', SmallModal);

