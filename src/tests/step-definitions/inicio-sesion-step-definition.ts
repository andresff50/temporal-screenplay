import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { Login, AbrirPagina } from '../../task';
import { CustomWorld } from "../../support/world";
import { urlData } from "../../data/urls";
import data from '../../data/users.json';
import { DataTable } from '@cucumber/cucumber';
import { InicioSesionModel } from '../../models/inicio-sesion-model';


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


const loginSuccesfull = {
  //openHomePage: new OpenHomePage(),
  //login: new Login(InicioSesionModel.getInstance().getUsername(), InicioSesionModel.getInstance().getPassword())
}

Given('que inicio sesion en la pagina de SalesForce con los datos de sesion', async function(this: CustomWorld, dataTable: any) {
  const table = dataTable.raw();
  console.log(dataTable)
  const ambiente = table[0][0]; // 'https://www.elliotdenolf.com/blog/cucumberjs-with-typescript'
  const perfil = table[0][1]; // 'asesorCavDirecto'
  InicioSesionModel.getInstance(ambiente, perfil);

  console.log('URL:', ambiente);
  console.log('User:', perfil);
  await this.getActor().performs(AbrirPagina.enElNavegador(InicioSesionModel.getInstance().getAmbiente()));

});
