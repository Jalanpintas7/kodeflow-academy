<script>
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
  import Footer from '$lib/components/ui/Footer.svelte';
  import { Cpu, Wifi, Bot, Lightbulb } from 'lucide-svelte';
  import microbitImg from '$lib/assets/images/materi/ux.png';
  import arduinoImg from '$lib/assets/images/materi/ux.png';
  import espImg from '$lib/assets/images/materi/ux.png';

  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Daftar Materi', href: '/#materials' },
    { label: 'IoT & Robotics', href: null },
  ];

  const programs = [
    {
      level: 'Sekolah Dasar',
      title: 'Micro:bit – Belajar Robotika dengan Coding Visual',
      description:
        'Micro:bit adalah komputer mini yang sempurna untuk anak-anak yang ingin belajar robotika dan programming dengan cara yang menyenangkan. Dengan LED matrix, sensor, dan Bluetooth built-in, siswa dapat membuat berbagai project interaktif seperti game sederhana, alarm, kompas digital, dan robot yang merespon lingkungan.',
      extendedDesc:
        'Melalui Micro:bit, anak-anak belajar konsep dasar elektronika, sensor input/output, dan logika pemrograman dengan visual blocks yang mudah dipahami. Mereka juga mengembangkan kreativitas dalam membuat project fisik yang bisa berinteraksi dengan dunia nyata, sambil memahami bagaimana teknologi bekerja di balik perangkat sehari-hari.',
      bgColor: 'from-green-400 to-emerald-500',
      image: microbitImg,
      ageRange: '6-12 Tahun',
      features: [
        'Komputer mini dengan LED & sensor',
        'Visual block programming',
        'Project robotika interaktif',
        'Belajar elektronika dasar',
      ],
      detailLink: '/materi/detail/microbit',
    },
    {
      level: 'Sekolah Menengah Pertama',
      title: 'Arduino – Buat Robot dan Smart Device Sendiri',
      description:
        'Arduino adalah platform elektronika open-source yang memungkinkan siswa SMP membuat berbagai project robotika dan IoT. Dengan Arduino, siswa belajar menghubungkan sensor, motor, LED, dan komponen elektronik lainnya untuk menciptakan robot line follower, smart home system, weather station, dan masih banyak lagi.',
      extendedDesc:
        'Program ini mengajarkan siswa dasar-dasar elektronika, wiring, dan programming dengan bahasa C++. Mereka belajar bagaimana membaca sensor, mengontrol actuator, dan membuat sistem yang merespon kondisi lingkungan. Arduino adalah fondasi yang sempurna untuk memahami bagaimana IoT dan robotika bekerja di industri.',
      bgColor: 'from-blue-400 to-cyan-500',
      image: arduinoImg,
      ageRange: '13-15 Tahun',
      features: [
        'Programming dengan Arduino IDE',
        'Sensor & actuator integration',
        'Buat robot & smart devices',
        'Dasar elektronika & wiring',
      ],
      detailLink: '/materi/detail/arduino',
    },
    {
      level: 'Sekolah Menengah Atas',
      title: 'ESP32 & IoT – Bangun Smart System dengan Internet of Things',
      description:
        'ESP32 adalah microcontroller powerful dengan WiFi dan Bluetooth built-in yang digunakan untuk membuat sistem IoT profesional. Siswa SMA akan belajar membuat smart home automation, environmental monitoring system, agricultural IoT, dan aplikasi industri 4.0 yang terhubung ke cloud dan bisa dikontrol via smartphone.',
      extendedDesc:
        'Program ini memberikan pengalaman nyata dalam membangun sistem IoT end-to-end: dari sensor reading, data processing, cloud integration (Firebase, Blynk, ThingSpeak), hingga membuat dashboard monitoring dan control system. Siswa juga belajar tentang protokol komunikasi (MQTT, HTTP), security basics, dan bagaimana deploy IoT solution yang scalable. Skill ini sangat relevan dengan industri 4.0 dan smart city development.',
      bgColor: 'from-purple-400 to-indigo-600',
      image: espImg,
      ageRange: '16-18 Tahun',
      features: [
        'ESP32 dengan WiFi & Bluetooth',
        'Cloud integration & IoT platforms',
        'Smart system & automation',
        'Industry 4.0 ready skills',
      ],
      detailLink: '/materi/detail/esp32-iot',
    },
  ];
</script>

<svelte:head>
  <title>Belajar IoT & Robotics - Kodeflow Academy</title>
  <meta
    name="description"
    content="Belajar IoT dan Robotika dari dasar hingga profesional. Dari Micro:bit, Arduino, hingga ESP32 untuk membuat smart devices dan sistem IoT."
  />
