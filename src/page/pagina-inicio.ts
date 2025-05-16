export class HomePage {

  static elements = {    
    // txtUserName: (index: string) => `#user${index}-name`,
    icnPerfil: () => "div.profileTrigger span.uiImage",
    txtConfiguracion: () => "div.profile-card-toplinks .profile-link-label:first-of-type",
    btnDetallesAvanzados: () => "div[title='Detalles avanzados de usuario'] a",
    txtNombrePerfil: () => "table.detailList tbody tr:first-child td.dataCol a"
  };
}