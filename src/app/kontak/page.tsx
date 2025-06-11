'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import { FaWhatsapp as FaWhatsappFloating } from 'react-icons/fa';

function Toast({ message, show }: { message: string; show: boolean }) {
  return (
    <div
      className={`fixed top-6 right-6 z-50 transition-all duration-500 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}
    >
      <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-xl flex items-center gap-3 backdrop-blur-md bg-opacity-90">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
        <span>{message}</span>
      </div>
    </div>
  );
}

export default function Kontak() {
  const [formData, setFormData] = useState({ nama: '', email: '', pesan: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showToast, setShowToast] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.nama) newErrors.nama = 'Nama wajib diisi';
    if (!formData.email) newErrors.email = 'Email wajib diisi';
    if (!formData.pesan) newErrors.pesan = 'Pesan wajib diisi';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    fetch('https://formsubmit.co/ajax/kucingdogan22@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        nama: formData.nama,
        email: formData.email,
        pesan: formData.pesan,
      }),
    })
      .then((res) => {
        if (res.ok) {
          setFormData({ nama: '', email: '', pesan: '' });
          setErrors({});
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
        } else {
          alert('Gagal mengirim pesan.');
        }
      })
      .catch(() => alert('Terjadi kesalahan, coba lagi.'));
  };

  return (
    <main className="pt-32 px-6 md:px-20 bg-white text-gray-800 min-h-screen relative">
      <Toast message="Pesan berhasil dikirim!" show={showToast} />

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-5xl font-bold text-center mb-4 text-gray-900">Hubungi Kami</h1>
        <p className="text-center mb-10 text-lg text-gray-600">
          Kami siap membantu Anda! Silakan hubungi kami melalui formulir atau informasi berikut.
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="nama"
                placeholder="Nama"
                className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500"
                value={formData.nama}
                onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
              />
              {errors.nama && <p className="text-red-500 text-sm mt-1">{errors.nama}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <textarea
                name="pesan"
                rows={5}
                placeholder="Pesan"
                className="w-full border p-3 rounded-md focus:ring-2 focus:ring-blue-500"
                value={formData.pesan}
                onChange={(e) => setFormData({ ...formData, pesan: e.target.value })}
              />
              {errors.pesan && <p className="text-red-500 text-sm mt-1">{errors.pesan}</p>}
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition"
            >
              Kirim Pesan
            </button>
          </form>

          <div className="text-gray-700 space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-1">Alamat Kantor</h3>
              <p>Jl. Proyek Hebat No. 88, Jakarta, Indonesia</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Email</h3>
              <p>info@kayaindo.co.id</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-1">Telepon</h3>
              <p>(021) 888-1234</p>
            </div>
            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-3">Media Sosial</h3>
              <div className="flex gap-4 text-2xl">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-600 transition-transform hover:scale-110"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500 transition-transform hover:scale-110"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-transform hover:scale-110"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-center">Lokasi Kami</h2>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.9999200553794!2d106.822345!3d-6.176606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d5f5e4c6e7%3A0x9d70cc98d9f81648!2sMonas!5e0!3m2!1sid!2sid!4v1627897414692!5m2!1sid!2sid"
              width="100%"
              height="100%"
              loading="lazy"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </motion.section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/6281234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all z-50"
        aria-label="Chat WhatsApp"
      >
        <FaWhatsappFloating className="text-2xl" />
      </a>
    </main>
  );
}
