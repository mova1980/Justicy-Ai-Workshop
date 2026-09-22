export const EVENT_START = '2026-09-23T13:00:00+03:30'
export const EVENT_END = '2026-09-23T15:00:00+03:30'

export const pillars = [
  {
    id: 'train',
    icon: 'GraduationCap',
    img: '/img/bg-training.jpg',
    titleFa: 'آموزش و توانمندسازی',
    titleEn: 'Training & empowerment',
    leadFa: 'آشنایی با مفاهیم و کاربردهای هوش مصنوعی در حوزه قضایی و اداری؛ بدون اصطلاحات مهندسی.',
    leadEn: 'Concepts and applications of AI in judicial and administrative work — without engineering jargon.',
    bodyFa: 'در این محور، شرکت‌کننده تصویر روشنی از «تحول دیجیتال» و جایگاه هوش مصنوعی مولد و ابزارهای تحلیلی در سازمان پیدا می‌کند. تاکید بر این است که هوش مصنوعی جایگزین قاضی یا تصمیم‌گیرنده نیست؛ یک دستیار تسریع‌کننده است.',
    bodyEn: 'Participants leave with a clear picture of digital transformation and the place of generative and analytical AI in the organization. AI does not replace the judge; it is an accelerating assistant.',
    pointsFa: [
      'تفاوت هوش مصنوعی مولد با ابزارهای تحلیلی، به زبان ساده',
      'آنچه هوش مصنوعی می‌تواند و نمی‌تواند در دادگستری انجام دهد',
      'نقش انسان به‌عنوان تصمیم‌گیرنده نهایی',
      'نمونه‌های موفق خلاصه‌سازی پرونده، پیش‌نویس نامه و خودکارسازی روندهای تکراری',
    ],
    pointsEn: [
      'Generative vs analytical AI, in plain language',
      'What AI can and cannot do in a courthouse',
      'The human as the final decision-maker',
      'Successful patterns: case summaries, letter drafts, repetitive-flow automation',
    ],
  },
  {
    id: 'practice',
    icon: 'Cog',
    img: '/img/bg-automation.jpg',
    titleFa: 'کاربردهای عملی',
    titleEn: 'Practical applications',
    leadFa: 'معرفی ابزارها و راهکارهای دیجیتال در فرآیندهای سازمانی که فردا صبح قابل استفاده‌اند.',
    leadEn: 'Tools and digital methods inside organizational processes that can be used tomorrow morning.',
    bodyFa: 'سه خانواده کاربرد در کارگاه زنده نمایش داده می‌شود: اتوماسیون نامه‌ها و پاسخگویی، جستجوی دقیق در قوانین و آیین دادرسی، و تبدیل اسناد تصویری به متن قابل ویرایش.',
    bodyEn: 'Three families of use are demonstrated live: letter automation and faster replies, precise search in statutes and procedure, and turning image documents into editable text.',
    pointsFa: [
      'دسته‌بندی نامه‌های وارده و تهیه خلاصه گزارش',
      'جستجوی تبصره، ماده و رویه در مجموعه قوانین',
      'OCR اسناد اسکن‌شده و پرونده‌های کاغذی',
      'الگوی نامه‌نگاری اداری استاندارد با کمک هوش مصنوعی',
    ],
    pointsEn: [
      'Classifying incoming letters and summarizing reports',
      'Searching notes, articles and practice in the statute book',
      'OCR of scanned papers and case files',
      'Standard administrative letter patterns with AI assistance',
    ],
  },
  {
    id: 'security',
    icon: 'Shield',
    img: '/img/bg-security.jpg',
    titleFa: 'امنیت اطلاعات',
    titleEn: 'Information security',
    leadFa: 'حفاظت از داده‌ها، ملاحظات حقوقی و جلوگیری از افشای اطلاعات حساس پرونده‌ها.',
    leadEn: 'Data protection, legal considerations and preventing disclosure of sensitive case information.',
    bodyFa: 'هیچ ابزاری در این کارگاه توصیه نمی‌شود مگر با پروتکل امنیتی مشخص. مدل‌های محلی (Local)، نام‌زدایی (Anonymization) و ممنوعیت ورود مشخصات طرفین پرونده به ابزارهای آنلاین، سه خط قرمز جلسه هستند.',
    bodyEn: 'No tool is recommended without a clear security protocol. Local models, anonymization, and a ban on entering party identities into online tools are the three red lines of the session.',
    pointsFa: [
      'چه داده‌ای هرگز نباید در ابزار آنلاین وارد شود',
      'روش نام‌زدایی اشخاص، شماره ملی، پلاک و نشانی',
      'استفاده از مدل‌های محلی روی شبکه داخلی',
      'ثبت ردپا و مسئولیت استفاده از خروجی ابزار',
    ],
    pointsEn: [
      'Data that must never be pasted into an online tool',
      'How to anonymize names, national IDs, plates and addresses',
      'Using local models on the internal network',
      'Audit trail and responsibility for tool output',
    ],
  },
  {
    id: 'productivity',
    icon: 'TrendingUp',
    img: '/img/bg-ai.jpg',
    titleFa: 'بهبود بهره‌وری',
    titleEn: 'Productivity',
    leadFa: 'راهکارهای افزایش سرعت، دقت و کیفیت خدمات اداری و قضایی بدون کاهش اعتبار تصمیم.',
    leadEn: 'Ways to raise speed, accuracy and quality of judicial services without lowering the credibility of decisions.',
    bodyFa: 'بهره‌وری در دادگستری به معنای «سریع‌تر تمام کردن پرونده به هر قیمت» نیست. به معنای آزاد کردن زمان قاضی و کارمند از کارهای تکراری، برای تمرکز روی تشخیص، استدلال و دادرسی عادلانه است.',
    bodyEn: 'Productivity in the judiciary does not mean finishing files faster at any cost. It means freeing judges and staff from repetitive work so they can focus on judgment, reasoning and fair trial.',
    pointsFa: [
      'کاهش زمان پاسخ به مکاتبات تکراری',
      'کاهش خطای انسانی در ارجاع و دسته‌بندی',
      'کیفیت بالاتر خلاصه پرونده برای جلسه رسیدگی',
      'شاخص‌های ساده برای سنجش اثر کارگاه پس از ۳۰ روز',
    ],
    pointsEn: [
      'Less time spent on repetitive correspondence',
      'Fewer human errors in referral and classification',
      'Higher-quality case summaries for hearings',
      'Simple indicators to measure impact 30 days later',
    ],
  },
]

