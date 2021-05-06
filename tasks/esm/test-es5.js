try {
    const lib = require("../../runner/es5/index.js");

    if (typeof lib.Example === "undefined") {
        throw new Error();
    }
} catch (e) {
    throw new Error("ES5 library test failed!");
}
