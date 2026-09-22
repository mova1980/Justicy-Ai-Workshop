import { useState } from 'react'
import { Image as ImageIcon } from 'lucide-react'
import { PageHero, PrimaryButton, GhostButton } from '../components/ui'
import { ModalShell } from '../components/ui'
import { useLang } from '../context/LanguageContext'

export default function Poster() {
  const { t } = useLang()
  const [open, setOpen] = useState(false)

  return (
    <>
      <PageHero icon={ImageIcon} title={t('poster.title')} subtitle={t('poster.subtitle')} />
      <section className="bg-persian-navy-900 pb-20">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <button
            onClick={() => setOpen(true)}
            className="block w-full rounded-2xl overflow-hidden border border-persian-navy-700/50 hover:ring-2 hover:ring-persian-blue-400/40 hover:shadow-[0_20px_60px_-15px_rgba(0,85,255,0.45)] transition-all"
          >
            <img src="/img/poster.jpg" alt={t('poster.title')} className="w-full h-auto" />
          </button>
          <div className="mt-6 flex flex-wrap gap-3 justify-center">
            <PrimaryButton onClick={() => setOpen(true)}>{t('poster.open')}</PrimaryButton>
            <GhostButton as="a" href="/img/poster.jpg" download="shahriar-ai-workshop-poster.jpg">
              {t('poster.download')}
            </GhostButton>
          </div>
        </div>
      </section>
      <ModalShell open={open} onClose={() => setOpen(false)} wide>
        <div className="p-3 bg-persian-navy-900">
          <img src="/img/poster.jpg" alt={t('poster.title')} className="w-full h-auto rounded-xl" />
        </div>
      </ModalShell>
    </>
  )
}
