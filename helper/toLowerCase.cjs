exports.toLowerCase = function(...args) {
  console.log(...args, this);
  console.log(JSON.stringify(args[1], null, 2));
  return str.toLowerCase();
};
