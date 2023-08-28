///codigo JS llamado edit-Vehicle.js 
//QUE DEBE TOMAR EL ID desde get-List.js Y RELLENAR LOS CAMPOS NECESARIOS para editar
//el ID de cliente lo toma de los valores del vehiculo

import { LitElement, html, css } from 'lit';
import {GetDataProredID, updateDatos} from '../API/server'
import {GetDataTodosClientes, GetDataClienteID} from '../API/clientes'

export class EditVehicle extends LitElement {
  static get properties() {
    return {
      
      idCliente: String,
      cedula: String,
      nombreCliente: String,
      
      id: String,
      lot: String,
      vin: String,
      marca: String,
      modelo: String,
      mPrecio: Number,
      year: String,
      mGrua: Number,
      mBarco: Number,
      mOtro: Number,
      naviera: String,
      subasta: String,
      arribo: Boolean
    };
  }

  constructor() {
    super();
    // Obtener el ID de la URL al inicializar la página
   this.id = this.obtenerIdDeUrl();
   this.loadData(); // Llama a una función para cargar los datos
 
   this.data;
   this.dataCliente;
   this.idCliente;
  }

  // Método para obtener el ID de la URL
  obtenerIdDeUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }

  loadDataClienteID =  async (idCliente) => {

    try {
      console.log('Datos del cliente antes de asignar:', await GetDataClienteID(idCliente));

    this.dataCliente = await GetDataClienteID(this.idCliente);
    this.nombreCliente = this.dataCliente.nombreCliente;
    this.cedula = this.dataCliente.cedula;
    this.idCliente = this.dataCliente.idCliente;
      
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  }
 
  loadDataTodosClientes =  async () => {

    try {
      console.log('Datos del cliente antes de asignar:', await GetDataTodosClientes());
      ////GetDataTodosClientes devuelve todos los datos
    this.dataTodosClientes = await  GetDataTodosClientes();
      
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  }

  loadData =  async () => {
    console.log('id del vehiculo:',this.id);
    try {
      const data = await GetDataProredID(this.id);
      console.log('id del cliente desde la data del vehiculo',data.idCliente);

      if (data.idCliente) {
        this.idCliente = data.idCliente;
        // Llama a loadDataCliente con this.idCliente
        console.log('ID del cliente antes de llamar a loadDataCliente:', this.idCliente);

        this.loadDataClienteID(this.idCliente);
        this.loadDataTodosClientes();
      } else {
        console.error('El ID del cliente no se encontró en los datos obtenidos.');
      }


      this.vin = data.vin;
      this.year = data.year;
      this.marca = data.marca;
      this.modelo = data.modelo;
      this.mPrecio= data.mPrecio,
      this.mGrua = data.mGrua;
      this.mBarco = data.mBarco;
      this.mOtro = data.mOtro;
      this.naviera = data.naviera;
      this.arribo = data.arribo;
      this.nombreCliente = data.nombreCliente;
      this.idCliente = data.idCliente;
     
      console.log('idCliente desde loadDatacliente this.idCliente: :', this.idCliente); // Utiliza this.idCliente aquí
      

    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  }

  entradaDeText = (event) => {
    this[`${event.target.id}`] = event.target.value;
   
    };


 //// accion del boton 
 handleSubmit = async () => {

  const vehicleData = {
    vin: this.vin,
    marca: this.marca,
    modelo: this.modelo,
    year: this.year,
    precio: this.mPrecio,
    naviera: this.naviera,
    montoGrua: this.mGrua,
    montoBarco: this.mBarco,
    montoOtro: this.mOtro,
  };
/////
  const camposObligatorios = ["vin","marca", "modelo", "year", "precio", "naviera", "montoGrua", "montoBarco"];
  const campoFaltante = camposObligatorios.find((campo) => !vehicleData[campo]);
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
    icon: "question",
    title: "EDITAR",
    html: `Datos del vehículo:<br><pre>${vehicleDataString}</pre>`,
    confirmButtonColor: "swalBtnColor",
    confirmButtonText: "Confirmar los cambios",
  }).then(async (result) => {
    if (result.isConfirmed) {
      
      try {
        const updatedData = await updateDatos(vehicleData, this.id);
       
      } catch (error) {
        console.error('Error al actualizar los datos:', error);
      }
    }
  });
}
/////
};

 ////
      
  handleSubmitVin = (vehicle) => {
    const inputVin = this.shadowRoot.getElementById("input-vin");
    const btnEditVin = this.shadowRoot.getElementById("btnEditVin");
    Swal.fire({
      icon: "warning",
      title: "Está seguro(a) de editar el numero de vin?",
      text: `Vehiculo: ${this.marca}, , ${this.modelo}`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Editar",
      denyButtonText: `No editar`,
    }).then((result) => {
      if (result.isConfirmed) {
        inputVin.removeAttribute("readonly");
        btnEditVin.style.display = 'none';
        inputVin.focus();
      } else if (result.isDenied) {
        inputVin.setAttribute("readonly", "readonly");
      }
    });
  };

  static styles = css`
    .btn {
      font-weight: var(--font-weight, 100);
      background-color: #d81212;
      margin: 20px;
      box-shadow: 0 4px 8px rgba(255, 241, 241, 0.1);
      border-radius: 8px;
      font-size: 18px;
      color: #fff1f1;
      padding: 10px 20px;
    }
    .btnVin {
      font-weight: var(--font-weight, 100);
      background-color: #cec9c9;
      position: absolute;
      top: 8px;
      right: 8px; /* Alinea el botón a la derecha del contenedor */
      border-radius: 8px;
      font-family: Arial, Helvetica, sans-serif;
      color: #fff1f1;
      padding: 3px 10px; /* Añade espacio interno al botón para que no esté demasiado cerca del texto */
    }
    
    .div-input-vin {
      origin: center;
      position: relative;
      display: inline-block; /* Cambia el comportamiento del contenedor para permitir que los elementos en línea se superpongan */
    }
    input {
      width: auto;
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
    .title-2 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .select {
      width: auto;
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
      background-color: #d81212;
      border-radius: 8px;
      width: 100%;
      text-align: center;
      padding: 10px;
    }
    .div-Naviera-Datos {
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
            <h1 class="title-NewVehicle">Datos del vehículo a editar:</h1>
          </div>
          <div class="div-input-vin">
            <input
              placeholder="S/N"
              id="input-vin"
              type="search"
              .value=${this.vin}
              readonly="readonly"
              @input=${this.entradaDeText}
              title="NUMERO DE VIN"
            />
            <button
              id="btnEditVin"
              class="btnVin"
              @click=${this.handleSubmitVin}
            >
              Editar Vin
            </button>
          </div>
          <input
            type="text"
            id="marca"
            .value=${this.marca}
            @input=${this.entradaDeText}
            placeholder="SIN MARCA"
          />
          <input
            type="text"
            id="modelo"
            .value=${this.modelo}
            @input=${this.entradaDeText}
            placeholder="SIN MODELO"
          />
          <input
            type="number"
            id="year"
            min="1900"
            max="2099"
            @input=${this.entradaDeText}
            placeholder="AÑO"
            required
          />
          <input
            type="number"
            id="mPrecio"
            .value=${this.mPrecio}
            min="1"
            @input=${this.entradaDeText}
            placeholder="SIN PRECIO"
          />
        </div>
        <!-- Naviera -->
        <div class="div-Naviera-Datos">
          <div class="div-Title">
            <h1 class="title-2">Transporte:</h1>
          </div>
          <input
            type="number"
            id="mGrua"
            .value=${this.mGrua}
            min="1"
            @input=${this.entradaDeText}
            placeholder="Sin Monto de Grúa"
          />
          <input
            type="number"
            id="mBarco"
            .value=${this.mBarco}
            min="1"
            @input=${this.entradaDeText}
            placeholder="Sin Monto Barco"
          />
          <input
            type="number"
            id="mOtro"
            .value=${this.mOtro}
            min="1"
            @input=${this.entradaDeText}
            placeholder="Sin otros montos registrados"
          />

          <select
            class="select"
            name="navieras"
            id="naviera"
            required
            @change=${this.entradaDeText}
          >
            <option value="atm" ?selected="${this.naviera === "atm"}">
              ATM
            </option>

            <option value="matus" ?selected="${this.naviera === "matus"}">
              Matus
            </option>

            <option
              value="northAtlantic"
              ?selected="${this.naviera === "northAtlantic"}"
            >
              North Atlantic
            </option>
          </select>
        </div>
        <!-- /////cliente -->
        <div class="div-Naviera-Datos">
        <div class="div-Title">
            <h1 class="title-2">Cliente:</h1>
          </div>
        
          <select
  class="select"
  name="clientes"
  id="clientes"
  required
  @change=${this.entradaDeText}
>
  ${Array.isArray(this.dataTodosClientes) ? this.dataTodosClientes.map((cliente) => html`
    <option value="${cliente.nombreCliente}" ?selected="${this.nombreCliente === cliente.nombreCliente}">
      ${cliente.nombreCliente}
    </option>
  `) : html`
    <option value="" disabled selected>No hay clientes disponibles</option>
  `}
</select>





          <!-- <select
            class="select"
            name="clientes"
            id="clientes"
            required
          ///  @change=${this.entradaDeText} 
          >
            <option value="Fred" ?selected="${this.nombreCliente === ""}">
            ${this.nombreCliente}
            </option>

            <option value="Estefami" ?selected="${this.nombreCliente === ""}">
            Estefani
            </option>

            <option
              value="Fred"
              ?selected="${this.nombreCliente === "Fred"}"
            >
            ${this.nombreCliente}
            </option>
            </select> -->
        </div>

        <!-- /////fin cliente -->
        <div class="div-button">
          <button class="btn" @click=${this.handleSubmit}>Editar</button>
        </div>
        <p>${this.firstName ? `First Name: ${this.firstName}` : ""}</p>
      </div>
    `;
  }
}

  customElements.define('edit-vehicle', EditVehicle);
/////////////////////////




