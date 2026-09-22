import { Link } from 'react-router-dom'
import { SearchX } from 'lucide-react'
import { PrimaryButton } from '../components/ui'
import { useLang } from '../context/LanguageContext'

export default function NotFound() {
  const { t } = useLang()
  return (
    <section className="min-h-[70vh] bg-persian-navy-900 pt-36 pb-20 flex items-center">
      <div className="container mx-auto px-6 text-center">
        <SearchX size={44} className="mx-auto text-persian-navy-300 mb-4" />
        <h1 className="text-2xl md:text-4xl font-black text-white">{t('notFound.title')}</h1>
        <p className="mt-3 text-white/50">{t('notFound.body')}</p>
        <PrimaryButton as={Link} to="/" className="mt-8">{t('notFound.back')}</PrimaryButton>
      </div>
    </section>
  )
}
