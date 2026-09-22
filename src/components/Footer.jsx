import { Link } from 'react-router-dom'
import { MapPin, Clock, CalendarDays } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLang()
  const year = 2026

  return (
    <footer className="relative bg-persian-navy-900 mt-8 pb-[env(safe-area-inset-bottom)]">
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,85,255,.6), transparent)' }} />
      <div className="absolute -top-20 start-1/4 w-80 h-80 rounded-full bg-persian-blue-700/15 blur-[110px] pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 py-10 sm:py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
        <div>
          <div className="relative inline-flex items-center gap-3 mb-4">
            <span aria-hidden className="absolute -inset-4 logo-halo rounded-full" />
            <img src="/logos/merc.png" alt="" className="relative h-10 sm:h-12 w-auto max-w-[180px] object-contain logo-glow" />
            <img src="/logos/judiciary.png" alt="" className="relative h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover logo-glow" />
          </div>
          <p className="text-white/50 text-sm leading-relaxed">{t('footer.about')}</p>
          <p className="mt-4 text-gold-accent-400 font-extrabold text-sm">{t('footer.justice')}</p>
        </div>

        <div>
          <h3 className="text-white font-black mb-4">{t('footer.quick')}</h3>
          <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-sm">
            {[
              ['/agenda', 'nav.agenda'],
              ['/tools', 'nav.tools'],
              ['/security', 'nav.security'],
              ['/scenarios', 'nav.scenarios'],
              ['/register', 'nav.register'],
              ['/poster', 'nav.poster'],
            ].map(([to, k]) => (
              <li key={to}>
                <Link to={to} className="text-white/50 hover:text-persian-blue-300 transition-colors font-bold inline-flex min-h-[36px] items-center">
                  {t(k)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-white font-black mb-4">{t('partners.title')}</h3>
          <ul className="space-y-3 text-sm text-white/50">
            <li>
              <div className="text-white/80 font-extrabold">{t('partners.merc')}</div>
              <div className="text-xs">{t('partners.mercSub')}</div>
            </li>
            <li>
              <div className="text-white/80 font-extrabold">{t('partners.judiciary')}</div>
              <div className="text-xs">{t('partners.judiciarySub')}</div>
            </li>
            <li>
              <div className="text-white/80 font-extrabold">{t('partners.dataGov')}</div>
              <div className="text-xs">{t('partners.dataGovSub')}</div>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-black mb-4">{t('footer.contact')}</h3>
          <ul className="space-y-3 text-sm text-white/60">
            <li className="flex gap-2">
              <CalendarDays size={16} className="text-persian-blue-300 mt-0.5 shrink-0" />
              {t('event.dateVal')}
            </li>
            <li className="flex gap-2">
              <Clock size={16} className="text-persian-blue-300 mt-0.5 shrink-0" />
              {t('event.timeVal')}
            </li>
            <li className="flex gap-2">
              <MapPin size={16} className="text-persian-blue-300 mt-0.5 shrink-0" />
              <span>
                {t('event.placeVal')}
                <br />
                {t('event.addrVal')}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-persian-navy-800 text-center py-5 px-4 text-white/30 text-[11px] sm:text-xs font-bold leading-relaxed">
        <span className="block sm:inline">{t('footer.copy')} · {year}</span>
        <span className="hidden sm:inline mx-2 text-white/15">|</span>
        <span className="block sm:inline mt-1 sm:mt-0">{t('footer.rights')}</span>
        <span className="hidden sm:inline mx-2 text-white/15">|</span>
        <span dir="ltr" className="font-latin text-white/40 block sm:inline mt-1 sm:mt-0">{t('footer.site')}</span>
      </div>
    </footer>
  )
}
