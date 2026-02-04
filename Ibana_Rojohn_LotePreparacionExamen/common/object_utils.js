function fillKeys(obj, keys) {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === "object") {
      fillKeys(obj[key], keys);
    } else {
      keys.push(key);
    }
  })
}

function fillValues(obj, vals) {
  Object.values(obj).forEach((val) => {
    if (typeof val === "object") {
      fillValues(val, vals);
    } else {
      vals.push(val);
    }
  })
}

export default { fillKeys, fillValues };
