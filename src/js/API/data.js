
//get: https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/JTEGH20V930094412?format=json

///JTEGH20V930094412
let vin = "JTEGH20V930094412";
async function ApiVehicle(vin) {
    
  const apiUrl = `/api/vehicles/decodevinvalues/${vin}?format=json`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener los datos de la API');
    }

    const data = await response.json();
    // Manejar los datos obtenidos de la API aquí
    return data;
    console.log('la info del getch',data);
  } catch (error) {
    console.error('Hubo un error:', error);
  }
}

export { ApiVehicle };

  
