'use client';

import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function Hero() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const { bottom } = heroSection.getBoundingClientRect();
        setIsTop(bottom > 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const nav = document.getElementById('navbar');
    if (nav) {
      if (isTop) {
        nav.classList.remove('bg-white', 'shadow-md');
        nav.classList.add('bg-transparent');
      } else {
        nav.classList.remove('bg-transparent');
        nav.classList.add('bg-white', 'shadow-md');
      }
    }
  }, [isTop]);

  return (
    <div className="overflow-x">
      {/* Section 1: Hero Fullscreen Background */}
      <section id="hero" className="relative min-h-screen w-full">
        <div className="absolute inset-0">
          <Image
            src="/bg.jpg"
            alt="Hero Image"
            fill
            className="object-cover"
            priority
          />
          
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen text-white px-4">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            Selamat Datang di PT Kaya Indo
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Solusi konstruksi modern dan berkelas untuk masa depan Indonesia.
          </p>
        </div>
      </section>

      {/* Section 2: Tentang Kami */}
      <section className="relative py-24 text-white overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 -z-10">
          <Image src="/bgtentang2.jpg" alt="Tentang Kami" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="zoom-in" data-aos-delay="200">
            <Image
              src="/bgtentang.jpg"
              alt="Ilustrasi Tentang"
              width={500}
              height={400}
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>

          <div data-aos="fade-left" data-aos-delay="400">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Tentang <span className="text-yellow-400">PT Kaya Indo</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-gray-100">
              Kami adalah perusahaan konstruksi masa depan yang menggabungkan
              <span className="text-yellow-300 font-semibold"> inovasi teknologi</span>,
              <span className="text-yellow-300 font-semibold"> desain modern</span>,
              dan <span className="text-yellow-300 font-semibold">kualitas tinggi</span>.
              Visi kami adalah membangun ruang yang tidak hanya kokoh, tetapi juga estetis dan efisien.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Slider Berita Terbaru */}
      <section className="py-20 bg-gray-100" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Berita Terbaru</h2>
        <div className="px-4 max-w-6xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[1, 2, 3, 4, 5].map((item) => (
              <SwiperSlide key={item}>
                <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 cursor-pointer">
                  <div className="overflow-hidden">
                    <Image
                      src={`/berita/berita${item}.jpg`}
                      alt={`Berita ${item}`}
                      width={400}
                      height={250}
                      className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-gray-500 mb-1 group-hover:text-indigo-600 transition-colors duration-300">
                      11 Juni 2025
                    </p>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-800 transition-colors duration-300">
                      Judul Berita {item}
                    </h3>
                    <p className="text-sm text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                      Deskripsi singkat dari berita nomor {item} mengenai update proyek atau kabar perusahaan.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
}
