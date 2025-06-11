'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Gedung Kantor PT Maju Jaya',
    location: 'Jakarta',
    year: '2024',
    image: '/images/proyek/gedung-1.jpg',
    desc: 'Gedung kantor pusat 12 lantai berkonsep green building dengan sistem hemat energi.',
  },
  {
    title: 'Apartemen Harmoni Residence',
    location: 'Bandung',
    year: '2023',
    image: '/images/proyek/apartemen-1.jpeg',
    desc: 'Kompleks apartemen mewah & modern dengan fasilitas kolam renang dan sky garden.',
  },
  {
    title: 'Pusat Perbelanjaan Karya Mall',
    location: 'Surabaya',
    year: '2022',
    image: '/images/proyek/mall-1.jpg',
    desc: 'Mall 3 lantai bertema eco-lifestyle dan desain futuristik dengan konsep terbuka.',
  },
];

export default function Proyek() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="pt-32 px-4 md:px-20 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen text-gray-800 font-sans">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-gray-900">
          Proyek Kami
        </h1>

        <p className="text-center mb-16 text-lg text-gray-600 max-w-2xl mx-auto">
          Kami bangga telah menyelesaikan berbagai proyek berkualitas tinggi di seluruh Indonesia dengan inovasi dan profesionalisme.
        </p>

        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}>
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                className="min-w-full flex flex-col md:flex-row items-center gap-8 bg-white rounded-2xl shadow-2xl p-8 mx-4 md:mx-0"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-[50%] h-80 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
                />
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-2">
                    {project.location} • {project.year}
                  </p>
                  <p className="text-md text-gray-700 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-4 h-4 rounded-full ${i === index ? 'bg-gray-800' : 'bg-gray-400'} transition-all`}
            />
          ))}
        </div>
      </motion.section>
    </main>
  );
}
