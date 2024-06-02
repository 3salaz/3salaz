import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-6 md:flex md:items-center md:justify-between">
        <div className="md:w-1/3">
          <img
            src="https://via.placeholder.com/300"
            alt="Profile"
            className="rounded-full w-48 mx-auto md:mx-0"
          />
        </div>
        <div className="mt-6 md:mt-0 md:w-2/3 md:ml-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
          <p className="text-gray-700 mb-4">
            Hi, I'm Erik Salazar, a passionate developer with expertise in web development, social media management, and video editing. With over six years of experience, I have developed a deep understanding of the industry and honed my skills to deliver high-quality digital solutions.
          </p>
          <h3 className="text-2xl font-bold mb-2 text-gray-800">Skills</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Web Development</li>
            <li>Social Media Management</li>
            <li>Video Editing</li>
            <li>React & Firebase</li>
            <li>Project Management</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
