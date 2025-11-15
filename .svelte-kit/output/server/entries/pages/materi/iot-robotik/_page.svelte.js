import { F as head, x as ensure_array_like, y as attr_class, O as clsx, w as attr } from "../../../../chunks/index2.js";
import { S as ScrollReveal } from "../../../../chunks/ScrollReveal.js";
import { B as Breadcrumb } from "../../../../chunks/Breadcrumb.js";
import { F as Footer } from "../../../../chunks/Footer.js";
import { m as microbitImg } from "../../../../chunks/microbitHD.js";
import { L as Lightbulb, a as arduinoImg } from "../../../../chunks/arduinoHD.js";
import { W as Wifi, e as espImg } from "../../../../chunks/iotHD.js";
import { B as Bot } from "../../../../chunks/bot.js";
import { C as Cpu } from "../../../../chunks/cpu.js";
import { j as escape_html } from "../../../../chunks/context.js";
function _page($$renderer) {
  const breadcrumbItems = [
    { label: "Beranda", href: "/" },
    { label: "Daftar Materi", href: "/#materials" },
    { label: "IoT & Robotics", href: null }
  ];
  const programs = [
    {
      level: "Sekolah Dasar",
      title: "Micro:bit – Belajar Robotika dengan Coding Visual",
      description: "Micro:bit adalah komputer mini yang sempurna untuk anak-anak yang ingin belajar robotika dan programming dengan cara yang menyenangkan. Dengan LED matrix, sensor, dan Bluetooth built-in, siswa dapat membuat berbagai project interaktif seperti game sederhana, alarm, kompas digital, dan robot yang merespon lingkungan.",
      extendedDesc: "Melalui Micro:bit, anak-anak belajar konsep dasar elektronika, sensor input/output, dan logika pemrograman dengan visual blocks yang mudah dipahami. Mereka juga mengembangkan kreativitas dalam membuat project fisik yang bisa berinteraksi dengan dunia nyata, sambil memahami bagaimana teknologi bekerja di balik perangkat sehari-hari.",
      bgColor: "bg-primary-500",
      image: microbitImg,
      ageRange: "6-12 Tahun",
      features: [
        "Komputer mini dengan LED & sensor",
        "Visual block programming",
        "Project robotika interaktif",
        "Belajar elektronika dasar"
      ],
      detailLink: "/materi/detail/microbit"
    },
    {
      level: "Sekolah Menengah Pertama",
      title: "Arduino - Bikin Robot & Smart Device Sendiri!",
      description: "Pengen bikin robot line follower atau smart home sendiri? Arduino adalah papan elektronik ajaib yang bisa kamu program untuk bikin berbagai project keren! Dari robot yang bisa ikutin garis, alarm pintar, sampai sistem penyiraman tanaman otomatis.",
      extendedDesc: "Kamu akan belajar cara menghubungkan sensor, motor, LED dan komponen elektronik lainnya ke Arduino. Belajar coding dengan bahasa yang mudah dipahami, bikin robot yang bisa bereaksi dengan lingkungan, dan memahami bagaimana teknologi bekerja. Skill yang sangat berguna untuk masa depan!",
      bgColor: "bg-primary-500",
      image: arduinoImg,
      ageRange: "13-15 Tahun",
      features: [
        "Programming Arduino dengan C++",
        "Rakit sensor & motor ke robot",
        "Bikin robot line follower & smart device",
        "Belajar elektronika sambil praktik"
      ],
      detailLink: "/materi/detail/arduino"
    },
    {
      level: "Sekolah Menengah Atas",
      title: "IoT & Smart System - Bangun Teknologi Masa Depan!",
      description: "Siap bikin smart home, smart farm, atau sistem monitoring canggih yang terhubung internet? Belajar Internet of Things (IoT) dengan ESP32 dan platform cloud! Kamu bisa kontrol perangkat dari smartphone, monitor data real-time, dan bikin sistem automation yang keren.",
      extendedDesc: "Program ini mengajarkan cara membangun sistem IoT lengkap: dari sensor yang baca data lingkungan, kirim data ke cloud (Firebase/ThingSpeak), sampai bikin dashboard dan kontrol via aplikasi smartphone. Kamu juga belajar WiFi, Bluetooth, dan keamanan sistem IoT. Skill ini super dibutuhkan di industri 4.0!",
      bgColor: "bg-primary-500",
      image: espImg,
      ageRange: "16-18 Tahun",
      features: [
        "ESP32 dengan WiFi & Bluetooth",
        "Koneksi ke cloud & smartphone app",
        "Bikin smart home & monitoring system",
        "Siap kerja di era Industry 4.0"
      ],
      detailLink: "/materi/detail/iot"
    }
  ];
  head("1j5r5vf", $$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>Belajar IoT &amp; Robotics - Kodeflow Academy</title>`);
    });
    $$renderer2.push(`<meta name="description" content="Belajar IoT dan Robotika dari dasar hingga profesional. Dari Lego Robotics, Arduino, hingga IoT Smart System untuk teknologi masa depan."/>`);
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
      $$renderer2.push(`<h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight">Yuk, Belajar Bikin Robot &amp; Smart Device!</h1> <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">Ciptakan masa depan dengan <span class="text-secondary-500 font-bold">robotika dan IoT</span>, dari robot Lego yang seru hingga <span class="text-secondary-500 font-bold">smart system yang terhubung internet</span>!</p>`);
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
      $$renderer2.push(`<a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20IoT%20%26%20Robotics" target="_blank" rel="noopener noreferrer" class="inline-flex bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl items-center gap-2"><span>Ikutan Seminar Gratis Yuk!</span> <span>→</span></a>`);
    }
  });
  $$renderer.push(`<!----></div> `);
  ScrollReveal($$renderer, {
    animation: "fade-left",
    delay: 200,
    children: ($$renderer2) => {
      $$renderer2.push(`<div class="relative hidden lg:block"><div class="w-full h-full flex items-center justify-center"><div class="relative"><div class="w-72 h-72 bg-secondary-500/30 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div> <div class="relative z-10 grid grid-cols-2 gap-4"><div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">`);
      Bot($$renderer2, { class: "w-12 h-12 text-white mx-auto mb-2" });
      $$renderer2.push(`<!----> <p class="text-white font-semibold">Robotika</p></div> <div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">`);
      Wifi($$renderer2, { class: "w-12 h-12 text-white mx-auto mb-2" });
      $$renderer2.push(`<!----> <p class="text-white font-semibold">IoT Connect</p></div> <div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">`);
      Cpu($$renderer2, { class: "w-12 h-12 text-white mx-auto mb-2" });
      $$renderer2.push(`<!----> <p class="text-white font-semibold">Elektronika</p></div> <div class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center">`);
      Lightbulb($$renderer2, { class: "w-12 h-12 text-white mx-auto mb-2" });
      $$renderer2.push(`<!----> <p class="text-white font-semibold">Smart System</p></div></div></div></div></div>`);
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
