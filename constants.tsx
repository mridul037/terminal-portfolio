import { FaReact, FaAws, FaAngular, FaVuejs, FaNodeJs } from 'react-icons/fa';
import { BsStack, BsTerminalFill } from 'react-icons/bs';
import { DiMongodb, DiMysql } from 'react-icons/di';
import {
  SiSvelte,
  SiPlaywright,
  SiTestinglibrary,
  SiTypescript,
  SiNginx,
  SiSwagger,
  SiJasmine,
  SiJest,
  SiRedux,
  SiNodedotjs,
  SiNestjs
} from 'react-icons/si';

export const COMMANDS = [
  'help',
  'whoami',
  'experience',
  'education',
  'projects',
  'contact',
  'download',
  'gui',
  'clear'
] as const;
export const HELP_TEXT = {
  help: 'List of all commands that are available',
  whoami: 'Short introduction about me',
  experience: 'Breif about my work experience',
  education: 'Lists education details & certifications',
  projects: 'List some of my projects outside of professional work',
  contact:
    'Shows contact info such as email & other social media profiles of me',
  download: 'Download the latest copy of my resume',
  gui: 'Shows GUI view of my portfolio',
  clear:"Clear the terminal"
};

export const EXPERIENCES = [
  {
    title: 'Senior Backend Developer',
    duration: {
      start: 'March 2023',
      end: 'Current'
    },
    company: 'SEEID.INC',
    description: () => (
      <div className="description">
        <p>
          Working on K8’s,aws(aws-cli),node.js,mongodb.{' '}
        </p>
        <br />


        <div className="my-2 flex items-center">
          <p className="mr-2 flex items-center font-semibold text-cyan-400">
            <BsStack className=" mr-1" />
            Tech Stack:{' '}
          </p>
          <p className="flex space-x-3 text-xl">

            <SiTypescript className="text-blue-500" />
            <DiMongodb className="text-green-400" />

            <FaAws className="text-[#FF9900]" />
            <SiNodedotjs className="text-green-500" />
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Fullstack Developer Engineer',
    duration: {
      start: 'Sept 2021',
      end: 'March 2022'
    },
    company: 'Actyv®',
    description: () => (
      <div className="description">
        <p>
          Working on Nest.JS (node framework) for backend creating api, authentication using Aws Cognito, Aws
          SES for emails..
        </p>
        <br />
        <p>
          React.js (with Redux-Saga and Vite bundler ) for front-end,Mongodb as database,used docker,redis-queue.
        </p>
        <br />
        <div className="my-2 flex items-center">
          <p className="mr-2 flex items-center font-semibold text-cyan-400">
            <BsStack className=" mr-1" />
            Tech Stack:{' '}
          </p>
          <p className="flex space-x-3 text-xl">
            <FaReact className="text-cyan-500" />
            <SiRedux className="text-purple-800" />
            <SiNestjs className="text-green-500" />
            <SiTypescript className="text-blue-500" />
          </p>
        </div>
      </div>
    )
  },
  {
    title: 'Full Stack Developer',
    duration: {
      start: 'Sept 2021',
      end: 'March 2022'
    },
    company: 'VISIT HEALTH',
    description: () => (
      <div className="description">
        <p>
          Worked on Node.js Backend, Mysql database, microservices, kibana dashboard.

        </p>
        <br />
        <p>
          Pharmeasy and Docprime api’s integration in backend ,development of medicine delivery flow for
          pharmacy microservice.

        </p>
        <br />

        <div className="my-2 flex items-center">
          <p className="mr-2 flex items-center font-semibold text-cyan-400">
            <BsStack className=" mr-1" />
            Tech Stack:{' '}
          </p>
          <p className="flex space-x-3 text-xl">

            <FaNodeJs className="text-green-500" />
            <SiSwagger className="text-green-500" />
            <DiMysql className="text-green-400" />
          </p>
        </div>

      </div>
    )
  },
  {
    title: 'Full Stack Developer',
    duration: {
      start: 'March 2021',
      end: 'Sept 2021'
    },
    company: 'FYND (Shopsense Retail Technologies Ltd.)',
    description: () => (
      <div className="description">
        <p>
          Worked on Vue.js frontend, writing test cases in jest.
        </p>
        <br />
        <p>
          Worked on development of omni-channel platform, on theme and ui-engine, where user can come and
          create there own website.
        </p>
        <br />

        <div className="my-2 flex items-center">
          <p className="mr-2 flex items-center font-semibold text-cyan-400">
            <BsStack className=" mr-1" />
            Tech Stack:{' '}
          </p>
          <p className="flex space-x-3 text-xl">
            <FaVuejs className="text-green-500" />
            <FaNodeJs className="text-green-500" />
            <SiTypescript className="text-blue-500" />
          </p>
        </div>

      </div>
    )
  },
  {
    title: 'Full Stack Developer',
    duration: {
      start: 'March 2021',
      end: 'Sept 2021'
    },
    company: 'CARNOT TECHNOLOGIES PVT LTD',
    description: () => (
      <div className="description">
        <p>
          Worked on React frontend integrating api react-charts google map, state management in Redux-saga and
          framer-motion for UI.
        </p>
        <br />
        <p>
          Worked on serverless architecture deploying AWS lambda api in Node.js, deployment react app on AWS
          amplify.
        </p>
        <br />

        <div className="my-2 flex items-center">
          <p className="mr-2 flex items-center font-semibold text-cyan-400">
            <BsStack className=" mr-1" />
            Tech Stack:{' '}
          </p>
          <p className="flex space-x-3 text-xl">
          <FaReact className="text-cyan-500" />
            <SiRedux className="text-purple-800" />
            <SiTypescript className="text-blue-500" />
          </p>
        </div>

      </div>
    )
  }
];

export const EDUCATION = [
  {
    degree: `Master In Computer Application`,
    college: `HBTU kanpur`,
    duration: {
      start: 'Jun 2017',
      end: 'July 2020'
    },
    score: '7.8 / 10'
  },
  {
    degree: `BCA`,
    college: `Dr. Virendra swaroop institute of computer application`,
    duration: {
      start: 'Jun 2014',
      end: 'July 2017'
    },
    score: '64%'
  },
  {
    degree: `12th`,
    college: `U.P kirana seva samiti vidyalaya`,
    duration: {
      end: 'March 2014'
    },
    score: '81.00%'
  }
];

export const CONTACTS = [
  {
    label: 'Email',
    link: 'mridulshukla037@gmail.com',
    value: 'mridulshukla037@gmail.com'
  },
  {
    label: 'LinkedIn',
    link: 'https://linkedin.com/in/mridul-shukla-899123174'
  },
  {
    label: 'Github',
    link: 'https://github.com/mridul037'
  }
];

export const PROJECTS = [
  {
    label: '• SORTING VISUALIZATION:',
    link: 'https://laughing-mccarthy-04f950.netlify.app/',
    description:' Visualizing merge sort algorithm in react.js. Merger sort is in worst case take O(nlogn) time compare to Bubble sort taking O(n2) time in sorting',
    stack: 'React.js'
  },
  {
    label: '• Spinner',
    link: 'https://jovial-borg-54ec01.netlify.app/',
    description: ' Spinner for Lucky draw, Made in react.js as a pwa.',
    stack: 'React.js'
  }
];
