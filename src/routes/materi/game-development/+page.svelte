<script>
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
  import Footer from '$lib/components/ui/Footer.svelte';
  import { Gamepad2, Blocks, Zap, Trophy } from 'lucide-svelte';
  import robloxImg from '$lib/assets/images/materi/robloxHD.png';
  import gamedevImg from '$lib/assets/images/materi/c3.svg';
  import gamedev2Img from '$lib/assets/images/materi/unityHD.png';

  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Daftar Materi', href: '/#materials' },
    { label: 'Game Development', href: null },
  ];

  const programs = [
    {
      level: 'Sekolah Dasar',   
      title: 'Roblox Studio – Buat Game 3D Impianmu',
      description:
        'Roblox Studio adalah platform game development 3D yang sempurna untuk anak-anak yang ingin membuat game mereka sendiri. Dengan sistem building yang mudah seperti LEGO digital, siswa dapat menciptakan game 3D seperti obby, tycoon, atau adventure yang bisa dimainkan jutaan orang.',
      extendedDesc:
        'Melalui Roblox Studio, anak-anak belajar konsep dasar game development seperti 3D environment, scripting Lua, game mechanics, dan monetisasi. Mereka juga mengembangkan kreativitas dalam menciptakan world game dan kemampuan problem-solving saat membuat mekanisme permainan yang fun to play. Yang paling menarik, game mereka bisa langsung dimainkan oleh 70+ juta pemain Roblox aktif di seluruh dunia!',
      bgColor: 'from-red-400 to-primary-500',
      image: robloxImg,
      ageRange: '8-12 Tahun',
      features: [
        'Buat game 3D yang dimainkan jutaan orang',
        'Building drag & drop seperti LEGO',
        'Scripting Lua untuk game mechanics',
        'Publish langsung ke platform Roblox',
      ],
      detailLink: '/materi/detail/roblox-studio',
    },
    {
      level: 'Sekolah Menengah Pertama',
      title: 'Construct 3 - Buat Game Tanpa Coding Kompleks',
      description:
        'Construct 3 adalah game engine berbasis visual yang memungkinkan siswa SMP membuat game 2D berkualitas tinggi tanpa perlu menulis kode. Dengan event system yang intuitif, siswa bisa membuat berbagai jenis game dari platformer, puzzle, hingga action game.',
      extendedDesc:
        'Platform ini mengajarkan konsep penting dalam game development seperti physics, collision detection, scoring system, dan level design. Siswa juga belajar tentang game mechanics, player control, dan bagaimana membuat game yang fun to play. Game yang dibuat bisa langsung dimainkan di browser atau diekspor ke Android dan iOS.',
      bgColor: 'bg-primary-500',
      image: gamedevImg,
      ageRange: '13-15 Tahun',
      features: [
        'Game engine 2D profesional',
        'Event system tanpa coding',
        'Physics & collision detection',
        'Export ke Web, Android & iOS',
      ],
      detailLink: '/materi/detail/construct3',
    },
    {
      level: 'Sekolah Menengah Atas',
      title: 'Unity - Buat Game 3D Profesional Seperti Developer',
      description:
        'Unity adalah game engine paling populer di dunia yang digunakan oleh developer profesional untuk membuat game AAA, mobile games, dan VR/AR experiences. Siswa SMA akan belajar membuat game 3D dengan kualitas komersial menggunakan visual scripting atau C#.',
      extendedDesc:
        'Belajar Unity memberikan pengalaman nyata sebagai game developer. Siswa tidak hanya membuat game, tapi juga memahami game design, 3D modeling basics, animation, lighting, dan bagaimana menerbitkan game ke platform seperti Steam, Google Play, atau App Store. Ini adalah investasi skill yang sangat berharga untuk karir di industri game.',
      bgColor: 'bg-primary-500',
      image: gamedev2Img,
      ageRange: '16-18 Tahun',
      features: [
        'Game engine industri profesional',
        'Buat game 2D & 3D berkualitas AAA',
        'Visual scripting atau C# programming',
        'Publish ke semua platform gaming',
      ],
      detailLink: '/materi/detail/unity',
    },
  ];
</script>

<svelte:head>
  <title>Belajar Membuat Game - Kodeflow Academy</title>
  <meta
    name="description"
    content="Belajar membuat game 2D dan 3D dengan Roblox Studio, Construct 3, dan Unity. Dari game sederhana hingga game profesional berkualitas komersial."
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
            Belajar Membuat Game dari Nol Hingga Pro
          </h1>
          <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Wujudkan impianmu menjadi <span class="text-secondary-500 font-bold"
              >game developer</span
            >
            dengan membuat game 2D & 3D yang seru, dari konsep hingga publikasi,
            <span class="text-secondary-500 font-bold"
              >sesuai dengan level kemampuanmu</span
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
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20Game%20Development"
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
                  <Gamepad2 class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">2D & 3D Games</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Blocks class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Visual Coding</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Trophy class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Game Design</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Zap class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Publish Ready</p>
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
