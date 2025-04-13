# CreatioART: Template Node.js Angular Frontend

[![Release Level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)]()

CreatioART - Template Node.js Angular Frontend able to handle web portals.

## Getting Started

1. [Artifact](#artifact)
1. [Requirements](#requirements)
1. [Project organization](#project-organization)
1. [Environment variable](#environment-variable)
1. [Building from Source](#building-from-source)
1. [Test the Artifact](#test-the-artifact)
1. [Run in Local Mode](#run-in-local-mode)
1. [CreatioART templates](#creatioart-templates)
1. [License](#license)
1. [Change Log](#change-log)

### Templates for use

Service templates are public. `README.md` file for each template contains instructions for running it.

| Source Code                                                                        | Status                                                                                               |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [Express Service](https://github.com/creatioart/template-nodejs-express-service)   | [![Release Level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)]() |
| [Express Function](https://github.com/creatioart/template-nodejs-express-function) | [![Release Level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)]() |
| [GrapHQL Servicen](https://github.com/creatioart/template-nodejs-graphql-service)  | [![Release Level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)]() |
| [Angular Frontend](https://github.com/creatioart/template-nodejs-angular-frontend) | [![Release Level](https://img.shields.io/badge/release%20level-stable-brightgreen.svg?style=flat)]() |

## Artifact

| Element       | Description                                  |
| ------------- | -------------------------------------------- |
| Artifact id   | @creatioart/template-nodejs-angular-frontend |
| Artifact Name | template-nodejs-angular-frontend             |

## Requirements

####

To build and run the application you need:

- [Node.js 20](https://nodejs.org/dist/v20.18.0)
- Projects must configure [TypeScript](https://typescriptlang.org) to use types from the ECMAScript modules that have a:
  - [`compilerOptions.allowJs`](https://typescriptlang.org/tsconfig#allowJs) should be `true`.
  - [`compilerOptions.module`](https://typescriptlang.org/tsconfig#module) should be `"node16"` or `"nodenext"`.

## Project organization

The code is organized as follows:

1. `app` contains the application modules.
1. `assets` contains the assets files.
1. `environments` contains the environments files.
1. `locale` contains the locale files.
1. `model` contains the entity models.

## Environment variable

**Artifact environment variable**

- APP_ENV: Used to set the execution environment. Values: local, dev, test, prod.

```json
{
  "APP_ENV": "dev"
}
```

## Building from Source

1. Install Node.js 20 - [Node.js 20 Download](https://nodejs.org/dist/v20.18.0)
1. Install dependencies: npm install
1. Run compile: npm run build

## Test the Artifact

1. Install Node.js 20 - [Node.js 20 Download](https://nodejs.org/dist/v20.18.0)
1. Install dependencies: npm install
1. Run test: npm run test

## Run in Local Mode

1. Install Node.js 20 - [Node.js 20 Download](https://nodejs.org/dist/v20.18.0)
1. Install dependencies: npm install
1. Run develop: npm run dev

## CreatioART templates

Complementary templates available from CreatioART:

Made with ❤️ by the CreatioART team.

- https://www.npmjs.com/org/creatioart-js

## Contribute

If you are interested in fixing issues and contributing directly to the code,
please contact to the project manager. Here is how you can contribute to CreatioART.template-nodejs-angular-frontend:

- Submit bugs and help us verify fixes
- Submit pull requests for bug fixes and features and discuss existing proposals

## License

[Apache-2.0](LICENSE)

## Change Log

[Change Log](CHANGELOG.md)
