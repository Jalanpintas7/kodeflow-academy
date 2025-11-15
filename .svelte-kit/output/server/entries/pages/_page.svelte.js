import "clsx";
import { w as attr, x as ensure_array_like, y as attr_class, z as stringify, G as attr_style } from "../../chunks/index2.js";
import { S as ScrollReveal } from "../../chunks/ScrollReveal.js";
import { l as ssr_context, j as escape_html } from "../../chunks/context.js";
import { F as Footer } from "../../chunks/Footer.js";
function onDestroy(fn) {
  /** @type {SSRContext} */
  ssr_context.r.on_destroy(fn);
}
const heroChild = "/_app/immutable/assets/hero-child.DxmbZyKa.png";
function CountUp($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      suffix = "",
      prefix = "",
      decimals = 0
    } = $$props;
    let currentValue = 0;
    const formattedValue = prefix + currentValue.toFixed(decimals) + suffix;
    $$renderer2.push(`<span>${escape_html(formattedValue)}</span>`);
  });
}
function Hero($$renderer) {
  $$renderer.push(`<section id="home" class="relative overflow-hidden bg-linear-to-br from-primary-500 via-primary-600 to-primary-700 min-h-screen m-5 rounded-3xl svelte-gzujjl"><div class="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block svelte-gzujjl"><div class="absolute top-20 left-10 w-32 h-32 opacity-20 animate-float svelte-gzujjl"><svg viewBox="0 0 100 100" class="w-full h-full text-white svelte-gzujjl"><path d="M 0 50 Q 25 30, 50 50 T 100 50" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" class="svelte-gzujjl"></path></svg></div> <div class="absolute bottom-32 left-10 w-24 h-24 opacity-20 animate-float svelte-gzujjl" style="animation-delay: 0.5s;"><svg viewBox="0 0 100 100" class="w-full h-full text-white svelte-gzujjl"><path d="M 0 50 Q 25 70, 50 50 T 100 50" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" class="svelte-gzujjl"></path></svg></div> <div class="absolute top-1/3 right-20 w-40 h-40 opacity-15 animate-float svelte-gzujjl" style="animation-delay: 1s;"><svg viewBox="0 0 100 100" class="w-full h-full text-white svelte-gzujjl"><path d="M 0 50 Q 25 30, 50 50 T 100 50" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" class="svelte-gzujjl"></path></svg></div> <div class="absolute bottom-20 right-32 w-28 h-28 opacity-40 animate-float svelte-gzujjl" style="animation-delay: 1.5s;"><svg viewBox="0 0 100 100" class="w-full h-full text-accent-400 svelte-gzujjl"><path d="M 0 50 Q 25 70, 50 50 T 100 50" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round" class="svelte-gzujjl"></path></svg></div> <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl svelte-gzujjl"></div> <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl svelte-gzujjl"></div></div> <div class="container mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10 svelte-gzujjl"><div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-12rem)] svelte-gzujjl"><div class="space-y-8 lg:space-y-10 svelte-gzujjl">`);
  ScrollReveal($$renderer, {
    animation: "fade-up",
    delay: 0,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="space-y-6 svelte-gzujjl"><h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight svelte-gzujjl">Kodeflow <span class="relative inline-block mt-2 svelte-gzujjl"><span class="relative z-10 svelte-gzujjl">Academy</span> <svg class="absolute -left-4 -top-2 w-full h-full svelte-gzujjl" viewBox="0 0 300 100" style="width: 110%; height: 110%;"><ellipse cx="150" cy="50" rx="140" ry="45" fill="none" stroke="var(--color-secondary-500)" stroke-width="4" class="animate-draw svelte-gzujjl"></ellipse></svg></span></h1> <p class="text-white/90 text-lg lg:text-xl max-w-lg leading-relaxed svelte-gzujjl">Belajar Skill Digital, Bersiap Menyambut Era Baru. Tingkatkan
              kompetensi, kuasai teknologi, dan raih peluang di dunia kerja
              modern.</p></div>`);
    }
  });
  $$renderer.push(`<!----> `);
  ScrollReveal($$renderer, {
    animation: "fade-up",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<a href="#about" class="inline-flex items-center gap-3 group cursor-pointer svelte-gzujjl"><span class="bg-secondary-500 hover:bg-secondary-600 text-gray-900 font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 svelte-gzujjl">Pelajari Lebih Lanjut</span> <div class="w-14 h-14 bg-secondary-500 hover:bg-secondary-600 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 svelte-gzujjl"><svg class="w-6 h-6 text-gray-900 transition-transform duration-300 group-hover:translate-x-1 svelte-gzujjl" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" class="svelte-gzujjl"></path></svg></div></a>`);
    }
  });
  $$renderer.push(`<!----> `);
  ScrollReveal($$renderer, {
    animation: "fade-up",
    delay: 400,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="flex flex-wrap gap-3 pt-4 svelte-gzujjl"><div class="bg-white/15 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full hover:bg-white/25 transition-all duration-300 svelte-gzujjl"><span class="text-white text-sm font-semibold flex items-center gap-2 svelte-gzujjl"><span class="w-1.5 h-1.5 bg-secondary-400 rounded-full svelte-gzujjl"></span> Sertifikat Resmi</span></div> <div class="bg-white/15 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full hover:bg-white/25 transition-all duration-300 svelte-gzujjl"><span class="text-white text-sm font-semibold flex items-center gap-2 svelte-gzujjl"><span class="w-1.5 h-1.5 bg-secondary-400 rounded-full svelte-gzujjl"></span> Mentor Berpengalaman</span></div> <div class="bg-white/15 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full hover:bg-white/25 transition-all duration-300 svelte-gzujjl"><span class="text-white text-sm font-semibold flex items-center gap-2 svelte-gzujjl"><span class="w-1.5 h-1.5 bg-secondary-400 rounded-full svelte-gzujjl"></span> Praktik Langsung</span></div></div>`);
    }
  });
  $$renderer.push(`<!----></div> `);
  ScrollReveal($$renderer, {
    animation: "fade-left",
    delay: 300,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="relative z-10 svelte-gzujjl"><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-accent-400 opacity-90 -z-10 animate-blob svelte-gzujjl" style="border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;"><div class="absolute inset-0 opacity-20 svelte-gzujjl"><svg width="100%" height="100%" class="svelte-gzujjl"><defs class="svelte-gzujjl"><pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse" class="svelte-gzujjl"><circle cx="5" cy="5" r="2" fill="white" opacity="0.5" class="svelte-gzujjl"></circle></pattern></defs><rect width="100%" height="100%" fill="url(#dots)" class="svelte-gzujjl"></rect></svg></div></div> <div class="relative mt-12 lg:mt-0 svelte-gzujjl"><div class="relative w-full max-w-md mx-auto svelte-gzujjl"><img${attr("src", heroChild)} alt="Happy student learning with Kodeflow Academy" class="w-full h-auto object-cover svelte-gzujjl"/></div></div> `);
      ScrollReveal($$renderer2, {
        animation: "zoom",
        delay: 600,
        children: ($$renderer3) => {
          $$renderer3.push(`<div class="absolute -bottom-8 left-4 right-4 lg:-bottom-16 lg:left-auto lg:right-0 bg-white/95 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-2xl max-w-sm z-20 border border-white/50 hover:shadow-3xl transition-all duration-300 hover:scale-105 mx-auto lg:mx-0 svelte-gzujjl"><div class="text-center mb-4 lg:mb-6 svelte-gzujjl"><div class="flex items-baseline justify-center gap-1 mb-2 svelte-gzujjl"><h3 class="text-5xl lg:text-6xl xl:text-7xl font-bold bg-linear-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent svelte-gzujjl">`);
          CountUp($$renderer3, {});
          $$renderer3.push(`<!----></h3> <span class="text-3xl lg:text-4xl font-bold text-primary-600 svelte-gzujjl">+</span></div> <p class="text-gray-600 font-medium text-sm svelte-gzujjl">Siswa Telah Bergabung</p></div> <div class="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mb-4 lg:mb-6 svelte-gzujjl"></div> <div class="grid grid-cols-2 gap-3 lg:gap-4 svelte-gzujjl"><div class="text-center svelte-gzujjl"><div class="text-2xl lg:text-3xl font-bold text-primary-600 svelte-gzujjl">15+</div> <div class="text-xs text-gray-600 mt-1 svelte-gzujjl">Program</div></div> <div class="text-center svelte-gzujjl"><div class="text-2xl lg:text-3xl font-bold text-secondary-600 svelte-gzujjl">4.9</div> <div class="text-xs text-gray-600 mt-1 svelte-gzujjl">Rating</div></div></div></div>`);
        },
        $$slots: { default: true }
      });
      $$renderer2.push(`<!----></div>`);
    }
  });
  $$renderer.push(`<!----></div></div></section>`);
}
const sdImage = "/_app/immutable/assets/sd.D5oJKKbD.webp";
const smpImage = "/_app/immutable/assets/smp.DHeQAUDh.webp";
const smaImage = "/_app/immutable/assets/sma.Cdo9sCx2.webp";
const mhsImage = "/_app/immutable/assets/mhs.Dc2d4TFO.png";
function Programs($$renderer) {
  const programs = [
    {
      id: 1,
      ageRange: "6-12 Tahun",
      category: "Anak",
      title: "SD",
      description: "Belajar dasar coding dengan games, puzzle, dan cerita interaktif.",
      bgColor: "bg-accent-400",
      textColor: "text-gray-900",
      imageBg: "bg-cyan-200",
      image: sdImage,
      featured: true
    },
    {
      id: 2,
      ageRange: "13-15 Tahun",
      category: "Remaja",
      title: "SMP",
      description: "Scratch programming, logika dasar, dan kreativitas digital.",
      bgColor: "bg-gray-100",
      textColor: "text-gray-900",
      imageBg: "bg-purple-300",
      image: smpImage,
      featured: false
    },
    {
      id: 3,
      ageRange: "16-18 Tahun",
      category: "Remaja",
      title: "SMA",
      description: "Web/Mobile development dan project based learning.",
      bgColor: "bg-gray-100",
      textColor: "text-gray-900",
      imageBg: "bg-cyan-400",
      image: smaImage,
      featured: false
    },
    {
      id: 4,
      ageRange: "18+ Tahun",
      category: "Dewasa",
      title: "Mahasiswa",
      description: "Full-stack development, mobile apps, dan portfolio building.",
      bgColor: "bg-gray-100",
      textColor: "text-gray-900",
      imageBg: "bg-purple-400",
      image: mhsImage,
      featured: false
    }
  ];
  $$renderer.push(`<section id="programs" class="py-16 lg:py-24 bg-white"><div class="container mx-auto px-6 lg:px-12">`);
  ScrollReveal($$renderer, {
    animation: "fade-up",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="text-center mb-12"><h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Materi Sesuai Tingkatan</h2> <p class="text-gray-600 text-lg max-w-2xl mx-auto">Dirancang khusus untuk sekolah SD, SMP, SMA dan Mahasiswa — kami bantu
          lembaga Anda mempersiapkan generasi unggul di era teknologi tanpa
          perlu repot membangun sistem sendiri.</p></div>`);
    }
  });
  $$renderer.push(`<!----> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
  const each_array = ensure_array_like(programs);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let program = each_array[index];
    ScrollReveal($$renderer, {
      animation: "fade-up",
      delay: index * 100,
      children: ($$renderer2) => {
        $$renderer2.push(`<div${attr_class(`${stringify(program.bgColor)} rounded-3xl overflow-hidden relative`)}><div class="p-6 pb-0"><div class="flex items-start justify-between mb-4"><div class="space-y-2"><div class="inline-block bg-white/80 backdrop-blur-sm rounded-full px-4 py-2"><span${attr_class(`text-xs font-semibold ${stringify(program.textColor)}`)}>${escape_html(program.ageRange)}</span></div> <div class="inline-block bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 ml-2"><span${attr_class(`text-xs font-semibold ${stringify(program.textColor)}`)}>${escape_html(program.category)}</span></div></div> <div class="w-10 h-10 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center"><svg${attr_class(`w-5 h-5 ${stringify(program.textColor)}`)} fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"></circle></svg></div></div> <h3${attr_class(`text-3xl lg:text-4xl font-bold ${stringify(program.textColor)} mb-3 leading-tight`)}>${escape_html(program.title)}</h3> <p${attr_class(`${stringify(program.textColor)} opacity-80 text-sm mb-6 min-h-12`)}>${escape_html(program.description)}</p></div> <div class="relative overflow-hidden aspect-4/5"><img${attr("src", program.image)}${attr("alt", program.title)} class="w-full h-full object-cover object-top z-10"/> <div class="flex items-center gap-3 z-40 absolute bottom-10 right-3 bg-white/50 backdrop-blur-sm rounded-3xl hover:bg-white/70 transition-all duration-300"><button${attr_class(`p-6 ${stringify(program.textColor)} font-semibold px-6 py-3 rounded-full transition-all duration-300 text-sm hover:opacity-80`)}>Read More</button> <div class="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"><svg${attr_class(`w-4 h-4 ${stringify(program.textColor)}`)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></div></div></div></div>`);
      }
    });
  }
  $$renderer.push(`<!--]--></div></div></section>`);
}
function TeachingMethod($$renderer) {
  $$renderer.push(`<section id="about" class="py-16 lg:py-24 bg-linear-to-b from-purple-50 to-white"><div class="container mx-auto px-6 lg:px-12">`);
  ScrollReveal($$renderer, {
    animation: "fade-up",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="text-center mb-12 lg:mb-16"><h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Bagaimana Kami Mengajar <span class="block text-purple-600">di Kodeflow.id</span></h2> <p class="text-gray-600 text-lg max-w-3xl mx-auto">Metode pembelajaran yang terbukti efektif untuk mengembangkan skill
          digital anak-anak</p></div>`);
    }
  });
  $$renderer.push(`<!----> `);
  ScrollReveal($$renderer, {
    animation: "fade-up",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] sm:auto-rows-[260px] md:auto-rows-[280px] gap-4 lg:gap-6"><div class="group relative bg-purple-200 rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl col-span-1 row-span-1 md:row-span-2 svelte-fjq02v"><div class="relative z-10 h-full flex flex-col"><div class="mb-4"><h3 class="text-2xl lg:text-3xl font-bold text-purple-900 mb-3">Project-Based Learning</h3></div> <p class="text-purple-800 text-sm lg:text-base leading-relaxed mb-6">Setiap materi dirancang untuk learning by doing, dimana anak-anak
              langsung praktik membuat project nyata.</p> <div class="mt-auto flex items-end justify-center"><div class="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-purple-300/50 rounded-full flex items-center justify-center"><svg class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-purple-600 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></div></div></div> <div class="absolute -right-8 -bottom-8 w-40 h-40 bg-purple-300 rounded-full opacity-30 blur-2xl"></div></div> <div class="group relative bg-yellow-200 rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl col-span-1 row-span-1 svelte-fjq02v"><div class="relative z-10 h-full flex flex-col"><h3 class="text-xl lg:text-2xl font-bold text-yellow-900 mb-3">Level Bertahap Sesuai Usia</h3> <p class="text-yellow-800 text-sm leading-relaxed">Sistem pembelajaran dari konsep dasar hingga lanjutan, disesuaikan
              dengan perkembangan kognitif anak.</p></div> <div class="absolute -right-4 bottom-2 w-20 h-20 bg-yellow-300 rounded-full opacity-40"></div></div> <div class="group relative bg-pink-200 rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl col-span-1 row-span-1 svelte-fjq02v"><div class="relative z-10 h-full flex flex-col"><h3 class="text-xl lg:text-2xl font-bold text-pink-900 mb-3">Kurikulum Fleksibel &amp; Terstruktur</h3> <p class="text-pink-800 text-sm leading-relaxed">Modul belajar yang dapat disesuaikan dengan kebutuhan sekolah
              namun tetap mengikuti standar industri.</p></div> <div class="absolute right-4 top-4 w-16 h-16 bg-pink-300 rounded-full opacity-30 blur-xl"></div></div> <div class="group relative bg-blue-200 rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl col-span-1 row-span-1 md:row-span-2 svelte-fjq02v"><div class="relative z-10 h-full flex flex-col"><div class="mb-4"><h3 class="text-2xl lg:text-3xl font-bold text-blue-900 mb-3">Fun &amp; Visual Tools</h3></div> <p class="text-blue-800 text-sm lg:text-base leading-relaxed mb-6">Kami menggunakan platform pembelajaran interaktif dengan
              gamifikasi untuk meningkatkan engagement.</p> <div class="mt-auto flex items-end justify-center"><div class="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-blue-300/50 rounded-2xl flex items-center justify-center transform rotate-6"><svg class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-600 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div></div></div> <div class="absolute -left-8 top-1/2 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-2xl"></div></div> <div class="group relative bg-green-200 rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl col-span-1 md:col-span-2 lg:col-span-2 row-span-1 svelte-fjq02v"><div class="relative z-10 h-full flex flex-col md:flex-row items-start md:items-center gap-6"><div class="flex-1"><h3 class="text-xl lg:text-2xl font-bold text-green-900 mb-3">Mentorship Personal</h3> <p class="text-green-800 text-sm lg:text-base leading-relaxed">Setiap siswa mendapat pendampingan dari mentor berpengalaman
                untuk memaksimalkan potensi.</p></div> <div class="hidden md:flex items-center justify-center"><div class="w-32 h-32 bg-green-300/50 rounded-full flex items-center justify-center"><svg class="w-20 h-20 text-green-600 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div></div></div> <div class="absolute -right-8 -top-8 w-32 h-32 bg-green-300 rounded-full opacity-20 blur-2xl"></div></div></div>`);
    }
  });
  $$renderer.push(`<!----></div></section>`);
}
const webDevImage = "/_app/immutable/assets/appdev.DHXYQuSg.png";
const gameDevImage = "/_app/immutable/assets/gamedev.CumAWpHD.png";
const uiUxImage = "/_app/immutable/assets/ux.DB2lxZMk.png";
const digitalMarketingImage = "/_app/immutable/assets/digitalmarketing.CmjzFcXS.png";
const iotRoboticsImage = "/_app/immutable/assets/scratch.CsFXRCvz.png";
const n8nAutomationImage = "/_app/immutable/assets/thunkable.CqSvGTZR.png";
function Materials($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let currentIndex = 0;
    let isAutoPlaying = true;
    let autoPlayInterval;
    const materials = [
      {
        id: 1,
        title: "Web & App Development",
        description: "Bangun aplikasi Web dan Mobile secara visual menggunakan platform modern seperti Scratch, Thunkable, dan FlutterFlow tanpa perlu menulis kode.",
        image: webDevImage,
        link: "/materi/web-mobile-app",
        colorClass: "bg-primary-600",
        hoverColorClass: "hover:bg-primary-700",
        bgColorClass: "bg-primary-50",
        textColorClass: "text-primary-600",
        ringColorClass: "ring-primary-500"
      },
      {
        id: 2,
        title: "Game Development",
        description: "Kembangkan game seru menggunakan Unity, Roblox Studio, dan game engine modern lainnya.",
        image: gameDevImage,
        link: "/materi/game-development",
        colorClass: "bg-primary-600",
        hoverColorClass: "hover:bg-primary-700",
        bgColorClass: "bg-primary-50",
        textColorClass: "text-primary-600",
        ringColorClass: "ring-primary-500"
      },
      {
        id: 3,
        title: "Desain UI/UX",
        description: "Pelajari prinsip desain interface dan user experience yang menarik menggunakan Figma dan Adobe XD.",
        image: uiUxImage,
        link: "/materi/design-ui-ux",
        colorClass: "bg-primary-600",
        hoverColorClass: "hover:bg-primary-700",
        bgColorClass: "bg-primary-50",
        textColorClass: "text-primary-600",
        ringColorClass: "ring-primary-500"
      },
      {
        id: 4,
        title: "Digital Marketing",
        description: "Kuasai strategi pemasaran digital, SEO, social media marketing, dan content strategy.",
        image: digitalMarketingImage,
        link: "/materi/digital-marketing",
        colorClass: "bg-primary-600",
        hoverColorClass: "hover:bg-primary-700",
        bgColorClass: "bg-primary-50",
        textColorClass: "text-primary-600",
        ringColorClass: "ring-primary-500"
      },
      {
        id: 5,
        title: "IoT dan Robotik",
        description: "Eksplorasi Internet of Things dan pembuatan robot dengan Arduino, Raspberry Pi, dan sensor modern.",
        image: iotRoboticsImage,
        link: "/materi/iot-robotik",
        colorClass: "bg-primary-600",
        hoverColorClass: "hover:bg-primary-700",
        bgColorClass: "bg-primary-50",
        textColorClass: "text-primary-600",
        ringColorClass: "ring-primary-500"
      },
      {
        id: 6,
        title: "AI & N8N Automation",
        description: "Otomatisasi workflow Anda dengan N8N, AI tools, dan platform no-code untuk produktivitas maksimal.",
        image: n8nAutomationImage,
        link: "/materi/automation",
        colorClass: "bg-primary-600",
        hoverColorClass: "hover:bg-primary-700",
        bgColorClass: "bg-primary-50",
        textColorClass: "text-primary-600",
        ringColorClass: "ring-primary-500"
      }
    ];
    function nextSlide() {
      currentIndex = (currentIndex + 1) % materials.length;
    }
    function startAutoPlay() {
      if (autoPlayInterval) return;
      isAutoPlaying = true;
      autoPlayInterval = setInterval(nextSlide, 5e3);
    }
    function stopAutoPlay() {
      isAutoPlaying = false;
      if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
      }
    }
    onDestroy(() => {
      stopAutoPlay();
    });
    if (typeof window !== "undefined" && isAutoPlaying && !autoPlayInterval) {
      startAutoPlay();
    }
    $$renderer2.push(`<section id="materials" class="py-12 sm:py-16 lg:py-24 xl:py-32 bg-linear-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"><div class="absolute inset-0 overflow-hidden pointer-events-none"><div class="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"></div> <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl"></div></div> <div class="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">`);
    ScrollReveal($$renderer2, {
      animation: "fade-up",
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="text-center mb-10 sm:mb-12 lg:mb-16 xl:mb-20"><div class="inline-block mb-3 sm:mb-4"><span class="bg-primary-100 text-primary-600 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">Pilihan Materi</span></div> <h2 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 text-gray-900 px-4">Materi Pembelajaran Kami</h2> <p class="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4">Pilih kategori yang sesuai minatmu dan mulai belajar skill digital
          masa depan</p></div>`);
      }
    });
    $$renderer2.push(`<!----> `);
    ScrollReveal($$renderer2, {
      animation: "fade-up",
      delay: 100,
      children: ($$renderer3) => {
        $$renderer3.push(`<div class="relative max-w-7xl mx-auto"><div class="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl bg-white" role="region" aria-label="Materials carousel"><div class="relative h-[550px] sm:h-[600px] md:h-[550px] lg:h-[600px] xl:h-[650px]"><!--[-->`);
        const each_array = ensure_array_like(materials);
        for (let index = 0, $$length = each_array.length; index < $$length; index++) {
          let material = each_array[index];
          $$renderer3.push(`<div class="absolute inset-0 transition-all duration-700 ease-out"${attr_style(` opacity: ${stringify(index === currentIndex ? 1 : 0)}; transform: translateX(${stringify(index === currentIndex ? "0" : index < currentIndex ? "-100%" : "100%")}) scale(${stringify(index === currentIndex ? 1 : 0.95)}); pointer-events: ${stringify(index === currentIndex ? "auto" : "none")}; `)}><a${attr("href", material.link)} class="block h-full group"><div class="grid grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-2 h-full"><div class="relative overflow-hidden order-1 md:order-1 bg-white min-h-[180px] sm:min-h-[220px] md:min-h-0"><img${attr("src", material.image)}${attr("alt", material.title)} class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"/> <div class="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 lg:top-8 lg:left-8"><div${attr_class(`${stringify(material.colorClass)} px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-lg`)}><span class="text-xs sm:text-sm font-bold text-white">Materi #${escape_html(index + 1)}</span></div></div></div> <div${attr_class(`relative flex flex-col justify-center p-6 sm:p-8 lg:p-12 xl:p-16 ${stringify(material.colorClass)} order-2 md:order-2`)}><div class="space-y-3 sm:space-y-4 lg:space-y-6"><h3 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight transition-all duration-300 group-hover:translate-x-2">${escape_html(material.title)}</h3> <p class="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed">${escape_html(material.description)}</p> <div class="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4"><div class="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg transition-transform hover:scale-105"><div class="text-lg sm:text-xl lg:text-2xl font-bold text-white">10+</div> <div class="text-xs text-white/80 mt-1">Modul</div></div> <div class="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg transition-transform hover:scale-105"><div class="text-lg sm:text-xl lg:text-2xl font-bold text-white">5h</div> <div class="text-xs text-white/80 mt-1">Durasi</div></div> <div class="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg transition-transform hover:scale-105"><div class="text-lg sm:text-xl lg:text-2xl font-bold text-white">4.8</div> <div class="text-xs text-white/80 mt-1">Rating</div></div></div> <div class="pt-2"><button class="inline-flex items-center gap-2 sm:gap-3 bg-secondary-500 hover:bg-secondary-400 text-primary-600 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 group/btn hover:gap-4 sm:hover:gap-5 text-sm sm:text-base"><span>Lihat Detail</span> <svg class="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></button></div></div></div></div></a></div>`);
        }
        $$renderer3.push(`<!--]--></div> <button class="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg sm:shadow-xl z-20 backdrop-blur-sm" aria-label="Previous slide"><svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"></path></svg></button> <button class="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg sm:shadow-xl z-20 backdrop-blur-sm" aria-label="Next slide"><svg class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg></button> <div class="absolute bottom-0 left-0 right-0 h-1 bg-gray-200"><div class="h-full bg-primary-500 transition-all duration-300"${attr_style(`width: ${stringify((currentIndex + 1) / materials.length * 100)}%`)}></div></div></div> <div class="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-6 lg:mt-8 px-2 gap-4 sm:gap-0"><div class="flex items-center gap-2 order-2 sm:order-1"><!--[-->`);
        const each_array_1 = ensure_array_like(materials);
        for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
          each_array_1[index];
          $$renderer3.push(`<button${attr_class(`transition-all duration-300 rounded-full ${stringify(index === currentIndex ? "bg-primary-500 w-6 sm:w-8 h-2" : "bg-gray-300 hover:bg-gray-400 w-2 h-2")}`)}${attr("aria-label", `Go to slide ${stringify(index + 1)}`)}></button>`);
        }
        $$renderer3.push(`<!--]--></div> <div class="flex items-center gap-3 sm:gap-4 order-1 sm:order-2"><span class="text-gray-600 font-medium text-sm sm:text-base">${escape_html(currentIndex + 1)} / ${escape_html(materials.length)}</span> <button class="bg-white hover:bg-gray-50 text-gray-800 p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"${attr("aria-label", isAutoPlaying ? "Pause autoplay" : "Start autoplay")}>`);
        if (isAutoPlaying) {
          $$renderer3.push("<!--[-->");
          $$renderer3.push(`<svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"></path></svg>`);
        } else {
          $$renderer3.push("<!--[!-->");
          $$renderer3.push(`<svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"></path></svg>`);
        }
        $$renderer3.push(`<!--]--></button></div></div> <div class="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4 mt-6 sm:mt-8 lg:mt-12"><!--[-->`);
        const each_array_2 = ensure_array_like(materials);
        for (let index = 0, $$length = each_array_2.length; index < $$length; index++) {
          let material = each_array_2[index];
          $$renderer3.push(`<button${attr_class(`group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 bg-white ${stringify(index === currentIndex ? "ring-2 sm:ring-4 ring-primary-500 scale-105 shadow-xl sm:shadow-2xl" : "opacity-60 hover:opacity-100 hover:scale-105")}`)}><img${attr("src", material.image)}${attr("alt", material.title)} class="w-full h-full object-cover"/> <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div> <div class="absolute inset-0 flex items-end p-2 sm:p-3 lg:p-4"><span class="text-white text-xs sm:text-sm font-bold line-clamp-2 leading-tight drop-shadow-lg">${escape_html(material.title)}</span></div> `);
          if (index === currentIndex) {
            $$renderer3.push("<!--[-->");
            $$renderer3.push(`<div class="absolute top-1.5 right-1.5 sm:top-2 sm:right-2"><div${attr_class(`${stringify(material.colorClass)} rounded-full p-0.5 sm:p-1`)}><svg class="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></svg></div></div>`);
          } else {
            $$renderer3.push("<!--[!-->");
          }
          $$renderer3.push(`<!--]--></button>`);
        }
        $$renderer3.push(`<!--]--></div></div>`);
      }
    });
    $$renderer2.push(`<!----></div></section>`);
  });
}
const teacherImage = "/_app/immutable/assets/school.B2vOoATX.webp";
function Teachers($$renderer) {
  $$renderer.push(`<section id="coaches" class="py-16 lg:py-24 bg-gray-50"><div class="container mx-auto px-6 lg:px-12"><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">`);
  ScrollReveal($$renderer, {
    animation: "fade-right",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="relative"><div class="absolute inset-0 bg-purple-300 rounded-3xl -rotate-3 opacity-30"></div> <div class="relative bg-purple-300 rounded-3xl overflow-hidden w-full max-w-md mx-auto p-10" style="aspect-ratio: 4/5;"><img${attr("src", teacherImage)} alt="Professional Teacher" class="w-full h-full object-cover object-top"/></div> <div class="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-400 rounded-full opacity-60 blur-xl"></div> <div class="absolute -top-6 -right-6 w-32 h-32 bg-purple-500 rounded-full opacity-30 blur-2xl"></div></div>`);
    }
  });
  $$renderer.push(`<!----> `);
  ScrollReveal($$renderer, {
    animation: "fade-left",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="space-y-6"><h2 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">Untuk Sekolah dan <span class="block text-purple-600">Yayasan</span></h2> <div class="space-y-4 text-gray-600 text-base lg:text-lg leading-relaxed"><p>Kami memahami tantangan lembaga pendidikan dalam menyesuaikan diri
              dengan perkembangan teknologi. Kodeflow hadir sebagai mitra
              kolaboratif, bukan sekadar penyedia kursus.</p></div> <div class="pt-4"><button class="group bg-secondary-500 hover:bg-secondary-500 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-3"><span>Jadwalkan Seminar Gratis</span> <div class="w-8 h-8 flex items-center justify-center"><svg class="w-3 h-3 text-gray-900 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7"></path></svg></div></button></div></div>`);
    }
  });
  $$renderer.push(`<!----></div></div></section>`);
}
function FAQ($$renderer) {
  let selectedIndex = 0;
  const faqs = [
    {
      id: 1,
      question: "Apakah Kodeflow menyediakan trial class?",
      answer: "Ya, kami menyediakan trial class berupa seminar untuk siswa, untuk guru dan sesi konsultasi untuk menentukan minat siswa dalam memilih program yang kami sediakan."
    },
    {
      id: 2,
      question: "Apa itu Kodeflow.id?",
      answer: "Kodeflow.id adalah platform pembelajaran coding untuk anak-anak dan remaja yang menyediakan kurikulum terstruktur dari SD hingga Mahasiswa. Kami fokus pada pengembangan skill digital yang relevan dengan kebutuhan industri."
    },
    {
      id: 3,
      question: "Apa bedanya Kodeflow dengan kursus online lainnya?",
      answer: "Kodeflow dirancang khusus untuk lembaga pendidikan dengan kurikulum yang dapat diintegrasikan ke sistem sekolah. Kami menyediakan pendampingan penuh, laporan perkembangan siswa, dan materi yang disesuaikan dengan tingkat usia."
    },
    {
      id: 4,
      question: "Apakah semua siswa bisa mengikuti?",
      answer: "Ya, program kami dirancang bertahap sesuai usia dan kemampuan, mulai dari anak usia 6 tahun (SD) hingga mahasiswa. Setiap tingkatan memiliki materi yang disesuaikan dengan perkembangan kognitif siswa."
    },
    {
      id: 5,
      question: "Apakah program Kodeflow harus dilakukan di jam pelajaran sekolah?",
      answer: "Tidak harus. Program Kodeflow fleksibel dan dapat diintegrasikan sebagai mata pelajaran formal atau kegiatan ekstrakurikuler di luar jam pelajaran sesuai kebutuhan sekolah."
    },
    {
      id: 6,
      question: "Apakah Kodeflow menyediakan pelatihan untuk guru?",
      answer: "Ya, kami menyediakan pelatihan dan pendampingan untuk guru agar dapat memahami materi dan membantu siswa dalam proses pembelajaran. Guru akan mendapat akses ke semua materi dan panduan mengajar."
    },
    {
      id: 7,
      question: "Bagaimana pelaporan perkembangan siswa dilakukan?",
      answer: "Setiap siswa memiliki dashboard progress yang dapat diakses oleh guru dan orang tua. Laporan mencakup materi yang sudah dipelajari, project yang diselesaikan, dan rekomendasi pembelajaran selanjutnya."
    },
    {
      id: 8,
      question: "Apa saja kebutuhan teknis agar bisa menggunakan program Kodeflow?",
      answer: "Siswa membutuhkan laptop/komputer dengan koneksi internet yang stabil dan browser modern. Untuk beberapa program, kami akan memberikan panduan instalasi software yang diperlukan."
    },
    {
      id: 9,
      question: "Bagaimana cara bermitra dengan Kodeflow?",
      answer: "Sekolah atau yayasan dapat menghubungi kami melalui email atau WhatsApp untuk konsultasi gratis. Tim kami akan menjelaskan program, biaya, dan proses implementasi sesuai kebutuhan lembaga Anda."
    }
  ];
  $$renderer.push(`<section id="faq" class="py-16 lg:py-24 bg-linear-to-b from-white to-purple-50"><div class="container mx-auto px-6 lg:px-12">`);
  ScrollReveal($$renderer, {
    animation: "fade-up",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="text-center mb-12 lg:mb-16"><h2 class="text-4xl lg:text-5xl font-bold text-purple-700 mb-4">Pertanyaan Umum (FAQ)</h2> <p class="text-xl text-purple-600 font-medium mb-2">untuk Sekolah &amp; Yayasan</p> <p class="text-gray-600 text-lg max-w-3xl mx-auto">Temukan jawaban untuk pertanyaan yang sering diajukan seputar program
          Kodeflow Academy</p></div>`);
    }
  });
  $$renderer.push(`<!----> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">`);
  ScrollReveal($$renderer, {
    animation: "fade-right",
    children: ($$renderer2) => {
      $$renderer2.push(`<div><!--[-->`);
      const each_array = ensure_array_like(faqs);
      for (let index = 0, $$length = each_array.length; index < $$length; index++) {
        let faq = each_array[index];
        $$renderer2.push(`<button${attr_class(`group w-full text-left hover:bg-white rounded-2xl p-3 hover:shadow-lg transition-all duration-300 ${stringify(selectedIndex === index ? "border-purple-400 bg-purple-50" : "border-transparent hover:border-purple-200")}`)}><h3${attr_class(`text-base lg:text-lg font-bold leading-relaxed transition-colors duration-300 ${stringify(selectedIndex === index ? "text-primary-500" : "text-gray-900 group-hover:text-primary-500")}`)}>${escape_html(faq.question)}</h3></button>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
  });
  $$renderer.push(`<!----> `);
  ScrollReveal($$renderer, {
    animation: "fade-left",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="lg:sticky lg:top-8 h-fit"><div class="bg-primary-500 rounded-3xl p-8 lg:p-10 shadow-2xl min-h-[400px] flex flex-col"><div class="mb-6"><h3 class="text-2xl lg:text-3xl font-bold text-white leading-tight mb-6">${escape_html(faqs[selectedIndex].question)}</h3></div> <div class="flex-1"><p class="text-purple-50 text-lg leading-relaxed">${escape_html(faqs[selectedIndex].answer)}</p></div></div></div>`);
    }
  });
  $$renderer.push(`<!----></div> `);
  ScrollReveal($$renderer, {
    animation: "zoom",
    delay: 400,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="mt-16 text-center bg-primary-500 rounded-3xl p-8 lg:p-12 shadow-2xl"><h3 class="text-2xl lg:text-3xl font-bold text-white mb-4">Masih Ada Pertanyaan?</h3> <p class="text-purple-100 mb-6 max-w-2xl mx-auto">Tim kami siap membantu Anda. Hubungi kami untuk konsultasi gratis dan
          demo program.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="mailto:info@kodeflow.academy" class="group bg-secondary-500 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-3"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> <span>Kirim Email</span></a> <a href="https://wa.me/6285733235489" target="_blank" rel="noopener noreferrer" class="group bg-white hover:bg-gray-50 text-purple-700 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-3"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg> <span>WhatsApp</span></a></div></div>`);
    }
  });
  $$renderer.push(`<!----></div></section>`);
}
function _page($$renderer) {
  Hero($$renderer);
  $$renderer.push(`<!----> `);
  TeachingMethod($$renderer);
  $$renderer.push(`<!----> `);
  Programs($$renderer);
  $$renderer.push(`<!----> `);
  Teachers($$renderer);
  $$renderer.push(`<!----> `);
  Materials($$renderer);
  $$renderer.push(`<!----> `);
  FAQ($$renderer);
  $$renderer.push(`<!----> `);
  Footer($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
