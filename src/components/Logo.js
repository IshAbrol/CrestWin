import React from 'react';
import { Link } from 'react-router-dom';

const Logo = ({ className = "", size = "default", variant = "full", linkTo = "/" }) => {
  const sizeClasses = {
    small: { height: "h-16", width: "w-auto" },
    default: { height: "h-28", width: "w-auto" },
    large: { height: "h-32", width: "w-auto" },
    xlarge: { height: "h-36", width: "w-auto" }
  };

  const currentSize = sizeClasses[size];

  const LogoImage = () => (
    <div className="relative inline-block">
      {/* White glow for better contrast and professional look */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-white/20 rounded-xl blur-xl"></div>
      
      {/* Logo with enhanced contrast and visibility */}
      <div className="relative">
        <img
          src="/logo.png"
          alt="CrestWin Private Limited - Code the Future, Win with CrestWin"
          className={`${currentSize.height} ${currentSize.width} object-contain hover:scale-105 hover:brightness-110 transition-all duration-300`}
          style={{ 
            filter: 'contrast(1.2) saturate(1.1) drop-shadow(0 0 16px rgba(255, 255, 255, 0.7)) drop-shadow(0 4px 16px rgba(0, 0, 0, 0.7))',
            imageRendering: 'crisp-edges'
          }}
        />
      </div>
    </div>
  );

  const LogoText = () => (
    <div className="flex flex-col">
      <span className={`font-bold text-white ${size === 'small' ? 'text-lg' : size === 'large' ? 'text-2xl' : size === 'xlarge' ? 'text-3xl' : 'text-xl'} leading-tight`}>
        Crest<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Win</span>
      </span>
      {size !== "small" && (
        <span className="text-xs text-gray-400 leading-none">Private Limited</span>
      )}
    </div>
  );

  // For icon variant - clean favicon with white glow
  const LogoIcon = () => (
    <div className="relative inline-block">
      {/* White glow for better visibility */}
      <div className="absolute inset-0 bg-white/20 rounded-full blur-md"></div>
      <img
        src="/favicon.png"
        alt="CrestWin"
        className={`${currentSize.height} ${currentSize.height} object-contain hover:opacity-90 transition-all duration-200 relative`}
        style={{ 
          filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.6)) drop-shadow(0 2px 8px rgba(0,0,0,0.4))'
        }}
      />
    </div>
  );

  if (variant === "icon") {
    return (
      <Link to={linkTo} className={`inline-block ${className}`}>
        <LogoIcon />
      </Link>
    );
  }

  if (variant === "text") {
    return (
      <Link to={linkTo} className={`inline-block ${className}`}>
        <LogoText />
      </Link>
    );
  }

  if (variant === "image") {
    return (
      <Link to={linkTo} className={`inline-block ${className}`}>
        <LogoImage />
      </Link>
    );
  }

  // Default: show image logo with text fallback on hover
  return (
    <Link to={linkTo} className={`flex items-center hover:opacity-80 transition-opacity duration-200 ${className}`}>
      <LogoImage />
    </Link>
  );
};

export default Logo;