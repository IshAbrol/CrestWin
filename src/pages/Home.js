import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaRocket, FaGlobe, FaUsers, FaAward, FaCode, FaMobile, FaCloud, FaDatabase, FaBrain, FaDesktop } from 'react-icons/fa';
import SEO from '../components/SEO';
import { trackButtonClick } from '../utils/analytics';

const Home = () => {
  const stats = [
    { number: '15+', label: 'Projects Completed', icon: FaRocket },
    { number: '5+', label: 'Countries Served', icon: FaGlobe },
    { number: '10+', label: 'Happy Clients', icon: FaUsers },
    { number: '98%', label: 'Success Rate', icon: FaAward },
  ];

  const services = [
    {
      icon: FaCode,
      title: 'Custom Software Development',
      description: 'Tailored software solutions using modern tech stack for your business needs',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FaMobile,
      title: 'Web & Mobile Apps',
      description: 'Flutter, React Native apps and responsive web applications',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaCloud,
      title: 'Enterprise Solutions',
      description: 'Scalable enterprise software with cloud deployment and DevOps automation',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: FaDatabase,
      title: 'Data Engineering',
      description: 'Big data solutions, ETL pipelines, and data warehousing',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FaBrain,
      title: 'AI/ML Solutions',
      description: 'Machine learning models, GenAI, and intelligent automation',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: FaDesktop,
      title: 'Web Design & SEO',
      description: 'Modern UI/UX design with search engine optimization',
      color: 'from-pink-500 to-rose-500'
    },
  ];

  const technologies = [
    'React.js', 'Node.js', 'Python', 'Flutter', 'Next.js', 'Vue.js', 'AWS', 'Docker', 'PostgreSQL', 'MongoDB', 'TensorFlow', 'FastAPI'
  ];

  const clientIndustries = [
    { name: 'FinTech Solutions' },
    { name: 'Healthcare Systems' },
    { name: 'EdTech Platforms' },
    { name: 'Logistics Networks' },
    { name: 'eCommerce Solutions' },
    { name: 'SaaS Applications' },
  ];

  return (
    <>
      <SEO 
        title="CrestWin Private Limited | Top Software Development Company India | Custom Web & Mobile Apps"
        description="CrestWin Private Limited is a leading software development company in Indore, India. We specialize in custom software development, web & mobile apps, AI/ML solutions, cloud services, and enterprise solutions for startups, SMEs, and global enterprises. Code the Future, Win with CrestWin."
        keywords="CrestWin, CrestWin Private Limited, software development company Indore, web development India, mobile app development, custom software solutions, AI ML development, cloud services, React development, Node.js development, Python development, Flutter development, enterprise software, startup solutions, Indore IT company, software company MP, CrestWin.in"
        url="/"
        type="website"
      />
      <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Code the Future,
              <span className="gradient-text block mt-2">Win with CrestWin</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              CrestWin helps startups, SMEs, and global enterprises build scalable, secure, and high-performing digital products. 
              From web/mobile apps to AI-powered systems and enterprise cloud solutions, we deliver cutting-edge technology across industries.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 shadow-glow"
                onClick={() => trackButtonClick('Get Started Today', 'hero_section')}
              >
                Get Started Today
              </Link>
              <Link
                to="/projects"
                className="glass-effect text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-white/20"
                onClick={() => trackButtonClick('View Our Work', 'hero_section')}
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive IT solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl card-hover group"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <service.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks for modern solutions
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-effect px-4 py-2 rounded-full text-white hover:bg-white/20 transition-all duration-200"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Delivering innovative solutions across diverse industry verticals
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientIndustries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-4 rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                <div className="h-12 flex items-center justify-center text-white font-semibold">
                  {industry.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and explore how we can help you achieve your goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200"
                onClick={() => trackButtonClick('Start Your Project', 'cta_section')}
              >
                Start Your Project
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
                onClick={() => trackButtonClick('Learn More', 'cta_section')}
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
};

export default Home;