import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const IntroScreen: React.FC<IntroScreenProps> = ({ onStartQuiz }) => {
  const [key, setKey] = useState(0);

  const resetYouTubePlayer = () => {
    setKey(prevKey => prevKey + 1);
  };

  useEffect(() => {
    resetYouTubePlayer();
  }, []);

  return (
    <div className="intro-container">
      <div className="video-container">
        <YouTube
          videoId="your-video-id"
          opts={opts}
          key={key}
        />
      </div>
    </div>
  );
};

export default IntroScreen; 