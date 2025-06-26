
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design", "UI/UX Design"],
      color: "from-blue-600/20 to-cyan-600/20"
    },
    {
      title: "Backend Development",
      skills: ["Python", "Node.js", "C#", "VB.NET", "API Development", "RESTful Services"],
      color: "from-green-600/20 to-emerald-600/20"
    },
    {
      title: "Database & Tools",
      skills: ["SQL", "MongoDB", "MySQL", "Git", "GitHub", "Postman"],
      color: "from-purple-600/20 to-pink-600/20"
    },
    {
      title: "Technologies & Frameworks",
      skills: ["Deep Learning", "Machine Learning", "Full Stack Development", "Desktop Applications"],
      color: "from-orange-600/20 to-red-600/20"
    }
  ];

  const certifications = [
    "Java Certificate by HackerRank",
    "ProGrad Certified Full Stack Developer",
    "NASSCOM Certified Associate Analytics (SSC/Q2101) LEVEL 7"
  ];

  return (
    <section className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Skills & Certifications</h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.color} p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105`}
              >
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 text-white px-3 py-1 rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-8 rounded-xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/10 p-4 rounded-lg border border-white/20 text-center hover:bg-white/20 transition-colors duration-200"
                >
                  <p className="text-gray-300 font-medium">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
