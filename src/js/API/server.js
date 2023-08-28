



const jsonData =[
  {
    "id": "0",
    "vin": "1717",
    "nombreCliente": "Fred", 
    "idCliente": "2",
    "dateBuy": "2023-08-22T12:34:56.789Z",
    "marca": "Toyota",
    "modelo": "Corolla",
    "year": 2010,
    "mPrecio": 2100,
    "arribo": false,
    "mGrua": 300.10,
    "mBarco": 1275.25,
    "mOtro": 12,
    "naviera": "ATM"
  },
  {
    "id": "1",
    "dateBuy": "2023-08-22T12:34:56.789Z",
    "vin": "42",
    "marca": "Toyota",
    "modelo": "Corolla",
    "ano": 2010,
    "naviera": "ATM",
    "nombreCliente": "Pedro",
    "idCliente": "2",
    "arribo": false
  },
  {
    "id": "2",
    "dateBuy": "2023-08-22T12:34:56.789Z",
    "vin": "JTEGH20V930094412",
    "marca": "Toyota",
    "modelo": "Corolla",
    "ano": 2010,
    "naviera": "ATM",
    "nombreCliente": "Pedro",
    "idCliente": "2",
    "arribo": false
  },
  {
    "id": "3",
    "dateBuy": "2023-08-22T12:34:56.789Z",
    "vin": "2",
    "marca": "Toyota",
    "modelo": "Corolla",
    "ano": 2010,
    "naviera": "ATM",
    "nombreCliente": "Pedro",
    "idCliente": "3",
    "arribo": false
  },
  {
    "id": "5",
    "dateBuy": "2023-08-22T12:34:56.789Z",
    "vin": "5",
    "marca": "Toyota",
    "modelo": "Corolla",
    "ano": 2010,
    "naviera": "ATM",
    "nombreCliente": "Pedro",
    "idCliente": "2",
    "arribo": true
  },
  {
    "id": "6",
    "dateBuy": "2023-08-22T12:34:56.789Z",
    "vin": "6",
    "marca": "Toyota",
    "modelo": "Corolla",
    "ano": 2010,
    "naviera": "atm",
    "nombreCliente": "Fred",
    "idCliente": "3",
    "arribo": false
  }
]




////updateDatos
async function updateDatos(vehicleData,id) {
  //vehicleData  contiene un objeto con los campos 

  try {
 const index = jsonData.findIndex( (veh) => veh.id === id)
  
  // Si encontramos un vehículo con el mismo ID, lo retornamos
  if (index !== -1) {
    // Actualiza los campos relevantes del vehículo
   jsonData[index].marca = vehicleData.marca;
   jsonData[index].modelo = vehicleData.modelo;
   jsonData[index].year = vehicleData.year;
   jsonData[index].vin = vehicleData.vin;
   jsonData[index].precio = vehicleData.precio;
   jsonData[index].naviera = vehicleData.naviera;
   jsonData[index].montoGrua = vehicleData.montoGrua;
   jsonData[index].montoBarco = vehicleData.montoBarco;
   jsonData[index].montoOtro = vehicleData.montoOtjsonData;
    // Retorna los datos actualizados
    return jsonData[index];
  }else{
    throw new Error(`No se encontró ningún vehículo con el ID ${id}`);
  }
  
} catch (error) {
  console.error('Error al actualizar los datos:', error);
}
}
////

async function GetDataProredID(id) {
    
 
  // Usamos el método find para buscar un objeto en el arreglo data con el mismo ID
  const vehicle = jsonData.find((item) => item.id === id);

  // Si encontramos un vehículo con el mismo ID, lo retornamos
  if (vehicle) {
    return vehicle;
  }

  // Si no se encontró ningún vehículo con ese ID, puedes manejar el error de alguna manera
  throw new Error(`No se encontró ningún vehículo con el ID ${id}`);

}
////

async function GetDataProred() {
    
 
    return jsonData;
  
}





/////

export { GetDataProred, GetDataProredID, updateDatos };
