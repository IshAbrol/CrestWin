import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaGlobe } from 'react-icons/fa';
import { trackFormSubmission, trackServiceInquiry } from '../utils/analytics';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Track form submission
    trackFormSubmission('contact_form', true);
    
    // Track service inquiry if service is selected
    if (formData.service) {
      trackServiceInquiry(formData.service, formData.budget);
    }
    
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      budget: '',
      message: ''
    });
  };

  const offices = [
    {
      city: 'Indore',
      country: 'India (HQ)',
      address: 'Plot Number 211, 2nd Floor, Scheme Number 134, Near NRK Luxe, Indore, Madhya Pradesh, 452010',
      phone: '+91 9203797182',
      email: 'hr@crestwin.in',
      timezone: 'IST',
      coordinates: [22.7196, 75.8577]
    },
    {
      city: 'Remote',
      country: 'USA',
      address: 'Serving clients across United States',
      phone: 'Available on request',
      email: 'usa@crestwin.in',
      timezone: 'EST/PST',
      coordinates: [39.8283, -98.5795]
    },
    {
      city: 'Remote',
      country: 'United Kingdom',
      address: 'Serving clients across UK and Europe',
      phone: 'Available on request',
      email: 'uk@crestwin.in',
      timezone: 'GMT',
      coordinates: [55.3781, -3.4360]
    },
    {
      city: 'Remote',
      country: 'Australia',
      address: 'Serving clients across Australia',
      phone: 'Available on request',
      email: 'au@crestwin.in',
      timezone: 'AEST',
      coordinates: [-25.2744, 133.7751]
    }
  ];

  const services = [
    'Custom Software Development',
    'Web & Mobile App Development',
    'Enterprise Software Solutions',
    'Cloud & DevOps Consulting',
    'AI/ML & Data Engineering',
    'API Development & Integration',
    'QA Automation & Testing',
    'UI/UX Design',
    'Other'
  ];

  const budgetRanges = [
    'Under $5,000 (₹2-4 Lakhs)',
    '$5,000 - $15,000 (₹4-12 Lakhs)',
    '$15,000 - $30,000 (₹12-25 Lakhs)',
    '$30,000 - $75,000 (₹25-60 Lakhs)',
    '$75,000+ (₹60+ Lakhs)',
    'To be discussed'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-red-800/5 to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium">
                Let's Connect
              </span>
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? We'd love to hear from you.
              Let's discuss how we can help bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500/50 text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500/50 text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500/50 text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-500"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500/50 text-white placeholder-gray-500 transition-all duration-300 hover:border-gray-500"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500/50 text-white transition-all duration-300 hover:border-gray-500"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service} className="bg-gray-800">
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-gray-600/50 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500/50 text-white transition-all duration-300 hover:border-gray-500"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range} className="bg-gray-800">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="Tell us about your project, requirements, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary text-white font-semibold py-4 px-6 rounded-lg shadow-glow hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Get in touch</h2>
              <p className="text-gray-300 mb-8">
                We're here to help you succeed. Reach out to us through any of these channels, 
                and we'll get back to you as soon as possible.
              </p>

              <div className="space-y-6 mb-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex items-start glass-effect p-4 rounded-lg hover:border-red-400/40 transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    <FaPhone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Phone</p>
                    <a href="tel:+919203797182" className="text-gray-300 hover:text-red-400 transition-colors">+91 9203797182</a>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex items-start glass-effect p-4 rounded-lg hover:border-red-400/40 transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-br from-red-600 to-red-700 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    <FaEnvelope className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Email</p>
                    <a href="mailto:hr@crestwin.in" className="text-gray-300 hover:text-red-400 transition-colors">hr@crestwin.in</a>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-start glass-effect p-4 rounded-lg hover:border-red-400/40 transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-br from-gray-600 to-gray-700 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    <FaMapMarkerAlt className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Address</p>
                    <p className="text-gray-300">Plot Number 211, 2nd Floor, Scheme Number 134, Near NRK Luxe, Indore, Madhya Pradesh, 452010</p>
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-start glass-effect p-4 rounded-lg hover:border-red-400/40 transition-all duration-300 group"
                >
                  <div className="bg-gradient-to-br from-gray-500 to-gray-600 p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform">
                    <FaClock className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-white font-semibold mb-1">Business Hours</p>
                    <p className="text-gray-300">Mon - Sat: 9AM - 7PM IST</p>
                  </div>
                </motion.div>
              </div>


              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="glass-effect p-6 rounded-xl border-2 border-red-500/20 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  <h3 className="text-xl font-semibold text-white">Quick Response</h3>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  We typically respond to inquiries within 24 hours. For urgent matters,
                  please call us directly.
                </p>
                <div className="flex items-center gap-3 bg-red-500/10 p-3 rounded-lg">
                  <FaGlobe className="h-5 w-5 text-red-400" />
                  <span className="text-red-400 text-sm font-medium">Available worldwide</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Global Offices
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              With offices around the world, we're always here to support you
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="glass-effect p-6 rounded-xl card-hover"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {office.city}, {office.country}
                </h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="h-4 w-4 text-blue-400 mr-2 mt-0.5" />
                    <span className="text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-sm">{office.email}</span>
                  </div>
                  <div className="flex items-center">
                    <FaClock className="h-4 w-4 text-blue-400 mr-2" />
                    <span className="text-sm">{office.timezone}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Find Us Worldwide</h2>
            <div className="glass-effect p-8 rounded-2xl">
              <div className="h-96 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FaGlobe className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Global Presence</h3>
                  <p className="text-gray-300">
                    Interactive map showing our office locations would be displayed here
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;