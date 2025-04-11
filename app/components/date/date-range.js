import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { task, timeout } from 'ember-concurrency';

export default class DateRangeComponent extends Component {
  @tracked center = new Date('2016-05-17');
  @tracked range = {
    start: new Date('2016-05-10'),
    end: new Date('2016-05-15'),
  };

  @action
  onCenterChange(selected) {
    this.center = selected.date;
  }

  @action
  onSelect(selected) {
    this.range = selected.date;
  }

  formatDate(date) {
    if (date == null) {
      return '';
    }
    return (
      date.getFullYear() +
      '-' +
      String(date.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(date.getDate()).padStart(2, '0')
    );
  }
}
