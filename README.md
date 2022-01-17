# Reto del proyecto

En base a los requerimientos enviados en el correo

## Planteamiento
Se analizo los requerimientos del problema en donde había que realizar un CRUD y consumir datos de una api proporcionado, en donde había que desplegar datos, actualizar, ver y eliminar cada registro, dependiendo las acciones.

Viendo la necesidad de desplegar datos en una tabla, se hace la estructura por componentes y contenedores para poder separar cada objeto, así como teniendo como pantalla principal un Layout, que despliega las demás interfaces.

Las demás interfaces están dentro de un context de Contacto, ya que nuestra api de contactos es quien gestiona la información principal.
Cada acción de cada uno de los registros, contiene una ruta especial para poder navegar entre las acciones del CRUD.


## Encender el proyecto


### `1) npm install`
### `2) npm run`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
