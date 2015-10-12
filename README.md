# Startdoroido
StarWars droids React Component created with [React-to-commonJS](https://github.com/goncalvesjoao/react-to-commonjs)

![boilerplate_structure](https://raw.github.com/goncalvesjoao/stardoroido/master/readme/preview.png)

This React Component was built, tested and documented with the help of [React-to-commonJS](https://github.com/goncalvesjoao/react-to-commonjs), check it out if you want to create a React Component without the pain of gathering all the necessary developing tools, building your own documentation page ([like this one](http://goncalvesjoao.github.io/stardoroido/)) and or mock servers for testing/developing purposes.

## Getting started
```
$> npm install git+https://git@github.com:goncalvesjoao/stardoroido.git#master --save
```
You can now require **stardoroido** on your React project like a normal node module.

## Documentation
Examples and Api documentation in [here](http://goncalvesjoao.github.io/stardoroido/).

## Usage
```javascript
const React = require('react');
const Stardoroido = require('stardoroido');
const { Droids } = Stardoroido.components;

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <Droids />
      </div>
    );
  }
}
```

## Notes
(this tool was built using: node v4.1.0 and npm v3.3.3)

- In truth this React Component is actually the one that comes built-in with react-to-commonjs when it creates a new project.

  Why does react-to-commonjs create a template project you ask? Because the documentation page would be blank and you wouldn't get to see how to connect your component to the documentation page.

- This simple project makes an ajax call to fetch the droids data and for that it makes use of mock servers. This way front-end development doesn't have to wait for back-end development.

- The existing test spec is both an example of how you can test your React Component and how you can setup your spec to prevent a remote ajax call.

- Also, this project was created using the --css_modules option:
  ```
  $> r2c2 new stardoroido --css_modules
  ```
  which means that this project uses  [react-css-modules](https://github.com/gajus/react-css-modules), the spec example is also prepared for this and mocks the react-css-modules lib, so that mocha doesn't launch an error while loading css files.
