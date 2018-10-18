# Ignite TypeScript Boilerplate for React Native
## An easy way to build React Native apps from scratch
***
 Currently included:
 - React Native ***0.57.3***
 - React Navigation ***2.18.0***
 - Redux ***4.0.1***
 
and more.

## Quick Start
***
Once you've installed [Ignite CLI](https://github.com/infinitered/ignite), you can create your new project using this *boilerplate*: 
```
ignite new MyAwesomeProject --b ignite-linnify-boilerplate
```

## Boilerplate at its finest
***

#### Containers

They are  Redux-connected and are stocked in the folder called *containers*.
- `LaunchScreen` : a basic screen 
- `RootContainer` : main application view
- `App.tsx`  : main application

`Container's Generation:`

- `ignite generate container ComponentName` - generates a Redux-connected Component

#### Components

They are stocked in the folder called *components*.
- `RoundedButton`: a basic rounded button 

`Component's Generation:`

- `ignite generate component ComponentName` - You'll have 2 choices after running this command: `pure` or `stateless`

#### Lists (Flatlist/Listview)

They are stocked along with `Components` in the folder called *components*. Here you'll have many choices.

`List's Generation:`

- `ignite generate list ListName` - generates a list (depending on what your choices will be) `and` a `ListItem` component which will be also used in the list
- `ignite generate list ListName TypeName` - same as `ignite generate list ListName` with the addition that in the `ListItem` component `TypeName` will be used instead of `any`.

#### Themes

- `ApplicationStyles.ts` : app's wide style
- `Colors.ts` : a few basic colors defined
- `Fonts.ts` : a few basic fonts defined
- `Images.ts` : here will be all your images you'll use in the app
- `Metrics.ts` : measurements and sizes used

#### Navigation 

Your primary navigation components.

- `AppNavigation.tsx`
- `NavigationService.ts`




