
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Instructor",
      company: "Current Position",
      period: "April 2024 - Present",
      location: "Remote",
      responsibilities: [
        "Mentoring and guiding aspiring software engineers in core and advanced development skills",
        "Delivering structured training and project-based learning on full-stack technologies",
        "Teaching Frontend: HTML, CSS, JavaScript and Backend: Python, Node.js",
        "Conducting live sessions, code reviews, and technical doubt-clearing sessions",
        "Guiding learners through version control systems (Git, GitHub) and API integration",
        "Collaborating with internal teams to enhance curriculum and assessment standards",
        "Helping shape hundreds of learners into capable developers"
      ],
      impact: "Developed deep understanding of software fundamentals and effective teaching methodologies"
    },
    {
      title: "Software Engineer",
      company: "Siemens Technology Services Private Limited",
      period: "July 2022 - November 2023",
      location: "Bengaluru",
      responsibilities: [
        "Worked as a front-end developer implementing Analysis Tool platform for large industries",
        "Migrated entire user interface to align with Siemens industrial experience standards",
        "Customized original components based on specific project requirements",
        "Developed desktop applications using VB.NET/C# focusing on TMS tool implementation",
        "Facilitated testing of various test cases contributing to overall testing process"
      ],
      impact: "Successfully delivered enterprise-grade solutions meeting industry standards"
    }
  ];

  return (
    <section className="py-20 bg-black/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Work Experience</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                  <p className="text-blue-300 text-lg">{exp.company}</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-300 font-medium">{exp.period}</p>
                  <p className="text-gray-400">{exp.location}</p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <span className="text-blue-400 mr-2 mt-1">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-green-600/20 p-4 rounded-lg border border-green-500/30">
                  <h4 className="text-green-300 font-semibold mb-2">Impact:</h4>
                  <p className="text-gray-300">{exp.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
