import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { animate, fadeOut } from '@lit-labs/motion';


export class GetList extends LitElement {
  static styles = css`
  .table-list {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 40px;
  }

  .btnEditar {
    font-weight: bold;
    background-color: #007bff; /* Color de fondo azul */
    color: #fff; /* Color del texto blanco */
    border: none;
    border-radius: 4px;
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
  }

  .btnEditar:hover {
    background-color: #0056b3; /* Cambia el color de fondo al pasar el mouse */
  }

  td,
  th {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: center;
  }

  th {
    background-color: #f2f2f2; /* Color de fondo gris claro para encabezados */
    font-weight: bold;
  }

  .par-row {
    background-color: #f5f5f5; /* Color de fondo gris claro para filas pares */
  }

  .impar-row {
    background-color: #ffffff; /* Color de fondo blanco para filas impares */
  }

  .div-list {
    background-color: #fff; /* Color de fondo blanco */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden; /* Para ocultar el desbordamiento horizontal en pantallas pequeñas */
  }

  .title-list {
    margin: 20px 0;
    text-align: center;
    font-family: 'Arial', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: #333; /* Color de texto oscuro */
  }
`;

  constructor() {
    super();
    this.data = [
       
      { id: '1',
        dateBuy: new Date(),
        vin: "22222222222",
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2010,
        naviera: "ATM",
        cliente: "Pedro",
        arribo: false,
      },
      {
        
        id: '1',
        dateBuy: new Date(),vin: "42",
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2010,
        naviera: "ATM",
        cliente: "Pedro",
        arribo: false,
      },
      {
        id: '1',
        dateBuy: new Date(),
        vin: "344",
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2010,
        naviera: "ATM",
        cliente: "Pedro",
        arribo: false,
      },
      {
        id: '1',
        dateBuy: new Date(),
        vin: "2",
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2010,
        naviera: "ATM",
        cliente: "Pedro",
        arribo: false,
      },
      {
        id: '1',
        dateBuy: new Date(),
        vin: "5",
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2010,
        naviera: "ATM",
        cliente: "Pedro",
        arribo: true,
      },
      {
        id: '1',
        dateBuy: new Date(),
        vin: "6",
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2010,
        naviera: "ATM",
        cliente: "Pedro",
        arribo: false,
      },
      
    ]; // Aquí deberías cargar los datos de tu JSON

    // crearPlantila = (v) => {
    //   if(v){
    //     const textP = v;
    //   }
      
    // };


    this.tableClasses = {
      "my-table": true, // Agrega tus clases aquí
    };

    // Definimos las clases de las filas en función del índice
    this.rowClasses = (index) => ({
      "par-row": index % 2 === 0,
      "impar-row": index % 2 !== 0,
    });
  }

  render() {
    return html`
      <div class="div-list">
      <div class="div-Title">
          <h1 class="title-list">Lista de vehículos</h1>
        </div>
        <table class="table-list">
          <thead class="head-list">
            <tr>
              <th>Fecha de compra</th>
              <th>VIN</th>
              <th>Marca</th>
              <th>Modelo</th>
              <th>Año</th>
              <th>Naviera</th>
              <th>Cliente</th>
              <th>Arribo</th>
              <th>Editar</th>
              <th>Plantilla</th>
            </tr>
          </thead>

          <tbody>
            ${repeat(
              this.data,
              (item) => item.vin, // Cambia por una propiedad única de tus datos
              (item, index) => html`
                <tr
                  class=${classMap(this.rowClasses(index))}
                  style=${styleMap({
                    transform: `translateY(${index * 10}px)`,
                  })}
                >  
                  <td>${item.dateBuy}</td>
                  <td>${item.vin}</td>
                  <td>${item.marca}</td>
                  <td>${item.modelo}</td>
                  <td>${item.ano}</td>
                  <td>${item.naviera}</td>
                  <td>${item.cliente}</td>
                  <td>${item.arribo ? "Sí" : "No"}</td>
                  <td>
                    <!-- <button  class="btnEditar" @click=${() => this.editRow(item)}>Editar</button> -->
                  </td>
                  <td>
                    <!-- <button  class="btnEditar" @click=${() => this.editRow(item)}>Crear plantilla</button> -->
                  </td>
                </tr>
              `
            )}
          </tbody>
        </table>
      </div>
    `;
  } ///cierre de render
}///cierre de clases
  window.customElements.define('get-list', GetList);
