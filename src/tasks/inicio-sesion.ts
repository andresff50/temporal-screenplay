import { Actor } from "../../screenplay/actor";
import { Click, Enter } from "../../screenplay/interaction";
import { Task } from "../../screenplay/task";

export class Login extends Task {

  constructor(private userName: string, private psw: string) {
    super();
  }

  public async performAs(actor: Actor): Promise<void> {
    await actor.performs(Enter.theValue(this.userName).into("#user-name"));
    await actor.performs(Enter.theValue(this.psw).into("#password"));
    await actor.performs(Click.on('#login-button'));
    await actor.performs(Click.on('#add-to-cart-sauce-labs-backpack'))
  }

  public static inOrangePage(userName: string, psw: string): Login {
    return new Login(userName, psw);
  }