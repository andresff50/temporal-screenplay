import { expect, Page } from "@playwright/test";
import { Actor } from "../../screenplay/actor";
import { Question } from "../../screenplay/question";
import { BrowseTheWeb } from "../../screenplay/abilities";

export class Title extends Question {

    constructor(
        private expectedTitle: string | RegExp
    ){
        super();
    }

  async askAs(actor: Actor): Promise<void> {
    const page = await actor.useAbility(BrowseTheWeb);
    await expect(page).toHaveTitle(this.expectedTitle);
  }

  static ecualsTo(expectedTitle: string | RegExp) {
    return new Title(expectedTitle);
  }
}