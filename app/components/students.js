import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { onKey } from 'ember-keyboard';

export default class StudentsComponent extends Component {
  @service studentsStore;
  @service router;

  get students() {
    return this.studentsStore.students;
  }
  get visibleStudents() {
    return this.students.filter((s) => s.display);
  }
  get nothingList() {
    return this.studentsStore.nothingList;
  }
  get selectedIndex() {
    return this.studentsStore.selectedIndex;
  }
  removeStudent = (index) => {
    this.studentsStore.removeStudent(index);
  };
  @onKey('ArrowUp')
  get moveUp() {
    return this.studentsStore.moveUp;
  }
  @onKey('ArrowDown')
  get moveDown() {
    return this.studentsStore.moveDown;
  }

  @action
  navigateToEdit(index) {
    this.router.transitionTo('main.students.edit', index + 1);
  }

  @action
  performEdit(item) {
    const index = this.students.indexOf(item);
    this.studentsStore.editStudentIndex = index;
    this.studentsStore.storeEditData(item);
    this.router.transitionTo('index.edit', index + 1);
  }

  @action
  selectStudent(event) {
    console.log('clicked');
    const box = event.target.querySelector('.checkbox');
    if (box) {
      box.checked = !box.checked;
    }
  }
  @action
  selectAll(event) {
    const checkBoxs = document
      .querySelector('table')
      .getElementsByClassName('checkbox');
    console.log(checkBoxs.length);
    Array.from(checkBoxs).forEach((box) => {
      if (event.target.checked) {
        box.checked = true;
      } else {
        box.checked = false;
      }
    });
  }
}
