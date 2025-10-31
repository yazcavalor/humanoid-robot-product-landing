import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

const LoadingScreen = () => {
  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="robot-assembly">
        <motion.div
          className="robot-head"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          🤖
        </motion.div>
        <motion.div
          className="robot-body"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="body-part"></div>
        </motion.div>
        <motion.div
          className="loading-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          Initializing AI Assistant...
        </motion.div>
        <motion.div
          className="progress-bar"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 2, duration: 1 }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;