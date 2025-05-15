import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Login, AbrirPagina } from '../../task';
import { CustomWorld } from "../../support/world";
import { urlData } from "../../data/urls";
import data from '../../data/users.json'
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


Given('que inicio sesion en la pagina de SalesForce con los datos de sesion', async function(this: CustomWorld, dataTable) {
  const [row] = dataTable.hashes();
  const ambiente = row.ambiente;
  const perfil = row.perfil;

  const urls: Record<string, string> = {
    sit01: 'https://salesforce-sit01.claro.com',
  };
  // const url = urls[ambiente];

  // Determinar el usuario para ejecución según el entorno
  const userKey = urlData.default.includes('sit') ? "sit01" : "uat";
  console.log('sdasd')
  // Obtener las credenciales del usuario
  const { user, password } = data[ambiente][perfil]

  await this.getActor().performs(AbrirPagina.enElNavegador('https://www.elliotdenolf.com/blog/cucumberjs-with-typescript'));
  await console.log('dsdsd', user)
});
