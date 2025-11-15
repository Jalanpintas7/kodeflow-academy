<script>
  // Teaching Method Section Component with Bento Grid
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';

  const methods = [
    {
      id: 1,
      title: 'Project-Based Learning',
      description:
        'Setiap materi dirancang untuk learning by doing, dimana anak-anak langsung praktik membuat project nyata.',
      icon: '🎯',
      bgColor: 'bg-purple-200',
      textColor: 'text-purple-900',
      span: 'col-span-1 row-span-2', // Tall card
      illustration: '/images/project-based.svg',
    },
    {
      id: 2,
      title: 'Level Bertahap Sesuai Usia',
      description:
        'Sistem pembelajaran dari konsep dasar hingga lanjutan, disesuaikan dengan perkembangan kognitif anak.',
      icon: '📊',
      bgColor: 'bg-yellow-200',
      textColor: 'text-yellow-900',
      span: 'col-span-1 row-span-1', // Regular card
      illustration: '/images/level-based.svg',
    },
    {
      id: 3,
      title: 'Kurikulum Fleksibel & Terstruktur',
      description:
        'Modul belajar yang dapat disesuaikan dengan kebutuhan sekolah namun tetap mengikuti standar industri.',
      icon: '📋',
      bgColor: 'bg-pink-200',
      textColor: 'text-pink-900',
      span: 'col-span-1 row-span-1', // Regular card
      illustration: '/images/curriculum.svg',
    },
    {
      id: 4,
      title: 'Fun & Visual Tools',
      description:
        'Kami menggunakan platform pembelajaran interaktif dengan gamifikasi untuk meningkatkan engagement.',
      icon: '🎨',
      bgColor: 'bg-blue-200',
      textColor: 'text-blue-900',
      span: 'col-span-1 row-span-2', // Tall card
      illustration: '/images/visual-tools.svg',
    },
    {
      id: 5,
      title: 'Mentorship Personal',
      description:
        'Setiap siswa mendapat pendampingan dari mentor berpengalaman untuk memaksimalkan potensi.',
      icon: '👥',
      bgColor: 'bg-green-200',
      textColor: 'text-green-900',
      span: 'col-span-2 row-span-1', // Wide card
      illustration: '/images/mentorship.svg',
    },
  ];
</script>

<section
  id="about"
  class="py-16 lg:py-24 bg-linear-to-b from-purple-50 to-white"
