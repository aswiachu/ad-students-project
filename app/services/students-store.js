import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { task, timeout } from 'ember-concurrency';

export default class ServiceStudents extends Service {
  @service flashMessages;
  @service router;

  @tracked students = [
    {
      name: 'Sumit',
      rollNumber: '21543456',
      department: 'Computer Science',
      enrollmentYear: 2023,
      dob: '2002-05-14',
      gender: 'Female',
      address: '123, MG Road, Bangalore',
      profileImage:
        'https://tse2.mm.bing.net/th?id=OIP.yMh-8bTT8ZYPEQSx2D_ldgHaHO&pid=Api&P=0&h=180',
    },
    {
      name: 'Rohan',
      rollNumber: '21541234',
      department: 'Mechanical Engineering',
      enrollmentYear: 2022,
      dob: '2001-08-22',
      gender: 'Male',
      address: '45, Park Street, Mumbai',
      profileImage:
        'https://tse3.mm.bing.net/th?id=OIP.2rfjCz4jhoV3IFl-om3OBQAAAA&pid=Api&P=0&h=180',
    },
    {
      name: 'Priya',
      rollNumber: '21545678',
      department: 'Electrical Engineering',
      enrollmentYear: 2024,
      dob: '2003-11-10',
      gender: 'Female',
      address: '78, Gandhi Nagar, Chennai',
      profileImage:
        'https://img.freepik.com/premium-photo/image-portrait-smiling-young-female-college-school-pretty-student-girl-solid-background_1021867-35983.jpg',
    },
    {
      name: 'Ameera',
      rollNumber: '21549101',
      department: 'Civil Engineering',
      enrollmentYear: 2021,
      dob: '2000-07-18',
      gender: 'Female',
      address: '12, Green Avenue, Hyderabad',
      profileImage:
        'https://tse4.mm.bing.net/th?id=OIP.PCxJQtRTCdgXXOpCcr9LxgHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Neha',
      rollNumber: '21542345',
      department: 'Information Technology',
      enrollmentYear: 2023,
      dob: '2002-03-30',
      gender: 'Female',
      address: '56, Lake View, Pune',
      profileImage:
        'https://tse3.mm.bing.net/th?id=OIP.4S49YiJsjHU_smXHVut10gHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Raj',
      rollNumber: '21546789',
      department: 'Electronics & Communication',
      enrollmentYear: 2022,
      dob: '2001-06-25',
      gender: 'Male',
      address: '89, MG Road, Delhi',
      profileImage:
        'https://tse4.mm.bing.net/th?id=OIP.NUBQuzRrcmH06VoknfxcXgHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Sneha',
      rollNumber: '21543457',
      department: 'Biotechnology',
      enrollmentYear: 2024,
      dob: '2003-12-05',
      gender: 'Female',
      address: '34, Lotus Colony, Kolkata',
      profileImage:
        'https://tse4.mm.bing.net/th?id=OIP.37CmWaK9Yo87xFTdpM1fEAHaHa&pid=Api&P=0&h=180',
    },
    {
      name: 'Vikram',
      rollNumber: '21547890',
      department: 'Aerospace Engineering',
      enrollmentYear: 2021,
      dob: '2000-04-17',
      gender: 'Male',
      address: '23, Whitefield, Bangalore',
      profileImage:
        'https://tse2.mm.bing.net/th?id=OIP.yMh-8bTT8ZYPEQSx2D_ldgHaHO&pid=Api&P=0&h=180',
    },
  ];

  @tracked selectedIndex = -1;

  @tracked nothingList = false;

  @action
  removeStudent(i) {
    console.log(i);
    this.students = this.students.filter((_, index) => index != i);
    this.flashMessages.danger('Student removed from list!');
    if(this.students.length == 0){
      this.nothingList = true;
    }else {
      this.nothingList = false;
    }
  }

  @action
  bulkDeletion() {
    const checkboxs = document.getElementsByClassName('checkbox');
    let isNotDeleted = true;
    for (let i = checkboxs.length - 1; i >= 0; i--) {
      if (checkboxs[i].checked) {
        isNotDeleted = false;
        const index = checkboxs[i].closest('tbody').getAttribute('index');
        this.removeStudent(index);
        checkboxs[i].checked = false;
      }
    }
    if (isNotDeleted) {
      this.flashMessages.danger('Please Select to delete!');
    }
  }