export const sections = [
  {
    id: 'intro',
    num: 1,
    minutes: 20,
    img: '/img/bg-ai.jpg',
    icon: 'Sparkle',
    titleFa: 'مقدمه و مفاهیم هوش مصنوعی در محیط قضایی و اداری',
    titleEn: 'Introduction: AI concepts in judicial and administrative settings',
    leadFa: 'آشنایی اولیه با تحول دیجیتال، هوش مصنوعی مولد و ابزارهای تحلیلی در سازمان‌ها.',
    leadEn: 'A first map of digital transformation, generative AI and analytical tools in organizations.',
    topics: [
      {
        id: 'intro-dx',
        img: '/img/bg-city.jpg',
        titleFa: 'مفهوم تحول دیجیتال و نقش هوش مصنوعی',
        titleEn: 'Digital transformation and the role of AI',
        bodyFa: 'تحول دیجیتال یعنی بازطراحی کار با داده و ابزار دیجیتال؛ نه فقط «خرید نرم‌افزار». در دادگستری این یعنی مسیر نامه، پرونده، ابلاغ، بایگانی و پاسخ استعلام، کوتاه‌تر و دقیق‌تر شود. هوش مصنوعی مولد متن می‌سازد (خلاصه، پیش‌نویس، بازنویسی). ابزار تحلیلی الگو و آمار می‌سازد (صف انتظار، ارجاع، تکرار تخلف). هر دو در این کارگاه به زبان غیر فنی معرفی می‌شوند.',
        bodyEn: 'Digital transformation means redesigning work with data and digital tools — not merely buying software. In a courthouse that means shorter, more accurate paths for letters, files, service of process, archives and inquiries. Generative AI produces text (summaries, drafts, rewrites). Analytical tools produce patterns and statistics. Both are introduced in non-technical language.',
        examplesFa: [
          'تبدیل یک پرونده ۲۰۰ برگی به خلاصه ۲ صفحه‌ای برای جلسه شعبه',
          'بازنویسی یک نامه اداری طولانی به نسخه استاندارد و مؤدب',
        ],
        examplesEn: [
          'Turning a 200-page file into a 2-page hearing brief',
          'Rewriting a long administrative letter into a standard polite version',
        ],
        stepsFa: [
          'کار تکراری امروز خود را نام ببرید (نامه، خلاصه، جستجو، فرم).',
          'مشخص کنید خروجی مورد نیاز چیست؛ نه «هرچه هوش مصنوعی گفت».',
          'قبل از هر ورود داده، لایه امنیتی (نام‌زدایی) را اعمال کنید.',
        ],
        stepsEn: [
          'Name a repetitive task you do today (letter, summary, search, form).',
          'Define the required output — not “whatever the model says”.',
          'Apply the security layer (anonymization) before any data entry.',
        ],
        securityFa: 'هیچ پرونده واقعی، نام طرفین، شماره ملی یا محتوای محرمانه نباید برای «تست مفهوم» در ابزار آنلاین وارد شود. از داده‌های ساختگی آموزشی استفاده کنید.',
        securityEn: 'No real case, party name, national ID or confidential content should be entered into an online tool “just to try the concept”. Use synthetic training data.',
        nested: [
          {
            id: 'intro-dx-gen',
            titleFa: 'هوش مصنوعی مولد به زبان ساده',
            titleEn: 'Generative AI in plain language',
            bodyFa: 'مدل مولد، احتمال کلمه بعدی را پیش‌بینی می‌کند. بنابراین ممکن است جمله زیبا اما نادرست بسازد. در دادگستری این یعنی: خروجی را همیشه با متن قانون، محتویات پرونده و عقل سلیم مقابله کنید. مدل «نمی‌داند»؛ حدس می‌زند.',
            bodyEn: 'A generative model predicts the next word. It can therefore produce a beautiful but false sentence. In the judiciary that means: always check the output against the statute, the file and common sense. The model does not “know”; it guesses.',
          },
          {
            id: 'intro-dx-not',
            titleFa: 'آنچه این کارگاه نیست',
            titleEn: 'What this workshop is not',
            bodyFa: 'آموزش برنامه‌نویسی، نصب سرور، یا ساخت مدل اختصاصی در این ۱۲۰ دقیقه جایی ندارد. تمرکز فقط روی «نحوه استفاده از ابزار برای حل مشکل روزمره اداری» است.',
            bodyEn: 'There is no coding, server setup or custom-model building in these 120 minutes. The only focus is how to use a tool to solve an everyday administrative problem.',
          },
        ],
      },
      {
        id: 'intro-uses',
        img: '/img/bg-docs.jpg',
        titleFa: 'کاربردهای هوش مصنوعی در حوزه قضایی و اداری',
        titleEn: 'AI uses in judicial and administrative work',
        bodyFa: 'سه الگوی موفق و قابل‌تقلید در محیط دادگستری: ۱) خلاصه کاربردی پرونده برای قاضی و مدیر دفتر، ۲) تنظیم پیش‌نویس نامه‌های اداری تکراری، ۳) خودکارسازی روندهای تکراری مثل دسته‌بندی وارده و استخراج مشخصات فرم. نمونه‌های بین‌المللی فقط به‌عنوان الهام و با تذکر تفاوت نظام حقوقی ایران مطرح می‌شود.',
        bodyEn: 'Three transferable patterns: (1) an operational case brief for the judge and the clerk, (2) drafts of repetitive administrative letters, (3) automating repetitive flows such as inbound classification and form-field extraction. International examples are inspiration only, with a reminder of the Iranian legal system’s differences.',
        examplesFa: [
          'خلاصه پرونده کیفری: اتهام، ادله، قرارهای صادره، وضعیت متهم',
          'پیش‌نویس پاسخ استعلام ثبتی یا مکاتبه با نیروی انتظامی',
        ],
        examplesEn: [
          'Criminal-file brief: charge, evidence, orders issued, status of the accused',
          'Draft reply to a registry inquiry or correspondence with the police',
        ],
        stepsFa: [
          'یک الگوی خروجی ثابت برای شعبه تعریف کنید (عنوان‌های اجباری خلاصه).',
          'نمونه طلایی (یک خلاصه خوب واقعیِ نام‌زدایی‌شده) به ابزار نشان دهید.',
          'خروجی را با چک‌لیست شعبه مقابله و سپس امضا کنید.',
        ],
        stepsEn: [
          'Define a fixed output template for the branch (mandatory brief headings).',
          'Show the tool a gold sample (a good, anonymized real brief).',
          'Check the output against the branch checklist, then sign.',
        ],
        securityFa: 'حتی در الگوی موفق، پرونده واقعی را وارد ابزار عمومی نکنید. از نسخه نام‌زدایی‌شده یا مدل محلی استفاده شود.',
        securityEn: 'Even in a successful pattern, do not put a real file into a public tool. Use an anonymized copy or a local model.',
        nested: [
          {
            id: 'intro-uses-sum',
            titleFa: 'الگوی خلاصه کاربردی پرونده',
            titleEn: 'The operational case-brief pattern',
            bodyFa: 'ساختار پیشنهادی: مشخصات شکلی (بدون داده هویتی حساس در ابزار آنلاین) → خواسته / اتهام → گردش کار → ادله طرفین → قرارها و تصمیمات قبلی → نکات باقی‌مانده برای جلسه. این ساختار در بخش نمایش زنده اجرا می‌شود.',
            bodyEn: 'Suggested structure: formal facts (no sensitive identity in online tools) → claim / charge → procedural history → parties’ evidence → prior orders → open points for the hearing. This structure is executed in the live demo.',
          },
        ],
      },
    ],
  },
  {
    id: 'practical',
    num: 2,
    minutes: 40,
    img: '/img/bg-automation.jpg',
    icon: 'Cpu',
    titleFa: 'کاربردهای عملی و ابزارهای هوش مصنوعی',
    titleEn: 'Practical applications and AI tools',
    leadFa: 'اتوماسیون اداری، جستجوی سریع در قوانین، و مدیریت مستندات — هر سه با نمایش زنده.',
    leadEn: 'Administrative automation, fast legal search, and document management — all with a live demo.',
    topics: [
      {
        id: 'prac-auto',
        img: '/img/bg-automation.jpg',
        titleFa: 'اتوماسیون اداری و تسریع در پاسخگویی',
        titleEn: 'Office automation and faster replies',
        bodyFa: 'نحوه استفاده از هوش مصنوعی برای دسته‌بندی نامه‌ها، خلاصه‌سازی گزارش‌ها و نامه‌نگاری اداری. هدف: پاسخ استاندارد در چند دقیقه، با لحن اداری صحیح و بدون فراموشی پیوست و رونوشت.',
        bodyEn: 'How to use AI to classify letters, summarize reports and draft administrative correspondence. Goal: a standard reply in minutes, with the right official tone and without forgetting attachments or CC.',
        examplesFa: [
          'دسته‌بندی ۱۲۰ نامه وارده هفته به: فوری، استعلام، درخواست وقت، شکایت اداری',
          'تبدیل گزارش ۴ صفحه‌ای اجرای احکام به خلاصه ۱۰ خطی برای رئیس حوزه',
        ],
        examplesEn: [
          'Classifying 120 inbound letters into: urgent, inquiry, hearing request, admin complaint',
          'Turning a 4-page enforcement report into a 10-line brief for the chief',
        ],
        stepsFa: [
          'نوع نامه را مشخص کنید (قالب ثابت).',
          'فقط بندهای غیرهویتی را به ابزار بدهید.',
          'خروجی را در سربرگ شعبه بنشانید، شماره و تاریخ بزنید، امضا کنید.',
        ],
        stepsEn: [
          'Name the letter type (fixed template).',
          'Give the tool only non-identifying paragraphs.',
          'Place the output on branch letterhead, number and date it, then sign.',
        ],
        securityFa: 'نام، کد ملی، شماره پرونده و حساب را قبل از ورود به ابزار با برچسب‌های ساختگی جایگزین کنید (شخص الف، پرونده ۱۲۳ آموزشی).',
        securityEn: 'Replace names, national IDs, case numbers and accounts with dummy labels before any tool (Person A, training file 123).',
        nested: [
          {
            id: 'prac-auto-tone',
            titleFa: 'لحن اداری استاندارد',
            titleEn: 'Standard official tone',
            bodyFa: 'از ابزار بخواهید لحن را «رسمی، کوتاه، بدون اغراق، مطابق مکاتبات قوه قضائیه» نگه دارد. یک نمونه نامه خوب شعبه را به‌عنوان مرجع لحن بدهید.',
            bodyEn: 'Ask the tool to keep the tone “formal, short, without exaggeration, consistent with judiciary correspondence”. Give one good branch letter as the tone reference.',
          },
        ],
      },
      {
        id: 'prac-search',
        img: '/img/bg-search.jpg',
        titleFa: 'تحلیل داده‌ها و جستجوی سریع',
        titleEn: 'Data analysis and precise search',
        bodyFa: 'شیوه‌های جستجوی دقیق در قوانین، مقررات اداری و آیین دادرسی با کمک ابزارهای دیجیتال. به‌جای «هرچه درباره این موضوع می‌دانی»، سؤال را با ماده، سال، و حوزه محدود کنید تا مدل کمتر خیال‌بافی کند.',
        bodyEn: 'Precise search in statutes, administrative regulations and procedure. Instead of “tell me everything about this”, constrain the question with article, year and domain so the model hallucinates less.',
        examplesFa: [
          'پیدا کردن تبصره‌ای خاص در آیین دادرسی کیفری درباره ابلاغ الکترونیکی',
          'مقایسه دو ماده مرتبط در قانون مجازات و استخراج تفاوت حکم',
        ],
        examplesEn: [
          'Finding a specific note in the Criminal Procedure Code on electronic service',
          'Comparing two related Penal Code articles and extracting the difference',
        ],
        stepsFa: [
          'صورت مسئله را به ماده / تبصره / تاریخ محدود کنید.',
          'از مدل بخواهید «فقط نقل کند و منبع بدهد»، نه فتوا.',
          'نقل را با متن رسمی قانون (سامانه ملی قوانین یا کتاب شعبه) مقابله کنید.',
        ],
        stepsEn: [
          'Constrain the question to article / note / date.',
          'Ask the model to quote and cite — not to issue a ruling.',
          'Check the quote against the official statute text.',
        ],
        securityFa: 'جستجوی حکم یک پرونده واقعی با ذکر طرفین ممنوع است. سؤال را انتزاعی و قانونی بپرسید.',
        securityEn: 'Searching the ruling of a real case by naming the parties is forbidden. Ask an abstract legal question.',
        nested: [
          {
            id: 'prac-search-prompt',
            titleFa: 'الگوی پرسش حقوقی ایمن',
            titleEn: 'A safe legal-question pattern',
            bodyFa: '«با استناد به متن قانون [نام قانون]، ماده [شماره]، توضیح بده این ماده در چه صورتی اعمال می‌شود. اگر مطمئن نیستی بگو نمی‌دانم. منبع را نقل کن.» این الگو در نمایش زنده تمرین می‌شود.',
            bodyEn: '“Referring to the text of [statute], article [n], explain when this article applies. If you are not sure, say you do not know. Quote the source.” This pattern is practiced in the live demo.',
          },
        ],
      },
      {
        id: 'prac-docs',
        img: '/img/bg-docs.jpg',
        titleFa: 'مدیریت مستندات و پرونده‌ها',
        titleEn: 'Document and case-file management',
        bodyFa: 'روش‌های تبدیل اسناد تصویری به متن (OCR) و پردازش متون حقوقی و اداری. برای دادخواست‌های دستنویس یا اسکن بی‌کیفیت، ابتدا کیفیت تصویر و سپس صحت متن استخراج‌شده بررسی می‌شود.',
        bodyEn: 'Turning image documents into text (OCR) and processing legal-administrative prose. For handwritten petitions or poor scans, first fix image quality, then verify the extracted text.',
        examplesFa: [
          'تبدیل دادخواست اسکن‌شده به متن قابل جستجو در بایگانی شعبه',
          'استخراج جدول مشخصات از یک فرم اداری پُرشده',
        ],
        examplesEn: [
          'Turning a scanned petition into searchable text in the branch archive',
          'Extracting a particulars table from a filled administrative form',
        ],
        stepsFa: [
          'اسکن با وضوح مناسب؛ صفحه کج را راست کنید.',
          'OCR را روی نسخه بدون داده حساس یا روی سامانه داخلی اجرا کنید.',
          'موارد کلیدی (مبلغ، تاریخ، شماره) را دستی مقابله کنید.',
        ],
        stepsEn: [
          'Scan at a proper resolution; deskew the page.',
          'Run OCR on a non-sensitive copy or on an internal system.',
          'Manually check key fields (amount, date, number).',
        ],
        securityFa: 'آپلود پرونده اسکن‌شده در سایت‌های عمومی OCR معادل ارسال پرونده به بیرون از دادگستری است. فقط سامانه داخلی یا مدل محلی.',
        securityEn: 'Uploading a scanned file to a public OCR site is equivalent to sending the file outside the courthouse. Internal system or local model only.',
        nested: [
          {
            id: 'prac-docs-ocr',
            titleFa: 'خطاهای رایج OCR حقوقی',
            titleEn: 'Common legal OCR errors',
            bodyFa: 'اعداد فارسی/لاتین جابه‌جا می‌شوند، «ماده» ممکن است «ماده» خوانده نشود، و مهرها نویز می‌سازند. هر عدد مؤثر در تصمیم باید با چشم انسان تأیید شود.',
            bodyEn: 'Persian/Latin digits swap, the word “article” may be misread, and stamps create noise. Every number that affects a decision must be confirmed by a human eye.',
          },
        ],
      },
    ],
  },
  {
    id: 'sec',
    num: 3,
    minutes: 30,
    img: '/img/bg-security.jpg',
    icon: 'ShieldCheck',
    titleFa: 'امنیت اطلاعات، ملاحظات حقوقی و اخلاقی',
    titleEn: 'Information security, legal and ethical considerations',
    leadFa: 'حفاظت از داده‌ها، جلوگیری از افشای پرونده، و اعتبارسنجی خروجی برای جلوگیری از خطای هوش مصنوعی.',
    leadEn: 'Protecting data, preventing file disclosure, and validating output to catch AI error.',
    topics: [
      {
        id: 'sec-data',
        img: '/img/bg-security.jpg',
        titleFa: 'حفاظت از داده‌ها و حریم خصوصی',
        titleEn: 'Data protection and privacy',
        bodyFa: 'اصول امنیت اطلاعات هنگام کار با ابزارهای آنلاین و هوش مصنوعی: حداقل داده، جداسازی محیط، عدم استفاده از حساب شخصی برای کار سازمانی، و آگاهی از اینکه بسیاری از ابزارهای عمومی ورودی را برای آموزش دوباره مدل ذخیره می‌کنند.',
        bodyEn: 'Information-security principles when working with online tools and AI: data minimization, environment separation, no personal accounts for official work, and the knowledge that many public tools store prompts to retrain the model.',
        examplesFa: [
          'حساب سازمانی در برابر حساب Gmail شخصی برای کار پرونده',
          'خاموش کردن «بهبود مدل با گفتگوهای من» در تنظیمات ابزار',
        ],
        examplesEn: [
          'An organizational account versus a personal Gmail for case work',
          'Turning off “improve the model with my chats” in tool settings',
        ],
        stepsFa: [
          'سیاست شعبه: ابزارهای مجاز / غیرمجاز را روی کاغذ یک‌برگی داشته باشید.',
          'برای کار آموزشی فقط داده ساختگی.',
          'برای کار واقعی فقط مدل محلی یا سامانه داخلی تأییدشده.',
        ],
        stepsEn: [
          'Branch policy: keep a one-pager of allowed / forbidden tools.',
          'Synthetic data only for training.',
          'For real work, only a local model or an approved internal system.',
        ],
        securityFa: 'فرض کنید هر متنی که در ابزار عمومی می‌نویسید روی تابلوی اعلانات اینترنت ظاهر می‌شود. اگر با این فرض راحت نیستید، ننویسید.',
        securityEn: 'Assume every sentence you type into a public tool appears on an internet noticeboard. If that makes you uncomfortable, do not type it.',
        nested: [
          {
            id: 'sec-data-local',
            titleFa: 'مدل محلی چیست و چرا در دادگستری مهم است',
            titleEn: 'What a local model is and why it matters',
            bodyFa: 'مدل محلی روی رایانه یا سرور داخل سازمان اجرا می‌شود و داده از شبکه داخلی خارج نمی‌شود. دقت ممکن است کمتر از مدل‌های ابری بزرگ باشد؛ اما برای متن‌های حساس، امنیت بر دقت ابری اولویت دارد. روش اتصال و محدودیت‌ها در کارگاه توضیح داده می‌شود.',
            bodyEn: 'A local model runs on a machine or server inside the organization; data does not leave the internal network. Accuracy may be lower than large cloud models; for sensitive text, security outranks cloud accuracy. Connection method and limits are explained in the workshop.',
          },
        ],
      },
      {
        id: 'sec-legal',
        img: '/img/bg-ethics.jpg',
        titleFa: 'ملاحظات حقوقی و خطرات حریم خصوصی',
        titleEn: 'Legal considerations and privacy risks',
        bodyFa: 'جلوگیری از افشای اطلاعات حساس پرونده‌ها و اسناد محرمانه دادگستری. افشای غیرمجاز می‌تواند وصف کیفری و انتظامی داشته باشد. استفاده از هوش مصنوعی مسئولیت حرفه‌ای را از دوش قاضی یا کارمند برنمی‌دارد.',
        bodyEn: 'Preventing disclosure of sensitive case information and confidential judiciary documents. Unauthorized disclosure may carry criminal and disciplinary consequences. Using AI does not lift professional responsibility from the judge or the clerk.',
        examplesFa: [
          'نام‌زدایی: «متهم الف، متولد ۱۳۶۰، ساکن شهرستان ب» به‌جای مشخصات کامل',
          'حذف پیوست‌های هویتی قبل از هر پردازش',
        ],
        examplesEn: [
          'Anonymize: “Accused A, born 1981, resident of County B” instead of full identity',
          'Strip identity attachments before any processing',
        ],
        stepsFa: [
          'فهرست داده‌های ممنوعه را بالای میز کار بچسبانید.',
          'قبل از paste، متن را در یک پیش‌نویس نام‌زدایی کنید.',
          'خروجی را در سامانه رسمی با هویت واقعی ادغام کنید؛ نه برعکس.',
        ],
        stepsEn: [
          'Pin the list of forbidden data above the desk.',
          'Anonymize the text in a draft before any paste.',
          'Merge the output with real identity only inside the official system — never the other way around.',
        ],
        securityFa: 'اگر شک دارید داده‌ای حساس است یا نه، آن را حساس فرض کنید.',
        securityEn: 'If you are unsure whether a datum is sensitive, treat it as sensitive.',
        nested: [
          {
            id: 'sec-legal-anon',
            titleFa: 'شیوه نام‌زدایی (Anonymization) در ۳۰ ثانیه',
            titleEn: 'A 30-second anonymization method',
            bodyFa: 'جایگزین کنید: نام‌ها → شخص الف/ب، کد ملی → حذف، شماره پرونده → کد آموزشی، نشانی → شهرستان، شماره حساب و شبا → حذف، پلاک خودرو → حذف، شماره تماس → حذف. سپس متن را یک‌بار با چشم برای نشت هویت بخوانید.',
            bodyEn: 'Replace: names → Person A/B, national ID → remove, case number → training code, address → county, account/IBAN → remove, plate → remove, phone → remove. Then eye-scan the text once for identity leakage.',
          },
        ],
      },
      {
        id: 'sec-valid',
        img: '/img/bg-ethics.jpg',
        titleFa: 'اعتبارسنجی خروجی؛ جلوگیری از خطای هوش مصنوعی',
        titleEn: 'Validating output; stopping AI error',
        bodyFa: 'تاکید بر نقش انسان به‌عنوان تصمیم‌گیرنده نهایی و ضرورت بررسی صحت پاسخ‌ها. مدل ممکن است ماده قانونی را اشتباه نقل کند، رأی ساختگی بسازد، یا اعداد را جابه‌جا کند. هیچ خروجی‌ای بدون امضای انسان وارد پرونده نمی‌شود.',
        bodyEn: 'The human is the final decision-maker; answers must be checked. The model may misquote an article, invent a judgment, or swap numbers. No output enters the file without a human signature.',
        examplesFa: [
          'مدل ماده‌ای از قانون مجازات را با شماره غلط نقل می‌کند',
          'مدل «رأی وحدت رویه»ای می‌سازد که وجود ندارد',
        ],
        examplesEn: [
          'The model quotes a Penal Code article with the wrong number',
          'The model invents a unifying-precedent judgment that does not exist',
        ],
        stepsFa: [
          'هر نقل قانونی را با متن رسمی مقابله کنید.',
          'هر عدد (مبلغ، تاریخ، ماده) را دوباره بخوانید.',
          'اگر مدل منبع نداد، به خروجی اعتماد نکنید.',
        ],
        stepsEn: [
          'Check every legal quote against the official text.',
          'Re-read every number (amount, date, article).',
          'If the model gave no source, do not trust the output.',
        ],
        securityFa: 'خطای مدل اگر وارد رأی یا نامه رسمی شود، خطای سازمان است نه خطای «ربات». مسئولیت با امضاکننده است.',
        securityEn: 'If a model error enters a judgment or official letter, it is the organization’s error — not the “bot’s”. Responsibility sits with the signatory.',
        nested: [
          {
            id: 'sec-valid-hallu',
            titleFa: 'توهم (Hallucination) یعنی چه؟',
            titleEn: 'What is a hallucination?',
            bodyFa: 'وقتی مدل با اعتماد به نفس جمله‌ای می‌سازد که در واقعیت سند ندارد. در حقوق خطرناک است چون شکل جمله شبیه رأی و ماده است. پادزهر: منبع بخواهید، منبع را باز کنید، انسان تأیید کند.',
            bodyEn: 'When the model confidently produces a sentence that has no real source. In law this is dangerous because the sentence looks like a judgment or an article. Antidote: demand a source, open the source, human confirms.',
          },
        ],
      },
    ],
  },
  {
    id: 'qa',
    num: 4,
    minutes: 30,
    img: '/img/bg-training.jpg',
    icon: 'MessagesSquare',
    titleFa: 'پرسش، پاسخ و جمع‌بندی',
    titleEn: 'Q&A and wrap-up',
    leadFa: 'تمرین عملی زنده، پاسخ به دغدغه‌های اجرایی کارکنان، و جمع‌بندی قابل‌حمل به شعبه.',
    leadEn: 'A live practical exercise, answers to staff’s operational concerns, and a takeaway for the branch.',
    topics: [
      {
        id: 'qa-demo',
        img: '/img/bg-training.jpg',
        titleFa: 'تمرین عملی یا نمایش نمونه واقعی',
        titleEn: 'Live exercise or real-sample demonstration',
        bodyFa: 'اجرای یک سناریوی اداری به‌صورت زنده: از نامه واردهٔ ساختگی تا پیش‌نویس پاسخ، با تمام گام‌های نام‌زدایی، پرسش، مقابله با قانون و نشاندن روی سربرگ. شرکت‌کنندگان سرعت و دقت را با چشم می‌بینند.',
        bodyEn: 'A live administrative scenario: from a synthetic inbound letter to a reply draft, with every anonymization, prompting, statute-check and letterhead step. Participants see speed and accuracy with their own eyes.',
        examplesFa: [
          'سناریوی منتخب سالن: خلاصه یک پرونده شلوغ آموزشی',
          'سناریوی دوم در صورت زمان: جستجوی یک تبصره و درج در نامه',
        ],
        examplesEn: [
          'Hall scenario: summarizing a busy training case file',
          'Second scenario if time allows: finding a legal note and inserting it in a letter',
        ],
        stepsFa: [
          'صورت مسئله روی پرده می‌آید (داده ساختگی).',
          'مجری گام‌ها را با صدای بلند اجرا می‌کند.',
          'دو نفر از حاضران خروجی را نقد می‌کنند.',
        ],
        stepsEn: [
          'The problem statement appears on screen (synthetic data).',
          'The facilitator executes the steps out loud.',
          'Two participants critique the output.',
        ],
        securityFa: 'نمایش زنده فقط با داده آموزشی از پیش آماده‌شده. هیچ کس پرونده روی میز خود را باز نمی‌کند.',
        securityEn: 'The live demo uses only pre-prepared training data. Nobody opens a file from their own desk.',
        nested: [
          {
            id: 'qa-demo-rubric',
            titleFa: 'برگه ارزیابی خروجی زنده',
            titleEn: 'Live-output score sheet',
            bodyFa: 'درستی قانونی، کامل بودن بندهای اجباری، لحن اداری، نبود نشت هویتی، و قابل‌امضابودن. اگر یکی از پنج مورد رد شود، خروجی رد است.',
            bodyEn: 'Legal correctness, completeness of mandatory clauses, official tone, no identity leakage, and signability. If one of the five fails, the output fails.',
          },
        ],
      },
      {
        id: 'qa-ask',
        img: '/img/bg-court.jpg',
        titleFa: 'پاسخ به سوالات و چالش‌های کارکنان',
        titleEn: 'Answers to staff questions and challenges',
        bodyFa: 'بررسی دغدغه‌های اجرایی حاضران در دادگستری: محدودیت سامانه، حجم کار، مقاومت واحدها، و «اگر ابزار اشتباه گفت چه؟». سؤال‌ها روی تخته جمع و به اقدام قابل‌اجرا در ۳۰ روز آینده وصل می‌شوند.',
        bodyEn: 'Operational concerns of those present: system limits, workload, unit resistance, and “what if the tool is wrong?”. Questions are collected on the board and tied to an action that can be done in the next 30 days.',
        examplesFa: [
          'چگونه رئیس شعبه استفاده را ابلاغ کند بدون نقض محرمانگی',
          'اگر اینترنت اداری فیلتر باشد، مسیر مدل محلی چیست',
        ],
        examplesEn: [
          'How a branch chief can mandate use without breaking confidentiality',
          'If official internet is filtered, what is the local-model path',
        ],
        stepsFa: [
          'هر شرکت‌کننده یک چالش می‌نویسد.',
          'سه چالش پرتکرار انتخاب می‌شود.',
          'برای هر کدام یک اقدام کوچک ۳۰روزه تعریف می‌شود.',
        ],
        stepsEn: [
          'Each participant writes one challenge.',
          'The three most frequent are selected.',
          'A small 30-day action is defined for each.',
        ],
        securityFa: 'در پرسش و پاسخ نیز از ذکر مشخصات پرونده‌های جاری خودداری شود.',
        securityEn: 'Even in Q&A, do not mention particulars of current cases.',
        nested: [
          {
            id: 'qa-ask-30',
            titleFa: 'بسته ۳۰روزه پس از کارگاه',
            titleEn: 'The 30-day pack after the workshop',
            bodyFa: 'یک برگه چک‌لیست امنیت، سه الگوی پرسش، یک سناریوی تمرینی شعبه، و نام فرد رابط. این بسته در پایان جلسه تحویل می‌شود.',
            bodyEn: 'One security checklist sheet, three prompt patterns, one branch practice scenario, and the name of a liaison. This pack is handed over at the end of the session.',
          },
        ],
      },
    ],
  },
]

