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
			<svg @click=${this.close} id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path id="content" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"/></svg>
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
					<svg @click=${this.close} id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!-- Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) --><path id="content" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"/></svg>
				</section>
				${this.content}
			</section>
		`;
	}
}

customElements.define("modal-small", SmallModal);
