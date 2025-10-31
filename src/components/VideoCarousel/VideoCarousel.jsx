import React, { useState} from 'react';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import './VideoCarousel.css';

const VideoCarousel = () => {
  // Copy the VideoCarousel component code from the artifact
  // ... (component logic)
  const [activeVideo, setActiveVideo] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxVideo, setLightboxVideo] = useState(null);
  // const videoRef = useRef(null);

  const videos = [
    {
      id: 1,
      title: "Home Assistant Demo",
      category: "Home",
      thumbnail: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      description: "Watch our robot help with daily household tasks"
    },
    {
      id: 2,
      title: "Healthcare Support",
      category: "Hospital",
      thumbnail: "https://plus.unsplash.com/premium_photo-1681995460558-738a8856313c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "See how our robot assists medical professionals"
    },
    {
      id: 3,
      title: "Retail Experience",
      category: "Retail",
      thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      description: "Experience enhanced customer service in retail"
    }
  ];

  const openLightbox = (video) => {
    setLightboxVideo(video);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setLightboxVideo(null);
  };

  return (
    <section className="video-carousel-section" id='videos'>
      <div className="container">
        <h2 className="section-title">See It in Action</h2>
        <p className="section-subtitle">Real demonstrations of our robot in different environments</p>
        
        <div className="video-carousel">
          {videos.map((video, index) => (
            <div 
              key={video.id}
              className={`video-card ${index === activeVideo ? 'active' : ''}`}
              onClick={() => setActiveVideo(index)}
            >
              <div className="video-thumbnail" onClick={() => openLightbox(video)}>
                <img src={video.thumbnail} alt={video.title} />
                <div className="play-overlay">
                  <Play size={48} />
                </div>
                <div className="category-badge">{video.category}</div>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="carousel-navigation">
          <button 
            className="nav-btn prev"
            onClick={() => setActiveVideo(activeVideo > 0 ? activeVideo - 1 : videos.length - 1)}
          >
            <ChevronLeft />
          </button>
          <div className="carousel-dots">
            {videos.map((_, index) => (
              <button
                key={index}
                className={`dot ${index === activeVideo ? 'active' : ''}`}
                onClick={() => setActiveVideo(index)}
              />
            ))}
          </div>
          <button 
            className="nav-btn next"
            onClick={() => setActiveVideo(activeVideo < videos.length - 1 ? activeVideo + 1 : 0)}
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && lightboxVideo && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={closeLightbox}>
              <X />
            </button>
            <div className="video-player">
              <img src={lightboxVideo.thumbnail} alt={lightboxVideo.title} />
              <div className="video-controls">
                <Play size={64} />
              </div>
            </div>
            <div className="video-details">
              <h3>{lightboxVideo.title}</h3>
              <p>{lightboxVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoCarousel;