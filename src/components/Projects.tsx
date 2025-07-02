
import React from 'react';
import { Github, ArrowUp } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "CareConnect",
      description: "A Professional home Nursing Care at Your Doorstep. It helps users create personalized care plans. Built with modern web technologies, this full-stack application uses AI to suggest treatments, medications, and activities based on patient needs and preferences.",
      image: "public/images/1.png",
      technologies: ["React.js", "Node.js", "HTML","CSS","JavaScript", "MongoDB", "Express.js"],
      liveUrl: "https://careconnect-wireframe-wizard.lovable.app/",
      githubUrl: "https://github.com/ShujadAbdulla/careconnect-wireframe-wizard?tab=readme-ov-file",
      category: "Full Stack"
    },
    {
      title: "CareConnect",
      description: "An Medical Transport platform that leverages Google's Gemini AI to provide patients with reliable medical and non-medical transportation services, enhancing accessibility to healthcare for everyone.",
      image: "public/images/2.png",
      technologies: ["React.js", "Gemini AI", "JavaScript", "CSS3", "API Integration"],
      liveUrl: "https://travel-gemini-connect-app.lovable.app/",
      githubUrl: "https://github.com/ShujadAbdulla/travel-gemini-connect-app?tab=readme-ov-file",
      category: "Full Stack"
    },
    {
      title: "SJ Services",
      description: "Professional sound and lighting solutions that bring your event to life. From concerts to private parties, we deliver exceptional audiovisual experiences.",
      image: "public/images/3.png",
      technologies:  ["React.js", "Gemini AI", "JavaScript", "CSS3", "API Integration"],
      liveUrl: "https://p-590920.lovable.app/",
      githubUrl: "https://github.com/ShujadAbdulla/p-590920",
      category: "Full Stack"
    },
    {
      title: "Travel Booking System Backend",
      description: "A comprehensive backend system for managing travel bookings including buses and airports. Features booking management, route optimization, and real-time availability tracking with robust API architecture.",
      image: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=300&fit=crop",
      technologies: ["Node.js", "Express.js", "MongoDB", "Real-time APIs"],
      githubUrl: "https://github.com/villaswami/travlingBusesandAirports",
      category: "Backend"
    },
    {
      title: "Prediction of Employee’s Attrition",
      description: "A machine learning model that predicts employee attrition based on various factors such as job satisfaction, performance metrics, and employee engagement levels.",
      image: "public/images/50662High-employee-turnover.jpg",
      technologies: ["Python", "Machine Learning", "Pandas", "NumPy", "Scikit-learn","Matplotlib","Seaborn"],
      category: "Backend"
    },
    {
      title: "Image segmentation using U-Net",
      description: "A deep learning project focused on image segmentation using U-Net architecture. The model is trained to accurately segment images into different regions for various applications.",
      image: "public/images/1_B16t8Do6hvuq2Q_2YOM-UQ.png",
      technologies:  ["Python", "Deep Learning", "TensorFlow", "Keras", "Image Processing", "U-Net","machine learning","numpy","pandas","matplotlib","seaborn"],
      category: "AI/ML"
    },
    {
      title: "Sequence Based Analysis (LSTM) News Text Classification",
      description: "A deep learning project that utilizes LSTM (Long Short-Term Memory) networks for classifying news articles into different categories based on their content. The model is trained on a large dataset of news articles and can accurately predict the category of unseen articles.",
      image: "public/images/nlp-tutorial-text-classification.png",
      technologies: ["Python", "Deep Learning", "TensorFlow", "Keras", "Natural Language Processing"],
      category: "AI/ML"
    },
    {
      title: "Detection of Irregularities on Steel Surface using Deep Learning",
      description: "A deep learning project focused on detecting irregularities on steel surfaces using advanced image processing techniques. The model is trained to identify defects and anomalies in steel products.",
      image: "public/images/4.png",
      technologies:  ["Python", "Deep Learning", "TensorFlow", "Keras", "Image Processing", "U-Net","machine learning","numpy","pandas","matplotlib","seaborn"],
      category: "AI/ML"
    },
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case "Full Stack":
        return "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border-blue-400/30 hover:from-blue-400/30 hover:to-cyan-400/30";
      case "Backend":
        return "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border-green-400/30 hover:from-green-400/30 hover:to-emerald-400/30";
      case "AI/ML":
        return "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-400/30 hover:from-purple-400/30 hover:to-pink-400/30";
      default:
        return "bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-300 border-gray-400/30 hover:from-gray-400/30 hover:to-slate-400/30";
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900/80 via-purple-900/30 to-indigo-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-400 transition-all duration-500">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-300 ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:text-white transition-colors duration-300">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-white/10 hover:bg-white/20 text-white px-2 py-1 rounded text-xs border border-white/20 hover:border-white/40 hover:scale-110 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm hover:scale-110 hover:shadow-lg"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm hover:scale-110 hover:shadow-lg"
                    >
                      <ArrowUp size={16} />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
