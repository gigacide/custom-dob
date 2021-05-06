import TripettoBlockExampleAsDefaultImport from "../../runner/esm/index.mjs";
import { TripettoBlockExample, Example } from "../../runner/esm/index.mjs";

try {
    if (typeof TripettoBlockExampleAsDefaultImport.Example === "undefined") {
        throw new Error("ES6 module failed!");
    }

    if (typeof TripettoBlockExample.Example === "undefined") {
        throw new Error("ES6 module failed!");
    }

    if (typeof Example === "undefined") {
        throw new Error("ES6 module failed!");
    }
} catch(e) {
    throw new Error("ES6 module failed!");
}