export const methods = [
  {
    id: 'simple',
    icon: 'Languages',
    titleFa: 'زبان ساده و کاربردی',
    titleEn: 'Simple, practical language',
    bodyFa: 'از به‌کارگیری اصطلاحات پیچیده برنامه‌نویسی و مهندسی پرهیز می‌شود. روی «نحوه استفاده از ابزار» برای حل مشکلات روزمره اداری تمرکز می‌کنیم؛ نه معماری مدل و نه کدنویسی.',
    bodyEn: 'Complex programming and engineering terms are avoided. We focus on how to use the tool for everyday administrative problems — not on model architecture or coding.',
  },
  {
    id: 'examples',
    icon: 'Scale',
    titleFa: 'مثال‌های ملموس دادگستری',
    titleEn: 'Concrete judiciary examples',
    bodyFa: 'سناریوهایی که کارکنان روزانه با آن درگیرند: خلاصه کردن یک پرونده شلوغ، تنظیم فرم‌های استاندارد اداری، یا جستجوی یک تبصره قانونی خاص.',
    bodyEn: 'Scenarios staff live with every day: summarizing a busy file, filling standard administrative forms, or searching a specific legal note.',
  },
  {
    id: 'sec',
    icon: 'ShieldAlert',
    titleFa: 'تاکید ویژه بر امنیت و محرمانگی',
    titleEn: 'Special emphasis on security and confidentiality',
    bodyFa: 'مهم‌ترین دغدغه در دادگستری حفظ اطلاعات محرمانه است. روش‌های استفاده از مدل‌های محلی و شیوه نام‌زدایی داده‌ها قبل از ورود به ابزارها به‌صورت عملی توضیح داده می‌شود.',
    bodyEn: 'The highest concern is protecting confidential information. Local-model use and anonymization before any tool are explained hands-on.',
  },
  {
    id: 'demo',
    icon: 'MonitorPlay',
    titleFa: 'نمایش زنده (Live Demo)',
    titleEn: 'Live demo',
    bodyFa: 'به‌جای ارائه فقط اسلاید، یک ابزار هوش مصنوعی به‌صورت زنده نمایش داده می‌شود تا شرکت‌کنندگان سرعت و دقت کار را مشاهده کنند.',
    bodyEn: 'Instead of slides only, an AI tool is demonstrated live so participants can see the speed and accuracy of the work.',
  },
  {
    id: 'interactive',
    icon: 'Users',
    titleFa: 'تعاملی نگه داشتن جلسه',
    titleEn: 'Keeping the session interactive',
    bodyFa: 'با طرح سؤال درباره مشکلات رایج اداری، حاضران در بحث مشارکت می‌کنند تا راهکارهای هوش مصنوعی بر اساس نیازهای واقعی آن‌ها ارائه شود.',
    bodyEn: 'By asking about common administrative problems, those present join the discussion so AI methods are offered on the basis of their real needs.',
  },
]

