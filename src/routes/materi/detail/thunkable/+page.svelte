<script>
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
  import { Smartphone, Camera, MapPin, Database } from 'lucide-svelte';
  import thunkableImg from '$lib/assets/images/materi/thunkableHD.png';

  // Accordion state
  let openAccordion = 0; // Default: first item open

  function toggleAccordion(index) {
    openAccordion = openAccordion === index ? -1 : index;
  }

  const breadcrumbItems = [{ label: 'Beranda', href: '/' },
    { label: 'Daftar Materi', href: '/#materials' },
    { label: 'Web & Mobile App', href: '/materi/web-mobile-app' },
    { label: 'Thunkable', href: null },];

  const features = [{
      icon: Smartphone,
      title: 'Aplikasi Android & iOS',
      description:
        'Buat aplikasi yang bisa jalan di smartphone Android dan iOS.',
      color: 'bg-primary-500',
    },
    {
      icon: Camera,
      title: 'Integrasi Fitur Device',
      description: 'Akses kamera, galeri foto, dan sensor smartphone.',
      color: 'bg-primary-500',
    },
    {
      icon: MapPin,
      title: 'GPS & Location',
      description: 'Gunakan fitur lokasi untuk aplikasi berbasis peta.',
      color: 'bg-primary-500',
    },
    {
      icon: Database,
      title: 'Database & API',
      description:
        'Simpan data dan koneksi ke internet untuk aplikasi dinamis.',
      color: 'bg-primary-500',
    },];

  const projects = [{
      title: 'Kalkulator Pintar',
      description:
        'Aplikasi kalkulator dengan tampilan menarik dan fitur lengkap.',
      features: [
        'Input number',
        'Operasi matematika',
        'Clear & delete',
        'History perhitungan',
      ],
    },
    {
      title: 'Aplikasi Kuis Interaktif',
      description: 'Quiz app dengan scoring system dan timer.',
      features: [
        'Multiple choice',
        'Score tracking',
        'Timer countdown',
        'Hasil & feedback',
      ],
    },
    {
      title: 'Katalog Digital',
      description: 'Katalog produk dengan gambar, deskripsi, dan harga.',
      features: [
        'List view',
        'Detail page',
        'Search function',
        'Favorit items',
      ],
    },
    {
      title: 'Aplikasi Catatan',
      description: 'Note-taking app dengan fitur save, edit, dan delete.',
      features: [
        'Create notes',
        'Edit & delete',
        'Local storage',
        'Category tags',
      ],
    },];

  const willLearn = ['Konsep logika pemrograman dan UI/UX design',
    'Membuat aplikasi Android & iOS tanpa coding',
    'Integrasi kamera, GPS, dan database',
    'Cara menyusun blok visual seperti puzzle',];

  const willGet = ['Video Materi Lengkap',
    'Modul Praktek Terstruktur',
    'Bahan Latihan & Studi Kasus',
    'Sertifikat Kelulusan',
    'Kelas Online/Offline',
    'Akses ke Komunitas Belajar',];

  const curriculum = [{
      section: 'Pengenalan Thunkable',
      description: 'Memahami dasar-dasar Thunkable dan interface builder',
      topics: [
        'Pengenalan platform Thunkable',
        'Membuat akun dan project pertama',
        'Mengenal komponen dasar (Button, Label, Image)',
        'Mengatur layout dan tampilan',
        'Memahami properties dan styling',
        'Preview aplikasi di smartphone',
      ],
    },
    {
      section: 'Logika & Interaksi',
      description: 'Belajar membuat aplikasi yang interaktif',
      topics: [
        'Event handling (tap, click, input)',
        'Variables dan data storage',
        'Conditional logic (if-else)',
        'Looping dan repetisi',
        'Navigator antar screen',
        'Project: Aplikasi kalkulator sederhana',
      ],
    },
    {
      section: 'Database & API',
      description: 'Menyimpan data dan koneksi ke internet',
      topics: [
        'Local storage untuk simpan data',
        'List dan data structures',
        'Koneksi ke database cloud',
        'Fetch data dari API',
        'Create, Read, Update, Delete (CRUD)',
        'Project: Aplikasi katalog dengan database',
      ],
    },
    {
      section: 'Fitur Device & Sensor',
      description: 'Menggunakan hardware smartphone',
      topics: [
        'Akses kamera dan galeri',
        'Location & GPS tracking',
        'Accelerometer dan sensor',
        'Notification push',
        'Share content ke social media',
        'Project: Aplikasi photo diary dengan location',
      ],
    },
    {
      section: 'UI/UX Design',
      description: 'Membuat interface yang menarik',
      topics: [
        'Prinsip desain aplikasi mobile',
        'Color scheme dan typography',
        'Icons dan visual elements',
        'Responsive layout',
        'Animations dan transitions',
        'Project: Redesign aplikasi dengan UI modern',
      ],
    },
    {
      section: 'Final Project',
      description: 'Buat aplikasi portfolio sendiri',
      topics: [
        'Brainstorming ide aplikasi',
        'Wireframe dan planning',
        'Development aplikasi lengkap',
        'Testing dan debugging',
        'Publishing ke Play Store/App Store (optional)',
        'Presentasi project',
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
            Belajar Membuat Aplikasi Mobile Dengan Thunkable
          </h1>
          <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Platform <span class="font-bold">drag & drop</span> untuk membuat aplikasi mobile iOS & Android. Buat app impianmu dengan cara yang mudah dan menyenangkan!
          </p>
        </ScrollReveal>

        <!-- CTA Button -->
        <ScrollReveal animation="fade-up" delay={200}>
          <a
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20Thunkable"
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
              src={thunkableImg}
              alt="Thunkable Platform"
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
              src={thunkableImg}
              alt="Thunkable Platform"
              class="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </ScrollReveal>

      <!-- Right - Content -->
      <ScrollReveal animation="fade-left" delay={200}>
        <div class="space-y-6">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">
            Kenapa Harus Thunkable?
          </h2>

          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Thunkable adalah platform <span class="font-bold text-primary-600">no-code visual programming</span> yang memudahkan siapa saja membuat aplikasi mobile dengan drag & drop blocks, seperti Scratch tapi untuk mobile apps!
            </p>
            <p>
              Cocok untuk <span class="font-bold text-primary-600">SD sampai SMA</span> karena interfacenya intuitif, ada template siap pakai, dan bisa langsung test di HP kamu sendiri.
            </p>
          </div>

          <a
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20jadwalkan%20seminar%20gratis%20Thunkable"
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
              href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20jadwalkan%20seminar%20gratis%20Thunkable"
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
          4 Aplikasi Keren yang Bakal Kamu Buat
        </h2>
        <p class="text-lg text-gray-600">
          Dari aplikasi sederhana sampai yang lebih kompleks, semua bikin sendiri!
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
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20daftar%20kelas%20Thunkable"
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
