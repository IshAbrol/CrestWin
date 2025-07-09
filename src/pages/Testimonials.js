import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Sharma',
      role: 'CTO',
      company: 'PayTech Solutions Pvt Ltd',
      image: '/api/placeholder/300/300',
      rating: 5,
      testimonial: 'CrestWin transformed our legacy banking system into a modern, scalable fintech platform. Their expertise in full-stack development and cloud architecture exceeded our expectations. The team delivered on time and within budget, helping us serve 2 million+ users.',
      project: 'Digital Banking Platform',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 2,
      name: 'Priya Patel',
      role: 'CEO',
      company: 'HealthCare Connect India',
      image: '/api/placeholder/300/300',
      rating: 5,
      testimonial: 'The telemedicine mobile app developed by CrestWin revolutionized healthcare delivery in rural India. Their attention to detail and user experience design resulted in a 400% increase in patient consultations. Exceptional work!',
      project: 'Telemedicine Mobile App',
      social: {
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Arjun Gupta',
      role: 'Head of Analytics',
      company: 'EduTech India Pvt Ltd',
      image: '/api/placeholder/300/300',
      rating: 5,
      testimonial: 'CrestWin\'s AI/ML team built us a personalized learning platform that transformed education for 500,000+ students. The predictive analytics improved learning outcomes by 60%. Outstanding technical expertise and project management.',
      project: 'AI-Powered Learning Platform',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'VP of Engineering',
      company: 'CloudVision',
      image: '/api/placeholder/300/300',
      rating: 5,
      testimonial: 'CrestWin helped us migrate our entire infrastructure to AWS with zero downtime. Their DevOps expertise and careful planning made what seemed impossible, effortless. True professionals.',
      project: 'Cloud Migration & DevOps',
      social: {
        linkedin: '#'
      }
    },
    {
      id: 5,
      name: 'Neha Agarwal',
      role: 'Product Manager',
      company: 'AgriTech Solutions Mumbai',
      image: '/api/placeholder/300/300',
      rating: 5,
      testimonial: 'Working with CrestWin was a fantastic experience. They understood our vision for digitizing agriculture and delivered a comprehensive farmer management platform. The ongoing support has been excellent, helping us reach 50,000+ farmers.',
      project: 'Agricultural Management Platform',
      social: {
        linkedin: '#'
      }
    },
    {
      id: 6,
      name: 'Vikram Singh',
      role: 'Founder',
      company: 'LogiTech Startups Bengaluru',
      image: '/api/placeholder/300/300',
      rating: 5,
      testimonial: 'As a logistics startup, we needed a reliable technology partner. CrestWin not only delivered our MVP but also provided valuable technical guidance that helped us scale from 100 to 10,000+ daily deliveries. They truly care about their clients success.',
      project: 'Logistics Management System',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  const stats = [
    { number: '98%', label: 'Client Satisfaction Rate' },
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Countries Served' },
    { number: '95%', label: 'Client Retention Rate' }
  ];

  const awards = [
    {
      title: 'Best Software Development Company',
      year: '2023',
      organization: 'TechReview Awards',
      category: 'Innovation'
    },
    {
      title: 'Top 10 AI/ML Solutions Provider',
      year: '2023',
      organization: 'AI Excellence Awards',
      category: 'Technology'
    },
    {
      title: 'Customer Choice Award',
      year: '2022',
      organization: 'Business Excellence',
      category: 'Service'
    },
    {
      title: 'Rising Star in Cloud Solutions',
      year: '2022',
      organization: 'Cloud Computing Awards',
      category: 'Excellence'
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
              Client <span className="gradient-text">Testimonials</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our clients say about 
              working with CrestWin and the results we've achieved together.
            </p>
          </motion.div>
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
                <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-8 rounded-2xl card-hover"
              >
                <div className="flex items-center mb-4">
                  <FaQuoteLeft className="h-6 w-6 text-blue-400 mr-3" />
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="h-4 w-4 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6 italic">"{testimonial.testimonial}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{testimonial.name}</h3>
                    <p className="text-blue-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="flex space-x-2">
                    {testimonial.social.linkedin && (
                      <a href={testimonial.social.linkedin} className="text-gray-400 hover:text-blue-400">
                        <FaLinkedin className="h-4 w-4" />
                      </a>
                    )}
                    {testimonial.social.twitter && (
                      <a href={testimonial.social.twitter} className="text-gray-400 hover:text-blue-400">
                        <FaTwitter className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">
                    <span className="font-semibold">Project:</span> {testimonial.project}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl text-center card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FaStar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{award.title}</h3>
                <p className="text-blue-400 text-sm mb-1">{award.organization}</p>
                <p className="text-gray-400 text-sm">{award.year} • {award.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaQuoteLeft className="h-12 w-12 text-blue-400 mx-auto mb-8" />
            <blockquote className="text-2xl md:text-3xl font-light text-white mb-8 italic">
              "CrestWin doesn't just deliver code; they deliver solutions that transform businesses. 
              Their technical expertise combined with their understanding of business needs makes them 
              the ideal technology partner."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">RM</span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Ravi Mehta</p>
                <p className="text-blue-400">CEO, Digital Bharat Enterprises</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;