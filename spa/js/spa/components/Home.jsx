const { config } = Stardoroido;
const { Panel } = require('react-bootstrap');
const Prism = require('./Prism');

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
            This React Component was built, tested and documented with the help of <a href="https://github.com/goncalvesjoao/react-to-commonjs" target="_blank">React-to-commonJS</a>.
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
          <h4>This tool was built using:</h4>
          <ul>
            <li>node 4.1.0</li>
            <li>npm 3.3.3</li>
          </ul>
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

module.exports = Home;
