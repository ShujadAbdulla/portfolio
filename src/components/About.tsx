
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm a passionate software engineer with a strong foundation in full-stack development. 
                Currently working as a Software Developer Instructor, I'm dedicated to mentoring and 
                guiding aspiring software engineers in both core and advanced development skills.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in technology has been driven by curiosity and a desire to create meaningful 
                solutions. I believe in continuous learning and staying updated with the latest 
                technologies to deliver exceptional results.
              </p>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Professional Focus</h3>
                <ul className="text-gray-300 space-y-2">
                  <li>• Full-stack web development</li>
                  <li>• Software engineering best practices</li>
                  <li>• Mentoring and technical education</li>
                  <li>• API development and integration</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-blue-300 font-medium">Integrated M.Tech in Software Engineering</h4>
                    <p className="text-gray-400">Vellore Institute of Technology, AP</p>
                    <p className="text-gray-400">2018-2022 • GPA: 7.87/10</p>
                  </div>
                  <div>
                    <h4 className="text-blue-300 font-medium">Intermediate Education</h4>
                    <p className="text-gray-400">Sri Chaitanya Junior College</p>
                    <p className="text-gray-400">2016-2018 • 90%</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">Contact Info</h3>
                <div className="space-y-2 text-gray-300">
                  <p>📍 Hyderabad, India</p>
                  <p>📱 +91 9603029838</p>
                  <p>✉️ villa.swamikiran9490@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
