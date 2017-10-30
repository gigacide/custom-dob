[![pipeline status](https://gitlab.com/tripetto/forms/providers/boilerplate/badges/master/pipeline.svg)](https://gitlab.com/tripetto/forms/providers/boilerplate/commits/master)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![docs](https://img.shields.io/badge/docs-website-blue.svg)](https://forms.tripetto.community/providers)
[![Join the community on Spectrum](https://withspectrum.github.io/badge/badge.svg)](https://spectrum.chat/tripetto)

**Boilerplate for creating a simple provider for [Tripetto Forms editor](https://www.npmjs.com/package/@tripetto/forms-editor).**

Tripetto Forms bring a new way of creating and deploying forms in websites and applications. You use its intuitive graphical editor to build and edit smart forms with logic and conditional flows in 2D on a self-organizing drawing board. In any modern browser. Mouse, touch or pen.

Perhaps one of the best things about Tripetto Forms is that you can create your own providers. A typical provider implements a certain form building block and allows for the management of its properties through the editor. This boilerplate shows you how to do that.

# Instructions
1. [Download](https://gitlab.com/tripetto/forms/providers/boilerplate/repository/master/archive.zip) or clone the [repository](https://gitlab.com/tripetto/forms/providers/boilerplate) to your local machine:
```bash
$ git clone git@gitlab.com:tripetto/forms/providers/boilerplate.git
```

2. Run `npm install` inside the downloaded/cloned folder:
```bash
$ npm install
```

3. Start the editor with the provider in developer (test) mode:
```bash
$ npm test
```

This command will start the local editor server and tries to open the URL `http://localhost:3333` in your default browser. If no browser opens, just open the browser of your choice and navigate to this [URL](http://localhost:3333). By default the [form definition](https://forms.tripetto.community/editor/#definitions) `./forms/example.json` is loaded.

Next, open your editor/IDE and start working on your provider. When a change is detected, the provider is automatically re-compiled and the Tripetto Forms editor in the browser refreshed.

# Documentation
The complete Tripetto Forms documentation can be found at: [https://forms.tripetto.community](https://forms.tripetto.community).

The detailed provider documentation can be found [here](https://forms.tripetto.community/providers/).

# Publish your provider
If you want to publish your provider, make sure you update the package name and description. Also set the `private` property in `package.json` to `false` (currently it is set to `true` to preserve unwanted publication).

Next, run the following command to increment the package version number, do a production build and publish the package to the [npm](https://www.npmjs.com/) registry.

```bash
$ npm version patch
```

When your provider is published, other people can install it and start using it inside the Tripetto Forms editor. All details on how to do that can be found [here](https://forms.tripetto.community/editor/#configuration).

# Issues
Run into issues using this boilerplate? Report them [here](https://gitlab.com/tripetto/forms/providers/boilerplate/issues).

Problems using the editor? Report bugs and issues [here](https://gitlab.com/tripetto/forms/editor/issues).

# Support
For general support contact us at support@tripetto.com.

# About us
If you want to learn more about Tripetto or contribute in any way to our ambitions, visit us at [Tripetto.com](https://tripetto.com/).
