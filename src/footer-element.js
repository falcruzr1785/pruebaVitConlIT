import { html, css, LitElement } from 'lit';

export class FooterElement extends LitElement {
  static styles = css`
    /* Estilos CSS para el footer */
    footer {
      background-color: #333;
      color: white;
      padding: 20px;
      text-align: center;
      position: absolute;
      bottom: 0;
      left: 0; /* Asegura que el footer se extienda hasta la izquierda */
      width: 100%;
    }
  `;

  render() {
    return html`
      <footer>
        <p>© 2023 Todos los derechos reservados.</p>
      </footer>
    `;
  }
}

window.customElements.define('footer-element', FooterElement)
