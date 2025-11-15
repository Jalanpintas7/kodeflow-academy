import { F as head, w as attr, x as ensure_array_like, y as attr_class, z as stringify } from "../../../../../chunks/index2.js";
import { S as ScrollReveal } from "../../../../../chunks/ScrollReveal.js";
import { B as Breadcrumb } from "../../../../../chunks/Breadcrumb.js";
import { t as tiktokContentCreatorImg } from "../../../../../chunks/ttHD.js";
import { V as Video } from "../../../../../chunks/video.js";
import { S as Sparkles } from "../../../../../chunks/sparkles.js";
import { U as Users } from "../../../../../chunks/users.js";
import { T as Trending_up } from "../../../../../chunks/trending-up.js";
import { j as escape_html } from "../../../../../chunks/context.js";
function _page($$renderer) {
  let openAccordion = 0;
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Daftar Materi", href: "/#materials" },
    {
      label: "Digital Marketing",
      href: "/materi/digital-marketing"
    },
    { label: "TikTok Content Creator", href: null }
  ];
  const features = [
    {
      icon: Video,
      title: "Viral Video Content",
      description: "Buat video yang engaging dan berpotensi viral.",
      color: "bg-primary-500"
    },
    {
      icon: Sparkles,
      title: "Trending Sounds",
      description: "Manfaatkan trending sounds dan challenges.",
      color: "bg-primary-500"
    },
    {
      icon: Users,
      title: "FYP Strategy",
      description: "Strategi masuk For You Page dan reach jutaan viewers.",
      color: "bg-primary-500"
    },
    {
      icon: Trending_up,
      title: "Creator Fund",
      description: "Monetisasi melalui Creator Fund dan brand deals.",
      color: "bg-primary-500"
    }
  ];
  const projects = [
    {
      title: "Viral Content Series",
      description: "Buat 10 video dengan viral potential menggunakan trending formula.",
      features: [
        "Viral hooks",
        "Trending sounds",
        "Storytelling arc",
        "Call-to-action"
      ]
    },
    {
      title: "Educational TikTok",
      description: "Konten edukatif yang entertaining dan shareable.",
      features: [
        "Edutainment format",
        "Visual explanations",
        "Quick tips series",
        "Value-driven content"
      ]
    },
    {
      title: "Behind The Scenes",
      description: "Content BTS yang authentic dan build connection dengan audience.",
      features: [
        "Day in life",
        "Process videos",
        "Personal stories",
        "Community building"
      ]
    },
    {
      title: "Brand Collaboration",
      description: "Konten promosi brand yang natural dan engaging.",
      features: [
        "Product integration",
        "Authentic reviews",
        "Creative angles",
        "Disclosure best practices"
      ]
    }
  ];
  const willLearn = [
    "Video content creation dan editing untuk TikTok",
    "Algorithm TikTok dan cara masuk FYP (For You Page)",
    "Trending content strategy dan video hooks",
    "Monetisasi TikTok: Creator Fund, Live, Affiliate"
  ];
  const willGet = [
    "Video Materi Lengkap",
    "Modul Praktek Terstruktur",
    "Bahan Latihan & Studi Kasus",
    "Sertifikat Kelulusan",
    "Kelas Online/Offline",
    "Akses ke Komunitas Belajar"
  ];
  const curriculum = [
    {
      section: "TikTok Basics",
      description: "Memahami platform TikTok dan setup akun creator",
      topics: [
        "TikTok platform overview dan trends",
        "Creator account setup dan optimization",
        "Profile bio dan link strategies",
        "TikTok algorithm dan For You Page",
        "Best posting times dan frequency",
        "Project: Optimized TikTok creator profile"
      ]
    },
    {
      section: "Video Creation",
      description: "Membuat video TikTok yang engaging",
      topics: [
        "Smartphone videography untuk TikTok",
        "In-app editing dan effects",
        "CapCut advanced editing",
        "Green screen dan transitions",
        "Text overlays dan captions",
        "Project: 5 polished TikTok videos"
      ]
    },
    {
      section: "Viral Content Formula",
      description: "Strategi membuat konten yang viral",
      topics: [
        "Hooks: cara grab attention dalam 1 detik",
        "Trending sounds dan how to ride trends",
        "Storytelling dalam 15-60 detik",
        "TikTok challenges dan participation",
        "Duets, stitches, dan collaborations",
        "Project: Trending challenge participation"
      ]
    },
    {
      section: "Growth Strategies",
      description: "Tumbuhkan followers dan engagement",
      topics: [
        "Hashtag strategy untuk TikTok",
        "Caption techniques yang boost engagement",
        "Comment engagement dan community building",
        "Cross-promotion dengan platform lain",
        "Consistency dan content calendar",
        "Project: 30-day posting challenge"
      ]
    },
    {
      section: "Analytics & Monetization",
      description: "Menganalisa performa dan mulai monetisasi",
      topics: [
        "TikTok analytics dan key metrics",
        "A/B testing dan optimization",
        "Creator Fund eligibility dan application",
        "TikTok Live dan virtual gifts",
        "Brand deals dan sponsorship",
        "Project: Monetization strategy plan"
      ]
    },
    {
      section: "Final Project",
      description: "Launch TikTok creator account yang monetizable",
      topics: [
        "Niche selection dan content pillars",
        "Content strategy dokumen",
        "30-day content calendar",
        "Launch campaign dengan first 10 videos",
        "Growth tracking dashboard",
        "Project: Fully launched TikTok creator account"
      ]
    }
  ];
  head("1wg7mw3", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Belajar Dasar Pemrograman Dengan Scratch - Kodeflow Academy</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Platform coding visual dari MIT untuk anak SD. Belajar coding sambil bermain dengan membuat game, animasi, dan cerita interaktif."/>`);
  });
  $$renderer.push(`<section class="relative overflow-hidden bg-primary-600 min-h-[70vh] flex items-center"><div class="absolute inset-0 opacity-10"><div class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div> <div class="absolute bottom-20 right-20 w-96 h-96 bg-secondary-400 rounded-full blur-3xl"></div></div> <div class="container mx-auto px-6 lg:px-12 py-16 relative z-10">`);
  ScrollReveal($$renderer, {
    animation: "fade-right",
    children: ($$renderer2) => {
      Breadcrumb($$renderer2, { items: breadcrumbItems, variant: "dark" });
    }
  });
  $$renderer.push(`<!----> <div class="grid lg:grid-cols-2 gap-12 items-center mt-8"><div class="space-y-6 lg:space-y-8">`);
  ScrollReveal($$renderer, {
    animation: "fade-up",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full mb-4"><span class="text-white font-semibold text-sm">13-15 Tahun - SMP</span></div> <h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight">Belajar Jadi TikTok Content Creator</h1> <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">Kuasai seni membuat video <span class="font-bold">viral di TikTok</span>. Pelajari algoritma FYP, trending sounds, editing, dan growth strategy untuk jadi creator sukses!</p>`);
    }
  });
  $$renderer.push(`<!----> `);
  ScrollReveal($$renderer, {
    animation: "fade-up",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20TikTok Creator" target="_blank" rel="noopener noreferrer" class="inline-flex bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl items-center gap-2"><span>Hubungi Kami</span> <span>→</span></a>`);
    }
  });
  $$renderer.push(`<!----></div> `);
  ScrollReveal($$renderer, {
    animation: "fade-left",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="relative"><div class="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div> <div class="relative bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-2xl"><img${attr("src", tiktokContentCreatorImg)} alt="TikTok Content Creator Platform" class="w-full h-auto rounded-2xl"/></div></div>`);
    }
  });
  $$renderer.push(`<!----></div></div></section> <section class="py-16 lg:py-24 bg-white"><div class="container mx-auto px-6 lg:px-12"><div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">`);
  ScrollReveal($$renderer, {
    animation: "fade-right",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="relative"><div class="absolute inset-0 bg-primary-500 rounded-3xl opacity-20 blur-2xl"></div> <div class="relative bg-primary-50 rounded-3xl p-6 lg:p-8 border border-primary-200"><img${attr("src", tiktokContentCreatorImg)} alt="TikTok Content Creation" class="w-full h-auto rounded-2xl shadow-lg"/></div></div>`);
    }
  });
  $$renderer.push(`<!----> `);
  ScrollReveal($$renderer, {
    animation: "fade-left",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="space-y-6"><h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Kenapa Harus TikTok Creator?</h2> <div class="space-y-4 text-gray-700 leading-relaxed"><p>TikTok adalah <span class="font-bold text-primary-600">platform video short-form terbesar</span> dengan algoritma FYP yang sangat powerful. Konten viral bisa membuat kamu terkenal dalam semalam dan membuka peluang kolaborasi brand.</p> <p>Cocok untuk <span class="font-bold text-primary-600">SMP &amp; SMA</span> yang kreatif, suka bikin video, dan ingin belajar trend analysis, video editing, dan community building.</p></div> <a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20jadwalkan%20seminar%20gratis%20TikTok Creator" target="_blank" rel="noopener noreferrer" class="inline-flex bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">Jadwalkan Seminar Gratis</a></div>`);
    }
  });
  $$renderer.push(`<!----></div></div></section> <section class="py-16 lg:py-24 bg-gray-50"><div class="container mx-auto px-6 lg:px-12"><div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
  const each_array = ensure_array_like(features);
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let feature = each_array[index];
    ScrollReveal($$renderer, {
      animation: "fade-up",
      delay: index * 100,
      children: ($$renderer2) => {
        $$renderer2.push(`<div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"><div${attr_class(`w-16 h-16 ${stringify(feature.color)} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`, "svelte-1wg7mw3")}><!---->`);
        feature.icon?.($$renderer2, { class: "w-8 h-8 text-white" });
        $$renderer2.push(`<!----></div> <h3 class="text-xl font-bold text-gray-900 mb-2">${escape_html(feature.title)}</h3> <p class="text-gray-600 leading-relaxed">${escape_html(feature.description)}</p></div>`);
      }
    });
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="py-16 lg:py-24 bg-white"><div class="container mx-auto px-6 lg:px-12"><div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">`);
  ScrollReveal($$renderer, {
    animation: "fade-right",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="bg-primary-50 rounded-2xl p-6 lg:p-8 border border-primary-200 h-full"><h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Apa yang akan dipelajari</h3> <ul class="space-y-4"><!--[-->`);
      const each_array_1 = ensure_array_like(willLearn);
      for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
        let item = each_array_1[$$index_1];
        $$renderer2.push(`<li class="flex items-start gap-3"><div class="w-7 h-7 bg-primary-500 rounded-full flex items-center justify-center shrink-0 mt-0.5"><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div> <span class="text-gray-700 leading-relaxed">${escape_html(item)}</span></li>`);
      }
      $$renderer2.push(`<!--]--></ul></div>`);
    }
  });
  $$renderer.push(`<!----> `);
  ScrollReveal($$renderer, {
    animation: "fade-left",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="bg-primary-50 rounded-2xl p-6 lg:p-8 border border-primary-200 h-full"><h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Apa yang akan didapatkan</h3> <ul class="space-y-4"><!--[-->`);
      const each_array_2 = ensure_array_like(willGet);
      for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
        let item = each_array_2[$$index_2];
        $$renderer2.push(`<li class="flex items-start gap-3"><div class="w-7 h-7 bg-primary-500 rounded-full flex items-center justify-center shrink-0 mt-0.5"><svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div> <span class="text-gray-700 leading-relaxed">${escape_html(item)}</span></li>`);
      }
      $$renderer2.push(`<!--]--></ul> <div class="mt-6 pt-6 border-t border-primary-200"><a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20jadwalkan%20seminar%20gratis%20TikTok Creator" target="_blank" rel="noopener noreferrer" class="block text-center bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm">Jadwalkan Seminar Gratis</a></div></div>`);
    }
  });
  $$renderer.push(`<!----></div></div></section> <section class="py-16 lg:py-24 bg-gray-50"><div class="container mx-auto px-6 lg:px-12">`);
  ScrollReveal($$renderer, {
    animation: "fade-up",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="text-center mb-16"><h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Kurikulum Pembelajaran</h2> <p class="text-gray-600 max-w-2xl mx-auto">Terstruktur dari pengenalan hingga project game lengkap</p></div>`);
    }
  });
  $$renderer.push(`<!----> <div class="max-w-6xl mx-auto space-y-4"><!--[-->`);
  const each_array_3 = ensure_array_like(curriculum);
  for (let index = 0, $$length = each_array_3.length; index < $$length; index++) {
    let section = each_array_3[index];
    ScrollReveal($$renderer, {
      animation: "fade-up",
      delay: index * 100,
      children: ($$renderer2) => {
        $$renderer2.push(`<div class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"><button class="w-full flex items-center gap-4 p-6 lg:p-8 text-left transition-colors duration-300 hover:bg-gray-50"><div class="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center shrink-0"><span class="text-white font-bold text-lg">${escape_html(index + 1)}</span></div> <div class="flex-1"><h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-1">${escape_html(section.section)}</h3> <p class="text-gray-600 text-sm">${escape_html(section.description)}</p></div> <svg${attr_class(`w-6 h-6 text-primary-500 shrink-0 transition-transform duration-300 ${stringify(openAccordion === index ? "rotate-180" : "")}`)} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button> `);
        if (openAccordion === index) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<div class="px-6 lg:px-8 pb-6 lg:pb-8 pt-0 border-t border-gray-100 animate-accordion-down svelte-1wg7mw3"><ul class="grid md:grid-cols-2 gap-3 mt-4"><!--[-->`);
          const each_array_4 = ensure_array_like(section.topics);
          for (let $$index_3 = 0, $$length2 = each_array_4.length; $$index_3 < $$length2; $$index_3++) {
            let topic = each_array_4[$$index_3];
            $$renderer2.push(`<li class="flex items-start gap-2"><span class="text-primary-500 mt-0.5 shrink-0">•</span> <span class="text-gray-700 text-sm">${escape_html(topic)}</span></li>`);
          }
          $$renderer2.push(`<!--]--></ul></div>`);
        } else {
          $$renderer2.push("<!--[!-->");
        }
        $$renderer2.push(`<!--]--></div>`);
      }
    });
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="py-16 lg:py-24 bg-gray-50"><div class="container mx-auto px-6 lg:px-12">`);
  ScrollReveal($$renderer, {
    animation: "fade-up",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="max-w-3xl mb-16 text-center mx-auto"><div class="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">Karya Project Kamu</div> <h2 class="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">4 Game Keren yang Bakal Kamu Buat</h2> <p class="text-lg text-gray-600">Dari game sederhana sampai yang lebih kompleks, semua bikin sendiri!</p></div>`);
    }
  });
  $$renderer.push(`<!----> <div class="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto"><!--[-->`);
  const each_array_5 = ensure_array_like(projects);
  for (let index = 0, $$length = each_array_5.length; index < $$length; index++) {
    let project = each_array_5[index];
    ScrollReveal($$renderer, {
      animation: "fade-up",
      delay: index * 100,
      children: ($$renderer2) => {
        $$renderer2.push(`<div class="group relative"><div class="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg z-10 group-hover:scale-110 transition-transform">${escape_html(index + 1)}</div> <div class="relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary-200"><div class="mb-6"><h3 class="text-2xl font-bold text-gray-900 mb-3">${escape_html(project.title)}</h3> <p class="text-gray-600 leading-relaxed">${escape_html(project.description)}</p></div> <div class="space-y-3 pt-6 border-t border-gray-100"><p class="text-sm font-semibold text-primary-600 uppercase tracking-wide">Yang Dipelajari:</p> <!--[-->`);
        const each_array_6 = ensure_array_like(project.features);
        for (let $$index_5 = 0, $$length2 = each_array_6.length; $$index_5 < $$length2; $$index_5++) {
          let feature = each_array_6[$$index_5];
          $$renderer2.push(`<div class="flex items-start gap-3"><span class="text-primary-500 mt-1 shrink-0">→</span> <span class="text-gray-700">${escape_html(feature)}</span></div>`);
        }
        $$renderer2.push(`<!--]--></div></div></div>`);
      }
    });
  }
  $$renderer.push(`<!--]--></div></div></section> <section class="py-16 lg:py-24 bg-primary-600"><div class="container mx-auto px-6 lg:px-12">`);
  ScrollReveal($$renderer, {
    animation: "zoom",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="text-center max-w-3xl mx-auto text-white"><h2 class="text-4xl lg:text-5xl font-bold mb-6">Siap Mulai Belajar Scratch?</h2> <p class="text-xl text-white/90 mb-8">Bergabunglah dengan ratusan anak yang sudah belajar coding sambil
          bermain bersama Scratch!</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20daftar%20kelas%20TikTok Creator" target="_blank" rel="noopener noreferrer" class="bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center gap-2"><span>Daftar Kelas Gratis</span></a> <a href="/materi/web-mobile-app" class="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 border border-white/30">Lihat Materi Lainnya</a></div></div>`);
    }
  });
  $$renderer.push(`<!----></div></section>`);
}
export {
  _page as default
};
