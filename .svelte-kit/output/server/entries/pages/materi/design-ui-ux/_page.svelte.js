import { J as sanitize_props, K as spread_props, N as slot, F as head, x as ensure_array_like, y as attr_class, O as clsx, w as attr } from "../../../../chunks/index2.js";
import { S as ScrollReveal } from "../../../../chunks/ScrollReveal.js";
import { I as Icon, B as Breadcrumb } from "../../../../chunks/Breadcrumb.js";
import { F as Footer } from "../../../../chunks/Footer.js";
import { c as canvaImg } from "../../../../chunks/canvaHD.js";
import { m as marvelImg } from "../../../../chunks/marvelAppHD.js";
import { f as figmaImg } from "../../../../chunks/figmaHD.js";
import { P as Palette } from "../../../../chunks/palette.js";
import { L as Layers } from "../../../../chunks/layers.js";
import { S as Sparkles } from "../../../../chunks/sparkles.js";
import { j as escape_html } from "../../../../chunks/context.js";
function Eye($$renderer, $$props) {
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
      {
        "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "eye" },
    $$sanitized_props,
    {
      /**
       * @component @name Eye
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMi4wNjIgMTIuMzQ4YTEgMSAwIDAgMSAwLS42OTYgMTAuNzUgMTAuNzUgMCAwIDEgMTkuODc2IDAgMSAxIDAgMCAxIDAgLjY5NiAxMC43NSAxMC43NSAwIDAgMS0xOS44NzYgMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/eye
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
    { label: "UI/UX Design", href: null }
  ];
  const programs = [
    {
      level: "Sekolah Dasar",
      title: "Canva – Belajar Design Grafis dengan Mudah dan Menyenangkan",
      description: "Canva adalah platform design yang sangat mudah digunakan, sempurna untuk anak-anak yang ingin mulai belajar membuat design visual yang menarik. Dengan ribuan template dan elemen drag-and-drop, siswa dapat membuat poster, kartu ucapan, presentasi, dan design sederhana lainnya.",
      extendedDesc: "Melalui Canva, anak-anak belajar dasar-dasar design seperti pemilihan warna, tipografi, komposisi, dan layout. Mereka juga mengembangkan kreativitas visual dan kemampuan komunikasi melalui design, sambil memahami prinsip-prinsip design thinking sejak dini.",
      bgColor: "bg-primary-500",
      image: canvaImg,
      ageRange: "6-12 Tahun",
      features: [
        "Design tool yang user-friendly",
        "Ribuan template siap pakai",
        "Belajar dasar design grafis",
        "Kreativitas & visual thinking"
      ],
      detailLink: "/materi/detail/canva"
    },
    {
      level: "Sekolah Menengah Pertama",
      title: "Marvel App – Buat Prototype Aplikasi Interaktif dengan Mudah",
      description: "Marvel App adalah platform prototyping yang mudah digunakan, sempurna untuk siswa SMP yang ingin belajar membuat prototype aplikasi mobile dan web interaktif. Dengan fitur drag-and-drop yang intuitif, siswa dapat mengubah design statis menjadi prototype yang bisa diklik dan diuji.",
      extendedDesc: "Siswa akan belajar membuat wireframe, mockup, dan prototype interaktif dengan transisi dan animasi yang smooth. Marvel App mengajarkan konsep user flow, navigation, dan interaction design dengan cara yang menyenangkan. Skill ini sangat berguna untuk karir di bidang product design dan user experience.",
      bgColor: "bg-primary-500",
      image: marvelImg,
      ageRange: "13-15 Tahun",
      features: [
        "Prototyping mudah & intuitif",
        "Interactive prototype dengan animasi",
        "User flow & navigation design",
        "Design untuk mobile & web"
      ],
      detailLink: "/materi/detail/marvel-app"
    },
    {
      level: "Sekolah Menengah Atas",
      title: "Figma – Menjadi UI/UX Designer Profesional",
      description: "Figma adalah tool design UI/UX industry-standard yang digunakan oleh perusahaan teknologi terkemuka di dunia. Program ini untuk siswa SMA yang ingin menguasai seluruh aspek UI/UX Design secara profesional. Belajar dari research, user persona, user journey, wireframing, prototyping, hingga usability testing dan handoff ke developer.",
      extendedDesc: "Siswa akan belajar complete design process seperti di perusahaan teknologi: user research, information architecture, interaction design, visual design, micro-interactions, design system, dan collaboration dengan developer. Mereka juga membangun portfolio profesional yang bisa digunakan untuk apply pekerjaan atau kuliah di bidang design. Figma adalah skill yang wajib dikuasai untuk karir sebagai Product Designer.",
      bgColor: "bg-primary-500",
      image: figmaImg,
      ageRange: "16-18 Tahun",
      features: [
        "Complete UI/UX design process",
        "User research & testing",
        "Advanced prototyping & animation",
        "Professional portfolio building"
      ],
      detailLink: "/materi/detail/figma"
    }
  ];
  head("1dxu2op", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Belajar UI/UX Design - Kodeflow Academy</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Belajar UI/UX Design dari dasar hingga profesional dengan Canva, Marvel App, dan Figma. Dari design grafis sederhana hingga prototype aplikasi yang interaktif."/>`);
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
      $$renderer2.push(`<h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight">Belajar UI/UX Design dari Nol Hingga Profesional</h1> <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">Wujudkan kreativitasmu menjadi <span class="text-secondary-500 font-bold">UI/UX Designer</span> dengan membuat design yang indah dan <span class="text-secondary-500 font-bold">user-friendly</span>,
            dari konsep hingga prototype yang interaktif.</p>`);
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
      $$renderer2.push(`<a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20UI/UX%20Design" target="_blank" rel="noopener noreferrer" class="inline-flex bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl items-center gap-2"><span>Jadwalkan Seminar Gratis</span> <span>→</span></a>`);
    }
  });
  $$renderer.push(`<!----></div> `);
  ScrollReveal($$renderer, {
    animation: "fade-left",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="relative hidden lg:block"><div class="w-full h-full flex items-center justify-center"><div class="relative"><div class="w-72 h-72 bg-secondary-500/30 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div> <div class="relative z-10 grid grid-cols-2 gap-4"><div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">`);
      Palette($$renderer2, { class: "w-12 h-12 text-white mx-auto mb-2" });
      $$renderer2.push(`<!----> <p class="text-white font-semibold">Visual Design</p></div> <div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">`);
      Layers($$renderer2, { class: "w-12 h-12 text-white mx-auto mb-2" });
      $$renderer2.push(`<!----> <p class="text-white font-semibold">UI Components</p></div> <div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">`);
      Sparkles($$renderer2, { class: "w-12 h-12 text-white mx-auto mb-2" });
      $$renderer2.push(`<!----> <p class="text-white font-semibold">Prototyping</p></div> <div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">`);
      Eye($$renderer2, { class: "w-12 h-12 text-white mx-auto mb-2" });
      $$renderer2.push(`<!----> <p class="text-white font-semibold">User Experience</p></div></div></div></div></div>`);
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
        $$renderer2.push(`<div class="space-y-6"><div><div class="mb-3 flex flex-wrap gap-2 items-center"><div class="inline-block bg-primary-100 text-primary-600 px-6 py-2 rounded-full font-semibold">${escape_html(program.level)}</div> <span class="bg-secondary-100 text-secondary-700 px-4 py-1 rounded-full text-sm font-semibold">${escape_html(program.ageRange)}</span></div> <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">${escape_html(program.title)}</h3></div> <p class="text-gray-700 text-lg leading-relaxed">${escape_html(program.description)}</p> <p class="text-gray-600 leading-relaxed">${escape_html(program.extendedDesc)}</p> <div class="space-y-3"><!--[-->`);
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
