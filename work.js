/* =====================================================================
   yeganomaly — portfolio data
   ---------------------------------------------------------------------
   برای اضافه کردن یه کار جدید: یکی از بلوک‌های { ... } پایین رو کپی کن،
   بعد از آخرین بلوک بچسبون (با یه کاما بینشون) و مقدارها رو عوض کن.
   ترتیب مهم نیست — سایت خودش جدیدترین کار رو اول نشون می‌ده.

   فیلدها:
     title       اسم پروژه                                   (لازم)
     type        نوع کار: "build log" / "case study" / "research" / "video" / ...
     date        تاریخ به شکل "2026-08"                       (لازم)
     status      "live" = منتشر شده | "wip" = در حال ساخت | "soon" = به‌زودی
     summary     یه یا دو جمله توضیح
     categories  دسته‌ها برای فیلتر، مثلا ["ai agents", "web3"]
     tags        ابزارها / کلیدواژه‌ها، مثلا ["hermes", "vps"]
     cover       (اختیاری) عکس کاور، مثلا "assets/work/hermes.jpg"
                 اگه نذاری، سایت خودش یه کاور برندشده می‌سازه
     links       (اختیاری) لینک‌ها — اولی لینک اصلی کارت می‌شه
                 [{ "label": "read", "url": "https://..." }]
     featured    (اختیاری) true = کارت بزرگ تمام‌عرض، همیشه اول
   ===================================================================== */

window.YEGANOMALY_WORK = [
  {
    title: "Hermes Agent Setup",
    type: "build log",
    date: "2026-08",
    status: "wip",
    summary: "Setting up my first always-on AI agent on a VPS, documenting everything I learned, broke, and fixed along the way.",
    categories: ["ai agents"],
    tags: ["hermes", "vps", "automation"],
    links: [],
    featured: true
  },
  {
    title: "Agent-Readable Markets",
    type: "research",
    date: "2026-08",
    status: "soon",
    summary: "Exploring how AI agents can research prediction markets through markdown, llms.txt, and public market data, without relying on the frontend.",
    categories: ["ai agents", "web3"],
    tags: ["prediction markets", "llms.txt"],
    links: []
  },
  {
    title: "Building Yeganomaly",
    type: "case study",
    date: "2026-08",
    status: "wip",
    summary: "Turning my identity into a playful personal site while learning design systems, responsive layouts, and vibe coding in public.",
    categories: ["vibe coding", "design"],
    tags: ["html", "css", "design system"],
    links: []
  }
];
