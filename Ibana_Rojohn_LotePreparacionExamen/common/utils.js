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

function createElement(type, textContent = "", className = "") {
  const element = document.createElement(type);
  element.textContent = textContent;
  if (className) {
    element.classList.add(className);
  }

  return element;
}

function createTable(items) {
  const table = document.createElement("table");
  table.classList.add("table");

  const thead = document.createElement("thead");
  const trh = document.createElement("tr");

  // const keys = getKeysFrom(items[0]);
  const keys = ["id", "name", "price", "category", "manufacturer", "warranty_years", "stock"];

  keys.forEach((key) => {
    trh.append(createElement("th", key, "table__header"));
  })
  thead.append(trh);

  const tbody = document.createElement("tbody");
  items.forEach((item) => {
    const trd = document.createElement("tr");
    const vals = [item.id, item.name, item.price, item.category, item.details.manufacturer, item.details.warranty_years, item.details.stock];
    vals.forEach((val) => {
      trd.append(createElement("td", val, "table__data"));
    })
    tbody.append(trd);
  })
  table.append(thead, tbody);

  return table;
}

function showItems(container, items) {
  container.replaceChildren();
  container.append(createTable(items));
}


export default { createTable, showItems, loadJSON, createElement };
