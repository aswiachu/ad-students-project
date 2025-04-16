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
      display: true,
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

      display: true,
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
      display: true,
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
      display: true,
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
      display: true,
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
      display: true,
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
      display: true,
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
      display: true,
    },
  ];

  @action
  removeStudent(item) {
    console.log(item);
    this.students = this.students.filter((i) => item != i);
    this.flashMessages.success('Student removed from list!', {
      preventDuplicates: true,
      destroyOnClick: false,
      showProgress: true,
      extendedTimeout: 500,
    });
  }

  @action
  bulkDeletion() {
    const checkboxs = document.getElementsByClassName('checkbox');
    let isDeleted = false;
    const visibleStudent = this.students.filter((s) => s.display);
    for (let i = checkboxs.length - 1; i >= 0; i--) {
      if (checkboxs[i].checked) {
        isDeleted = true;
        const index = checkboxs[i].closest('tr').getAttribute('index');
        this.removeStudent(visibleStudent[index]);
        checkboxs[i].checked = false;
      }
    }
    if (!isDeleted) {
      this.flashMessages.warning('Please Select to delete!', {
        showProgress: true,
        preventDuplicates: true,
        destroyOnClick: false,
        extendedTimeout: 500,
      });
    }
  }

  @tracked searchInp = '';

  @action
  updateSearch(event) {
    this.searchInp = event.target.value.toLowerCase();
    this.applySearchFilter();
  }

  @action
  applySearchFilter() {
    const inp = this.searchInp?.toLowerCase() || '';

    this.students.forEach((student, index) => {
      const name = student.name.toLowerCase();
      const rollNumber = student.rollNumber.toLowerCase();
      const department = student.department.toLowerCase();
      const enrollmentYear = student.enrollmentYear.toString().toLowerCase();
      const dob = student.dob.toLowerCase();
      const gender = student.gender.toLowerCase();
      const address = student.address.toLowerCase();

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
        console.log(true);
        this.students[index].display = true;
      } else {
        console.log(false);
        this.students[index].display = false;
      }
      this.students = [...this.students];
    });
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
      yield timeout(2000);

      const newStudent = {
        name: this.name,
        rollNumber: this.rollNumber,
        department: this.department,
        enrollmentYear: this.enrollmentYear,
        dob: this.dob,
        gender: this.gender,
        address: this.address,
        profileImage: this.profileImage,
        display: true,
      };
      if (this.editStudentIndex != -1) {
        this.students = [...this.students];
        this.students.splice(this.editStudentIndex, 1, newStudent);
        this.flashMessages.success('Successfully data modifed!', {
          preventDuplicates: true,
          destroyOnClick: false,
          showProgress: true,
          extendedTimeout: 500,
        });
        this.editStudentIndex = -1;
      } else {
        this.students = [...this.students, newStudent];
        this.flashMessages.success('Student added!', {
          preventDuplicates: true,
          destroyOnClick: false,
          showProgress: true,
          extendedTimeout: 500,
        });
      }
      this.applySearchFilter();
      this.resetForm();
      this.router.transitionTo('index');
    }
  }

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
    console.log(this.isCalendarOpen);
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
    console.log(date);
    this.dob = this.formatDate(date);
    this.isCalendarOpen = false;
  }

  @action
  storeEditData(student) {
    this.name = student.name;
    this.rollNumber = student.rollNumber;
    this.department = student.department;
    this.enrollmentYear = student.enrollmentYear;
    this.dob = student.dob;
    this.gender = student.gender;
    this.address = student.address;
    this.profileImage = student.profileImage;
  }

  @tracked selectedIndex = -1;

  @action
  moveDown() {
    if (
      this.selectedIndex >= this.students.length - 1 ||
      this.selectedIndex < 0
    ) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex = this.selectedIndex + 1;
    }
    console.log(this.selectedIndex);
  }

  @action
  moveUp() {
    if (this.selectedIndex <= 0) {
      this.selectedIndex = this.students.length - 1;
    } else {
      this.selectedIndex = this.selectedIndex - 1;
    }
    console.log(this.selectedIndex);
  }
}
