// Generated by CoffeeScript 1.8.0
(function() {
  var Component,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = Component = (function(_super) {
    __extends(Component, _super);

    function Component() {
      return Component.__super__.constructor.apply(this, arguments);
    }

    Component.contextTypes = {
      shared: React.PropTypes.any
    };

    Component.prototype.dispatch = function() {
      var _ref;
      return (_ref = this.context.shared).emit.apply(_ref, arguments);
    };

    Component.prototype.createChildRouter = function(node) {
      var DefaultLayout, Router, childRouter;
      Router = require('./router');
      DefaultLayout = require('./default-layout');
      childRouter = new Router(DefaultLayout, node);
      return childRouter;
    };

    Component.prototype.createContextOnNode = function(node, contextClass, props) {
      var childRouter;
      childRouter = this.createChildRouter(node);
      return childRouter.pushContext(contextClass, props).then((function(_this) {
        return function(context) {
          return Promise.resolve(context);
        };
      })(this));
    };

    return Component;

  })(React.Component);

}).call(this);
