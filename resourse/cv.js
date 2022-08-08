const cv = {
  firstName: 'Braian',
  lastName: 'Chincho',
  career: 'sidemenu.system.engineer',
  aboutMe: {
    description: 'aboutme.description',
    birthday: new Date(2020, 2, 23),
    location: 'Córdoba, Capital, Argentina',
    mail: 'braianchincho@gmail.com',
  },
  experience: [
    {
      id: 99,
      institution: 'Vates',
      rol: 'Front-End engineer',
      startDate: new Date(2021, 7, 1),
      endDate: null,
    },
    {
      id: 100,
      institution: 'Bizit Global',
      rol: 'Front-End engineer',
      startDate: new Date(2020, 2, 3),
      endDate: new Date(2021, 6, 1),
    },
    {
      id: 200,
      institution: 'Kolektor SA',
      rol: 'Front-End engineer',
      startDate: new Date(2019, 1, 15),
      endDate: new Date(2020, 2, 1),
    },
    {
      id: 300,
      institution: 'Mcafee - Argentina',
      rol: 'Technical intern',
      startDate: new Date(2018, 0, 15),
      endDate: new Date(2018, 11, 15),
    },
    {
      id: 400,
      institution: 'Universidad tecnológica nacional',
      rol: 'Laboratory manager',
      startDate: new Date(2017, 2, 15),
      endDate: new Date(2017, 11, 15),
    },
  ],
  skills: [
    {
      id: 1,
      name: 'Angular',
      level: 80,
    },
    {
      id: 2,
      name: 'Java',
      level: 60,
    },
    {
      id: 3,
      name: 'Javascript',
      level: 75,
    },
    {
      id: 6,
      name: 'TypeScript',
      level: 75,
    },
    {
      id: 4,
      name: 'Python',
      level: 30,
    },
    {
      id: 5,
      name: 'Nodejs',
      level: 50,
    },
    {
      id: 7,
      name: 'Spring Framework',
      level: 30,
    },
    {
      id: 8,
      name: 'React',
      level: 40,
    },
  ],
  education: [
    {
      id: 1,
      institution: 'Universidad tecnologica nacional',
      career: 'Ingeniería en sistemas de información',
      state: 'Completo',
    },
    {
      id: 2,
      institution: 'Curso oracle academy',
      career: 'Java standard edition',
      state: 'Completo',
    },
  ],
};
export default cv;
