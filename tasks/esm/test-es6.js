try {
    const lib = require("../../runner/es6/index.js");

    if (typeof lib.Example === "undefined") {
        throw new Error();
    }
} catch (e) {
    throw new Error("ES6 library test failed!");
}
