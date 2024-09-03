
# test-stg

## Description
test-stg is good option if You want to run jest unit tests only to staged js, ts, jsx, tsx files

## Content table
- [Install](#install)
- [Features](#features)
- [Use](#use)
- [Contribute](#contribute)
- [License](#license)

## Install
```bash
npm i -D test-stg
```
note: you must have jest installed

## Features

test-stg assumes that your proyect has one of the next structures

Structure A
```bash
--src
    |__components
    |   |__tests
    |   |   |_app.test.js
    |   |_app.js
    |
    |__pages
        |__tests
        |   |_home.test.jsx
        |_home.jsx
```

or

Structure B
```bash
--src
    |__components
    |   |_app.js
    |
    |__pages
    |   |_home.jsx
    |
    |__tests
        |__componets
        |   |_app.test.js
        |__pages
            |_home.test.jsx
```

test-stg command accept two params, the first one to set build pattern 1 for Structure A and 2 for Structure B
default value is 1. The second param is the name used for test folder and extention file eg test, tests, expect, etc.
default value is 'test'

## Use
Just run `test-stg` command to run unit tests
```bash
npx test-stg 1 tests
```
It is a good idea to use test-stg with husky and lint-staged to automate testing process
```json
{
    "*.{js,jsx,tsx,ts}": [
            'prettier --write',
            'eslint --fix',
            'test-stg 1 tests',
        ],
    "*.{md,yml,css}": ['prettier --write'],
}
```

## Contribute
Contributions are always welcome

## License
This proyect uses MIT license.