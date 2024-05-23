import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeMute, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const AboutIntropart = ({ videoSrc, title, description, description1, buttonText }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="herosection sm:h-screen md:h-auto">
    <div className="imgContainer relative overflow-hidden h-full">
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-cover filter brightness-75"
        autoPlay
        muted={isMuted}
        loop
      ></video>
      <div className="content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 p-4 ">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-7xl font-bold">
          {title}
        </h1>
        <p className="text-white text-sm sm:text-base md:text-lg lg:text-2xl font-light pt-2 md:pt-4 pb-2 md:pb-6 lg:pb-8">
          {description}
          <br />
          {description1}
        </p>
        <button
          onClick={toggleMute}
          className="mute-button inline-block bg-blue-800 text-white px-3 sm:px-4 md:px-6 py-1 sm:py-2 md:py-3 lg:py-4 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-100 animate-zoom"
        >
          <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
        </button>
      </div>
    </div>
  </div>
  );
};

export default AboutIntropart;
