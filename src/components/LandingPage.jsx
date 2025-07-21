import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Star, ArrowRight, BookOpen, Calculator, Microscope, TrendingUp, Users, Award, ArrowDown } from 'lucide-react';
import { BentoGridDemo } from './BentoGrid';

const LandingPage = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "When should I decide between Science and Commerce?",
      answer: "The ideal time is during 9th or early 10th standard. This gives you enough time to understand your interests and plan accordingly for your future career path."
    },
    {
      question: "Can I switch streams after 10th standard?",
      answer: "While it's possible, it's better to make an informed choice initially. Some career paths may require specific stream backgrounds, so early planning is beneficial."
    },
    {
      question: "What if I'm interested in both Science and Commerce?",
      answer: "That's great! Some careers like Business Analytics, Biotechnology Business, or Science Communication combine both fields. Our quiz will help identify your stronger inclination."
    },
    {
      question: "How accurate is this quiz?",
      answer: "Our quiz is designed by education experts and considers your interests, aptitude, and career goals. While it's a great starting point, we recommend discussing results with teachers and parents."
    },
    {
      question: "Do I need to create an account to take the quiz?",
      answer: "No! Our quiz is completely free and doesn't require any registration. Just click 'Take Quiz' and start exploring your potential."
    }
  ];

  const reviews = [
    {
      name: "Priya Sharma",
      grade: "10th Standard",
      review: "This quiz helped me realize my passion for Biology. Now I'm confident about choosing Science stream!",
      rating: 5
    },
    {
      name: "Arjun Patel",
      grade: "9th Standard", 
      review: "I was confused between both streams. The detailed explanations and flowcharts made everything clear.",
      rating: 5
    },
    {
      name: "Sneha Gupta",
      grade: "10th Standard",
      review: "Great website! The quiz questions were really thoughtful and helped me understand my strengths.",
      rating: 4
    },
    {
      name: "Rohit Kumar",
      grade: "9th Standard",
      review: "My parents and I used the results to have a meaningful discussion about my future. Very helpful!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 mt-20">

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Choose Your Perfect
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Stream</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover whether Science or Commerce is the right path for you! <br />Our intelligent quiz analyzes your interests, 
            aptitude, and career goals to guide your academic journey.
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto space-x-2">
            <span>Take Quiz Now</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <div className="flex justify-center items-center mt-8 space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4" />
              <span>10,000+ Students Helped</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4" />
              <span>Expert Designed</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="w-4 h-4" />
              <span>4.8/5 Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stream Comparison Flowcharts */}
      <section id="streams" className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Explore Both Streams</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Science Stream */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="bg-green-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Microscope className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">Science Stream</h4>
                <p className="text-gray-600 mt-2">For curious minds who love to explore and discover</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h5 className="font-semibold text-green-800 mb-2 text-center">Core Subjects</h5>
                  <div className="text-sm text-gray-600 text-center">Physics • Chemistry • Biology/Mathematics</div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-gray-400" />
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h5 className="font-semibold text-green-800 mb-2 text-center">Career Paths</h5>
                  <div className="grid grid-cols-2 gap-2 text-sm ml-30 text-gray-600">
                    <div>• Doctor</div>
                    <div>• Engineer</div>
                    <div>• Researcher</div>
                    <div>• Scientist</div>
                    <div>• Biotechnologist</div>
                    <div>• Pharmacist</div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-gray-400" />
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h5 className="font-semibold text-green-800 mb-2 text-center">Best For Students Who</h5>
                  <div className="text-sm ml-35 text-gray-600">
                    • Love experiments and discovery<br/>
                    • Are good at logical reasoning<br/>
                    • Enjoy mathematics and problem-solving
                  </div>
                </div>
              </div>
            </div>

            {/* Commerce Stream */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 shadow-lg">
              <div className="text-center mb-8">
                <div className="bg-orange-500 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">Commerce Stream</h4>
                <p className="text-gray-600 mt-2">For future business leaders and entrepreneurs</p>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h5 className="font-semibold text-orange-800 mb-2 text-center">Core Subjects</h5>
                  <div className="text-sm text-gray-600 text-center">Accountancy • Business Studies • Economics</div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-gray-400" />
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h5 className="font-semibold text-orange-800 mb-2 text-center">Career Paths</h5>
                  <div className="grid grid-cols-2 gap-2 ml-25 text-sm text-gray-600">
                    <div>• Chartered Accountant</div>
                    <div>• Business Analyst</div>
                    <div>• Entrepreneur</div>
                    <div>• Banker</div>
                    <div>• Marketing Manager</div>
                    <div>• Financial Advisor</div>
                  </div>
                </div>
                
                <div className="flex justify-center">
                  <ArrowDown className="w-6 h-6 text-gray-400" />
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h5 className="font-semibold text-orange-800 mb-2 text-center">Best For Students Who</h5>
                  <div className="text-sm text-gray-600 ml-35">
                    • Have strong communication skills<br/>
                    • Understand money and business<br/>
                    • Are interested in current affairs
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

<div>
  <BentoGridDemo/>
</div>
      {/* FAQ Section */}
      <section id="faq" className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h3>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-semibold text-gray-800">{faq.question}</span>
                  {openFAQ === index ? 
                    <ChevronUp className="w-5 h-5 text-gray-500" /> : 
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  }
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-12">What Students Say</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{review.review}"</p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">{review.name}</div>
                  <div className="text-sm text-gray-500">{review.grade}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold text-white mb-6">Ready to Discover Your Path?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Take our comprehensive quiz and get personalized recommendations for your academic future.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto space-x-2">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-blue-100 mt-4 text-sm">Free • No Registration Required • Instant Results</p>
        </div>
      </section>
      
    </div>
  );
};

export default LandingPage;