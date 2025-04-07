import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { keyResponder, onKey } from 'ember-keyboard';

@keyResponder
export default class StudentsComponent extends Component {
  @service studentsStore;
  @service router;

  get students() {
    return this.studentsStore.students;
  }
  get nothingList(){
    return this.studentsStore.nothingList;
  }
  removeStudent = (index) => {
    this.studentsStore.removeStudent(index);
  };

  @action
  navigateToEdit(index) {
    this.router.transitionTo('main.students.edit', index + 1);
  }

  @action
  performEdit(index) {
    this.studentsStore.editStudentIndex = index;
    this.studentsStore.storeEditData(index);
    this.router.transitionTo('index.edit', index + 1);
  }

  @action 
  selectAll(event){
    const checkBoxs = document.querySelector('table').getElementsByClassName('checkbox');
    console.log(checkBoxs.length);
    Array.from(checkBoxs).forEach(box => {
      
      if(event.target.checked){
        box.checked = true;
      }else {
        box.checked = false;
      }
    });
  }

  doubleClickable() {
    alert('DoubleClickableComponent was clicked!');
  }
}
