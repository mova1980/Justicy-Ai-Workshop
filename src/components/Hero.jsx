import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { CalendarDays, Clock, MapPin, ChevronDown } from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { PrimaryButton, GhostButton } from './ui'

function Stars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 120 }, (_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.6,
        delay: Math.random() * 4,
        dur: 2 + Math.random() * 4,
        op: 0.25 + Math.random() * 0.6,
      })),
    [],
  )
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((s) => (
        <motion.span
          key={s.id}
          className="absolute rounded-full bg-white"
          style={{ top: `${s.top}%`, left: `${s.left}%`, width: s.size, height: s.size }}
          animate={{ opacity: [s.op * 0.3, s.op, s.op * 0.3], scale: [1, 1.4, 1] }}
          transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

function Dust() {
  const dots = useMemo(
    () =>
      Array.from({ length: 25 }, (_, i) => ({
        id: i,
        top: 10 + Math.random() * 70,
        left: Math.random() * 100,
        delay: i * 0.18,
      })),
    [],
  )
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute w-1 h-1 rounded-full bg-persian-blue-300/70"
          style={{ top: `${d.top}%`, left: `${d.left}%` }}
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 6, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

export default function Hero() {
  const { t, isRTL } = useLang()
  const words = t('hero.line1').split(' ')

  return (
    <section className="relative bg-space min-h-[100svh] flex items-center">
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020810] via-[#041529] to-[#081421]" />
        <Stars />
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-[420px] h-[420px] md:w-[560px] md:h-[560px] lg:w-[680px] lg:h-[680px] ${
            isRTL ? 'left-[-60px]' : 'right-[-60px]'
          }`}
        >
          <div className="absolute inset-[-8%] rounded-full bg-persian-blue-500/15 blur-3xl" />
          <img
            src="/earth-globe.png"
            alt=""
            className="relative w-full h-full rounded-full animate-earth-spin"
            style={{
              filter: 'brightness(1.2) saturate(1.4)',
              mixBlendMode: 'screen',
              WebkitMaskImage: 'radial-gradient(circle, white 65%, transparent 72%)',
              maskImage: 'radial-gradient(circle, white 65%, transparent 72%)',
              opacity: 0.82,
            }}
          />
        </div>
        <div className="absolute -top-24 start-1/3 w-[420px] h-[420px] rounded-full bg-persian-blue-700/30 blur-[120px]" />
        <div className="absolute bottom-0 end-1/4 w-[380px] h-[380px] rounded-full bg-[#5b2ee5]/25 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#081421]/20 to-[#020810]/80" />
        <Dust />
      </div>

      <div className="relative container mx-auto px-6 pt-40 pb-24 md:pt-48">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-persian-blue-600/15 border border-persian-blue-500/25 text-persian-blue-200 text-[11px] md:text-xs font-extrabold mb-6"
        >
          {t('hero.badge')}
        </motion.div>

        <h1 className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-black leading-[1.25] text-white">
          {words.map((w, i) => (
            <motion.span
              key={`${w}-${i}`}
              className="inline-block hero-glow me-2 md:me-3"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5, ease: 'easeOut' }}
            >
              {w}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <p className="mt-3 md:mt-4 text-2xl md:text-4xl lg:text-5xl font-black leading-snug max-w-4xl text-shimmer">
            {t('hero.line2')}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75 }}
          className="mt-6 max-w-2xl text-white/60 text-sm md:text-base leading-relaxed"
        >
          {t('hero.sub')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <PrimaryButton as={Link} to="/agenda">{t('hero.cta1')}</PrimaryButton>
          <GhostButton as={Link} to="/register">{t('hero.cta2')}</GhostButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {[
            [CalendarDays, t('hero.date')],
            [Clock, t('hero.time')],
            [MapPin, t('hero.place')],
          ].map(([Icon, label]) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 px-3 py-2 rounded-xl glass-card border border-persian-navy-700/50 text-xs font-bold text-white/70"
            >
              <Icon size={14} className="text-persian-blue-300" />
              {label}
            </span>
          ))}
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-white/70">
        <span className="relative w-6 h-10 rounded-full border border-white/30">
          <span className="absolute start-1/2 top-2 -translate-x-1/2 w-1 h-2 rounded-full bg-white/70 animate-scroll-wheel" />
        </span>
        <ChevronDown size={16} />
      </a>
    </section>
  )
}
