import { expect } from "@playwright/test";
import { Actor } from "../../screenplay/actor";
import { Question } from "../../screenplay/question";
import { BrowseTheWeb } from "../../screenplay/abilities";
import { HomePage } from "../page/pagina-inicio";

export class VerificacionPerfil extends Question {
    

    constructor(
        private perfilEsperado: string
    ){
        super();
    }

  async askAs(actor: Actor): Promise<void> {
    const page = await actor.useAbility(BrowseTheWeb);
    const textoEsperado = this.perfilEsperado;
    //await page.waitForFunction(() => {}, null, { timeout: 10000 });
    const iframe = page.frameLocator('iframe[src*="lightning.force.com"]').nth(1); // índice empieza en 0
    const elemento = iframe.locator(HomePage.elements.txtNombrePerfil());


    await expect(elemento).toHaveText(this.perfilEsperado);
    //const textoEnPagina = await page.locator(HomePage.elements.txtNombrePerfil()).textContent();
    //expect(textoEnPagina?.trim()).toBe(textoEsperado);
  }

  static delUsuarioLogeado(perfilEsperado: string) {
    return new VerificacionPerfil(perfilEsperado);
  }
}