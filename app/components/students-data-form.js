import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { onKey } from 'ember-keyboard';

export default class StudentsDataFormComponent extends Component {
  @service router;
  @service studentsStore;
  @service flashMessages;

  get name() {
    return this.studentsStore.name;
  }
  get rollNumber() {
    return this.studentsStore.rollNumber;
  }
  get department() {
    return this.studentsStore.department;
  }
  get enrollmentYear() {
    return this.studentsStore.enrollmentYear;
  }
  get dob() {
    return this.studentsStore.dob;
  }
  get gender() {
    return this.studentsStore.gender;
  }
  get address() {
    return this.studentsStore.address;
  }
  get profileImage() {
    return this.studentsStore.profileImage;
  }
  @onKey('Enter')
  get addStudent() {
    return this.studentsStore.addStudent;
  }
  get updateData() {
    return this.studentsStore.updateData;
  }
  get departments() {
    return this.studentsStore.departments;
  }
  get genders() {
    return this.studentsStore.genders;
  }
  get toggleCalendar() {
    return this.studentsStore.toggleCalendar;
  }
  get updateMonth() {
    return this.studentsStore.updateMonth;
  }
  get formatDate() {
    return this.studentsStore.formatDate;
  }
  get onSelect() {
    return this.studentsStore.onSelect;
  }
  get chooseDepartment() {
    return this.studentsStore.chooseDepartment;
  }
  get chooseGender() {
    return this.studentsStore.chooseGender;
  }

  get center() {
    return this.studentsStore.center;
  }
  get isCalendarOpen() {
    return this.studentsStore.isCalendarOpen;
  }

  @action
  closeForm() {
    this.router.transitionTo('index');
  }
}
