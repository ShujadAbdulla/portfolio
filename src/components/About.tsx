
import React from 'react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white/5 via-purple-900/20 to-indigo-900/20 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-500">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed hover:text-white transition-colors duration-300">
               I'm a passionate and dedicated software developer with a strong interest in building impactful solutions and continuously expanding my technical skill set. I’m currently seeking opportunities that allow me to leverage my passion for software development, contribute to real-world projects, and grow both personally and professionally.

With hands-on experience in Python, Node.js, JavaScript, HTML, CSS, C#, and basic SQLite, I enjoy tackling challenges and translating ideas into functional, user-friendly applications. I believe in lifelong learning and am always eager to explore new technologies and development practices.


              </p>
              <p className="text-gray-300 text-lg leading-relaxed hover:text-white transition-colors duration-300">
              What Drives Me:

Building scalable and efficient software

Learning and experimenting with new tech stacks

Collaborating with teams and mentoring others

Solving real-world problems through code
              </p>
              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-500/30 hover:to-purple-500/30 p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 group cursor-pointer">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  Professional Focus
                </h3>
                <ul className="text-gray-300 space-y-2 group-hover:text-white transition-colors duration-300">
                  <li className="hover:text-purple-300 transition-colors duration-200">• Full-stack web development</li>
                  <li className="hover:text-purple-300 transition-colors duration-200">• Software engineering best practices</li>
                  <li className="hover:text-purple-300 transition-colors duration-200">• Mentoring and technical education</li>
                  <li className="hover:text-purple-300 transition-colors duration-200">• API development and integration</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-500/30 hover:to-pink-500/30 p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 group cursor-pointer">
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-pink-300 transition-colors duration-300">Education</h3>
                <div className="space-y-4">
                  <div className="hover:bg-white/10 p-3 rounded transition-all duration-300">
                    <h4 className="text-blue-300 font-medium group-hover:text-pink-300 transition-colors duration-300">
                      Integrated M.Tech in Software Engineering
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Vellore Institute of Technology, AP
                    </p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      2017-2022 • GPA: 7.87/10
                    </p>
                  </div>
                  <div className="hover:bg-white/10 p-3 rounded transition-all duration-300">
                    <h4 className="text-blue-300 font-medium group-hover:text-pink-300 transition-colors duration-300">
                      Intermediate Education
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      Sri Chaitanya Junior College
                    </p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      2015-2017 • 90%
                    </p>
                  </div>
                  <div className="hover:bg-white/10 p-3 rounded transition-all duration-300">
                    <h4 className="text-blue-300 font-medium group-hover:text-pink-300 transition-colors duration-300">
                      10th Education
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      St.Anthony's High School
                    </p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      2014-2015 • 62%
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 hover:from-green-500/30 hover:to-blue-500/30 p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 group cursor-pointer">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors duration-300">
                  Contact Info
                </h3>
                <div className="space-y-2 text-gray-300 group-hover:text-white transition-colors duration-300">
                  <p className="hover:text-green-300 transition-colors duration-200">📍 Hyderabad, India</p>
                  <p className="hover:text-green-300 transition-colors duration-200">📱 +91 9603029838</p>
                  <p className="hover:text-green-300 transition-colors duration-200">✉️ villa.swamikiran9490@gmail.com</p>
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
