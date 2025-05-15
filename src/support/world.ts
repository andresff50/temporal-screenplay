// features/support/world.ts
import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium, Page } from 'playwright';
import { BrowseTheWeb } from '../../screenplay/abilities';
import { Actor } from '../../screenplay/actor';

export class CustomWorld extends World {
  private browser!: Browser;
  private context!: BrowserContext;
  private page!: Page;
  private actor!: Actor;

  constructor(options: IWorldOptions) {
    super(options);
  }

  // Este método se llama desde un hook Before
  public async init(): Promise<void> {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    this.actor = new Actor([
      new BrowseTheWeb(this.page)
    ]);
  }

  public getActor(): Actor {
    if (!this.actor) {
      throw new Error('Actor not initialized. Did you forget to call world.init()?');
    }
    return this.actor;
  }

  public async cleanup(): Promise<void> {
    await this.page?.close();
    await this.context?.close();
    await this.browser?.close();
  }
}

setWorldConstructor(CustomWorld);
