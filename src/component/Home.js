import React from 'react';

const Home = () => {
  return (
    <section className="relative bg-blue-100 h-screen">
      {/* Video Background */}
      <video autoPlay muted loop id="video-background" className="absolute w-full h-full object-cover">
        <source src={require('./assets/Law.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken the video */}
      <div className="absolute top-0 left-0 w-full h-full bg-blue-900 opacity-40" />

      <div className="relative z-10 flex justify-center items-center h-full">
        <div className="w-full md:w-1/2 p-6 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-500">
            Making Legal Matters Easy
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            We are dedicated to simplifying legal processes for lawyers. Our services provide you with the tools and support you need.
          </p>
          <a href="#_" className="inline-flex items-center justify-center w-48 md:w-64 px-6 py-3 text-lg text-white bg-blue-500 rounded-2xl hover:bg-blue-600 transition duration-300">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

