## Web-App-Cripto

Web-App-Cripto es una plataforma sencilla diseñada para proporcionar información sobre criptomonedas y permitir a los usuarios ver detalles de cada una de ellas. Inspirada en la arquitectura Flux, aunque por ser una pequeña App no se implementa el manejo de estado global. esta aplicación ofrece una experiencia intuitiva para explorar y conocer más sobre el emocionante mundo de las criptomonedas.

### Descripción General

La aplicación Web-App-Cripto te brinda acceso a datos en tiempo real sobre una variedad de criptomonedas populares. Los usuarios pueden explorar una lista de criptomonedas y obtener información clave, como el precio actual, la capitalización de mercado y la variación de precios en un período de tiempo determinado.

### Características Destacadas

Lista de Criptomonedas: Explora una lista completa de criptomonedas con información relevante, como nombre, símbolo y precio actual.
Detalles de Criptomoneda: Haz clic en una criptomoneda para acceder a información detallada.

### Tecnologías Utilizadas

* Web-App-Cripto se ha construido utilizando las siguientes tecnologías y herramientas:

* Next.js y React para el desarrollo web.

* TypeScript para agregar tipado estático a JavaScript.

* Material-UI para el diseño y la interfaz de usuario.

* Styled Components para la gestión de estilos.

* Jest y React Testing Library para realizar pruebas unitarias.

### Estructura del Proyecto

La estructura del proyecto se organiza en torno a la carpeta "app" y sigue una arquitectura modular que facilita la expansión y el mantenimiento del código. A continuación, se muestra una vista general de la estructura:

```
/
|-- app/
|   |-- components/
|   |-- pages/
|   |-- styles/ 
|   |--__test__
|-- public/
|-- README.md
|-- package.json
|-- ...
```

### Instalación

Asegúrate de tener Node.js instalado en tu sistema antes de continuar.

1. Clona el repositorio o descarga el código fuente:

```
git clone https://github.com/jamir2308/web-app-cripto.git
```

2. Ve al directorio del proyecto:

```
cd web-app-cripto
```

3. Instala las dependencias:

```
npm install
```

### Ejecutar el Proyecto

Para ejecutar la aplicación en modo de desarrollo, sigue estos pasos:

1. Asegúrate de estar en la carpeta raiz del proyecto:

```
npm run dev
```

2. Abre tu navegador y visita http://localhost:3000 para ver la aplicación en acción.


### Pruebas Unitarias

Web-App-Cripto utiliza Jest y React Testing Library para realizar pruebas unitarias. Puedes ejecutar las pruebas fácilmente con los siguientes comandos:

```
npm test
```

### Contribuir

¡Estamos abiertos a contribuciones! Si deseas colaborar en el proyecto, sigue estos pasos:

1. Crea una rama de características:

```
git checkout -b mi-nueva-caracteristica
```

2. Realiza tus cambios y asegúrate de que las pruebas pasen.

3. Envía tus cambios:

```
git commit -m "Agrega mi nueva característica"
git push origin mi-nueva-caracteristica
```

4. Abre un Pull Request en GitHub.
