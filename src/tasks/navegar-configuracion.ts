import { Actor } from "../../screenplay/actor";
import { Click, Enter } from "../../screenplay/interaction";
import { Task } from "../../screenplay/task";
import { HomePage } from "../page/pagina-inicio";

export class NavegarConfiguracion extends Task {

  constructor() {
    super();
  }

  public async performAs(actor: Actor): Promise<void> {
    await actor.performs(Click.on(HomePage.elements.icnPerfil()));    
    await actor.performs(Click.on(HomePage.elements.txtConfiguracion()));    
    await actor.performs(Click.on(HomePage.elements.btnDetallesAvanzados()));    
  }

  public static delUsuario() {
    return new NavegarConfiguracion();
  }
}