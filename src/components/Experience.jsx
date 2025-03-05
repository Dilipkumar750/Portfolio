import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nextjs from "../assets/nextjs.png";
import mongodb from "../assets/mongodb.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import Bootstrap from "../assets/Bootstrap.png";
import Node from "../assets/node.png";
import express from "../assets/express.png";
import vite from '../assets/Vite.png'

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: Node,
      title: "Node Js",
      style: "shadow-green-400",
    },
    {
      id: 3,
      src: mongodb,
      title: "MongoDb",
      style: "shadow-green-400",
    },
    {
      id: 4,
      src: express,
      title: "Express Js",
      style: "shadow-gray-400",
    },
    {
      id: 5,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 6,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 8,
      src: nextjs,
      title: "Next JS",
      style: "shadow-white",
    },
    {
      id: 9,
      src: Bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-400",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 11,
      src: vite,
      title: "Vite",
      style: "shadow-violet-400",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
  ];


  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white ">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Technical Stack
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
