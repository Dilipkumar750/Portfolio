import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <div>
          <p className="text-xl mt-20">
            "As an Accountant transitioning to Full Stack Development, I leverage my analytical skills and attention to detail in software development. I'm proficient in HTML, CSS, JavaScript, ReactJS, and Bootstrap for building responsive user interfaces. 
          </p>
            <br/>
           <p className="text-xl">
            On the back-end, I work with NodeJS and MongoDB to create scalable applications. My experience in data management enhances my ability to solve technical problems effectively."
          </p>
  
          <br />
  
          <p className="text-xl">
            "I’m passionate about technology and committed to continuous learning. Eager to contribute to innovative projects and collaborate with talented teams, I aspire to build a fulfilling career in IT and make a meaningful impact in the industry."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
