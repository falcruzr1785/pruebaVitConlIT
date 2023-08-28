import { LitElement, css, html} from 'lit'
import {ApiVehicle} from '../API/data.js'

export class createV extends LitElement {
  static get properties() {
    return {
      text: String,
      firstName: String,
      vin: String,
      marca: String,
      modelo: String,
      year: String,
      precio: String,
      naviera: String,
      montoGrua: String,
      montoBarco: String,
      montoOtro: String,
    };
  }
  

  constructor() {
    super();
    this.firstName = '';
    this.vin = '';
    this.marca = '';
    this.modelo = '';
    this.year = '';
    this.precio = '';
    this.naviera = '';
    this.montoGrua = '';
    this.montoBarco = '';
    this.montoOtro = '';

  }
  entradaDeText = (event) => {
  this[`${event.target.id}`] = event.target.value;
  console.log(this[`${event.target.id}`]);
  };
  entradaDeVin = async (event) => {//JTEGH20V930094412
    const vin  = this.shadowRoot.getElementById("vin");
    const marca  = this.shadowRoot.getElementById("marca");
    const modelo  = this.shadowRoot.getElementById("modelo");
    const year = this.shadowRoot.getElementById("year");
    const inputValue = event.target.value;
    
  if (inputValue.length >= 17) {
    try {
      const result = await ApiVehicle(inputValue);

      if ( result.Results[0] ) {
        this.vin = vin.value;
        this.marca = result.Results[0].Make;
        this.modelo = result.Results[0].Model;
        this.year = result.Results[0].ModelYear;
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
  guardarDatos = () => {
  // Crea un objeto con los datos a mostrar en el cuadro de diálogo
  const vehicleData = {
    vin: this.vin,
    marca: this.marca,
    modelo: this.modelo,
    year: this.year,
    precio: this.precio,
    naviera: this.naviera,
    montoGrua: this.montoGrua,
    montoBarco: this.montoBarco,
    montoOtro: this.montoOtro,
  };

  const camposObligatorios = ["vin","marca", "modelo", "year", "precio", "naviera", "montoGrua", "montoBarco"];
  const campoFaltante = camposObligatorios.find((campo) => !vehicleData[campo]);
  console.log( `el vin dentro de guradar datos`,vehicleData.vin);
  console.log("Campos Obligatorios:", camposObligatorios); // Agrega este log para verificar los campos obligatorios.
  console.log("Campo Faltante:", campoFaltante); // Agrega este log para verificar el campo faltante.

  if (campoFaltante) {
    const inputCampo = this.shadowRoot.getElementById(campoFaltante);
    if (inputCampo) {
      inputCampo.focus();
    }
    Swal.fire({
      icon: 'warning',
      title: 'Falta ingresar un dato',
      text: 'Por favor, completa todos los campos obligatorios.',
      timer: 2000,
      showConfirmButton: false,
    });
  } else {
    const vehicleDataString = JSON.stringify(vehicleData, null, 2);
    Swal.fire({
      icon: 'success',
      title: '¡Éxito!',
      html: `Datos del vehículo:<br><pre>${vehicleDataString}</pre>`,
      confirmButtonColor: 'swalBtnColor',
      confirmButtonText: 'Aceptar...',
    }).then(() => {});
  }
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
          id="vin"
          @input=${this.entradaDeVin}
          @change=${this.handleVinChange}
          placeholder="NUMERO DE VIN"
        />
        <input type="text" id="marca" @input=${this.entradaDeText} placeholder="MARCA" required />
        <input type="text" id="modelo" @input=${this.entradaDeText} placeholder="MODELO" required />
        <input type="number" id="year" min="1900" max="2099" @input=${this.entradaDeText} placeholder="AÑO" required />

        <input
          type="number"
          id="precio" 
          min="1"
          @input=${this.entradaDeText}
          placeholder="PRECIO"
          required
        />
        </div>
        <!-- Naviera -->
        <div class="div-Naviera-Datos">
        <div class="div-Title">
            <h1 class="title-NewVehicle">Transporte:</h1>
          </div>
        <input
          type="number"
          id="montoGrua" 
          min="1"
          @input=${this.entradaDeText}
          placeholder="Monto de Grúa"
          required
        />
        <input
          type="number"
          id="montoBarco" 
          id="id-" 
          min="1"
          @input=${this.entradaDeText}
          placeholder="Monto Barco"
          required
        />
        <input
          type="number"
          id="montoOtro" 
          min="1"
          @input=${this.entradaDeText}
          placeholder="Monto/Otro"

        />
         

          <select class="selectNaviera" name="navieras" id="naviera" @change=${this.entradaDeText} required>
            <option disabled selected>Selecciona una naviera</option>
            <option value="northAtlantic">North Atlantic</option>
            <option value="atm">ATM</option>
            <option value="matus">Matus</option> 
          </select>
        </div>
        <div class="div-button">
          <button class="btn" @click=${this.guardarDatos}>Guardar</button>
        </div>
        <p>${this.marca ? `Marca: ${this.marca}` : ""}</p>
        <p>${this.montoGrua ? `Monto Grua: ${this.montoGrua}` : ""}</p>
        <p>${this.montoBarco ? `Monto Barco: ${this.montoBarco}` : ""}</p>
        <p>${this.naviera ? `Naviera: ${this.naviera}` : ""}</p>
      </div>
    `;
  }
}

  customElements.define('create-v', createV);

