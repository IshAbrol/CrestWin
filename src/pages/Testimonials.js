import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Amit Verma',
      role: 'Founder',
      company: 'FoodieHub Startup',
      image: '/api/placeholder/300/300',
      rating: 5,
      testimonial: 'CrestWin built our food delivery app from scratch. They were patient with our changing requirements and delivered a polished MVP that helped us secure our seed funding. Great communication throughout!',
      project: 'Food Delivery Mobile App',
      social: {
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'TechStart Solutions',
      image: '/api/placeholder/300/300',
      rating: 5,
      testimonial: 'Working with CrestWin was seamless. They quickly understood our e-commerce requirements and delivered a responsive web app that our customers love. Highly recommended for startups!',
      project: 'E-commerce Web Platform',
      social: {
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Rohan Malhotra',
      role: 'Co-Founder',
      company: 'FitLife App',
      image: '/api/placeholder/300/300',
      rating: 5,
      testimonial: 'The team at CrestWin developed our fitness tracking app with great attention to detail. They provided valuable suggestions that improved our product. Professional and responsive team!',
      project: 'Fitness Tracking App',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      id: 4,
      name: 'Michael Chen',
      role: 'CEO',
      company: 'CloudSync Inc',
      image: '/api/placeholder/300/300',
      rating: 5,
      testimonial: 'CrestWin helped us build a solid cloud-based document management system. Their technical expertise and timely delivery made our launch smooth. Great value for money!',
      project: 'Document Management System',
      social: {
        linkedin: '#'
      }
    },
    {
      id: 5,
      name: 'Priya Deshmukh',
      role: 'Founder',
      company: 'EduConnect',
      image: '/api/placeholder/300/300',
      rating: 5,
      testimonial: 'CrestWin created an online learning platform for us that works beautifully. They understood our vision and delivered exactly what we needed. Excellent support even after project completion!',
      project: 'Online Learning Platform',
      social: {
        linkedin: '#'
      }
    },
    {
      id: 6,
      name: 'James Anderson',
      role: 'Technical Lead',
      company: 'DataFlow Systems',
      image: '/api/placeholder/300/300',
      rating: 5,
      testimonial: 'The CrestWin team built us a data analytics dashboard that exceeded expectations. Clean code, great documentation, and responsive support. Looking forward to working together again!',
      project: 'Analytics Dashboard',
      social: {
        linkedin: '#'
      }
    }
  ];

  const stats = [
    { number: '100%', label: 'Client Satisfaction' },
    { number: '15+', label: 'Projects Delivered' },
    { number: '5+', label: 'Countries Served' },
    { number: '90%', label: 'Repeat Clients' }
  ];

  const awards = [
    {
      title: 'Top Rated on Clutch',
      year: '2025',
      organization: 'Clutch.co',
      category: '5.0 Rating'
    },
    {
      title: 'Emerging Tech Startup',
      year: '2025',
      organization: 'Startup India',
      category: 'Recognition'
    },
    {
      title: 'Client Favorite Developer',
      year: '2025',
      organization: 'GoodFirms',
      category: 'Quality'
    },
    {
      title: 'Rising Star in Software',
      year: '2025',
      organization: 'Tech Indore',
      category: 'Innovation'
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
              "CrestWin is a reliable technology partner for startups. They understand the challenges
              of building an MVP and deliver quality work on time. Their team is responsive and truly
              cares about project success."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                <span className="text-white font-bold text-lg">AK</span>
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Ankit Kumar</p>
                <p className="text-blue-400">Founder, StartupBuzz India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;