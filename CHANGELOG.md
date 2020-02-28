# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
