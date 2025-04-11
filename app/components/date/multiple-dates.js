import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MultipleDates extends Component {
  @tracked center = new Date();
  @tracked selected = [];

  @action
  onCenterChange(selected) {
    this.center = selected.date;
  }

  @action
  onSelect(selected) {
    console.log(selected);
    this.selected = selected.date;
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
