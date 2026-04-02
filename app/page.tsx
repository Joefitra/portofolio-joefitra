"use client";

import React, { useState } from 'react';
import {
  Code,
  Palette,
  LineChart,
  GraduationCap,
  ArrowRight,
  ExternalLink,
  Mail,
  ChevronDown,
  BookOpen,
  useLucideContext
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('beranda');

  // Smooth scroll handler
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30">

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold tracking-tighter text-white">
            Joefitra<span className="text-blue-500">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            {['Beranda', 'Keahlian', 'Karya', 'Publikasi'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className="hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo('kontak')}
            className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-colors"
          >
            Hubungi Saya
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="beranda" className="pt-40 pb-20 px-6 min-h-[90vh] flex flex-col justify-center items-center text-center">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-sm font-medium">
            S1 & S2 Teknologi Informasi 🎓
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 max-w-4xl leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Mengubah Ide
            </span>
            <br /> Menjadi Nyata.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            Halo, saya <span className="text-white font-medium">Muhammad Joefitra Zaqy, S.Kom., M.Kom.</span>.
            Saya memadukan keahlian lintas disiplin: mulai dari mendesain visual kreatif, web coding, menulis riset ilmu komputer, hingga mengajar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollTo('karya')}
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-slate-900 font-semibold rounded-full hover:bg-slate-200 transition-colors"
            >
              Lihat Karya Saya <ArrowRight size={18} />
            </button>
            <button
              onClick={() => scrollTo('keahlian')}
              className="flex items-center justify-center gap-2 px-8 py-3.5 bg-slate-800 text-white font-semibold rounded-full hover:bg-slate-700 transition-colors border border-slate-700"
            >
              Jelajahi Keahlian <ChevronDown size={18} />
            </button>
          </div>
        </section>

        {/* Keahlian / What I Do Section */}
        <section id="keahlian" className="py-24 px-6 bg-slate-900/50 border-y border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16 md:text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Apa yang Saya Lakukan</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Pendekatan multidisiplin untuk menyelesaikan masalah melalui desain, kode, data, dan edukasi.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 1 */}
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-2xl flex items-center justify-center mb-6">
                  <Palette size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Desain Visual</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  "Visual yang menarik, pesan yang sampai." Pendekatan praktis fokus pada estetika dan tata letak yang harmonis.
                </p>
                <div className="flex gap-2 text-xs font-medium text-slate-500">
                  <span className="bg-slate-800 px-2 py-1 rounded">Canva</span>
                  <span className="bg-slate-800 px-2 py-1 rounded">Photoshop</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mb-6">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Web Development</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  "Membangun produk cerdas." Mengembangkan web responsif dan memanfaatkan AI-assisted coding untuk efisiensi.
                </p>
                <div className="flex gap-2 text-xs font-medium text-slate-500">
                  <span className="bg-slate-800 px-2 py-1 rounded">Next.js</span>
                  <span className="bg-slate-800 px-2 py-1 rounded">Tailwind</span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-2xl flex items-center justify-center mb-6">
                  <LineChart size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Riset & Analisis</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  "Menerjemahkan data menjadi solusi." Merumuskan solusi berbasis data melalui algoritma tingkat lanjut.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-slate-500">
                  <span className="bg-slate-800 px-2 py-1 rounded">Machine Learning</span>
                  <span className="bg-slate-800 px-2 py-1 rounded">NLP</span>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-slate-900 p-8 rounded-3xl border border-slate-800 hover:border-blue-500/50 transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-orange-500/10 text-orange-400 rounded-2xl flex items-center justify-center mb-6">
                  <GraduationCap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Edukasi & Mentor</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  "Mentransfer pengetahuan." Mengajar ilmu komputer dengan metode hybrid agar materi mudah dipraktikkan.
                </p>
                <div className="flex gap-2 text-xs font-medium text-slate-500">
                  <span className="bg-slate-800 px-2 py-1 rounded">S1 Mahasiswa</span>
                  <span className="bg-slate-800 px-2 py-1 rounded">Hybrid Method</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Karya / Projects Section */}
        <section id="karya" className="py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Karya Unggulan</h2>
              <p className="text-slate-400 max-w-2xl">Beberapa proyek web dan hasil desain yang telah saya kerjakan.</p>
            </div>

            {/* Project 1: CLIPIT! */}
            <div className="group rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 flex flex-col md:flex-row mb-12">
              <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden bg-slate-800">
                {/* Ganti URL src ini dengan screenshot CLIPIT! milikmu */}
                <img
                  src="clipit.webp"
                  alt="Screenshot CLIPIT! Web App"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900 via-transparent to-transparent opacity-80 pointer-events-none"></div>
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-3xl font-bold text-white">CLIPIT! Web App</h3>
                </div>
                <p className="text-slate-400 mb-6 text-lg">
                  Platform ekstraksi video cerdas untuk media sosial. Mengintegrasikan kecerdasan API Groq dan Gemini untuk menganalisis video panjang dan menemukan momen-momen yang paling berpotensi viral secara otomatis.
                </p>
                <div className="flex flex-wrap gap-2 text-sm font-medium">
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">Next.js</span>
                  <span className="bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">Tailwind</span>
                  <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500/20">Groq API</span>
                  <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/20">Gemini AI</span>
                </div>
              </div>
            </div>

            {/* Project 2: Social Media Showcase (Direct Display) */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Galeri Desain Media Sosial</h3>
                <p className="text-slate-400 text-lg">
                  Kumpulan poster dan flyer promosi. Fokus pada komposisi warna dan tata letak yang harmonis untuk menarik audiens digital.
                </p>
                <div className="flex gap-2 mt-4 text-sm font-medium">
                  <span className="bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full border border-pink-500/20">Canva</span>
                  <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">Photoshop</span>
                </div>
              </div>

              {/* Grid untuk menampilkan desain secara langsung */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Ganti URL src pada masing-masing img tag dengan gambar aslimu */}
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50 group">
                  <img src="44.webp" alt="Desain 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50 group">
                  <img src="45.webp" alt="Desain 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50 group">
                  <img src="46.webp" alt="Desain 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50 group">
                  <img src="48.webp" alt="Desain 4" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div><div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50 group">
                  <img src="49.webp" alt="Desain 5" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50 group">
                  <img src="53.webp" alt="Desain 6" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50 group">
                  <img src="71.webp" alt="Desain 7" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>

              <div className="mb-8 mt-10">
                <h3 className="text-3xl font-bold text-white mb-4">Desain Spanduk</h3>
                <p className="text-slate-400 text-lg">
                  Desain spanduk untuk berbagai acara dan kebutuhan.
                </p>
                <div className="flex gap-2 mt-4 text-sm font-medium">
                  <span className="bg-pink-500/10 text-pink-400 px-3 py-1 rounded-full border border-pink-500/20">Canva</span>
                  <span className="bg-cyan-500/10 text-cyan-400 px-3 py-1 rounded-full border border-cyan-500/20">Photoshop</span>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden bg-slate-800 border border-slate-700/50 group">
                <img src="spanduk.webp" alt="Desain 8" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>

          </div>
        </section>

        {/* Publikasi Section */}
        <section id="publikasi" className="py-24 px-6 bg-slate-900/50 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Jurnal & Publikasi Sinta</h2>
            <p className="text-slate-400">Rekam jejak penelitian di bidang ilmu komputer dan algoritma cerdas.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {/* Journal Item 1 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/30 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded">SINTA ACCREDITED</span>
                  <span className="text-sm text-slate-500 font-medium">Tahun Terbit July 2024</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Analysis of Indonesian Netizen Sentiment on Platform X Regarding the Arrival of Refugees in Indonesia Using the Multinominal Naive Bayes Method</h3>
                <p className="text-slate-400 text-sm line-clamp-2">Penelitian ini berfokus untuk menganalisis sentimen netizen Indonesia terhadap kedatangan pengungsi di Indonesia pada plaform x (twitter)</p>
              </div>

              <button onClick={() => window.open('https://shorturl.at/irOZn')} className="shrink-0 flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300">
                Baca Jurnal <ArrowRight size={16} />
              </button>
            </div>

            {/* Journal Item 2 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/30 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded">SINTA ACCREDITED</span>
                  <span className="text-sm text-slate-500 font-medium">Tahun Terbit July 2023</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Implementasi Data Mining Untuk Memprediksi Penjualan Toko Roti Menggunakan Regresi Linier Berganda</h3>
                <p className="text-slate-400 text-sm line-clamp-2">Penelitian ini bertujuan untuk memprediksi penjualan toko roti</p>
              </div>
              <button onClick={() => window.open('https://shorturl.at/Xhieo')} className="shrink-0 flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300">
                Baca Jurnal <ArrowRight size={16} />
              </button>
            </div>


            {/* Journal Item 3 */}
            <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-blue-500/30 transition-colors flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold px-2 py-1 bg-emerald-500/10 text-emerald-400 rounded">SINTA ACCREDITED</span>
                  <span className="text-sm text-slate-500 font-medium">Tahun Terbit Oktober 2023</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Sistem Pendukung Keputusan Dalam Rekrutmen Tim Digital Marketing Di PT. Inti Edukasi Internasional Menggunakan Metode ARAS(Additive Ratio Assesment)</h3>
                <p className="text-slate-400 text-sm line-clamp-2">Penelitian ini bertujuan membantu dalam proses rekrutmen tim digital marketing di PT. Inti Edukasi Internasional</p>
              </div>
              <button onClick={() => window.open('https://shorturl.at/nxgyB')} className="shrink-0 flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300">
                Baca Jurnal <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer / Contact */}
      <footer id="kontak" className="bg-slate-950 border-t border-slate-800 pt-20 pb-10 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-6">Mari Terhubung!</h2>
          <p className="text-slate-400 mb-10">
            Punya ide proyek, tawaran kolaborasi, atau sekadar ingin berdiskusi soal data dan teknologi? Kotak masuk saya selalu terbuka.
          </p>

          <div className="flex justify-center gap-6 mb-16">
            <a href="https://shorturl.at/WmuiS" target="_blank" className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all">
              <Mail size={24} />
            </a>
            <a href="#" className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all">
              {/* Linkedin SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://github.com/Joefitra" className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all">
              {/* Github SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
            </a>
            <a href="https://www.instagram.com/m.joefitra_zaqy" target="_blank" className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all">
              {/* Instagram SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            {/* Tombol WhatsApp */}
            <a href="https://wa.me/6283197341130" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-emerald-500 hover:bg-emerald-500/10 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17.498 14.382c-.301-.15-1.767-.867-2.04-.966-.275-.101-.477-.15-.678.15-.2.301-.767.967-.94 1.165-.175.199-.35.223-.65.075-.301-.15-1.263-.464-2.404-1.477-.887-.788-1.486-1.761-1.66-2.06-.175-.3-.019-.46.13-.607.135-.133.301-.35.449-.523.15-.173.2-.299.3-.498.101-.2.05-.373-.025-.523-.075-.15-.678-1.613-.928-2.208-.242-.579-.487-.501-.678-.511l-.578-.01c-.2 0-.525.075-.8.373-.275.301-1.05 1.017-1.05 2.48 0 1.463 1.075 2.877 1.225 3.076.15.2 2.1 3.203 5.093 4.492.713.307 1.269.49 1.705.626.714.227 1.365.195 1.879.118.577-.085 1.767-.72 2.016-1.415.25-.694.25-1.289.175-1.414-.075-.125-.275-.2-.575-.35z"></path>
                <path d="M22 12c0 5.523-4.477 10-10 10-1.71 0-3.318-.43-4.733-1.189L2 22l1.248-5.111A9.954 9.954 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10z"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto text-sm text-slate-500">
          <p>© 2026 Muhammad Joefitra Zaqy, S.Kom., M.Kom. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Dibuat dengan Next.js & Tailwind CSS.</p>
        </div>
      </footer>

    </div >
  );
}