import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaInstagram, FaClock, FaGlobe } from 'react-icons/fa';

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
      address: 'B-92, Vistara Township, MR-11 Road, Khudel, Indore, MP - 452010',
      phone: '+91 9243543141',
      email: 'info@crestwin.in',
      timezone: 'IST',
      coordinates: [22.7196, 75.8577]
    },
    {
      city: 'Remote',
      country: 'USA',
      address: 'Serving clients across United States',
      phone: '+1-XXX-XXX-XXXX',
      email: 'usa@crestwin.in',
      timezone: 'EST/PST',
      coordinates: [39.8283, -98.5795]
    },
    {
      city: 'Remote',
      country: 'United Kingdom',
      address: 'Serving clients across UK and Europe',
      phone: '+44-XXX-XXX-XXXX',
      email: 'uk@crestwin.in',
      timezone: 'GMT',
      coordinates: [55.3781, -3.4360]
    },
    {
      city: 'Remote',
      country: 'Australia',
      address: 'Serving clients across Australia',
      phone: '+61-XXX-XXX-XXXX',
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
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
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
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
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
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
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
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
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
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="+1 (555) 123-4567"
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
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
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
                      className="w-full px-4 py-3 bg-white/10 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
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
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-glow"
                >
                  Send Message
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
                <div className="flex items-center">
                  <FaPhone className="h-5 w-5 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-gray-300">+91 9243543141</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaEnvelope className="h-5 w-5 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-300">info@crestwin.in</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaMapMarkerAlt className="h-5 w-5 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Address</p>
                    <p className="text-gray-300">B-92, Vistara Township, MR-11 Road, Khudel, Indore, MP, India - 452010</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FaClock className="h-5 w-5 text-blue-400 mr-4" />
                  <div>
                    <p className="text-white font-semibold">Business Hours</p>
                    <p className="text-gray-300">Mon - Sat: 9AM - 7PM IST</p>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4">Follow us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="p-3 glass-effect rounded-lg hover:bg-white/20 transition-colors">
                    <FaLinkedin className="h-5 w-5 text-blue-400" />
                  </a>
                  <a href="#" className="p-3 glass-effect rounded-lg hover:bg-white/20 transition-colors">
                    <FaTwitter className="h-5 w-5 text-blue-400" />
                  </a>
                  <a href="#" className="p-3 glass-effect rounded-lg hover:bg-white/20 transition-colors">
                    <FaGithub className="h-5 w-5 text-blue-400" />
                  </a>
                  <a href="#" className="p-3 glass-effect rounded-lg hover:bg-white/20 transition-colors">
                    <FaFacebook className="h-5 w-5 text-blue-400" />
                  </a>
                  <a href="#" className="p-3 glass-effect rounded-lg hover:bg-white/20 transition-colors">
                    <FaInstagram className="h-5 w-5 text-blue-400" />
                  </a>
                </div>
              </div>

              <div className="glass-effect p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-white mb-4">Quick Response</h3>
                <p className="text-gray-300 mb-4">
                  We typically respond to inquiries within 24 hours. For urgent matters, 
                  please call us directly.
                </p>
                <div className="flex items-center">
                  <FaGlobe className="h-4 w-4 text-blue-400 mr-2" />
                  <span className="text-blue-400 text-sm">Available worldwide</span>
                </div>
              </div>
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