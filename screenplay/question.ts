import { Page } from "@playwright/test";
import { Actor } from "./actor";

export abstract class Question<T = unknown> {
  abstract askAs(actor: Actor): Promise<T>;

  // Permitir luego: someQuestion.map(x => x.length)
  map<R>(fn: (value: T) => R): Question<R> {
    const parent = this;
    return new (class extends Question<R> {
      async askAs(actor: Actor): Promise<R> {
        const result = await parent.askAs(actor);
        return fn(result);
      }
    })();
  }
}

export class See {
  static that<T>(
    question: Question<T>,
    expectation: (actual: T) => boolean,
    errorMessage?: string
  ) {
    return {
      async performAs(actor: Actor) {
        const actual = await question.askAs(actor);
        if (!expectation(actual)) {
          throw new Error(errorMessage || `❌ La verificación falló: ${actual}`);
        }
        console.log(`✅ Verificación correcta: ${actual}`);
      },
    };
  }
}

// screenplay/expectations/equals.ts
export const equals = <T>(expected: T, page: Page) => {
  return (actual: T) => actual === expected;
};

// Otros helpers:
export const contains = (substring: string) => {
  return (actual: string) => actual.includes(substring);
};