  @tracked editStudentIndex = -1;

  @tracked name = '';
  @tracked rollNumber = '';
  @tracked department = this.departments[0];
  @tracked enrollmentYear = '';
  @tracked dob = this.formatDate(new Date());
  @tracked gender = this.genders[0];
  @tracked address = '';
  @tracked profileImage = '';

  @action
  resetForm() {
    this.name = '';
    this.rollNumber = '';
    this.department = this.departments[0];
    this.enrollmentYear = '';
    this.dob = this.formatDate(new Date());
    this.gender = this.genders[0];
    this.address = '';
    this.profileImage = '';
  }


  @task
  *addStudent(event) {
    event.preventDefault();
    yield timeout(2000);

    if (
      this.name &&
      this.rollNumber &&
      this.department &&
      this.enrollmentYear &&
      this.dob &&
      this.gender &&
      this.address &&
      this.profileImage
    ) {
      const newStudent = {
        name: this.name,
        rollNumber: this.rollNumber,
        department: this.department,
        enrollmentYear: this.enrollmentYear,
        dob: this.dob,
        gender: this.gender,
        address: this.address,
        profileImage: this.profileImage,
      };
      if (this.editStudentIndex != -1) {
        this.students = [...this.students];
        this.students.splice(this.editStudentIndex, 1, newStudent);
        this.flashMessages.success('Successfully data modifed!');
        this.editStudentIndex = -1;
      } else {
        this.students = [...this.students, newStudent];
        this.flashMessages.success('Student added!');
      }
      this.resetForm();
      this.router.transitionTo('index');
    } else {
      this.flashMessages.danger('Please fill all the fields!');
    }
  }

  // @action
  // addStudent(event) {
  //   event.preventDefault();
  //   if (
  //     this.name &&
  //     this.rollNumber &&
  //     this.department &&
  //     this.enrollmentYear &&
  //     this.dob &&
  //     this.gender &&
  //     this.address &&
  //     this.profileImage
  //   ) {
  //     const newStudent = {
  //       name: this.name,
  //       rollNumber: this.rollNumber,
  //       department: this.department,
  //       enrollmentYear: this.enrollmentYear,
  //       dob: this.dob,
  //       gender: this.gender,
  //       address: this.address,
  //       profileImage: this.profileImage,
  //     };
  //     if (this.editStudentIndex != -1) {
  //       this.students = [...this.students];
  //       this.students.splice(this.editStudentIndex, 1, newStudent);
  //       this.flashMessages.success('Successfully data modifed!');
  //       this.editStudentIndex = -1;
  //     } else {
  //       this.students = [...this.students, newStudent];
  //       this.flashMessages.success('Student added!');
  //     }
  //     this.resetForm();
  //     this.router.transitionTo('index');
  //   } else {
  //     this.flashMessages.danger('Please fill all the fields!');
  //   }
  // }

  @action
  updateData(event) {
    event.preventDefault();
    this[event.target.name] = event.target.value;
  }

  departments = [
    'Computer Science',
    'Information Technology',
    'Electronics',
    'Mechanical',
    'Civil',
    'Electrical',
    'Biomedical',
    'Aerospace',
  ];

  genders = ['Male', 'Female'];

  @action
  chooseDepartment(selectedDepartment) {
    this.department = selectedDepartment;
  }
  @action
  chooseGender(selectedGender) {
    this.gender = selectedGender;
  }

  @tracked center = new Date();
  @tracked isCalendarOpen = false;

  @action
  toggleCalendar() {
    this.isCalendarOpen = !this.isCalendarOpen;
  }

  @(task(function* ({ date }) {
    yield timeout(100);
    this.center = date;
  }).drop())
  updateMonth;

  formatDate(date) {
    return (
      date.getFullYear() +
      '-' +
      String(date.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(date.getDate()).padStart(2, '0')
    );
  }

  @action
  onSelect({ date }) {
    this.dob = this.formatDate(date);
    this.isCalendarOpen = false;
  }

  @action
  storeEditData(index) {
    this.name = this.students[index].name;
    this.rollNumber = this.students[index].rollNumber;
    this.department = this.students[index].department;
    this.enrollmentYear = this.students[index].enrollmentYear;
    this.dob = this.students[index].dob;
    this.gender = this.students[index].gender;
    this.address = this.students[index].address;
    this.profileImage = this.students[index].profileImage;
  }
}
