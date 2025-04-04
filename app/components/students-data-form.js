import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';


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
    this.router.transitionTo('main');
  }


  // get departments(){
  //   return this.args.departments;
  // }
  // get genders(){
  //   return this.args.genders;
  // }
  // get center(){
  //   return this.args.center;
  // }
  // get isCalendarOpen(){
  //   return this.args.isCalendarOpen;
  // }
  // @tracked studentFormData = {
  //   name: '',
  //   rollNumber: '',
  //   department: this.departments[0],
  //   enrollmentYear: '',
  //   dob: new Date().toISOString().split('T')[0],
  //   gender: this.genders[0],
  //   address: '',
  //   profileImage: '',
  // };
  // @action
  // resetForm() {
  //   this.studentFormData = {
  //     name: '',
  //     rollNumber: '',
  //     department: this.departments[0],
  //     enrollmentYear: '',
  //     dob: '',
  //     gender: this.genders[0],
  //     address: '',
  //     profileImage: '',
  //   };
  // }
  // @action
  // addStudent(event) {
  //   event.preventDefault();
  //   if (
  //     this.studentFormData.name &&
  //     this.studentFormData.rollNumber &&
  //     this.studentFormData.department &&
  //     this.studentFormData.enrollmentYear &&
  //     this.studentFormData.dob &&
  //     this.studentFormData.gender &&
  //     this.studentFormData.address &&
  //     this.studentFormData.profileImage
  //   ) {
  //     this.studentsStore.students = [
  //       ...this.studentsStore.students,
  //       this.studentFormData,
  //     ];
  //     this.flashMessages.success('Student added!');
  //     this.resetForm();
  //     this.router.transitionTo('main.students');
  //   }
  // }

  // @action
  // closeForm() {
  //   this.router.transitionTo('main');
  // }

  // @action
  // updateData(event) {
  //   event.preventDefault();
  //   this.studentFormData = {
  //     ...this.studentFormData,
  //     [event.target.name]: event.target.value,
  //   };
  // }
  // departments = [
  //   'Computer Science',
  //   'Information Technology',
  //   'Electronics',
  //   'Mechanical',
  //   'Civil',
  //   'Electrical',
  //   'Biomedical',
  //   'Aerospace',
  // ];

  // @action
  // chooseDepartment(selectedDepartment) {
  //   this.studentFormData = {
  //     ...this.studentFormData,
  //     department: selectedDepartment,
  //   };
  // }
  // @action
  // chooseGender(selectedGender) {
  //   this.studentFormData = {
  //     ...this.studentFormData,
  //     gender: selectedGender,
  //   };
  // }

  // genders = ['Male', 'Female'];

  // @tracked center = new Date();
  // @tracked isCalendarOpen = false;

  // @(task(function* ({ date }) {
  //   yield timeout(100); // Pretend this is an ajax call to the server...
  //   // ...and that here we update the events somehow
  //   this.center = date;
  // }).drop())
  // updateMonth;

  // formatDate(date) {
  //   return (
  //     date.getFullYear() +
  //     '-' +
  //     String(date.getMonth() + 1).padStart(2, '0') +
  //     '-' +
  //     String(date.getDate()).padStart(2, '0')
  //   );
  // }

  // @action
  // onSelect({ date }) {
  //   this.studentFormData = {
  //     ...this.studentFormData,
  //     dob: this.formatDate(date),
  //   }; // Format as "YYYY-MM-DD"
  //   this.isCalendarOpen = false;
  // }

  // @action
  // toggleCalendar() {
  //   this.isCalendarOpen = !this.isCalendarOpen;
  // }
}
