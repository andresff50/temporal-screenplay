# language: es
Característica: Ingresar a la pagina principal de Claro
  Yo como automatizador requiero ingresar a SalesForce para verificar la funcionalidad de autenticación.

  Esquema del escenario: Ingresar al Home de SalesForce
    Dado que inicio sesion en la pagina de SalesForce con los datos de sesion
      | <ambiente> | <perfil> |
    Entonces verificola ventana de inicio

    Ejemplos:
      | ambiente | perfil           |
      | sit01    | asesorCavDirecto |
