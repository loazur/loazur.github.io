import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectDetail.css';

export default function ProjectLayout({ 
  title, 
  tags, 
  date, 
  links, 
  mainImage, 
  galleryImages, 
  children 
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextImage();
    if (e.key === 'ArrowLeft') prevImage();
  };

  return (
    <section className="project-detail" onKeyDown={handleKeyDown} tabIndex={0}>
      <Link to="/projects" className="back-link">← Retour aux projets</Link>
      
      <div className="project-header">
        <h1>{title}</h1>
        <div className="project-meta">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
          <span className="date">{date}</span>
        </div>

        {/* Liens du projet */}
        {links && links.length > 0 && (
          <div className="project-links-top">
            {links.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`external-link-top ${link.primary ? 'primary' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Image principale */}
      {mainImage && (
        <div className="project-image">
          <img src={mainImage.src} alt={mainImage.alt} />
        </div>
      )}

       <div className="project-content">
        
        {/* Galerie */}
        {galleryImages && galleryImages.length > 0 && (
          <section className="project-section">
            <h2>Galerie</h2>
            <div className="project-gallery">
              {galleryImages.map((image, index) => (
                <img 
                  key={index}
                  src={image.src} 
                  alt={image.alt}
                  onClick={() => openLightbox(index)}
                />
              ))}
            </div>
          </section>
        )}

        {children}
      </div>

      {/* Lightbox */}
      {lightboxOpen && galleryImages && (
        <div className="lightbox" onClick={closeLightbox}>
          <button className="lightbox-close" onClick={closeLightbox}>✕</button>
          <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>‹</button>
          <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>›</button>
          <img 
            src={galleryImages[currentImageIndex].src} 
            alt={galleryImages[currentImageIndex].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="lightbox-counter">{currentImageIndex + 1} / {galleryImages.length}</div>
        </div>
      )}
    </section>
  );
}