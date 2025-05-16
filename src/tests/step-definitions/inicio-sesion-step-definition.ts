import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { AbrirPagina } from '../../tasks/abrir-pagina';
import { Login } from '../../tasks/inicio-sesion';
import { CustomWorld } from "../../config/world";
import { InicioSesionModel } from '../../models/inicio-sesion-model';
import { Title } from "../../questions/verificar-titulo";
import { getCredenciales } from "../../utils/consultar-json";
import { NavegarConfiguracion } from "../../tasks/navegar-configuracion";
import { VerificacionPerfil } from "../../questions/verificar-perfil";


Given('que inicio sesion en la pagina de SalesForce con los datos de sesion', {timeout: 80000}, async function(this: CustomWorld, dataTable: any) {
//  let actor = this.getActor();
  const table = dataTable.raw();
  console.log(dataTable)
  const ambiente = table[0][0]; // 'https://www.elliotdenolf.com/blog/cucumberjs-with-typescript'
  const perfil = table[0][1]; // 'asesorCavDirecto'  
  const inicioSesionModel = InicioSesionModel.getInstance(ambiente, perfil);
  this.model = inicioSesionModel;

  console.log('URL:', ambiente);
  console.log('User:', perfil);
  await this.getActor().performs(AbrirPagina.enElNavegador(inicioSesionModel.getUrl()));
  await this.getActor().performs(Login.enSalesForce(getCredenciales(ambiente, perfil)))
});

When('ingreso a detalles avanzados de usuario', {timeout: 80000}, async function (this: CustomWorld) {
  console.log('Este es el When');
  await this.getActor().performs(NavegarConfiguracion.delUsuario());
});

Then('verifico el perfil que se accedio', {timeout: 80000}, async function(this: CustomWorld) {
    console.log('Este es el Then 1');
  const modelo = this.model!;
  await this.getActor().asksAbout(VerificacionPerfil.delUsuarioLogeado(modelo.getPerfil()))
});


Then('verifico titulo de la pagina', {timeout: 80000}, async function(this: CustomWorld) {
  const modelo = this.model!;
  console.log('✅ URL desde otro step:', this.model.getUrl());
  console.log('👤 Perfil:', modelo.getPerfil());

  await this.getActor().asksAbout(Title.ecualsTo("Detalles avanzados de usuario"))
});