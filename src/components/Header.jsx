import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

const links = [
  { to: '/', key: 'nav.home' },
  { to: '/agenda', key: 'nav.agenda' },
  { to: '/tools', key: 'nav.tools' },
  { to: '/security', key: 'nav.security' },
  { to: '/method', key: 'nav.method' },
  { to: '/scenarios', key: 'nav.scenarios' },
]

const moreLinks = [
  { to: '/partners', key: 'nav.partners' },
  { to: '/poster', key: 'nav.poster' },
]

const compactLinks = links.slice(0, 4)
const compactMore = [...links.slice(4), ...moreLinks]

function Item({ to, end, children, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        `px-2.5 xl:px-3 py-2 rounded-xl text-[12px] xl:text-[13px] font-extrabold whitespace-nowrap transition-colors min-h-[36px] inline-flex items-center ${
          isActive
            ? 'bg-persian-blue-600/20 text-persian-blue-200 border border-persian-blue-500/20'
            : 'text-white/60 hover:text-white hover:bg-white/5 border border-transparent'
        }`
      }
    >
      {children}
    </NavLink>
  )
}

function MoreMenu({ items, isRTL, t }) {
  return (
    <div className="relative group/drop">
      <button className="px-2.5 xl:px-3 py-2 rounded-xl text-[12px] xl:text-[13px] font-extrabold text-white/60 hover:text-white hover:bg-white/5 inline-flex items-center gap-1 min-h-[36px]">
        {t('nav.more')}
        <ChevronDown size={14} />
      </button>
      <div className={`dropdown-panel absolute top-full pt-3 w-56 ${isRTL ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'}`}>
        <div className="rounded-2xl bg-persian-navy-800/95 backdrop-blur-xl border border-persian-navy-700/50 shadow-2xl p-2">
          {items.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className="block px-3 py-2.5 rounded-xl text-sm font-bold text-white/70 hover:bg-persian-blue-600/15 hover:text-persian-blue-200"
            >
              {t(l.key)}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}

function Logos({ t }) {
  return (
    <Link to="/" className="relative flex items-center gap-2 sm:gap-3 md:gap-4 shrink-0 min-w-0">
      <span aria-hidden className="absolute -inset-3 md:-inset-4 logo-halo rounded-full pointer-events-none" />
      <img
        src="/logos/merc.png"
        alt={t('partners.merc')}
        className="relative h-10 sm:h-12 md:h-[52px] lg:h-[58px] w-auto max-w-[42vw] sm:max-w-[200px] md:max-w-none object-contain logo-glow"
      />
      <img
        src="/logos/judiciary.png"
        alt={t('partners.judiciary')}
        className="relative h-10 w-10 sm:h-12 sm:w-12 md:h-[52px] md:w-[52px] lg:h-[58px] lg:w-[58px] rounded-full object-cover logo-glow shrink-0"
      />
    </Link>
  )
}

export default function Header() {
  const { t, lang, setLang, isRTL } = useLang()
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  useEffect(() => { setOpen(false) }, [loc.pathname])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]">
      <div className="announce-gradient text-center text-[10px] sm:text-[11px] md:text-xs font-bold text-white/80 py-1.5 px-3 sm:px-4 border-b border-white/5">
        <span className="sm:hidden text-gold-accent-400 line-clamp-1">{t('announce.today')}</span>
        <span className="hidden sm:inline">
          <span className="text-gold-accent-400">«{t('announce.quote')}»</span>
          <span className="text-white/40 mx-2">— {t('announce.quoteBy')}</span>
          <span className="hidden md:inline text-persian-blue-200/80"> · {t('announce.city')}</span>
        </span>
      </div>

      <div className="bg-persian-navy-900/90 backdrop-blur-xl border-b border-persian-navy-700/50">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 min-h-[68px] sm:min-h-[80px] md:min-h-[88px] flex items-center gap-2 sm:gap-3 md:gap-4">
          <Logos t={t} />

          <nav className="hidden xl:flex items-center gap-0.5 mx-auto">
            {links.map((l) => (
              <Item key={l.to} to={l.to} end={l.to === '/'}>{t(l.key)}</Item>
            ))}
            <MoreMenu items={moreLinks} isRTL={isRTL} t={t} />
          </nav>

          <nav className="hidden lg:flex xl:hidden items-center gap-0.5 mx-auto">
            {compactLinks.map((l) => (
              <Item key={l.to} to={l.to} end={l.to === '/'}>{t(l.key)}</Item>
            ))}
            <MoreMenu items={compactMore} isRTL={isRTL} t={t} />
          </nav>

          <div className="ms-auto flex items-center gap-1.5 sm:gap-2 shrink-0">
            <button
              onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
              className="px-2 sm:px-2.5 py-1.5 rounded-lg border border-persian-navy-600 text-[11px] font-extrabold text-white/70 hover:text-white hover:bg-white/10 min-h-[36px] min-w-[36px]"
              aria-label="language"
            >
              {lang === 'fa' ? t('nav.langEn') : t('nav.langFa')}
            </button>
            <Link
              to="/register"
              className="hidden sm:inline-flex px-3 md:px-4 py-2 rounded-full bg-persian-blue-600 text-white text-[12px] font-extrabold shadow-[0_0_20px_rgba(0,85,255,0.3)] hover:bg-persian-blue-500 min-h-[36px] items-center"
            >
              {t('nav.register')}
            </Link>
            <button
              className="lg:hidden p-2.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
              onClick={() => setOpen((v) => !v)}
              aria-label="menu"
              aria-expanded={open}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden overflow-hidden border-t border-persian-navy-700/50"
            >
              <div className="container mx-auto px-3 sm:px-4 py-3 flex flex-col gap-1 pb-[max(1rem,env(safe-area-inset-bottom))] max-h-[min(70dvh,calc(100dvh-7rem))] overflow-y-auto">
                {[...links, ...moreLinks].map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3.5 rounded-xl text-sm font-extrabold min-h-[48px] flex items-center ${
                      loc.pathname === l.to
                        ? 'bg-persian-blue-600/20 text-persian-blue-200'
                        : 'text-white/70 hover:bg-white/5'
                    }`}
                  >
                    {t(l.key)}
                  </NavLink>
                ))}
                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="mt-2 mx-1 mb-1 px-4 py-3.5 rounded-full bg-persian-blue-600 text-white text-sm font-extrabold text-center shadow-[0_0_20px_rgba(0,85,255,0.3)]"
                >
                  {t('nav.register')}
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
