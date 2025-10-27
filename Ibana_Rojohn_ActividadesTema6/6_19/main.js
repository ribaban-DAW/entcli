// Crea un programa que muestre en consola cuántos elementos p, a y span hay en una pieza de código HTML.

const numberOfParagraphs = document.getElementsByTagName("p").length;
const numberOfAnchors = document.getElementsByTagName("a").length;
const numberOfSpans = document.getElementsByTagName("span").length;

console.log(`Hay ${numberOfParagraphs} p, ${numberOfAnchors} a, ${numberOfSpans} span`);
