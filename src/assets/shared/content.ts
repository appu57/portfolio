const arrayOfObjects = [
  {
    name: 'About Me',
    icon: 'person',
    description:'Certainly , here is brief introduction about Apoorva CE',
    category: [
      {
        name: 'Apoorva CE',
        percentage: 22,
        universityName:'BE',
        description: 'English , Kannada, Hindi' ,
        year: '"Software Engineer , MEAN stack developer , UI Designer , Backend Developer"',
        images: null,
        specialization: 'Dance , Singing , Cooking ',
        tasks:null

      }

    ],
  },
  {
    name: 'Experience',
    icon: 'work',
    description:'Sure , here is your experience summary',
    category: [
      {
        name: 'Subex',
        percentage: null,
        universityName:null,
        description: '" SDE Intern , Software Engineer " ' ,
        year: "02-02-2023 to 01-Aug-2023(Intership) , 02-Aug-2023-Present ",
        images: null,
        specialization: '',
        tasks:{

          skills:'Angular , Spring Boot , SpringBatch ,Apache NIFI ,SQL , PostgreSQL',
          description:[
            {
              task1:'Part of an agile team responsible for the developement of solution for the data quality checks using scalable Next Generation platform Apache Nifi.',
            },
            {
              task1:'Extensively worked with Spring Batch in developing readers which involved handling diverse CSV and ascii files.',
            },
            {
              task1:'Worked in the core module of Hypersense product team as a prominent full stack developer by leveraging a well efficient UI design and part of backend developement'
            },
            
          ]
        }

      }

    ],
  },
  {
    name: 'Education',
    icon: 'school',
    description:'It seems like you want to know your qualification. Here is the updated Qualification',
    category: [
      {
        name: 'SSLC',
        percentage: 98.72,
        universityName: 'St.Sophia Convent High School',
        specialization: 'SSLC',
        description: 'State 9th topper for the year 2017',
        year: "2017",
        images: null,
        tasks:null

      },
      {
        name: 'PUC',
        percentage: 92.12,
        specialization: 'PCMC',
        universityName: 'Mahesh PU College',
        description: 'KCET ranking 11545',
        year: "2017-19",
        images: null,
        tasks:null

      },
      {
        name: 'BE',
        percentage: 8.45,
        universityName: 'SJB Institute of Technology',
        specialization: 'Computer Science and Engineering',
        description: null,
        year: "19-2023",
        images: null,
        tasks:null

      },
    ],
  },
  {
    name: 'Certification',
    icon: 'star',
    description:'Certainly , Here is the name of the courses certified to you',
    category: [
      {
        name: ' Front-End Javascript Frameworks-Angular',
        images: 'FEJS.jpg',
        percentage: null,
        universityName: 'The HongKong University of Science and Technology',
        description: '',
        specialization: 'Coursera Awarded',
        year: "2022",
        tasks:null

      },
      {
        name: 'Server-side Development with NodeJS,Express and MongoDB',
        images: 'SFFWNJEM.jpg',
        percentage: null,
        universityName: 'The HongKong University of Science and Technology',
        description: '',
        specialization: 'Coursera Awarded',
        year: "2022",
        tasks:null

      },
      {
        name: 'Angular-The Complete Guide',
        images: 'Angular.png',
        percentage: null,
        universityName: 'Maximilian Schwarzmuller',
        description: '',
        specialization: 'Udemy Awarded',
        year: "2023",
        tasks:null

      },
      {
        name: 'Master Microservices with Spring Boot and Spring Cloud',
        images: 'SpringBoot.png',
        percentage: null,
        universityName: 'In28MinutesOfficial',
        specialization: 'Udemy Awarded',
        description: '',
        year: "2023",
        tasks:null

      },
    ],
  },
  {
    name: 'Skills',
    icon: 'code',
    description:'To achieve the knowledge and skills that you have gained , below libraries ,framework , programming langauge , database were the tools',
    category: [
      {
        name: 'Angular',
        percentage: 4,
        universityName: ' ',
        description: '',
        year: null,
        images: 'angular.svg , spring.svg , node.svg , java.svg ,js.svg, css.svg ,html.svg ,postgres.svg,ExpressJs.png , MongoDB.png',
        specialization: '',
        tasks:null
      }
    ],
  },
  {
    name: 'Projects',
    icon: 'folder',
    description:'Certainly , you can swipe left to know the details of personal project',
    category: [
      {
        name: 'Weather App',
        percentage: null,
        universityName:null,
        description: null,
        year: null,
        images: null,
        specialization: null,
        tasks:
        {
          skills:'Angular',
          description:[
            {
              task1:'A basic Weather application that uses openweathermap.org as a rest api to fetch real-time data',
            },
            {
              task1:'Extensive use @Output and @Input decorator to enable component level communication also using two-way data binding [(ngModel)] to enable DOM communication',
            }
          ]
        }


      },
      {
        name: 'E-commerce Website',
        percentage: null,
        universityName: null,
        description: null,
        year: null,
        images: null,
        specialization: 'MEAN stack application',
        tasks:
        {
          skills:'MongoDB , Angular , NodeJS , ExpressJS',
          description:[
            {
              task1:'Enabled JWT authentication for login and signup page , that authorizes a user each time there is a signup/login using token generated',
            },
            {
              task1:'Use of Angular AuthGuards that restricted the login/navigation of user to admin respective pages',
            },
            {
              task1:'Supported the CRUD operations which involed creation , modification and deletion of the grocery products',
            },
          ]
        }


      },

    ],
  }
];


export default arrayOfObjects;
