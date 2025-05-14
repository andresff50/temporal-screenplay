import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Login, OpenHomePage } from '../../task';
import { CustomWorld } from "../../support/world";

const loginSuccesfull = {
  openHomePage: new OpenHomePage(),
  login: new Login("standard_user", "secret_sauce")
}

Given('Juan is on the login page3', async function(this: CustomWorld) {
  // await this.getActor().performs(new OpenHomePage());
  await this.getActor().performs(loginSuccesfull.openHomePage);

});

When('he logs in with valid credentials3', async function (this: CustomWorld) {
  // await this.getActor().performs(new Login("standard_user", "secret_sauce"));
  await this.getActor().performs(loginSuccesfull.login);

});

Then('he should see the dashboard3', async function () {
  // await actor.should(InventoryUrl(juan.page));
});