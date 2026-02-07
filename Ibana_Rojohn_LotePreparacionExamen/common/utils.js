async function loadJSON(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error obteniendo el JSON");
  }

  // Se podrían gestionar errores como 400, 404... pero como no es una API no lo veo necesario

  const data = await response.json();
  if (!data.products) {
    throw new Error("No hay productos");
  }

  return data.products;
}

// // NOTE(srvariable): Al final no lo utilizo porque no merece la pena,
// // para muchos campos/productos va lento y es demasiado genérico, pero lo dejo por si acaso
// function getKeysFrom(obj, keys = []) {
//   Object.keys(obj).forEach((key) => {
//     if (typeof obj[key] === "object") {
//       getKeysFrom(obj[key], keys);
//     } else {
//       keys.push(key);
//     }
//   })

//   return keys;
// }

// function getValuesFrom(obj, vals = []) {
//   Object.values(obj).forEach((val) => {
//     if (typeof val === "object") {
//       getValuesFrom(val, vals);
//     } else {
//       vals.push(val);
//     }
//   })

//   return vals;
// }

function createElement(tagname, content = [], classname = "") {
  const element = document.createElement(tagname);

  const items = Array.isArray(content) ? content : [content]

  items.forEach((item) => {
    if (typeof item === "string") {
      element.textContent += item;
    } else {
      element.append(item);
    }
  })

  if (classname) {
    element.classList.add(classname);
  }

  return element;
}

function createTable(items) {
  const keys = ["id", "name", "price", "category", "manufacturer", "warranty_years", "stock"];

  return createElement("table", [
    createElement("thead", createElement("tr", keys.map((key) => createElement("th", key, "table__header")))),
    createElement("tbody", items.map((item) => {
      const vals = [item.id, item.name, item.price, item.category, item.details.manufacturer, item.details.warranty_years, item.details.stock];
      return createElement("tr", vals.map((val) => createElement("td", val, "table__data")))
    })),
  ], "table");
}

function showItems(container, items) {
  container.replaceChildren();
  container.append(createTable(items));
}

export default { createTable, showItems, loadJSON, createElement };
