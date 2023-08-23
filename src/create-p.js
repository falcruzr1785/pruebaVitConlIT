import { LitElement, html, css } from 'lit';
import { plantillasDatos } from '../public/plantillasDatos';
plantillasDatos.copartP();
export class CreateP extends LitElement {
  static get properties() {
    return {
      textP: String,
      firstName: String,
      id: String,
      lot: String,
      vin: String,
      marca: String,
      modelo: String,
      precio: Number,
      year: String,
      mGrua: Number,
      mBarco: Number,
      mOtro: Number,
      naviera: String,
      subasta: String,
      textP: String,
    };
  }

  constructor() {
    super();
    this.id = "editVehicle";
    this.lot = "124786";
    this.vin = "12345678965214741";
    this.marca = "Toyota";
    this.modelo = "Corolla";
    this.precio = "10000";
    this.year = "2010";
    this.mGrua = "125";
    this.mBarco = "1000";
    this.mOtro = "0";
    this.naviera = "ATM";
    this.subasta = "IAA";
    this.textP =
      "SELECIONE [Grúa] [Barco] [Deposito internacional]\n\nAQUÍ SE DEPLEGARÁ LA PLANTILLA CON LAS INDICACIONES DEL DEPOSITO";

  
  }




  // Agrega un evento que se ejecuta cuando cambia la selección de los botones de radio
  handleRadioChange(event) {
    const selectedOption = event.target.value;

    // Aquí puedes actualizar el texto en función de la opción seleccionada
    if (selectedOption === "grua") {
      this.textP = plantillasDatos[this.naviera.toLowerCase() + "P"](
        this.vin,
        this.mGrua,
        selectedOption
      );
    } else if (selectedOption === "barco") {
      this.textP = plantillasDatos[this.naviera.toLowerCase() + "P"](
        this.vin,
        this.mBarco,
        selectedOption
      );
    } else if (selectedOption === "wire" && this.subasta === "IAA") {
      this.textP = plantillasDatos.iaaP(this.lot, this.precio);
    } else if (selectedOption === "wire" && this.subasta === "COPART") {
      this.textP = plantillasDatos.copartP(this.lot, this.precio);
    }
  }
  ///
  copiarAlPortapapeles2 = async (event) => {
    // this.textP = event.target.value;
    const textCopiado = event.target.value;

    try {
      await navigator.clipboard.writeText(textCopiado);
      Swal.fire({
        icon: "success",
        title: "¡Texto copiado!",
        text: "El texto se ha copiado al portapapeles.",
      });
    } catch (err) {
      console.error("Error al copiar al portapapeles: ", err);
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "No se logró copiar el texto.",
      });
    }
  };
  ///
  copiarAlPortapapeles() {
    const textarea = this.shadowRoot.getElementById("input-p");
    const textCopiado = textarea.value;

    try {
      navigator.clipboard
        .writeText(textCopiado)
        .then(() => {
          Swal.fire({
            icon: "success",
            title: "¡Texto copiado!",
            text: "El texto se ha copiado al portapapeles.",
          });
        })
        .catch((err) => {
          console.error("Error al copiar al portapapeles: ", err);
          Swal.fire({
            icon: "error",
            title: "¡Error!",
            text: "No se logró copiar el texto.",
          });
        });
    } catch (err) {
      console.error("Error al copiar al portapapeles: ", err);
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "No se logró copiar el texto.",
      });
    }
  }

  ///

  static styles = css`
    .btn-create-plantilla {
      font-weight: var(--font-weight, 100);
      background-color: #bcdc69;
      margin: 20px;
      box-shadow: 0 4px 8px rgba(255, 241, 241, 0.1);
      border-radius: 8px;
      font-size: 18px;
      color: #fff1f1;
      padding: 10px 20px;
    }

    textarea {
      text-align: left;
      word-wrap: break-word; /* Permite que el texto se envuelva automáticamente */
      max-height: 1300px; /* Establece la altura máxima para el input */
      height: 500px; /* Rellena todo el espacio de arriba hacia abajo */
      width: 700px;
      margin: 0 auto;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      font-family: Arial, Helvetica, sans-serif;
      padding: auto;
      display: block;
      margin-bottom: 10px;
      position: relative;
    }
    .div-host {
      background-color: #f2f2f2;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      padding: 20px;
      color: #333;
      width: 100%;
      height: auto;
      box-sizing: border-box;
    }
    .title-seccion {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Fuentes modernas */
        font-size: 24px; /* Tamaño del título */
        font-weight: bold;
        color: #333; /* Color de texto */
        text-align: center;
        text-transform: uppercase; /* Cambiar a mayúsculas */
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2); /* Sombra suave */
        margin-bottom: 20px;
        transition: color 0.3s ease-in-out; /* Transición de color suave */
      }
    .label-seccion {
        font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 20px;
      position: center;
    }

    /* Estilos personalizados para los inputs tipo radio */
    .radio-p {
        
        appearance: none;
        width: 12px;
        height: 12px;
        background-color: transparent;
        border: 2px solid #333;
        border-radius: 50%;
        outline: none;
        cursor: pointer;
        margin: 0;
        
      }
    
    .radio-group {
        display: flex;
        align-items: center;
        gap: 15px; /* Espaciado horizontal entre elementos */
      }

      .radio-label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #333;
        color: #fff;
        border-radius: 50%;
        cursor: pointer;
        z-index: 0; /* Colocar detrás del botón de radio real */
      }

      /* Estilo para cuando el botón de radio está marcado */
      .radio-p:checked + .radio-label {
        background-color: #333; /* Cambiar el color de fondo cuando está marcado */
        color: #fff;
      }
    
      .radio-container {
        position: relative;
        width: 30px; /* Ancho del círculo */
        height: 30px; /* Altura del círculo */
      }


    /* Estilos para ocultar el input tipo radio */
    .radio-p::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 10px; /* Tamaño del punto central cuando está marcado */
      height: 10px;
      background-color: #fff; /* Color del punto central cuando está marcado */
      border-radius: 50%; /* Hace que el punto central sea circular */
      opacity: 0; /* Inicialmente oculto */
      transition: opacity 0.2s ease-in-out;
    }

    .radio-p:hover {
        background-color: #555; /* Color de fondo cuando se hace hover */
        border-color: #555; /* Color del borde cuando se hace hover */
      }

    /* Estilos para mostrar el punto central cuando el input tipo radio está marcado */
    .radio-p:checked::before {
      opacity: 1;
    }
    
   
    


  `;
  render() {
    return html`
      <div class="div-host">
        <div class="div-Naviera-Datos">
          <div class="div-Title">
            <h1 class="title-seccion">
                Plantilla de pago</h1>
                 <label class="label-seccion">
                Subasta: ${this.subasta}
                 y Naviera: ${this.naviera}</label>
            <!-- ... titulo -->
           
            

            <div class="radio-group">

            <label class="title-seccion">Tipo de pago:</label>

            <div class".radio-container">
              <input
                id="TS-grua"
                name="radio-TS"
                type="radio"
                class="radio-p"
                value="grua"
                @change=${this.handleRadioChange} 
                ?checked=${
                  this.textP === plantillasDatos.naP(this.vin, this.mGrua)
                }
              />
              <label class="label-seccion"  for="TS-grua" class="form-check-label"
                >Grua </label>
           
                </div>
                <div class".radio-container">
              <input
                id="TS-barco"
                name="radio-TS"
                type="radio"
                class="radio-p"
                value="barco"
                @change=${this.handleRadioChange}
                 ?checked=${
                   this.textP === plantillasDatos.atmP("feo", this.mBarco)
                 } 
              />
              <label class="label-seccion" for="TS-barco" class="form-check-label"
                >Barco</label>
                </div>

                <div class".radio-container">
                <input
                id="TS-barco"
                name="radio-TS"
                type="radio"
                class="radio-p"
                value="wire"
                @change=${this.handleRadioChange}
                 ?checked=${
                   this.textP === plantillasDatos.copartP("subasta", 12)
                 } 
              />
              <label class="label-seccion" for="TS-wire" class="form-check-label"
                >Pago subasta</label>
            </>
            </div>
  </div>
            <!-- ... -->
          </div>

          <div class="input-container">
            <textarea id="input-p" .value=${this.textP} class="input-p" > 
            
            </textarea
            >
            <button
              class="btn-create-plantilla"
              @click=${() => this.copiarAlPortapapeles()}
            >
              Copiar al Portapapeles
            </button>
          </div>
        </div>

        <p>${this.textP ? `A la cuenta de: ${this.textP}` : ""}</p>
      </div>
    `;
  }
}

  customElements.define('create-p', CreateP);
/////////////////////////



