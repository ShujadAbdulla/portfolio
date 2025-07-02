
import { Power } from 'lucide-react';
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Figma", "Tailwind CSS", "Bootstrap"],
      color: "from-cyan-500/20 to-blue-500/20",
      hoverColor: "hover:from-cyan-400/30 hover:to-blue-400/30"
    },
    {
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "C++"],
      color: "from-emerald-500/20 to-green-500/20",
      hoverColor: "hover:from-emerald-400/30 hover:to-green-400/30"
    },
    {
      title: "Database & Tools",
      skills: ["SQL", "Git", "GitHub","Azure" ],
      color: "from-purple-500/20 to-pink-500/20",
      hoverColor: "hover:from-purple-400/30 hover:to-pink-400/30"
    },
    {
      title: "Technologies & Frameworks",
      skills: [ "Machine Learning", "Data Structures", "Algorithms", "Deep Learning", "Computer Vision", "Natural Language Processing", "OpenCV", "TensorFlow", "PyTorch", "Power BI", "Power Automate", "Power Apps", "Microsoft Copilot","Numpy", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
      color: "from-orange-500/20 to-red-500/20",
      hoverColor: "hover:from-orange-400/30 hover:to-red-400/30"
    },
    {
      title: "Mechanical Engineering Tools",
      skills: [ "Ansys", "Solidworks", "Solid edge", "AutoCAD", "MS-Office","HVAC System Design", "Thermal Analysis", "Fluid Dynamics", "Finite Element Analysis (FEA)", "Computer-Aided Design (CAD)"],
      color: "from-orange-500/20 to-red-500/20",
        hoverColor: "hover:from-orange-400/30 hover:to-red-400/30"
      },
      {
        title: "Other Skills & Soft Skills",
        skills: ["Business Operations", "Project Management","Data Analysis","Content Creation", "Team Collaboration", "Effective Communication", "Time Management", "Adaptability"],
        color: "from-gray-500/20 to-gray-600/20",
        hoverColor: "hover:from-gray-400/30 hover:to-gray-500/30"
    },
    ];
   

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-indigo-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-500">
          Skills & Expertise
        </h2>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
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
        </div>
      </div>
    </section>
  );
};

export default Skills;
