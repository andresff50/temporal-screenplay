// import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
// import { Login, AbrirPagina } from '../../task';
// import { CustomWorld } from "../../support/world";

// const loginSuccesfull = {
//   openHomePage: new OpenHomePage(),
//   login: new Login("standard_user", "secret_sauce"),
//   abrirPagina: new AbrirPagina('https')
// }

// Given('Juan is on the login page', async function(this: CustomWorld) {
//   // await this.getActor().performs(new OpenHomePage());
//   await this.getActor().performs(loginSuccesfull.openHomePage);

// });

// When('he logs in with valid credentials', async function (this: CustomWorld) {
//   // await this.getActor().performs(new Login("standard_user", "secret_sauce"));
//   await this.getActor().performs(loginSuccesfull.login);

// });

// Then('he should see the dashboard', async function () {
//   // await actor.should(InventoryUrl(juan.page));
// });


// Given('El usuario se encuentra en Pagina Home de Salesforce {int}', async function(this: CustomWorld, executionNumber: number) {
//   await this.getActor().performs(AbrirPagina.enElNavegador());
// });
