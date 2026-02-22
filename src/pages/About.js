import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaUsers, FaAward, FaRocket, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

const About = () => {
  const milestones = [
    {
      year: 'Q1 2025',
      title: 'The Beginning',
      description: 'CrestWin Private Limited founded by Shivank Goswami and Aarush Dhavale with a vision to deliver quality software solutions'
    },
    {
      year: 'Q2 2025',
      title: 'First Client Projects',
      description: 'Successfully delivered our first web and mobile app projects for early-stage startups'
    },
    {
      year: 'Q3 2025',
      title: 'Building Our Team',
      description: 'Onboarded talented developers and designers to strengthen our technical capabilities'
    },
    {
      year: 'Q4 2025',
      title: 'Growing Our Portfolio',
      description: 'Expanded our client base and successfully completed 15+ projects across different domains'
    },
    {
      year: '2026',
      title: 'International Presence',
      description: 'Started serving clients in USA, UK, and Australia, establishing our global footprint'
    },
    {
      year: 'Future',
      title: 'Scaling Up',
      description: 'Focused on expanding our expertise in AI/ML, cloud solutions, and building long-term partnerships'
    }
  ];

  const team = [
    {
      name: 'Shivank Goswami',
      role: 'Founder & CEO',
      image: '/api/placeholder/300/300',
      description: 'Seasoned software engineering professional with 8+ years of experience in full-stack development and cloud-native applications',
      social: { linkedin: 'https://linkedin.com/in/shivank-goswami', twitter: '#' }
    },
    {
      name: 'Aarush Dhavale',
      role: 'Co-Founder & CTO',
      image: '/api/placeholder/300/300',
      description: 'Experienced technologist in distributed systems, DevOps, and AI/ML platforms',
      social: { linkedin: 'https://linkedin.com/in/aarush-dhavale', github: '#' }
    }
  ];

  const values = [
    {
      icon: FaRocket,
      title: 'Innovation',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'We work closely with clients as partners in their success journey'
    },
    {
      icon: FaAward,
      title: 'Excellence',
      description: 'We maintain the highest standards in code quality and delivery'
    },
    {
      icon: FaGlobe,
      title: 'Global Impact',
      description: 'We create solutions that make a positive difference worldwide'
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
              About <span className="gradient-text">CrestWin</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Founded in 2025, CrestWin is a software development and IT services company helping startups, SMEs, 
              and global enterprises build scalable, secure, and high-performing digital products across 5+ countries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Story
              </h2>
              <p className="text-gray-300 mb-6">
                CrestWin was born from a simple belief: technology should empower businesses
                to achieve their full potential. What started as a vision of Shivank Goswami and Aarush Dhavale
                in Indore has grown into a trusted technology partner for global enterprises.
              </p>
              <p className="text-gray-300 mb-6">
                Today, we work with funded startups, SMEs, and digital-first enterprises. Our talented 
                team of 12+ experts specializes in cutting-edge technologies, bringing together 
                different perspectives and expertise to solve complex business challenges.
              </p>
              <p className="text-gray-300">
                We're not just a service provider - we're your technology partner, committed to 
                building long-term partnerships and delivering future-ready solutions in an ever-evolving digital landscape.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-effect p-8 rounded-2xl"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">15+</div>
                  <div className="text-gray-300">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">5+</div>
                  <div className="text-gray-300">Countries Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">12+</div>
                  <div className="text-gray-300">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">98%</div>
                  <div className="text-gray-300">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Key milestones that shaped our growth and success
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-500 hidden md:block"></div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="glass-effect p-6 rounded-xl">
                      <div className="text-blue-400 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                      <p className="text-gray-300">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:block w-4 h-4 bg-blue-500 rounded-full absolute left-1/2 transform -translate-x-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center card-hover"
              >
                <value.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experienced leaders driving innovation and excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center card-hover"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                <div className="flex justify-center space-x-3">
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-400">
                    <FaLinkedin className="h-5 w-5" />
                  </a>
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-gray-400 hover:text-blue-400">
                      <FaTwitter className="h-5 w-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-gray-400 hover:text-blue-400">
                      <FaGithub className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;