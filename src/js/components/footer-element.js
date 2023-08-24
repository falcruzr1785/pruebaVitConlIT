import { html, css, LitElement } from 'lit';

export class FooterElement extends LitElement {
  static styles = css`
    /* Estilos CSS para el footer */
    .footer {
      position: sticky;
      bottom: 0;
      top: 110px;
  left: 0;
      background-color: #f8f9fa; /* Fondo claro */
      color: #333; /* Texto oscuro */
      padding: 20px 0;
      text-align: center;
      font-family: Arial, sans-serif;
      border-top: 5px solid #ccc; /* Borde superior de color gris claro */
      border-bottom: 1px solid #ccc; /* Borde inferior de color gris claro */
    }
    
    /* Añadir separación vertical entre enlaces y botones */
    .footer a,
    .btn {
      margin: 8px; /* Márgenes de 8px alrededor de enlaces y botones */
      display: inline-block; /* Para que los elementos no ocupen toda la anchura */
    }
    
    .footer a {
      text-decoration: none;
      color: #007bff; /* Enlaces en color azul brillante */
      transition: color 0.3s;
    }
    
    .footer a:hover {
      color: #0056b3; /* Cambio de color al pasar el ratón por encima de los enlaces */
    }
    
    .btn {
      padding: 10px 20px;
      background-color: #007bff; /* Fondo de botones azul brillante */
      color: #fff; /* Texto de botones en blanco */
      text-decoration: none;
      border-radius: 5px;
      transition: background-color 0.3s;
      cursor: pointer;
    }
    
    .btn:hover {
      background-color: #0056b3; /* Cambio de color al pasar el ratón por encima de los botones */
    }
  `;

  render() {
    return html`
        <div class="footer">
        <button class="btn" @click=${() => this.openLink('https://www.autowini.com/')}>AutoWini</button>
        <button class="btn" @click=${() => this.openLink('https://www.iaai.com/')}>IAAI</button>
        <button class="btn" @click=${() => this.openLink('https://www.copart.com/')}>Copart</button>
      </div>

    `;
  }
  openLink(url) {
    window.open(url, '_blank');
  }
}

window.customElements.define('footer-element', FooterElement)
