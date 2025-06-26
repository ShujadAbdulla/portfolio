
import React, { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact: ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:villa.swamikiran9490@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 bg-white/5 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Get In Touch</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                or simply connecting with fellow developers. Whether you're looking for a 
                passionate developer or want to collaborate on exciting projects, I'd love to hear from you.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Mail className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">villa.swamikiran9490@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-purple-600 p-3 rounded-full">
                  <Github className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">GitHub</h4>
                  <a 
                    href="https://github.com/villaswami" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    github.com/villaswami
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-blue-700 p-3 rounded-full">
                  <Linkedin className="text-white" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">LinkedIn</h4>
                  <a 
                    href="https://www.linkedin.com/in/swami-kiran-villa-3a43b520a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Connect with me
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-white/5 to-white/10 p-8 rounded-xl border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
        
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-gray-400">
            © 2024 Villa Swami Kiran. Built with React and passion for great code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
