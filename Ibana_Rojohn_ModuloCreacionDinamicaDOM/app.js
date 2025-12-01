import * as Utils from './dom_utils.js';

const mainEl = document.getElementById("main");
Utils.agregarA(mainEl, Utils.crearElemento("h1", "Lista generada dinámicamente"));
Utils.agregarA(mainEl, Utils.crearLista(["Manzana", "Pera", "Plátano", "Uva"]));
Utils.agregarA(mainEl, Utils.crearElemento("p", "Esta lista se ha creado utilizando funciones del módulo dom_utils.js"));
