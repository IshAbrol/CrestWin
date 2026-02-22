import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaCode, FaMobile, FaCloud, FaDatabase, FaBrain, FaDesktop, FaShieldAlt, FaChartLine, FaRocket, FaCog, FaUsers, FaCheckCircle } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Full-stack Development',
      description: 'Complete web application development from frontend to backend',
      features: [
        'React, Angular, Vue.js frontend development',
        'Node.js, Python, Java backend systems',
        'RESTful API design and implementation',
        'Database design and optimization',
        'Real-time applications with WebSockets',
        'Progressive Web Apps (PWA)'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'MongoDB', 'PostgreSQL'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: FaMobile,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      features: [
        'iOS development with Swift/SwiftUI',
        'Android development with Kotlin/Java',
        'Cross-platform with React Native',
        'Flutter app development',
        'App Store optimization',
        'Push notifications and analytics'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Apple Store'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FaCloud,
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure and deployment automation',
      features: [
        'AWS, Azure, GCP cloud architecture',
        'Docker containerization',
        'Kubernetes orchestration',
        'CI/CD pipeline setup',
        'Infrastructure as Code (Terraform)',
        'Monitoring and logging solutions'
      ],
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'GitLab CI/CD'],
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: FaDatabase,
      title: 'Data Engineering',
      description: 'Big data solutions and analytics pipelines',
      features: [
        'ETL pipeline development',
        'Data warehouse design',
        'Real-time data processing',
        'Apache Kafka streaming',
        'Data visualization dashboards',
        'Machine learning data prep'
      ],
      technologies: ['Apache Airflow', 'Kafka', 'Spark', 'Redshift', 'BigQuery', 'Snowflake'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FaBrain,
      title: 'AI/ML & GenAI',
      description: 'Artificial intelligence and machine learning solutions',
      features: [
        'Custom ML model development',
        'Natural Language Processing',
        'Computer vision solutions',
        'Generative AI applications',
        'RAG (Retrieval-Augmented Generation)',
        'MLOps and model deployment'
      ],
      technologies: ['TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face', 'LangChain', 'MLflow'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: FaDesktop,
      title: 'Web Design & SEO',
      description: 'Modern web design with search optimization',
      features: [
        'UI/UX design with Figma',
        'Responsive web design',
        'WordPress development',
        'E-commerce solutions',
        'Search engine optimization',
        'Performance optimization'
      ],
      technologies: ['Figma', 'WordPress', 'Webflow', 'Next.js', 'Tailwind CSS', 'Google Analytics'],
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: FaShieldAlt,
      title: 'Security & Compliance',
      description: 'Comprehensive security and compliance solutions',
      features: [
        'Security audits and assessments',
        'OAuth2 and JWT implementation',
        'SOC2 compliance consulting',
        'GDPR compliance solutions',
        'Penetration testing',
        'Security training programs'
      ],
      technologies: ['OAuth2', 'JWT', 'SOC2', 'GDPR', 'ISO 27001', 'OWASP'],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: FaChartLine,
      title: 'Digital Transformation',
      description: 'Complete digital transformation consulting',
      features: [
        'Digital strategy development',
        'Legacy system modernization',
        'Process automation',
        'Change management',
        'Technology roadmap planning',
        'ROI optimization'
      ],
      technologies: ['Strategy', 'Consulting', 'Process Mining', 'Automation', 'Analytics', 'ROI'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your business needs, goals, and technical requirements.',
      icon: FaUsers
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Our team creates detailed technical specifications and system architecture.',
      icon: FaCog
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development with continuous testing and quality assurance.',
      icon: FaCode
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'Seamless deployment with ongoing maintenance and support.',
      icon: FaRocket
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs. 
              From concept to deployment, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-8 rounded-2xl card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-300 mb-4">{service.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <FaCheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-white/10 text-red-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to="/contact"
                      className="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200"
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="glass-effect p-6 rounded-2xl card-hover">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-red-400 mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose CrestWin?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We deliver exceptional results through expertise, innovation, and partnership
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-red-400 mb-2">15+</div>
              <h3 className="text-xl font-semibold text-white mb-2">Projects Delivered</h3>
              <p className="text-gray-300">Successfully completed projects with quality and care</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-red-400 mb-2">Fast</div>
              <h3 className="text-xl font-semibold text-white mb-2">Response Time</h3>
              <p className="text-gray-300">Quick turnaround and responsive communication</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="glass-effect p-6 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-red-400 mb-2">100%</div>
              <h3 className="text-xl font-semibold text-white mb-2">Client Satisfaction</h3>
              <p className="text-gray-300">Dedicated to delivering excellence on every project</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a solution that drives your business forward
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200"
              >
                Get Free Consultation
              </Link>
              <Link
                to="/projects"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-all duration-200"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;