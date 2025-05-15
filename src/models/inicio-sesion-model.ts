export class InicioSesionModel {
  private static instance: InicioSesionModel | null = null;

  private constructor(
    public ambiente: string,
    public perfil: string
  ) {}

  getAmbiente(): string {
    return this.ambiente;
  }

  getPerfil(): string {
    return this.perfil;
  }

  static getInstance(ambiente?: string, perfil?: string): InicioSesionModel {
    if (!InicioSesionModel.instance) {
      if (!ambiente || !perfil) {
        throw new Error("Username and password are required for the first call to getInstance.");
      }
      console.log("Creating instance...");
      InicioSesionModel.instance = new InicioSesionModel(ambiente, perfil);
    } else {
      console.log("Returning existing instance...");
    }
    return InicioSesionModel.instance;
  }
}
