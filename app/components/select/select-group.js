import Component from '@glimmer/component';
import { action } from '@glimmer/runtime';
import { tracked } from '@glimmer/tracking';

export default class SelectGroupComponent extends Component {
  @tracked department ;

  departments = [
    {
      groupName: 'Engineering', options: [
        'Computer Science Engineering',
        'Mechanical Engineering',
        'Civil Engineering',
        'Information Technology'
      ]
    },
    {
      groupName: 'Arts and science', options: [
        'Mathematics',
        'Physics',
        'Chemistry'
      ]
    }
  ]
}
