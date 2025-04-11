import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { isBlank } from '@ember/utils';

export default class SelectMultipleComponent extends Component {
  @tracked selectedDepartment = [];
  departments = [
    'Computer Science',
    'Mechanical Engineering',
    'Electrical Engineering',
    'Civil Engineering',
    'Information Technology',
    'Electronics & Communication',
    'Biotechnology',
    'Aerospace Engineering',
    'Chemical Engineering',
    'Automobile Engineering',
    'Data Science',
    'Artificial Intelligence',
  ];

  @action
  handleFocus(select, e) {
    console.debug('EPS focused!');
    if (this.focusComesFromOutside(e)) {
      select.actions.open();
    }
  }

  @action
  handleBlur() {
    console.debug('EPS blurred!');
  }

  focusComesFromOutside(e) {
    let blurredEl = e.relatedTarget;
    if (isBlank(blurredEl)) {
      return false;
    }
    return !blurredEl.classList.contains('ember-power-select-search-input');
  }
}
