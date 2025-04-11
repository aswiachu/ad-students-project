import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ScrollableBodyComponent extends Component {
  @tracked students = [
    {
      id: 1,
      name: 'Sumit',
      gender: 'Male',
      department: 'Computer Science',
      rollNumber: 'CS001',
      dob: '2000-05-15',
      address: '123 MG Road, Bengaluru',
      enrollmentYear: 2022,
      profileImage:
        'https://tse2.mm.bing.net/th?id=OIP.yMh-8bTT8ZYPEQSx2D_ldgHaHO&pid=Api&P=0&h=180',
    },
    {
      id: 2,
      name: 'Rohan',
      gender: 'Male',
      department: 'Mechanical Engineering',
      rollNumber: 'ME002',
      dob: '1999-11-20',
      address: '45 Shivaji Park, Mumbai',
      enrollmentYear: 2023,
      profileImage:
        'https://tse3.mm.bing.net/th?id=OIP.2rfjCz4jhoV3IFl-om3OBQAAAA&pid=Api&P=0&h=180',
    },
    {
      id: 3,
      name: 'Priya',
      gender: 'Female',
      department: 'Electrical Engineering',
      rollNumber: 'EE003',
      dob: '2000-07-22',
      address: '78 Anna Nagar, Chennai',
      enrollmentYear: 2021,
      profileImage:
        'https://img.freepik.com/premium-photo/image-portrait-smiling-young-female-college-school-pretty-student-girl-solid-background_1021867-35983.jpg',
    },
    {
      id: 4,
      name: 'Ameera',
      gender: 'Female',
      department: 'Civil Engineering',
      rollNumber: 'CE004',
      dob: '1998-03-11',
      address: '32 Banjara Hills, Hyderabad',
      enrollmentYear: 2022,
      profileImage:
        'https://tse4.mm.bing.net/th?id=OIP.PCxJQtRTCdgXXOpCcr9LxgHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 5,
      name: 'Neha',
      gender: 'Female',
      department: 'Information Technology',
      rollNumber: 'IT005',
      dob: '2001-12-05',
      address: '19 Sector 22, Chandigarh',
      enrollmentYear: 2024,
      profileImage:
        'https://tse3.mm.bing.net/th?id=OIP.4S49YiJsjHU_smXHVut10gHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 6,
      name: 'Raj',
      gender: 'Male',
      department: 'Electronics & Communication',
      rollNumber: 'EC006',
      dob: '1999-09-09',
      address: '90 Park Street, Kolkata',
      enrollmentYear: 2023,
      profileImage:
        'https://tse4.mm.bing.net/th?id=OIP.NUBQuzRrcmH06VoknfxcXgHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 7,
      name: 'Sneha',
      gender: 'Female',
      department: 'Biotechnology',
      rollNumber: 'BT007',
      dob: '2000-04-18',
      address: '210 DLF Phase 3, Gurugram',
      enrollmentYear: 2021,
      profileImage:
        'https://tse4.mm.bing.net/th?id=OIP.37CmWaK9Yo87xFTdpM1fEAHaHa&pid=Api&P=0&h=180',
    },
    {
      id: 8,
      name: 'Vikram',
      gender: 'Male',
      department: 'Aerospace Engineering',
      rollNumber: 'AE008',
      dob: '1998-10-25',
      address: '12 Ambedkar Road, Pune',
      enrollmentYear: 2022,
      profileImage:
        'https://purepng.com/public/uploads/large/purepng.com-female-studentstudenteducationalinstitutionstudentsuniversity-studentschoolfemale-student-1421526922319jxtxe.png',
    },
    {
      id: 9,
      name: 'Ishita',
      gender: 'Female',
      department: 'Chemical Engineering',
      rollNumber: 'CH009',
      dob: '2001-06-30',
      address: '55 Jawahar Circle, Jaipur',
      enrollmentYear: 2024,
      profileImage:
        'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1600',
    },
    {
      id: 10,
      name: 'Tarun',
      gender: 'Male',
      department: 'Automobile Engineering',
      rollNumber: 'AU010',
      dob: '1999-08-15',
      address: '66 Hazratganj, Lucknow',
      enrollmentYear: 2023,
      profileImage:
        'https://img.freepik.com/premium-photo/young-smiling-indian-female-student_878783-4772.jpg',
    },
    {
      id: 11,
      name: 'Lavanya',
      gender: 'Female',
      department: 'Data Science',
      rollNumber: 'DS011',
      dob: '2000-01-10',
      address: '101 VIP Road, Bhubaneswar',
      enrollmentYear: 2022,
      profileImage:
        'https://tse4.mm.bing.net/th?id=OIP.qjoBe4QjzM8Ujv-q6KdhYQHaHc&pid=Api&P=0&h=180',
    },
    {
      id: 12,
      name: 'Kiran',
      gender: 'Female',
      department: 'Artificial Intelligence',
      rollNumber: 'AI012',
      dob: '2001-03-04',
      address: '84 Sainik Farm, Delhi',
      enrollmentYear: 2024,
      profileImage:
        'https://tse4.mm.bing.net/th?id=OIP.37CmWaK9Yo87xFTdpM1fEAHaHa&pid=Api&P=0&h=180',
    },
  ];

  nameAndGender = [
    { name: 'Sumit', gender: 'Male' },
    { name: 'Rohan', gender: 'Male' },
    { name: 'Priya', gender: 'Female' },
    { name: 'Ameera', gender: 'Female' },
    { name: 'Neha', gender: 'Female' },
    { name: 'Raj', gender: 'Male' },
    { name: 'Sneha', gender: 'Female' },
    { name: 'Vikram', gender: 'Male' },
    { name: 'Ishita', gender: 'Female' },
    { name: 'Tarun', gender: 'Male' },
    { name: 'Lavanya', gender: 'Female' },
    { name: 'Kiran', gender: 'Female' },
  ];

  address = [
    '123 MG Road, Bengaluru',
    '45 Shivaji Park, Mumbai',
    '78 Anna Nagar, Chennai',
    '32 Banjara Hills, Hyderabad',
    '19 Sector 22, Chandigarh',
    '90 Park Street, Kolkata',
    '210 DLF Phase 3, Gurugram',
    '12 Ambedkar Road, Pune',
    '55 Jawahar Circle, Jaipur',
    '66 Hazratganj, Lucknow',
    '101 VIP Road, Bhubaneswar',
    '84 Sainik Farm, Delhi',
  ];
  departAndRollNumber = [
    { department: 'Computer Science', rollNumber: 'CS001' },
    { department: 'Mechanical Engineering', rollNumber: 'ME002' },
    { department: 'Electrical Engineering', rollNumber: 'EE003' },
    { department: 'Civil Engineering', rollNumber: 'CE004' },
    { department: 'Information Technology', rollNumber: 'IT005' },
    { department: 'Electronics & Communication', rollNumber: 'EC006' },
    { department: 'Biotechnology', rollNumber: 'BT007' },
    { department: 'Aerospace Engineering', rollNumber: 'AE008' },
    { department: 'Chemical Engineering', rollNumber: 'CH009' },
    { department: 'Automobile Engineering', rollNumber: 'AU010' },
    { department: 'Data Science', rollNumber: 'DS011' },
    { department: 'Artificial Intelligence', rollNumber: 'AI012' },
  ];

  dob = [
    '2000-05-15',
    '1999-11-20',
    '2000-07-22',
    '1998-03-11',
    '2001-12-05',
    '1999-09-09',
    '2000-04-18',
    '1998-10-25',
    '2001-06-30',
    '1999-08-15',
    '2000-01-10',
    '2001-03-04',
  ];

  enrollmentYear = [
    2022, 2023, 2021, 2022, 2024, 2023, 2021, 2022, 2024, 2023, 2022, 2024,
  ];

  profileImage = [
    'https://tse2.mm.bing.net/th?id=OIP.yMh-8bTT8ZYPEQSx2D_ldgHaHO&pid=Api&P=0&h=180',
    'https://tse3.mm.bing.net/th?id=OIP.2rfjCz4jhoV3IFl-om3OBQAAAA&pid=Api&P=0&h=180',
    'https://img.freepik.com/premium-photo/image-portrait-smiling-young-female-college-school-pretty-student-girl-solid-background_1021867-35983.jpg',
    'https://tse4.mm.bing.net/th?id=OIP.PCxJQtRTCdgXXOpCcr9LxgHaHa&pid=Api&P=0&h=180',
    'https://tse3.mm.bing.net/th?id=OIP.4S49YiJsjHU_smXHVut10gHaHa&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.NUBQuzRrcmH06VoknfxcXgHaHa&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.37CmWaK9Yo87xFTdpM1fEAHaHa&pid=Api&P=0&h=180',
    'https://purepng.com/public/uploads/large/purepng.com-female-studentstudenteducationalinstitutionstudentsuniversity-studentschoolfemale-student-1421526922319jxtxe.png',
    'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://img.freepik.com/premium-photo/young-smiling-indian-female-student_878783-4772.jpg',
    'https://tse4.mm.bing.net/th?id=OIP.qjoBe4QjzM8Ujv-q6KdhYQHaHc&pid=Api&P=0&h=180',
    'https://tse4.mm.bing.net/th?id=OIP.37CmWaK9Yo87xFTdpM1fEAHaHa&pid=Api&P=0&h=180',
  ];

  @action
  generateRandomNumber() {
    let num = Math.floor(Math.random() * 12);
    console.log(num);
    return num;
  }

  @action
  loadBelow() {
    console.log('below triggered');
    const lastId = this.students.length;
    const newStudents = [];

    for (let i = 1; i <= 5; i++) {
      const NG = this.generateRandomNumber();
      const DR = this.generateRandomNumber();
      newStudents.push({
        id: lastId - i,
        name: this.nameAndGender[NG].name,
        gender: this.nameAndGender[NG].gender,
        department: this.departAndRollNumber[DR].department,
        rollNumber: this.departAndRollNumber[DR].rollNumber,
        dob: this.dob[this.generateRandomNumber()],
        address: this.address[this.generateRandomNumber()],
        enrollmentYear: this.enrollmentYear[this.generateRandomNumber()],
        profileImage: this.profileImage[this.generateRandomNumber()],
      });
    }

    this.students = [...this.students, ...newStudents];
  }
}
