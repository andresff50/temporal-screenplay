import { Ability } from "./abilities";
import { Interaction } from "./interaction";
import { Question } from "./question";
import { Task } from "./task";

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