export const tools = [
  {
    id: 'draft',
    icon: 'PenLine',
    img: '/img/bg-automation.jpg',
    titleFa: 'پیش‌نویس نامه و پاسخ اداری',
    titleEn: 'Letter and administrative-reply drafts',
    bodyFa: 'از روی یک دستور کوتاه و یک نمونه لحن شعبه، پیش‌نویس نامه رسمی ساخته می‌شود. انسان ویرایش و امضا می‌کند.',
    bodyEn: 'From a short instruction and one branch tone sample, an official letter draft is produced. A human edits and signs.',
  },
  {
    id: 'summary',
    icon: 'Files',
    img: '/img/bg-docs.jpg',
    titleFa: 'خلاصه‌سازی گزارش و پرونده',
    titleEn: 'Report and case summarization',
    bodyFa: 'متن طولانی (نام‌زدایی‌شده) به خلاصه با تیترهای اجباری تبدیل می‌شود: خواسته، ادله، گردش، اقدام لازم.',
    bodyEn: 'A long (anonymized) text becomes a brief with mandatory headings: claim, evidence, history, required action.',
  },
  {
    id: 'classify',
    icon: 'FolderTree',
    img: '/img/bg-automation.jpg',
    titleFa: 'دسته‌بندی مکاتبات وارده',
    titleEn: 'Inbound correspondence classification',
    bodyFa: 'نامه‌ها در چند برچسب از پیش تعریف‌شده (فوری، استعلام، وقت نظارت، سایر) قرار می‌گیرند تا ارجاع سریع‌تر شود.',
    bodyEn: 'Letters are placed in predefined labels (urgent, inquiry, supervision hearing, other) so referral is faster.',
  },
  {
    id: 'search',
    icon: 'Search',
    img: '/img/bg-search.jpg',
    titleFa: 'جستجوی مقید در قوانین',
    titleEn: 'Constrained search in statutes',
    bodyFa: 'پرسش با ذکر قانون و ماده محدود می‌شود؛ مدل فقط نقل می‌کند و انسان با سامانه ملی قوانین مقابله می‌کند.',
    bodyEn: 'The question is constrained by statute and article; the model only quotes and a human checks the national statutes system.',
  },
  {
    id: 'ocr',
    icon: 'ScanText',
    img: '/img/bg-docs.jpg',
    titleFa: 'تبدیل سند تصویری به متن',
    titleEn: 'Image document to text',
    bodyFa: 'OCR داخلی برای دادخواست و فرم اسکن‌شده. اعداد کلیدی حتماً با چشم تأیید می‌شوند.',
    bodyEn: 'Internal OCR for scanned petitions and forms. Key numbers are always confirmed by eye.',
  },
  {
    id: 'local',
    icon: 'Server',
    img: '/img/bg-security.jpg',
    titleFa: 'مدل محلی و محیط بسته',
    titleEn: 'Local model and closed environment',
    bodyFa: 'مسیر توصیه‌شده برای متن حساس: اجرا روی شبکه داخلی، بدون خروج داده به اینترنت عمومی.',
    bodyEn: 'The recommended path for sensitive text: run on the internal network, with no data leaving to the public internet.',
  },
]

