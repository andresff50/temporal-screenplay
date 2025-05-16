import { After, Before } from "@cucumber/cucumber";
import { CustomWorld } from "./world";


Before(async function (this: CustomWorld) {
  console.log('[Before Hook] Initializing Screenplay world ...');
  try {
    await this.init();
  } catch (error) {
    console.error('Failed to initialize world:', error);
    throw error;
  }
});

After(async function (this: CustomWorld) {
  console.log('[After Hook] Cleaning up resources ...');
  try {
    await this.cleanup();
  } catch (error) {
    console.error('Failed to clean up:', error);
  }
});