>
  <div class="container mx-auto px-6 lg:px-12">
    <!-- Section Header -->
    <ScrollReveal animation="fade-up">
      <div class="text-center mb-12 lg:mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Bagaimana Kami Mengajar
          <span class="block text-purple-600">di Kodeflow.id</span>
        </h2>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
          Metode pembelajaran yang terbukti efektif untuk mengembangkan skill
          digital anak-anak
        </p>
      </div>
    </ScrollReveal>

    <!-- Bento Grid Layout -->
    <ScrollReveal animation="fade-up" delay={200}>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[240px] sm:auto-rows-[260px] md:auto-rows-[280px] gap-4 lg:gap-6"
      >
        <!-- Card 1: Project-Based Learning - Tall -->
        <div
          class="group relative bg-purple-200 rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl col-span-1 row-span-1 md:row-span-2"
        >
          <div class="relative z-10 h-full flex flex-col">
            <div class="mb-4">
              <h3 class="text-2xl lg:text-3xl font-bold text-purple-900 mb-3">
                Project-Based Learning
              </h3>
            </div>
            <p
              class="text-purple-800 text-sm lg:text-base leading-relaxed mb-6"
            >
              Setiap materi dirancang untuk learning by doing, dimana anak-anak
              langsung praktik membuat project nyata.
            </p>
            <!-- Illustration placeholder -->
            <div class="mt-auto flex items-end justify-center">
              <div
                class="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-purple-300/50 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-purple-600 opacity-40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <!-- Decorative elements -->
          <div
            class="absolute -right-8 -bottom-8 w-40 h-40 bg-purple-300 rounded-full opacity-30 blur-2xl"
          ></div>
        </div>

        <!-- Card 2: Level Bertahap - Regular -->
        <div
          class="group relative bg-yellow-200 rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl col-span-1 row-span-1"
        >
          <div class="relative z-10 h-full flex flex-col">
            <h3 class="text-xl lg:text-2xl font-bold text-yellow-900 mb-3">
              Level Bertahap Sesuai Usia
            </h3>
            <p class="text-yellow-800 text-sm leading-relaxed">
              Sistem pembelajaran dari konsep dasar hingga lanjutan, disesuaikan
              dengan perkembangan kognitif anak.
            </p>
          </div>
          <div
            class="absolute -right-4 bottom-2 w-20 h-20 bg-yellow-300 rounded-full opacity-40"
          ></div>
        </div>

        <!-- Card 3: Kurikulum Fleksibel - Regular -->
        <div
          class="group relative bg-pink-200 rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl col-span-1 row-span-1"
        >
          <div class="relative z-10 h-full flex flex-col">
            <h3 class="text-xl lg:text-2xl font-bold text-pink-900 mb-3">
              Kurikulum Fleksibel & Terstruktur
            </h3>
            <p class="text-pink-800 text-sm leading-relaxed">
              Modul belajar yang dapat disesuaikan dengan kebutuhan sekolah
              namun tetap mengikuti standar industri.
            </p>
          </div>
          <div
            class="absolute right-4 top-4 w-16 h-16 bg-pink-300 rounded-full opacity-30 blur-xl"
          ></div>
        </div>

        <!-- Card 4: Fun & Visual Tools - Tall -->
        <div
          class="group relative bg-blue-200 rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl col-span-1 row-span-1 md:row-span-2"
        >
          <div class="relative z-10 h-full flex flex-col">
            <div class="mb-4">
              <h3 class="text-2xl lg:text-3xl font-bold text-blue-900 mb-3">
                Fun & Visual Tools
              </h3>
            </div>
            <p class="text-blue-800 text-sm lg:text-base leading-relaxed mb-6">
              Kami menggunakan platform pembelajaran interaktif dengan
              gamifikasi untuk meningkatkan engagement.
            </p>
            <!-- Illustration placeholder -->
            <div class="mt-auto flex items-end justify-center">
              <div
                class="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-blue-300/50 rounded-2xl flex items-center justify-center transform rotate-6"
              >
                <svg
                  class="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-blue-600 opacity-40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            class="absolute -left-8 top-1/2 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-2xl"
          ></div>
        </div>

        <!-- Card 5: Mentorship - Wide -->
        <div
          class="group relative bg-green-200 rounded-3xl p-6 lg:p-8 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl col-span-1 md:col-span-2 lg:col-span-2 row-span-1"
        >
          <div
            class="relative z-10 h-full flex flex-col md:flex-row items-start md:items-center gap-6"
          >
            <div class="flex-1">
              <h3 class="text-xl lg:text-2xl font-bold text-green-900 mb-3">
                Mentorship Personal
              </h3>
              <p class="text-green-800 text-sm lg:text-base leading-relaxed">
                Setiap siswa mendapat pendampingan dari mentor berpengalaman
                untuk memaksimalkan potensi.
              </p>
            </div>
            <div class="hidden md:flex items-center justify-center">
              <div
                class="w-32 h-32 bg-green-300/50 rounded-full flex items-center justify-center"
              >
                <svg
                  class="w-20 h-20 text-green-600 opacity-40"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            class="absolute -right-8 -top-8 w-32 h-32 bg-green-300 rounded-full opacity-20 blur-2xl"
          ></div>
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>

<style>
  /* Smooth hover transitions */
  .group:hover {
    transform: translateY(-4px);
  }
</style>
