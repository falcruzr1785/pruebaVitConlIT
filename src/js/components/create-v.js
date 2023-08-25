import { LitElement, css, html} from 'lit'
import {ApiVehicle} from '../API/data.js'

export class createV extends LitElement {
  static get properties() {
    return {
      text: String,
      firstName: String,
      vin: String,
      marca: String
    };
  }

  constructor() {
    super();
    this.firstName = "";
    this.vin= "";
    this.marca
  }
  entradaDeText = (event) => {
    this.firstName = event.target.value;
    
  };
  entradaDeVin = async (event) => {//JTEGH20V930094412
    const marca  = this.shadowRoot.getElementById("id-marca");
    const modelo  = this.shadowRoot.getElementById("id-modelo");
    const year = this.shadowRoot.getElementById("id-year");
    const inputValue = event.target.value;
    
  if (inputValue.length >= 17) {
    try {
      const result = await ApiVehicle(inputValue);

      if ( result.Results[0] ) {
       
        marca.value = result.Results[0].Make;
        modelo.value = result.Results[0].Model;
        year.value = result.Results[0].ModelYear;
        console.log(`Año del modelo: ${result.Results[0].ModelYear}`);
      } else {
        console.log('Año del modelo no encontrado en la respuesta.');
      }
    } catch (error) {
      console.error('Hubo un error:', error);
    }
  } else {
    // Maneja el caso en que la longitud no sea suficiente
    console.log('Longitud insuficiente');
  }
  
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
          id="id-vin"
          @input=${this.entradaDeVin}
          @change=${this.handleVinChange}
          placeholder="NUMERO DE VIN"
        />
        <input type="text" id="id-marca" @input=${this.entradaDeText} placeholder="MARCA" />
        <input type="text" id="id-modelo" @input=${this.entradaDeText} placeholder="MODELO" />
        <input type="number" id="id-year" min="1900" max="2099" @input=${this.entradaDeText} placeholder="AÑO" />

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

  customElements.define('create-v', createV);

 
 