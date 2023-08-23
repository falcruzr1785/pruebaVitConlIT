import { LitElement, css, html} from 'lit'


export class MyElement extends LitElement {
  static get properties() {
    return {
      text: String,
      firstName: String,
    };
  }

  constructor() {
    super();
    this.firstName = "";
  }
  entradaDeText = (event) => {
    this.firstName = event.target.value;
  };
  handleSubmit = () => {
    Swal.fire({
      icon: "success",
      title: "¡Éxito!",
      text: `Su nombre es: ${this.firstName}`,
      confirmButtonColor: "swalBtnColor",
      confirmButtonText: "Aceptar...",
    }).then(() => {});
  };

  static styles = css`
  .btn {
    font-weight: var(--font-weight, 100);
    background-color: absolute;
    margin: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    font-size: 18px; /* Cambia el tamaño de fuente para hacer el botón más grande */
    padding: 10px 20px; /* Agrega espaciado al botón */
  }
  input {
    width: 20%;
    position: center;
    origin: center;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: Arial, Helvetica, sans-serif;
    padding: 8px;
    display: block;
    margin-bottom: 10px;
  }
  .div-host {
    background-color: #f2f2f2;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    color: #333;
    width: 100%;
    box-sizing: border-box;
  }
  .title-NewVehicle {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 20px;
  }
  .selectNaviera {
    width: 22%;
    position: center;
    origin: center;
    margin: 0 auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    font-family: Arial, Helvetica, sans-serif;
    padding: 8px;
    display: block;
    margin-bottom: 10px;
  }
  .div-button {
    background-color: grey;
    border-radius: 8px;
    width: 100%;
    text-align: center;
    padding: 10px;
  }
  .div-Naviera-Datos{
    background-color: #f2f2f2;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
   
  `;
  render() {
    return html`
      <div class="div-host">
        <div class="div-Naviera-Datos">
        <div class="div-Title">
          <h1 class="title-NewVehicle">Datos del vehículo:</h1>
        </div>

        <input
          type="search"
          @input=${this.entradaDeText}
          placeholder="NUMERO DE VIN"
        />
        <input type="text" @input=${this.entradaDeText} placeholder="MARCA" />
        <input type="text" @input=${this.entradaDeText} placeholder="MODELO" />
        <input
          type="number"
          min="1"
          @input=${this.entradaDeText}
          placeholder="PRECIO"
        />
        </div>
        <!-- Naviera -->
        <div class="div-Naviera-Datos">
        <div class="div-Title">
            <h1 class="title-NewVehicle">Transporte:</h1>
          </div>
        <input
          type="number"
          min="1"
          @input=${this.entradaDeText}
          placeholder="Monto de Grúa"
        />
        <input
          type="number"
          min="1"
          @input=${this.entradaDeText}
          placeholder="Monto Barco"
        />
        <input
          type="number"
          min="1"
          @input=${this.entradaDeText}
          placeholder="Monto/Otro"
        />
         

          <select class="selectNaviera" name="navieras" id="naviera" required>
            <option disabled selected>Selecciona una naviera</option>
            <option value="northAtlantic">North Atlantic</option>
            <option value="atm">ATM</option>
            <option value="matus">Matus</option>

            <!-- @value=${this.entradaDeText} -->
          </select>
        </div>
        <div class="div-button">
          <button class="btn" @click=${this.handleSubmit}>Guardar</button>
        </div>
        <p>${this.firstName ? `First Name: ${this.firstName}` : ""}</p>
      </div>
    `;
  }
}

  customElements.define('my-element', MyElement);

 
 