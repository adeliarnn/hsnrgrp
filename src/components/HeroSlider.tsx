'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface SliderImage {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  isActive: boolean;
}

export default function HeroSlider() {
  const [sliders, setSliders] = useState<SliderImage[]>([
    {
      _id: '1',
      title: 'Hasnur Group',
      description: 'Membangun masa depan berkelanjutan bersama inovasi dan integritas',
      imageUrl: '/Desain Hasnur (1).png',
      link: '/about',
      isActive: true,
    },
    {
      _id: '2',
      title: 'Nilai-Nilai Inti',
      description: 'Tujuh pilar yang membimbing setiap keputusan dan tindakan kami',
      imageUrl: '/Desain Hasnur (2).png',
      link: '/core-values',
      isActive: true,
    },
    {
      _id: '3',
      title: '7 Strategic Business Units',
      description: 'Ekosistem bisnis yang kuat dan berkelanjutan',
      imageUrl: '/Desain Hasnur (3).png',
      link: '/business/logistic',
      isActive: true,
    },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSliders();
  }, []);

  const fetchSliders = async () => {
    try {
      const res = await fetch('/api/content/slider', { 
        cache: 'no-store' 
      });
      
      if (!res.ok) {
        console.warn('Failed to fetch sliders, using default');
        setLoading(false);
        return;
      }

      const data = await res.json();
      const activeSliders = Array.isArray(data)
        ? data.filter((s: SliderImage) => s.isActive).sort((a: SliderImage, b: SliderImage) => a.order - b.order)
        : [];
      
      if (activeSliders.length > 0) {
        setSliders(activeSliders);
      }
      setLoading(false);
    } catch (error) {
      console.warn('Error fetching sliders:', error);
      // Tetap gunakan default sliders
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Swiper
        modules={[Autoplay, Navigation, Pagination, EffectFade]}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets',
        }}
        loop
        className="w-full h-full"
      >
        {sliders.map((slide, index) => (
          <SwiperSlide key={`${slide._id}-${index}`}>
            <div className="relative w-full h-full">
              {/* Image Background */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.imageUrl})`,
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 h-full flex items-center">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                  >
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="mb-6"
                    >
                      <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text text-sm font-bold uppercase tracking-widest">
                        Slider {index + 1}
                      </span>
                    </motion.div>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                      className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="text-xl md:text-2xl text-gray-100 mb-8 max-w-xl leading-relaxed"
                    >
                      {slide.description}
                    </motion.p>

                    {slide.link && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                      >
                        <Link
                          href={slide.link}
                          className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition group"
                        >
                          Pelajari Lebih Lanjut
                          <span className="group-hover:translate-x-2 transition">→</span>
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="swiper-button-prev absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 text-white text-3xl cursor-pointer hover:text-blue-400 transition"></div>
        <div className="swiper-button-next absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 text-white text-3xl cursor-pointer hover:text-blue-400 transition"></div>

        {/* Pagination Dots */}
        <div className="swiper-pagination absolute bottom-8 left-1/2 -translate-x-1/2 z-20"></div>
      </Swiper>

      <style jsx global>{`
        .swiper-button-prev::after,
        .swiper-button-next::after {
          font-size: 24px;
          font-weight: bold;
        }

        .swiper-pagination-bullet {
          background-color: rgba(255, 255, 255, 0.5);
          opacity: 1;
          width: 12px;
          height: 12px;
        }

        .swiper-pagination-bullet-active {
          background-color: #fff;
          background: linear-gradient(135deg, #3b82f6, #a855f7);
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
