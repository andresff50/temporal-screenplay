import { Page, Browser, BrowserContext } from '@playwright/test';  
import { Actor } from './actor';
import { BrowseTheWeb } from './abilities';

export abstract class Interaction {  
  public abstract attemptAs(actor: Actor): Promise<unknown>;  
}  

export class NavigateTo extends Interaction {
  constructor(private readonly url: string) {
    super();
  }

  public static url(url: string): NavigateTo {
    return new NavigateTo(url);
  }

  public async attemptAs(actor: Actor): Promise<void> {
    const page = await actor.useAbility(BrowseTheWeb);
    await page.goto(this.url);
  }
}

export class Click extends Interaction {
  constructor(private selector: string) {
    super();
  }

  public static on(selector: string): Click {
    return new Click(selector);
  }

  public async attemptAs(actor: Actor): Promise<void> {
    const page = await actor.useAbility(BrowseTheWeb);
    await page.click(this.selector);
  }
}

export class Enter extends Interaction {
  private value!: string;
  private selector!: string;

  private constructor() {
    super();
  }

  public static theValue(value: string): Enter {
    const interaction = new Enter();
    interaction.value = value;
    return interaction;
  }

  public into(selector: string): Enter {
    this.selector = selector;
    return this;
  }

  public async attemptAs(actor: Actor): Promise<void> {
    const page = await actor.useAbility(BrowseTheWeb);
    await page.fill(this.selector, this.value);
  }
}