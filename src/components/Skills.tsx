
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design", "UI/UX Design"],
      color: "from-cyan-500/20 to-blue-500/20",
      hoverColor: "hover:from-cyan-400/30 hover:to-blue-400/30"
    },
    {
      title: "Backend Development", 
      skills: ["Python", "Node.js", "C#", "VB.NET", "API Development", "Express.js"],
      color: "from-emerald-500/20 to-green-500/20",
      hoverColor: "hover:from-emerald-400/30 hover:to-green-400/30"
    },
    {
      title: "Database & Tools",
      skills: ["SQL", "MongoDB", "SQLite", "Git", "GitHub", "Postman"],
      color: "from-purple-500/20 to-pink-500/20",
      hoverColor: "hover:from-purple-400/30 hover:to-pink-400/30"
    },
    {
      title: "Technologies & Frameworks",
      skills: ["Deep Learning", "Machine Learning", "Full Stack Development", "TensorFlow"],
      color: "from-orange-500/20 to-red-500/20",
      hoverColor: "hover:from-orange-400/30 hover:to-red-400/30"
    }
  ];

  const certifications = [
    {
      name: "Java Certificate by HackerRank",
      image: "/lovable-uploads/4f8eeb16-2e46-4707-8ce9-d1f4171940a9.png"
    },
    {
      name: "ProGrad Certified Full Stack Developer", 
      image: "/lovable-uploads/247d184d-e56a-46b8-9728-593651823f0e.png"
    },
    {
      name: "NASSCOM Certified Associate Analytics (SSC/Q2101) LEVEL 7",
      image: "/lovable-uploads/56ab1911-a0e1-41f2-b8cd-caaa4494f23c.png"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-indigo-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-500">
          Skills & Certifications
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.color} ${category.hoverColor} p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl group cursor-pointer`}
              >
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors duration-300">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 text-white px-3 py-1 rounded-full text-sm border border-white/20 hover:bg-white/20 hover:border-white/40 hover:scale-110 transition-all duration-300 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-400/30 hover:to-orange-400/30 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400 transition-all duration-500">
              Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group bg-white/10 hover:bg-white/20 p-4 rounded-lg border border-white/20 hover:border-white/40 text-center transition-all duration-500 hover:scale-110 hover:shadow-xl cursor-pointer"
                >
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                    {cert.name}
                  </p>
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
