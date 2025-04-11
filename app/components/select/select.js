import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class SelectComponent extends Component {
  @tracked department = this.departments[0];
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
  foo(dept) {
    this.department = dept;
  }
}
