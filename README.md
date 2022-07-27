# <a href="https://tripetto.com/"><img src="https://unpkg.com/tripetto/assets/banner.svg" alt="Tripetto"></a>

Tripetto is a full-fledged form kit. Rapidly build and run smart flowing forms and surveys. Drop the kit in your codebase and use all of it or just the parts you need. The visual [**builder**](https://www.npmjs.com/package/tripetto) is for form building, and the [**runners**](https://www.npmjs.com/package/tripetto-runner-foundation) are for running those forms in different UI variants. It is entirely extendible and customizable. Anyone can build their own building [**blocks**](https://docs.tripetto.com/guide/blocks) (e.g., question types) or runner UI's.

# Boilerplate for creating blocks
[![Status](https://gitlab.com/tripetto/blocks/boilerplate/badges/master/pipeline.svg)](https://gitlab.com/tripetto/blocks/boilerplate/commits/master)
[![Styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Docs](https://img.shields.io/badge/docs-website-blue.svg)](https://docs.tripetto.com/guide/blocks)
[![Follow us on Twitter](https://img.shields.io/twitter/follow/tripetto.svg?style=social&label=Follow)](https://twitter.com/tripetto)

Perhaps one of the best things about Tripetto is that you can create your own building blocks. This boilerplate shows you how to do that. Use it as a starting point for your creativity.

# Get started
1. [Download](https://gitlab.com/tripetto/blocks/boilerplate/-/archive/master/boilerplate-master.zip) or clone the [repository](https://gitlab.com/tripetto/blocks/boilerplate) to your local machine:
```bash
$ git clone https://gitlab.com/tripetto/blocks/boilerplate.git
```

2. Run `npm install` inside the downloaded/cloned folder:
```bash
$ npm install
```

3. Start the builder and load the block in developer (test) mode:
```bash
$ npm test
```

This command will start the local builder server and tries to open the URL `http://localhost:3333` in your default browser. If no browser opens, just open the browser of your choice and navigate to this [URL](http://localhost:3333). By default the [form definition](https://docs.tripetto.com/guide/builder/#definitions) located at `./tests/example.json` is loaded.

Next, open your favorite code editor/IDE and start working on your block. When a source code change is detected, the block should automatically recompile and the Tripetto builder in the browser should refresh.

# Publish your block
When your block is done, you may want to publish it. Make sure you update the name and description in `package.json` before doing so. Also set the `private` property to `false` (currently it is set to `true` to preserve unwanted publication).

Next, run the following command to increment the package version number, do a production build and publish the package to the [npm](https://www.npmjs.com/) registry.

```bash
$ npm run publish:patch
```

When your block is published, other people can install it and start using it inside the Tripetto builder. All details on how to do that can be found [here](https://docs.tripetto.com/guide/builder/).

# Documentation
The complete documentation can be found at [docs.tripetto.com](https://docs.tripetto.com).

Detailed **blocks** documentation is found [here](https://docs.tripetto.com/guide/blocks/).

# Support
Run into issues or bugs? Report them [here](https://gitlab.com/tripetto/blocks/boilerplate/issues) and we'll look into them.

For general support contact us at [support@tripetto.com](mailto:support@tripetto.com). We're more than happy to assist you.

# License
Have a blast. [MIT](https://opensource.org/licenses/MIT).

# Community
We hope other enthusiasts will also start to develop and share runners and blocks for Tripetto. We have a [repository](https://github.com/tripetto/community) where we collect a list of community driven blocks and runners. Did you build something? Submit a [PR](https://github.com/tripetto/community/pulls) and add yours to the list. We appreciate it!

# About us
If you want to learn more about Tripetto or contribute in any way, visit us at [Tripetto.com](https://tripetto.com/).
