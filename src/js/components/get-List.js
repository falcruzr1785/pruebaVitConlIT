import { LitElement, html, css } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import {GetDataProred} from '../API/server'

export class GetList extends LitElement {
  
  static get properties() {
    return {
      id : String,
      text: String,
      
    };
  }

  constructor() {
    super();
    this.loadData(); // Llama a una función para cargar los datos
    this.data;
    let idSelect = " ";
    globalThis.idSelect ='';
    this.tableClasses = {
      "my-table": true, // Agrega tus clases aquí
    };

   

    // Definimos las clases de las filas en función del índice
    this.rowClasses = (index) => ({
      "par-row": index % 2 === 0,
      "impar-row": index % 2 !== 0,
    });
  }
  loadData =  async () => {
     
    try {
      this.data = await GetDataProred();
      // Una vez que los datos estén disponibles, se asignarán a this.data
      // Ahora puedes actualizar tu componente para reflejar los datos
    } catch (error) {
      console.error('Error al cargar los datos:', error);
    }
  }

  
editarDatos = (id) => {
 
   this.idSelect = id;
  window.location.href = `/edit-Vehicle.html?id=${id}`;
  
}

crearPlantilla = (id) => {
    
  
  window.location.href = `/create-p.html?id=${id}`;
 
  }
  
 
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

  render() {
    return html`
      <div class="div-list">
      <div class="div-Title">
          <h1 class="title-list">Lista de vehículos registrados</h1>
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
                 <button id="btnEditar" class="btnEditar" @click=${() => this.editarDatos(item.id)}
                 data-id="${item.id}"
                 >Editar</button> 
                  </td>
                  <td>
                 <button  id="btnCrearP" class="btnEditar" @click=${() => this.crearPlantilla(item.id)}
                 data-id="${item.id}"
                 >Crear plantilla</button> 
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
