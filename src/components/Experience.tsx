import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Software Developer Instructor",
      company: "NXTWave",
      period: "April 2025 - Present",
      location: "Hyderabad",
      responsibilities: [
        "Instructing and guiding aspiring software engineers in core and advanced development skills",
        "Delivering structured training and project-based learning on full-stack technologies",
        "Teaching Frontend: HTML, CSS, JavaScript ",
        "Guiding learners through version control systems and API integration",
        "Collaborating with internal teams to enhance curriculum and assessment standards",
        "Helping shape hundreds of learners into capable developers"
      ],
      impact: "Developed deep understanding of software fundamentals and effective teaching methodologies"
    },
    {
      title: "Bussiness Operations Intern",
      company: "Prodokraft",
      period: "July 2022 - November 2023",
      location: "Remote",
      responsibilities: [
        "Leading the data scraping process to enhance product and seller insights.",
        "Reviewing and approving seller registrations, ensuring compliance and platform integrity.",
        "Supervising the end-to-end product approval and listing process to maintain quality standards.",
        "Managing and redefining product categories across the website for better user experience and visibility.",
        "Collaborating with the Founder’s Office on incubation grants to scale operations.",
        "Spearheaded the hiring process for a Business Operations Intern, expanding our team’s capabilities.",
      ],
    
      impact: "Successfully delivered enterprise-grade solutions meeting industry standards"
    }
  ];

  const certificationsAndAchievements = [
    {
      title: "Topper of the Batch",
      description: "Achieved the highest CGPA in M.Tech CSE at GITAM University",
      image: "public/images/OIP (1).jpg",
      type: "achievement"
    },
    {
      title: "Winner of College Level Paper Presentation",
      description: "Presented a paper on Waste to Energy at the College Conference",
      image: "public/images/research-paper-presentation.jpg",
      type: "achievement"
    },
    {
      title: "Introduction to Microsoft Azure Cloud Services",
      description: "Certified in Azure cloud fundamentals and services by Microsoft",
      image: "/images/Azure.jpg",
      type: "certificate"
    },
    {
      title: "Preparing Data for Analysis with Microsoft Excel",
      description: "Comprehensive certification covering data preparation and analysis techniques using Excel by Microsoft",
      image: "/images/Excel data Analysis.jpg",
      type: "certificate"
    },
    {
      title: "Generative AI: Introduction and Applications",
      description: "Comprehensive certification covering generative AI concepts and applications by IBM",
      image: "/images/GenAI.jpg",
      type: "certificate"
    },
    {
      title: "Introduction to Artificial Intelligence (AI)",
      description: "Comprehensive certification covering AI concepts and applications by IBM",
      image: "/images/Intro to Software Engg.jpg",
      type: "certificate"
    },
    {
      title: "Harnessing the Power of Data with Power BI",
      description: "Comprehensive certification covering data analytics and business intelligence using Power BI by Microsoft",
      image: "/images/power Bi.jpg",
      type: "certificate"
    },
    {
      title: "Generative AI: Prompt Engineering",
      description: "Professional certification in prompt engineering for generative AI by IBM",
      image: "/images/Prompt engg.jpg",
      type: "certificate"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/90 via-purple-900/40 to-indigo-900/60 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-500">
          Work Experience
        </h2>
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group bg-gradient-to-r from-blue-600/10 to-purple-600/10 hover:from-blue-500/20 hover:to-purple-500/20 p-8 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <p className="text-blue-300 text-lg group-hover:text-pink-300 transition-colors duration-300">
                    {exp.company}
                  </p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                    {exp.period}
                  </p>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {exp.location}
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                    Key Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start group-hover:text-white transition-colors duration-300">
                        <span className="text-blue-400 group-hover:text-purple-400 mr-2 mt-1 transition-colors duration-300">•</span>
                        <span className="hover:text-purple-300 transition-colors duration-200">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 hover:from-green-500/30 hover:to-emerald-500/30 p-4 rounded-lg border border-green-500/30 hover:border-green-400/50 transition-all duration-300">
                  <h4 className="text-green-300 font-semibold mb-2 hover:text-green-200 transition-colors duration-300">
                    Impact:
                  </h4>
                  <p className="text-gray-300 hover:text-white transition-colors duration-300">{exp.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-amber-400 hover:to-orange-400 transition-all duration-500">
            Achievements & Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificationsAndAchievements.map((item, index) => (
              <div
                key={index}
                className={`group p-6 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                  item.type === 'achievement' 
                    ? 'bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-400/30 hover:to-orange-400/30' 
                    : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-400/30 hover:to-purple-400/30'
                }`}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg border border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className={`text-lg md:text-xl font-bold text-white mb-2 transition-colors duration-300 ${
                      item.type === 'achievement' 
                        ? 'group-hover:text-amber-300' 
                        : 'group-hover:text-purple-300'
                    }`}>
                      {item.title}
                    </h3>
                    <p className="text-gray-300 group-hover:text-white transition-colors duration-300 text-sm md:text-base">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
