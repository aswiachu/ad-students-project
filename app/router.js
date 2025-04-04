import EmberRouter from '@ember/routing/router';
import config from 'students-project/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' }, function () {
    this.route('students', { path: '/' }, function () {
      this.route('add');
      this.route('edit', { path: '/edit/:id' });
    });
  });
});
