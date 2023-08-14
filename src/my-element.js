import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number },
    }
  }

  constructor() {
    super()
    this.docsHint = 'Click on the Vite and Lit logos to learn more'
    this.count = 0
  }

  render() {
    return html`
    <div class="container">
        <div class="icons">
          <a href="https://vitejs.dev" target="_blank">
            <img src=${viteLogo} class="logo" alt="Vite logo" />
          </a>
          <a href="https://lit.dev" target="_blank">
            <img src=${litLogo} class="logo lit" alt="Lit logo" />
          </a>
        </div>
        <slot></slot>
        <div class="card">
          <button @click=${this._onClick} part="button">
            count is ${this.count}
          </button>
          <button @click=${this._alerta} part="button">
            boton para ver alerta 
          </button>
        </div>
        <p class="read-the-docs">${this.docsHint}</p>
      </div>
      
    `;
  }
 
  _alerta(){
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      text: 'Operación completada exitosamente.',
    });
  }

  _onClick() {
    this.count++
  }

  static get styles() {
    return css`
      
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
    }

    .icons {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
    }

    .logo {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
    }

    `
  }
}

window.customElements.define('my-element', MyElement)
