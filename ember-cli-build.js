'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    'ember-bootstrap': {
      bootstrapVersion: 5,
      importBootstrapCSS: true,
      importBootstrapTheme: false,
    },

    'ember-models-table': {
      includeDefaultCss: true,
    },

    fingerprint: {
      prepend: 'https://github.com/aswiachu/ad-students-project'
    }
  });

  return app.toTree();
};
