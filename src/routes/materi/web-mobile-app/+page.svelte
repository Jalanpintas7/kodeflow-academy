<script>
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
  import Footer from '$lib/components/ui/Footer.svelte';
  import { Smartphone, Monitor, Zap, Blocks } from 'lucide-svelte';
  import scratchImg from '$lib/assets/images/materi/scratchHD.png';
  import thunkableImg from '$lib/assets/images/materi/thunkableHD.png';
  import flutterflowImg from '$lib/assets/images/materi/flutterflowHD.jpeg';

  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Daftar Materi', href: '/#materials' },
    { label: 'Web & Mobile App Development', href: null },
  ];

  const programs = [
    {
      level: 'Sekolah Dasar',
      title: 'Scratch – Belajar Koding Sambil Bermain',
      description:
        'Platform coding visual yang dikembangkan oleh MIT ini dirancang khusus untuk anak-anak, menjadi pintu gerbang ideal menuju dunia pemrograman. Dengan tampilan yang penuh warna dan sistem blok yang mudah dipahami, anak-anak dapat membuat animasi, cerita interaktif, hingga game sederhana.',
      extendedDesc:
        'Melalui pengalaman belajar yang serasa bermain, siswa tidak hanya memahami dasar-dasar logika pemrograman, tetapi juga mengembangkan kreativitas, kemampuan berpikir kritis, dan pemecahan masalah secara natural dan menyenangkan.',
      bgColor: 'bg-primary-500',
      image: scratchImg,
      ageRange: '6-12 Tahun',
      features: [
        'Coding visual dengan drag & drop',
        'Buat animasi dan game sederhana',
        'Belajar logika pemrograman dasar',
        'Platform dikembangkan MIT',
      ],
      detailLink: '/materi/detail/scratch',
    },
    {
      level: 'Sekolah Menengah Pertama',
      title: 'Thunkable - Buat Aplikasi Mobile Tanpa Koding',
      description:
        'Thunkable adalah platform visual berbasis drag-and-drop yang memungkinkan siswa membuat aplikasi Android & iOS dengan cara yang menyenangkan dan intuitif. Cocok untuk pelajar SMP yang ingin menciptakan aplikasi tanpa harus menulis kode.',
      extendedDesc:
        'Dengan tampilan yang interaktif dan terhubung ke fitur-fitur nyata seperti kamera, GPS, dan database, siswa bisa belajar konsep logika pemrograman, desain UI/UX, dan alur kerja aplikasi sejak dini. Belajar membangun aplikasi seperti kalkulator, kuis, atau katalog digital hanya dengan menyusun blok visual—mirip seperti menyusun puzzle.',
      bgColor: 'bg-primary-500',
      image: thunkableImg,
      ageRange: '13-15 Tahun',
      features: [
        'Buat app Android & iOS',
        'Drag and drop interface',
        'Integrasi kamera, GPS, database',
        'Belajar UI/UX design',
      ],
      detailLink: '/materi/detail/thunkable',
    },
    {
      level: 'Sekolah Menengah Atas',
      title: 'FlutterFlow - Buat Aplikasi Multi Platform Profesional',
      description:
        'FlutterFlow adalah platform visual yang memungkinkan siswa SMA membangun aplikasi Web, Android dan iOS tanpa perlu menulis kode. Dengan tampilan drag-and-drop yang intuitif, siswa bisa merancang antarmuka, menambahkan fungsionalitas, serta mengintegrasikan database dan API dengan mudah.',
      extendedDesc:
        'Belajar FlutterFlow memberikan pengalaman nyata seperti membangun startup teknologi. Siswa tidak hanya memahami cara kerja aplikasi modern, tapi juga membangun portofolio digital yang bisa dibanggakan sejak bangku sekolah.',
      bgColor: 'bg-primary-500',
      image: flutterflowImg,
      ageRange: '16-18 Tahun',
      features: [
        'Aplikasi Web, Android & iOS',
        'Professional UI builder',
        'Integrasi API & Database',
        'Export ke production code',
      ],
      detailLink: '/materi/detail/flutterflow',
    },
  ];
</script>

<svelte:head>
  <title>Belajar Membuat Aplikasi Mobile dan Web - Kodeflow Academy</title>
  <meta
    name="description"
    content="Belajar membuat aplikasi multi-platform (Web, Android, iOS) dengan Scratch, Thunkable, dan FlutterFlow secara visual tanpa coding."
  />
</svelte:head>

<!-- Hero Section -->
<section
  class="relative overflow-hidden bg-linear-to-br from-primary-500 via-primary-600 to-primary-700 min-h-[70vh] flex items-center"
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
            Belajar Membuat Aplikasi Mobile dan Web
          </h1>
          <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Belajar membuat aplikasi <span class="text-secondary-500 font-bold"
              >multi-platform</span
            >
            (Web, Desktop, Android dan iOS) dalam satu file, secara visual
            <span class="text-secondary-500 font-bold"
              >tanpa harus menulis kode</span
            >.
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
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20Web%20%26%20Mobile%20App%20Development"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl items-center gap-2"
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
                  <Blocks class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Visual Builder</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Smartphone class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Multi Platform</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Monitor class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Web & Desktop</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Zap class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">No Coding</p>
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
          <div class={index % 2 === 0
              ? 'lg:order-1 order-2'
              : 'lg:order-2 order-2'}>
            <ScrollReveal
              animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div class="space-y-6">
                <div>
                  <div class="mb-3 flex flex-wrap gap-2 items-center">
                    <div
                      class="inline-block bg-primary-100 text-primary-600 px-6 py-2 rounded-full font-semibold"
                    >
                      {program.level}
                    </div>
                    <span
                      class="bg-secondary-100 text-secondary-700 px-4 py-1 rounded-full text-sm font-semibold"
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
                        class="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center shrink-0"
                      >
                        <svg
                          class="w-3.5 h-3.5 text-white"
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
                      <span class="text-gray-700">{feature}</span>
                    </div>
                  {/each}
                </div>

                <a
                  href={program.detailLink}
                  class="inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>Lihat Detail</span>
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>
          </div>

          <!-- Image -->
          <div class={index % 2 === 0
              ? 'lg:order-2 order-1'
              : 'lg:order-1 order-1'}>
            <ScrollReveal
              animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              delay={200}
            >
              <div class="relative">
                <div
                  class="absolute inset-0 bg-primary-500 rounded-3xl opacity-20 blur-2xl"
                ></div>
                <div
                  class="relative bg-primary-50 rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-primary-200"
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    class="w-full h-auto max-h-[300px] sm:max-h-[400px] lg:max-h-none object-contain rounded-2xl"
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
