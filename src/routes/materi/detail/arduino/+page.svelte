<script>
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
  import { Cpu, Lightbulb, Cog, Zap } from 'lucide-svelte';
  import arduinoImg from '$lib/assets/images/materi/arduinoHD.png';

  // Accordion state
  let openAccordion = 0; // Default: first item open

  function toggleAccordion(index) {
    openAccordion = openAccordion === index ? -1 : index;
  }

  const breadcrumbItems = [{ label: 'Beranda', href: '/' },
    { label: 'Daftar Materi', href: '/#materials' },
    { label: 'IoT dan Robotik', href: '/materi/iot-robotik' },
    { label: 'Arduino', href: null },];

  const features = [{
      icon: Cpu,
      title: 'Microcontroller Programming',
      description: 'Belajar programming C++ untuk kontrol hardware.',
      color: 'bg-primary-500',
    },
    {
      icon: Lightbulb,
      title: 'Electronics Basics',
      description: 'Memahami circuit, voltage, current, dan components.',
      color: 'bg-primary-500',
    },
    {
      icon: Cog,
      title: 'Sensors & Actuators',
      description: 'Bekerja dengan berbagai sensors dan motor.',
      color: 'bg-primary-500',
    },
    {
      icon: Zap,
      title: 'Real Projects',
      description: 'Buat project nyata: robot, smart home, automation.',
      color: 'bg-primary-500',
    },];

  const projects = [{
      title: 'Smart Home System',
      description: 'Sistem smart home dengan sensors dan automation control.',
      features: [
        'Light automation',
        'Temperature control',
        'Motion detection',
        'Remote control',
      ],
    },
    {
      title: 'Line Following Robot',
      description: 'Robot yang bisa mengikuti garis menggunakan IR sensors.',
      features: [
        'IR sensors',
        'Motor control',
        'PID algorithm',
        'Speed control',
      ],
    },
    {
      title: 'Weather Station',
      description: 'Stasiun cuaca dengan sensors dan LCD display.',
      features: [
        'Temperature sensor',
        'Humidity sensor',
        'LCD display',
        'Data logging',
      ],
    },
    {
      title: 'Security System',
      description: 'Sistem keamanan dengan motion sensor dan alarm.',
      features: [
        'PIR motion sensor',
        'Buzzer alarm',
        'Keypad access',
        'SMS notification',
      ],
    },];

  const willLearn = ['Electronics fundamentals dan circuit design',
    'Arduino programming dengan C/C++',
    'Sensors, motors, dan komponen elektronik',
    'Membuat project IoT dan robotik sederhana',];

  const willGet = ['Video Materi Lengkap',
    'Modul Praktek Terstruktur',
    'Bahan Latihan & Studi Kasus',
    'Sertifikat Kelulusan',
    'Kelas Online/Offline',
    'Akses ke Komunitas Belajar',];

  const curriculum = [{
      section: 'Pengenalan Arduino',
      description: 'Memahami Arduino board dan basic electronics',
      topics: [
        'Arduino Uno board dan komponennya',
        'Arduino IDE setup dan installation',
        'Digital vs analog pins',
        'Basic electronics: voltage, current, resistance',
        'Breadboard dan wiring',
        'Project: Blinking LED (Hello World)',
      ],
    },
    {
      section: 'Arduino Programming',
      description: 'Belajar coding C++ untuk Arduino',
      topics: [
        'Arduino sketch structure (setup & loop)',
        'Variables dan data types',
        'Digital I/O: digitalWrite, digitalRead',
        'Analog I/O: analogWrite (PWM), analogRead',
        'Serial communication untuk debugging',
        'Project: Traffic light system',
      ],
    },
    {
      section: 'Sensors & Input',
      description: 'Bekerja dengan berbagai sensors',
      topics: [
        'Button dan switch inputs',
        'Potentiometer dan analog sensors',
        'Ultrasonic sensor (distance)',
        'Temperature & humidity sensors (DHT11)',
        'Light sensors (LDR, photoresistor)',
        'Project: Automatic night light',
      ],
    },
    {
      section: 'Actuators & Output',
      description: 'Kontrol motors, servos, dan displays',
      topics: [
        'DC motors dan motor drivers (L298N)',
        'Servo motors untuk precise control',
        'LCD display (16x2, I2C)',
        'Buzzer dan speakers',
        'RGB LEDs dan LED strips',
        'Project: LCD temperature display',
      ],
    },
    {
      section: 'Advanced Projects',
      description: 'Project kompleks dengan multiple components',
      topics: [
        'Combining sensors dan actuators',
        'State machines untuk logic',
        'Wireless communication (Bluetooth, WiFi)',
        'Power management',
        'Enclosure dan project packaging',
        'Project: Line following robot',
      ],
    },
    {
      section: 'Final Project',
      description: 'Buat IoT atau robotics project lengkap',
      topics: [
        'Project requirements dan planning',
        'Circuit design dan schematic',
        'Code development dan testing',
        'Troubleshooting dan debugging',
        'Documentation dan presentation',
        'Project: Complete IoT/robotics system',
      ],
    },];
