const LiLink = require('../LiLink');
const { Link, History } = ReactRouter;

const ApiDocs = React.createClass({

  mixins: [History],

  render() {
    return (
      <div id="top">
        <p>&nbsp;</p>

        <div className="container">
          <div className="row">
            <div className="col-xs-3 ascii">
              { this.renderSidebar() }
            </div>

            <div className="col-md-9">
              { this.props.children || this.renderHome() }
            </div>
          </div>
        </div>

      </div>
    );
  },

  renderHome() {
    return (
      <div className="jumbotron">
        <h1>Stardoroido API</h1>
        <h2 className="lead">
          This API documentation example page,
          ilustrates how you can take advantage of this Single Page App
          created for you to test your React Component and
          actually use it to document your work and publish it on the Web.
        </h2>
      </div>
    );
  },

  renderSidebar() {
    return (
      <ul className="ascii fixed">
        <li>
          <span>Stardoroido</span>
          <ul>
            <LiLink to="/api_docs/config">config</LiLink>

            <li className={ this.history.isActive('/api_docs/components') ? 'active' : '' }>
              <span>components</span>
              <ul>
                <LiLink to="/api_docs/components/droids">Droids</LiLink>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    );
  },

});

module.exports = ApiDocs;
