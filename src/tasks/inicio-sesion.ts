import { Actor } from "../../screenplay/actor";
import { Click, Enter } from "../../screenplay/interaction";
import { Task } from "../../screenplay/task";
import { LoginPage } from "../page/login-page";

export class Login extends Task {

  constructor(private userName: string, private psw: string) {
    super();
  }

  public async performAs(actor: Actor): Promise<void> {
    // await actor.performs(Enter.theValue(this.userName).into(LoginPage.elements.txtUserName("hola")));
    await actor.performs(Enter.theValue(this.userName).into(LoginPage.elements.txtUserName()));
    await actor.performs(Enter.theValue(this.psw).into(LoginPage.elements.txtPassword()));
    await actor.performs(Click.on(LoginPage.elements.btnLogin()));    
  }

  public static enSalesForce(userName: string, psw: string): Login {
    return new Login(userName, psw);
  }
}