import { useState, useEffect } from 'react';
import Image from 'next/image';

const photos = [
  { src: '/images/gallery/new/1.JPG', alt: 'Photo', span: false },
  { src: '/images/gallery/new/2.JPG', alt: 'Photo', span: true },
  { src: '/images/gallery/new/3.JPG', alt: 'Photo', span: true },
  { src: '/images/gallery/new/4.JPG', alt: 'Photo', span: false },
  { src: '/images/gallery/new/5.JPG', alt: 'Photo', span: true },
  { src: '/images/gallery/new/7.JPG', alt: 'Photo', span: false },
  { src: '/images/gallery/new/8.JPG', alt: 'Photo', span: true },
  { src: '/images/gallery/new/9.JPG', alt: 'Photo', span: false },
  { src: '/images/gallery/new/10.JPG', alt: 'Photo', span: true },
  { src: '/images/gallery/new/11.JPG', alt: 'Photo', span: true },
  { src: '/images/gallery/new/12.JPG', alt: 'Photo', span: true },
  { src: '/images/gallery/new/17.JPG', alt: 'Photo', span: true },
  { src: '/images/gallery/archery.jpg', alt: 'Archery', span: true },
  { src: '/images/gallery/coffee.jpg', alt: 'Coffee', span: false },
  { src: '/images/gallery/logo.jpg', alt: 'Remiel & Faith', span: false },
  { src: '/images/gallery/norway-1.jpg', alt: 'Norway', span: true },
  { src: '/images/gallery/IMG_0213.jpg', alt: 'Photo', span: false },
  { src: '/images/gallery/IMG_1317.jpg', alt: 'Photo', span: false },
  { src: '/images/gallery/IMG_4309.JPG', alt: 'Photo', span: true },
  { src: '/images/gallery/IMG_8429.jpeg', alt: 'Photo', span: false },
  { src: '/images/gallery/IMG_4574.JPG', alt: 'Photo', span: true },
  { src: '/images/gallery/IMG_4677.JPG', alt: 'Photo', span: true },
  { src: '/images/gallery/IMG_4930.JPG', alt: 'Photo', span: false },
  { src: '/images/gallery/IMG_7852.JPG', alt: 'Photo', span: true },
  { src: '/images/gallery/IMG_9361.JPG', alt: 'Photo', span: false },
  { src: '/images/gallery/IMG_9793.JPG', alt: 'Photo', span: false },
  { src: '/images/gallery/IMG_9848.JPG', alt: 'Photo', span: true },
];

export default function GalleryCard() {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const openPhoto = (index: number) => setPhotoIndex(index);
  const closePhoto = () => setPhotoIndex(null);
  const prevPhoto = () =>
    setPhotoIndex((i) => (i !== null ? (i - 1 + photos.length) % photos.length : 0));
  const nextPhoto = () => setPhotoIndex((i) => (i !== null ? (i + 1) % photos.length : 0));

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (photoIndex === null) return;
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
      if (e.key === 'Escape') closePhoto();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [photoIndex]);

  const activePhoto = photoIndex !== null ? photos[photoIndex] : null;

  return (
    <>
      <div className="card gallery-card fade-in d6" id="gallery">
        <div className="card-header">
          <div
            className="card-icon"
            style={{
              background: 'linear-gradient(135deg,#ff6b6b22,#ffd93d22,#6bcb7722,#4d96ff22)',
            }}
          >
            🖼️
          </div>
          <div>
            <div className="card-title">Our Moments</div>
            <div className="card-sub">
              <span className="dot" style={{ background: '#6bcb77' }}></span> Photo Library ·{' '}
              {photos.length} Photos
            </div>
          </div>
        </div>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className={`gallery-cell${photo.span ? ' span2' : ''}`}
              onClick={() => openPhoto(index)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 860px) 33vw, 17vw"
                className="gallery-img"
                style={{ objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>

      {activePhoto !== null && photoIndex !== null && (
        <div className="photo-modal-overlay" onClick={closePhoto}>
          <div className="photo-modal" onClick={(e) => e.stopPropagation()}>
            <button className="photo-modal-close" onClick={closePhoto}>
              ✕
            </button>
            <button
              className="photo-modal-arrow photo-modal-prev"
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
            >
              ‹
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={activePhoto.src} alt={activePhoto.alt} className="photo-modal-img" />
            <button
              className="photo-modal-arrow photo-modal-next"
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
            >
              ›
            </button>
            <div className="photo-modal-counter">
              {photoIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
