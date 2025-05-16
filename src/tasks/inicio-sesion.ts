import { Actor } from "../../screenplay/actor";
import { Click, Enter } from "../../screenplay/interaction";
import { Task } from "../../screenplay/task";
import { LoginPage } from "../page/login-page";

export class Login extends Task {

  constructor(private credenciales: any) {
    super();
  }

  public async performAs(actor: Actor): Promise<void> {
    // await actor.performs(Enter.theValue(this.userName).into(LoginPage.elements.txtUserName("hola")));
    console.log('Usuario: ', this.credenciales.usuario);
    console.log('Contrasena: ', this.credenciales.contrasena);
    await actor.performs(Enter.theValue(this.credenciales.usuario).into(LoginPage.elements.txtUserName()));
    await actor.performs(Enter.theValue(this.credenciales.contrasena).into(LoginPage.elements.txtPassword()));
    await actor.performs(Click.on(LoginPage.elements.btnLogin()));    
  }

  public static enSalesForce(credenciales: any): Login {
    return new Login(credenciales);
  }
}