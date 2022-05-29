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
        `;
	}

	close() {
		this.dispatchEvent(new CustomEvent("close", {}));
	}

	render() {
		return html`
			<svg @click=${this.close} id="close" viewBox="0 0 512 512"><use href="/application/assets/icons/times.svg#content" /></svg>
			${this.content}
		`;
	}
}

customElements.define("modal-component", Modal);

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
				display: grid;
				position: fixed;
				grid-template-columns: 1fr;
				top: 0;
				left: 0;
				width: 100vw;
				height: 100vh;
				background: var(--transparent-black);
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
		`;
	}

	close() {
		this.dispatchEvent(new CustomEvent("close", {}));
	}

	render() {
		return html`
			<section id="body">
				<section id="head">
					<span>${this.title}</span>
					<svg @click=${this.close} id="close" viewBox="0 0 512 512"><use href="/application/assets/icons/times.svg#content" /></svg>
				</section>
				${this.content}
			</section>
		`;
	}
}

customElements.define("modal-small", SmallModal);
