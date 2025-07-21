import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Menu, X, Sparkles } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  // activeSection contains the section name which is currently being viewed on the screen in a string form.
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'streams', 'faq', 'reviews'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200' 
        : 'bg-white shadow-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className={`bg-blue-500 p-2 rounded-xl transition-all duration-300 group-hover:shadow-lg group-hover:scale-105`}>
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold bg-blue-500 bg-clip-text text-transparent">
                StreamChoice
              </h1>
              <div className="flex items-center space-x-1 text-xs text-gray-500">
                <Sparkles className="w-3 h-3" />
                <span>Your Future Starts Here</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
           {/*} <a
                href="#about"
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                    activeSection === 'about'
                    ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                >
                <span>About</span>
            </a>*/}

            <a
                href="#streams"
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                    activeSection === 'streams'
                    ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                >
                <span>Home</span>
            </a>

            <a
                href="#faq"
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                    activeSection === 'faq'
                    ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                >
                <span>FAQ</span>
            </a>

            <a
                href="#reviews"
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 font-medium ${
                    activeSection === 'reviews'
                     ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
                >
                <span>Reviews</span>
            </a>

            <button className="ml-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 font-semibold">
              <span>Take Quiz</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        >
        <nav className="pt-4 pb-2 space-y-2">

            <a
            href="#about"
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                activeSection === 'about'
                 ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
            }`}
            >
            <span className="font-medium">About</span>
            </a>

            <a
            href="#streams"
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                activeSection === 'streams'
                ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
            }`}
            >
            <span className="font-medium">Streams</span>
            </a>

            <a
            href="#faq"
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                activeSection === 'faq'
                ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
            }`}
            >
            <span className="font-medium">FAQ</span>
            </a>

            <a
            href="#reviews"
            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 text-left ${
                activeSection === 'reviews'
                ? 'bg-blue-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
            }`}
            >
            <span className="font-medium">Reviews</span>
            </a>

            {/* Mobile CTA Button */}
            <button className="w-full mt-4 bg-blue-500 text-white px-6 py-3 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
            <span>Take Quiz Now</span>
            <ArrowRight className="w-5 h-5" />
            </button>
        </nav>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform origin-left transition-transform duration-300"
           style={{
             transform: `scaleX(${Math.min(window.scrollY / (document.documentElement.scrollHeight - window.innerHeight), 1)})`
           }}
      />
    </header>
  );
}

export default Header;