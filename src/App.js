import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Import all components
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import MeetAssistant from './components/MeetAssistant/MeetAssistant';
import TaskComparison from './components/TaskComparison/TaskComparison';
import VideoCarousel from './components/VideoCarousel/VideoCarousel';
import StoryScroll from './components/StoryScroll/StoryScroll';
import TrustValidation from './components/TrustValidation/TrustValidation';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <Hero />
          <MeetAssistant />
          <TaskComparison />
          <VideoCarousel />
          <StoryScroll />
          <TrustValidation />
          <CallToAction />
          <Footer />
        </motion.div>
      )}
    </div>
  );
}

export default App;