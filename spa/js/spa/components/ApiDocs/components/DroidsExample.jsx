const { Droids } = Stardoroido.components;
const { Label } = require('react-bootstrap');
const Prism = require('../../Prism');

class DroidsExample extends React.Component {

  render() {
    return (
      <div>
        <Prism className="language-jsx">
          {
            `const Stardoroido = require('stardoroido');
const { Droids } = Stardoroido.components;`
          }
        </Prism>

        <p>&nbsp;</p>
        <p className="lead">Examples:</p>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Default mode</h3>
          </div>

          <div className="panel-body">
            <Droids />
          </div>

          <div className="panel-footer">
            <Label bsSize="small">Code:</Label>
            <Prism className="language-jsx">
              { `<Droids />` }
            </Prism>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Disable display name</h3>
          </div>

          <div className="panel-body">
            <Droids name={ false } />
          </div>

          <div className="panel-footer">
            <Label bsSize="small">Code:</Label>
            <Prism className="language-jsx">
              { `<Droids name={ false } />` }
            </Prism>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = DroidsExample;
