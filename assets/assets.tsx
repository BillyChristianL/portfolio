import profile_img from './user/profile-billy.png';
import user_image from './user/user-image.jpg';
import RWTH from './RWTH_Logo.svg'
import FHAachen from './FHAachen.svg'
import JS from './JS.svg'
import TypeScript from './TypeScript.svg'
import Rust from "./Rust.svg"
import Python from './Python.svg'
import C from "./C.svg"
import Dart from "./Dart.svg"
import Flutter from "./Flutter.svg"
import TW from "./TW.svg"
import react from "./react.svg"
import Nest from "./Nest.svg"
import Next from "./Next.svg"
import MUI from "./MUI.svg"
import BS from "./BS.svg"
import Dj from "./Dj.svg"
import Express from "./Express.svg"
import Flask from "./Flask.svg"
import Codesys from "./Codesys.svg"
import docker from "./docker.svg"
import matlab from "./matlab.svg"
import SW from "./SW.svg"
import fusion from "./fusion.png"
import inventor from "./inventor.png"
import lpbf from "./lpbf.jpg"
import laser from "./laser.jpg"
import loggin from "./logging.jpg"
import importer from "./importer.jpg"
import robot from "./robot.jpg"
import heater from "./heater.jpg"
import plc from "./plc.jpg"
import {
  IconHome,
  IconUserCode,
  IconAdjustmentsCode,
  IconBrandTypescript,
  IconRocket,
  IconMessage,

} from "@tabler/icons-react";
import { NavLink } from './types/navigation';
import { Skill } from './types/skill';
import { Testimonial } from './types/testimonials';
export const links: NavLink[] = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-900" />,
    href: "#",
  },
  {
    title: "About",
    icon: <IconUserCode className="h-full w-full text-neutral-500 dark:text-neutral-900" />,
    href: "#about",
  },
  {
    title: "Skill",
    icon: <IconAdjustmentsCode className="h-full w-full text-neutral-500 dark:text-neutral-900" />,
    href: "#skill",
  },
  {
    title: "Project",
    icon: <IconRocket className="h-full w-full text-neutral-500 dark:text-neutral-900" />,
    href: "#project",
  },
  {
    title: "Message",
    icon: <IconMessage className="h-full w-full text-neutral-500 dark:text-neutral-900" />,
    href: "#contact",
  },

];
export const assets = {
  user_image,

 





  profile_img,

  RWTH,
  FHAachen,
  IconBrandTypescript,
  JS,
  Rust,
  TypeScript,
  Flutter,
  Dart,
  Python,
  C,

  TW,
  react,
  MUI,
  Nest,
  Next,
  Flask,
  Dj,
  BS,
  Express,
  Codesys,

  docker,
  matlab,
  SW,
  fusion,
  inventor,

  lpbf,
  laser,
  loggin,
  importer,
  robot,
  heater





};

