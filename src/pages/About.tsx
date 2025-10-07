import React from 'react';

const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <div className="bg-red-200 font-bold">tailwind check</div>

      <div className="bg-red-600 p-4 font-bold">tailwind check</div>
      <div className="bg-red-500 p-8">test</div>
      <div className="cursor-pointer bg-red-500 p-4">Click me</div>
      <button className="cursor-pointer bg-red-500 p-4">Hover me</button>
    </div>
  );
};

export default About;
