
# Ignite Linnify Boilerplate 


Once you've installed [React Native](https://shift.infinite.red/painless-react-native-setup-for-mac-windows-linux-956c23d2abf9) and the [Ignite CLI](https://github.com/infinitered/ignite), you can get started with this boilerplate.

Includes:

- React Native
- React Navigation
- React Redux
- TypeScript
- And more!

## Quick Start

First, install Ignite CLI:

```
$ yarn global add ignite-cli
```

Then spin up a new Linnify-powered React Native app:

```
$ ignite new MyApp -b ignite-linnify
```

`cd` into your new app and run `react-native run-ios` or `react-native run-android` (note: in Android you'll need an Android emulator running or an Android phone attached).

## Explanation of folder structure

The Ignite Linnify boilerplate project's structure will look similar to this:

```
ignite-project
├── src
│   ├── components
│   ├── config
│   ├── containers
│   ├── images
│   ├── navigation
│   ├── services
│   ├── store
│   ├── themes
│   ├── transforms
│   └── types
├── README.md
├── android
├── ignite
│   ├── ignite.json
│   └── plugins
├── index.js
├── ios
├── tslint.json
├── tsconfig.json
└── package.json
```

### ./src directory

Included in an Ignite boilerplate project is the `src` directory. This is a directory you would normally have to create when using vanilla React Native.

The inside of the `src` directory looks similar to the following:

```
src
├── components
├── config
├── containers
├── images
├── navigation
├── services
├── store
├── themes
├── transforms
└── types
```

### components
This is where your React components will live. Each component will have a directory containing the `.tsx` file, the `style` file and `index.ts`.

### containers
This is where your screen containers will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.tsx` file, along with any assets or other helper files. The app contains by default RootContainer and a LaunchScreen.

### navigation
This is where your `react-navigation` navigators will live.

### services
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, etc.).

### themes
Here lives the theme for your application, including spacing, colors, and typography, etc. The app contains some of them by default.

### transforms
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truly shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

### types
This is where your classes and interfaces will live

## Others
### ./ignite directory

The `ignite` directory stores all things Ignite, including CLI and boilerplate items. Here you will find generators, plugins and examples to help you get started with React Native.

# Generators
## Basics
### Containers
This will generate in src/container the following:
```
name
├── name.tsx
├── nameStyle.tsx
└── index.ts
```
Call using:
```
ignite generate container name
```
#
### Components
This will generate in src/components the following:
```
name
├── name.tsx
├── nameStyle.tsx
└── index.ts
```
Call using the following command. Will be asked to chose between pure or stateless component. Please match the case
```
ignite generate component name
```
#
### Lists
This will generate in src/components the following:
```
NameList
├── NameList.tsx
├── NameListStyle.tsx
└── index.ts
NameListItem
├── NameListItem.tsx
├── NameListItemStyle.tsx
└── index.ts

```
Call using the following command. Please use small case for the name as it will be automatically transformed.
```
ignite generate component name
```
# 
## Redux
For every generator all the related files will be updated.
### Store
This will generate a store with all the files for a given name. Please use plural and small case.
```
ignite generate store-basic name
```
#
### Service
This will generate a service file with CRUD operations and a class with the given name. Please use plural and small case.
```
ignite generate service name
```
If you want to use pagination you should use:
```
ignite generate service-pagination name
```
#
### Selector
This will add files to the selector. Please use singular and small case.
```
ignite generate selector name
```
#
### Actions
#### 1.Load Actions
Will create/update all the files needed for a load action. Please use plural and small case.
```
ignite generate action-load name
```
If you want to use pagination you should use:
```
ignite generate action-load-pagination name
```
#### 2. Add Action
Will create/update all the files needed for an add action. Please use singular and small case.
```
ignite generate action-add name
```
#### 3. Delete Action
Will create/update all the files needed for a delete action. Please use singular and small case.
```
ignite generate action-delete name
```
