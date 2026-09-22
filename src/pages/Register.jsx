import { useMemo, useState } from 'react'
import { ClipboardList, Copy, Check, User, Building2, Phone, FileText } from 'lucide-react'
import { PageHero, PrimaryButton, StatusPill } from '../components/ui'
import { ModalShell } from '../components/ui'
import Countdown from '../components/Countdown'
import { useLang } from '../context/LanguageContext'

const KEY = 'ai-workshop-regs'
const inputCls =
  'w-full ps-11 pe-4 py-3 rounded-xl bg-persian-navy-800 border border-persian-navy-600 text-white text-sm placeholder:text-white/30 focus:border-persian-blue-400 focus:ring-2 focus:ring-persian-blue-400/30 focus:outline-none transition-all'

function loadRegs() {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]') } catch { return [] }
}

function makeCode() {
  const n = Math.floor(100000 + Math.random() * 900000)
  return `SHR-${n}`
}

export default function Register() {
  const { t, fmtNum } = useLang()
  const [form, setForm] = useState({ name: '', role: 'staff', unit: '', phone: '', notes: '' })
  const [errors, setErrors] = useState({})
  const [regs, setRegs] = useState(loadRegs)
  const [success, setSuccess] = useState(null)
  const [copied, setCopied] = useState(false)

  const roles = useMemo(() => ([
    { id: 'judge', label: t('register.roleJudge') },
    { id: 'staff', label: t('register.roleStaff') },
    { id: 'expert', label: t('register.roleExpert') },
    { id: 'other', label: t('register.roleOther') },
  ]), [t])

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }))

  const submit = (e) => {
    e.preventDefault()
    const err = {}
    if (!form.name.trim()) err.name = t('register.required')
    if (!form.unit.trim()) err.unit = t('register.required')
    if (!form.phone.trim()) err.phone = t('register.required')
    setErrors(err)
    if (Object.keys(err).length) return
    const rec = { ...form, code: makeCode(), at: new Date().toISOString() }
    const next = [rec, ...regs]
    setRegs(next)
    try { localStorage.setItem(KEY, JSON.stringify(next)) } catch { /* ignore */ }
    setSuccess(rec)
    setForm({ name: '', role: 'staff', unit: '', phone: '', notes: '' })
  }

  const copy = async () => {
    if (!success) return
    try {
      await navigator.clipboard.writeText(success.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch { /* ignore */ }
  }

  return (
    <>
      <PageHero icon={ClipboardList} title={t('register.title')} subtitle={t('register.subtitle')} />
      <section className="bg-persian-navy-900 pb-20">
        <div className="container mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-5 sm:gap-8">
          <form onSubmit={submit} className="lg:col-span-3 rounded-2xl border border-persian-navy-700/50 glass-card p-4 sm:p-5 md:p-7 space-y-4">
            <Field icon={User} label={t('register.name')} error={errors.name}>
              <input className={inputCls} value={form.name} onChange={(e) => set('name', e.target.value)} />
            </Field>
            <div>
              <label className="block text-[11px] font-extrabold text-white/50 mb-2">{t('register.role')}</label>
              <div className="grid grid-cols-2 gap-2">
                {roles.map((r) => (
                  <button
                    type="button"
                    key={r.id}
                    onClick={() => set('role', r.id)}
                    className={`px-3 py-2.5 min-h-[44px] rounded-xl text-xs font-extrabold border transition-all ${
                      form.role === r.id
                        ? 'bg-persian-blue-600/20 text-persian-blue-200 border-persian-blue-500/30'
                        : 'bg-persian-navy-800/60 text-white/40 border-persian-navy-700/50'
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
            <Field icon={Building2} label={t('register.unit')} error={errors.unit}>
              <input className={inputCls} value={form.unit} onChange={(e) => set('unit', e.target.value)} />
            </Field>
            <Field icon={Phone} label={t('register.phone')} error={errors.phone}>
              <input className={inputCls} dir="ltr" value={form.phone} onChange={(e) => set('phone', e.target.value)} />
            </Field>
            <Field icon={FileText} label={t('register.notes')}>
              <textarea
                className={`${inputCls} min-h-[96px] resize-y`}
                placeholder={t('register.notesPh')}
                value={form.notes}
                onChange={(e) => set('notes', e.target.value)}
              />
            </Field>
            <PrimaryButton type="submit" className="w-full">{t('register.submit')}</PrimaryButton>
          </form>

          <aside className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl border border-persian-navy-700/50 glass-card p-5">
              <Countdown />
            </div>
            <div className="rounded-2xl border border-persian-navy-700/50 glass-card p-5">
              <h3 className="font-black text-white mb-3">{t('register.listTitle')}</h3>
              {regs.length === 0 ? (
                <p className="text-sm text-white/40">{t('register.empty')}</p>
              ) : (
                <ul className="space-y-2">
                  {regs.slice(0, 8).map((r) => (
                    <li key={r.code} className="flex items-center justify-between gap-2 rounded-xl bg-persian-navy-900/40 px-3 py-2 border border-persian-navy-700/40">
                      <span className="min-w-0">
                        <span className="block text-sm font-extrabold text-white truncate">{r.name}</span>
                        <span className="text-[11px] text-white/40 truncate block">{r.unit}</span>
                      </span>
                      <span className="font-mono text-[11px] text-persian-blue-300 shrink-0" dir="ltr">{r.code}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </aside>
        </div>
      </section>

      <ModalShell open={!!success} onClose={() => setSuccess(null)}>
        {success && (
          <div className="p-6 md:p-8">
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5">
              <StatusPill tone="ok">{t('register.successTitle')}</StatusPill>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">{t('register.successBody')}</p>
              <div className="mt-4 text-[11px] font-extrabold text-white/40">{t('register.code')}</div>
              <div className="mt-1 font-mono text-xl sm:text-2xl tracking-wider text-white break-all" dir="ltr">{success.code}</div>
              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={copy}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-300 text-[11px] font-extrabold hover:bg-emerald-500/25"
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? t('register.copied') : t('register.copy')}
                </button>
                <button
                  onClick={() => setSuccess(null)}
                  className="px-3.5 py-1.5 rounded-lg text-[11px] font-extrabold text-white/60 hover:bg-white/10"
                >
                  {t('register.another')}
                </button>
              </div>
              <p className="mt-3 text-[11px] text-white/30">{success.name} · {fmtNum(success.unit)}</p>
            </div>
          </div>
        )}
      </ModalShell>
    </>
  )
}

function Field({ icon: Icon, label, error, children }) {
  return (
    <div>
      <label className="block text-[11px] font-extrabold text-white/50 mb-2">{label}</label>
      <div className="relative">
        <Icon size={16} className="absolute start-4 top-3.5 text-persian-blue-300/50 pointer-events-none" />
        {children}
      </div>
      {error && <p className="mt-1 text-red-400 text-[11px] font-bold">{error}</p>}
    </div>
  )
}
