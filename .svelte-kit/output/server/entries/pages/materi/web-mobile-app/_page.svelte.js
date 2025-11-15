import { J as sanitize_props, K as spread_props, N as slot, F as head, x as ensure_array_like, y as attr_class, O as clsx, w as attr } from "../../../../chunks/index2.js";
import { S as ScrollReveal } from "../../../../chunks/ScrollReveal.js";
import { I as Icon, B as Breadcrumb } from "../../../../chunks/Breadcrumb.js";
import { F as Footer } from "../../../../chunks/Footer.js";
import { s as scratchImg } from "../../../../chunks/scratchHD.js";
import { t as thunkableImg } from "../../../../chunks/thunkableHD.js";
import { f as flutterflowImg } from "../../../../chunks/flutterflowHD.js";
import { B as Blocks } from "../../../../chunks/blocks.js";
import { S as Smartphone } from "../../../../chunks/smartphone.js";
import { Z as Zap } from "../../../../chunks/zap.js";
import { j as escape_html } from "../../../../chunks/context.js";
function Monitor($$renderer, $$props) {
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
      "rect",
      { "width": "20", "height": "14", "x": "2", "y": "3", "rx": "2" }
    ],
    ["line", { "x1": "8", "x2": "16", "y1": "21", "y2": "21" }],
    ["line", { "x1": "12", "x2": "12", "y1": "17", "y2": "21" }]
  ];
  Icon($$renderer, spread_props([
    { name: "monitor" },
    $$sanitized_props,
    {
      /**
       * @component @name Monitor
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTQiIHg9IjIiIHk9IjMiIHJ4PSIyIiAvPgogIDxsaW5lIHgxPSI4IiB4Mj0iMTYiIHkxPSIyMSIgeTI9IjIxIiAvPgogIDxsaW5lIHgxPSIxMiIgeDI9IjEyIiB5MT0iMTciIHkyPSIyMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/monitor
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
    { label: "Web & Mobile App Development", href: null }
  ];
  const programs = [
    {
      level: "Sekolah Dasar",
      title: "Scratch – Belajar Koding Sambil Bermain",
      description: "Platform coding visual yang dikembangkan oleh MIT ini dirancang khusus untuk anak-anak, menjadi pintu gerbang ideal menuju dunia pemrograman. Dengan tampilan yang penuh warna dan sistem blok yang mudah dipahami, anak-anak dapat membuat animasi, cerita interaktif, hingga game sederhana.",
      extendedDesc: "Melalui pengalaman belajar yang serasa bermain, siswa tidak hanya memahami dasar-dasar logika pemrograman, tetapi juga mengembangkan kreativitas, kemampuan berpikir kritis, dan pemecahan masalah secara natural dan menyenangkan.",
      bgColor: "bg-primary-500",
      image: scratchImg,
      ageRange: "6-12 Tahun",
      features: [
        "Coding visual dengan drag & drop",
        "Buat animasi dan game sederhana",
        "Belajar logika pemrograman dasar",
        "Platform dikembangkan MIT"
      ],
      detailLink: "/materi/detail/scratch"
    },
    {
      level: "Sekolah Menengah Pertama",
      title: "Thunkable - Buat Aplikasi Mobile Tanpa Koding",
      description: "Thunkable adalah platform visual berbasis drag-and-drop yang memungkinkan siswa membuat aplikasi Android & iOS dengan cara yang menyenangkan dan intuitif. Cocok untuk pelajar SMP yang ingin menciptakan aplikasi tanpa harus menulis kode.",
      extendedDesc: "Dengan tampilan yang interaktif dan terhubung ke fitur-fitur nyata seperti kamera, GPS, dan database, siswa bisa belajar konsep logika pemrograman, desain UI/UX, dan alur kerja aplikasi sejak dini. Belajar membangun aplikasi seperti kalkulator, kuis, atau katalog digital hanya dengan menyusun blok visual—mirip seperti menyusun puzzle.",
      bgColor: "bg-primary-500",
      image: thunkableImg,
      ageRange: "13-15 Tahun",
      features: [
        "Buat app Android & iOS",
        "Drag and drop interface",
        "Integrasi kamera, GPS, database",
        "Belajar UI/UX design"
      ],
      detailLink: "/materi/detail/thunkable"
    },
    {
      level: "Sekolah Menengah Atas",
      title: "FlutterFlow - Buat Aplikasi Multi Platform Profesional",
      description: "FlutterFlow adalah platform visual yang memungkinkan siswa SMA membangun aplikasi Web, Android dan iOS tanpa perlu menulis kode. Dengan tampilan drag-and-drop yang intuitif, siswa bisa merancang antarmuka, menambahkan fungsionalitas, serta mengintegrasikan database dan API dengan mudah.",
      extendedDesc: "Belajar FlutterFlow memberikan pengalaman nyata seperti membangun startup teknologi. Siswa tidak hanya memahami cara kerja aplikasi modern, tapi juga membangun portofolio digital yang bisa dibanggakan sejak bangku sekolah.",
      bgColor: "bg-primary-500",
      image: flutterflowImg,
      ageRange: "16-18 Tahun",
      features: [
        "Aplikasi Web, Android & iOS",
        "Professional UI builder",
        "Integrasi API & Database",
        "Export ke production code"
      ],
      detailLink: "/materi/detail/flutterflow"
    }
  ];
  head("flzwp3", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Belajar Membuat Aplikasi Mobile dan Web - Kodeflow Academy</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Belajar membuat aplikasi multi-platform (Web, Android, iOS) dengan Scratch, Thunkable, dan FlutterFlow secara visual tanpa coding."/>`);
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
      $$renderer2.push(`<h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight">Belajar Membuat Aplikasi Mobile dan Web</h1> <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">Belajar membuat aplikasi <span class="text-secondary-500 font-bold">multi-platform</span> (Web, Desktop, Android dan iOS) dalam satu file, secara visual <span class="text-secondary-500 font-bold">tanpa harus menulis kode</span>.</p>`);
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
      $$renderer2.push(`<a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20Web%20%26%20Mobile%20App%20Development" target="_blank" rel="noopener noreferrer" class="inline-flex bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl items-center gap-2"><span>Jadwalkan Seminar Gratis</span> <span>→</span></a>`);
    }
  });
  $$renderer.push(`<!----></div> `);
  ScrollReveal($$renderer, {
    animation: "fade-left",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="relative hidden lg:block"><div class="w-full h-full flex items-center justify-center"><div class="relative"><div class="w-72 h-72 bg-secondary-500/30 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div> <div class="relative z-10 grid grid-cols-2 gap-4"><div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">`);
      Blocks($$renderer2, { class: "w-12 h-12 text-white mx-auto mb-2" });
      $$renderer2.push(`<!----> <p class="text-white font-semibold">Visual Builder</p></div> <div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">`);
      Smartphone($$renderer2, { class: "w-12 h-12 text-white mx-auto mb-2" });
      $$renderer2.push(`<!----> <p class="text-white font-semibold">Multi Platform</p></div> <div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">`);
      Monitor($$renderer2, { class: "w-12 h-12 text-white mx-auto mb-2" });
      $$renderer2.push(`<!----> <p class="text-white font-semibold">Web &amp; Desktop</p></div> <div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">`);
      Zap($$renderer2, { class: "w-12 h-12 text-white mx-auto mb-2" });
      $$renderer2.push(`<!----> <p class="text-white font-semibold">No Coding</p></div></div></div></div></div>`);
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
