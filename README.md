# slugizoid
[![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=shield)](#contributors)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![codecov](https://codecov.io/gh/mb3online/slugizoid/branch/develop/graph/badge.svg)](https://codecov.io/gh/mb3online/slugizoid)
[![CircleCI](https://circleci.com/gh/mb3online/slugizoid.svg?style=shield)](https://circleci.com/gh/mb3online/slugizoid)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

👽 Slugizoïd - Package for managing REST API slugs

## Problem

When working with our API we found that the database always requires `_`(underscore) delimitated strings for column and table names where we use `-`(dash) in urls to make them more human readable. This then became an issue of converting different types of slugs back and forth between pluralized and singular, delimitated by dash and underscore which was heavy work and thought we shouldn't need consider.

## Solution

Slugizoid is our simple solution to this problem, have a function that takes in any combination of delimitated strings pluralized or singular and normalizes them to allow for simple comparison and consistent output.

## Install

`yarn add slugizoid`
or
`npm i slugizoid`

## API

### Creation

```javascript
default function (slug: string = ''): {
  toString: Function,
  equals: Function,
  slugify: Function,
  urlify: Function,
}
```

Creation is simple, call the default exported anonymous function with your slug (delimitated by either `-` or `_`, with any case, plural or singular) and you will get back a slug object.

```javascript
import slugizoid from 'slugizoid';

const slug = slugizoid('pull-requests');
```

### Comparison

`function equals(slug: string): boolean`

Comparing slugs is easy, after creating a slug there is an exposed `.equals` method that takes a string to compare against.

```javascript
import slugizoid from 'slugizoid';

const slug = slugizoid('pull-requests');

console.log(slug.equals('pull')); // false
console.log(slug.equals('pull_requests')): // true
console.log(slug.equals('pull_request')): // true
console.log(slug.equals('pull-request')): // true
console.log(slug.equals('pull-requests')): // true
```

### Stringify

There are three functions slugizoid provides to get strings from the slug object.

#### `slugify`

`function slugify(): string`

`slugify` outputs the slug as a singular, `_` delimitated string

```javascript
import slugizoid from 'slugizoid';

const slug = slugizoid('pUlL-REquests');

console.log(slug.slugify()); // pull_request
```

### `urlify`

`function urlify(): string`

Similar to `slugify`, `urlify` outputs the slug as a plural, `-` delimitated string

```javascript
import slugizoid from 'slugizoid';

const slug = slugizoid('pUlL-REquests');

console.log(slug.urlify()); // pull-requests
```

### `toString`

`function toString(options: ?{ plural: boolean }): string`

A simple method that outputs the slug as a space delimitated, capitalized, singular string. You can pass an object of options with a value of `plural: true` which will pluralize the output.

```javascript
import slugizoid from 'slugizoid';

const slug = slugizoid('pUlL-REquests');

console.log(slug.toString()); // Pull Request
console.log(slug.toString({ plural: true })); // Pull Requests
```

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars0.githubusercontent.com/u/1922965?v=4" width="100px;"/><br /><sub>Tyler Fry</sub>](https://github.com/frytyler)<br />[💻](https://github.com/mb3online/slugizoid/commits?author=frytyler "Code") | [<img src="https://avatars0.githubusercontent.com/u/6516758?v=4" width="100px;"/><br /><sub>Eric Adamski</sub>](https://github.com/ericadamski)<br />[💻](https://github.com/mb3online/slugizoid/commits?author=ericadamski "Code") [🎨](#design-ericadamski "Design") [🤔](#ideas-ericadamski "Ideas, Planning, & Feedback") [👀](#review-ericadamski "Reviewed Pull Requests") [⚠️](https://github.com/mb3online/slugizoid/commits?author=ericadamski "Tests") |
| :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification. Contributions of any kind welcome!