</script>

<svelte:head>
  <title>Belajar Dasar Pemrograman Dengan Scratch - Kodeflow Academy</title>
  <meta
    name="description"
    content="Platform coding visual dari MIT untuk anak SD. Belajar coding sambil bermain dengan membuat game, animasi, dan cerita interaktif."
  />
</svelte:head>

<!-- Hero Section -->
<section
  class="relative overflow-hidden bg-primary-600 min-h-[70vh] flex items-center"
>
  <!-- Decorative Background -->
  <div class="absolute inset-0 opacity-10">
    <div
      class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-20 right-20 w-96 h-96 bg-secondary-400 rounded-full blur-3xl"
    ></div>
  </div>

  <div class="container mx-auto px-6 lg:px-12 py-16 relative z-10">
    <!-- Breadcrumb -->
    <ScrollReveal animation="fade-right">
      <Breadcrumb items={breadcrumbItems} variant="dark" />
    </ScrollReveal>

    <div class="grid lg:grid-cols-2 gap-12 items-center mt-8">
      <!-- Left Content -->
      <div class="space-y-6 lg:space-y-8">
        <ScrollReveal animation="fade-up">
          <div
            class="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full mb-4"
          >
            <span class="text-white font-semibold text-sm"
              >13-15 Tahun - SMP</span
            >
          </div>
          <h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Belajar Electronics dan IoT Dengan Arduino
          </h1>
          <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Platform <span class="font-bold">microcontroller #1</span> di dunia untuk maker dan IoT. Buat robot, smart home, automation, dan project electronics keren lainnya!
          </p>
        </ScrollReveal>

        <!-- CTA Button -->
        <ScrollReveal animation="fade-up" delay={200}>
          <a
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20Arduino"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl items-center gap-2"
          >
            <span>Hubungi Kami</span>
            <span>→</span>
          </a>
        </ScrollReveal>
      </div>

      <!-- Right Content - Image -->
      <ScrollReveal animation="fade-left" delay={200}>
        <div class="relative">
          <div class="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div>
          <div
            class="relative bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-2xl"
          >
            <img
              src={arduinoImg}
              alt="Arduino Platform"
              class="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>

<!-- Why Scratch Section -->
<section class="py-16 lg:py-24 bg-white">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
      <!-- Left - Image -->
      <ScrollReveal animation="fade-right">
        <div class="relative">
          <div
            class="absolute inset-0 bg-primary-500 rounded-3xl opacity-20 blur-2xl"
          ></div>
          <div
            class="relative bg-primary-50 rounded-3xl p-6 lg:p-8 border border-primary-200"
          >
            <img
              src={arduinoImg}
              alt="Arduino Platform"
              class="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </ScrollReveal>

      <!-- Right - Content -->
      <ScrollReveal animation="fade-left" delay={200}>
        <div class="space-y-6">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">
            Kenapa Harus Arduino?
          </h2>

          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Arduino adalah <span class="font-bold text-primary-600">platform microcontroller #1</span> di dunia untuk maker dan IoT enthusiast. Dengan Arduino, kamu bisa membuat apa saja dari robot, smart home, hingga wearable devices.
            </p>
            <p>
              Cocok untuk <span class="font-bold text-primary-600">SMP & SMA</span> yang ingin belajar electronics, IoT, dan embedded programming dengan ekosistem yang sangat luas dan supportive.
            </p>
          </div>

          <a
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20jadwalkan%20seminar%20gratis%20Arduino"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Jadwalkan Seminar Gratis
          </a>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>

<!-- Features Grid -->
<section class="py-16 lg:py-24 bg-gray-50">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each features as feature, index}
        <ScrollReveal animation="fade-up" delay={index * 100}>
          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div
              class="w-16 h-16 {feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
            >
              <svelte:component
                this={feature.icon}
                class="w-8 h-8 text-white"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p class="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<!-- What Will Learn & Get Section -->
