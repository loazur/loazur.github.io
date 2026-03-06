import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();
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
    if (galleryImages) {
      setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (galleryImages) {
      setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, galleryImages]);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  return (
    <article className="project-detail">
      {/* ─── Top bar ─── */}
      <div className="pd-topbar">
        <Link to="/projects" className="pd-back-link">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"/>
            <polyline points="12 19 5 12 12 5"/>
          </svg>
          {t("projects.projectLayout.backToProjects")}
        </Link>
      </div>

      {/* ─── Hero: full width ─── */}
      <header className="pd-hero">
        <div className="pd-hero-inner">
          <div className="pd-hero-text">
            <div className="pd-hero-meta">
              <span className="pd-date">{date}</span>
              <div className="pd-tags">
                {tags.map((tag, index) => (
                  <span key={index} className="pd-tag">{tag}</span>
                ))}
              </div>
            </div>
            <h1 className="pd-title">{title}</h1>
            {links && links.length > 0 && (
              <div className="pd-links">
                {links.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`pd-link ${link.primary ? 'pd-link--primary' : ''}`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ─── Main image ─── */}
        {mainImage && (
          <div className="pd-main-image">
            <img src={mainImage.src} alt={mainImage.alt} />
          </div>
        )}
      </header>

      {/* ─── Two-column layout: sidebar + content ─── */}
      <div className="pd-body">
        {/* Sidebar sticky with project meta + gallery thumbnails */}
        <aside className="pd-sidebar">
          <div className="pd-sidebar-sticky">
            <div className="pd-sidebar-block">
              <span className="pd-sidebar-label">{t("projects.projectLayout.date")}</span>
              <span className="pd-sidebar-value">{date}</span>
            </div>
            <div className="pd-sidebar-block">
              <span className="pd-sidebar-label">{t("projects.projectLayout.technologies")}</span>
              <div className="pd-sidebar-tags">
                {tags.map((tag, index) => (
                  <span key={index} className="pd-sidebar-tag">{tag}</span>
                ))}
              </div>
            </div>
            {links && links.length > 0 && (
              <div className="pd-sidebar-block">
                <span className="pd-sidebar-label">{t("projects.projectLayout.links")}</span>
                <div className="pd-sidebar-links">
                  {links.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="pd-sidebar-link"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* ─── Gallery thumbnails in sidebar ─── */}
            {galleryImages && galleryImages.length > 0 && (
              <div className="pd-sidebar-block">
                <span className="pd-sidebar-label">{t("projects.projectLayout.gallery")}</span>
                <div className="pd-sidebar-gallery">
                  {galleryImages.map((image, index) => (
                    <div 
                      key={index} 
                      className="pd-sidebar-gallery-item"
                      onClick={() => openLightbox(index)}
                    >
                      <img src={image.src} alt={image.alt} />
                      <div className="pd-sidebar-gallery-overlay">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="15 3 21 3 21 9"/>
                          <polyline points="9 21 3 21 3 15"/>
                          <line x1="21" y1="3" x2="14" y2="10"/>
                          <line x1="3" y1="21" x2="10" y2="14"/>
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>

        {/* Main content */}
        <div className="pd-content">
          {children}
        </div>
      </div>

      {/* ─── Lightbox ─── */}
      {lightboxOpen && galleryImages && (
        <div className="pd-lightbox" onClick={closeLightbox}>
          <div className="pd-lightbox-backdrop" />
          <button className="pd-lightbox-close" onClick={closeLightbox}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
          <button className="pd-lightbox-nav pd-lightbox-prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <button className="pd-lightbox-nav pd-lightbox-next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>
          <img 
            className="pd-lightbox-image"
            src={galleryImages[currentImageIndex].src} 
            alt={galleryImages[currentImageIndex].alt}
            onClick={(e) => e.stopPropagation()}
          />
          <div className="pd-lightbox-counter">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </article>
  );
}