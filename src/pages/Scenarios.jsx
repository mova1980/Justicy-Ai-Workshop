import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Workflow, Briefcase, Mail, ScrollText, ClipboardList, ScanLine,
  ShieldAlert, ChevronLeft, ChevronRight,
} from 'lucide-react'
import { PageHero, PrimaryButton, GhostButton, StatusPill } from '../components/ui'
import { DeepModal } from '../components/ContentModal'
import { ImageBanner } from '../components/ui'
import { scenarios } from '../data/workshop'
import { useLang } from '../context/LanguageContext'

const ICONS = {
  'busy-case': Briefcase,
  letter: Mail,
  note: ScrollText,
  form: ClipboardList,
  'ocr-scen': ScanLine,
}

function ScenarioWalk({ item }) {
  const { t, L, fmtNum, isRTL } = useLang()
  const [step, setStep] = useState(0)
  const total = item.steps.length
  const s = item.steps[step]
  const NextI = isRTL ? ChevronLeft : ChevronRight
  const PrevI = isRTL ? ChevronRight : ChevronLeft

  return (
    <div>
      {item.img && <ImageBanner src={item.img} />}
      <div className="px-4 sm:px-5 pt-5 pb-8">
        <h3 className="text-xl font-black text-white">{L(item, 'title')}</h3>
        <div className="mt-3 rounded-2xl border border-gold-accent-500/25 bg-gold-accent-500/10 p-3.5 flex gap-3">
          <ShieldAlert size={16} className="text-gold-accent-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-[11px] font-extrabold text-gold-accent-400 mb-1">{t('scenarios.warning')}</div>
            <p className="text-sm text-white/75 leading-relaxed">{L(item, 'warn')}</p>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <StatusPill>
            {t('scenarios.step')} {fmtNum(step + 1)} {t('scenarios.of')} {fmtNum(total)}
          </StatusPill>
          <div className="flex-1 mx-3 h-1 rounded-full bg-persian-navy-700 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-persian-blue-400 to-persian-blue-600 rounded-full transition-all"
              style={{ width: `${((step + 1) / total) * 100}%` }}
            />
          </div>
        </div>

        <motion.div
          key={step}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 rounded-2xl border border-persian-navy-700/50 bg-persian-navy-900/40 p-4"
        >
          <div className="text-[11px] font-extrabold text-persian-blue-300 mb-1">
            {t('scenarios.step')} {fmtNum(step + 1)}
          </div>
          <h4 className="font-extrabold text-white">{L(s, 'title')}</h4>
          <p className="mt-2 text-sm text-white/65 leading-relaxed">{L(s, 'body')}</p>
        </motion.div>

        <div className="mt-5 flex flex-col sm:flex-row gap-2">
          {step > 0 && (
            <GhostButton className="px-5 py-2.5 text-sm" onClick={() => setStep((x) => x - 1)}>
              <PrevI size={16} /> {t('scenarios.prev')}
            </GhostButton>
          )}
          {step < total - 1 ? (
            <PrimaryButton className="px-5 py-2.5 text-sm" onClick={() => setStep((x) => x + 1)}>
              {t('scenarios.next')} <NextI size={16} />
            </PrimaryButton>
          ) : (
            <span className="inline-flex items-center px-5 py-2.5 rounded-full bg-emerald-500/15 text-emerald-300 text-sm font-extrabold border border-emerald-500/25">
              {t('scenarios.done')}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default function Scenarios() {
  const { t, L } = useLang()
  const [stack, setStack] = useState([])

  return (
    <>
      <PageHero icon={Workflow} title={t('scenarios.title')} subtitle={t('scenarios.subtitle')} />
      <section className="bg-persian-navy-900 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scenarios.map((sc, i) => {
              const Icon = ICONS[sc.id] || Workflow
              return (
                <motion.button
                  key={sc.id}
                  onClick={() => setStack([{ id: sc.id, crumb: L(sc, 'title'), node: <ScenarioWalk item={sc} /> }])}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.55 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative text-start rounded-2xl overflow-hidden min-h-[200px] sm:min-h-[250px] ring-1 ring-persian-navy-700/50 hover:ring-persian-blue-400/40 hover:shadow-[0_20px_60px_-15px_rgba(0,85,255,0.45)]"
                >
                  <img src={sc.img} alt="" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-persian-navy-900/70 backdrop-blur-[3px]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-persian-navy-900 to-transparent" />
                  <div className="relative p-5 h-full flex flex-col">
                    <span className="p-2 rounded-xl bg-persian-blue-600/20 text-persian-blue-300 w-fit">
                      <Icon size={22} />
                    </span>
                    <h3 className="mt-auto font-extrabold text-sm md:text-base text-white">{L(sc, 'title')}</h3>
                    <span className="mt-2 text-[11px] font-extrabold text-persian-blue-300">{t('scenarios.start')}</span>
                  </div>
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
