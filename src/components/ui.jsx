import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ChevronRight, ChevronLeft } from 'lucide-react'
import { useLang } from '../context/LanguageContext'

export function SectionHeader({ kicker, title, subtitle, light = false }) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-14 px-1">
      {kicker && (
        <div className={`text-[10px] sm:text-[11px] font-extrabold tracking-wider mb-3 ${light ? 'text-persian-blue-600' : 'text-persian-blue-300'}`}>
          {kicker}
        </div>
      )}
      <h2 className={`text-xl sm:text-2xl md:text-4xl font-black leading-snug ${light ? 'text-persian-navy-900' : 'text-white'}`}>
        {title}
      </h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="mx-auto mt-4 w-20 sm:w-24 h-1 rounded-full bg-gradient-to-r from-persian-blue-400 to-persian-blue-600 origin-center"
      />
      {subtitle && (
        <p className={`mt-3 sm:mt-4 text-[13px] sm:text-sm md:text-base leading-relaxed ${light ? 'text-persian-navy-500' : 'text-white/60'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

export function PageHero({ icon: Icon, title, subtitle, children }) {
  const { isRTL } = useLang()
  return (
    <section className="relative overflow-hidden bg-persian-navy-900 pt-32 sm:pt-36 md:pt-40 pb-10 sm:pb-14 md:pb-16" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#020810] via-persian-navy-900 to-persian-navy-900" />
      <div className="absolute -top-24 start-1/4 w-56 h-56 sm:w-96 sm:h-96 rounded-full bg-persian-blue-700/25 blur-[80px] sm:blur-[110px]" />
      <div className="absolute -bottom-32 end-1/5 w-56 h-56 sm:w-96 sm:h-96 rounded-full bg-[#5b2ee5]/20 blur-[80px] sm:blur-[120px]" />
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{ backgroundImage: 'radial-gradient(rgba(179,209,255,0.35) 1px,transparent 1px)', backgroundSize: '26px 26px' }}
      />
      <div className="relative container mx-auto px-4 sm:px-6 flex items-start gap-3 sm:gap-4">
        {Icon && (
          <span className="p-2.5 sm:p-3.5 rounded-2xl bg-persian-blue-600/20 border border-persian-blue-500/25 text-persian-blue-300 shrink-0">
            <Icon size={24} />
          </span>
        )}
        <div className="min-w-0">
          <h1 className="text-xl sm:text-2xl md:text-4xl font-black text-white leading-snug">{title}</h1>
          {subtitle && <p className="mt-2 sm:mt-2.5 text-white/50 text-[13px] sm:text-sm md:text-base max-w-3xl leading-relaxed">{subtitle}</p>}
          {children}
        </div>
      </div>
    </section>
  )
}

export function StatusPill({ tone = 'info', children }) {
  const map = {
    ok: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/25',
    wait: 'bg-amber-500/15 text-amber-300 border-amber-500/25',
    err: 'bg-red-500/15 text-red-300 border-red-500/25',
    mute: 'bg-persian-navy-700/40 text-persian-navy-300 border-persian-navy-600/50',
    info: 'bg-persian-blue-600/15 text-persian-blue-300 border-persian-blue-500/25',
    gold: 'bg-gold-accent-500/15 text-gold-accent-400 border-gold-accent-500/25',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] font-extrabold border ${map[tone] || map.info}`}>
      {children}
    </span>
  )
}

export function PrimaryButton({ as: Tag = 'button', className = '', children, ...rest }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-3.5 min-h-[44px] rounded-full bg-persian-blue-600 text-white font-bold text-sm sm:text-base shadow-[0_0_30px_rgba(0,85,255,0.3)] hover:bg-persian-blue-500 hover:shadow-[0_0_45px_rgba(0,85,255,0.5)] transition-all ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function GhostButton({ as: Tag = 'button', className = '', children, ...rest }) {
  return (
    <Tag
      className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-3.5 min-h-[44px] rounded-full border-2 border-persian-blue-400/30 text-persian-blue-200 hover:bg-persian-blue-600/10 hover:border-persian-blue-400/60 transition-all font-bold text-sm sm:text-base ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function ModalShell({ open, onClose, children, wide = false }) {
  const { t, isRTL } = useLang()

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => { if (e.key === 'Escape') onClose?.() }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] bg-persian-navy-900/80 backdrop-blur-md flex items-end sm:items-center justify-center p-0 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            initial={{ opacity: 0, y: 40, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.28, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className={`relative bg-persian-navy-800/95 sm:bg-persian-navy-800/80 backdrop-blur-xl border border-persian-navy-700/50 rounded-t-3xl sm:rounded-2xl shadow-2xl w-full ${wide ? 'max-w-4xl' : 'max-w-2xl'} max-h-[92dvh] overflow-hidden flex flex-col pb-[env(safe-area-inset-bottom)]`}
          >
            <div className="sm:hidden mx-auto mt-2 mb-1 h-1 w-10 rounded-full bg-white/20" />
            <button
              onClick={onClose}
              aria-label={t('common.close')}
              className="absolute top-3 end-3 z-10 p-2.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
            >
              <X size={18} />
            </button>
            <div className="overflow-y-auto overscroll-contain">{children}</div>
            <span className="sr-only">{isRTL ? 'rtl' : 'ltr'}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function StackBar({ stack, onPop, onClose }) {
  const { t, isRTL } = useLang()
  const Chevron = isRTL ? ChevronLeft : ChevronRight
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 pt-4 sm:pt-5 pb-2 text-[10px] sm:text-[11px] font-bold text-white/40 flex-wrap pe-12">
      <button onClick={onClose} className="hover:text-persian-blue-300 transition-colors min-h-[32px]">{t('common.home')}</button>
      {stack.map((s, i) => (
        <span key={s.id || i} className="inline-flex items-center gap-1.5 sm:gap-2 min-w-0">
          <Chevron size={12} className="opacity-50 shrink-0" />
          {i < stack.length - 1 ? (
            <button onClick={() => onPop(i)} className="hover:text-persian-blue-300 transition-colors max-w-[88px] sm:max-w-[140px] truncate">
              {s.crumb}
            </button>
          ) : (
            <span className="text-persian-blue-300 max-w-[110px] sm:max-w-[180px] truncate">{s.crumb}</span>
          )}
        </span>
      ))}
      <span className="hidden sm:inline ms-auto text-white/25">{t('common.layer')} {stack.length}</span>
    </div>
  )
}

export function ImageBanner({ src, alt = '', className = '' }) {
  return (
    <div className={`relative h-36 sm:h-44 md:h-56 overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-persian-navy-900 via-persian-navy-900/40 to-persian-navy-900/10" />
    </div>
  )
}
