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
      <div className="imgContainer relative overflow-hidden ">
        <video ref={videoRef} src={videoSrc} className="w-full h-full filter brightness-75" autoPlay muted={isMuted}loop></video>
        <div className="content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10">
          <h1 className="text-white text-4xl sm:text-6xl font-semibold">{title}</h1>
          <p className="text-white text-lg sm:text-xl font-light pb-4 sm:pb-10">{description}<br />{description1}</p>
          <button onClick={toggleMute}
            className="mute-button inline-block bg-blue-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-base sm:text-lg mt-4">
            <FontAwesomeIcon icon={isMuted ? faVolumeMute : faVolumeUp} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutIntropart;
