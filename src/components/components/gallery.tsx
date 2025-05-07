"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const galleryImages = [
  {
    src: "/imagens/fralda-personalizada.jpg",
    alt: "Peças personalizadas",
    title: "Peças personalizadas",
  },
  {
    src: "/imagens/barra-de-calça.jpg",
    alt: "Barra de Calça",
    title: "Barra de Calça",
  },
  {
    src: "/imagens/troca-de-ziper.jpg",
    alt: "Troca de ziper",
    title: "Troca de ziper",
  },
  {
    src: "/imagens/camisa-de-samba.jpg",
    alt: "Customização de peças",
    title: "Customização de peças",
  },
  {
    src: "/imagens/capa-instrumento.jpg",
    alt: "Peças sob medida",
    title: "Peças sob medida",
  },
  {
    src: "/imagens/casinha-de-brinquedos.jpg",
    alt: "Casa de brinquedos",
    title: "Casa de brinquedos",
  }
];

export function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [autoplayInterval, setAutoplayInterval] = useState<NodeJS.Timeout | null>(null);
  
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1, spacing: 16 },
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 2, spacing: 16 },
        },
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    []
  );

  // Set up autoplay for mobile only
  useEffect(() => {
    // Function to check if we're on mobile
    const isMobile = () => window.innerWidth < 768;
    
    // Function to start autoplay
    const startAutoplay = () => {
      if (isMobile() && instanceRef.current && !autoplayInterval) {
        const interval = setInterval(() => {
          instanceRef.current?.next();
        }, 8000); // Change slide every 4 seconds
        
        setAutoplayInterval(interval);
      }
    };
    
    // Function to stop autoplay
    const stopAutoplay = () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        setAutoplayInterval(null);
      }
    };
    
    // Start autoplay if on mobile and the slider is loaded
    if (loaded) {
      startAutoplay();
    }
    
    // Handle window resize to start/stop autoplay based on screen size
    const handleResize = () => {
      if (isMobile()) {
        if (!autoplayInterval) startAutoplay();
      } else {
        stopAutoplay();
      }
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up on component unmount
    return () => {
      stopAutoplay();
      window.removeEventListener('resize', handleResize);
    };
  }, [loaded]); // Remove autoplayInterval and instanceRef from dependencies

  return (
    <section id="gallery" className="py-16 bg-gray-50 mt-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">Nossa Galeria</h2>
        <p className="text-gray-600 mb-8">
          Confira alguns dos nossos trabalhos recentes
        </p>

        {/* Mobile: Carousel (visível apenas em telas menores que md) */}
        <div className="relative md:hidden">
          <div ref={sliderRef} className="keen-slider">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-white rounded-xl p-4 shadow-md overflow-hidden"
              >
                <div className="relative h-64 w-full  overflow-hidden rounded-lg">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full  object-cover transition-transform hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-semibold mt-3">{image.title}</h3>
              </div>
            ))}
          </div>

          {/* Nav buttons - visíveis apenas em mobile */}
          {loaded && instanceRef.current && (
            <>
              <div className="absolute -left-2 top-1/2 -translate-y-1/2">
                <button
                  onClick={() => instanceRef.current?.prev()}
                  className="bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
              <div className="absolute -right-2 top-1/2 -translate-y-1/2">
                <button
                  onClick={() => instanceRef.current?.next()}
                  className="bg-gray-100 p-2 rounded-full shadow hover:bg-gray-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </>
          )}
        </div>

        {/* Desktop: Grid (visível apenas em telas md e maiores) */}
        <div className="hidden md:grid grid-cols-3 gap-5">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-3 shadow-md overflow-hidden"
            >
              <div className="relative h-52 w-full overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform hover:scale-105 rounded-md"
                />
              </div>
              <h3 className="text-lg font-semibold mt-2 truncate">
                {image.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
