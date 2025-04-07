import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from 'students-project/config/environment';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faXmark,
  faTrash,
  faCalendarDays,
} from '@fortawesome/free-solid-svg-icons';
import 'ember-power-select/styles';
import 'ember-power-calendar/styles';
import { registerDateLibrary } from 'ember-power-calendar';
import DateUtils from 'ember-power-calendar-luxon';
registerDateLibrary(DateUtils);

library.add(faXmark, faTrash, faCalendarDays);

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);
