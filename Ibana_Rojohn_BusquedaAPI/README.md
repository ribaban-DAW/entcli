# Búsqueda de APIs y presentación de datos de forma dinámica

## Objetivo

Debéis desarrollar una aplicación web que consuma datos dinámicos desde una API pública,
aprendiendo a realizar consultas mediante fetch, manejar datos asíncronos y mostrarlos de forma
interactiva en una página web.

## Instrucciones

### 1. Selección de la API

- Investiga y elige una API pública que te interese. Puedes buscar APIs en plataformas como Public 
APIs, RapidAPI, o explorar documentaciones de servicios populares (e.g., Spotify, OpenWeather, TheMovieDB).
- Asegúrate de que la API sea gratuita o cuente con un plan gratuito.

He utilizado una API de [Studio Ghibli](https://ghibliapi.vercel.app/).

### 2. Comprensión de la API

- Lee la documentación de la API seleccionada y responde a las siguientes preguntas en un archivo README.docx
que deberás incluir en tu práctica:

    - ¿Qué tipo de datos ofrece (clima, películas, imágenes, etc.)?
    - ¿Es necesario obtener una clave de API (API Key) para realizar consultas?
    - ¿Cómo se estructura una solicitud a la API? (Método HTTP, parámetros requeridos, URL base).


La API proporciona información diferente dependiendo del endpoint utilizado, en mi caso he utilizado el de
[películas](https://ghibliapi.vercel.app/#tag/Films).

Esta API no requiere de ninguna clave ni autorización,
como bien se especifica en la [documentación](https://ghibliapi.vercel.app/#section/Authentication). De hecho
es una de las razones por las cuales he elegido esta API, pues al no tener backend, no considero que sea buena idea
tener la API KEY expuesta.

Para hacer consultas a la API es tan simple como ir a `https://ghibliapi.vercel.app/{endpoint}`, donde `endpoint` es
el recurso que se quiere acceder, en mi caso películas, así que quedaría de la siguiente manera: `https://ghibliapi.vercel.app/films`.

Los endpoints disponibles son: `films`, `people`, `locations`, `species`, `vehicles`.

## 3. Implementación del Proyecto:

- Crea una aplicación web sencilla utilizando HTML, CSS, y JavaScript.
- Implementa las siguientes funcionalidades:

    1. Realiza una consulta a la API utilizando fetch para obtener los datos de forma asíncrona.
    2. Procesa los datos obtenidos en formato JSON y extrae la información relevante.
    3. Muestra dinámicamente los datos en tu página web. Utiliza elementos visuales (e.g., tablas, listas, tarjetas)
    para mejorar la presentación.

Listo.

## 4. Requisitos técnicos:

- Debes utilizar comunicación asíncrona con fetch (no se permite usar otra biblioteca).
- Los datos deben mostrarse dinámicamente en la web sin necesidad de recargar la página.
- Opcional (pero recomendado): Añade interactividad, como botones para filtrar o buscar datos, o eventos que muestren
información adicional.

La opcional aún no está implementada todavía, lo haré más adelante.

## 5. Documentación de la practica:

- Además de las preguntas anteriores, incluye en el  archivo README.docx:

    - Una breve descripción del proyecto.
    - La URL de la API utilizada.
    - Ejemplo de una consulta (URL de prueba con parámetros).
    - Problemas encontrados y cómo los solucionaste.

No he tenido problemas, es una API sencilla de utilizar.

## 6. Entrega de la práctica:

- Sube la práctica a un repositorio de GitHub e incluye un enlace en la entrega.
- Incluye un enlace para que podamos probar tu aplicación (puedes usar GitHub Pages para publicarla).

El enlace a la página: https://ribaban-daw.github.io/entcli/Ibana_Rojohn_BusquedaAPI/
