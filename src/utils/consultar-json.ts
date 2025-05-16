// screenplay/data/getCredentials.ts
import perfiles from '../data/perfiles.json';

export function getCredenciales(ambiente: string, perfil: string) {
  const ambienteData = perfiles[ambiente];
  if (!ambienteData) {
    throw new Error(`❌ Ambiente "${ambiente}" no encontrado en perfiles.json`);
  }

  const perfilData = ambienteData[perfil];
  if (!perfilData) {
    throw new Error(`❌ Perfil "${perfil}" no encontrado en el ambiente "${ambiente}"`);
  }

  return {
    usuario: perfilData.usuario,
    contrasena: perfilData.contrasena,
  };
}
