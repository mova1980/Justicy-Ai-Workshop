import { useState } from 'react'
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
        `px-2.5 xl:px-3 py-2 rounded-xl text-[12px] xl:text-[13px] font-extrabold whitespace-nowrap transition-colors ${
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
      <button className="px-2.5 xl:px-3 py-2 rounded-xl text-[12px] xl:text-[13px] font-extrabold text-white/60 hover:text-white hover:bg-white/5 inline-flex items-center gap-1">
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
    <Link to="/" className="relative flex items-center gap-3 md:gap-4 shrink-0">
      <span aria-hidden className="absolute -inset-4 logo-halo rounded-full pointer-events-none" />
      <img
        src="/logos/merc.png"
        alt={t('partners.merc')}
        className="relative h-12 sm:h-14 md:h-[58px] lg:h-[62px] w-auto logo-glow"
      />
      <img
        src="/logos/judiciary.png"
        alt={t('partners.judiciary')}
        className="relative h-12 w-12 sm:h-14 sm:w-14 md:h-[58px] md:w-[58px] lg:h-[62px] lg:w-[62px] rounded-full object-cover logo-glow"
      />
    </Link>
  )
}

export default function Header() {
  const { t, lang, setLang, isRTL } = useLang()
  const [open, setOpen] = useState(false)
  const loc = useLocation()

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="announce-gradient text-center text-[11px] md:text-xs font-bold text-white/80 py-1.5 px-4 border-b border-white/5">
        <span className="text-gold-accent-400">«{t('announce.quote')}»</span>
        <span className="text-white/40 mx-2">— {t('announce.quoteBy')}</span>
        <span className="hidden md:inline text-persian-blue-200/80"> · {t('announce.city')}</span>
      </div>

      <div className="bg-persian-navy-900/85 backdrop-blur-xl border-b border-persian-navy-700/50">
        <div className="container mx-auto px-4 md:px-6 min-h-[88px] md:min-h-[96px] flex items-center gap-3 md:gap-4">
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

          <div className="ms-auto flex items-center gap-2 shrink-0">
            <button
              onClick={() => setLang(lang === 'fa' ? 'en' : 'fa')}
              className="px-2.5 py-1.5 rounded-lg border border-persian-navy-600 text-[11px] font-extrabold text-white/70 hover:text-white hover:bg-white/10"
              aria-label="language"
            >
              {lang === 'fa' ? t('nav.langEn') : t('nav.langFa')}
            </button>
            <Link
              to="/register"
              className="hidden sm:inline-flex px-4 py-2 rounded-full bg-persian-blue-600 text-white text-[12px] font-extrabold shadow-[0_0_20px_rgba(0,85,255,0.3)] hover:bg-persian-blue-500"
            >
              {t('nav.register')}
            </Link>
            <button
              className="lg:hidden p-2.5 rounded-full text-white/70 hover:text-white hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="menu"
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
              <div className="container mx-auto px-4 py-3 flex flex-col gap-1 pb-4">
                {[...links, ...moreLinks, { to: '/register', key: 'nav.register' }].map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    end={l.to === '/'}
                    onClick={() => setOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-extrabold ${
                      loc.pathname === l.to
                        ? 'bg-persian-blue-600/20 text-persian-blue-200'
                        : 'text-white/70 hover:bg-white/5'
                    }`}
                  >
                    {t(l.key)}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
