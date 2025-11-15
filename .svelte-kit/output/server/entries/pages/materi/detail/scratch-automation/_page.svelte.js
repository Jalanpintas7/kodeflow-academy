import { J as sanitize_props, K as spread_props, N as slot, F as head, w as attr, x as ensure_array_like, y as attr_class, z as stringify } from "../../../../../chunks/index2.js";
import { S as ScrollReveal } from "../../../../../chunks/ScrollReveal.js";
import { I as Icon, B as Breadcrumb } from "../../../../../chunks/Breadcrumb.js";
import { s as scratchImg } from "../../../../../chunks/scratchHD.js";
import { B as Blocks } from "../../../../../chunks/blocks.js";
import { B as Bot } from "../../../../../chunks/bot.js";
import { S as Sparkles } from "../../../../../chunks/sparkles.js";
import { j as escape_html } from "../../../../../chunks/context.js";
function Repeat($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.552.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["path", { "d": "m17 2 4 4-4 4" }],
    ["path", { "d": "M3 11v-1a4 4 0 0 1 4-4h14" }],
    ["path", { "d": "m7 22-4-4 4-4" }],
    ["path", { "d": "M21 13v1a4 4 0 0 1-4 4H3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "repeat" },
    $$sanitized_props,
    {
      /**
       * @component @name Repeat
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTcgMiA0IDQtNCA0IiAvPgogIDxwYXRoIGQ9Ik0zIDExdi0xYTQgNCAwIDAgMSA0LTRoMTQiIC8+CiAgPHBhdGggZD0ibTcgMjItNC00IDQtNCIgLz4KICA8cGF0aCBkPSJNMjEgMTN2MWE0IDQgMCAwIDEtNCA0SDMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/repeat
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function _page($$renderer) {
  let openAccordion = 0;
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Daftar Materi", href: "/#materials" },
    { label: "AI & Automation", href: "/materi/automation" },
    { label: "Scratch Automation", href: null }
  ];
  const features = [
    {
      icon: Blocks,
      title: "Visual Blocks",
      description: "Block-based coding untuk belajar automation logic.",
      color: "bg-primary-500"
    },
    {
      icon: Bot,
      title: "Simple Bots",
      description: "Buat bots sederhana dengan logic automation.",
      color: "bg-primary-500"
    },
    {
      icon: Repeat,
      title: "Loops & Patterns",
      description: "Understand repetition dan automation patterns.",
      color: "bg-primary-500"
    },
    {
      icon: Sparkles,
      title: "Fun Learning",
      description: "Belajar konsep automation sambil bermain.",
      color: "bg-primary-500"
    }
  ];
  const projects = [
    {
      title: "Auto-Drawing Bot",
      description: "Bot yang menggambar pattern otomatis dengan loops.",
      features: [
        "Pen controls",
        "Loop patterns",
        "Geometric shapes",
        "Color automation"
      ]
    },
    {
      title: "Quiz Answer Bot",
      description: "Bot yang menjawab quiz otomatis dengan logic.",
      features: [
        "If-else logic",
        "Data lists",
        "Random selection",
        "Score tracking"
      ]
    },
    {
      title: "Sprite Clone Factory",
      description: "Auto-generate dan control multiple clones.",
      features: [
        "Clone creation",
        "Mass control",
        "Pattern spawning",
        "Auto-deletion"
      ]
    },
    {
      title: "Auto-Game Player",
      description: "Bot yang bisa bermain game sederhana otomatis.",
      features: [
        "Sensing automation",
        "Decision making",
        "Reaction automation",
        "Score optimization"
      ]
    }
  ];
  const willLearn = [
    "Konsep dasar automation dan repetitive tasks",
    "Loops, conditionals, dan event-driven programming",
    "Pattern recognition dan logical thinking",
    "Introduction to algorithms dan flowcharts"
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
      section: "Automation Basics",
      description: "Memahami konsep automation dengan Scratch",
      topics: [
        "Apa itu automation dan kenapa penting",
        "Repetitive tasks vs automated tasks",
        "Scratch blocks untuk automation",
        "Events sebagai triggers",
        "Loops untuk repetition",
        "Project: Auto-repeating animation"
      ]
    },
    {
      section: "Loops & Iteration",
      description: "Menguasai loops untuk automation",
      topics: [
        "Repeat loops untuk fixed iterations",
        "Forever loops untuk continuous automation",
        "Repeat until untuk conditional loops",
        "Nested loops untuk complex patterns",
        "Loop optimization",
        "Project: Pattern generator bot"
      ]
    },
    {
      section: "Conditional Automation",
      description: "Logic dan decision making",
      topics: [
        "If-else untuk decision automation",
        "Sensing blocks untuk input detection",
        "Variables untuk tracking states",
        "Boolean logic (and, or, not)",
        "Complex conditions",
        "Project: Smart responding bot"
      ]
    },
    {
      section: "Event-Driven Automation",
      description: "Automation yang responds to events",
      topics: [
        "Broadcast messages untuk triggers",
        "Clone events untuk spawning",
        "Keyboard dan mouse events",
        "Timer-based automation",
        "Custom events",
        "Project: Event-driven game automation"
      ]
    },
    {
      section: "Data & Lists Automation",
      description: "Working dengan data untuk automation",
      topics: [
        "Lists untuk storing automation data",
        "Looping through lists",
        "Data-driven automation",
        "Random selection automation",
        "List operations",
        "Project: Automated quiz system"
      ]
    },
    {
      section: "Final Project",
      description: "Complete automation project",
      topics: [
        "Planning automation flow",
        "Combining loops, conditionals, events",
        "Optimization strategies",
        "Testing automation logic",
        "Documentation",
        "Project: Complete automated system (game/simulator)"
      ]
    }
  ];
  head("doh5h8", $$renderer, ($$renderer2) => {
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
      $$renderer2.push(`<div class="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full mb-4"><span class="text-white font-semibold text-sm">6-12 Tahun - SD</span></div> <h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight">Belajar Automation Basics Dengan Scratch</h1> <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">Pengenalan konsep <span class="font-bold">automation dan bot</span> dengan Scratch blocks. Belajar loop logic dan automated tasks dengan cara yang fun!</p>`);
    }
  });
  $$renderer.push(`<!----> `);
  ScrollReveal($$renderer, {
    animation: "fade-up",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20Scratch Automation" target="_blank" rel="noopener noreferrer" class="inline-flex bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl items-center gap-2"><span>Hubungi Kami</span> <span>→</span></a>`);
    }
  });
  $$renderer.push(`<!----></div> `);
  ScrollReveal($$renderer, {
    animation: "fade-left",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="relative"><div class="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div> <div class="relative bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-2xl"><img${attr("src", scratchImg)} alt="Scratch Automation Platform" class="w-full h-auto rounded-2xl"/></div></div>`);
    }
  });
  $$renderer.push(`<!----></div></div></section> <section class="py-16 lg:py-24 bg-white"><div class="container mx-auto px-6 lg:px-12"><div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">`);
  ScrollReveal($$renderer, {
    animation: "fade-right",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="relative"><div class="absolute inset-0 bg-primary-500 rounded-3xl opacity-20 blur-2xl"></div> <div class="relative bg-primary-50 rounded-3xl p-6 lg:p-8 border border-primary-200"><img${attr("src", scratchImg)} alt="Scratch Automation" class="w-full h-auto rounded-2xl shadow-lg"/></div></div>`);
    }
  });
  $$renderer.push(`<!----> `);
  ScrollReveal($$renderer, {
    animation: "fade-left",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="space-y-6"><h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Kenapa Harus Scratch Automation?</h2> <div class="space-y-4 text-gray-700 leading-relaxed"><p>Scratch Automation mengajarkan <span class="font-bold text-primary-600">konsep automation dan loop logic</span> dengan cara yang fun menggunakan visual blocks. Belajar bikin bot sederhana dan automated tasks!</p> <p>Cocok untuk <span class="font-bold text-primary-600">SD &amp; SMP</span> sebagai pengenalan automation thinking dan computational thinking sebelum lanjut ke automation tools profesional.</p></div> <a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20jadwalkan%20seminar%20gratis%20Scratch Automation" target="_blank" rel="noopener noreferrer" class="inline-flex bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">Jadwalkan Seminar Gratis</a></div>`);
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
        $$renderer2.push(`<div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"><div${attr_class(`w-16 h-16 ${stringify(feature.color)} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`, "svelte-doh5h8")}><!---->`);
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
      $$renderer2.push(`<!--]--></ul> <div class="mt-6 pt-6 border-t border-primary-200"><a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20jadwalkan%20seminar%20gratis%20Scratch Automation" target="_blank" rel="noopener noreferrer" class="block text-center bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm">Jadwalkan Seminar Gratis</a></div></div>`);
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
          $$renderer2.push(`<div class="px-6 lg:px-8 pb-6 lg:pb-8 pt-0 border-t border-gray-100 animate-accordion-down svelte-doh5h8"><ul class="grid md:grid-cols-2 gap-3 mt-4"><!--[-->`);
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
          bermain bersama Scratch!</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20daftar%20kelas%20Scratch Automation" target="_blank" rel="noopener noreferrer" class="bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center gap-2"><span>Daftar Kelas Gratis</span></a> <a href="/materi/web-mobile-app" class="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 border border-white/30">Lihat Materi Lainnya</a></div></div>`);
    }
  });
  $$renderer.push(`<!----></div></section>`);
}
export {
  _page as default
};
