/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Calendar, 
  ExternalLink, 
  ChevronRight,
  Globe,
  Briefcase,
  GraduationCap,
  Sparkles,
  Zap
} from 'lucide-react';
import { portfolioData, Language } from './data';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const data = portfolioData[lang];
  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRTL]);

  const toggleLang = (newLang: Language) => {
    setLang(newLang);
  };

  return (
    <div className={`min-h-screen bg-black text-white font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden`}>
      {/* Background Decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 rounded-full blur-[120px]" />
      </div>

      {/* Navigation / Language Switcher */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center bg-black/50 backdrop-blur-md border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-black tracking-tighter flex items-center gap-3"
        >
          <div className="w-10 h-10 bg-cyan-500 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <span className="text-black text-sm font-black">{data.initials}</span>
          </div>
          <span>{data.brandName}</span>
        </motion.div>

        <div className="flex gap-2 bg-white/5 p-1 rounded-full border border-white/10">
          {(['en', 'id', 'ar'] as Language[]).map((l) => (
            <button
              key={l}
              onClick={() => toggleLang(l)}
              className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                lang === l ? 'bg-cyan-500 text-black' : 'hover:bg-white/10 text-white/60'
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </nav>

      <main className="relative pt-32 pb-40 px-6 max-w-7xl mx-auto space-y-24">
        {/* Section 1: Hero & Profile */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-12">
             <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-4"
            >
              {data.profile.subname}
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.8] mb-8"
            >
              {data.profile.name}
            </motion.h1>
          </div>

          <div className="lg:col-span-3 aspect-square relative group max-w-[280px] lg:max-w-none mx-auto lg:mx-0">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border-2 border-white/10 p-2"
            >
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src={data.profile.photo} 
                  alt={data.profile.name}
                  className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
            <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full flex items-center justify-center p-3">
               <div className="w-full h-full border border-dashed border-cyan-500/50 rounded-full animate-spin-slow" />
               <Globe className="absolute w-6 h-6 text-cyan-500" />
            </div>
          </div>

          <div className="lg:col-span-9 space-y-8">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xl md:text-2xl text-white/70 leading-relaxed max-w-2xl font-light"
            >
              {data.profile.description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8 border-t border-white/10"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <Calendar className="w-5 h-5 text-cyan-500" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{data.labels.dob}</p>
                  <p className="font-semibold">{data.profile.bio.dob}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                  <MapPin className="w-5 h-5 text-cyan-500" />
                </div>
                <div>
                  <p className="text-white/40 text-xs uppercase tracking-widest">{data.labels.location}</p>
                  <p className="font-semibold">{data.profile.bio.location}</p>
                </div>
              </div>
            </motion.div>

            <div className="flex gap-4 pt-4">
              <a href={`mailto:${data.profile.bio.socials.email}`} className="p-4 bg-white/5 hover:bg-cyan-500 hover:text-black rounded-2xl border border-white/10 transition-all group">
                <Mail className="w-6 h-6" />
              </a>
              <a href={data.profile.bio.socials.instagram} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-cyan-500 hover:text-black rounded-2xl border border-white/10 transition-all">
                <Instagram className="w-6 h-6" />
              </a>
              <a href={data.profile.bio.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 hover:bg-cyan-500 hover:text-black rounded-2xl border border-white/10 transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>

        {/* Section 2: Details */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Education Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white/5 p-8 rounded-3xl border border-white/10 space-y-8"
          >
            <div className="flex items-center gap-3">
              <GraduationCap className="w-8 h-8 text-cyan-500" />
              <h2 className="text-3xl font-black uppercase tracking-tighter">{data.labels.education}</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">{data.labels.formal}</h3>
                {data.education.formal.map((edu, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-white rounded-xl p-2 shrink-0 group-hover:scale-110 transition-transform">
                      <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="font-bold leading-tight">{edu.institution}</h4>
                      <p className="text-sm text-cyan-500">{edu.specialization}</p>
                      <p className="text-xs text-white/40 mt-1">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-6">
                <h3 className="text-xs font-bold text-white/40 uppercase tracking-[0.2em]">{data.labels.nonFormal}</h3>
                {data.education.nonFormal.map((edu, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="w-12 h-12 bg-white rounded-xl p-2 shrink-0 group-hover:scale-110 transition-transform">
                      <img src={edu.logo} alt={edu.institution} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                    </div>
                    <div>
                      <h4 className="font-bold leading-tight">{edu.institution}</h4>
                      <p className="text-sm text-cyan-500">{edu.specialization}</p>
                      <p className="text-xs text-white/40 mt-1">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Interests Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4 bg-white/5 p-8 rounded-3xl border border-white/10 flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-6 h-6 text-cyan-500" />
                <h2 className="text-2xl font-black uppercase tracking-tighter">{data.labels.interests}</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {data.interests.map((interest, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:border-cyan-500/50 transition-colors">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-12 bg-cyan-500/10 p-6 rounded-2xl border border-cyan-500/20">
               <p className="text-cyan-500 font-mono text-xs uppercase tracking-widest mb-2">Philosophy</p>
               <p className="italic text-sm font-light leading-relaxed">"Minimalism is not lack of something. It's more about the perfect amount of something."</p>
            </div>
          </motion.div>

          {/* Experience Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7 bg-white/5 p-8 rounded-3xl border border-white/10 space-y-8"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-cyan-500" />
                <h2 className="text-3xl font-black uppercase tracking-tighter">{data.labels.experience}</h2>
              </div>
            </div>
            <div className="space-y-8">
              {data.experience.map((exp, idx) => (
                <div key={idx} className="relative ps-8 border-s-2 border-white/10 space-y-2">
                  <div className="absolute -start-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-black" />
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                    <h4 className="text-xl font-bold">{exp.role}</h4>
                    <span className="text-xs font-mono text-cyan-500 bg-cyan-500/10 px-3 py-1 rounded-full">{exp.period}</span>
                  </div>
                  <p className="font-bold text-white/60">{exp.company}</p>
                  <p className="text-sm text-white/40 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-5 bg-white/5 p-8 rounded-3xl border border-white/10"
          >
            <div className="flex items-center gap-3 mb-8">
              <Zap className="w-8 h-8 text-cyan-500" />
              <h2 className="text-3xl font-black uppercase tracking-tighter">{data.labels.skills}</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {data.skills.map((skill, idx) => (
                <div key={idx} className="p-4 bg-white/5 border border-white/5 rounded-2xl flex items-center justify-between group hover:bg-cyan-500 transition-all duration-300">
                  <span className="font-bold tracking-tight group-hover:text-black">{skill}</span>
                  <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-black/40" />
                </div>
              ))}
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer / Contact Button */}
      <footer className="fixed bottom-0 left-0 right-0 p-8 z-40 bg-gradient-to-t from-black via-black/80 to-transparent flex justify-center">
        <motion.a 
          href={`mailto:${data.profile.bio.socials.email}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-12 py-5 rounded-full font-black text-xl tracking-tighter flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:bg-cyan-500 transition-colors"
        >
          {data.labels.contactMe}
          <div className="bg-black text-white p-1 rounded-full">
            <ExternalLink className="w-5 h-5" />
          </div>
        </motion.a>
      </footer>
      
      {/* Decorative Text */}
      <div className={`fixed -bottom-10 ${isRTL ? '-right-10' : '-left-10'} text-[20vw] font-black text-white/[0.02] leading-none select-none pointer-events-none uppercase`}>
        {data.brandName}
      </div>
    </div>
  );
}
