var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');

/* 
  App
*/

var App = React.createClass({

  render : function() {
    return (
      <div className="app">
        <Header/>
        <Device device="iphone"/>
        <Download/>
        <Footer/>
      </div>
    )
  }

});

/*
  Header
*/
var Header = React.createClass({
  render : function() {
    return (
      <header className="top">
        <img src="css/images/logo.svg" className="logo" alt="Look2Speak" />
        <a className="contact" href="&#x6d;&#97;&#105;&#x6c;&#x74;&#111;&#58;&#105;&#x6e;&#102;&#x6f;&#x40;&#108;&#x6f;&#x6f;&#107;&#50;&#103;&#x6f;&#x2e;&#99;&#111;&#x6d;">Contact</a>
      </header>
    )
  }
});

/*
  Device
*/
var Device = React.createClass({
  render : function() {
    return (
      <div className={"device " + this.props.device}></div>
    )
  }
});

/*
  Download
*/
var Download = React.createClass({
  render : function() {
    return (
      <div className="download">
        <div className="links">
          <h4>Gratis</h4>
          <a href="https://appsto.re/nl/AnZo-.i"><i className="fa fa-apple"></i></a>
          <a href="https://play.google.com/store/apps/details?id=com.look2speak"><i className="fa fa-android"></i></a>
        </div>
        <p>Look2Speak is een gratis app die communicatie mogelijk maakt zonder dezelfde taal te spreken. Look2Speak is een initiatief van Look2Go en wordt momenteel ondersteund met de Nederlandse taal.</p>
      </div>
    )
  }
});

/*
  Footer
*/
var Footer = React.createClass({
  render : function() {
    return (
      <footer>
        <a href="http://look2go.com" target="_blank"><p>Bekijk ook Look2Go <i className="fa fa-sign-in"></i></p></a>
      </footer>
    )
  }
});



/*
  Routes
*/
var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="*" component={App} />
  </Router>
)


ReactDOM.render(routes, document.querySelector('#main'));