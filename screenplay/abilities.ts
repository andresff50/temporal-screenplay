// src/abilities/BrowseTheWeb.ts
//import { Page } from 'playwright';
import { Page } from '@playwright/test';

export abstract class Ability<T> {  
  public abstract can(): T;  
}  

export class BrowseTheWeb extends Ability<Page> {
  constructor(private readonly page: Page) {
    super();
  }

  public can(): Page {
    return this.page;
  }
}