import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ 
  title = "CrestWin Private Limited | Top Software Development Company India", 
  description = "CrestWin Private Limited is a leading software development company in Indore, India. We specialize in custom software development, web & mobile apps, AI/ML solutions, cloud services, and enterprise solutions for startups, SMEs, and global enterprises. Code the Future, Win with CrestWin.",
  keywords = "CrestWin, CrestWin Private Limited, software development company Indore, web development India, mobile app development, custom software solutions, AI ML development, cloud services, React development, Node.js development, Python development, Flutter development, enterprise software, startup solutions, Indore IT company, software company MP",
  image = "https://www.crestwin.in/logo.png",
  url = "https://www.crestwin.in",
  type = "website",
  author = "CrestWin Private Limited"
}) => {
  const siteUrl = 'https://www.crestwin.in';
  const fullUrl = url.startsWith('http') ? url : `${siteUrl}${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="geo.region" content="IN-MP" />
      <meta name="geo.placename" content="Indore" />
      <meta name="geo.position" content="22.7196;75.8577" />
      <meta name="ICBM" content="22.7196, 75.8577" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="CrestWin Private Limited" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      <meta property="twitter:creator" content="@CrestWin" />
      <meta property="twitter:site" content="@CrestWin" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#1e40af" />
      <link rel="canonical" href={fullUrl} />
      
      {/* Business Contact Information */}
      <meta property="business:contact_data:street_address" content="Plot Number 211, 2nd Floor, Scheme Number 134, Near NRK Luxe" />
      <meta property="business:contact_data:locality" content="Indore" />
      <meta property="business:contact_data:region" content="Madhya Pradesh" />
      <meta property="business:contact_data:postal_code" content="452010" />
      <meta property="business:contact_data:country_name" content="India" />
      <meta property="business:contact_data:phone_number" content="+91-9203797182" />
      <meta property="business:contact_data:email" content="hr@crestwin.in" />

      {/* JSON-LD Structured Data for Local Business */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "CrestWin Private Limited",
            "image": "${fullImageUrl}",
            "description": "${description}",
            "url": "${fullUrl}",
            "telephone": "+91-9203797182",
            "email": "hr@crestwin.in",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Plot Number 211, 2nd Floor, Scheme Number 134, Near NRK Luxe",
              "addressLocality": "Indore",
              "addressRegion": "Madhya Pradesh",
              "postalCode": "452010",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 22.7196,
              "longitude": 75.8577
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday", 
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ],
              "opens": "09:00",
              "closes": "19:00"
            },
            "priceRange": "$$",
            "servedCuisine": "Software Development Services",
            "hasMap": "https://www.google.com/maps/place/Indore,+Madhya+Pradesh,+India/@22.7196,75.8577,17z"
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;