import { getSalesforceUrl } from '../data/urls';

export class InicioSesionModel {
  private static instance: InicioSesionModel | null = null;

  private constructor(
    public ambiente: string,
    public perfil: string,
    private url: string,
    public usuario: string = '',
    public contrasena: string = ''
  ) {}

  static getInstance(ambiente?: string, perfil?: string): InicioSesionModel {
    if (!InicioSesionModel.instance) {
      if (!ambiente || !perfil) {
        throw new Error("Username and password are required for the first call to getInstance.");
      }
      const url = getSalesforceUrl(ambiente);
      const user = getUsuario(perfil);
      const password = getPassword(perfil);
      console.log("Creating instance...");
      InicioSesionModel.instance = new InicioSesionModel(ambiente, perfil, url);
    } else {
      console.log("Returning existing instance...");
    }
    return InicioSesionModel.instance;
  }

  getAmbiente(): string {
    return this.ambiente;
  }

  getPerfil(): string {
    return this.perfil;
  }

  getUrl(): string {
    return this.url;
  }
}
