import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaGraduationCap, FaLaptop, FaHeart, FaGlobe, FaChartLine, FaRocket } from 'react-icons/fa';

const Careers = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We are looking for a skilled Full-Stack Developer to join our engineering team. You will be responsible for developing and maintaining web applications using modern technologies.',
      requirements: [
        'Strong experience with React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, or GCP)',
        'Knowledge of database systems (PostgreSQL, MongoDB)',
        'Familiarity with DevOps practices and CI/CD',
        'Excellent problem-solving and communication skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget'],
      tags: ['React', 'Node.js', 'TypeScript', 'AWS']
    },
    {
      id: 2,
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our mobile development team to create innovative mobile applications for iOS and Android platforms using React Native and Flutter.',
      requirements: [
        'Experience with React Native or Flutter',
        'Knowledge of native iOS/Android development',
        'Understanding of mobile UI/UX principles',
        'Experience with app store deployment',
        'Strong debugging and testing skills'
      ],
      benefits: ['Remote work', 'Flexible hours', 'Health insurance', 'Tech stipend'],
      tags: ['React Native', 'Flutter', 'iOS', 'Android']
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'London, UK',
      type: 'Full-time',
      experience: '4+ years',
      description: 'We are seeking a DevOps Engineer to help us scale our infrastructure and improve our deployment processes.',
      requirements: [
        'Experience with AWS, Docker, and Kubernetes',
        'Strong scripting skills (Python, Bash)',
        'Knowledge of Infrastructure as Code (Terraform)',
        'Experience with CI/CD pipelines',
        'Understanding of monitoring and logging tools'
      ],
      benefits: ['Competitive salary', 'Visa sponsorship', 'Training budget', 'Flexible hours'],
      tags: ['AWS', 'Docker', 'Kubernetes', 'Terraform']
    },
    {
      id: 4,
      title: 'AI/ML Engineer',
      department: 'Data Science',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our AI/ML team to develop and deploy machine learning models and AI solutions for our clients.',
      requirements: [
        'Strong background in machine learning and statistics',
        'Experience with Python, TensorFlow, and PyTorch',
        'Knowledge of MLOps practices',
        'Experience with cloud ML platforms',
        'PhD or Masters in relevant field preferred'
      ],
      benefits: ['High salary', 'Research time', 'Conference attendance', 'Stock options'],
      tags: ['Python', 'TensorFlow', 'PyTorch', 'MLOps']
    },
    {
      id: 5,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'We are looking for a creative UX/UI Designer to help us create beautiful and user-friendly interfaces.',
      requirements: [
        'Strong portfolio of web and mobile designs',
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Understanding of user-centered design principles',
        'Experience with design systems',
        'Knowledge of frontend technologies (HTML, CSS, JS)'
      ],
      benefits: ['Remote work', 'Creative freedom', 'Design tools budget', 'Flexible hours'],
      tags: ['Figma', 'UX Design', 'UI Design', 'Prototyping']
    },
    {
      id: 6,
      title: 'Data Engineer',
      department: 'Data Science',
      location: 'Toronto, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Join our data engineering team to build and maintain data pipelines and infrastructure for our analytics platform.',
      requirements: [
        'Experience with Apache Airflow, Kafka, and Spark',
        'Strong SQL and Python skills',
        'Knowledge of data warehousing concepts',
        'Experience with cloud data platforms',
        'Understanding of data modeling and ETL processes'
      ],
      benefits: ['Competitive salary', 'Health benefits', 'Remote work', 'Stock options'],
      tags: ['Python', 'Airflow', 'Kafka', 'Spark']
    }
  ];

  const benefits = [
    {
      icon: FaLaptop,
      title: 'Remote Work',
      description: 'Work from anywhere with flexible hours and home office setup'
    },
    {
      icon: FaHeart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: FaGraduationCap,
      title: 'Learning & Development',
      description: 'Annual learning budget and conference attendance'
    },
    {
      icon: FaGlobe,
      title: 'Global Opportunities',
      description: 'Work with international teams and clients worldwide'
    },
    {
      icon: FaChartLine,
      title: 'Career Growth',
      description: 'Clear career progression paths and mentorship programs'
    },
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'Work on cutting-edge projects with latest technologies'
    }
  ];

  const companyValues = [
    {
      title: 'Innovation',
      description: 'We encourage creativity and innovative thinking in everything we do'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication'
    },
    {
      title: 'Growth',
      description: 'We invest in our people and support their professional development'
    },
    {
      title: 'Quality',
      description: 'We maintain the highest standards in our work and deliverables'
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
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a global team that's shaping the future of technology. 
              We're looking for talented individuals who share our passion for innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              What drives us every day and makes CrestWin a great place to work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center card-hover"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We offer competitive benefits and a supportive work environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl card-hover"
              >
                <benefit.icon className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our current job openings and find your next career opportunity
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-8 rounded-2xl card-hover"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                      <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-6 mb-4 text-gray-300">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="h-4 w-4 mr-2 text-blue-400" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <FaClock className="h-4 w-4 mr-2 text-blue-400" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center">
                        <FaBriefcase className="h-4 w-4 mr-2 text-blue-400" />
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{job.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                      <ul className="text-gray-300 space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-2">Benefits:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <span
                            key={benefitIndex}
                            className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full text-sm"
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {job.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:ml-8 lg:flex-shrink-0">
                    <Link
                      to="/contact"
                      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
                    >
                      Apply Now
                    </Link>
                  </div>
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
              Don't See Your Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's explore opportunities together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200"
              >
                Send Resume
              </Link>
              <a
                href="mailto:careers@crestwin.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;