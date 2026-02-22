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
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-red-800/5 to-transparent"></div>
        <div className="absolute top-20 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Code the Future,
              <span className="gradient-text block mt-3">Win with CrestWin</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              CrestWin helps startups, SMEs, and global enterprises build <span className="text-red-400 font-semibold">scalable, secure, and high-performing</span> digital products.
              From web/mobile apps to AI-powered systems and enterprise cloud solutions, we deliver cutting-edge technology across industries.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-5 justify-center items-center"
            >
              <Link
                to="/contact"
                className="btn-primary text-white px-10 py-4 rounded-lg font-semibold text-lg shadow-glow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group"
                onClick={() => trackButtonClick('Get Started Today', 'hero_section')}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Today
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                to="/projects"
                className="btn-secondary glass-effect text-white px-10 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-all duration-300"
                onClick={() => trackButtonClick('View Our Work', 'hero_section')}
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-white/5 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center glass-effect p-6 rounded-xl hover:scale-105 transition-transform duration-300 group cursor-pointer"
              >
                <div className="bg-gradient-to-br from-red-500 to-red-700 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300 shadow-lg">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
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
                className="glass-effect p-8 rounded-2xl card-hover group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">{service.description}</p>
                <div className="mt-4 flex items-center text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Learn more</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
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
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-effect px-6 py-3 rounded-full text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-red-700 hover:border-transparent hover:shadow-lg hover:scale-110 transition-all duration-300 font-medium cursor-pointer"
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {clientIndustries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl hover:scale-105 hover:border-red-400/40 transition-all duration-300 group cursor-pointer"
              >
                <div className="h-16 flex items-center justify-center text-white font-semibold text-center group-hover:text-red-400 transition-colors">
                  {industry.name}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-red-500 to-red-600 animate-gradient"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium shadow-lg">
                Let's Build Something Amazing
              </span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl md:text-2xl text-gray-100 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's discuss your project and explore how we can help you achieve your goals with cutting-edge technology
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-red-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-2xl group"
                onClick={() => trackButtonClick('Start Your Project', 'cta_section')}
              >
                <span className="flex items-center gap-2">
                  Start Your Project
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 hover:scale-105 transition-all duration-300"
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