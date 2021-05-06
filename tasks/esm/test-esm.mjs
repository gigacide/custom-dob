import TripettoBlockExampleAsDefaultImport from "../../runner/esm/index.mjs";
import { TripettoBlockExample, Example } from "../../runner/esm/index.mjs";

try {
    if (typeof TripettoBlockExampleAsDefaultImport.Example === "undefined") {
        throw new Error();
    }

    if (typeof TripettoBlockExample.Example === "undefined") {
        throw new Error();
    }

    if (typeof Example === "undefined") {
        throw new Error();
    }
} catch(e) {
    throw new Error("ES6 module failed!");
}
