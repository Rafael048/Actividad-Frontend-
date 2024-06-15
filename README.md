Requisitos previos para utilizar este sitio web:
1. Debe tener instalado nodeJS en su computador
2. Debe tener MYSQL en su computador
3. Debe contar con un editor de codigo como Visual Studio Code
4. Debe contar con una cuanta de Github para clonar el proyecto

Proceso de descarga e instalacion del proyecto en su computador: 

Lo primero que se debe hacer es crear una nueva carpeta con el nombre que desee y dejarla vacia, luego esta misma carpeta se abrira en Visual Studio Code, luego se debe abrir la consola del editor y escribir el siguiente comando "git pull https://github.com/Rafael048/Actividad-Frontend-.git main" esto descargara todo el repositorio con el proyecto desde Github, luego de esto se insertara el comando "npm i " para asegurar que las dependencias del proyecto esten actualizadas, con esto ya el proceso de descarga estaria completo. Tambien se puede descaragr el repositorio por medio de la interfaz de Github quedando un archicho .rar con todas las carpetas y archivos del mismo en su interior.

Antes de ejecutar el servidor se deben seguir unos pasos para asegurar que todo funcione como debe, lo primero es crear el archivo .env, el cual por motivos de seguridad no puede ser subido al repositorio, la forma de crear este archivo es la siguiente: En la raiz del proyecto crea un nuevo archivo al cual llamaras ".env" y dentro de el colocaras las siguientes variables de entorno:
DB_HOST = 
DB_USER = 
DB_PASS = 
DB_NAME = 
JWT_SECRET =
A estas variables de entorno les asignaras el valor correspondiente de tus credenciales de tu base de datos y  tu firma de JSON web token.
Luego de esto te iras a la interfaz de PHPMYADMIN y crearas una base de datos con el nombre de "zonagaming" y le importaras el archivo "zonagaming.sql" asi ya tendras la estructura de la base de datos creada y lista para comenzar a guardar informacion, luego de esto ya el servidor estara completamente configurado y listo para ser lanzado.

Ejecucion del servidor y pruebas del sitio:

Una vez realizados todos los pasos anteriores se escribira en la consola el comando "npm start" con esto el servidor se empezara a ejecutar y ya podras acceder al sitio web de Zona Gaming, para esto ingresa a tu navegador y en la barra de busqueda coloca "localhost:3000/" esto te llevara directamente a la Landing Page del sitio donde podras empezar a interactuar con el, notaras que algunas funciones estan bloqueadas y recibes el error 401, esto se debe a que para ello primero debes ingrear sesion en el sistema con tu usuario y contraseña, si aun no lo tienes debes registrarte en el apartado correspondiente, una vez lo hagas ya tendras total acceso al sistema.