export const skillData: Skill[] = [
  {
    icon: [
      { img: assets.JS, link: "https://icons8.com/icon/108784/javascript" },
      { img: assets.TypeScript, link: "https://icons8.com/icon/uJM6fQYqDaZK/typescript" },
      { img: assets.Rust, link: "https://icons8.com/icon/haeAxVQEIg0F/rust-programming-language" },
      { img: assets.C, link: "https://icons8.com/icon/haeAxVQEIg0F/rust-programming-language" },
      { img: assets.Dart, link: "https://icons8.com/icon/7AFcZ2zirX6Y/dart" },
      { img: assets.Flutter, link: "https://icons8.com/icon/7I3BjCqe9rjG/flutter" },
      { img: assets.Python, link: "https://icons8.com/icon/7I3BjCqe9rjG/flutter" }
    ],
    title: 'Programming Languages',
    description: 'These are the programming languages I regularly use in both professional work and personal projects',

  },
  {
    icon: [
      { img: assets.Next, link: "https://icons8.com/icon/yUdJlcKanVbh/next.js" },
      { img: assets.Nest, link: "https://icons8.com/icon/9ESZMOeUioJS/nestjs" },
      { img: assets.Express, link: "https://icons8.com/icon/kg46nzoJrmTR/express-js" },
      { img: assets.MUI, link: "https://icons8.com/icon/gFw7X5Tbl3ss/material-ui" },
      { img: assets.Dj, link: "https://icons8.com/icon/AksudKrBQryM/django" },
      { img: assets.BS, link: "https://icons8.com/icon/PndQWK6M1Hjo/bootstrap" },
      { img: assets.Flask, link: "https://icons8.com/icon/PndQWK6M1Hjo/bootstrap" },
      { img: assets.TW, link: "https://icons8.com/icon/CIAZz2CYc6Kc/tailwindcss" }
    ],
    title: 'Frameworks',
    description: 'These are the frameworks I use ',

  },
  {
    icon: [
      { img: assets.Codesys, link: "" },
      { img: assets.docker, link: "https://icons8.com/icon/cdYUlRaag9G9/docker" },
      { img: assets.matlab, link: "https://icons8.com/icon/r5Y16PcDkoWI/matlab" },

    ],
    title: 'Other Tools',
    description: 'Tools I use to do simulation and also communicate with machines',

  },
  {
    icon: [
      { img: assets.SW, link: "https://icons8.com/icon/62397/solidworks" },
      { img: assets.fusion, link: "" },
      { img: assets.inventor, link: "" },

    ],
    title: 'Design Tools',
    description: 'Tools I use to design contruction of machines',

  },


];

export const infoList = [
  { icon: assets.FHAachen, title: '2017 -2021', description: 'B. Eng in Mechanical Engineering' },
  { icon: assets.RWTH, title: '2021- Now', description: 'M. Sc. Automation Engineering RWTH' },


];


export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "This Python program, built with OpenCV, connects to the machine's integrated camera to provide real-time visual monitoring of the entire process.",
    name: "Live 3D Printing Process: Real-Time Camera Feed",
    designation: "Laser Melting Innovations GmbH",
    src: lpbf,
  },
  {
    id: 2,
    quote:
      "This C#-based program connects directly to the machine, converts 3D models into Open Vector Format (OVF), and generates G-code for precise layer-by-layer processing.",
    name: "Beckhoff ADS Client for OVF File Execution on Machine",
    designation: "Laser Melting Innovations GmbH",
    src: laser,
  },
  {
    id: 3,
    quote:
      "This code is a Django REST framework (DRF) application that serves as a metadata server for logging and managing job and process event data, likely for an industrial 3D printing system such as job layes, powder oversupply, etc.",
    name: "Alpha REST API",
    designation: "Laser Melting Innovations GmbH",
    src: loggin,
  },
  {
    id: 4,
    quote:
      "A full-stack Flask application with integrated database functionality to capture, store, and transport 3D printing process parameters for real-time Grafana visualization and comprehensive machine logging.",
    name: "IML Webimporter",
    designation: "Laser Melting Innovations GmbH",
    src: importer,
  },
  {
    id: 5,
    quote:
      "This project develops a SolidWorks-based concept for powder preheating in LPBF to compensate for thermal expansion in metal parts, optimizing process stability and part accuracy.",
    name: "LPBF Powder Preheating System Design",
    designation: "Laser Melting Innovations GmbH",
    src: heater,
  },
  {
    id: 6,
    quote:
      "Full-stack development of a robotic adhesive process monitoring tool with Python, JavaScript, and frontend-backend integration.",
    name: "Development of a Robotic Adhesive Process Tool",
    designation: "RWTH - Automation technology for production systems",
    src: robot,
  },
  {
    id: 7,
    quote:
      "The project focuses on automating complex process control tasks, including system automation development, integration of process monitoring and diagnostic concepts in automation technology, and PLC programming for industrial plants.",
    name: "Automation of Water Plant",
    designation: "RWTH - Process Automation",
    src: plc,
  },
  {
    id: 8,
    quote:
      "Python-based data processing using Bayesian linear regression and classification methods.",
    name: "Bayesian Linear Regression & Data Classification in Python",
    designation: "RWTH - Machine Learning",
    src: plc,
  },

];