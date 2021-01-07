const cv = {
  aboutMe: {
    birthday: new Date(2020, 2, 23),
    location: "Argentina, Cordoba",
    mail: "braianchincho@gmail.com"
  },
  experience: [
    {
      id: 3,
      institution: "Bizit Global",
      rol: "Front-End engineer",
      startDate: new Date(2020, 2, 3),
      endDate: null
    },
    {
      id: 2,
      institution: "Kolektor SA",
      rol: "Front-End engineer",
      startDate: new Date(2019, 1, 15),
      endDate: new Date(2020, 2, 1)
    },
    {
      id: 1,
      institution: "Universidad tecnológica nacional",
      rol: "Encargado de laboratorio",
      startDate: new Date(2018, 2, 15),
      endDate: new Date(2018, 11, 15)
    }
  ],
  skills: [
    {
      id: 1,
      name: "Angular",
      level: 80
    },
    {
      id: 2,
      name: "Java",
      level: 60
    },
    {
      id: 3,
      name: "Javascript",
      level: 75
    },
    {
      id: 6,
      name: "TypeScript",
      level: 75
    },
    {
      id: 4,
      name: "Python",
      level: 30
    },
    {
      id: 5,
      name: "Nodejs",
      level: 50
    },
    {
      id: 7,
      name: "Spring Framework",
      level: 30
    },
    {
      id: 8,
      name: "React",
      level: 40
    }
  ],
  education: [
    {
      id: 1,
      institution: "Universidad tecnologica nacional",
      career: "Ingeniería en sistemas de información",
      state: "Completo"
    },
    {
      id: 2,
      institution: "Curso oracle academy",
      career: "Java standard edition",
      state: "Completo"
    }
  ]
};
export default cv;
