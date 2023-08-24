import { LitElement, html, css } from 'lit';


export class EditVehicle extends LitElement {
  static get properties() {
    return {
      
      text: String,
      firstName: String,
    };
  }

  constructor() {
    super();
    this.id = 'editVehicle';
    this.vin = "12345678965214741";
    this.marca = "Toyota";
    this.modelo = "Corolla";
    this.precio = "10000";
    this.year = "2010";
    this.mGrua = "125";
    this.mBarco = "1000";
    this.mOtro = "0";
    this.naviera = "ATM";
  }
  entradaDeText = (event) => {
    this.firstName = event.target.value;
  };
  handleSubmit = () => {
    Swal.fire({
      icon: "success",
      title: "¡Éxito!",
      text: `Nuevos datos: 
      Vin: ${this.vin}, Marca: ${this.marca}, Model: ${this.modelo},
      Precio: ${this.precio}, Año: ${this.year}, Grúa: ${this.mGrua}, Barco: ${this.mBarco},
      Otro monto: ${this.mOtro}, Naviera: ${this.naviera}`,
      confirmButtonColor: "swalBtnColor",
      confirmButtonText: "Aceptar...",
    }).then((result) => {

        const res =[{///miestras se crea la configuracion en el servidor
            status: true,
    }]
      if (result.isConfirmed && res.status) {
        inputVin.removeAttribute("readonly");
        btnEditVin.style.display = 'none';
        inputVin.focus();
      } else if (result.isDenied) {
        inputVin.setAttribute("readonly", "readonly");
      }

    });
  };
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
    .title-NewVehicle {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    .selectNaviera {
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
          
            <h1 class="title-NewVehicle"> Datos del vehículo a editar: </h1>
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
            <button id='btnEditVin' class="btnVin" @click=${this.handleSubmitVin}>
              Editar Vin
            </button>
          </div>
          <input
            type="text"
            .value=${this.marca}
            @input=${this.entradaDeText}
            placeholder="SIN MARCA"
          />
          <input
            type="text"
            .value=${this.modelo}
            @input=${this.entradaDeText}
            placeholder="SIN MODELO"
          />
          <input
            type="number"
            .value=${this.precio}
            min="1"
            @input=${this.entradaDeText}
            placeholder="SIN PRECIO"
          />
        </div>
        <!-- Naviera -->
        <div class="div-Naviera-Datos">
          <div class="div-Title">
            <h1 class="title-NewVehicle">Transporte:</h1>
          </div>
          <input
            type="number"
            .value=${this.mGrua}
            min="1"
            @input=${this.entradaDeText}
            placeholder="Sin Monto de Grúa"
          />
          <input
            type="number"
            .value=${this.mBarco}
            min="1"
            @input=${this.entradaDeText}
            placeholder="Sin Monto Barco"
          />
          <input
            type="number"
            .value=${this.mOtro}
            min="1"
            @input=${this.entradaDeText}
            placeholder="Sin otros montos registrados"
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
          <button class="btn" @click=${this.handleSubmit}>Editar</button>
        </div>
        <p>${this.firstName ? `First Name: ${this.firstName}` : ""}</p>
      </div>
    `;
  }
}

  customElements.define('edit-vehicle', EditVehicle);
/////////////////////////




