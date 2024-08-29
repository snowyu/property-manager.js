# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [2.0.0](https://github.com/snowyu/property-manager.js/compare/v2.0.0-alpha.5...v2.0.0) (2024-08-29)

## [2.0.0-alpha.5](https://github.com/snowyu/property-manager.js/compare/v2.0.0-alpha.4...v2.0.0-alpha.5) (2023-12-30)


### Features

* add skipDefault option to property descriptor ([121fb68](https://github.com/snowyu/property-manager.js/commit/121fb682052aacf43eac612d3968af7579816fef))

## [2.0.0-alpha.4](https://github.com/snowyu/property-manager.js/compare/v2.0.0-alpha.3...v2.0.0-alpha.4) (2023-06-15)


### Bug Fixes

* **lint:** typo and ignore @typescript-eslint/no-invalid-this ([ef7d26c](https://github.com/snowyu/property-manager.js/commit/ef7d26c290e9899dd36b2a021fbc4710b1be850d))

## [2.0.0-alpha.3](https://github.com/snowyu/property-manager.js/compare/v2.0.0-alpha.2...v2.0.0-alpha.3) (2023-04-14)


### Bug Fixes

* **ctor:** do not call initialize if no arguments ([f67a659](https://github.com/snowyu/property-manager.js/commit/f67a659fa48614c47ef6a88667d862d886960067))


### Refactor

* **abstract:** use [].includes instead [].indexOf ([2d46052](https://github.com/snowyu/property-manager.js/commit/2d460527c58297ac9cb67995c1ba8c6d4886683c))

## [2.0.0-alpha.2](https://github.com/snowyu/property-manager.js/compare/v2.0.0-alpha.1...v2.0.0-alpha.2) (2023-04-14)


### Bug Fixes

* export all types ([248d0b4](https://github.com/snowyu/property-manager.js/commit/248d0b4abbb1965251bf94d6ff655be952e7e4cc))

## [2.0.0-alpha.1](https://github.com/snowyu/property-manager.js/compare/v2.0.0-alpha.0...v2.0.0-alpha.1) (2023-04-12)


### Bug Fixes

* export Properties etc to index.js ([a362a17](https://github.com/snowyu/property-manager.js/commit/a362a17adc50dd137bce0458fa7b25b247969947))

## [2.0.0-alpha.0](https://github.com/snowyu/property-manager.js/compare/v1.6.1...v2.0.0-alpha.0) (2023-04-12)


### Features

* **ts:** export all on index.js ([9d31e79](https://github.com/snowyu/property-manager.js/commit/9d31e7947ee938664103c7871a5a664ddc9b25dd))


### Bug Fixes

* export all functions ([5ad3634](https://github.com/snowyu/property-manager.js/commit/5ad3634f8aa5a204c680206ad64a62c778718c4f))
* **ts:** export all functions on index.js ([97b079e](https://github.com/snowyu/property-manager.js/commit/97b079e664e35b5b91db5e0346df86026a629932))
* **ts:** export functions and more docs added ([aad7199](https://github.com/snowyu/property-manager.js/commit/aad71992d73e59d02c2ad3d6e96fd0bea4b82c5f))
* **ts:** export named PropertyAbility ([f9f7784](https://github.com/snowyu/property-manager.js/commit/f9f77841c889d9ae1b8640d5dc0f2e3044f148fc))
* **ts:** export named SimplePropertyManager ([2d6f288](https://github.com/snowyu/property-manager.js/commit/2d6f288ff944cdd7916b4a9146dab801f75beeea))


### Refactor

* convert coffeescript to js ([462214d](https://github.com/snowyu/property-manager.js/commit/462214d99b0c01611a31caefc0ae71ebfd94cc08))

## [1.5.0](https://github.com/snowyu/property-manager.js/compare/v1.4.1...v1.5.0) (2021-04-14)


### Features

* **ts:** can add customize prop name of PropDescriptor ([8fcfb04](https://github.com/snowyu/property-manager.js/commit/8fcfb04e03c737e9f470a748532a23ff0157b02f))
* add opts parameter to the assign option of the property of Normal and Advance PM ([88ea277](https://github.com/snowyu/property-manager.js/commit/88ea277db0903aaa9bb3f9be3d1ffaf71875ce9c))

### [1.4.1](https://github.com/snowyu/property-manager.js/compare/v1.4.0...v1.4.1) (2020-02-28)


### Bug Fixes

* **arrayOf:** push, unshift should keep compatiable with Array ([fbcc745](https://github.com/snowyu/property-manager.js/commit/fbcc74514dd41d2c004ffd8274d01441ad8d775e))

## [1.4.0](https://github.com/snowyu/property-manager.js/compare/v1.3.1...v1.4.0) (2020-01-27)


### Features

* add the readonly to smart assigned property ([1765da7](https://github.com/snowyu/property-manager.js/commit/1765da7123891d343b484900f47028d967cfbda6))
* DO NOT EXPORT the readonly property by default unless exported is true ([385fa1f](https://github.com/snowyu/property-manager.js/commit/385fa1ff17a7d875bc763d171a4932c79d390dd9))

### [1.3.1](https://github.com/snowyu/property-manager.js/compare/v1.3.0...v1.3.1) (2020-01-21)


### Bug Fixes

* **assign-value:** ts raise error "Cannot call a class as a function" ([c822f93](https://github.com/snowyu/property-manager.js/commit/c822f935005aa26cc7a9a40d64d6084d835e0113))

## [1.3.0](https://github.com/snowyu/property-manager.js/compare/v1.2.0...v1.3.0) (2020-01-19)


### Features

* add cloneTo method ([9b2e27b](https://github.com/snowyu/property-manager.js/commit/9b2e27b2ed7b1cdf8464d0b418d5e1e226eab636))
* add defaultOptions to customize default options of the property manager ([2ea05cf](https://github.com/snowyu/property-manager.js/commit/2ea05cf7e5978ec0e39267adf50290189b48c78b))


### Bug Fixes

* check skipExists on assignPropertyTo of NormalPropertyManager ([f57f804](https://github.com/snowyu/property-manager.js/commit/f57f8043233e6511d120ef8b99efedcfd17e1b18))

## [1.2.0](https://github.com/snowyu/property-manager.js/compare/v1.1.1...v1.2.0) (2020-01-16)


### Features

* add getProperties static method to advance and normal property manager ([303e1c1](https://github.com/snowyu/property-manager.js/commit/303e1c154ca8298543657c1635ce30795909c658))


### Bug Fixes

* the $attributes readonly property should use getPrototypeOf this ([d262748](https://github.com/snowyu/property-manager.js/commit/d2627485e9fe1cffeb39ea2c62e018e324ce4559))

### [1.1.1](https://github.com/snowyu/property-manager.js/compare/v1.1.0...v1.1.1) (2020-01-16)


### Bug Fixes

* rename PropTypes to PropTypeDesc ([ef0162a](https://github.com/snowyu/property-manager.js/commit/ef0162a24d6b3bbee6127ff13e5e36bfe50eca4f))

## [1.1.0](https://github.com/snowyu/property-manager.js/compare/v1.0.1...v1.1.0) (2020-01-16)


### Features

* add array.d.ts typescript declaration file ([f93ab49](https://github.com/snowyu/property-manager.js/commit/f93ab4929b0ab39202d8598233e7c2f199af20eb))

### [1.0.1](https://github.com/snowyu/property-manager.js/compare/v1.0.0...v1.0.1) (2020-01-15)


### Bug Fixes

* IPropDescriptor.type ts declaration miss Function ([b02d694](https://github.com/snowyu/property-manager.js/commit/b02d694f7f442803ff83e172517329372b4abc59))

## [1.0.0](https://github.com/snowyu/property-manager.js/compare/v0.12.7...v1.0.0) (2020-01-15)


### Features

* add arrayOf type supports ([97e1210](https://github.com/snowyu/property-manager.js/commit/97e1210f3c7be9d91a8d8a7595d40e34d0a01349))
* add assignValue function ([c3e9ccb](https://github.com/snowyu/property-manager.js/commit/c3e9ccb6f21b9aa27b140a58a28368ec5e1c9281))
* add the abstract manager to the ability ([6fb46da](https://github.com/snowyu/property-manager.js/commit/6fb46da8595d006e775c751d05a4a41da0d70fb1))
* add typed property supports. ([701b935](https://github.com/snowyu/property-manager.js/commit/701b9352ee2db44a547bcdcb308af591c6ac036f))
* use the new one options: IMergeOptions instead of many arguments ([e0ce8b6](https://github.com/snowyu/property-manager.js/commit/e0ce8b67387be896fdaa0740a8cb3d75ba0c03b2))


### Bug Fixes

* check value whether already be instanceof type ([af1b965](https://github.com/snowyu/property-manager.js/commit/af1b9655dcca5d084feb860920012156ca320fd5))

<a name="0.12.7"></a>
## [0.12.7](https://github.com/snowyu/property-manager.js/compare/v0.12.6...v0.12.7) (2018-12-03)
