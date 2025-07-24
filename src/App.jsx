import './App.css'
import LandingPage from './components/LandingPage'
import Header from './components/header'
import Footer from './components/Footer'
import AptitudeTest from './components/AptitudeTest'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<AptitudeTest />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
