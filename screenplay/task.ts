import { Actor } from "./actor";
import { Interaction } from "./interaction";

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