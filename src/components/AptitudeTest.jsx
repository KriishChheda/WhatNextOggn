import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, BookOpen, Calculator, Beaker, TrendingUp, Award, RefreshCw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


const AptitudeTest = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0); // currenQuestion contains the id of the question we currently are at
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  // when u r taking the test showResults will conatin false else it will contain true
  const [timeLeft, setTimeLeft] = useState(3000); // 50 minutes in seconds

  // Timer effect
  React.useEffect(() => {
    if (!showResult && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, showResult]);

  const questions = [
    {
      id: 1,
      subject: 'science',
      question: "What is the chemical formula for water?",
      options: ["H2O", "CO2", "NaCl", "O2"],
      correct: 0
    },
    {
      id: 2,
      subject: 'science',
      question: "Which planet is known as the Red Planet?",
      options: ["Venus", "Mars", "Jupiter", "Saturn"],
      correct: 1
    },
    {
      id: 3,
      subject: 'science',
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
      correct: 2
    },
    {
      id: 4,
      subject: 'science',
      question: "Which gas is most abundant in Earth's atmosphere?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
      correct: 2
    },
    {
      id: 5,
      subject: 'science',
      question: "What is the SI unit of force?",
      options: ["Joule", "Newton", "Watt", "Pascal"],
      correct: 1
    },
    {
      id: 6,
      subject: 'science',
      question: "Which organ in the human body produces insulin?",
      options: ["Liver", "Kidney", "Pancreas", "Heart"],
      correct: 2
    },
    {
      id: 7,
      subject: 'science',
      question: "What is the speed of light in vacuum?",
      options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10¹⁰ m/s", "3 × 10⁴ m/s"],
      correct: 0
    },
    {
      id: 8,
      subject: 'science',
      question: "Which element has the atomic number 1?",
      options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
      correct: 1
    },
    {
      id: 9,
      subject: 'science',
      question: "What type of bond is formed between sodium and chlorine in salt?",
      options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
      correct: 1
    },
    {
      id: 10,
      subject: 'science',
      question: "Which law states that energy cannot be created or destroyed?",
      options: ["Newton's First Law", "Law of Conservation of Energy", "Ohm's Law", "Boyle's Law"],
      correct: 1
    },
    {
      id: 11,
      subject: 'science',
      question: "What is the process by which plants make their food?",
      options: ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
      correct: 1
    },
    {
      id: 12,
      subject: 'science',
      question: "Which blood group is known as the universal donor?",
      options: ["A", "B", "AB", "O"],
      correct: 3
    },
    {
      id: 13,
      subject: 'science',
      question: "What is the hardest natural substance on Earth?",
      options: ["Gold", "Iron", "Diamond", "Quartz"],
      correct: 2
    },
    {
      id: 14,
      subject: 'science',
      question: "Which scientist proposed the theory of evolution?",
      options: ["Newton", "Einstein", "Darwin", "Mendel"],
      correct: 2
    },
    {
      id: 15,
      subject: 'science',
      question: "What is the pH of pure water?",
      options: ["6", "7", "8", "9"],
      correct: 1
    },
    {
      id: 16,
      subject: 'science',
      question: "Which organelle is responsible for protein synthesis?",
      options: ["Mitochondria", "Ribosome", "Golgi body", "Lysosome"],
      correct: 1
    },
    {
      id: 17,
      subject: 'science',
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correct: 2
    },
    {
      id: 18,
      subject: 'science',
      question: "Which force keeps planets in orbit around the sun?",
      options: ["Magnetic force", "Gravitational force", "Electric force", "Nuclear force"],
      correct: 1
    },
    {
      id: 19,
      subject: 'science',
      question: "What is the main component of natural gas?",
      options: ["Ethane", "Propane", "Methane", "Butane"],
      correct: 2
    },
    {
      id: 20,
      subject: 'science',
      question: "Which vitamin is produced when skin is exposed to sunlight?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      correct: 3
    },
    {
      id: 21,
      subject: 'science',
      question: "What is the study of earthquakes called?",
      options: ["Geology", "Seismology", "Meteorology", "Astronomy"],
      correct: 1
    },
    {
      id: 22,
      subject: 'science',
      question: "Which part of the brain controls balance?",
      options: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
      correct: 1
    },
    {
      id: 23,
      subject: 'science',
      question: "What is the smallest unit of matter?",
      options: ["Molecule", "Atom", "Electron", "Proton"],
      correct: 1
    },
    {
      id: 24,
      subject: 'science',
      question: "Which gas is released during photosynthesis?",
      options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
      correct: 2
    },
    {
      id: 25,
      subject: 'science',
      question: "What is the normal human body temperature in Celsius?",
      options: ["35°C", "36°C", "37°C", "38°C"],
      correct: 2
    },

    {
      id: 26,
      subject: 'commerce',
      question: "What does GDP stand for?",
      options: ["Gross Domestic Product", "General Development Program", "Global Data Processing", "Government Development Plan"],
      correct: 0
    },
    {
      id: 27,
      subject: 'commerce',
      question: "Which is the central bank of India?",
      options: ["SBI", "HDFC", "RBI", "ICICI"],
      correct: 2
    },
    {
      id: 28,
      subject: 'commerce',
      question: "What is the full form of ATM?",
      options: ["Automatic Transaction Machine", "Automated Teller Machine", "Advanced Technology Machine", "All Time Money"],
      correct: 1
    },
    {
      id: 29,
      subject: 'commerce',
      question: "In business, what does ROI stand for?",
      options: ["Rate of Interest", "Return on Investment", "Rules of Income", "Revenue on Investment"],
      correct: 1
    },
    {
      id: 30,
      subject: 'commerce',
      question: "Which document is known as the 'Constitution' of a company?",
      options: ["Prospectus", "Memorandum of Association", "Articles of Association", "Balance Sheet"],
      correct: 1
    },
    {
      id: 31,
      subject: 'commerce',
      question: "What is the currency of Japan?",
      options: ["Yuan", "Won", "Yen", "Ringgit"],
      correct: 2
    },
    {
      id: 32,
      subject: 'commerce',
      question: "GST stands for:",
      options: ["General Sales Tax", "Goods and Services Tax", "Government Service Tax", "Global Sales Tax"],
      correct: 1
    },
    {
      id: 33,
      subject: 'commerce',
      question: "What is the full form of SEBI?",
      options: ["Securities and Exchange Board of India", "State Economic Board of India", "Securities Exchange Bank of India", "Stock Exchange Board of India"],
      correct: 0
    },
    {
      id: 34,
      subject: 'commerce',
      question: "Which sector is known as the 'Service Sector'?",
      options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
      correct: 2
    },
    {
      id: 35,
      subject: 'commerce',
      question: "What is inflation?",
      options: ["Decrease in prices", "Increase in prices", "Stable prices", "No change in prices"],
      correct: 1
    },
    {
      id: 36,
      subject: 'commerce',
      question: "Which is the largest stock exchange in India?",
      options: ["NSE", "BSE", "CSE", "DSE"],
      correct: 1
    },
    {
      id: 37,
      subject: 'commerce',
      question: "What does IPO stand for?",
      options: ["Initial Public Offering", "Indian Public Offering", "International Private Offering", "Initial Private Offering"],
      correct: 0
    },
    {
      id: 38,
      subject: 'commerce',
      question: "The concept of 'Invisible Hand' was given by:",
      options: ["Adam Smith", "Karl Marx", "John Keynes", "David Ricardo"],
      correct: 0
    },
    {
      id: 39,
      subject: 'commerce',
      question: "What is the full form of NEFT?",
      options: ["National Electronic Fund Transfer", "New Electronic Fund Transfer", "Net Electronic Fund Transfer", "National Economic Fund Transfer"],
      correct: 0
    },
    {
      id: 40,
      subject: 'commerce',
      question: "Which of these is a direct tax?",
      options: ["Sales Tax", "Income Tax", "Service Tax", "Excise Duty"],
      correct: 1
    },
    {
      id: 41,
      subject: 'commerce',
      question: "What is the minimum age to open a bank account in India?",
      options: ["16 years", "18 years", "10 years", "No minimum age"],
      correct: 3
    },
    {
      id: 42,
      subject: 'commerce',
      question: "FDI stands for:",
      options: ["Foreign Direct Investment", "Financial Development Index", "Foreign Development Investment", "Fixed Deposit Investment"],
      correct: 0
    },
    {
      id: 43,
      subject: 'commerce',
      question: "What is the tenure of the RBI Governor?",
      options: ["3 years", "4 years", "5 years", "6 years"],
      correct: 0
    },
    {
      id: 44,
      subject: 'commerce',
      question: "Which organization regulates insurance companies in India?",
      options: ["RBI", "SEBI", "IRDA", "SIDBI"],
      correct: 2
    },
    {
      id: 45,
      subject: 'commerce',
      question: "What is the full form of CAGR?",
      options: ["Compound Annual Growth Rate", "Combined Annual Growth Rate", "Calculated Annual Growth Rate", "Comparative Annual Growth Rate"],
      correct: 0
    },
    {
      id: 46,
      subject: 'commerce',
      question: "Which is India's first bank?",
      options: ["Bank of Hindustan", "Bank of Bengal", "Bank of Bombay", "Imperial Bank"],
      correct: 0
    },
    {
      id: 47,
      subject: 'commerce',
      question: "What does SWIFT stand for in banking?",
      options: ["Secure Worldwide Interbank Financial Telecommunication", "Society for Worldwide Interbank Financial Telecommunication", "System for Worldwide Interbank Financial Transfer", "Standard Worldwide Interbank Financial Transfer"],
      correct: 1
    },
    {
      id: 48,
      subject: 'commerce',
      question: "Which tax is levied on the transfer of property?",
      options: ["Income Tax", "Service Tax", "Stamp Duty", "Corporate Tax"],
      correct: 2
    },
    {
      id: 49,
      subject: 'commerce',
      question: "What is the minimum capital required to start a private limited company?",
      options: ["₹1 lakh", "₹2 lakh", "₹5 lakh", "No minimum capital"],
      correct: 3
    },
    {
      id: 50,
      subject: 'commerce',
      question: "EMI stands for:",
      options: ["Equal Monthly Installment", "Equated Monthly Installment", "Equal Money Installment", "Economic Monthly Installment"],
      correct: 1
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    setAnswers({
      ...answers,
      [currentQuestion]: answerIndex
    });

    // Auto-advance to next question after a short delay
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      }
    }, 800); // 800ms delay to show the selection briefly
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitTest = () => {
    setShowResult(true);
  };

  const endTest = () => {
    if (window.confirm('Are you sure you want to end the test? This will submit your current answers and show results.')) {
      setShowResult(true);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResult(false);
    setTimeLeft(3000); // resetting the time back to 50 min
  };

  const calculateResults = () => {
    let scienceCorrect = 0;
    let commerceCorrect = 0;
    let totalCorrect = 0;

    questions.forEach((question, index) => {
      if (answers[index] === question.correct) {
        totalCorrect++;
        if (question.subject === 'science') {
          scienceCorrect++;
        } else {
          commerceCorrect++;
        }
      }
    });

    const sciencePercentage = (scienceCorrect / 25) * 100;
    const commercePercentage = (commerceCorrect / 25) * 100;
    const overallPercentage = (totalCorrect / 50) * 100;

    let recommendation = '';
    let recommendationColor = '';

    if (sciencePercentage > commercePercentage) {
      if (sciencePercentage >= 70) {
        recommendation = 'Science Stream - Excellent aptitude for Science subjects!';
        recommendationColor = 'text-green-600';
      } else if (sciencePercentage >= 60) {
        recommendation = 'Science Stream - Good aptitude for Science subjects.';
        recommendationColor = 'text-blue-600';
      } else {
        recommendation = 'Consider both streams - Your science scores are slightly better but you may benefit from exploring both options.';
        recommendationColor = 'text-orange-600';
      }
    } else if (commercePercentage > sciencePercentage) {
      if (commercePercentage >= 70) {
        recommendation = 'Commerce Stream - Excellent aptitude for Commerce subjects!';
        recommendationColor = 'text-green-600';
      } else if (commercePercentage >= 60) {
        recommendation = 'Commerce Stream - Good aptitude for Commerce subjects.';
        recommendationColor = 'text-blue-600';
      } else {
        recommendation = 'Consider both streams - Your commerce scores are slightly better but you may benefit from exploring both options.';
        recommendationColor = 'text-orange-600';
      }
    } else {
      recommendation = 'Equal aptitude - You have similar strengths in both areas. Consider your interests and career goals.';
      recommendationColor = 'text-purple-600';
    }

    return {
      scienceCorrect,
      commerceCorrect,
      totalCorrect,
      sciencePercentage,
      commercePercentage,
      overallPercentage,
      recommendation,
      recommendationColor
    };
  };
  // this function is going to return the values of these variables

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (showResult) {
    const results = calculateResults();
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-30 mb-30">
       <button
            onClick={() => navigate('/')}
            className="mt-6 inline-flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300"
            >
            <ChevronLeft className="w-5 h-5" />
            <span>Go Back</span>
       </button>
        <div className="text-center mb-8">
          <Award className="mx-auto mb-4 text-yellow-500" size={64} />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Test Results</h1>
          <p className="text-gray-600">Here's your comprehensive analysis</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <Beaker className="text-blue-600 mr-2" size={24} />
              <h3 className="text-xl font-semibold text-blue-800">Science Performance</h3>
            </div>
            <div className="text-3xl font-bold text-blue-600 mb-2">
              {results.scienceCorrect}/25
            </div>
            <div className="text-lg text-blue-700">
              {results.sciencePercentage.toFixed(1)}%
            </div>
            <div className="w-full bg-blue-200 rounded-full h-3 mt-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${results.sciencePercentage}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <TrendingUp className="text-green-600 mr-2" size={24} />
              <h3 className="text-xl font-semibold text-green-800">Commerce Performance</h3>
            </div>
            <div className="text-3xl font-bold text-green-600 mb-2">
              {results.commerceCorrect}/25
            </div>
            <div className="text-lg text-green-700">
              {results.commercePercentage.toFixed(1)}%
            </div>
            <div className="w-full bg-green-200 rounded-full h-3 mt-3">
              <div 
                className="bg-green-600 h-3 rounded-full transition-all duration-1000"
                style={{ width: `${results.commercePercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <Calculator className="mr-2" size={24} />
            Overall Performance
          </h3>
          <div className="text-2xl font-bold text-gray-700 mb-2">
            {results.totalCorrect}/50 ({results.overallPercentage.toFixed(1)}%)
          </div>
          <div className="w-full bg-gray-300 rounded-full h-4">
            <div 
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-4 rounded-full transition-all duration-1000"
              style={{ width: `${results.overallPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white border-2 border-dashed border-gray-300 p-6 rounded-lg mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            🎯 Recommendation
          </h3>
          <p className={`text-lg font-medium ${results.recommendationColor}`}>
            {results.recommendation}
          </p>
          <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-gray-600">
              <strong>Note:</strong> This test provides guidance based on your current knowledge. 
              Consider your interests, career goals, and consult with teachers and parents before making your final decision.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={resetTest}
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw size={20} className="mr-2" />
            Take Test Again
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 mb-10">
      <Helmet>
        <title>StreamChoice | Aptitude Test</title>
        <meta name="description" content="Take our free Aptitude Test to discover which academic stream fits you best. Personalized insights to help you make informed career decisions." />
        <meta name="keywords" content="Aptitude Test, Stream Selector, Career Test, StreamChoice, Education, Stream Guide, Student Aptitude" />
        <meta name="author" content="Kriish Chheda" />

        {/* Open Graph */}
        <meta property="og:title" content="StreamChoice | Aptitude Test" />
        <meta property="og:description" content="Discover the right academic path for you with our free Aptitude Test. Trusted by students and educators." />
        <meta property="og:url" content="https://yourdomain.com/aptitude-test" />
        <meta property="og:image" content="https://yourdomain.com/assets/aptitude-banner.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="StreamChoice | Aptitude Test" />
        <meta name="twitter:description" content="Take our free Aptitude Test and find out which academic stream suits you best." />
        <meta name="twitter:image" content="https://yourdomain.com/assets/aptitude-banner.jpg" />
      </Helmet>
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4 mt-20">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <BookOpen className="mr-2 text-blue-600" size={28} />
            Science vs Commerce Aptitude Test
          </h1>
          <div className="flex items-center gap-4">
            <button
              onClick={endTest}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
            >
              End Test
            </button>
            <div className="text-right">
              <div className="text-lg font-semibold text-gray-700">
                Time: {formatTime(timeLeft)}
              </div>
              <div className="text-sm text-gray-500">
                {answeredCount}/50 answered
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            currentQ.subject === 'science' 
              ? 'bg-blue-100 text-blue-800' 
              : 'bg-green-100 text-green-800'
          }`}>
            {currentQ.subject === 'science' ? 'Science' : 'Commerce'}
          </span>
          <span className="ml-3 text-gray-500">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        
        <h2 className="text-xl font-semibold text-gray-800 mb-6">
          {currentQ.question}
        </h2>

        <div className="space-y-3">
          {currentQ.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(index)}
              className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                answers[currentQuestion] === index
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <span className="font-medium mr-3">
                {String.fromCharCode(65 + index)}.
              </span>
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className="flex items-center px-4 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft size={20} className="mr-1" />
          Previous
        </button>

        <div className="text-sm text-gray-500">
          {answers[currentQuestion] !== undefined ? '✓ Answered' : 'Not answered'}
        </div>

        {currentQuestion === questions.length - 1 ? (
          <button
            onClick={submitTest}
            className="flex items-center px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Submit Test
          </button>
        ) : (
          <button
            onClick={nextQuestion}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Next
            <ChevronRight size={20} className="ml-1" />
          </button>
        )}
      </div>

      {/* Question Navigator */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg">
        <h3 className="text-sm font-medium text-gray-700 mb-3">Quick Navigation</h3>
        <div className="grid grid-cols-10 gap-2">
          {questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`w-8 h-8 text-xs rounded ${
                index === currentQuestion
                  ? 'bg-blue-600 text-white'
                  : answers[index] !== undefined
                  ? 'bg-green-200 text-green-800'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AptitudeTest;