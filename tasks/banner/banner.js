const package = require("../../package.json");

module.exports = `${package.title} ${
    package.version
} - Copyright (C) ${new Date().getFullYear()} Tripetto B.V. - All Rights Reserved`;
