import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { AbrirPagina } from '../../tasks/abrir-pagina';
import { CustomWorld } from "../../support/world";
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
  const inicioSesionModel = InicioSesionModel.getInstance(ambiente, perfil);
  this.model = inicioSesionModel;

  console.log('URL:', ambiente);
  console.log('User:', perfil);
  await this.getActor().performs(AbrirPagina.enElNavegador(inicioSesionModel.getUrl()));

});

Then('verifico la ventana de inicio', async function(this: CustomWorld) {
  console.log('HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
  const modelo = this.model!;
  console.log('✅ URL desde otro step:', this.model.getUrl());
  console.log('👤 Perfil:', modelo.getPerfil());

  // Aquí haces la verificación que necesites
});
