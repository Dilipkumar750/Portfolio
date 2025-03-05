import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProjectOverview = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const project = location.state?.project;

    if (!project) {
        return (
            <div className="text-white text-center mt-20 text-2xl">
                Project not found.
            </div>
        );
    }

    return (
        <div className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-screen flex items-center justify-center">
            <div className="max-w-5xl mx-auto p-6 flex flex-col md:flex-row gap-10 bg-gray-900 rounded-lg shadow-lg">
                <div className="w-full md:w-1/2">
                    <img
                        src={project.src}
                        alt={project.name}
                        className="rounded-md w-full shadow-lg"
                    />
                    <p className="text-lg text-gray-300 mb-6">{project.description}</p>

                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                    <h1 className="text-4xl font-bold mb-4 text-center md:text-left">
                        {project.name}
                    </h1>

                    {/* Tech Stack Grid */}
                    <div className="grid gap-6">
                        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3 border-b-2 border-gray-600 pb-2">
                                Tech Stack
                            </h3>
                            <ul className="list-disc list-inside text-gray-300">
                                {project.techStack.split(",").map((tech, index) => (
                                    <li key={index}>{tech.trim()}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gray-800 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-3 border-b-2 border-gray-600 pb-2">
                                Project Details
                            </h3>
                            <p>
                                <strong>Type:</strong> Full Stack Website
                            </p>
                            <p>
                                <strong>Duration:</strong> {project.duration}
                            </p>
                            {project.link !== "#" && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 hover:underline mt-4 block"
                                >
                                    {project.link}
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Go Back Button */}
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md mt-8 transition duration-300 self-center md:self-start"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectOverview;