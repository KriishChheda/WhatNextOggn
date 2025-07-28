import React from 'react'
import {BookOpen} from 'lucide-react';
import { Helmet } from 'react-helmet';

function Footer() {
  return (
    <div>
      <Helmet>
        <meta name="footer-component" content="StreamChoice site footer with contact info, links, and resources." />
        <mata author="Kriish Chheda"/>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "StreamChoice",
            "url": "https://yourdomain.com",
            "contactPoint": {
              "@type": "ContactPoint",
              "email": "info@yourdomain.com",
              "telephone": "+91-1234567890",
              "contactType": "Customer Support"
            }
          })}
        </script>
      </Helmet>

      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold">StreamChoice</h4>
              </div>
              <p className="text-gray-400">Helping students make informed decisions about their academic future.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#streams" className="hover:text-white transition-colors">Stream Guide</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Resources</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Career Guide</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Study Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">College Info</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Contact</h5>
              <div className="text-gray-400 space-y-2">
                <p>Email: </p>
                <p>Phone: </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
