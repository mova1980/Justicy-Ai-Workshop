import { Building2, Landmark } from 'lucide-react'
import { motion } from 'framer-motion'
import { PageHero } from '../components/ui'
import { useLang } from '../context/LanguageContext'

export default function Partners() {
  const { t } = useLang()
  const items = [
    {
      img: '/logos/merc.png',
      light: true,
      title: t('partners.merc'),
      sub: t('partners.mercSub'),
      bodyFa: 'پژوهشگاه مواد و انرژی، نهاد علمی وزارت علوم، تحقیقات و فناوری، میزبان دانش فنی و طراحی این کارگاه کاربردی است. نقش پژوهشگاه انتقال تجربه تحول دیجیتال به محیط اجرایی دادگستری است؛ با زبانی که قاضی و کارمند بتوانند فردا صبح به کار بگیرند.',
      bodyEn: 'The Materials and Energy Research Center, a scientific body of the Ministry of Science, hosts the technical knowledge and design of this practical workshop. Its role is to transfer digital-transformation experience into the judiciary’s operational environment — in a language a judge or clerk can use tomorrow morning.',
    },
    {
      img: '/logos/judiciary.png',
      round: true,
      title: t('partners.judiciary'),
      sub: t('partners.judiciarySub'),
      bodyFa: 'دادگستری شهرستان شهریار میزبان رویداد و مخاطب اصلی توانمندسازی است. سالن همایش‌های دادگستری، کارکنان و قضات شعبه را گرد هم می‌آورد تا مسیر تحول دیجیتال با حفظ خط قرمز محرمانگی پرونده‌ها آغاز شود.',
      bodyEn: 'Shahriar County Judiciary hosts the event and is the primary audience for empowerment. The conference hall brings branch staff and judges together so digital transformation can start while keeping case confidentiality as a red line.',
    },
    {
      img: '',
      title: t('partners.dataGov'),
      sub: t('partners.dataGovSub'),
      bodyFa: 'پژوهشکده حکمرانی داده در سه محور سیاست‌گذاری، پدافند غیرعامل و هوش مصنوعی، چارچوب امن و مسئولانه استفاده از ابزارها را در این کارگاه نمایندگی می‌کند.',
      bodyEn: 'The Data Governance Research Institute, across policy, passive defense and AI, represents the secure and responsible framework for using these tools in the workshop.',
    },
  ]
  const { lang } = useLang()

  return (
    <>
      <PageHero icon={Building2} title={t('partners.title')} subtitle={t('partners.subtitle')} />
      <section className="bg-persian-navy-900 pb-20">
        <div className="container mx-auto px-6 space-y-4">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.55 }}
              className="rounded-2xl border border-persian-navy-700/50 glass-card p-5 md:p-7 grid md:grid-cols-[160px_1fr] gap-6 items-center"
            >
              <div className="flex justify-center">
                {it.img ? (
                  <span className="relative inline-flex items-center justify-center">
                    <span aria-hidden className="absolute -inset-4 logo-halo rounded-full" />
                    <img
                      src={it.img}
                      alt=""
                      className={`relative logo-glow ${it.round ? 'h-24 w-24 rounded-full object-cover' : 'h-16 w-auto'}`}
                    />
                  </span>
                ) : (
                  <span className="h-24 w-24 rounded-2xl bg-persian-blue-600/15 border border-persian-blue-500/25 text-persian-blue-300 inline-flex items-center justify-center">
                    <Landmark size={32} />
                  </span>
                )}
              </div>
              <div>
                <h2 className="text-xl font-black text-white">{it.title}</h2>
                <p className="text-persian-blue-300 text-sm font-bold mt-1">{it.sub}</p>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">{lang === 'fa' ? it.bodyFa : it.bodyEn}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  )
}
