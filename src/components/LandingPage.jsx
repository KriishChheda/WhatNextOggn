import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ChevronDown, ChevronUp, Star, ArrowRight, BookOpen, Calculator, Microscope, TrendingUp, Users, Award, ArrowDown } from 'lucide-react';
import { BentoGridDemo } from './BentoGrid';

const LandingPage = () => {
  const navigate = useNavigate();
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    {
      question: "What Course/Stream shall I choose if I wish to appear for IAS/IPS/UPSC/Civil Service Examination?",
      answer: "Any candidate with minimum 21 years of age and having completed graduation from ANY STREAM can appear for the Exam. Traditionally, students preferred B.A as graduation because they get the time for preparation. One of the issues students found after B.Sc, B.E, Medicine, Engineering or Commerce is cracking the exam. One important selection criterion is 50% in your 10th, 12th & graduation. There is no minimum or maximum percentage barrier. The exam is open to students of 21 years from all streams. It is the process that matters. This takes place over three years, and one has to clear the Prelims, Mains & Interview. During this period one can take jobs, higher education, or prepare full-time. After selection, training takes 2 years. Ultimately, the end candidate is like a public servant with a national degree in hand and can pursue professions in parallel."
    },
    {
      question: "What are the pre-requisites of Architecture?",
      answer: "Students who are good in creativity and technical subjects (Physics, Chemistry & Maths) are the right candidates to pursue Architecture. One needs to pursue Science-A Group after 10th to appear for competitive exams for Architecture like NATA, JEE-MAIN (B-ARCH)."
    },
    {
      question: "How can I get into Teaching Profession?",
      answer: "If you are passionate about any one subject or group of similar subjects, you can pursue higher education in the specific subject field and teaching. Teaching can be Master Degree bridge with B.Ed. oriented Teaching schools for college teaching. College Teaching, Higher Education like Masters/Doctorate Degree is required. One should possess the following qualities:\ni. The ability to develop relationships with their students\nii. Patience, caring, and kind personality\niii. Knowledge of learners\niv. Dedication to teaching\nv. Capability of engaging students in learning"
    },
    {
      question: "Where can I pursue degree in Interior Design/ Fashion Design?",
      answer: "In India, there is scope for those who are of interior or fashion design alone. One has to pursue a degree in Design and take electives or specialization within the scope of interior/fashion design, as per one’s dream. Apart from this, there are private schools which give diploma/certification programmes, which teach design which include formations, whether a part-time short-term plan along with graduation or as a full-time degree after 12th. Also, there are Master level Programs available."
    },
    {
      question: "How can I become an Ethical Hacker / Pursue Degree in Hacking or Cyber Security?",
      answer: "In India, there is scope to specialize in the field of Hacking/ Cyber Security & Ethical Hacking. One has to pursue a degree in Computer Application or Engineering and may take degree or certificate of Hacking/ Cyber Security offered by different institutions. With the growing threat of information theft, ethical hackers are presently in demand. Apart from this, one can pursue such programs as a specialization or course offered in one semester of Engineering/ Cyber Security Degree, or after completing graduation after 12th. Also, there are Master level Programs to scale up skills."
    },
    {
      question: "How can I become a Game Designer/ Application Designer?",
      answer: "In India, there is scope to pursue the field of Gaming Design/ Application Design. One has to ideally pursue a degree in Computer Application and then pursue Game Design/ Application Design. With the rise of Game Design/ Application Design/ Interface Design/ Web Design, students who are tech-enthusiastic can pursue one’s dream. Apart from this, one can pursue certification programmes in various fields of Game Design/ Application Design/ Interface Design offered after 12th. Also, there are Master level Design Programs available in India."
    },
    {
      question: "Where can I study Event Management?",
      answer: "In India, there is scope to take a professional degree in Event Management. One has to pursue a degree in Business Management and take up studies in Event Management or can pursue BBA where one is studying this as a part of their undergraduate program in some universities. Apart from this, there are diploma/certificate courses in Event Management one can pursue along with any graduation in different fields."
    },
    {
      question: "How can I become an Air-Hostess/Steward?",
      answer: "Any candidate who has passed 12th with English as a compulsory subject and has good command on language can join this career. A few airlines give on-the-job training. But majority of companies require prior training for this. There are training institutes that give training and open up the selection process for pitching presentation skills.\ni. Pleasing Personality\nii. Good Communication Skills\niii. Pleasant Voice\niv. Friendly Nature\nv. Good Appearance"
    },
    {
      question: "How can I become a Pilot?",
      answer: "Any student with Physics and Mathematics in grade 12 (basically Science-A Group) can attain a Pilot Licence. The three stages are Student Pilot Licence followed by Private Pilot Licence and finally getting Commercial Pilot Licence from any flying school approved by DGCA India. One can apply for this to clear written and required Pilot Hours along with passing tests as prescribed by DGCA before candidate can be independently flying aircraft.\nAlso one can join Indian Air Force and become a pilot where all your training needs are taken care by them. You need to serve in the Air Force for stipulated time with a bond."
    }
  ]

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
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto space-x-2" onClick={()=>navigate('/test')}>
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
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center mx-auto space-x-2" onClick={()=>navigate('/test')}>
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