import { urlData } from '../data/urls';

/**
 * Función para obtener la URL del entorno seleccionado por el usuario.
 * @returns {Promise<void>} - No devuelve nada, pero imprime la URL seleccionada en la consola y modifica la URL por defecto.
*/
export async function getEnvironmentUrl(): Promise<void> {
    console.log('Configurando el ambiente...');
    const environment = process.env.ENVIRONMENT!;
  
    console.log(`El entorno seleccionado es: ${environment}`);

    const selectedUrl = urlData[environment.toLowerCase().trim() as keyof typeof urlData];
    if (selectedUrl) {
        console.log(`El proceso de automatización sera realizado en la URL: ${selectedUrl}`);
        urlData.default = selectedUrl;
    } else {
        console.log('Entorno no válido.');
        throw new Error('Entorno no válido. Por favor, ingresa un entorno válido (sit01, uat).');
    }
}