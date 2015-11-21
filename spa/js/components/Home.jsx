import React from 'react';
import Prism from './Prism';
import { config } from '../../../src';

class Home extends React.Component {

  render() {
    return (
      <div>
        <div className="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-md-7 text-center">
                <h1>{ config.name }</h1>
                <p className="lead">
                  { config.description }
                </p>
              </div>

              <div className="col-md-5 jumbotron-side text-center">
                <p>&nbsp;</p>
                <p>{ this.repositoryLink() }</p>
                <p><strong>Version</strong> { config.version }</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <p className="lead">
            This React Module was built, tested and documented with the help of <a href="https://github.com/goncalvesjoao/react-to-commonjs" target="_blank">React-to-commonJS</a>.
            <br/>
            Check it out if you want to create a React Component without the pain of gathering all the necessary developing tools, building your own documentation page (like this one) and or mock servers for testing/developing purposes.
          </p>
        </div>

        <div className="container">
          <h2>Getting started</h2>
          <Prism className="language-ruby" noShadow={ true } bashMode={ true }>
              npm install git+https://git@github.com:{ config.author || '<package.json:author>' }/{ config.name || '<package.json:name>' }.git#master --save
          </Prism>
          <p>You can now require <b>stardoroido</b> on your React project like a normal node module.</p>
        </div>

        <div className="container">
          <h2>Usage</h2>
          <Prism className="language-jsx" noShadow={ true }>
            {
              `const React = require('react');
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
}`
            }
          </Prism>
        </div>

        <div className="container">
          <h2>Notes</h2>

          <ul>
            <li>
              <p>In truth this React Module is actually the one that comes built-in with react-to-commonjs when it creates a new project.</p>
              <p>Why does react-to-commonjs create a template project you ask? Because the documentation page would be blank and you wouldn't get to see how to connect your component to the documentation page.</p>
            </li>
            <li>
              <p>This simple project makes an ajax call to fetch the droids data and for that it makes use of mock servers. This way front-end development doesn't have to wait for back-end development.</p>
            </li>
            <li>
              <p>The existing test spec is both an example of how you can test your React Component and how you can setup your spec to prevent a remote ajax call.</p>
            </li>
            <li>
              <p>Also, this project was created using the --css_modules option:</p>
              <Prism className="language-ruby" noShadow={ true } bashMode={ true }>
                { `r2c2 new stardoroido --css_modules` }
              </Prism>

              <p>which means that this project uses <a href="https://github.com/gajus/react-css-modules" target="_blank">react-css-modules</a>, the spec example is also prepared for this and mocks the react-css-modules lib, so that mocha doesn't launch an error while loading css files.</p>
            </li>
          </ul>
          <p>&nbsp;</p>
        </div>
      </div>
    );
  }

  repositoryLink() {
    const props = { href: '' };

    if (config.repository) { props.href = config.repository.url; }

    if (props.href) {
      props.href += '/releases';
      props.target = '_blank';
    } else {
      props.href = '#';
      props.onClick = (event) => {
        event.preventDefault();

        /*eslint-disable */
        alert('You might want to fill in the blanks of your repository details listed on the package.json');
        /*eslint-enable */
      };
    }

    return (
      <a { ...props } className="btn btn-success btn-lg">
        <i className="glyphicon glyphicon-download-alt"></i> Download
      </a>
    );
  }

}

export default Home;
