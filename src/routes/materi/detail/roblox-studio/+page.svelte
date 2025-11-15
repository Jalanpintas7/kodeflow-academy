<script>
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
  import { Gamepad2, Box, Users, Coins } from 'lucide-svelte';
  import robloxImg from '$lib/assets/images/materi/robloxHD.png';

  // Accordion state
  let openAccordion = 0; // Default: first item open

  function toggleAccordion(index) {
    openAccordion = openAccordion === index ? -1 : index;
  }

  const breadcrumbItems = [{ label: 'Beranda', href: '/' },
    { label: 'Daftar Materi', href: '/#materials' },
    { label: 'Game Development', href: '/materi/game-development' },
    { label: 'Roblox Studio', href: null },];

  const features = [{
      icon: Gamepad2,
      title: 'Buat Game 3D',
      description: 'Ciptakan dunia 3D yang bisa dimainkan jutaan pemain.',
      color: 'bg-primary-500',
    },
    {
      icon: Box,
      title: 'Drag & Drop',
      description: 'Sistem building yang mudah seperti bermain LEGO.',
      color: 'bg-primary-500',
    },
    {
      icon: Users,
      title: 'Komunitas Global',
      description: 'Bagikan game ke 70+ juta pemain Roblox aktif.',
      color: 'bg-primary-500',
    },
    {
      icon: Coins,
      title: 'Monetisasi Game',
      description: 'Potensi menghasilkan Robux dari game yang kamu buat.',
      color: 'bg-primary-500',
    },];

  const projects = [{
      title: 'Obby (Obstacle Course)',
      description: 'Game parkour klasik dengan rintangan yang menantang.',
      features: [
        'Platform jumping',
        'Checkpoint system',
        'Timer & leaderboard',
        'Stage progression',
      ],
    },
    {
      title: 'Tycoon Game',
      description: 'Game simulasi bisnis dengan sistem upgrade otomatis.',
      features: [
        'Money generation',
        'Building purchase',
        'Upgrade system',
        'Save data',
      ],
    },
    {
      title: 'Adventure RPG',
      description: 'Game petualangan dengan quest dan combat sederhana.',
      features: [
        'Player inventory',
        'NPC dialog',
        'Quest system',
        'Basic combat',
      ],
    },
    {
      title: 'Racing Game',
      description: 'Game balapan dengan kendaraan dan track custom.',
      features: [
        'Vehicle physics',
        'Lap counter',
        'Speed boosts',
        'Multiplayer race',
      ],
    },];

  const willLearn = ['Dasar-dasar game design dan 3D environment',
    'Membuat obyek 3D dan terrain',
    'Scripting Lua untuk game mechanics',
    'Cara mempublikasikan game ke Roblox',];

  const willGet = ['Video Materi Lengkap',
    'Modul Praktek Terstruktur',
    'Bahan Latihan & Studi Kasus',
    'Sertifikat Kelulusan',
    'Kelas Online/Offline',
    'Akses ke Komunitas Belajar',];

  const curriculum = [{
      section: 'Pengenalan Roblox Studio',
      description: 'Memahami dasar-dasar Roblox Studio dan interface',
      topics: [
        'Pengenalan Roblox platform dan Studio',
        'Interface dan tools dasar',
        'Membuat dan manipulasi Parts (3D objects)',
        'Properties dan colors',
        'Terrain editor untuk landscape',
        'Project: Playground sederhana dengan slide dan obstacles',
      ],
    },
    {
      section: 'Building & Environment',
      description: 'Belajar membuat world dan environment 3D',
      topics: [
        'Advanced building techniques',
        'Lighting dan atmosphere',
        'Spawn location dan teams',
        'Models dan toolbox assets',
        'Unions dan grouping objects',
        'Project: Membuat rumah atau kastil dengan interior',
      ],
    },
    {
      section: 'Pengenalan Scripting Lua',
      description: 'Mulai belajar coding dengan Lua untuk game mechanics',
      topics: [
        'Pengenalan Lua dan script editor',
        'Variables, functions, dan events',
        'Player interaction (touch, click)',
        'Teleport dan respawn mechanics',
        'GUI basics untuk HUD',
        'Project: Obby game dengan checkpoint',
      ],
    },
    {
      section: 'Game Mechanics',
      description: 'Membuat mechanics yang membuat game menarik',
      topics: [
        'Leaderstats dan scoring system',
        'Collectibles dan inventory',
        'Timer dan countdown',
        'Damage dan health system',
        'Sound effects dan music',
        'Project: Collect coins game dengan timer',
      ],
    },
    {
      section: 'Advanced Features',
      description: 'Fitur lanjutan untuk game yang lebih kompleks',
      topics: [
        'DataStore untuk save progress',
        'Vehicle seats dan tools',
        'Animations dan character customization',
        'Shop system dengan Robux/in-game currency',
        'Team-based gameplay',
        'Project: Tycoon game sederhana',
      ],
    },
    {
      section: 'Final Project',
      description: 'Buat game lengkap dan publish ke Roblox',
      topics: [
        'Game design planning',
        'Combining semua yang dipelajari',
        'Testing dan debugging',
        'Optimisasi performance',
        'Publishing game ke Roblox',
        'Project: Game portfolio siap dimainkan publik',
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
            Belajar Game Development 3D Dengan Roblox Studio
          </h1>
          <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Platform game development 3D terpopuler dengan <span class="font-bold">70+ juta pemain</span> aktif. Buat game yang bisa dimainkan jutaan orang dan bahkan hasilkan uang dari kreativitasmu!
          </p>
        </ScrollReveal>

        <!-- CTA Button -->
        <ScrollReveal animation="fade-up" delay={200}>
          <a
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20Roblox Studio"
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
              src={robloxImg}
              alt="Roblox Studio Platform"
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
              src={robloxImg}
              alt="Roblox Studio Platform"
              class="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </ScrollReveal>

      <!-- Right - Content -->
      <ScrollReveal animation="fade-left" delay={200}>
        <div class="space-y-6">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">
            Kenapa Harus Roblox Studio?
          </h2>

          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Roblox Studio bukan hanya tools untuk membuat game, tetapi juga platform untuk <span class="font-bold text-primary-600">belajar programming, game design, dan entrepreneurship</span> secara bersamaan. Anak-anak bisa membuat game 3D yang dimainkan jutaan orang dan bahkan menghasilkan Robux yang bisa dikonversi ke uang nyata.
            </p>
            <p>
              Cocok untuk <span class="font-bold text-primary-600">kurikulum SMP & SMA</span> karena mengajarkan Lua programming, 3D design, logic, dan business thinking dalam satu platform yang fun dan engaging.
            </p>
          </div>

          <a
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20jadwalkan%20seminar%20gratis%20Roblox Studio"
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
              href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20jadwalkan%20seminar%20gratis%20Roblox Studio"
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
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20daftar%20kelas%20Roblox Studio"
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
