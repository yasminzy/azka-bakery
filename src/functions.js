function filter(input, amount) {
  return input.filter((item, index) => index >= input.length - amount);
}

function urlize(input) {
  return input
    .toLowerCase()
    .replace(/\s/g, "-")
    .replace(/\./g, "");
}

export { filter, urlize };
