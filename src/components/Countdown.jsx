import { useEffect, useState } from 'react'
import { EVENT_END, EVENT_START } from '../data/workshop'
import { useLang } from '../context/LanguageContext'

export default function Countdown() {
  const { t, fmtNum } = useLang()
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(id)
  }, [])

  const start = new Date(EVENT_START).getTime()
  const end = new Date(EVENT_END).getTime()

  if (now >= start && now <= end) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-5 py-4 text-center">
        <div className="text-emerald-300 font-black">{t('event.live')}</div>
        <div className="text-white/50 text-xs mt-1 font-bold">{t('hero.place')} · {t('hero.time')}</div>
      </div>
    )
  }
  if (now > end) {
    return (
      <div className="rounded-2xl border border-persian-navy-600/50 bg-persian-navy-800/50 px-5 py-4 text-center text-white/50 font-bold">
        {t('event.ended')}
      </div>
    )
  }

  let diff = Math.max(0, start - now)
  const days = Math.floor(diff / 86400000); diff -= days * 86400000
  const hours = Math.floor(diff / 3600000); diff -= hours * 3600000
  const minutes = Math.floor(diff / 60000); diff -= minutes * 60000
  const seconds = Math.floor(diff / 1000)

  const cells = [
    [days, t('event.days')],
    [hours, t('event.hours')],
    [minutes, t('event.minutes')],
    [seconds, t('event.seconds')],
  ]

  return (
    <div>
      <div className="text-[11px] font-extrabold text-persian-blue-300 mb-3 text-center">{t('event.soon')}</div>
      <div className="grid grid-cols-4 gap-2">
        {cells.map(([n, label]) => (
          <div key={label} className="rounded-2xl bg-persian-navy-800/70 border border-persian-navy-700/50 py-3 text-center">
            <div className="text-xl md:text-2xl font-black text-white tabular-nums" dir="ltr">{fmtNum(String(n).padStart(2, '0'))}</div>
            <div className="text-[10px] font-bold text-white/40 mt-1">{label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
