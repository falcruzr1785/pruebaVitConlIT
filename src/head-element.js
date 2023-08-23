import {html, css, LitElement} from "lit";

export class HeadElement extends LitElement {
  static styles = css`
    /* Estilos CSS para el header */
    .menu {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #333; /* Fondo gris oscuro */
      padding: 20px 40px;
      color: #ccc; /* Texto gris claro */
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s, color 0.3s; /* Transiciones suaves para el fondo y el color del texto */
    }

    /* Estilos para los títulos */
    .menu-item a.menu-link {
      font-family: "Roboto", sans-serif; /* Cambia la fuente a una fuente moderna */
      font-size: 18px; /* Aumenta el tamaño de fuente para los títulos */
      font-weight: 700; /* Peso de fuente más grueso para hacerlos destacar */
      color: #3; /* Cambia el color del texto de los títulos */
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2); /* Agrega una sombra suave al texto */
    }

    /* Transición adicional para los títulos */
    .menu-item a.menu-link:hover {
      color: #f39c12; /* Cambiar color del enlace al pasar el ratón por encima */
      transform: scale(1.05); /* Hacer que los títulos se agranden un poco */
      transition: color 0.3s ease-in-out, transform 0.2s ease-in-out; /* Ajustar las propiedades de transición */
    }
    .menu-link {
      text-decoration: none;
      color: inherit;
      transition: color 0.3s ease-in-out; /* Transición suave para el color del enlace */
    }

    .menu-link:hover {
      color: #f39c12; /* Cambiar color del enlace al pasar el ratón por encima */
    }
  `;

  render() {
    return html`
      <div class="menu">
        <div class="menu-item">
          <a href="/index.html" class="menu-link">Inicio</a>
        </div>
        <div class="menu-item">
          <a href="/create-V.html" class="menu-link">Guardar vehículo</a>
        </div>

        <div class="menu-item">
          <a href="/create-p.html" class="menu-link">Plantilla Depósito</a>
        </div>
      </div>
    `;
  }
}

window.customElements.define('head-element', HeadElement);
