import { J as sanitize_props, K as spread_props, N as slot, F as head, w as attr, x as ensure_array_like, y as attr_class, z as stringify } from "../../../../../chunks/index2.js";
import { S as ScrollReveal } from "../../../../../chunks/ScrollReveal.js";
import { I as Icon, B as Breadcrumb } from "../../../../../chunks/Breadcrumb.js";
import { a as arduinoImg, L as Lightbulb } from "../../../../../chunks/arduinoHD.js";
import { C as Cpu } from "../../../../../chunks/cpu.js";
import { Z as Zap } from "../../../../../chunks/zap.js";
import { j as escape_html } from "../../../../../chunks/context.js";
function Cog($$renderer, $$props) {
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
    ["path", { "d": "M11 10.27 7 3.34" }],
    ["path", { "d": "m11 13.73-4 6.93" }],
    ["path", { "d": "M12 22v-2" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M14 12h8" }],
    ["path", { "d": "m17 20.66-1-1.73" }],
    ["path", { "d": "m17 3.34-1 1.73" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "m20.66 17-1.73-1" }],
    ["path", { "d": "m20.66 7-1.73 1" }],
    ["path", { "d": "m3.34 17 1.73-1" }],
    ["path", { "d": "m3.34 7 1.73 1" }],
    ["circle", { "cx": "12", "cy": "12", "r": "2" }],
    ["circle", { "cx": "12", "cy": "12", "r": "8" }]
  ];
  Icon($$renderer, spread_props([
    { name: "cog" },
    $$sanitized_props,
    {
      /**
       * @component @name Cog
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgMTAuMjcgNyAzLjM0IiAvPgogIDxwYXRoIGQ9Im0xMSAxMy43My00IDYuOTMiIC8+CiAgPHBhdGggZD0iTTEyIDIydi0yIiAvPgogIDxwYXRoIGQ9Ik0xMiAydjIiIC8+CiAgPHBhdGggZD0iTTE0IDEyaDgiIC8+CiAgPHBhdGggZD0ibTE3IDIwLjY2LTEtMS43MyIgLz4KICA8cGF0aCBkPSJtMTcgMy4zNC0xIDEuNzMiIC8+CiAgPHBhdGggZD0iTTIgMTJoMiIgLz4KICA8cGF0aCBkPSJtMjAuNjYgMTctMS43My0xIiAvPgogIDxwYXRoIGQ9Im0yMC42NiA3LTEuNzMgMSIgLz4KICA8cGF0aCBkPSJtMy4zNCAxNyAxLjczLTEiIC8+CiAgPHBhdGggZD0ibTMuMzQgNyAxLjczIDEiIC8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMiIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI4IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/cog
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
    { label: "IoT dan Robotik", href: "/materi/iot-robotik" },
    { label: "Arduino", href: null }
  ];
  const features = [
    {
      icon: Cpu,
      title: "Microcontroller Programming",
      description: "Belajar programming C++ untuk kontrol hardware.",
      color: "bg-primary-500"
    },
    {
      icon: Lightbulb,
      title: "Electronics Basics",
      description: "Memahami circuit, voltage, current, dan components.",
      color: "bg-primary-500"
    },
    {
      icon: Cog,
      title: "Sensors & Actuators",
      description: "Bekerja dengan berbagai sensors dan motor.",
      color: "bg-primary-500"
    },
    {
      icon: Zap,
      title: "Real Projects",
      description: "Buat project nyata: robot, smart home, automation.",
      color: "bg-primary-500"
    }
  ];
  const projects = [
    {
      title: "Smart Home System",
      description: "Sistem smart home dengan sensors dan automation control.",
      features: [
        "Light automation",
        "Temperature control",
        "Motion detection",
        "Remote control"
      ]
    },
    {
      title: "Line Following Robot",
      description: "Robot yang bisa mengikuti garis menggunakan IR sensors.",
      features: [
        "IR sensors",
        "Motor control",
        "PID algorithm",
        "Speed control"
      ]
    },
    {
      title: "Weather Station",
      description: "Stasiun cuaca dengan sensors dan LCD display.",
      features: [
        "Temperature sensor",
        "Humidity sensor",
        "LCD display",
        "Data logging"
      ]
    },
    {
      title: "Security System",
      description: "Sistem keamanan dengan motion sensor dan alarm.",
      features: [
        "PIR motion sensor",
        "Buzzer alarm",
        "Keypad access",
        "SMS notification"
      ]
    }
  ];
  const willLearn = [
    "Electronics fundamentals dan circuit design",
    "Arduino programming dengan C/C++",
    "Sensors, motors, dan komponen elektronik",
    "Membuat project IoT dan robotik sederhana"
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
      section: "Pengenalan Arduino",
      description: "Memahami Arduino board dan basic electronics",
      topics: [
        "Arduino Uno board dan komponennya",
        "Arduino IDE setup dan installation",
        "Digital vs analog pins",
        "Basic electronics: voltage, current, resistance",
        "Breadboard dan wiring",
        "Project: Blinking LED (Hello World)"
      ]
    },
    {
      section: "Arduino Programming",
      description: "Belajar coding C++ untuk Arduino",
      topics: [
        "Arduino sketch structure (setup & loop)",
        "Variables dan data types",
        "Digital I/O: digitalWrite, digitalRead",
        "Analog I/O: analogWrite (PWM), analogRead",
        "Serial communication untuk debugging",
        "Project: Traffic light system"
      ]
    },
    {
      section: "Sensors & Input",
      description: "Bekerja dengan berbagai sensors",
      topics: [
        "Button dan switch inputs",
        "Potentiometer dan analog sensors",
        "Ultrasonic sensor (distance)",
        "Temperature & humidity sensors (DHT11)",
        "Light sensors (LDR, photoresistor)",
        "Project: Automatic night light"
      ]
    },
    {
      section: "Actuators & Output",
      description: "Kontrol motors, servos, dan displays",
      topics: [
        "DC motors dan motor drivers (L298N)",
        "Servo motors untuk precise control",
        "LCD display (16x2, I2C)",
        "Buzzer dan speakers",
        "RGB LEDs dan LED strips",
        "Project: LCD temperature display"
      ]
    },
    {
      section: "Advanced Projects",
      description: "Project kompleks dengan multiple components",
      topics: [
        "Combining sensors dan actuators",
        "State machines untuk logic",
        "Wireless communication (Bluetooth, WiFi)",
        "Power management",
        "Enclosure dan project packaging",
        "Project: Line following robot"
      ]
    },
    {
      section: "Final Project",
      description: "Buat IoT atau robotics project lengkap",
      topics: [
        "Project requirements dan planning",
        "Circuit design dan schematic",
        "Code development dan testing",
        "Troubleshooting dan debugging",
        "Documentation dan presentation",
        "Project: Complete IoT/robotics system"
      ]
    }
  ];
  head("lgy2z8", $$renderer, ($$renderer2) => {
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
      $$renderer2.push(`<div class="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full mb-4"><span class="text-white font-semibold text-sm">13-15 Tahun - SMP</span></div> <h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight">Belajar Electronics dan IoT Dengan Arduino</h1> <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">Platform <span class="font-bold">microcontroller #1</span> di dunia untuk maker dan IoT. Buat robot, smart home, automation, dan project electronics keren lainnya!</p>`);
    }
  });
  $$renderer.push(`<!----> `);
  ScrollReveal($$renderer, {
    animation: "fade-up",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20Arduino" target="_blank" rel="noopener noreferrer" class="inline-flex bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl items-center gap-2"><span>Hubungi Kami</span> <span>→</span></a>`);
    }
  });
  $$renderer.push(`<!----></div> `);
  ScrollReveal($$renderer, {
    animation: "fade-left",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="relative"><div class="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div> <div class="relative bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-2xl"><img${attr("src", arduinoImg)} alt="Arduino Platform" class="w-full h-auto rounded-2xl"/></div></div>`);
    }
  });
  $$renderer.push(`<!----></div></div></section> <section class="py-16 lg:py-24 bg-white"><div class="container mx-auto px-6 lg:px-12"><div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">`);
  ScrollReveal($$renderer, {
    animation: "fade-right",
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="relative"><div class="absolute inset-0 bg-primary-500 rounded-3xl opacity-20 blur-2xl"></div> <div class="relative bg-primary-50 rounded-3xl p-6 lg:p-8 border border-primary-200"><img${attr("src", arduinoImg)} alt="Arduino Platform" class="w-full h-auto rounded-2xl shadow-lg"/></div></div>`);
    }
  });
  $$renderer.push(`<!----> `);
  ScrollReveal($$renderer, {
    animation: "fade-left",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="space-y-6"><h2 class="text-3xl lg:text-4xl font-bold text-gray-900">Kenapa Harus Arduino?</h2> <div class="space-y-4 text-gray-700 leading-relaxed"><p>Arduino adalah <span class="font-bold text-primary-600">platform microcontroller #1</span> di dunia untuk maker dan IoT enthusiast. Dengan Arduino, kamu bisa membuat apa saja dari robot, smart home, hingga wearable devices.</p> <p>Cocok untuk <span class="font-bold text-primary-600">SMP &amp; SMA</span> yang ingin belajar electronics, IoT, dan embedded programming dengan ekosistem yang sangat luas dan supportive.</p></div> <a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20jadwalkan%20seminar%20gratis%20Arduino" target="_blank" rel="noopener noreferrer" class="inline-flex bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl">Jadwalkan Seminar Gratis</a></div>`);
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
        $$renderer2.push(`<div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"><div${attr_class(`w-16 h-16 ${stringify(feature.color)} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`, "svelte-lgy2z8")}><!---->`);
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
      $$renderer2.push(`<!--]--></ul> <div class="mt-6 pt-6 border-t border-primary-200"><a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20jadwalkan%20seminar%20gratis%20Arduino" target="_blank" rel="noopener noreferrer" class="block text-center bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm">Jadwalkan Seminar Gratis</a></div></div>`);
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
          $$renderer2.push(`<div class="px-6 lg:px-8 pb-6 lg:pb-8 pt-0 border-t border-gray-100 animate-accordion-down svelte-lgy2z8"><ul class="grid md:grid-cols-2 gap-3 mt-4"><!--[-->`);
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
          bermain bersama Scratch!</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20daftar%20kelas%20Arduino" target="_blank" rel="noopener noreferrer" class="bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center gap-2"><span>Daftar Kelas Gratis</span></a> <a href="/materi/web-mobile-app" class="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 border border-white/30">Lihat Materi Lainnya</a></div></div>`);
    }
  });
  $$renderer.push(`<!----></div></section>`);
}
export {
  _page as default
};
