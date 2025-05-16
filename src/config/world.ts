import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, chromium,firefox, webkit, BrowserType, Page } from 'playwright';
import { BrowseTheWeb } from '../../screenplay/abilities';
import { Actor } from '../../screenplay/actor';
import { InicioSesionModel } from '../models/inicio-sesion-model';

export class CustomWorld extends World {
  private browser!: Browser;
  private context!: BrowserContext;
  private page!: Page;
  private actor!: Actor;
  public model?: InicioSesionModel;

  constructor(options: IWorldOptions) {
    super(options);
  }

  // Este método se llama desde un hook Before
  public async init(): Promise<void> {

    const browserName = process.env.BROWSER || 'chromium';
    let browserType: BrowserType<Browser>;
    
    switch (browserName) {
    case 'firefox':
      browserType = firefox;
      break;
    case 'webkit':
      browserType = webkit;
      break;
    case 'chromium':
    default:
      browserType = chromium;
      break;
    }

    this.browser = await browserType.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.page.setDefaultTimeout(30000); // aplica a todas las acciones
    this.page.setDefaultNavigationTimeout(50000); // aplica a navegación


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
