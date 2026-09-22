import {
  ShieldAlert, CheckCircle2, ListChecks, Lightbulb, ChevronLeft, ChevronRight,
} from 'lucide-react'
import { useLang } from '../context/LanguageContext'
import { ImageBanner, ModalShell, StackBar, StatusPill } from './ui'

export function TopicBody({ topic, onPush }) {
  const { t, L, isRTL } = useLang()
  const Chevron = isRTL ? ChevronLeft : ChevronRight
  const examples = L(topic, 'examples')
  const steps = L(topic, 'steps')
  const nested = topic.nested || []

  return (
    <div className="px-5 pb-8">
      <p className="text-white/70 text-sm leading-relaxed">{L(topic, 'body')}</p>

      {examples?.length ? (
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="p-2 rounded-xl bg-persian-blue-600/20 text-persian-blue-300">
              <Lightbulb size={16} />
            </span>
            <h4 className="font-extrabold text-sm">{t('agenda.examples')}</h4>
          </div>
          <ul className="space-y-2">
            {examples.map((e) => (
              <li key={e} className="flex gap-2 text-sm text-white/65 leading-relaxed">
                <CheckCircle2 size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                {e}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {steps?.length ? (
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="p-2 rounded-xl bg-persian-blue-600/20 text-persian-blue-300">
              <ListChecks size={16} />
            </span>
            <h4 className="font-extrabold text-sm">{t('agenda.steps')}</h4>
          </div>
          <ol className="space-y-2">
            {steps.map((e, i) => (
              <li key={e} className="flex gap-3 text-sm text-white/65 leading-relaxed">
                <span className="h-6 w-6 rounded-lg bg-persian-blue-600/20 text-persian-blue-200 text-[11px] font-black flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                {e}
              </li>
            ))}
          </ol>
        </div>
      ) : null}

      {L(topic, 'security') && (
        <div className="mt-6 rounded-2xl border border-gold-accent-500/25 bg-gold-accent-500/10 p-4 flex gap-3">
          <ShieldAlert size={18} className="text-gold-accent-400 shrink-0 mt-0.5" />
          <div>
            <div className="text-[11px] font-extrabold text-gold-accent-400 mb-1">{t('agenda.note')}</div>
            <p className="text-sm text-white/75 leading-relaxed">{L(topic, 'security')}</p>
          </div>
        </div>
      )}

      {nested.length > 0 && (
        <div className="mt-7">
          <h4 className="font-extrabold text-sm mb-3">{t('agenda.nested')}</h4>
          <div className="grid gap-2">
            {nested.map((n) => (
              <button
                key={n.id}
                onClick={() => onPush({
                  id: n.id,
                  crumb: L(n, 'title'),
                  node: <NestedBody item={n} />,
                })}
                className="text-start w-full rounded-xl border border-persian-navy-700/60 bg-persian-navy-900/40 hover:border-persian-blue-500/40 hover:bg-persian-blue-600/10 p-3.5 flex items-center gap-3 transition-all"
              >
                <span className="flex-1">
                  <span className="block font-extrabold text-sm text-white">{L(n, 'title')}</span>
                  <span className="block text-[12px] text-white/45 mt-0.5 line-clamp-2">{L(n, 'body')}</span>
                </span>
                <Chevron size={16} className="text-persian-blue-300 shrink-0" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function NestedBody({ item }) {
  const { L } = useLang()
  return (
    <div className="px-5 pb-8">
      <h3 className="text-xl font-black text-white mb-3">{L(item, 'title')}</h3>
      <p className="text-white/70 text-sm leading-relaxed">{L(item, 'body')}</p>
    </div>
  )
}

export function PillarBody({ pillar }) {
  const { L } = useLang()
  const points = L(pillar, 'points')
  return (
    <div>
      {pillar.img && <ImageBanner src={pillar.img} />}
      <div className="px-5 pt-5 pb-8">
        <h3 className="text-xl md:text-2xl font-black text-white">{L(pillar, 'title')}</h3>
        <p className="mt-2 text-persian-blue-200 text-sm font-bold">{L(pillar, 'lead')}</p>
        <p className="mt-4 text-white/65 text-sm leading-relaxed">{L(pillar, 'body')}</p>
        <ul className="mt-5 space-y-2">
          {points.map((p) => (
            <li key={p} className="flex gap-2 text-sm text-white/70">
              <CheckCircle2 size={16} className="text-persian-blue-300 mt-0.5 shrink-0" />
              {p}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export function SectionOverview({ section, onOpenTopic }) {
  const { t, L, fmtNum } = useLang()
  return (
    <div>
      {section.img && <ImageBanner src={section.img} />}
      <div className="px-5 pt-5 pb-8">
        <div className="flex items-center gap-2 mb-3">
          <StatusPill>{t('agenda.min')} {fmtNum(section.minutes)}</StatusPill>
          <StatusPill tone="gold">{fmtNum(section.topics.length)} {t('agenda.topics')}</StatusPill>
        </div>
        <h3 className="text-xl md:text-2xl font-black text-white leading-snug">{L(section, 'title')}</h3>
        <p className="mt-3 text-white/65 text-sm leading-relaxed">{L(section, 'lead')}</p>
        <div className="mt-6 grid gap-2">
          {section.topics.map((tp, i) => (
            <button
              key={tp.id}
              onClick={() => onOpenTopic(tp)}
              className="text-start rounded-xl border border-persian-navy-700/60 bg-persian-navy-900/40 hover:border-persian-blue-500/40 p-3.5 flex gap-3 transition-all"
            >
              <span className="h-8 w-8 rounded-lg bg-persian-blue-600/20 text-persian-blue-200 text-xs font-black flex items-center justify-center shrink-0">
                {fmtNum(i + 1)}
              </span>
              <span>
                <span className="block font-extrabold text-sm text-white">{L(tp, 'title')}</span>
                <span className="block text-[12px] text-white/45 mt-0.5 line-clamp-2">{L(tp, 'body')}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export function DeepModal({ open, stack, setStack, onClose }) {
  const { t } = useLang()
  const top = stack[stack.length - 1]

  const popTo = (i) => setStack((s) => s.slice(0, i + 1))

  return (
    <ModalShell open={open} onClose={onClose} wide>
      {top && (
        <>
          <StackBar stack={stack} onPop={popTo} onClose={onClose} />
          {stack.length > 1 && (
            <div className="px-5">
              <button
                onClick={() => popTo(stack.length - 2)}
                className="text-[12px] font-extrabold text-persian-blue-300 hover:text-persian-blue-200"
              >
                ← {t('agenda.back')}
              </button>
            </div>
          )}
          {top.node}
        </>
      )}
    </ModalShell>
  )
}
