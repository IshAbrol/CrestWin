import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo size="default" />
            <p className="text-gray-400 text-sm">
              Software development and IT services company helping startups, SMEs, and global enterprises 
              build scalable, secure, and high-performing digital products.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/company/crestwin" className="text-gray-400 hover:text-red-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/crestwin" className="text-gray-400 hover:text-red-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="https://github.com/crestwin" className="text-gray-400 hover:text-red-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaGithub className="h-5 w-5" />
              </a>
              <a href="https://facebook.com/crestwin" className="text-gray-400 hover:text-red-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/crestwin" className="text-gray-400 hover:text-red-400 transition-colors" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Custom Software Development</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Web & Mobile Apps</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Enterprise Solutions</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Cloud & DevOps</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">AI/ML & Data Engineering</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">UI/UX Design</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-white transition-colors">Our Work</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className="h-4 w-4 text-red-400" />
                <span className="text-gray-400">Plot Number 211, 2nd Floor, Scheme Number 134, Near NRK Luxe, Indore, Madhya Pradesh, 452010</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhone className="h-4 w-4 text-red-400" />
                <span className="text-gray-400">+91 9203797182</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="h-4 w-4 text-red-400" />
                <span className="text-gray-400">hr@crestwin.in</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 CrestWin Private Limited. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;