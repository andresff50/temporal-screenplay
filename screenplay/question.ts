import { Actor } from "./actor";

export abstract class Question {  
  public abstract askAs(actor: Actor): Promise<unknown>;  
} 