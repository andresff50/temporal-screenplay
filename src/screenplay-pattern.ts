// src/screenplay-pattern.ts  
import { Page, Browser, BrowserContext } from 'playwright';  
  
// Clase base para Interaction  
export abstract class Interaction {  
  public abstract attemptAs(actor: Actor): Promise<unknown>;  
}  
  
// Clase base para Question  
export abstract class Question {  
  public abstract askAs(actor: Actor): Promise<unknown>;  
}  
  
// Clase base para Ability  
export abstract class Ability<T> {  
  public abstract can(): T;  
}  
  
// Clase base para Task  
export abstract class Task {  
  private interactions: Interaction[];  
  
  constructor(interactions: Interaction[] = []) {  
    this.interactions = interactions;  
  }  
  
  public getInteractions(): Interaction[] {  
    return this.interactions;  
  }  
  
  public abstract performAs(actor: Actor): Promise<void> ;  
  
  public async attemptInteractionsAs(actor: Actor): Promise<void> {  
    for (const interaction of this.interactions) {  
      await interaction.attemptAs(actor);  
    }  
  }  
  
  public async attemptInteractionAs(  
    actor: Actor,  
    interactionClass: new (...args: any[]) => Interaction  
  ): Promise<unknown> {  
    const interaction = this.interactions.find(  
      (i) => i instanceof interactionClass  
    );  
    if (!interaction) {  
      throw new Error(  
        `Interaction of type ${interactionClass.name} not found in task`  
      );  
    }  
    return await interaction.attemptAs(actor);  
  }  
}  
  
// Clase Actor  
export class Actor {  
  private readonly abilities?: Ability<unknown>[];  
  
  constructor(abilities?: Ability<unknown>[]) {  
    this.abilities = abilities;  
  }  
  
  public async useAbility<T>(  
    abilityClass: new (...args: any[]) => Ability<T>  
  ): Promise<T> {  
    if (!this.abilities) {  
      throw new Error('No abilities found for this actor');  
    }  
  
    const ability = this.abilities.find((a) => a instanceof abilityClass);  
    if (!ability) {  
      throw new Error(  
        `Ability of type ${abilityClass.name} not found for this actor`  
      );  
    }  
  
    return (ability as Ability<T>).can();  
  }  
  
  public async performs(taskOrInteraction: Task | Interaction): Promise<void> {  
    if (taskOrInteraction instanceof Task) {  
      await taskOrInteraction.performAs(this);  
    } else {  
      await taskOrInteraction.attemptAs(this);  
    }  
  }  
  
  public async asksAbout(question: Question): Promise<unknown> {  
    return await question.askAs(this);  
  }  
  
  public async asserts(  
    question: Question,  
    assertFn: (answer: unknown) => void  
  ): Promise<void> {  
    const answer = await question.askAs(this);  
    assertFn(answer);  
  }  
}