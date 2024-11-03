## <a href="https://tripetto.com/sdk/"><img src="https://unpkg.com/@tripetto/builder/assets/header.svg" alt="Tripetto FormBuilder SDK"></a>

🙋‍♂️ The *Tripetto FormBuilder SDK* helps building **powerful and deeply customizable forms for your application, web app, or website.**

👩‍💻 Create and run forms and surveys **without depending on external services.**

💸 Developing a custom form solution is tedious and expensive. Instead, use Tripetto and **save time and money!**

🌎 Trusted and used by organizations **around the globe**, including [Fortune 500 companies](https://en.wikipedia.org/wiki/Fortune_500).

---

*This SDK is the ultimate form solution for everything from basic contact forms to surveys, quizzes and more with intricate flow logic. Whether you're just adding conversational forms to your website or application, or also need visual form-building capabilities inside your app, Tripetto has got you covered! Pick what you need from the SDK with [visual form builder](https://tripetto.com/sdk/docs/builder/introduction/), [form runners](https://tripetto.com/sdk/docs/runner/introduction/), and countless [question types](https://tripetto.com/sdk/docs/blocks/introduction/) – all with [extensive docs](https://tripetto.com/sdk/docs/). Or take things up a notch by developing your [own question types](https://tripetto.com/sdk/docs/blocks/custom/introduction/) or even [form runner UIs](https://tripetto.com/sdk/docs/runner/custom/introduction/).*

---

## 📦 Boilerplate for creating blocks
[![Status](https://gitlab.com/tripetto/blocks/boilerplate/badges/master/pipeline.svg)](https://gitlab.com/tripetto/blocks/boilerplate/commits/master)
[![Read the docs](https://badgen.net/badge/icon/docs/cyan?icon=wiki&label)](https://tripetto.com/sdk/docs/blocks/custom/introduction/)
[![Source code](https://badgen.net/badge/icon/source/black?icon=gitlab&label)](https://gitlab.com/tripetto/blocks/boilerplate)
[![Follow us on Twitter](https://badgen.net/badge/icon/@tripetto?icon=twitter&label)](https://twitter.com/tripetto)

Perhaps one of the best things about Tripetto is that you can create your own building blocks (learn more about developing custom blocks [here](https://tripetto.com/sdk/docs/blocks/custom/introduction/)). If you want you can publish your custom block as a package (just like we do with our [stock blocks](https://tripetto.com/sdk/docs/blocks/stock/)). This boilerplate shows you how to do that.

### 🧑‍💻 Get started
1. [Download](https://gitlab.com/tripetto/blocks/boilerplate/-/archive/master/boilerplate-master.zip) or clone the [repository](https://gitlab.com/tripetto/blocks/boilerplate) to your local machine:
```bash
$ git clone https://gitlab.com/tripetto/blocks/boilerplate.git
```

2. Run `npm i` inside the downloaded/cloned folder:
```bash
$ npm i
```

3. Start the builder and load the block in developer (test) mode:
```bash
$ npm test
```

This command will start the local builder server and tries to open the URL `http://localhost:3333` in your default browser. If no browser opens, just open the browser of your choice and navigate to this [URL](http://localhost:3333). By default, the [form definition](https://tripetto.com/sdk/docs/builder/api/interfaces/IDefinition/) located at `./tests/example.json` is loaded.

Next, open your favorite code editor/IDE and start working on your block. When a source code change is detected, the block should automatically recompile and the Tripetto builder in the browser should refresh.

### ✨ Publish your block
When your block is ready, you may want to publish it. Make sure you update the name and description in `package.json` before doing so. Also, set the `private` property to `false` (currently it is set to `true` to preserve unwanted publications).

Next, run the following command to increment the package version number, do a production build and publish the package to the [npm](https://www.npmjs.com/) registry.

```bash
$ npm run publish:patch
```

When your block is published, other people can install it and start using it inside the Tripetto form builder. All details on how to do that can be found [here](https://tripetto.com/sdk/docs/builder/integrate/guides/blocks/).

## 📖 Documentation
Tripetto has practical, extensive documentation. Find everything you need at [tripetto.com/sdk/docs/](https://tripetto.com/sdk/docs/).

## 🆘 Support
Run into issues or bugs? Report them [here](https://gitlab.com/tripetto/blocks/boilerplate/issues).

Need help or assistance? Please go to our [support page](https://tripetto.com/sdk/support/). We're more than happy to help you.

## 💳 License
Have a blast. [MIT](https://opensource.org/licenses/MIT).

## 👋 About us
If you want to learn more about Tripetto or contribute in any way, visit us at [tripetto.com](https://tripetto.com/).
# custom-dob
