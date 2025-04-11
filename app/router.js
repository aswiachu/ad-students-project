import EmberRouter from '@ember/routing/router';
import config from 'students-project/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' }, function () {
    this.route('add');
    this.route('edit', { path: '/edit/:id' });
  });

  this.route('scroll', function () {
    this.route('infinitescroll');
    this.route('scrollablebody');
    this.route('dynamic-content-size');
  });
  this.route('date-demo', function () {
    this.route('date');
    this.route('date-range');
    this.route('minimum-date-range');
    this.route('maximum-date-range');
    this.route('proximity-selection-date-range');
    this.route('multiple-dates');
  });
  this.route('select-demo', function () {
    this.route('select');
    this.route('select-multiple');
    this.route('select-group');
  });
});
