import { J as sanitize_props, K as spread_props, N as slot, F as head, x as ensure_array_like, y as attr_class, O as clsx, w as attr } from "../../../../chunks/index2.js";
import { S as ScrollReveal } from "../../../../chunks/ScrollReveal.js";
import { I as Icon, B as Breadcrumb } from "../../../../chunks/Breadcrumb.js";
import { F as Footer } from "../../../../chunks/Footer.js";
import { s as scratchImg } from "../../../../chunks/scratchHD.js";
import { z as zapierImg } from "../../../../chunks/zapierHD.js";
import { W as Workflow, n as n8nImg } from "../../../../chunks/n8nHD.js";
import { Z as Zap } from "../../../../chunks/zap.js";
import { B as Bot } from "../../../../chunks/bot.js";
import { j as escape_html } from "../../../../chunks/context.js";
function Refresh_cw($$renderer, $$props) {
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
    [
      "path",
      { "d": "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" }
    ],
    ["path", { "d": "M21 3v5h-5" }],
    [
      "path",
      { "d": "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" }
    ],
    ["path", { "d": "M8 16H3v5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "refresh-cw" },
    $$sanitized_props,
    {
      /**
       * @component @name RefreshCw
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMyAxMmE5IDkgMCAwIDEgOS05IDkuNzUgOS43NSAwIDAgMSA2Ljc0IDIuNzRMMjEgOCIgLz4KICA8cGF0aCBkPSJNMjEgM3Y1aC01IiAvPgogIDxwYXRoIGQ9Ik0yMSAxMmE5IDkgMCAwIDEtOSA5IDkuNzUgOS43NSAwIDAgMS02Ljc0LTIuNzRMMyAxNiIgLz4KICA8cGF0aCBkPSJNOCAxNkgzdjUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/refresh-cw
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
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Daftar Materi", href: "/#materials" },
    { label: "Automation", href: null }
  ];
  const programs = [
    {
      level: "Sekolah Dasar",
      title: "Scratch Automation – Belajar Konsep Otomasi dengan Bermain",
      description: "Scratch tidak hanya untuk membuat game, tapi juga sempurna untuk memahami konsep automation dan logic flow. Siswa SD akan belajar membuat project yang otomatis merespon kondisi tertentu, seperti quiz otomatis, sorting game, atau simulasi sistem yang berjalan sendiri berdasarkan rules yang ditentukan.",
      extendedDesc: 'Melalui Scratch, anak-anak belajar konsep if-then logic, loops, dan event-driven programming yang merupakan fondasi dari automation. Mereka memahami bagaimana membuat sistem yang "berpikir" dan bereaksi otomatis, skill yang sangat berguna untuk memahami teknologi automation di masa depan.',
      bgColor: "bg-primary-500",
      image: scratchImg,
      ageRange: "6-12 Tahun",
      features: [
        "Belajar konsep automation",
        "If-then logic & loops",
        "Event-driven programming",
        "Simulasi sistem otomatis"
      ],
      detailLink: "/materi/detail/scratch-automation"
    },
    {
      level: "Sekolah Menengah Pertama",
      title: "Zapier & Make – Otomasi Tugas Digital Tanpa Coding",
      description: "Zapier dan IFTTT adalah platform no-code automation yang memungkinkan siswa SMP mengotomasi tugas digital sehari-hari. Belajar menghubungkan berbagai aplikasi seperti Google Sheets, Gmail, Instagram, Notion, dan ratusan app lainnya untuk bekerja secara otomatis tanpa perlu intervensi manual.",
      extendedDesc: "Siswa akan belajar membuat automation workflows seperti auto-save Instagram posts ke Google Drive, auto-respond email, sync data antar aplikasi, scheduling posts, dan banyak lagi. Program ini mengajarkan workflow thinking, process optimization, dan bagaimana teknologi bisa membantu menghemat waktu dan meningkatkan produktivitas.",
      bgColor: "bg-primary-500",
      image: zapierImg,
      ageRange: "13-15 Tahun",
      features: [
        "No-code automation platform",
        "Connect 5000+ apps & services",
        "Workflow design & optimization",
        "Productivity automation"
      ],
      detailLink: "/materi/detail/zapier"
    },
    {
      level: "Sekolah Menengah Atas",
      title: "n8n Automation – Build Professional Workflows",
      description: "n8n adalah platform automation open-source yang powerful, digunakan oleh perusahaan untuk mengotomasi business processes. Siswa SMA akan belajar membuat complex automation workflows dengan conditional logic, data transformation, API integration, webhooks, dan custom code execution untuk kebutuhan profesional.",
      extendedDesc: "Program ini memberikan pengalaman nyata dalam membangun enterprise-level automation: data scraping & processing, CRM automation, marketing automation, business intelligence workflows, dan sistem integration yang kompleks. Siswa juga belajar tentang error handling, scheduling, monitoring, dan best practices dalam production automation. Skill ini sangat valuable untuk karir di bidang DevOps, IT automation, dan business process optimization.",
      bgColor: "bg-primary-500",
      image: n8nImg,
      ageRange: "16-18 Tahun",
      features: [
        "Open-source automation platform",
        "Complex workflows & custom code",
        "API integration & webhooks",
        "Enterprise-level automation"
      ],
      detailLink: "/materi/detail/n8n"
    }
  ];
  head("ahsch9", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Belajar Automation - Kodeflow Academy</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Belajar automation dari konsep dasar hingga enterprise-level. Dari Scratch, Zapier &amp; IFTTT, hingga n8n untuk workflow automation profesional."/>`);
  });
  $$renderer.push(`<section class="relative overflow-hidden bg-linear-to-br from-primary-500 via-primary-600 to-primary-700 min-h-[70vh] flex items-center"><div class="absolute inset-0 opacity-10"><div class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div> <div class="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"></div></div> <div class="container mx-auto px-6 lg:px-12 py-16 relative z-10">`);
  ScrollReveal($$renderer, {
    animation: "fade-right",
    children: ($$renderer2) => {
      Breadcrumb($$renderer2, { items: breadcrumbItems, variant: "dark" });
    }
  });
  $$renderer.push(`<!----> <div class="grid lg:grid-cols-2 gap-12 items-center"><div class="space-y-6 lg:space-y-8">`);
  ScrollReveal($$renderer, {
    animation: "fade-up",
    children: ($$renderer2) => {
      $$renderer2.push(`<h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight">Belajar Automation dari Konsep Hingga Enterprise-Level</h1> <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">Kuasai seni <span class="text-secondary-500 font-bold">workflow automation</span>, dari konsep dasar hingga <span class="text-secondary-500 font-bold">business process optimization</span> yang menghemat waktu dan meningkatkan produktivitas.</p>`);
    }
  });
  $$renderer.push(`<!----> `);
  ScrollReveal($$renderer, {
    animation: "fade-up",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="flex flex-wrap gap-3"><!--[-->`);
      const each_array = ensure_array_like(programs);
      for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
        let program = each_array[$$index];
        $$renderer2.push(`<div class="bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full"><span class="text-white/90 text-sm font-medium">${escape_html(program.level)}</span></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
  });
  $$renderer.push(`<!----> `);
  ScrollReveal($$renderer, {
    animation: "fade-up",
    delay: 300,
    children: ($$renderer2) => {
      $$renderer2.push(`<a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20Automation" target="_blank" rel="noopener noreferrer" class="inline-flex bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl items-center gap-2"><span>Jadwalkan Seminar Gratis</span> <span>→</span></a>`);
    }
  });
  $$renderer.push(`<!----></div> `);
  ScrollReveal($$renderer, {
    animation: "fade-left",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="relative hidden lg:block"><div class="w-full h-full flex items-center justify-center"><div class="relative"><div class="w-72 h-72 bg-secondary-500/30 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div> <div class="relative z-10 grid grid-cols-2 gap-4"><div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">`);
      Workflow($$renderer2, { class: "w-12 h-12 text-white mx-auto mb-2" });
      $$renderer2.push(`<!----> <p class="text-white font-semibold">Workflows</p></div> <div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">`);
      Zap($$renderer2, { class: "w-12 h-12 text-white mx-auto mb-2" });
      $$renderer2.push(`<!----> <p class="text-white font-semibold">No-Code</p></div> <div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">`);
      Refresh_cw($$renderer2, { class: "w-12 h-12 text-white mx-auto mb-2" });
      $$renderer2.push(`<!----> <p class="text-white font-semibold">Auto Process</p></div> <div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">`);
      Bot($$renderer2, { class: "w-12 h-12 text-white mx-auto mb-2" });
      $$renderer2.push(`<!----> <p class="text-white font-semibold">Smart Bots</p></div></div></div></div></div>`);
    }
  });
  $$renderer.push(`<!----></div></div></section> <section class="py-16 lg:py-24 bg-white"><div class="container mx-auto px-6 lg:px-12 space-y-20"><!--[-->`);
  const each_array_1 = ensure_array_like(programs);
  for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
    let program = each_array_1[index];
    $$renderer.push(`<div class="max-w-6xl mx-auto"><div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"><div${attr_class(clsx(index % 2 === 0 ? "lg:order-1 order-2" : "lg:order-2 order-2"))}>`);
    ScrollReveal($$renderer, {
      animation: index % 2 === 0 ? "fade-right" : "fade-left",
      children: ($$renderer2) => {
        $$renderer2.push(`<div class="space-y-6"><div><div class="mb-3 flex flex-wrap gap-2 items-center"><div class="inline-block bg-primary-100 text-primary-600 px-6 py-2 rounded-full font-semibold text-sm">${escape_html(program.level)}</div> <span class="bg-secondary-100 text-secondary-700 px-4 py-1 rounded-full text-sm font-semibold">${escape_html(program.ageRange)}</span></div> <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">${escape_html(program.title)}</h3></div> <p class="text-gray-700 text-lg leading-relaxed">${escape_html(program.description)}</p> <p class="text-gray-600 leading-relaxed">${escape_html(program.extendedDesc)}</p> <div class="space-y-3"><!--[-->`);
        const each_array_2 = ensure_array_like(program.features);
        for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
          let feature = each_array_2[$$index_1];
          $$renderer2.push(`<div class="flex items-center gap-3"><div class="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center shrink-0"><svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg></div> <span class="text-gray-700">${escape_html(feature)}</span></div>`);
        }
        $$renderer2.push(`<!--]--></div> <a${attr("href", program.detailLink)} class="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"><span>Lihat Detail</span> <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg></a></div>`);
      }
    });
    $$renderer.push(`<!----></div> <div${attr_class(clsx(index % 2 === 0 ? "lg:order-2 order-1" : "lg:order-1 order-1"))}>`);
    ScrollReveal($$renderer, {
      animation: index % 2 === 0 ? "fade-left" : "fade-right",
      delay: 200,
      children: ($$renderer2) => {
        $$renderer2.push(`<div class="relative"><div class="absolute inset-0 bg-primary-500 rounded-3xl opacity-20 blur-2xl"></div> <div class="relative bg-primary-50 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-primary-200"><img${attr("src", program.image)}${attr("alt", program.title)} class="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-none object-contain rounded-2xl"/></div></div>`);
      }
    });
    $$renderer.push(`<!----></div></div></div>`);
  }
  $$renderer.push(`<!--]--></div></section> `);
  Footer($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _page as default
};
