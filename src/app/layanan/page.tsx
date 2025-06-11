'use client';

import { motion } from 'framer-motion';

export default function Layanan() {
  return (
    <main className="pt-32 px-6 md:px-20 bg-gray-50 text-gray-800 min-h-screen">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-900">
          Layanan Kami
        </h1>

        <p className="text-center max-w-2xl mx-auto mb-12 text-lg text-gray-600">
          PT Kaya Indo menyediakan layanan profesional yang terintegrasi di bidang konstruksi dan desain bangunan.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: 'Perancangan Arsitektur',
              desc: 'Desain bangunan inovatif dan fungsional sesuai kebutuhan klien.',
              icon: '🏛️',
            },
            {
              title: 'Konstruksi Bangunan',
              desc: 'Pembangunan gedung dari awal hingga serah terima dengan standar tinggi.',
              icon: '🏗️',
            },
            {
              title: 'Manajemen Proyek',
              desc: 'Pengelolaan proyek secara profesional, efisien, dan tepat waktu.',
              icon: '📊',
            },
          ].map((layanan, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transition"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
            >
              <div className="text-5xl mb-4">{layanan.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{layanan.title}</h3>
              <p className="text-gray-600">{layanan.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
