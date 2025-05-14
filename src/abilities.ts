// src/abilities/BrowseTheWeb.ts
import { Page } from 'playwright';
import { Ability } from './screenplay-pattern';

export class BrowseTheWeb extends Ability<Page> {
  constructor(private readonly page: Page) {
    super();
  }

  public can(): Page {
    return this.page;
  }
}