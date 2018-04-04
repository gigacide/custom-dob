const fs = require("fs");
const path = require("path");
const po2json = require("po2json");
const prettier = require("prettier");

function Convert(folder) {
    const files = fs.readdirSync(folder) || [];

    files.forEach(function(file) {
        if (fs.statSync(folder + file).isFile()) {
            const jsPO = file.lastIndexOf(".po") === file.length - 3;

            if (jsPO) {
                fs.writeFileSync(
                    folder + path.basename(file, ".po") + ".json",
                    prettier.format(JSON.stringify(po2json.parseFileSync(folder + file)), {
                        parser: "json"
                    }),
                    "utf8"
                );
            }
        }
    });
}

Convert("./translations/");