export const checklist = [
  { id: 'c1', fa: 'آیا این داده متعلق به پرونده واقعی است؟ اگر بله، ابزار آنلاین ممنوع است.', en: 'Does this data belong to a real case? If yes, online tools are forbidden.' },
  { id: 'c2', fa: 'نام، کد ملی، نشانی، حساب و شماره پرونده حذف یا جایگزین شده‌اند؟', en: 'Have name, national ID, address, account and case number been removed or replaced?' },
  { id: 'c3', fa: 'آیا از حساب سازمانی و تنظیمات «عدم ذخیره گفتگو» استفاده می‌کنم؟', en: 'Am I using an organizational account and “do not store chats” settings?' },
  { id: 'c4', fa: 'آیا خروجی را با متن قانون / محتویات پرونده مقابله کرده‌ام؟', en: 'Have I checked the output against the statute / the file?' },
  { id: 'c5', fa: 'آیا هر عدد و تاریخ را با چشم تأیید کرده‌ام؟', en: 'Have I confirmed every number and date by eye?' },
  { id: 'c6', fa: 'آیا حاضرم پای این خروجی را به‌عنوان کارمند/قاضی امضا کنم؟', en: 'Am I willing to sign this output as a clerk/judge?' },
  { id: 'c7', fa: 'اگر مدل منبع نداد، خروجی را کنار گذاشته‌ام؟', en: 'If the model gave no source, have I discarded the output?' },
  { id: 'c8', fa: 'آیا مسیر مدل محلی برای داده حساس بررسی شده است؟', en: 'Has the local-model path been considered for sensitive data?' },
]

