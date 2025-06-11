'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const sections = {
  heading: {
    initial: { opacity: 0, y: -30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  },
  intro: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.2 },
  },
  image: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, delay: 0.4 },
  },
  visiMisi: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: 0.3 },
  },
  team: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, delay: 0.5 },
  },
};

const teamMembers = [
  {
    name: 'Elon Musk',
    role: 'Owner',
    img: '/images/team1.jpg',
  },
  {
    name: 'Jeff Bezos',
    role: 'Arsitek',
    img: '/images/team2.jpg',
  },
  {
    name: 'Jack Ma',
    role: 'Manajer Proyek',
    img: '/images/team3.jpg',
  },
  {
    name: 'Megawati Soekarno Putri',
    role: 'Engineer',
    img: '/images/team4.jpg',
  },
];

export default function Tentang() {
  return (
    <main className="pt-32 px-6 md:px-20 min-h-screen text-gray-800 relative bg-fixed bg-cover bg-center" style={{ backgroundImage: 'url(/images/bg-pattern.jpg)' }}>
      <motion.section {...sections.heading} className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-black drop-shadow-xl">Tentang PT Kaya Indo</h1>
        <p className="mt-4 text-lg text-black max-w-2xl mx-auto drop-shadow">Membangun masa depan dengan inovasi dan kualitas terbaik.</p>
      </motion.section>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        <motion.div {...sections.intro}>
          <p className="text-lg text-black leading-relaxed text-justify">
            <strong>PT Kaya Indo</strong> adalah perusahaan konstruksi yang telah berpengalaman lebih dari satu dekade dalam membangun infrastruktur dan bangunan modern di Indonesia. Kami telah menyelesaikan lebih dari 500 proyek besar dan kecil dengan kualitas tinggi.
          </p>
          <p className="mt-4 text-lg text-yellow-900 leading-relaxed text-justify">
            Kami memiliki tim profesional yang terdiri dari arsitek, desainer, dan engineer yang berdedikasi penuh terhadap keunggulan hasil dan kepuasan klien.
          </p>
        </motion.div>

        <motion.div {...sections.image}>
          <Image src="/images/tentangbg.jpg" alt="Tentang PT Kaya Indo" width={600} height={400} className="rounded-xl shadow-2xl" />
        </motion.div>
      </div>

      <motion.section {...sections.visiMisi} className="max-w-4xl mx-auto mt-16 bg-white bg-opacity-90 rounded-xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Visi & Misi</h2>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Visi</h3>
          <p className="text-lg text-gray-700 mb-6">Menjadi perusahaan konstruksi terdepan di Asia Tenggara yang dikenal karena inovasi dan keunggulan teknis.</p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Misi</h3>
          <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
            <li>Menyediakan solusi konstruksi terbaik dan tepat guna.</li>
            <li>Mengedepankan kualitas, keselamatan, dan ketepatan waktu.</li>
            <li>Menjaga kepuasan klien dan membangun hubungan jangka panjang.</li>
            <li>Mendukung pembangunan berkelanjutan dan ramah lingkungan.</li>
          </ul>
        </div>
      </motion.section>

      <motion.section {...sections.team} className="max-w-6xl mx-auto mt-20 mb-20">
        <h2 className="text-3xl font-bold text-black text-center mb-10 drop-shadow">Our Team</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white bg-opacity-90 rounded-xl p-4 shadow-md text-center"
            >
              <Image src={member.img} alt={member.name} width={200} height={200} className="mx-auto rounded-full mb-4 shadow-lg" />
              <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </main>
  );
}
