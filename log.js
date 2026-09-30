/* =====================================================================
   yeganomaly — log (blog / articles / viral posts)
   ---------------------------------------------------------------------
   برای اضافه کردن یه پست جدید: یکی از بلوک‌های پایین رو کپی کن، بعد از
   آخرین بلوک بچسبون (با کاما) و مقدارها رو عوض کن. سایت خودش جدیدترین
   رو اول نشون می‌ده.

   kind    نوع:
             "article" = مقاله (تیتر + خلاصه)
             "post"    = توییت / پست وایرال (متن خود پست نمایش داده می‌شه)
             "note"    = یادداشت کوتاه / build log
   date    "2026-09-12"  (روز هم می‌تونی بذاری)
   title   تیتر (برای article و note)
   text    متن خود پست (برای post) — دقیقاً همون چیزی که توییت کردی
   summary یکی دو جمله خلاصه (برای article)
   url     لینک (اختیاری). اگه نذاری، کنارش "draft" می‌خوره
   where   کجا منتشر شده: "x" / "medium" / "mirror" / "substack" / ...
   stats   (اختیاری، فقط عدد واقعی!) مثلا "120k views"
   pin     (اختیاری) true = همیشه اول
   ===================================================================== */

window.YEGANOMALY_LOG = [
  {
    kind: "article",
    date: "2026-09",
    title: "The Best AI Model Won't Win. The Best Agent Harness Will.",
    summary: "Everyone argues about which model is smartest. The real fight is the harness around it: memory, tools, permissions and the loop that makes an agent actually useful.",
    where: "",
    url: "",
    pin: true
  },
  {
    kind: "article",
    date: "2026-08",
    title: "From Vibes to Edge: Building a Hermes Research Agent for Limitless",
    summary: "AI is not an edge by itself. How I built a research and paper-trading agent for prediction markets that measures whether it's actually calibrated before risking money.",
    where: "",
    url: ""
  }
];
