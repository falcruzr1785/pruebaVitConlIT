const jsonDataCliente =[
  
    {
      "idCliente": "1",
      "nombreCliente": "Estefani",
      "cedula": "206610054"
    },
    {
      "idCliente": "2",
      "nombreCliente": "Fred",
      "cedula": "206120652"
    },
    {
      "idCliente": "3",
      "nombreCliente": "Juan",
      "cedula": "206930242"
    }
  ]
  ////updateCliente
async function updateDatosCliente(clienteData,id) {
  
    try {
   const index = jsonDataCliente.findIndex( (cliente) => cliente.idCliente === id)
    
    // Si encontramos un vehículo con el mismo ID, lo retornamos
    if (index !== -1) {
      // Actualiza los campos relevantes del vehículo
     jsonDataCliente[index].nombreCliente = clienteData.nombreCliente;
     jsonDataCliente[index].cedula = clienteData.cedula;
   
      // Retorna los datos actualizados
      return jsonDataCliente[index];
    }else{
      throw new Error(`No se encontró ningún cliente con el ID ${id}`);
    }
    
  } catch (error) {
    console.error('Error al actualizar los datos:', error);
  }
  }

  ////

async function GetDataClienteID(id) {
    
    try{
    // Usamos el método find para buscar un objeto en el arreglo data con el mismo ID
    const cliente = jsonDataCliente.find((item) => item.idCliente === id);
  
    // Si encontramos un vehículo con el mismo ID, lo retornamos
    if (cliente) {
      return cliente;
    }
  
    // Si no se encontró ningún vehículo con ese ID, puedes manejar el error de alguna manera
    throw new Error(`No se encontró ningún cliete con el ID ${id}`);
  
} catch (error) {
    console.error('Error al buscar el cliente:', error);
  }

  }
  ////
  
  async function GetDataTodosClientes() {
      
   try{
      return jsonDataCliente;

    } catch (error) {
        console.error('Error al retornat los datos:', error);
      }
    
  }

  
export { GetDataTodosClientes, GetDataClienteID, updateDatosCliente };