# 🎨 سیستم طراحی پورتال شفافیت MERC — راهنمای جامع UI/UX
# MERC Transparency Portal Design System

> **هدف این سند**: این فایل، **استخراج مستقیم و دقیقِ سیستم طراحیِ پیاده‌سازی‌شده** در «پورتال شفافیت و آمار پژوهشگاه مواد و انرژی» است (نه یک طراحی مفهومی). هدف آن این است که **هر سایت زیرمجموعهٔ MERC** با خواندن فقط همین سند، بتواند دقیقاً با همین تم، فونت، استایل، موشن و پنل مدیریت ساخته شود و **وحدت رویهٔ کامل** میان همهٔ سایت‌های مجموعه حفظ گردد.
>
> - هر مقدارِ این سند (رنگ‌ها، سایه‌ها، کلاس‌ها، کدها) از کدِ واقعیِ محصول گرفته شده و در حال استفاده است.
> - قاعده: هیچ رنگ/فونت/رادیوس جدیدی «اختراع» نکنید؛ از توکن‌های همین سند استفاده کنید.
> - نسخه: ۱٫۰ — به‌روزرسانی با هر تغییر در `tailwind.config.js` و `src/index.css`.

---

# فهرست

1. [پایه و پشتهٔ فناوری](#۱-پایه-و-پشتهٔ-فناوری)
2. [هویت بصری: رنگ‌ها](#۲-هویت-بصری-رنگ‌ها)
3. [تایپوگرافی و فونت‌ها](#۳-تایپوگرافی-و-فونت‌ها)
4. [آیکون‌سازی](#۴-آیکنسازی)
5. [دوزبانگی و RTL/LTR](#۵-دوزبانگی-و-rtlltr)
6. [افکت‌های امضا (Signature Effects)](#۶-افکتهای-امضا)
7. [قطب‌نمای صفحات: دو تم تیره/روشن](#۷-دو-تم-تیرهروشن)
8. [‌هیرو فضایی (صفحهٔ اصلی) — مشخصات کامل](#۸-هیرو-فضایی)
9. [کتابخانهٔ کامپوننت‌ها با کلاس آماده](#۹-کتابخانهٔ-کامپوننتها)
10. [نمودارها](#۱۰-نمودارها)
11. [‌پنل مدیریت (Admin) — مشخصات کامل](#۱۱-پنل-مدیریت-admin)
12. [موشن و انیمیشن](#۱۲-موشن-و-انیمیشن)
13. [ریسپانسیو و دسترس‌پذیری](#۱۳-ریسپانسیو-و-دسترسبذیری)
14. [قراردادهای ساختار پروژه](#۱۴-قراردادهای-ساختار-پروژه)
15. [چک‌لیست تطابق برای سایت‌های زیرمجموعه](#۱۵-چکلیست-تطابق)

---

# ۱. پایه و پشتهٔ فناوری

برای تطابق کامل بصری/رفتاری، سایت‌های زیرمجموعه از همین پشته استفاده کنند:

| لایه | انتخاب | نسخه |
|------|--------|------|
| Build | **Vite** | 5.4 + |
| فریم‌ورک | **React** | 18 |
| استایل | **Tailwind CSS** (utility-first) | 3.4 + |
| موشن | **Framer Motion** | 11 |
| آیکون | **lucide-react** (تنها کتابخانهٔ آیکون مجاز) | 0.453 + |
| مسیریابی | react-router-dom **HashRouter** | 6 |
| سایر | QR: `qrcode.react` • ایمیل: `nodemailer` (سمت سرور) | — |

> کلیدها: هیچ کتابخانهٔ UI آماده (MUI/Bootstrap/AntD)؛ همه چیز با Tailwind + کامپوننت‌های داخلی می‌سازید تا سایه/رادیوس/رنگ «خارج از سیستم» وارد نشود.

## شروع سریع پروژهٔ جدید (با همین تم)

```bash
npm create vite@latest my-site -- --template react
cd my-site
npm i tailwindcss@3 postcss autoprefixer framer-motion lucide-react react-router-dom
npx tailwindcss init -p
```

سپس ۳ فایل پایه را عیناً کپی کنید (در ادامهٔ سند کامل آمده):
`tailwind.config.js` • `src/index.css` (شامل `@font-face` مدام) • پوشهٔ `public/fonts/Modam/`.

---

# ۲. هویت بصری: رنگ‌ها

## ۲.۱ پالت توکن‌های سایت (تنها منبع مجاز رنگ)

این پالت را مستقیماً در `tailwind.config.js` بگذارید:

```js
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'persian-blue': {
          50:  '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#1a75ff',
          500: '#0055FF',   // ← رنگ نام و امضای برند
          600: '#0044CC',
          700: '#003399',
          800: '#002266',
          900: '#001133',
        },
        'persian-navy': {
          50:  '#f2f5f9',
          100: '#d4e0ed',
          200: '#a8c1db',
          300: '#7ca2c9',
          400: '#5083b7',
          500: '#2464a5',
          600: '#1d5084',
          700: '#163c63',
          800: '#0f2842',
          900: '#081421',   // ← زمینهٔ اصلی تیره
        },
        'gold-accent': {
          400: '#fbbf24',
          500: '#f59e0b',   // ← لهجهٔ طلایی
          600: '#d97706',
        },
      },
      // fontFamily + keyframes در بخش ۳ و ۶
    },
  },
  plugins: [],
};
```

## ۲.۲ نقش هر رنگ (قرارداد کاربرد)

| نقش | توکن | نمونهٔ استفاده |
|------|------|-----------------|
| عمل اصلی (CTA) | `persian-blue-600` پس‌زمینه، هاور `-500` | دکمه‌های اصلی گرد با درخشش |
| متن/آیکون لهجه تیره | `persian-blue-300` / `persian-blue-400` | آیکون‌ها روی زمینهٔ تیره |
| لهجهٔ طلایی (ویژه، نه فراگیر) | `gold-accent-400/500` | اعلان، بار مطلق ضروری، پاسخ واحد رسیدگی |
| زمینهٔ تیرهٔ اصلی | `persian-navy-900` `#081421` | بدنه، پنل ادمین، PageHero |
| کارت روی تیره | `persian-navy-800/60` + border `navy-700/50` | کارت‌های شیشه‌ای تیره |
| زمینهٔ روشن (گزارش‌ها) | `persian-navy-50` `#f2f5f9` | سکشن‌های آمار/گزارش |
| کارت روی روشن | `white` + border `persian-navy-100` | کارت‌های گزارش/جدول |
| متن اصلی تیره | سوپرانوشت‌ها `text-white` و بدن `text-white/40…/80` | سلسله‌مراتب با opacity |
| متن اصلی روشن | `persian-navy-900` / `persian-navy-500` | عناوین و بدنه |

**قانون opacity برای متن روی تیره (سلسله‌مراتب):**
`text-white` → عنوان | `text-white/80` → متن مهم | `text-white/60` | `text-white/40` → توضیح | `text-white/25–30` → placeholder/غیرفعال.

## ۲.۳ رنگ‌های وضعیت (Status)

برای وضعیت‌ها (درخواست/شکایت/مناقصه) از این نقشهٔ ثابت استفاده کنید:

| وضعیت | کلاس نشان (pill) |
|--------|-------------------|
| موفق/تأیید/پاسخ‌داده‌شده | `bg-emerald-500/15 text-emerald-300 border-emerald-500/25` |
| در انتظار/بررسی | `bg-amber-500/15 text-amber-300 border-amber-500/25` |
| خطا/رد | `bg-red-500/15 text-red-300 border-red-500/25` |
| خنثی/مختومه | `bg-persian-navy-700/40 text-persian-navy-300 border-persian-navy-600/50` |
| اطلاعاتی | `bg-persian-blue-600/15 text-persian-blue-300 border-persian-blue-500/25` |

## ۲.۴ گرادیانت‌های استاندارد

```css
/* گرادیانت اصلی سکشن‌ها */
background: linear-gradient(135deg, #0f2842 0%, #1d5084 50%, #003399 100%);

/* گرادیانت متحرک (نوار اطلاعیه — کلاس آماده .announce-gradient) */
background: linear-gradient(-45deg, #081421, #1d5084, #003399, #0f2842);
background-size: 400% 400%;
animation: gradient 15s ease infinite;

/* خط فوقانی فوتر/جداگر */
background: linear-gradient(90deg, transparent, rgba(0,85,255,.6), transparent);
```

---

# ۳. تایپوگرافی و فونت‌ها

## ۳.۱ سه‌گانهٔ فونت — قانون طلایی

| زبان | فونت اصلی | پشتیبان | وزن‌های موجود |
|------|-----------|---------|----------------|
| **فارسی (fa)** | **Modam** (لوکال woff2) | Vazirmatn | 300–900 |
| **انگلیسی (en)** | **Plus Jakarta Sans** (Google Fonts) | Vazirmatn | 200–800 |
| اعداد فارسی | گلیف‌های Modam/Vazirmatn | — | تبدیل با `fmtNum` (بخش ۵) |

> 🚫 فقط این سه فونت. فونت لوگوی برند نیز **Modam** است؛ از فونت دیگری برای لوگو استفاده نکنید.

## ۳.۲ آماده‌سازی فونت‌ها (فایل‌های لوکال — بدون وابستگی خارجی)

مدام را از CDN نخوانید؛ فایل‌های woff2 کنار پروژه قرار می‌گیرد تا در پیش‌نمایش/آفلاین هم کار کند:

```
public/fonts/Modam/Modam-Light.woff2       (300)
public/fonts/Modam/Modam-Regular.woff2     (400)
public/fonts/Modam/Modam-Medium.woff2      (500)
public/fonts/Modam/Modam-SemiBold.woff2    (600)
public/fonts/Modam/Modam-Bold.woff2        (700)
public/fonts/Modam/Modam-ExtraBold.woff2   (800)
public/fonts/Modam/Modam-Black.woff2       (900)
```

```css
/* در src/index.css — ابتدای فایل */
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,400&family=Vazirmatn:wght@100..900&display=swap');

@font-face { font-family:'Modam'; src:url('/fonts/Modam/Modam-Light.woff2');     font-weight:300; font-display:swap; }
@font-face { font-family:'Modam'; src:url('/fonts/Modam/Modam-Regular.woff2');   font-weight:400; font-display:swap; }
@font-face { font-family:'Modam'; src:url('/fonts/Modam/Modam-Medium.woff2');    font-weight:500; font-display:swap; }
@font-face { font-family:'Modam'; src:url('/fonts/Modam/Modam-SemiBold.woff2');  font-weight:600; font-display:swap; }
@font-face { font-family:'Modam'; src:url('/fonts/Modam/Modam-Bold.woff2');      font-weight:700; font-display:swap; }
@font-face { font-family:'Modam'; src:url('/fonts/Modam/Modam-ExtraBold.woff2'); font-weight:800; font-display:swap; }
@font-face { font-family:'Modam'; src:url('/fonts/Modam/Modam-Black.woff2');     font-weight:900; font-display:swap; }
```

> اگر لایسنس Modam ندارید، همان فایل‌ها را با گلیف‌های **Vazirmatn** پر کنید (عین همین نام‌ها) تا ساختار دست‌نخورده بماند و در آینده فقط با جایگزینی فایل، فونت واقعی فعال شود.

## ۳.۳ قانون سوییچ فونت بر اساس جهت

```css
body                                          { font-family:'Plus Jakarta Sans','Vazirmatn',sans-serif; background:#081421; }
[dir='rtl'], [lang='fa'], .persian           { font-family:'Modam','Vazirmatn','Plus Jakarta Sans',sans-serif !important; }
[dir='ltr'] body, .font-latin                 { font-family:'Plus Jakarta Sans','Vazirmatn',sans-serif !important; }
```

Tailwind:

```js
fontFamily: {
  sans:  ['Modam','Vazirmatn','Plus Jakarta Sans','sans-serif'],
  latin: ['Plus Jakarta Sans','Vazirmatn','sans-serif'],
},
```

**چرا کار می‌کند؟** چون با تعویض `document.documentElement.dir` (بخش ۵) بدنهٔ صفحه خودش هم راست‌به‌چپ و هم فونتش عوض می‌شود.

## ۳.۴ مقیاس تایپ (الگوی آماده)

| عنصر | کلاس‌ها |
|------|---------|
| تیتر اصلی هیرو | `text-4xl md:text-6xl lg:text-7xl font-black leading-[1.25] text-white` |
| تیتر صفحات داخلی | `text-2xl md:text-4xl font-black text-white` |
| عنوان سکشن | `text-2xl md:text-4xl font-black` + `SectionHeader` |
| عنوان کارت | `font-extrabold text-sm md:text-base` |
| بدنه | `text-sm` روی تیره: `text-white/60` – روی روشن: `text-persian-navy-500` |
| کوچک/برچسب | `text-[11px] font-bold` / `text-[10px] font-extrabold uppercase tracking-wider` |

**وزن‌ها:** عناوین `font-black(900)`/`font-extrabold(800)` • تاکید `font-bold(700)` • بدنه `medium/regular`.

---

# ۴. آیکن‌سازی

- تنها کتابخانهٔ مجاز: **lucide-react**. همهٔ آیکون‌ها outline با stroke یکدست‌اند.
- سایزهای استاندارد: آیکون در دکمه `size={15..18}` • آیکون کارت `size={22..26}` • آیکون ریز `size={11..14}`.
- آیکون همیشه همراه متن یا `aria-label`؛ آیکونِ صرفاً تزئینی را از خوانندهٔ صفحه پنهان کنید.
- رنگ: روی تیره معمولاً `text-persian-blue-300` یا `text-white/40`؛ روی روشن `text-persian-blue-600`.
- آیکون در «چیپ مربع» برای عناوین: `p-2 rounded-xl bg-persian-blue-600/20 text-persian-blue-300`.

```jsx
import { ShieldAlert, Headset, BarChart3 } from 'lucide-react';
<ShieldAlert size={17} className="text-persian-blue-300" />
```

---

# ۵. دوزبانگی و RTL/LTR

سیستم **i18n خودکی** (بدون i18next) که همهٔ ترکیب‌ها را از دیکشنری می‌خواند.

## ۵.۱ معماری

- دو دیکشنری `i18n/fa.js` و `i18n/en.js` با **کلیدهای دقیقاً یکسان** (در این سایت ۵۳۹ کلید در هر دو).
- `LanguageContext` با: `t('sec.key')` • `setLang('fa'|'en')` • `isRTL` • `fmtNum` • `L(item,'title')`.
- با تعویض زبان: `document.documentElement.dir = 'rtl'|'ltr'` و `lang` تنظیم می‌شود → فونت و چیدمان خودکار عوض می‌شود.

## ۵.۲ قراردادهای حیاتی برای RTL درست

| موضوع | قرارداد | علت |
|--------|----------|------|
| فاصله‌گذاری افقی | از کلاس‌های منطقی **ms- / me- / ps- / pe- / start- / end-** همیشه استفاده کنید؛ نه ml/mr/pl/pr | تا با RTL خودکار آینه شود |
| متن لاتین (ایمیل/شماره/کد) | `dir="ltr"` روی آن عنصر | جلوگیری از به‌هم‌ریختگی در متن RTL |
| نمودار میله‌ای/اعداد محور | `dir="ltr"` روی ریشهٔ نمودار | ترتیب ستون‌ها نباید معکوس شود |
| جهت dropdown وسط‌چین | RTL: `right-1/2 translate-x-1/2` • LTR: `left-1/2 -translate-x-1/2` | مرکز دقیق در هر دو حالت |
| فلش‌ها | `isRTL ? ArrowLeft : ArrowRight` / Chevron برعکس | معنای «بعد/قبل» |
| اعداد | همیشه از `fmtNum` عبور کنید | تبدیل ↔ ۰۱۲۳۴۵۶۷۸۹ در fa |

```jsx
// الگوی کمکی که در همهٔ کامپوننت‌ها استفاده می‌کنیم:
const { t, fmtNum, isRTL, lang, L } = useLang();
<span dir="ltr" className="font-mono">{code}</span>
<span className="ms-auto">…</span>
```

## ۵.۳ رشته‌های دوزبانهٔ داده

هر رکورد محتوایی `_fa` و `_en` خود را دارد (`titleFa/titleEn`) و با کمک‌گیرندهٔ `L` انتخاب می‌شود:

```js
const L = (item, base) => item[`${base}${lang==='fa'?'Fa':'En'}`] ?? item[base] ?? '';
```

---

# ۶. افکت‌های امضا

این ۱۲ کلاس utility در `src/index.css` تعریف شده‌اند — **استخر کامل افکت‌های سایت** است؛ عیناً کپی کنید:

## ۶.۱ درخشش تیتر هیرو — `.hero-glow`

```css
.hero-glow {
  text-shadow:
    0 0 20px rgba(0,85,255,.6),
    0 0 40px rgba(0,85,255,.4),
    0 0 80px rgba(0,85,255,.2);
}
```

## ۶.۲ درخشش کشویی متن — `.text-shimmer`

گرادیانت طلایی-آبی که روی خط دوم تیتر می‌غلتد:

```css
.text-shimmer {
  background: linear-gradient(90deg,#fff 0%,#b3d1ff 25%,#fff 50%,#b3d1ff 75%,#fff 100%);
  background-size: 200% auto;
  -webkit-background-clip: text; background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: text-shimmer 4s linear infinite;
}
@keyframes text-shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
```

## ۶.۳ درخشش و هالهٔ لوگو — `.logo-glow` / `.logo-halo`

```css
.logo-glow { filter: drop-shadow(0 0 14px rgba(26,117,255,.55)) drop-shadow(0 0 42px rgba(26,117,255,.28)); }
.logo-halo { background: radial-gradient(circle, rgba(77,148,255,.22) 0%, rgba(0,85,255,.08) 55%, transparent 72%); filter: blur(6px); }
```

زیر هر لوگو (هدر/فوتر/مودال/ادمین) عین همین الگو را بگذارید:

```jsx
<span className="relative flex items-center gap-3">
  <span aria-hidden className="absolute -inset-3 logo-halo rounded-full" />
  <img src="/logo.png" className="relative h-14 logo-glow" />
  …
</span>
```

## ۶.۴ کارت شیشه‌ای — `.glass-card`

```css
.glass-card { background: rgba(15,40,66,.6); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
```
همراه با `border border-persian-navy-700/50 rounded-2xl` استفاده می‌شود.

## ۶.۵ نوار اطلاعیهٔ بالای سایت — `.announce-gradient`

```css
.announce-gradient { background: linear-gradient(-45deg,#081421,#1d5084,#003399,#0f2842); background-size:400% 400%; animation: gradient 15s ease infinite; }
@keyframes gradient { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
```

## ۶.۶ چرخش زمین، شناور، اسکرول‌ویل

```js
// tailwind keyframes
animation:{ 'earth-spin':'earth-spin 120s linear infinite', gradient:'gradient 15s ease infinite', float:'float 6s ease-in-out infinite' },
keyframes:{
  'earth-spin':{ '0%':{transform:'rotate(0)'},'100%':{transform:'rotate(360deg)'} },
  float:{ '0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-20px)'} },
}
```
```css
@keyframes scroll-wheel { 0%{opacity:1;transform:translateY(0)} 100%{opacity:0;transform:translateY(14px)} }
.animate-scroll-wheel { animation: scroll-wheel 1.8s ease-out infinite; }
```

## ۶.۷ Dropdown هدر — الگوی حیاتی `.dropdown-panel`

> 🐞 نکتهٔ مهم: اگر به panel «hover-reveal»، `transform` X برای وسط‌چین می‌دهید، **دیگر** از `transform: translateY()` برای انیمیشن ظاهرشدن استفاده نکنید؛ چون روی همان property سوی‌رایت می‌شود و منو می‌پرد. به‌جای آن از پراپرتی جداگانهٔ `translate` استفاده کنید:

```css
.dropdown-panel { opacity:0; visibility:hidden; translate: 0 8px; transition: all .25s ease; }
.group\/drop:hover .dropdown-panel, .group\/drop:focus-within .dropdown-panel { opacity:1; visibility:visible; translate: 0 0; }
```

ترکیب در JSX (وسط‌چین دقیق زیر عنوان در هر دو جهت):

```jsx
<div className="relative group/drop">
  <button>…</button>
  <div className={`dropdown-panel absolute top-full pt-3 w-72 ${isRTL ? 'right-1/2 translate-x-1/2' : 'left-1/2 -translate-x-1/2'}`}>
    <div className="rounded-2xl bg-persian-navy-800/95 backdrop-blur-xl border border-persian-navy-700/50 shadow-2xl p-2">…</div>
  </div>
</div>
```

## ۶.۸ خط جداکنندهٔ تیتر سکشن — `.section-divider`

```css
.section-divider { background: linear-gradient(90deg, transparent, rgba(0,85,255,.5), transparent); height:1px; }
```

## ۶.۹ اسکرول‌بار سفارشی (یادگار فضایی)

```css
::-webkit-scrollbar { width:10px; height:10px; }
::-webkit-scrollbar-track { background:#0f2842; }
::-webkit-scrollbar-thumb { background:#1d5084; border-radius:8px; }
::-webkit-scrollbar-thumb:hover { background:#2464a5; }
```

## ۶.۱۰ اسپینرهای number input حذف

```css
input::-webkit-outer-spin-button, input::-webkit-inner-spin-button { -webkit-appearance:none; margin:0; }
```

## ۶.۱۱ رنگ فضایی بدنه — `.bg-space`

```css
.bg-space { background:#020810; }  /* فقط برای هیروی فول‌اسکرین */
```

## ۶.۱۲ انیمشن‌های آمادهٔ Tailwind

`animate-earth-spin` (۱۲۰ ثانیه برای زمین) • `animate-gradient` (نوار اطلاعیه) • `animate-float` • `animate-scroll-wheel` • `animate-bounce`.

## ۶.۱۳ سایه‌های امضا

- دکمهٔ آبی: `shadow-[0_0_30px_rgba(0,85,255,0.3)]` • هاور: `0_0_45px_rgba(0,85,255,0.5)`.
- آیکن چیپ: `shadow-[0_0_25px_rgba(0,85,255,0.3)]`.
- میلهٔ نمودار: `shadow-[0_0_20px_rgba(0,85,255,0.25)]`.
- کارت تصویری هاور: `shadow-[0_20px_60px_-15px_rgba(0,85,255,0.45)]`.
- کارت روشن: `shadow-lg shadow-persian-navy-900/5`.

---

# ۷. دو تم تیره/روشن

سایت **دو حالته** است؛ هیچ تم سومی وجود ندارد:

| حالت | کاربرد | زمینه | متنِ عنوان | کارت |
|------|--------|--------|------------|------|
| **Dark (پیش‌فرض)** | ایندکس‌ها، صفحات عمومی سرویس/فرم‌ها، پنل ادمین، هیرو | `bg-persian-navy-900` (هیرو: `#020810`) | `text-white` | `bg-persian-navy-800/60` + `border-navy-700/50` |
| **Light (گزارش)** | سکشن‌های آمار/گزارش/جداول تحلیلی | `bg-persian-navy-50` | `text-persian-navy-900` | `bg-white` + `border-navy-100` |

قاعده: هر صفحه با هیروی تیره (`PageHero`) شروع می‌شود و اگر محتوایش «تحلیلی/جدولی» است، سکشن بعدی به حالت Light می‌رود؛ اگر «خدمتی/فرمی» است، Dark می‌ماند.

---

# ۸. هیرو فضایی (صفحهٔ اصلی)

هیرو یک بوم چندلایه است. ترتیب لایه‌ها (زیرپهنا به رو):

| # | لایه | چیست | کلیدها |
|---|------|-------|---------|
| ۰ | `bg-space` + گرادیانت | `#020810 → #041529 → #081421` | پس‌زمینه |
| ۱ | **۱۲۰ ستارهٔ چشمک‌زن** | divهای `<motion>` سفید با opacity/scale تصادفی ۲–۶s | تصادفی با `useMemo` |
| ۲ | **کرهٔ زمین چرخان** | تصویر PNG با `animate-earth-spin`(۱۲۰s) + `mixBlendMode:'screen'` + ماسک رادیال `_maskImage: radial-gradient(circle, white 65%, transparent 72%)_` | opacity ~0.7–0.9، اندازهٔ ۴۲۰–۶۸۰px |
| ۳ | هالهٔ اتمسفر | گرادیانت آبی `radial` دور زمین (15%-) |
| ۴ | **سحابی‌ها** | ۲ بلاب بزرگ `blur-[120px]` از `persian-blue-700` و بنفش `#5b2ee5` |
| ۵ | گرادیانت خوانایی | تیره‌تر کردن پایین و گوشهٔ محتوا |
| ۶ | **۲۵ ذرهٔ معلق** | نقاط آبی کوچک شناور (float) با تأخیر پلکانی |
| ۷ | محتوا | badge (گرد) • تیتر کلمه‌به‌کلمه با چرخش X • خط دوم با `.text-shimmer` • زیرنویس • ۲ CTA |
| ۸ | نشانگر اسکرول | ماوس-ویل متحرک + Chevron |

رفتارهای کلیدی:

```jsx
// کره در کنار صفحه و با RTL آینه می‌شود:
className={`absolute top-1/2 -translate-y-1/2 w-[680px] h-[680px] ${isRTL ? 'left-[-60px]' : 'right-[-60px]'}`}
<img src="/earth-globe.png" className="rounded-full animate-earth-spin" style={{ filter:'brightness(1.2) saturate(1.4)', mixBlendMode:'screen', WebkitMaskImage:'radial-gradient(circle, white 65%, transparent 72%)' }} />
```

- CTA اصلی: دکمهٔ گرد آبی با درخشش `shadow-[0_0_30px_rgba(0,85,255,0.3)]` • CTA ثانویه: قاب ‍`border-2 border-persian-blue-400/30`.
- تیتر کلمه‌به‌کلمه انیمیت می‌شود: `initial={{opacity:0,y:40,rotateX:-30}}` با تأخیر پلکانی ۰٫۱۳s و کلاس `.hero-glow` روی هر کلمه.
- سایهٔ خوانایی زیر تیتر اضافه نکنید؛ تضاد glow کفایت می‌کند.

---

# ۹. کتابخانهٔ کامپوننت‌ها (کلاس‌های آمادهٔ کپی)

در این بخش هر کامپوننتِ حاضرمحصول، با کد قابل‌استفاده آمده است.

## ۹.۱ سرصفحهٔ صفحات داخلی — `<PageHero>`

```jsx
function PageHero({ icon: Icon, title, subtitle, children }) {
  return (
    <section className="relative overflow-hidden bg-persian-navy-900 pt-32 md:pt-36 pb-14 md:pb-16" dir={isRTL?'rtl':'ltr'}>
      <div className="absolute inset-0 bg-gradient-to-b from-[#020810] via-persian-navy-900 to-persian-navy-900" />
      <div className="absolute -top-24 start-1/4 w-96 h-96 rounded-full bg-persian-blue-700/25 blur-[110px]" />
      <div className="absolute -bottom-32 end-1/5 w-96 h-96 rounded-full bg-[#5b2ee5]/20 blur-[120px]" />
      <div className="absolute inset-0 opacity-[0.35]" style={{ backgroundImage:'radial-gradient(rgba(179,209,255,0.35) 1px,transparent 1px)', backgroundSize:'26px 26px' }} />
      <div className="relative container mx-auto px-6 flex items-start gap-4">
        {Icon && <span className="p-3.5 rounded-2xl bg-persian-blue-600/20 border border-persian-blue-500/25 text-persian-blue-300"><Icon size={26} /></span>}
        <div>
          <h1 className="text-2xl md:text-4xl font-black text-white">{title}</h1>
          {subtitle && <p className="mt-2.5 text-white/50 text-sm md:text-base max-w-3xl">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
```

## ۹.۲ تیتر سکشن — `<SectionHeader>`

مرکز، زمینهٔ تیره: عنوان `text-white`؛ روشن (`light`): `text-persian-navy-900`. زیرش یک `w-24 h-1 rounded-full bg-gradient-to-r from-persian-blue-400 to-persian-blue-600` متحرک (scaleX از ۰) و بعد زیرنویس.

## ۹.۳ دکمه‌ها

| نوع | کلاس |
|------|------|
| اصلی (pill) | `px-8 py-3.5 rounded-full bg-persian-blue-600 text-white font-bold text-base shadow-[0_0_30px_rgba(0,85,255,0.3)] hover:bg-persian-blue-500 transition-all` |
| ثانویه قاب‌دار | `px-8 py-3.5 rounded-full border-2 border-persian-blue-400/30 text-persian-blue-200 hover:bg-persian-blue-600/10 hover:border-persian-blue-400/60 transition-all` |
| خنثی تیره | `px-6 py-3 rounded-full border-2 border-persian-navy-600 text-white/60 hover:bg-persian-navy-700/50` |
| اقدام خرده | `px-3.5 py-1.5 rounded-lg bg-emerald-500/15 text-emerald-300 text-[11px] font-extrabold hover:bg-emerald-500/25` |
| آیکون‌تک (هدر) | `p-2.5 rounded-full text-white/70 hover:text-white hover:bg-white/10` |

## ۹.۴ فرم‌ها

**روی تیره (Public):**
```js
const input = 'w-full ps-11 pe-4 py-3 rounded-xl bg-persian-navy-800 border border-persian-navy-600 text-white text-sm placeholder:text-white/30 focus:border-persian-blue-400 focus:ring-2 focus:ring-persian-blue-400/30 focus:outline-none transition-all';
```
با آیکون `absolute start-4 top-1/2 -translate-y-1/2 text-persian-blue-300/50 ps-11`.

**روی روشن (آمار):**
```js
const inputLight = 'w-full px-4 py-3 rounded-xl border-2 border-persian-navy-100 bg-white/70 text-sm text-persian-navy-900 placeholder:text-persian-navy-300 focus:border-persian-blue-500 transition-colors';
```

**ادمین (تیره فشرده):**
```js
const darkInput = 'w-full px-3 py-2.5 rounded-lg bg-persian-navy-800 border border-persian-navy-600 text-white text-sm placeholder:text-white/25 focus:border-persian-blue-400 focus:ring-2 focus:ring-persian-blue-400/30 transition-all';
```

**حالت خطا:** `border-red-500/60` + متن `text-red-400 text-[11px] font-bold` زیر فیلد.

**فیلد آپلود (شکایات):** دکمهٔ ‍`border-dashed` قبلی؛ با انتخاب فایل، چیپ پیش‌نمایش با thumbnail یا آیکون + حجم + دکمهٔ حذف `text-red-400`.

## ۹.۵ تب‌ها — الگوی «خط زیر لغزنده»

```jsx
<button className={active
  ? 'relative px-5 py-3 rounded-2xl font-extrabold text-sm bg-persian-blue-600/20 text-persian-blue-200 border border-persian-blue-500/30'
  : 'relative px-5 py-3 rounded-2xl font-extrabold text-sm text-white/40 bg-persian-navy-800/60 border border-persian-navy-700/50'}>
  {label}
  {active && <motion.span layoutId="tabBar" className="absolute inset-x-4 -bottom-px h-0.5 bg-persian-blue-400 rounded-full" />}
</button>
```
کلید: `layoutId` یکسان بین تب‌ها → زیرخط با Framer Motion بین تب‌های فعال می‌غلتد.

## ۹.۶ کارت‌ها

**Glass روی عکس (کارت‌های لندینگ):** تصویر `object-cover` + لایهٔ `bg-persian-navy-900/70 backdrop-blur-[3px]` + گرادیانت از پایین + ring آبی روی هاور + `whileHover={{y:-8,scale:1.02}}`.

**KPI کوچک (آمار):** کارت روشن `rounded-2xl bg-white border border-persian-navy-100 shadow-md p-4` + حباب رنگی گوشه `-end-6 -top-6 w-20 h-20 opacity-10` + آیکون در `p-2 rounded-xl` رنگ‌دار با پس‌زمینهٔ `${color}18`.

## ۹.۷ جداول

**گزارش (روشن):** سرستون `bg-persian-navy-800 text-white/75 text-[10px] font-extrabold` • سلول‌ها `text-xs md:text-sm text-persian-navy-800 text-center` • ردیف‌های زوج `bg-persian-navy-50/60` • ردیف جمع `bg-persian-blue-600/10 font-extrabold`.

**ادمین (تیره):** سرستون `bg-persian-navy-800/80 text-persian-blue-200/70 text-[10px] font-extrabold uppercase` • ردیف `border-t border-persian-navy-700/50 hover:bg-persian-navy-700/30` • badge با نقشهٔ `PTYPE_BADGE` و … (فایل `admin/config.js`).

## ۹.۸ صفحه‌بندی — `<Pagination>`

دکمه‌ها `min-w-[34px] h-[34px] rounded-xl text-xs font-extrabold` • فعال: `bg-persian-blue-600 text-white shadow-[0_0_16px_rgba(0,85,255,0.35)]` • جهت فلش‌ها آینه‌ای با `isRTL`.

## ۹.۹ مودال

پوش `fixed inset-0 z-[100] bg-persian-navy-900/80 backdrop-blur-md flex items-center justify-center p-4` • بدنهٔ مودال `bg-persian-navy-800/80 backdrop-blur-xl border border-persian-navy-700/50 rounded-2xl shadow-2xl w-full max-w-md` • سربرگ اختیاری گرادیانت `bg-gradient-to-l from-persian-blue-800 via-persian-blue-700 to-persian-navy-700`. با `AnimatePresence` باز/بسته (`opacity+scale+y`).

## ۹.۱۰ مولفه‌های کوچک

- **StatusPill** (۲.۳) • **EmptyState:** آیکون `SearchX size={44} text-persian-navy-300` + متن `text-persian-navy-500` • **Toggle (تنظیمات):** کپسول ۴۲×۲۲ با `bg-persian-blue-600` در روشن/ `bg-persian-navy-700` در خاموش و نقطهٔ سفید لغزنده.

## ۹.۱۱ QR و کارت موفقیت (شکایات)

کارت نتیجهٔ موفق: قاب `border-emerald-500/30 bg-emerald-500/10`؛ داخلش: آیکن `CircleCheck` در چیپ سبز، کد رهگیری به‌صورت بزرگ `font-mono text-2xl tracking-wider`، دکمهٔ کپی، QR در قاب سفید `p-3.5 rounded-2xl bg-white shadow-[0_10px_40px_-10px_rgba(0,85,255,0.45)]` و تایم‌لاین وضعیت (آیکن‌های مرحله + خط پیوستهٔ گرادیانت که با رشد وضعیت پر می‌شود).

## ۹.۱۲ فوتر

زمینهٔ `bg-persian-navy-900` با خط‌فوقانی گرادیانت آبی، بلاب آبی ملایم، ۴ ستون (لوگو+halo • دسترسی سریع • پیوندهای شفافیت+سه‌لاین‌خارجی • تماس با آیکن MapPin/Phone/Mail آبی) و نوار انتهایی کپی‌رایت `text-white/30`.

---

# ۱۰. نمودارها

دو نمودار داخلی ساخته می‌شود (بدون کتابخانهٔ نمودار سنگین) — در `components/charts.jsx`:

## ۱۰.۱ `<PieChart>` (دایره‌ای SVG خالص)

- رنگ‌های چرخهٔ سری‌ها: `['#f59e0b','#1a75ff','#8b5cf6','#10b981','#f43f5e','#94a3b8']` یا `['#1a75ff','#f59e0b','#8b5cf6','#10b981','#ec4899','#7ca2c9']`.
- برش با کمان ریاضی (`arcPath`)، stroke سفید ۱٫۵px بین برش‌ها، درصد برش‌های ≥۸٪ داخل قطعه (سفید/پُررنگ)، tooltip شناور بالای نمودار، راهنمای رنگ پایین با مربع رنگی کوچک.
- انیمیت ورود: `opacity+scale` با تأخیر پلکانی `i*0.12`.
- علامت درصد دوزبانه: fa → `٪` و en → `%`.

## ۱۰.۲ `<GroupedBars>` (میله‌ای گروهی)

- `dir="ltr"` روی ریشهٔ نمودار — همیشه!
- یال شبکه: ۴ تیک افقی محاسبه‌شده (`Math.ceil(max*1.15/4)`) با `border-persian-navy-100/80` و برچسب‌های کوچک چپ.
- هر میله: گرادیانت عمودی ملایم ازرنگ سری، انیمیت افزایش ارتفاع `whileInView` با تأخیر پلکانی، روی هاور روشن‌تر + گلو آبی + tooltip.
- مقدار صفر → میلهٔ نیمه‌شفاف (opacity .15).

## ۱۰.۳ نبوعیت (دادهٔ طولانی سالانه)

برای دسته‌های >۱۲ (مثل سال‌های زیاد): اسکرول افقی خودکار با حداقل عرض هر دستهٔ ۵۸px (سری زیاد) یا ۳۴px — تا خوانایی برای ۲۰+ سال حفظ شود و موبایل هم نشکند.

## ۱۰.۴ دسترس‌پذیری نمودارها

همهٔ مقادیر عددی با `fmtNum` به فارسی/لاتین تبدیل می‌شوند؛ نمی‌توان فایل خروجی ندارید، نکته: همین چرا که حرفه‌ای است می‌رود، نقطهٔ قوت: بدون کتابخانهٔ سنگین – فقط SVG+Flex+Framer.

---

# ۱۱. پنل مدیریت (Admin)

## ۱۱.۱ چیدمان کلی

- زمینه: `bg-persian-navy-900`، راست‌به‌چپ کامل. Grid: `lg:grid-cols-5` → سایدبار `col-span-1` (چسبیده: `lg:sticky top-28`، حداکثر ارتفاع `max-h-[70vh]` با اسکرول داخلی) + محتوا `col-span-4`.
- سربرگ: عنوان «پنل مدیریت» + «خوش آمدید، نام‌کاربر» + دکمه‌های `خانه`/`خروج` گوشهٔ چپ.
- هر سکشن با `AnimatePresence mode="wait"` و motion key=section تعویض می‌شود (ورود `y:12`، خروج `y:-8`).

## ۱۱.۲ سایدبار — الگوی استاندارد

- گروه‌بندی با جداکنندهٔ متنی: `<div className="hidden lg:flex items-center gap-2 px-4 pt-4 pb-1.5"><span className="h-px flex-1 bg-persian-navy-600/60"/><span className="text-[9px] font-black uppercase tracking-widest text-persian-blue-300/50">{گروه}</span>…</div>` — این سبک عنوان گروه‌هاست.
- آیتم فعال: `bg-persian-blue-600/20 text-persian-blue-200 border border-persian-blue-500/20` + چش‌به‌چش `ChevronLeft` که غیرRTL `rotate-180` می‌شود.
- در موبایل: همان لیست، به‌صورت افقی اسکرول‌شونده (`flex lg:flex-col`).

## ۱۱.۳ CRUD manager (مدیریت داده با یک کامپوننت)

- پیکربندی در `admin/config.js`: برای هر کالکشن، `columns` (سلولی + badge/bilingual/compute) و `fields` (text/textarea/number/select/icon + compact برای گروه‌بندی فشردهٔ چندستونهٔ فرم) تعریف می‌کنید و بقیهٔ UI خودکار است.
- جستجو: کلیدواژه روی همهٔ فیلدها (`JSON.stringify`) — با نرمال‌سازی ی ↔ ي.
- فرم افزودن/ویرایش در مودال؛ فیلدهای بای‌لینگوال دو ستونه (فارسی راست/انگلیسی چپ)؛ compactها در قاب‌چارچوب‌دار `grid-cols-2 sm:3 lg:4` که اعداد آمار را فشرده نگه می‌دارد.
- حذف با مودال تأیید قرمز (`bg-red-500` + دکمهٔ خیر خنثی) و پیام‌های «ذخیره شد/حذف شد».

## ۱۱.۴ داشبورد

- کارت‌های شمارندهٔ کلیک‌شونده (۱۳/…): `rounded-2xl border p-5`، `whileHover={{y:-4}}` تایل رنگی برای «درانتظار» (طلایی).
- نمودار پروژه/سال با میله‌های گرادیانت آبی `bg-gradient-to-t from-persian-blue-700 to-persian-blue-400` و برچسب بالای میله.
- «فعالیت‌های اخیر»: ردیف‌های سرگرمی با نقطهٔ وضعیت (سبز/آمبر/قرمز، نبض‌دار برای pending).

## ۱۱.۵ مدیریت شکایات (الگوی کارگردانی)

- چیپ‌های فیلتر وضعیت با شمارنده (همه/درانتظار/درحال‌رسیدگی/پاسخ‌داده‌شده/مختومه) + جستجوی همысانی روی کد/نام/ایمیل/موبایل.
- ردیف شکایت جمع‌بندی‌شده: نقطهٔ وضعیت نبض‌دار (pending) • کد رهگیری mono • نام • موضوع • badge وضعیت • تاریخ جلالی • خط متنی خلاصه • بازشونده با Chevron چرخان.
- داخل جزئیات دو ستون: چپ = کارت اطلاعات شاکی (نام/ایمیل/تلفن/موضوع با آیکن‌ها) + متن کامل شکایت + پیوست (قاب دانلود آبی با حجم) + دکمه‌های تغییر وضعیت ۴مرحله‌ای • راست = کارت «پاسخ» طلایی با textarea و save (برای پاسخ، وضعیت خودکار `answered` و تاریخ پاسخ ثبت می‌شود) + دکمهٔ `mailto:` «ارسال پاسخ با ایمیل».
- نقطهٔ آخر: «حذف شکایت» با تأیید دومرحله‌ای (قرمز → بله/خیر).
- **تمام داده‌ها از `DataContext` (useData) خوانده می‌شود و _v مهاجرت‌دار است** — هر سایت زیرمجموعه همین لایهٔ داده را کپی کند تا UI بدونتغییر کار کند.

## ۱۱.۶ تنظیمات

Toggle‌هایی که درالگوی ۹.۱۰ آمده + فرم‌های `darkInput` برای متن اطلاعیه/لینک‌ها + کارت خطر قرمز «بازگردانی داده‌های نمونه» با تأیید دو مرحله‌ای.

---

# ۱۲. موشن و انیمیشن

فقط **Framer Motion** از همان الگوها (بدون CSS اضافی):

| الگو | خصوصیت | کجا |
|------|---------|-----|
| ورود اسکرولی استاندارد | `initial={{opacity:0,y:24}}` → `whileInView={{opacity:1,y:0}}` `viewport={{once:true}}` `duration:.55` | تقریباً همهٔ کارت‌ها |
| ورود کارت بزرگ با perspective | `y:40, rotateX:-8` + `transformPerspective:800` | کارت‌های تصویری |
| استگر پلکانی | `transition={{ delay: i*0.07/0.1 }}` | گرید کارت‌ها/منو |
| هاور سطحی | `whileHover={{y:-8}}` یا `y:-4`/scale:1.02 | کارت‌های شیشه‌ای/داشبورد |
| ورود-خروج با وقفه key | `AnimatePresence mode="wait"` + `key={tab}` | تب‌ها/سکشن‌های ادمین |
| بلوک‌های بازشو | `initial={{height:0,opacity:0}}` → auto | منوی موبایل/آکاردئون |
| خط تب‌ها/نشان ناوبری | `layoutId` یکسان | تب‌ها/نیواکتیو هدر |
| کدمورباً پروژهٔ جدید: پیش‌فرض هر انیمیت بین ۰٫۲۵–۰٫۸ ثانیه و easing پیش‌فرض یا `easeOut`. |

> برای کاهش حرکت‌دوست‌نادار: با `viewport={{once:true}}` یک‌بار اجرا شود و در `@media (prefers-reduced-motion)` انیمیشن‌های CSS بلندمدت را کمتر کنید.

---

# ۱۳. ریسپانسیو و دسترس‌پذیری

- **برک‌پوینت‌های تیلویند:** `sm 640 • md 768 • lg 1024 • xl 1280` — کارهای ؤیژهٔ سایت: منوی دسکتاپ `hidden lg:flex`، منوی موبایل `lg:hidden`، گرید کارت‌ها `grid-cols-2 md:grid-cols-4` (شمارنده‌ها) و `sm:grid-cols-2 lg:grid-cols-3` (فیچر).
- **الگوی کانتینر:** همیشه `container mx-auto px-6` — پهنای ‍گرید اصلی را دست‌انزده می‌سازد.
- **تصاویر/wide hero:** `hidden sm:block` برای متن کنار لوگو؛ زمین هیرو با `useMemo` (۱۲۰ ستاره) تصادفی است.
- **لمسی‌بودن:** همهٔ کلیک‌پذیرها `min-h/min-w ≥ 34px`، فیلدها `py-3`.
- **فوکوس:** رینگ `focus:ring-2 focus:ring-persian-blue-400/30` روی تمام inputها.
- **کنتراست:** متن اصلی روی تیره ≥ AA: `text-white/60` (بدنه) و `text-white` (عنوان) روی `#081421`.
- **اعداد محورنمودار و کدها:** `dir="ltr"` برای جلوگیری از به‌هم‌ریختگی.
- **چاپ:** برای رسید شکایت کمینهٔ چاپ غیرضروری است؛ سمت درخواست‌کاربر «ذخیره به‌عنوان PDF» کافی است.

---

# ۱۴. قراردادهای ساختار پروژه

```
public/
  logo-merc2.png            ← لوگوی اصلی (همیشه با logo-glow)
  earth-globe.png           ← کرهٔ زمین هیرو
  fonts/Modam/*.woff2       ← فونت لوکال (مدام یا Vazirmatn جایگزین)
  img/bg-*.jpg              ← پس‌زمینهٔ کارت‌های شیشه‌ای (bg-research, bg-articles, bg-invention, bg-books, bg-researchers, bg-stats, bg-lab, bg-tender, bg-finance)
src/
  index.css                 ← +@font-face Modam + همهٔ ۱۲ افکت امضا (بخش ۶)
  tailwind.config.js        ← پالت ۳رنگ + keyframes (بخش ۲/۶)
  i18n/                     ← fa.js + en.js (کلیدبرابر ۱:۱) + LanguageContext
  context/DataContext.jsx   ← تنها منبع داده (مرورور‌محور، کلاسکلکشن + _v مهاجرت)
  context/AuthContext.jsx   ← ورود
  components/               ← Header, Hero, Footer, ui.jsx (PageHero/SectionHeader/CountUp/StatusPill/EmptyState), charts.jsx (PieChart/GroupedBars/Pagination)
  pages/                    ← Home, ServiceDesk, Complaints, Statistics(+StatsReports), …
  admin/                    ← config.js (پیکربندی CRUD) + CrudManager + panels + AdminComplaints
server/ (اختیاری)           ← API + ایمیل
docs/
  MERC-PORTAL-UI-UX-DESIGN-SYSTEM.md  ← این سند
  DATABASE.md               ← مسیر دیتابیس واقعی
```

- **صفحهٔ جدید = یک PageHero دیگر + محتوای خودتان.** از ui.jsx برای PageHero/SectionHeader استفاده کنید و صفحهٔ «خام» نسازید.
- **منوی هدر** با کلیدهای یکسان i18n در دو navbar دسکتاپ و موبایل همگام باشد (همان آیتم‌ها).

---

# ۱۵. چک‌لیست تطابق برای سایت‌های زیرمجموعه ✅

قبل از تحویل هر سایت جدید، این چک‌لیست را مرور کنید. هر گزینه باید تیک بخورد:

**هویت**
- [ ] فقط پالت `persian-blue`/`persian-navy`/`gold-accent` از `tailwind.config.js` — بدون هگز جدید.
- [ ] فونت فارسی = Modam (لوکال woff2)، لاتین = Plus Jakarta Sans — هیچ فونت چهارمی ندارد.
- [ ] لوگو با کلاس `logo-glow` + `logo-halo` — همیشه PNG بدون پس‌زمینه.
- [ ] آیکون‌ها فقط از لایری lucide-react و outline.
- [ ] آیکون splash «Sparkles» کنار بدج هیرو **حذف شده** و در محصول جاری وجود ندارد.

**ساختار**
- [ ] هیرو صفحهٔ اصلی با ۸ لایه (ستاره‌ها/زمین/سحابی/ذرات/shimmer) — طبق بخش ۸.
- [ ] هر صفحهٔ داخلی با `PageHero` شروع می‌شود، نه تیتر مجرد.
- [ ] تم Dark برای ایندکس/فرم‌ها و تم Light فقط برای گزارش/جدول — ترکیب نکنید.
- [ ] منوی dropdown از الگوی `.dropdown-panel` با `translate:` (بدون transform تداخلی).
- [ ] گوتنبرگ یا CSS framework ثانویه ندارد.

**تعامل**
- [ ] دکمهٔ CTA اصلی با گلو `shadow-[0_0_30px_rgba(0,85,255,0.3)]` و رادیوس `rounded-full`.
- [ ] انیمیت ورود `opacity/y` با viewport once و استگر ≤ ۰٫۱ ثانیه.
- [ ] هر فرم آیکن‌دار، فوکوس‌رینگ آبی، پیام خطای لازم/اختیاری `__ *` دارد.
- [ ] حالت‌های loading/empty/success برای هر اکشن async هست.
- [ ] تب‌ها با زیرخطٔ `layoutId` (لغزنده) و counts.

**داده/چندزبانگی**
- [ ] همهٔ رشته‌ها در fa.js/en.js با کلید یکسان و هیچرشتهٔ فارسی ثابت در JSX نیست.
- [ ] اعداد و تاریخ‌ها از `fmtNum`/فرمت‌دهندهٔ جلالی عبور می‌کنند.
- [ ] `dir="ltr"` روی ایمیل/کد/نمودارها اعمال شده.
- [ ] ms/me/ps/pe به‌جای ml/mr/pl/pr.

**ادمین**
- [ ] پنل با زمینهٔ navy-900، سایدبار گروه‌بندی‌شده، جدول‌های تیره، badge وضعیت.
- [ ] هر موجودیت (پروژه/شکایت/…) قابل CRUD کامل از ادمین است.
- [ ] فرم‌های بای‌لینگوال دو ستونه؛ اعداد آمار به‌صورت compact قاب‌دار.
- [ ] حذف‌ها با تأیید دومرحله‌ای؛ عمل مهم با چشم‌ک‌زن «ذخیره شد».
- [ ] احراز هویت و نقش admin/guest.

**دسترسی و عملکرد**
- [ ] فوکوس قابل‌دید، کنتراست AA روی متن‌ها، لمسی ۳۴px به بالا.
- [ ] نمودارها اسکرول افقی پس از ۱۲ دسته (مزیت سایت).
- [ ] فونت‌ها self-hosted و فقط woff2 → حجم بهینه.
- [ ] build تولیدی (`npm run build`) بدون خطا.

---

## پیوست: مرجع سریع کد (Copy-Paste)

> فایل‌ها را عین همین نام نگه دارید تا مسیرها مطابق سند عمل کنند.

```bash
# ۱) کپی فایل‌های سیستم
cp tailwind.config.js ./         # پالت ۳ رنگ + keyframes بخش ۲/۶
cp src/index.css ./src/          # @font-face Modam + ۱۲ افکت امضا بخش ۶
cp -r public/fonts/Modam ./public/fonts/
cp public/logo-merc2.png ./public/
```

پس از آن، از بخش ۹ (کامپوننت‌ها) و ۱۱ (ادمین) هر کامپوننت را که لازم دارید به‌صورت مستقیم وارد پروژهٔ جدید کنید — تمام کلاس‌ها از توکن‌های بالا درست‌اند و بدون هیچ تغییری، خروجی دقیقاً مثل پورتال شفافیت MERC خواهد شد.

---

*این سند با هر به‌روزرسانی `tailwind.config.js` یا `src/index.css` به‌روز نگه داشته می‌شود. آخرین بازبینی: ۲۰۲۶-۰۹-۰۸.*