<section class="py-16 lg:py-24 bg-white">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <!-- Will Learn -->
      <ScrollReveal animation="fade-right">
        <div
          class="bg-primary-50 rounded-2xl p-6 lg:p-8 border border-primary-200 h-full"
        >
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Apa yang akan dipelajari
          </h3>
          <ul class="space-y-4">
            {#each willLearn as item}
              <li class="flex items-start gap-3">
                <div
                  class="w-7 h-7 bg-primary-500 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span class="text-gray-700 leading-relaxed">{item}</span>
              </li>
            {/each}
          </ul>
        </div>
      </ScrollReveal>

      <!-- Will Get -->
      <ScrollReveal animation="fade-left" delay={200}>
        <div
          class="bg-primary-50 rounded-2xl p-6 lg:p-8 border border-primary-200 h-full"
        >
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Apa yang akan didapatkan
          </h3>
          <ul class="space-y-4">
            {#each willGet as item}
              <li class="flex items-start gap-3">
                <div
                  class="w-7 h-7 bg-primary-500 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                >
                  <svg
                    class="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span class="text-gray-700 leading-relaxed">{item}</span>
              </li>
            {/each}
          </ul>

          <div class="mt-6 pt-6 border-t border-primary-200">
            <a
              href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20jadwalkan%20seminar%20gratis%20Arduino"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-center bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm"
            >
              Jadwalkan Seminar Gratis
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>

<!-- Curriculum Section -->
<section class="py-16 lg:py-24 bg-gray-50">
  <div class="container mx-auto px-6 lg:px-12">
    <ScrollReveal animation="fade-up">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Kurikulum Pembelajaran
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Terstruktur dari pengenalan hingga project game lengkap
        </p>
      </div>
    </ScrollReveal>

    <div class="max-w-6xl mx-auto space-y-4">
      {#each curriculum as section, index}
        <ScrollReveal animation="fade-up" delay={index * 100}>
          <div
            class="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <!-- Accordion Header -->
            <button
              on:click={() => toggleAccordion(index)}
              class="w-full flex items-center gap-4 p-6 lg:p-8 text-left transition-colors duration-300 hover:bg-gray-50"
            >
              <div
                class="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center shrink-0"
              >
                <span class="text-white font-bold text-lg">{index + 1}</span>
              </div>
              <div class="flex-1">
                <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-1">
                  {section.section}
                </h3>
                <p class="text-gray-600 text-sm">{section.description}</p>
              </div>
              <svg
                class="w-6 h-6 text-primary-500 shrink-0 transition-transform duration-300 {openAccordion ===
                index
                  ? 'rotate-180'
                  : ''}"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <!-- Accordion Content -->
            {#if openAccordion === index}
              <div
                class="px-6 lg:px-8 pb-6 lg:pb-8 pt-0 border-t border-gray-100 animate-accordion-down"
              >
                <ul class="grid md:grid-cols-2 gap-3 mt-4">
                  {#each section.topics as topic}
                    <li class="flex items-start gap-2">
                      <span class="text-primary-500 mt-0.5 shrink-0">•</span>
                      <span class="text-gray-700 text-sm">{topic}</span>
                    </li>
                  {/each}
                </ul>
              </div>
            {/if}
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<!-- Projects Section -->
<section class="py-16 lg:py-24 bg-gray-50">
  <div class="container mx-auto px-6 lg:px-12">
    <ScrollReveal animation="fade-up">
      <div class="max-w-3xl mb-16 text-center mx-auto">
        <div
          class="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4"
        >
          Karya Project Kamu
        </div>
        <h2
          class="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
        >
          4 Game Keren yang Bakal Kamu Buat
        </h2>
        <p class="text-lg text-gray-600">
          Dari game sederhana sampai yang lebih kompleks, semua bikin sendiri!
        </p>
      </div>
    </ScrollReveal>

    <div class="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
      {#each projects as project, index}
        <ScrollReveal animation="fade-up" delay={index * 100}>
          <div class="group relative">
            <!-- Number Badge -->
            <div
              class="absolute -top-4 -left-4 w-12 h-12 bg-primary-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold shadow-lg z-10 group-hover:scale-110 transition-transform"
            >
              {index + 1}
            </div>

            <!-- Card -->
            <div
              class="relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-primary-200"
            >
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p class="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <!-- Features dengan style lebih casual -->
              <div class="space-y-3 pt-6 border-t border-gray-100">
                <p
                  class="text-sm font-semibold text-primary-600 uppercase tracking-wide"
                >
                  Yang Dipelajari:
                </p>
                {#each project.features as feature}
                  <div class="flex items-start gap-3">
                    <span class="text-primary-500 mt-1 shrink-0">→</span>
                    <span class="text-gray-700">{feature}</span>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<!-- CTA Section -->
<section class="py-16 lg:py-24 bg-primary-600">
  <div class="container mx-auto px-6 lg:px-12">
    <ScrollReveal animation="zoom">
      <div class="text-center max-w-3xl mx-auto text-white">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          Siap Mulai Belajar Scratch?
        </h2>
        <p class="text-xl text-white/90 mb-8">
          Bergabunglah dengan ratusan anak yang sudah belajar coding sambil
          bermain bersama Scratch!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20daftar%20kelas%20Arduino"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center gap-2"
          >
            <span>Daftar Kelas Gratis</span>
          </a>
          <a
            href="/materi/web-mobile-app"
            class="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 border border-white/30"
          >
            Lihat Materi Lainnya
          </a>
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>

<style>
  @keyframes accordion-down {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-accordion-down {
    animation: accordion-down 0.3s ease-out;
  }
</style>
