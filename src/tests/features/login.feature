# language: es
Característica: Ingresar a la pagina principal de Claro
  Yo como automatizador requiero ingresar a SalesForce para verificar la funcionalidad de autenticación.

  @ejecucion_1 @regresion
  Esquema del escenario: 1 Ingresar al Home de SalesForce
    Dado que inicio sesion en la pagina de SalesForce con los datos de sesion
      | <ambiente> | <perfil> |
    Entonces verifico la ventana de inicio

    Ejemplos:
      | ambiente | perfil           |
      | sit01    | asesorCavDirecto |

@ejecucion_2 @regresion
  Esquema del escenario: 2 Ingresar al Home de SalesForce
    Dado que inicio sesion en la pagina de SalesForce con los datos de sesion
      | <ambiente> | <perfil> |
    Entonces verifico la ventana de inicio

    Ejemplos:
      | ambiente | perfil           |
      | sit01    | asesorCavAliados |