export const scenarios = [
  {
    id: 'busy-case',
    img: '/img/bg-docs.jpg',
    icon: 'Briefcase',
    titleFa: 'خلاصه کردن یک پرونده شلوغ',
    titleEn: 'Summarizing a busy case file',
    warnFa: 'فقط با نسخه آموزشی و نام‌زدایی‌شده. پرونده روی میز خود را وارد ابزار نکنید.',
    warnEn: 'Training and anonymized copy only. Do not put the file on your desk into a tool.',
    steps: [
      {
        titleFa: 'هدف را بنویسید',
        titleEn: 'Write the goal',
        bodyFa: 'خروجی مورد نیاز: خلاصه دو صفحه‌ای برای جلسه امروز با تیترهای اتهام، ادله، قرارهای قبلی، و سؤال باز. این تیترها را خودتان تعیین می‌کنید؛ نه مدل.',
        bodyEn: 'Required output: a two-page brief for today’s hearing with headings for charge, evidence, prior orders and open question. You set these headings — not the model.',
      },
      {
        titleFa: 'نام‌زدایی کنید',
        titleEn: 'Anonymize',
        bodyFa: 'نام طرفین، کد ملی، نشانی و شماره پرونده را با برچسب آموزشی عوض کنید. یک‌بار متن را برای نشت هویت بخوانید.',
        bodyEn: 'Replace parties’ names, national IDs, addresses and case numbers with training labels. Eye-scan once for identity leakage.',
      },
      {
        titleFa: 'پرسش را مقید کنید',
        titleEn: 'Constrain the prompt',
        bodyFa: '«فقط بر اساس متن زیر خلاصه کن. چیزی اضافه نکن. اگر در متن نبود بنویس نامشخص. ساختار: …»',
        bodyEn: '“Summarize only from the text below. Add nothing. If it is not in the text, write unknown. Structure: …”',
      },
      {
        titleFa: 'مقابله و امضا',
        titleEn: 'Check and sign',
        bodyFa: 'هر بند را با اوراق پرونده آموزشی مقابله کنید. سپس هویت واقعی را فقط داخل سامانه رسمی برگردانید و امضا کنید.',
        bodyEn: 'Check every clause against the training file. Restore real identity only inside the official system, then sign.',
      },
    ],
  },
  {
    id: 'letter',
    img: '/img/bg-automation.jpg',
    icon: 'Mail',
    titleFa: 'تنظیم نامه اداری استاندارد',
    titleEn: 'Drafting a standard administrative letter',
    warnFa: 'مشخصات گیرنده واقعی را پس از تهیه پیش‌نویس، در سربرگ شعبه وارد کنید؛ نه در ابزار.',
    warnEn: 'Enter the real addressee on branch letterhead after the draft — not inside the tool.',
    steps: [
      {
        titleFa: 'نوع نامه را انتخاب کنید',
        titleEn: 'Choose the letter type',
        bodyFa: 'پاسخ استعلام، درخواست همکاری، اعلام وقت، یا پیگیری. هر نوع یک قالب ثابت دارد.',
        bodyEn: 'Inquiry reply, cooperation request, hearing notice, or follow-up. Each type has a fixed template.',
      },
      {
        titleFa: 'نمونه لحن بدهید',
        titleEn: 'Give a tone sample',
        bodyFa: 'یک نامه خوب قبلی شعبه (بدون داده حساس) را به‌عنوان مرجع لحن به ابزار نشان دهید.',
        bodyEn: 'Show the tool one previous good branch letter (with no sensitive data) as the tone reference.',
      },
      {
        titleFa: 'پیش‌نویس را کوتاه کنید',
        titleEn: 'Shorten the draft',
        bodyFa: 'از ابزار بخواهید نسخه را به حداکثر ۱۸۰ کلمه، رسمی و بدون اغراق کاهش دهد.',
        bodyEn: 'Ask the tool to cut the version to 180 words maximum, formal and without exaggeration.',
      },
      {
        titleFa: 'سربرگ، شماره، امضا',
        titleEn: 'Letterhead, number, signature',
        bodyFa: 'متن را به سامانه مکاتبات ببرید، شماره و تاریخ بزنید، پیوست‌ها را کنترل و امضا کنید.',
        bodyEn: 'Move the text into the correspondence system, number and date it, check attachments and sign.',
      },
    ],
  },
  {
    id: 'note',
    img: '/img/bg-search.jpg',
    icon: 'ScrollText',
    titleFa: 'جستجوی یک تبصره قانونی خاص',
    titleEn: 'Searching a specific legal note',
    warnFa: 'مدل منبع قانون نیست. نقل بدون مقابله با سامانه ملی قوانین ممنوع است.',
    warnEn: 'The model is not a source of law. Quoting without checking the national statutes system is forbidden.',
    steps: [
      {
        titleFa: 'سؤال را محدود کنید',
        titleEn: 'Narrow the question',
        bodyFa: 'نام قانون، شماره ماده یا موضوع دقیق (مثلاً ابلاغ الکترونیکی در آیین دادرسی کیفری).',
        bodyEn: 'Statute name, article number or exact topic (e.g. electronic service in criminal procedure).',
      },
      {
        titleFa: 'نقل بخواهید نه فتوا',
        titleEn: 'Ask for a quote, not a ruling',
        bodyFa: '«متن ماده را نقل کن. اگر دقیق نیستی بگو نمی‌دانم. تفسیر نکن.»',
        bodyEn: '“Quote the article. If you are not sure, say you do not know. Do not interpret.”',
      },
      {
        titleFa: 'با متن رسمی مقابله کنید',
        titleEn: 'Check against the official text',
        bodyFa: 'سامانه ملی قوانین یا کتاب شعبه را باز کنید. شماره ماده، تبصره و تاریخ اصلاح را تطبیق دهید.',
        bodyEn: 'Open the national statutes system or the branch book. Match article number, note and amendment date.',
      },
      {
        titleFa: 'در نامه فقط متن تأییدشده',
        titleEn: 'Only confirmed text in the letter',
        bodyFa: 'آنچه وارد نامه یا گزارش می‌شود باید متنی باشد که خودتان در منبع رسمی دیده‌اید.',
        bodyEn: 'Whatever enters a letter or report must be text you have seen yourself in an official source.',
      },
    ],
  },
  {
    id: 'form',
    img: '/img/bg-automation.jpg',
    icon: 'ClipboardList',
    titleFa: 'تنظیم فرم‌های استاندارد اداری',
    titleEn: 'Filling standard administrative forms',
    warnFa: 'فیلدهای هویتی را ابزار پر نکند. این فیلدها فقط در سامانه داخلی تکمیل می‌شوند.',
    warnEn: 'Identity fields must not be filled by the tool. They are completed only in the internal system.',
    steps: [
      {
        titleFa: 'فیلدهای غیرهویتی را جدا کنید',
        titleEn: 'Separate non-identity fields',
        bodyFa: 'شرح درخواست، مستندات پیوست، و سابقه اقدام — این‌ها را می‌توان با ابزار پیش‌نویس کرد.',
        bodyEn: 'Request description, attached documents and action history — these can be drafted with a tool.',
      },
      {
        titleFa: 'الگوی فیلد به فیلد',
        titleEn: 'Field-by-field pattern',
        bodyFa: 'از ابزار بخواهید برای هر فیلد یک پیشنهاد کوتاه بدهد؛ نه یک متن یکپارچه غیرقابل کنترل.',
        bodyEn: 'Ask the tool for a short suggestion per field — not one uncontrollable block of text.',
      },
      {
        titleFa: 'کنترل اجباری اعداد',
        titleEn: 'Mandatory number check',
        bodyFa: 'مبلغ، تاریخ و شماره را با سند کاغذی یکی‌یکی تیک بزنید.',
        bodyEn: 'Tick amount, date and number one by one against the paper document.',
      },
      {
        titleFa: 'ثبت در سامانه',
        titleEn: 'Register in the system',
        bodyFa: 'نسخه نهایی فقط در سامانه اداری شعبه ثبت می‌شود؛ نه در تاریخچه گفتگوی ابزار.',
        bodyEn: 'The final version is registered only in the branch administrative system — not in the tool’s chat history.',
      },
    ],
  },
  {
    id: 'ocr-scen',
    img: '/img/bg-docs.jpg',
    icon: 'ScanLine',
    titleFa: 'تبدیل دادخواست اسکن‌شده به متن',
    titleEn: 'Turning a scanned petition into text',
    warnFa: 'آپلود در OCRهای عمومی اینترنت معادل خروج پرونده از دادگستری است.',
    warnEn: 'Upload to public internet OCR is equivalent to taking the file out of the courthouse.',
    steps: [
      {
        titleFa: 'کیفیت اسکن',
        titleEn: 'Scan quality',
        bodyFa: 'صفحه صاف، نور یکنواخت، وضوح کافی. مهر و حاشیه را در صورت امکان جدا کنید.',
        bodyEn: 'Flat page, even light, enough resolution. Separate stamps and margins if possible.',
      },
      {
        titleFa: 'فقط مسیر داخلی',
        titleEn: 'Internal path only',
        bodyFa: 'OCR روی سامانه یا مدل محلی. اگر مسیر داخلی نیست، این سناریو را اجرا نکنید.',
        bodyEn: 'OCR on the system or a local model. If there is no internal path, do not run this scenario.',
      },
      {
        titleFa: 'بازنویسی و تأیید',
        titleEn: 'Rewrite and confirm',
        bodyFa: 'متن استخراج‌شده را بخوانید. اعداد، نام‌ها و خواسته را با تصویر اصلی تطبیق دهید.',
        bodyEn: 'Read the extracted text. Match numbers, names and the claim with the original image.',
      },
      {
        titleFa: 'بایگانی قابل جستجو',
        titleEn: 'Searchable archive',
        bodyFa: 'نسخه تأییدشده را در بایگانی دیجیتال شعبه با سطح دسترسی مشخص ذخیره کنید.',
        bodyEn: 'Store the confirmed version in the branch digital archive with a defined access level.',
      },
    ],
  },
]

export function findTopic(id) {
  for (const s of sections) {
    for (const t of s.topics) {
      if (t.id === id) return { section: s, topic: t, nested: null }
      const n = (t.nested || []).find((x) => x.id === id)
      if (n) return { section: s, topic: t, nested: n }
    }
  }
  return null
}

export function findSection(id) {
  return sections.find((s) => s.id === id) || null
}

export function findPillar(id) {
  return pillars.find((p) => p.id === id) || null
}

export function findScenario(id) {
  return scenarios.find((s) => s.id === id) || null
}

export function findTool(id) {
  return tools.find((t) => t.id === id) || null
}

export function findMethod(id) {
  return methods.find((m) => m.id === id) || null
}
