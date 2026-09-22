import { useState } from 'react'
import { Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { PageHero, StatusPill } from '../components/ui'
import { DeepModal, SectionOverview, TopicBody } from '../components/ContentModal'
import { ImageBanner } from '../components/ui'
import { sections } from '../data/workshop'
import { useLang } from '../context/LanguageContext'
import { ListChecks } from 'lucide-react'

export default function Agenda() {
  const { t, L, fmtNum } = useLang()
  const [stack, setStack] = useState([])

  const openTopic = (sectionCrumb) => (tp) => {
    setStack((cur) => {
      const base = cur[0] ? [cur[0]] : [{ id: 'root', crumb: sectionCrumb, node: null }]
      return [
        base[0],
        {
          id: tp.id,
          crumb: L(tp, 'title'),
          node: (
            <div>
              {tp.img && <ImageBanner src={tp.img} />}
              <div className="px-4 sm:px-5 pt-4">
                <h3 className="text-xl font-black text-white mb-3">{L(tp, 'title')}</h3>
              </div>
              <TopicBody topic={tp} onPush={(layer) => setStack((c) => [...c, layer])} />
            </div>
          ),
        },
      ]
    })
  }

  const openSection = (s) => {
    setStack([{
      id: s.id,
      crumb: L(s, 'title'),
      node: <SectionOverview section={s} onOpenTopic={openTopic(L(s, 'title'))} />,
    }])
  }

  const total = sections.reduce((a, s) => a + s.minutes, 0)

  return (
    <>
      <PageHero
        icon={ListChecks}
        title={t('agenda.title')}
        subtitle={t('agenda.subtitle')}
      />
      <section className="bg-persian-navy-900 pb-20">
        <div className="container mx-auto px-4 sm:px-6 -mt-4">
          <div className="flex flex-wrap gap-2 mb-8">
            <StatusPill>{fmtNum(total)} {t('agenda.min')}</StatusPill>
            <StatusPill tone="gold">{fmtNum(sections.length)} {t('about.sections')}</StatusPill>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute start-7 top-0 bottom-0 w-px bg-gradient-to-b from-persian-blue-500/60 via-persian-blue-500/20 to-transparent" />
            <div className="space-y-5">
              {sections.map((s, i) => (
                <motion.article
                  key={s.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.55 }}
                  className="md:ps-16 relative"
                >
                  <span className="hidden md:flex absolute start-4 top-8 h-7 w-7 rounded-full bg-persian-blue-600 text-white text-[11px] font-black items-center justify-center shadow-[0_0_20px_rgba(0,85,255,0.4)]">
                    {fmtNum(s.num)}
                  </span>
                  <button
                    onClick={() => openSection(s)}
                    className="w-full text-start rounded-2xl overflow-hidden border border-persian-navy-700/50 glass-card hover:border-persian-blue-500/40 transition-all group"
                  >
                    <div className="grid md:grid-cols-5">
                      <div className="relative md:col-span-2 h-40 md:h-auto min-h-[160px]">
                        <img src={s.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-persian-navy-900/25" />
                      </div>
                      <div className="md:col-span-3 p-5 md:p-6">
                        <div className="flex flex-wrap gap-2 mb-3">
                          <StatusPill>
                            <Clock size={11} /> {fmtNum(s.minutes)} {t('agenda.min')}
                          </StatusPill>
                          <StatusPill tone="gold">{fmtNum(s.topics.length)} {t('agenda.topics')}</StatusPill>
                        </div>
                        <h2 className="font-black text-lg text-white leading-snug">{L(s, 'title')}</h2>
                        <p className="mt-2 text-sm text-white/55 leading-relaxed">{L(s, 'lead')}</p>
                        <ul className="mt-4 space-y-1.5">
                          {s.topics.map((tp) => (
                            <li key={tp.id} className="text-[12px] text-white/45 font-bold">• {L(tp, 'title')}</li>
                          ))}
                        </ul>
                        <span className="inline-block mt-4 text-[12px] font-extrabold text-persian-blue-300 group-hover:text-persian-blue-200">
                          {t('agenda.open')}
                        </span>
                      </div>
                    </div>
                  </button>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <DeepModal open={stack.length > 0} stack={stack} setStack={setStack} onClose={() => setStack([])} />
    </>
  )
}
