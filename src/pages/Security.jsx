import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ShieldAlert, CheckSquare, Square } from 'lucide-react'
import { PageHero, SectionHeader, StatusPill } from '../components/ui'
import { DeepModal, TopicBody } from '../components/ContentModal'
import { ImageBanner } from '../components/ui'
import { checklist, findSection } from '../data/workshop'
import { useLang } from '../context/LanguageContext'

const KEY = 'ai-workshop-checklist'

export default function Security() {
  const { t, L, lang } = useLang()
  const section = findSection('sec')
  const [checked, setChecked] = useState(() => {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}') } catch { return {} }
  })
  const [stack, setStack] = useState([])

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(checked)) } catch { /* ignore */ }
  }, [checked])

  const toggle = (id) => setChecked((c) => ({ ...c, [id]: !c[id] }))
  const done = checklist.filter((c) => checked[c.id]).length

  return (
    <>
      <PageHero icon={ShieldAlert} title={t('security.title')} subtitle={t('security.subtitle')} />
      <section className="bg-persian-navy-900 pb-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-4 mb-12">
            {section.topics.map((tp, i) => (
              <motion.button
                key={tp.id}
                onClick={() => setStack([{
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
                }])}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.55 }}
                whileHover={{ y: -6 }}
                className="text-start rounded-2xl overflow-hidden border border-persian-navy-700/50 glass-card"
              >
                <div className="relative h-36">
                  <img src={tp.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-persian-navy-900 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-extrabold text-sm text-white">{L(tp, 'title')}</h3>
                  <p className="mt-2 text-[12px] text-white/50 line-clamp-3 leading-relaxed">{L(tp, 'body')}</p>
                  <span className="mt-3 inline-block text-[11px] font-extrabold text-persian-blue-300">{t('pillars.click')}</span>
                </div>
              </motion.button>
            ))}
          </div>

          <SectionHeader title={t('security.checklistTitle')} subtitle={t('security.saved')} />
          <div className="max-w-3xl mx-auto rounded-2xl border border-persian-navy-700/50 glass-card p-4 sm:p-5 md:p-7">
            <div className="flex items-center justify-between mb-4">
              <StatusPill tone={done === checklist.length ? 'ok' : 'info'}>
                {done} / {checklist.length}
              </StatusPill>
            </div>
            <ul className="space-y-2">
              {checklist.map((c) => {
                const on = !!checked[c.id]
                return (
                  <li key={c.id}>
                    <button
                      onClick={() => toggle(c.id)}
                      className={`w-full text-start flex gap-3 items-start rounded-xl px-3 py-3 min-h-[48px] border transition-all ${
                        on
                          ? 'border-emerald-500/30 bg-emerald-500/10'
                          : 'border-persian-navy-700/50 hover:bg-white/5'
                      }`}
                    >
                      {on ? <CheckSquare size={18} className="text-emerald-400 shrink-0 mt-0.5" /> : <Square size={18} className="text-white/30 shrink-0 mt-0.5" />}
                      <span className={`text-sm leading-relaxed ${on ? 'text-white' : 'text-white/70'}`}>
                        {lang === 'fa' ? c.fa : c.en}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </section>
      <DeepModal open={stack.length > 0} stack={stack} setStack={setStack} onClose={() => setStack([])} />
    </>
  )
}
