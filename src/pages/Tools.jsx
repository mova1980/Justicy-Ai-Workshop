import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Wrench, PenLine, Files, FolderTree, Search, ScanText, Server, CheckCircle2,
} from 'lucide-react'
import { PageHero, SectionHeader } from '../components/ui'
import { DeepModal } from '../components/ContentModal'
import { ImageBanner } from '../components/ui'
import { tools } from '../data/workshop'
import { useLang } from '../context/LanguageContext'

const ICONS = { draft: PenLine, summary: Files, classify: FolderTree, search: Search, ocr: ScanText, local: Server }

function ToolBody({ item }) {
  const { L } = useLang()
  return (
    <div>
      {item.img && <ImageBanner src={item.img} />}
      <div className="px-5 pt-5 pb-8">
        <h3 className="text-xl font-black text-white">{L(item, 'title')}</h3>
        <p className="mt-3 text-white/70 text-sm leading-relaxed">{L(item, 'body')}</p>
      </div>
    </div>
  )
}

export default function Tools() {
  const { t, L } = useLang()
  const [stack, setStack] = useState([])

  return (
    <>
      <PageHero icon={Wrench} title={t('tools.title')} subtitle={t('tools.subtitle')} />
      <section className="bg-persian-navy-900 pb-20">
        <div className="container mx-auto px-6">
          <SectionHeader kicker={t('tools.kicker')} title={t('tools.title')} subtitle={t('pillars.click')} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tools.map((item, i) => {
              const Icon = ICONS[item.id] || Wrench
              return (
                <motion.button
                  key={item.id}
                  onClick={() => setStack([{ id: item.id, crumb: L(item, 'title'), node: <ToolBody item={item} /> }])}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.55 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative text-start rounded-2xl overflow-hidden min-h-[240px] ring-1 ring-persian-navy-700/50 hover:ring-persian-blue-400/40 hover:shadow-[0_20px_60px_-15px_rgba(0,85,255,0.45)] group"
                >
                  <img src={item.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-persian-navy-900/70 backdrop-blur-[3px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-persian-navy-900 via-persian-navy-900/40 to-transparent" />
                  <div className="relative p-5 h-full flex flex-col">
                    <span className="p-2 rounded-xl bg-persian-blue-600/20 text-persian-blue-300 w-fit">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-auto font-extrabold text-sm md:text-base text-white">{L(item, 'title')}</h3>
                    <p className="mt-2 text-[12px] text-white/55 leading-relaxed line-clamp-3">{L(item, 'body')}</p>
                  </div>
                </motion.button>
              )
            })}
          </div>
          <div className="mt-10 rounded-2xl border border-persian-navy-700/50 glass-card p-5 flex gap-3">
            <CheckCircle2 className="text-emerald-400 shrink-0 mt-0.5" size={18} />
            <p className="text-sm text-white/60 leading-relaxed">{t('about.body')}</p>
          </div>
        </div>
      </section>
      <DeepModal open={stack.length > 0} stack={stack} setStack={setStack} onClose={() => setStack([])} />
    </>
  )
}
