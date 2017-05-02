# Servicio ejemplo aplicacion usando docker

Este es un ejemplo de aplicacion implementada en docker

En caso que se quiera modificar el puerto por el que se va a publicar la aplicación, seria necesario editar el archivo Dockerfile en la propiedad declarada como EXPOSE, para el ejercicio se expuso el puerto 8080.

```sh
EXPOSE 8080
```

De cara a una ejecución se puede ejecutar el archivo startup.bat, o en su defecto ejecutar los siguientes comandos:

```sh
//Este comando permite construir la imagen docker
docker build luisolarte/servicio_docker_ejemplo .
//Este comando permite la ejecucion de la imagen creada en el equipo
docker run -p 8080:8080 -d luisolarte/servicio_docker_ejemplo
```
