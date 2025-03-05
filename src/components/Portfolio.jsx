import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import hrm from "../assets/portfolio/hrm.jpg";
import astrology from "../assets/portfolio/astrology.jpg";
import gravityglobal from "../assets/portfolio/gravityglobal.jpg";
import exceed from "../assets/portfolio/exceed.jpg";
import kovaimannvaasanai from "../assets/portfolio/kovaimannvaasanai.jpg";
import universevisuals from "../assets/portfolio/universevisuals.jpg";
import tentwood from "../assets/portfolio/tentwood.jpg";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");
  const navigate = useNavigate();

  const portfolios = [
    {
      id: 1,
      src: hrm,
      category: "Product",
      name: "HRM",
      link: "#",
      description: "HRM Product based website designed for employee management and resource management with secure authentication and invitation system. It provides role-based access control, employee attendance management, and report generation. The application supports bulk employee invitations via email and cloud-based file storage for employee documents.",
      techStack: "React, TailwindCSS, Nodemailer for employee invitation, Node.js, AWS S3 Bucket, Express, TypeScript",
      duration: "2 months"
    },
    {
      id: 2,
      src: exceed,
      category: "Full Stack",
      name: "Exceed Netsec",
      link: "https://exceednetsec.com/",
      description: "Exceed Netsec is a full-stack cybersecurity website showcasing services, expertise, and client solutions. It offers comprehensive information on cybersecurity services with a responsive design and dynamic content rendering. The website includes a contact form with email notifications and service inquiry management.",
      techStack: "React, Tailwind CSS, MongoDB, Express, Node.js",
      duration: "1 month"
    },
    {
      id: 3,
      src: gravityglobal,
      category: "Full Stack",
      name: "Gravity Global Export",
      link: "https://gravityglobalexport.com/",
      description: "Gravity Global Export is a full-stack project that handles global product export services with dynamic data management. It features product listing, order management, and secure authentication. Firebase backend handles real-time data synchronization and user management. The project integrates WhatsApp interaction for customer inquiries and updates.",
      techStack: "React, Firebase",
      duration: "2 months"
    },
    // {
    //   id: 4,
    //   src: kovaimannvaasanai,
    //   category: "Static",
    //   name: "Kovai Mannvaasanai",
    //   link: "https://kovaimannvaasanai.com/",
    //   description: "Kovai Mannvaasanai is a static website promoting traditional products and local cultural heritage. It highlights handmade products, cultural events, and community stories. The website is fully responsive and optimized for performance and accessibility. The project includes WhatsApp interaction for customer support and product inquiries.",
    //   techStack: "React, TailwindCSS, Bootstrap",
    //   duration: "1.5 months"
    // },
    {
      id: 5,
      src: astrology,
      category: "Full Stack",
      name: "Astrology Project",
      link: "#",
      description: "Astrology Project is a full-stack web application offering personalized astrology services and predictions. It supports user registration, profile management, and astrology consultations. External APIs provide real-time astrology predictions and GraphQL manages the data flow between frontend and backend.",
      techStack: "React.js, External APIs, GraphQL",
      duration: "4 months"
    },
    {
      id: 6,
      src: universevisuals,
      category: "Full Stack",
      name: "Universe Visuals",
      link: "https://universeboardsfinal.netlify.app/",
      description: "Universe Visuals is a full-stack portfolio website showcasing creative visuals and digital boards. The website provides image gallery features, user login, and content management. MongoDB stores user-uploaded content, while Vite Config optimizes the development process. The project includes WhatsApp interaction for customer communication and service inquiries.",
      techStack: "React, TailwindCSS, Vite Config, MongoDB, Node.js",
      duration: "1 month"
    },
    {
      id: 7,
      src: tentwood,
      category: "Full Stack",
      name: "Tentwood Trips",
      link: "#",
      description: "Tentwood Trips is a full-stack travel booking website integrating AI services for trip recommendations and cloud storage. It provides AI-based trip suggestions, user registration, and itinerary management. AWS S3 Bucket handles image and document uploads, while Gemini AI powers personalized trip recommendations. The project includes WhatsApp interaction for booking confirmations and customer queries.",
      techStack: "React, TailwindCSS, AWS S3 Bucket, Gemini AI, Node.js, Express",
      duration: "3 months"
    }
  ];


  const filteredPortfolios = activeTab === "All"
    ? portfolios
    : portfolios.filter((portfolio) => portfolio.category === activeTab);

  const openProjectPage = (project) => {
    navigate(`/project/${project.id}`, { state: { project } });
  };

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          {["All", "Static", "Full Stack", "Product"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md ${activeTab === tab ? "bg-gray-700" : "bg-gray-600 hover:bg-gray-700"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {filteredPortfolios.map((project) => (
            <div key={project.id} className="shadow-md shadow-gray-600 rounded-lg cursor-pointer" onClick={() => openProjectPage(project)}>
              <img src={project.src} alt={project.name} className="rounded-md duration-200 hover:scale-105" />
              <div className="text-center p-4 text-lg font-bold">{project.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
