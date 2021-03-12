# BeduMarket

_Desarrollo de una API de tipo market en la cual se podrá realizar la compra de cursos de diferentes temas, en este README podrás encontrar el Análisis y Diseño de la misma_

## Requerimientos del proyecto 📋
* ¿Qué espero que haga el proyecto?
  * Como desarrolladores esperamos desarrollar una API para que la gente pueda comprar cursos de BEDU 
* ¿Qué tipo de usuarios tendrá el sistema?
  * Como usuario administrador, quiero poder agregar nuevos cursos a la plataforma para que se puedan comprar
  * Como usuario, quiero comprar cursos de BeduMarket para obtener nuevos conocimientos.
  * Como usuario invitado, quiero ver los cursos disponibles para convencerme de registrarme y realizar algunas compras
* ¿Qué acciones puede ralizar cada usuario?
  * *Usuario Administrador* 🧑‍🔧
    * Agregar nuevos cursos
    * Eliminar cursos
    * Agregar un usuario nuevo
    * Eliminar un usuario
  * *Usuario* 🤵‍♂️
    * Ver sus cursos
    * Agregar nuevos cursos
    * Eliminar cursos
  * *Invitado*
    * Ver los cursos disponibles
* ¿Qué información se necesita?
  * *Usuario Administrador*
    * Usuario, contraseña, nombre y fotografía
  * *Usuario*
    * Usuario, nombre, contraseña, fotografía, correo electrónico, teléfono, método de pago
* ¿Cuales son las principales entidades?
  * Usuarios
  * Cursos
  * Compras
* ¿Qué caracteristicas tiene cada entidad?
  * Usuario: id, Usuario, Nombre, email, contraseña, forma de pago
  * Curso: id, nombre, url, costo, descripción
  * Compras: id, monto, fecha
* ¿Que funcionalidad tiene cada entidad?
  * Usuario: tiene como funcionalidad el poder reservar algun curso, hacer la compra del mismo, poder eliminar el curso
  * Curso: el curso se va a poder reproducir siempre y cuando el usuario lo haya comprado
  * Compras: va a permitir el control de las compras y el acceso a los cursos pagados.


## Diagrama de Base de datos

![imagen](https://user-images.githubusercontent.com/56411929/109845751-15638a80-7c13-11eb-88f9-75d246c40063.png)

![imagen](https://user-images.githubusercontent.com/56411929/109845793-201e1f80-7c13-11eb-891a-50c7d3acaf99.png)

## ¿Como instalar esta API?

Para poder instalar esta API es necesario que ejecutes `npm install` ya sea en windows (VSCODE :blue_heart:), Linux :purple_heart: o Mac :apple:

---
⌨️ con ❤️ por [Rodrigo Magallan y Janz Fernando] 😊
