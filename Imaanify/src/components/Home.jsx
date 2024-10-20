import React, { useRef, useEffect } from 'react';
import videoSrc from '../assets/vi.mp4'; // Adjust path as necessary

const Home = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoElement.play().catch((error) => {
              console.error('Error playing video:', error); // Handle play error
            });
          } else {
            videoElement.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger play/pause when 50% of the video is visible
      }
    );

    if (videoElement) {
      observer.observe(videoElement);
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement); // Clean up the observer on unmount
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center w-screen h-screen my-8 text-black bg-white">
      <h2 className="text-4xl font-bold mb-4">Welcome to Imaanify</h2>
      <p className="text-xl text-gray-700 mb-6">
        Join our community and connect with Muslims globally.
      </p>

      {/* Video Clip Section */}
      <div className="flex-grow my-4 relative w-full max-w-2xl">
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover"
          muted // Mute the video for autoplay
          preload="auto" // Preload video data
          controls // Optional: keep controls for user interaction
          onError={() => {
            console.error('Error loading video'); // Handle loading error
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <button
        className="mt-6 bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        aria-label="Get started with Imaanify"
      >
        Get Started
      </button>
    </div>
  );
};

export default Home;