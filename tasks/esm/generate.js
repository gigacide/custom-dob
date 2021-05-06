const fs = require("fs");
const banner = require("../banner/banner.js");
const mkdirp = require("mkdirp");
let code = `/*! ${banner} */\n`;

code += `import TripettoBlockExample from "../es6/index.js";\n\n`;
code += `export const { Example } = TripettoBlockExample;\n`;
code += `export { TripettoBlockExample };\n`;
code += `export default TripettoBlockExample;\n`;

mkdirp.sync("./runner/esm/");
fs.writeFileSync("./runner/esm/index.mjs", code, "utf8");
