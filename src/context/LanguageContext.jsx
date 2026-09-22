import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import fa from '../i18n/fa'
import en from '../i18n/en'

const dicts = { fa, en }
const FA_DIGITS = '۰۱۲۳۴۵۶۷۸۹'
const LanguageContext = createContext(null)

function get(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj)
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem('lang') || 'fa' } catch { return 'fa' }
  })
  const isRTL = lang === 'fa'

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
    try { localStorage.setItem('lang', lang) } catch { /* ignore */ }
  }, [lang, isRTL])

  const t = useCallback((key, vars) => {
    let val = get(dicts[lang], key)
    if (val == null) val = get(dicts.fa, key)
    if (val == null) val = key
    if (typeof val !== 'string' || !vars) return val
    return Object.entries(vars).reduce((s, [k, v]) => s.replaceAll(`{${k}}`, String(v)), val)
  }, [lang])

  const fmtNum = useCallback((n) => {
    const s = String(n ?? '')
    if (lang !== 'fa') return s
    return s.replace(/\d/g, (d) => FA_DIGITS[d])
  }, [lang])

  const L = useCallback((item, base) => {
    if (!item) return ''
    const suf = lang === 'fa' ? 'Fa' : 'En'
    return item[`${base}${suf}`] ?? item[base] ?? ''
  }, [lang])

  const setLang = useCallback((l) => setLangState(l === 'en' ? 'en' : 'fa'), [])

  const value = useMemo(
    () => ({ t, lang, setLang, isRTL, fmtNum, L }),
    [t, lang, setLang, isRTL, fmtNum, L],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
