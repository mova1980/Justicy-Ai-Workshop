import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BookOpen, Languages, Scale, ShieldAlert, MonitorPlay, Users,
} from 'lucide-react'
import { PageHero } from '../components/ui'
import { DeepModal } from '../components/ContentModal'
import { methods } from '../data/workshop'
import { useLang } from '../context/LanguageContext'

const ICONS = {
  simple: Languages,
  examples: Scale,
  sec: ShieldAlert,
  demo: MonitorPlay,
  interactive: Users,
}

function MethodBody({ item }) {
  const { L } = useLang()
  return (
    <div className="px-5 pt-6 pb-8">
      <h3 className="text-xl font-black text-white">{L(item, 'title')}</h3>
      <p className="mt-3 text-white/70 text-sm leading-relaxed">{L(item, 'body')}</p>
    </div>
  )
}

export default function Method() {
  const { t, L, fmtNum } = useLang()
  const [stack, setStack] = useState([])

  return (
    <>
      <PageHero icon={BookOpen} title={t('method.title')} subtitle={t('method.subtitle')} />
      <section className="bg-persian-navy-900 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {methods.map((m, i) => {
              const Icon = ICONS[m.id] || BookOpen
              return (
                <motion.button
                  key={m.id}
                  onClick={() => setStack([{ id: m.id, crumb: L(m, 'title'), node: <MethodBody item={m} /> }])}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.55 }}
                  whileHover={{ y: -6 }}
                  className="text-start rounded-2xl border border-persian-navy-700/50 glass-card p-5"
                >
                  <span className="p-2 rounded-xl bg-persian-blue-600/20 text-persian-blue-300 inline-flex shadow-[0_0_25px_rgba(0,85,255,0.3)]">
                    <Icon size={22} />
                  </span>
                  <div className="mt-4 text-[11px] font-extrabold text-persian-blue-300">{fmtNum(String(i + 1).padStart(2, '0'))}</div>
                  <h3 className="mt-1 font-extrabold text-sm md:text-base text-white">{L(m, 'title')}</h3>
                  <p className="mt-2 text-[12px] text-white/55 leading-relaxed line-clamp-4">{L(m, 'body')}</p>
                  <span className="mt-4 inline-block text-[11px] font-extrabold text-persian-blue-300">{t('pillars.click')}</span>
                </motion.button>
              )
            })}
          </div>
        </div>
      </section>
      <DeepModal open={stack.length > 0} stack={stack} setStack={setStack} onClose={() => setStack([])} />
    </>
  )
}
