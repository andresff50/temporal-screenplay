export class InicioSesionModel {
  private static instance: InicioSesionModel | null = null;

  private constructor(
    public username: string,
    public password: string
  ) {}

  getUsername(): string {
    return this.username;
  }

  getPassword(): string {
    return this.password;
  }

  static getInstance(username?: string, password?: string): InicioSesionModel {
    if (!InicioSesionModel.instance) {
      if (!username || !password) {
        throw new Error("Username and password are required for the first call to getInstance.");
      }
      console.log("Creating instance...");
      InicioSesionModel.instance = new InicioSesionModel(username, password);
    } else {
      console.log("Returning existing instance...");
    }
    return InicioSesionModel.instance;
  }
}
