import { Actor } from '../../screenplay/actor';
import { NavigateTo } from '../../screenplay/interaction';
import { Task } from '../../screenplay/task';


export class AbrirPagina extends Task {
  constructor(private url: string) {
    super();
  }

  public async performAs(actor: Actor): Promise<void> {
    await actor.performs(NavigateTo.url(this.url));
  }

  public static enElNavegador(url: string): AbrirPagina {
    return new AbrirPagina(url);
  }
}