</svelte:head>

<!-- Hero Section -->
<section
  class="relative overflow-hidden bg-linear-to-br from-primary-500 via-purple-600 to-primary-700 min-h-[70vh] flex items-center"
>
  <!-- Decorative Background -->
  <div class="absolute inset-0 opacity-10">
    <div
      class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-20 right-20 w-96 h-96 bg-secondary-500 rounded-full blur-3xl"
    ></div>
  </div>

  <div class="container mx-auto px-6 lg:px-12 py-16 relative z-10">
    <!-- Breadcrumb -->
    <ScrollReveal animation="fade-right">
      <Breadcrumb items={breadcrumbItems} variant="dark" />
    </ScrollReveal>

    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left Content -->
      <div class="space-y-6 lg:space-y-8">
        <ScrollReveal animation="fade-up">
          <h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Belajar IoT & Robotics dari Dasar Hingga Industri 4.0
          </h1>
          <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Ciptakan masa depan dengan <span
              class="text-secondary-500 font-bold">robotika dan IoT</span
            >, dari robot sederhana hingga
            <span class="text-secondary-500 font-bold"
              >smart system yang terhubung internet</span
            >
            untuk solusi real-world.
          </p>
        </ScrollReveal>

        <!-- Level Badges -->
        <ScrollReveal animation="fade-up" delay={200}>
          <div class="flex flex-wrap gap-3">
            {#each programs as program}
              <div
                class="bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full"
              >
                <span class="text-white/90 text-sm font-medium"
                  >{program.level}</span
                >
              </div>
            {/each}
          </div>
        </ScrollReveal>

        <!-- CTA Button -->
        <ScrollReveal animation="fade-up" delay={300}>
          <a
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20IoT%20%26%20Robotics"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex bg-secondary-500 hover:bg-secondary-600 text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl items-center gap-2"
          >
            <span>Jadwalkan Seminar Gratis</span>
            <span>→</span>
          </a>
        </ScrollReveal>
      </div>

      <!-- Right Content - Decorative -->
      <ScrollReveal animation="fade-left" delay={200}>
        <div class="relative hidden lg:block">
          <div class="w-full h-full flex items-center justify-center">
            <div class="relative">
              <div
                class="w-72 h-72 bg-secondary-500/30 rounded-full blur-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              ></div>
              <div class="relative z-10 grid grid-cols-2 gap-4">
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Bot class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Robotics</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Wifi class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">IoT Connected</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Cpu class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Microcontrollers</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Lightbulb class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Smart Systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>

<!-- Programs by Level Section -->
<section class="py-16 lg:py-24 bg-white">
  <div class="container mx-auto px-6 lg:px-12 space-y-20">
    {#each programs as program, index}
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <!-- Text Content -->
          <div class={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
            <ScrollReveal
              animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div class="space-y-6">
                <div>
                  <div class="mb-3 flex flex-wrap gap-2 items-center">
                    <div
                      class="inline-block bg-linear-to-r {program.bgColor} text-white px-6 py-2 rounded-full font-semibold"
                    >
                      {program.level}
                    </div>
                    <span
                      class="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold"
                    >
                      {program.ageRange}
                    </span>
                  </div>
                  <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    {program.title}
                  </h3>
                </div>

                <p class="text-gray-700 text-lg leading-relaxed">
                  {program.description}
                </p>

                <p class="text-gray-600 leading-relaxed">
                  {program.extendedDesc}
                </p>

                <!-- Features List -->
                <div class="space-y-3">
                  {#each program.features as feature}
                    <div class="flex items-center gap-3">
                      <div
                        class="w-6 h-6 bg-linear-to-r {program.bgColor} rounded-full flex items-center justify-center shrink-0"
                      >
                        <span class="text-white text-xs">✓</span>
                      </div>
                      <span class="text-gray-700">{feature}</span>
                    </div>
                  {/each}
                </div>

                <a
                  href={program.detailLink}
                  class="inline-flex bg-linear-to-r {program.bgColor} text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Lihat Detail
                </a>
              </div>
            </ScrollReveal>
          </div>

          <!-- Image -->
          <div class={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
            <ScrollReveal
              animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              delay={200}
            >
              <div class="relative">
                <div
                  class="absolute inset-0 bg-linear-to-r {program.bgColor} rounded-3xl opacity-20 blur-2xl"
                ></div>
                <div
                  class="relative bg-linear-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl"
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    class="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<Footer />
