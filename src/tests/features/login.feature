# language: es
Característica: Ingresar a la pagina principal de Claro
  Yo como automatizador requiero ingresar a SalesForce para verificar la funcionalidad de autenticación.

  @ejecutame_este_jajaja
  Esquema del escenario: Ingresar al Home de SalesForce
    Dado que inicio sesion en la pagina de SalesForce con los datos de sesion
      | <ambiente> | <perfil> |
    Entonces verifico la ventana de inicio

    Ejemplos:
      | ambiente | perfil           |
      | sit01    | asesorCavDirecto |
