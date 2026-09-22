import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  GraduationCap, Cog, Shield, TrendingUp, Clock, ArrowLeft, ArrowRight,
  CalendarDays, MapPin, Users,
} from 'lucide-react'
import Hero from '../components/Hero'
import Countdown from '../components/Countdown'
import { SectionHeader, PrimaryButton, GhostButton, StatusPill } from '../components/ui'
import { DeepModal, PillarBody, SectionOverview, TopicBody } from '../components/ContentModal'
import { ImageBanner } from '../components/ui'
import { pillars, sections } from '../data/workshop'
import { useLang } from '../context/LanguageContext'

const PILLAR_ICONS = { train: GraduationCap, practice: Cog, security: Shield, productivity: TrendingUp }

export default function Home() {
  const { t, L, fmtNum, isRTL } = useLang()
  const Arrow = isRTL ? ArrowLeft : ArrowRight
  const [stack, setStack] = useState([])

  const openPillar = (p) => {
    setStack([{ id: p.id, crumb: L(p, 'title'), node: <PillarBody pillar={p} /> }])
  }

  const openSection = (s) => {
    const openTopic = (tp) => {
      setStack((cur) => [
        cur[0],
        {
          id: tp.id,
          crumb: L(tp, 'title'),
          node: (
            <div>
              {tp.img && <ImageBanner src={tp.img} />}
              <div className="px-4 sm:px-5 pt-4">
                <h3 className="text-lg sm:text-xl font-black text-white mb-3">{L(tp, 'title')}</h3>
              </div>
              <TopicBody
                topic={tp}
                onPush={(layer) => setStack((c) => [...c, layer])}
              />
            </div>
          ),
        },
      ])
    }
    setStack([{
      id: s.id,
      crumb: L(s, 'title'),
      node: <SectionOverview section={s} onOpenTopic={openTopic} />,
    }])
  }

  return (
    <>
      <Hero />

      <section id="about" className="relative py-12 sm:py-16 md:py-20 bg-persian-navy-900">
        <div className="section-divider mb-10 sm:mb-16" />
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader kicker={t('about.kicker')} title={t('about.title')} subtitle={t('about.body')} />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto">
            {[
              [fmtNum(120), t('about.min')],
              [fmtNum(4), t('about.sections')],
              [fmtNum(4), t('about.pillars')],
              [fmtNum(3), t('partners.title')],
            ].map(([n, l], i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.55 }}
                className="rounded-2xl glass-card border border-persian-navy-700/50 p-3 sm:p-4 text-center"
              >
                <div className="text-xl md:text-2xl font-black text-white">{n}</div>
                {l && <div className="text-[11px] font-bold text-white/40 mt-1">{l}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-4 sm:py-6 bg-persian-navy-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="rounded-2xl border border-persian-navy-700/50 glass-card p-4 sm:p-6 md:p-8 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div>
              <div className="text-[11px] font-extrabold text-persian-blue-300 mb-2">{t('partners.title')}</div>
              <h3 className="text-xl md:text-2xl font-black text-white mb-4">{t('partners.subtitle')}</h3>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <img src="/logos/merc.png" alt={t('partners.merc')} className="h-10 sm:h-14 w-auto max-w-[70%] sm:max-w-none object-contain logo-glow" />
                <img src="/logos/judiciary.png" alt={t('partners.judiciary')} className="h-10 w-10 sm:h-14 sm:w-14 rounded-full object-cover logo-glow" />
              </div>
              <Link to="/partners" className="inline-flex items-center gap-2 mt-5 text-sm font-extrabold text-persian-blue-300 hover:text-persian-blue-200">
                {t('common.more')} <Arrow size={16} />
              </Link>
            </div>
            <Countdown />
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 md:py-20 bg-persian-navy-900">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader kicker={t('pillars.click')} title={t('pillars.title')} subtitle={t('pillars.subtitle')} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {pillars.map((p, i) => {
              const Icon = PILLAR_ICONS[p.id]
              return (
                <motion.button
                  key={p.id}
                  onClick={() => openPillar(p)}
                  initial={{ opacity: 0, y: 40, rotateX: -8 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.55 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ transformPerspective: 800 }}
                  className="relative text-start rounded-2xl overflow-hidden group min-h-[220px] sm:min-h-[260px] lg:min-h-[280px] ring-1 ring-persian-navy-700/50 hover:ring-persian-blue-400/40 hover:shadow-[0_20px_60px_-15px_rgba(0,85,255,0.45)]"
                >
                  <img src={p.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-persian-navy-900/70 backdrop-blur-[3px] group-hover:bg-persian-navy-900/60 transition-colors" />
                  <div className="absolute inset-0 bg-gradient-to-t from-persian-navy-900 via-persian-navy-900/50 to-transparent" />
                  <div className="relative p-5 h-full flex flex-col">
                    <span className="p-2 rounded-xl bg-persian-blue-600/20 text-persian-blue-300 w-fit shadow-[0_0_25px_rgba(0,85,255,0.3)]">
                      {Icon && <Icon size={22} />}
                    </span>
                    <h3 className="mt-auto font-extrabold text-base text-white">{L(p, 'title')}</h3>
                    <p className="mt-2 text-[12px] text-white/60 leading-relaxed">{L(p, 'lead')}</p>
                    <span className="mt-3 text-[11px] font-extrabold text-persian-blue-300">{t('pillars.click')}</span>
                  </div>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 md:py-20 bg-persian-navy-900">
        <div className="container mx-auto px-4 sm:px-6">
          <SectionHeader kicker={t('agenda.kicker')} title={t('agenda.title')} subtitle={t('agenda.subtitle')} />
          <div className="grid md:grid-cols-2 gap-4">
            {sections.map((s, i) => (
              <motion.button
                key={s.id}
                onClick={() => openSection(s)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                className="text-start rounded-2xl overflow-hidden border border-persian-navy-700/50 glass-card group"
              >
                <div className="relative h-36">
                  <img src={s.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-persian-navy-900 to-transparent" />
                  <div className="absolute top-3 start-3 flex gap-2">
                    <StatusPill>{fmtNum(s.num)}</StatusPill>
                    <StatusPill tone="gold">
                      <Clock size={11} /> {fmtNum(s.minutes)} {t('agenda.min')}
                    </StatusPill>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold text-sm md:text-base text-white leading-snug">{L(s, 'title')}</h3>
                  <p className="mt-2 text-[12px] text-white/50 leading-relaxed line-clamp-2">{L(s, 'lead')}</p>
                  <div className="mt-3 text-[11px] font-extrabold text-persian-blue-300 inline-flex items-center gap-1">
                    {t('agenda.open')} <Arrow size={14} />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
          <div className="text-center mt-8">
            <GhostButton as={Link} to="/agenda">{t('nav.agenda')}</GhostButton>
          </div>
        </div>
      </section>

      <section className="relative py-12 sm:py-16 bg-persian-navy-900">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-persian-navy-700/50 relative">
            <img src="/img/bg-court.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-persian-navy-900/75 backdrop-blur-[2px]" />
            <div className="relative p-5 sm:p-8 md:p-12 grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
              <div>
                <div className="text-[11px] font-extrabold text-persian-blue-300 mb-2">{t('event.title')}</div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-4">{t('hero.place')}</h3>
                <ul className="space-y-3 text-sm text-white/70">
                  <li className="flex gap-2"><CalendarDays size={16} className="text-persian-blue-300 mt-0.5" />{t('event.dateVal')}</li>
                  <li className="flex gap-2"><Clock size={16} className="text-persian-blue-300 mt-0.5" />{t('event.timeVal')}</li>
                  <li className="flex gap-2"><MapPin size={16} className="text-persian-blue-300 mt-0.5" />{t('event.addrVal')}</li>
                  <li className="flex gap-2"><Users size={16} className="text-persian-blue-300 mt-0.5" />{t('about.audience')}</li>
                </ul>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:justify-end">
                <PrimaryButton as={Link} to="/register">{t('hero.cta2')}</PrimaryButton>
                <GhostButton as={Link} to="/poster">{t('nav.poster')}</GhostButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DeepModal open={stack.length > 0} stack={stack} setStack={setStack} onClose={() => setStack([])} />
    </>
  )
}
