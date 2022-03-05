# React from Scratch

## Contents

- [React from Scratch](#react-from-scratch)

  - [Contents](#contents)

    - [Part 1: Basic React Setup](#part-1-basic-react-setup)

      - [Step 1: Use this template](#step-1-use-this-template)
        - [1. Initialise NPM](#1-initialise-npm)
        - [2. Install the eslint plugin](#2-install-the-eslint-plugin)
        - [3. Edit ESLint Configuration](#3-edit-eslint-configuration)
      - [Step 2: Install and Configure Babel](#step-2-install-and-configure-babel)
        - [1. Install Babel core and loader](#1-install-babel-core-and-loader)
        - [2. Install Babel presets](#2-install-babel-presets)
        - [2. Configure Babel](#2-configure-babel)
      - [Step 3: Install and Configure Webpack](#step-3-install-and-configure-webpack)
        - [1. Install Webpack](#1-install-webpack)
        - [2. Configure Webpack](#2-configure-webpack)
      - [Step 3: Set up React](#step-3-set-up-react)
        - [1. Install React](#1-install-react)
        - [2. Create React files](#2-create-react-files)
        - [3. Setup basic React](#3-setup-basic-react)
        - [4. Final React configurations](#4-final-react-configurations)
        - [5. Test the Basic React webpage](#5-test-the-basic-react-webpage)
        - [6. Further configurations](#6-further-configurations)
          - [6.1 Configure dev server settings](#6.1-configure-dev-server-settings)
          - [6.2 Configure Code-Splitting](#6.2-configure-code-splitting)
          - [6.3 Configure HTML](#6.3-configure-html)
          - [6.4 Configure ChunkHash](#6.4-configure-chunkHash)
          - [6.5 Configure Hot Module Replacement (HMR)](<#6.5-configure-hot-module-replacement-(hmr)>)

    - [Part 2: Configure Styling and Images](#part-2-configure-styling-and-images-1)
      - [Step 1. Set up CSS](#step-1-set-up-css)
        - [1. Setup CSS Loader](#1-setup-css-loader)
        - [2a. Configurations if using just CSS](#2a-configurations-if-using-just-css)
        - [2b. Configurations if using SASS](#2b-configurations-if-using-sass)
      - [Step 2: Basic Express Server Setup](#step-2-basic-express-server-setup)

  [Further Reading](#further-reading)

  - [Babel:](#babel)
  - [CSS:](#css)
  - [ECMAScript:](#ecmascript)
  - [Express:](#express)
  - [React:](#react)
  - [Webpack:](#webpack)

  [Version Reference](#version-reference)

<br/><br/><br/>

# Part 1: Basic React Setup

## Step 1: Use this template

<br/>

### 1. Initialise NPM

<br/>

```
npm init
```

Answer all questions, or use `npm init --y` to take all defaults

It has config files for Editor Config, ESLint and Prettier
<br/><br/>

### 2. Install the eslint plugin

<br/>

```bash
npm install -–save-dev eslint eslint-plugin-react
```

where:

| Library              | Description / Link                      |
| -------------------- | --------------------------------------- |
| eslint:              | Linting                                 |
|                      | _[homepage](https://eslint.org/)_       |
| eslint-plugin-react: | React-specific linting rules for eslint |
|                      | _[link](eslint-plugin-react)_           |

<br/><br/>

### 3. Edit ESLint Configuration

- Add the following in the `.eslintrc.json` file:

<br/>

```json
{
  "extends": ["eslint: recommended", "plugin:react/recommended"]
}
```

More details _[here](https://github.com/yannickcr/eslint-plugin-react#recommended)_.

<br/><br/>



## Step 2: Install and Configure Babel

<br/>

### 1. Install Babel core and loader

```
npm install --save-dev @babel/core@7.11.6 babel-loader@8.1.0
```

where:
| Library | Description / Link |
| ------------- | ------------ |
| @babel-core: | Babel core library (does nothing on its own) |
| | _[home](https://babeljs.io/docs/en/6.26.3/babel-core)_   &#124; _[npm](https://www.npmjs.com/package/@babel/core)_|
| babel-loader: | Lets Webpack talk to Babel |
| | _[github](https://github.com/babel/babel-loader)_   &#124; _[npm](https://www.npmjs.com/package/babel-loader)_|

<br/>

### 2. Install Babel presets

```
npm install --save-dev@babel/preset-env@7.15.8 @babel/preset-react@7.14.5
```

where:
| Library | Description / Link |
| -------------------- | ------------ |
| @babel-preset-env: | A Babel preset that compiles ES2015+ down to ES5 |
| | _[home](https://babeljs.io/docs/en/6.26.3/babel-preset-env)_  &#124; _[npm](https://www.npmjs.com/package/babel-preset-env)_|
| @babel-preset-react: | Babel preset for React |
| | _[home](https://babeljs.io/docs/en/6.26.3/babel-preset-react)_   &#124; _[npm](https://www.npmjs.com/package/babel-preset-react)_|

<br/><br/>

### 3. Other Babel configs

- Install `plugin-proposal-class-properties`
  

`bash:`
```
npm install --save-dev @babel/plugin-proposal-class-properties
```

<br/><br/>

### 4. Configure Babel

- Create `.babelrc` file at project root.

- Add babel presets:

`.babelrc:`

```
{
  "plugins": ["@babel/
    plugin-proposal-class-properties"],
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
}
```

- You should end up with the following folder structure:

```
<project_root>
|-- .babelrc
|-- .eslintrc.json
|-- package.json

```

<br/><br/>

## Step 3: Install and Configure Webpack

<br/>

### 1. Install Webpack

```
npm install --save-dev webpack@5.57.1 webpack-cli@4.9.1 webpack-dev-server@4.5.0 rimraf path
```

where:
| Library | Description / Link |
| ------------------- | ------------ |
| webpack: | Webpack core library |
| | _[home](https://webpack.js.org/)_ &#124; _[npm](https://www.npmjs.com/package/webpack)_ |
| webpack-cli: | Webpack utility that a set of tools to improve the setup of custom webpack configuration |
| | _[home](https://webpack.js.org/api/cli/)_ &#124; _[npm](https://webpack.js.org/api/cli/)_ |
| webpack-dev-server: | Development server for Webpack that provides live reloading and other utilities |
| | _[npm](https://www.npmjs.com/package/webpack-dev-server)_ |
|rimraf|A Node. js module that provides asynchronous deep- deletion of files and directories.|
|| _[github](https://github.com/isaacs/rimraf)_ &#124; _[npm](https://www.npmjs.com/package/rimraf)_|
|path| A copy of the NodeJS ’path’ module published to the NPM registry. Provides utilities for working with file and directory paths.|
|| _[github](https://github.com/jinder/path)_ &#124; _[npm](https://www.npmjs.com/package/path)_|

<br/><br/>

### 2. Configure Webpack

- Create `webpack.config.js` at project root.

- Specify the entry point and the output:

`webpack.config.js:`

```js
const webpack = require("webpack");
const path = require("path");

var config = {
  mode: "development",
  entry: {
    bundle: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
};

module.exports = config;
```

- Add Babel configuration:

`webpack.config.js:`

```js
  module: {
    rules: [
      {
      use: "babel-loader",
      test: /\.js$/,
      exclude: /node_modules/
      }
    ]
  }
  :
}
```

- Make provisions for vendor libraries

`webpack.config.js:`

```js
const VENDOR_LIBS = [];

var config = {
  ...
  entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS
  }
}
```

- You should end up with the following folder structure:

```
<project_root>
|-- .babelrc
|-- package.json
|-- webpack.config.js

```

## Step 3: Set up React

### 1. Install React

```
npm install --save react@17.0.2 react-dom@17.0.2
```

where:
| Library | Description / Link |
| ---------- | ------------ |
| react: | React library |
| | _[home](https://reactjs.org/)_ |
| react-dom: | Serves as the entry point to the DOM and server renderers for React |
| | _[npm](https://www.npmjs.com/package/react-dom)_ |

<br/><br/>

### 2. Create React files

- In project root, create `src` directory, then create two files inside that:
  - `index.js`
  - `app.js`
<br/><br/>
- Also in project root, create a new file:
  -  `index.html`

Folder structure:

```
<project_root>
|-- .babelrc
|-- package.json
|-- webpack.config.js
|-- index.html
|-- src
  |-- app.js
  |-- index.js
```

### 3. Setup basic React

- Setup HTML file,...

`index.html:`

```html
<!DOCTYPE html>
  <head></head>
  <body>
    <div id="root"></div>
    <script src="../dist/bundle.js"></script>
  </body>
</html>
```

- ...the script,

`src/index.js:`

```js
import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

ReactDOM.render(<App />, document.getElementById("root"));
```

- ...and a basic application script to display something

`src/app.js`

```js
import React from "react";

const greeting = (firstname, lastname) => {
  return (
    <p>
      My name is {firstname} {lastname}
    </p>
  );
};

function App() {
  return (
    <div className="App">
      <h2>Hello! World!</h2>
      {greeting("John", "Smith")}
    </div>
  );
}

export default App;
```

- Now add the libraries to the Webpack configuration file

`webpack.config.js:`

```js
const VENDOR_LIBS = ["react", "react-dom"];

  :

entry: {
    bundle: './src/index.js',
    vendor: VENDOR_LIBS
  },
```

### 4. Final React configurations

- Configure NPM run scripts

`package.json:`

```json
...
"scripts" {
  "clean": "rimraf './dist/*'",
  "build": "npm run clean && webpack --mode production",
  "dev": "NODE_ENV=development webpack-dev-server"
}
```

### 5. Test the Basic React webpage

- Run a build

```bash
> npm run build
```

You should see a `dist` folder in the project root containing files.

<br/>

- Open `./src/index.html` in your web browser.

  You should be able to see "Greetings" and a name displayed

<br/>

At this point you have a basic JavaScript site set up with Webpack.

<br/><br/>

### 6. Further configurations
<br/><br/>
#### 6.1 Configure dev server settings

`webpack.config.js`

```js
devServer: {
  port: 3000,
  },
devtool: "source-map"
```

<br/><br/>
#### 6.2 Configure HTML

Install `HTMLWebpackPlugin`

```bash
npm install --save-dev html-webpack-plugin@5.5.0
```

`webpack.config.js`

```js
const HtmlWebpackPlugin = require("html-webpack-plugin");

  :

var config = {

  :

plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    })
  ],

  :

}
```

<br/><br/>
#### 6.3 Configure favicon

Install `favicons-webpack-plugin`:

```bash
npm install --save-dev favicons favicons-webpack-plugin
```
where:
| Library | Description / Link |
| ---------- | ------------ |
| favicons: | A Node.js module for generating favicons and their associated files |
| | _[npm](<[favicons](https://www.npmjs.com/package/favicons)>)_ &#124; _[github](https://github.com/itgalaxy/favicons)_|
| favicons-webpack-plugin: | Leverages on favicons to automatically generate favicons |
| | _[npm](<[favicons-webpack-plugin](https://www.npmjs.com/package/favicons-webpack-plugin)>)_ &#124; _[github](https://github.com/jantimon/favicons-webpack-plugin)_|

Add the plugin to webpack:

<br/><br/>
#### 6.4 Configure ChunkHash

`webpack.config.js`

```js
output: {
    path: path.resolve(__dirname, "dist/"),
    filename: "[name].[hash]-[id].js",
  },
```

<br/><br/>
#### 6.5 Configure Hot Module Replacement (HMR)

Install `react-hot-loader`:

```bash
npm install --save react-hot-loader
```

where:
| Library | Description / Link |
| ---------- | ------------ |
| react-hot-loader: | Enables automatic reloading of React components without loss of state |
| | _[home](<[react-hot-loader](https://github.com/gaearon/react-hot-loader)>)_ &#124; _[github](https://github.com/gaearon/react-hot-loader)_|

Make changes to webpack configuration:

`package.json`

```json
"scripts": {
  "dev": "NODE_ENV=development webpack-dev-server --hot",
}
```

- Run the dev server

```bash
> npm run dev
```

Browse to _[http://localhost:3000](http://localhost:3000)_

You should see "Hello World" displayed on your browser

<br/><br/>
#### 6.6 Configure Babel for async/await

- References: _[Babel Document](https://babeljs.io/docs/en/babel-polyfill)_ | _[Stack Overflow](https://stackoverflow.com/questions/33527653/babel-6-regeneratorruntime-is-not-defined)_ | _[Blog Post](https://dev.to/hulyakarakaya/how-to-fix-regeneratorruntime-is-not-defined-doj)_

- Install `babel-polyfill` and `regenerator-runtime`

`bash`
```
npm install --save-dev @babel/polyfill regenerator-runtime
```

- Update the Webpack configuration:<br/>
Add "regenerator-runtime" to the VENDOR_LIBS array

`webpack.config.js`
```js
const VENDOR_LIBS = [..."regenerator-runtime/runtime.js"];
```

<i>note:</i> 
You will need to add the following at the top of each file that you create an async/await request:

```js
import "@babel/polyfill";
import "regenerator-runtime/runtime";
```



<br/><br/>

# Part 2: Configure Styling and Images

## Step 1. Set up CSS

_(optional. skip if creating backend APIs)_

### 1. Setup CSS Loader

```bash
npm install -–save-dev css-loader@6.6.0
```

where:
| Library | Description / Link |
| ----------- | ------------ |
| css-loader: | Enables Webpack to import and parse CSS files. <br/> Does not do anything with it. |
| | _[link](https://webpack.js.org/loaders/css-loader/)_ |

`webpack.config.js:`

```js
module: {
  rules: [
    {
      use: ["css-loader"],
      test: /\.css$/,
    },
  ];
}
```


### 2. Pure CSS Configuration: style-loader

Install style-loader:

```bash
npm install --save-dev style-loader@3.3.1
```

where:
| Library | Description / Link |
| ------------ | ----------- |
| style-loader: | Injects CSS into the `<style>` tag of the HTML document |
| | _[link](https://webpack.js.org/loaders/style-loader/)_ |

<br/>

Webpack configuration:

Edit the webpack configuration to include `style-loader`<br/><br/>

change from:

`webpack.config.js`
```js
  :
 {
      use: ["css-loader"],
      test: /\.css$/, 
  :
```

...to:

`webpack.config.js:`

```js
module: {
  rules: [
    {                                      // Add "style-loader"
      use: ["style-loader", "css-loader"], // note the sequence!
      test: /\.css$/,                      
    },
  ],
}
```



### 3. Add styling to the Webpage

- In the `src` folder, create a folder named `styles`
- Create a `styles.css` file inside the `styles` folder, then create some basic styling:

`src/styles/styles.css`

```css
body {
  color: ivory;
  background-color: darkslategray;
}
```

`src/app.js`

```js
import "./styles/styles.css";
```

Rebuild the webpage again using `npm run dev`. 

Load the webpage in `http://localhost:3000`

You should see a change in the text and background colour.

## Step 2. Configuring SASS (optional)

```
npm install -–save-dev  node-sass@7.0.1 sass-loader@12.6.0
```

where:
| Library | Description / Link |
| ------------ | ------------ |
| node-sass: | |
| | _[link](https://github.com/sass/node-sass)_ \| _[npm](https://www.npmjs.com/package/node-sass)_ |
| sass-loader: | |
| | _[link](https://github.com/webpack-contrib/sass-loader)_ \| _[npm](https://www.npmjs.com/package/sass-loader)_ |

<br/>


Add the following webpack configuration in addition to the previous CSS rule:

`webpack.config.js:`

```js
rules: [
  {                                      
      use: ["style-loader", "css-loader"], 
      test: /\.css$/,                      
    },
  {
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
    test: /\.s[ac]ss$/i,
  },
],
```

3. Configure Images

```
npm install --save-dev image-webpack-loader url-loader
```

`webpack.config.js:`

```js
rules: [
  {
    test: /\.(jpe?g|png|gif|svg)$/,
    use: [
      {
        loader: "url-loader",
        options: { limit: 40000 }
      },
      'image-webpack-loader'
    ]
  },
]
```

- Change the stylesheet from `src/styles/styles.css` to `styles.scss`.

- In `app.js`, change the import to reflect the changes:

```js
import "./styles/styles.scss";
```

- Edit `index.html` to remove the `<script>` tag:

```html
<script src="./dist/bundle.js"></script>
```

- Restart the dev server:

`ctrl-c` (if already running)

`npm run dev`

<br/><br/><br/>


## Step 3. Configuring CSS Modules (optional)

<br/><br/>

# Configure Environment Variables for React

## Step 1. Create Environment Variables Files

We need separate `.env.*` files for different environments. The environment type is set in the `package.json` script. This determines which `.env` file is loaded.
<br/><br/>
At project root, create the following files: 
- `.env`
- `.env.production`
- `.env.development`
  
Place your environment variables inside. Use the sample file as a guide.
<br/><br/>
## Step 2. Refactor `webpack.config.js`

Change from:

`webpack.config.js`

```js
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

...

var config = {
  entry: {
    ...
  },
  output: {
    ...
  }
};

module.exports = config;
```

...to:

`webpack.config.js`

```js
const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {

  const VENDOR_LIBS = ["react", "react-dom"];

  return {
      entry: {
    ...
  },
  output: {
    ...
  }
  };
};
```

## Step 3. Configure / Check your `package.json` scripts

`package.json`

```js
  ...
"scripts": {
    "clean": "rimraf dist",
    "build:prod": "NODE_ENV=production npm run clean && webpack -p",
    "build:dev": "NODE_ENV=development npm run clean && webpack -p",
    "start:dev": "NODE_ENV='' webpack-dev-server --hot",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
```

# Configure environmental variables loading

## Step 1. Install dotenv to read `.env` files

```bash
npm install --save dotenv
```

where:
| Library | Description / Link |
| ------------ | ------------ |
| dotenv: | Enables loading of environment variables from a `.env` file |
| | _[npm](https://www.npmjs.com/package/dotenv)_ |

## Step 2. Create `.env` files

At project root, create files:

- `.env`

- `.env.development`

- `.env.production` 

and fill them with your variables. Example format below:

```txt
API_1_KEY=sNOs9823bvp098w4fGhNOLIinoi98hb
API_2_KEY=JOjuyfl0767yNB898gb0990987BL_JB
ENVIRONMENT_SETTING=development
```

## Step 3. Setup configuration to load the correct variable file

`webpack.config.js`

```js
const fs = require("fs");
const dotenv = require("dotenv");

module.exports = () => {
  const envPath = path.join(__dirname) + "/.env." + process.env.NODE_ENV;
  const envPathDefault = path.join(__dirname) + "/.env";
  const envPathFinal = fs.existsSync(envPath) ? envPath : envPathDefault;

  const env = dotenv.config({ path: envPathFinal }).parsed;

  return {
    ...
    new webpack.DefinePlugin({
      "process.API_1_KEY": JSON.stringify(process.env.API_1_KEY),
      "process.API_2_KEY": JSON.stringify(process.env.API_2_KEY),
      "process.env.ENVIRONMENT_SETTING": JSON.stringify(
          env.ENVIRONMENT_SETTING
        ),
    })
    ...
  }
};
```

# Setup Testing

## Step 1. Install testing libraries:

```bash
npm install --save-dev jest enzyme jest-enzyme enzyme-adapter-react-16
```

- plus alternately:

```bash
npm install --save-dev moxios
```

... or

```bash
npm install --save-dev fetch-mock

```

where:
| Library | Description / Link |
| ------------ | ------------ |
| jest: | A testing framework for JavaScript |
| | _[home](https://jestjs.io/)_ _[npm](https://www.npmjs.com/package/jest)_ _[github](https://github.com/facebook/jest)_ |
| enzyme | JavaScript testing utility for React that enables traversal of the DOM |
| | _[home](https://enzymejs.github.io/enzyme/)_ _[npm](https://www.npmjs.com/package/enzyme)_ |
| jest-enzyme | Allows Jest to talk to Enzyme |
| | _[home](https://formidable.com/open-source/jest-enzyme/)_ _[npm](https://www.npmjs.com/package/jest-enzyme)_ _[github](https://github.com/FormidableLabs/enzyme-matchers/blob/master/README.md)_ |
| enzyme-adapter-react-16 | Enzyme adapter for React v16 |
| | _[home](https://enzymejs.github.io/enzyme/docs/installation/react-16.html)_ _[npm](https://www.npmjs.com/package/enzyme-adapter-react-16)_ |
| moxios | Mocks axios requests for testing |
| | _[npm](https://www.npmjs.com/package/moxios)_ _[github](https://github.com/axios/moxios)_ |
| fetch-mock | Mocks fetch requests for testing |
| | _[npm](https://www.npmjs.com/package/fetch-mock)_ |

- Add test script to `package.json`

```json
"scripts": {
  ...
  "test": "jest --watch"
}
```

## Step 2. Install libraries to remove testing properties from production code

```bash
npm install --save-dev babel-plugin-react-remove-properties
```

where:
| Library | Description / Link |
| ------------ | ------------ |
| babel-plugin-react-remove-properties: | Removes test properties from production code |
| | _[npm](https://www.npmjs.com/package/babel-plugin-react-remove-properties)_ _[github](https://github.com/oliviertassinari/babel-plugin-react-remove-properties)_ |

Add the following to your `.babelrc` file:

```json
{
  ...
"env": {
    "production": {
      "plugins": [
        [
          "react-remove-properties",
          {
            "properties": [
              "data-test"
            ]
          }
        ]
      ]
    }
  }
}
```

## Step 3. Configure Jest to ignore some files

1. SASS / SCSS files

```bash
npm install --save-dev babel-jest
```

where:
| Library | Description / Link |
| ------------ | ------------ |
| babel-jest: | |
| | _[npm](https://www.npmjs.com/package/babel-jest)_ _[github](https://github.com/facebook/jest)_ |

`package.json`

```json
  "jest": {
    "moduleNameMapper": {
      "^.+\\.(css|less|scss)$": "babel-jest"
    }
  },

```

# Setup for Documentation

## Step 1: Configure JSDoc

1. Install JSDoc

```bash
npm install --save-dev jsdoc
```

where:
| Library | Description / Link |
| ------------ | ------------ |
| jsdoc: | API Document generator for JavaScript |
| | _[npm](https://www.npmjs.com/package/jsdoc)_ _[github](https://github.com/jsdoc/jsdoc)_ |

2. Configure VSCode for JSDoc

Configure VSCode for type checking.

<br/>
Option 1: Using VSCode settings

Open `.vscode/settings.json`, add the following:

```json
"javascript.implicitProjectConfig.checkJs": true,
```

<br/>
Option 2: using `jsconfig.json` at project root

```json
{
  "source": {
    "include": ["src"],
    "includePattern": ".js$",
    "excludePattern": "(node_modules/|docs)"
  },
  "plugins": ["plugins/markdown"],
  "templates": {
    "cleverLinks": true,
    "monospaceLinks": true
  },
  "opts": {
    "checkJs": true,
    "recurse": true,
    "destination": "./docs/",
    "template": "./custom-template",
    "tutorials": "./tutorials",
    "readme": "./readme/readme.md"
  }
}
```

notes:

If default JavaScript checking is configured (as above):

- To turn off type checking, put `// @ts-nocheck` at the top of the file.

If default JavaScript checking is not configured:

- You can configure a single file by placing `// @ts-check` at the top of the file.

To selectively leave out blocks of code, use `// @ts-ignore`

<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

## Step 2: Basic Express Server Setup

1. Install `Express:`

```
npm install --save express
```

2. Create files

Folder structure:

```
<project_root>
|-- .babelrc
|-- package.json
|-- webpack.config.js
|-- src
    |-- server.js
    |-- index.html
```

3. Setup `NPM` run scripts

`package.json:`

```json
"scripts":{
  "start": "node ./server.js"
}
```

4. Create basic Express server files

`server.js:`

```js
const path = require("path");
const express = require("express");

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html");

app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
  console.log("Press Ctrl+C to quit.");
});
```

`index.html:`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Express and Webpack Boilerplate</title>
    <link rel="shortcut icon" href="#" />
  </head>
  <body>
    <p class="description">Express and Webpack Boilerplate App</p>
  </body>
</html>
```

5. Test and run

```
npm start
```

Browse to `http://localhost:8080`

<br/><br/><br/>

## Further Reading

<br/>

### Babel:

- [How to use ES6 with Babel and webpack](https://blog.jakoblind.no/babel-webpack-es6/)
- [What is @babel/preset-env and why do I need it?](https://blog.jakoblind.no/babel-preset-env/)

<br/>

### CSS / SASS / CSS Modules:

- [Webpack Loaders, CSS and Style Loaders](https://medium.com/a-beginners-guide-for-webpack-2/webpack-loaders-css-and-sass-2cc0079b5b3a)
- [What is the difference between style-loader and mini-css-extract-plugin?](https://maxrozen.com/difference-between-style-loader-mini-css-extract-plugin/)
- [How to configure CSS and CSS modules in webpack](https://blog.jakoblind.no/css-modules-webpack/)

<br/>

### ECMAScript:

- [JavaScript brief history and ECMAScript(ES6,ES7,ES8,ES9) features](https://medium.com/@madasamy/javascript-brief-history-and-ecmascript-es6-es7-es8-features-673973394df4)
- [The Complete ECMAScript 2015-2019 Guide](https://flaviocopes.com/ecmascript/)
- [ES5, ES6, ES7, ES8, ES9: What’s new in each Version of JavaScript](https://www.greycampus.com/blog/programming/java-script-versions)

<br/>

### Express:

- [Creating a Node Express-Webpack App with Dev and Prod Builds](https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334)

<br/>

### React:

- [Step-By-Step: Create a React Project from Scratch](https://www.codementor.io/@rajjeet/step-by-step-create-a-react-project-from-scratch-11s9skvnxv)

<br/>

### Webpack:

- [How to streamline your React.js development process using Webpack 4](https://medium.com/free-code-camp/how-to-develop-react-js-apps-fast-using-webpack-4-3d772db957e4)

## Version Reference

`package.json`:

```json
"devDependencies": {
    "@babel/core": "^7.11.6",
    "@babel/plugin-proposal-class-properties": "^7.10.4",
    "@babel/preset-env": "^7.11.5",
    "@babel/preset-react": "^7.10.4",
    "babel-loader": "^8.1.0",
    "css-loader": "^4.3.0",
    "dotenv": "^8.2.0",
    "eslint": "^7.8.1",
    "eslint-plugin-react": "^7.20.6",
    "html-webpack-plugin": "^4.4.1",
    "rimraf": "^3.0.2",
    "style-loader": "^1.2.1",
    "webpack": "^4.44.1",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0"
  },
  "dependencies": {
    "@fortawesome/fontawesome-svg-core": "^1.2.30",
    "@fortawesome/free-solid-svg-icons": "^5.14.0",
    "@fortawesome/react-fontawesome": "^0.1.11",
    "axios": "^0.20.0",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-hot-loader": "^4.12.21",
    "uuid": "^8.3.0"
  }
```
