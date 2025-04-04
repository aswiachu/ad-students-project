import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { keyResponder, onKey } from 'ember-keyboard';
import { notEq } from 'ember-truth-helpers';

@keyResponder
export default class StudentsController extends Controller {
  @service studentsStore;
  @service router;
 
  get students() {
    return this.studentsStore.students;
  }
  removeStudent = (index) => {
    this.studentsStore.removeStudent(index);
  };
  
  @action
  navigateToEdit(index) {
    this.router.transitionTo('main.students.edit', index + 1);
  }

  @action
  selectStudent(event){
    const box = event.target.querySelector('.checkbox');
    console.log(box);
    if(box){
      box.checked = !box.checked;
    }
  }

  @action
  performEdit(index){
    this.studentsStore.editStudentIndex = index;
    this.studentsStore.storeEditData(index);
    this.router.transitionTo('main.students.edit', index + 1);
  }
}
