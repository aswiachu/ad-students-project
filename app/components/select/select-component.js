import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@glimmer/tracking';

export default class SelectComponentComponent extends Component {
  @tracked department;
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
}
