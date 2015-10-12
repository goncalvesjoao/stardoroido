# Startdoroido
StarWars droids React Component created with [React-to-commonJS](https://github.com/goncalvesjoao/react-to-commonjs)

![boilerplate_structure](https://raw.github.com/goncalvesjoao/stardoroido/master/readme/preview.png)

This React Component was built, tested and documented with the help of [React-to-commonJS](https://github.com/goncalvesjoao/react-to-commonjs), check it out if you want to create a React Component without the pain of gathering all the necessary developing tools, building your own documentation page (like [this](http://goncalvesjoao.github.io/stardoroido/)) and or mock servers for testing/developing purposes.

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
This tool was built using:
- node 4.1.0
- npm 3.3.3
