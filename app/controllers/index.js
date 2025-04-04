import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class MainController extends Controller {
  @tracked searchInp = '';
  @service studentsStore;
  @service flashMessages;


  @action
  removeFlashMessage(flash) {
    this.flashMessages.queue = this.flashMessages.queue.filter(
      (msg) => msg !== flash,
    );
  }
  
  @action
  applySearchFilter() {
    const students = document.querySelectorAll('tbody');
    const inp = this.searchInp?.toLowerCase() || '';

    students.forEach((student) => {
      const name =
        student.querySelector('.name')?.textContent.toLowerCase() || '';
      const rollNumber =
        student.querySelector('.rollNumber')?.textContent.toLowerCase() || '';
      const department =
        student.querySelector('.department')?.textContent.toLowerCase() || '';
      const enrollmentYear =
        student.querySelector('.enrollmentYear')?.textContent.toLowerCase() ||
        '';
      const dob =
        student.querySelector('.dob')?.textContent.toLowerCase() || '';
      const gender =
        student.querySelector('.gender')?.textContent.toLowerCase() || '';
      const address =
        student.querySelector('.address')?.textContent.toLowerCase() || '';

      console.log(inp);
      console.log(address);
      if (
        name.includes(inp) ||
        rollNumber.includes(inp) ||
        department.includes(inp) ||
        enrollmentYear.includes(inp) ||
        rollNumber.includes(inp) ||
        dob.includes(inp) ||
        gender.includes(inp) ||
        address.includes(inp)
      ) {
        student.style.display = 'block';
      } else {
        student.style.display = 'none';
      }
    });
  }

  @action
  updateSearch(event) {
    this.searchInp = event.target.value.toLowerCase();
    this.applySearchFilter();
  }

  get bulkDeletion() {
    return this.studentsStore.bulkDeletion;
  }
 
}
