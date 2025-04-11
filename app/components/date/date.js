import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { task, timeout } from 'ember-concurrency';

export default class DateRangeComponent extends Component {
  @tracked selected = this.formatDate(new Date());
  @tracked center = this.selected;

  @action
  onSelect(selected) {
    console.log(selected);
    this.selected = this.formatDate(selected.date);
  }

  formatDate(date) {
    return (
      date.getFullYear() +
      '-' +
      String(date.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(date.getDate()).padStart(2, '0')
    );
  }

  @(task(function* ({ date }) {
    yield timeout(100);
    this.center = date;
  }).drop())
  updateMonth;
}
