<script>
  import heroChild from '$lib/assets/images/hero/hero-child.png';
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import CountUp from '$lib/components/common/CountUp.svelte';
</script>

<section
  id="home"
  class="relative overflow-hidden bg-linear-to-br from-primary-500 via-primary-600 to-primary-700 min-h-screen m-5 rounded-3xl"
>
  <!-- Decorative Elements -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
    <!-- Top left wave -->
    <div class="absolute top-20 left-10 w-32 h-32 opacity-20 animate-float">
      <svg viewBox="0 0 100 100" class="w-full h-full text-white">
        <path
          d="M 0 50 Q 25 30, 50 50 T 100 50"
          stroke="currentColor"
          stroke-width="3"
          fill="none"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <!-- Bottom left wave -->
    <div
      class="absolute bottom-32 left-10 w-24 h-24 opacity-20 animate-float"
      style="animation-delay: 0.5s;"
    >
      <svg viewBox="0 0 100 100" class="w-full h-full text-white">
        <path
          d="M 0 50 Q 25 70, 50 50 T 100 50"
          stroke="currentColor"
          stroke-width="3"
          fill="none"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <!-- Top right wave -->
    <div
      class="absolute top-1/3 right-20 w-40 h-40 opacity-15 animate-float"
      style="animation-delay: 1s;"
    >
      <svg viewBox="0 0 100 100" class="w-full h-full text-white">
        <path
          d="M 0 50 Q 25 30, 50 50 T 100 50"
          stroke="currentColor"
          stroke-width="3"
          fill="none"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <!-- Bottom right accent wave -->
    <div
      class="absolute bottom-20 right-32 w-28 h-28 opacity-40 animate-float"
      style="animation-delay: 1.5s;"
    >
      <svg viewBox="0 0 100 100" class="w-full h-full text-accent-400">
        <path
          d="M 0 50 Q 25 70, 50 50 T 100 50"
          stroke="currentColor"
          stroke-width="3"
          fill="none"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <!-- Decorative circles -->
    <div
      class="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-3xl"
    ></div>
  </div>

  <!-- Main Content -->
  <div class="container mx-auto px-6 lg:px-12 py-16 lg:py-24 relative z-10">
    <div
      class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-12rem)]"
    >
      <!-- Left Content -->
      <div class="space-y-8 lg:space-y-10">
        <ScrollReveal animation="fade-up" delay={0}>
          <div class="space-y-6">
            <h1
              class="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight"
            >
              Kodeflow
              <span class="relative inline-block mt-2">
                <span class="relative z-10">Academy</span>
                <!-- Yellow circle underline -->
                <svg
                  class="absolute -left-4 -top-2 w-full h-full"
                  viewBox="0 0 300 100"
                  style="width: 110%; height: 110%;"
                >
                  <ellipse
                    cx="150"
                    cy="50"
                    rx="140"
                    ry="45"
                    fill="none"
                    stroke="var(--color-secondary-500)"
                    stroke-width="4"
                    class="animate-draw"
                  />
                </svg>
              </span>
            </h1>

            <p
              class="text-white/90 text-lg lg:text-xl max-w-lg leading-relaxed"
            >
              Belajar Skill Digital, Bersiap Menyambut Era Baru. Tingkatkan
              kompetensi, kuasai teknologi, dan raih peluang di dunia kerja
              modern.
            </p>
          </div>
        </ScrollReveal>

        <!-- CTA Button -->
        <ScrollReveal animation="fade-up" delay={200}>
          <a
            href="#about"
            class="inline-flex items-center gap-3 group cursor-pointer"
          >
            <span
              class="bg-secondary-500 hover:bg-secondary-600 text-gray-900 font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              Pelajari Lebih Lanjut
            </span>
            <div
              class="w-14 h-14 bg-secondary-500 hover:bg-secondary-600 rounded-full flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110"
            >
              <svg
                class="w-6 h-6 text-gray-900 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2.5"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </a>
        </ScrollReveal>

        <!-- Additional Info Pills -->
        <ScrollReveal animation="fade-up" delay={400}>
          <div class="flex flex-wrap gap-3 pt-4">
            <div
              class="bg-white/15 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full hover:bg-white/25 transition-all duration-300"
            >
              <span
                class="text-white text-sm font-semibold flex items-center gap-2"
              >
                <span class="w-1.5 h-1.5 bg-secondary-400 rounded-full"></span>
                Sertifikat Resmi
              </span>
            </div>
            <div
              class="bg-white/15 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full hover:bg-white/25 transition-all duration-300"
            >
              <span
                class="text-white text-sm font-semibold flex items-center gap-2"
              >
                <span class="w-1.5 h-1.5 bg-secondary-400 rounded-full"></span>
                Mentor Berpengalaman
              </span>
            </div>
            <div
              class="bg-white/15 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full hover:bg-white/25 transition-all duration-300"
            >
              <span
                class="text-white text-sm font-semibold flex items-center gap-2"
              >
                <span class="w-1.5 h-1.5 bg-secondary-400 rounded-full"></span>
                Praktik Langsung
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <!-- Right Content - Image with Stats -->
      <ScrollReveal animation="fade-left" delay={300}>
        <div class="relative z-10">
          <!-- Green organic shape background -->
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-accent-400 opacity-90 -z-10 animate-blob"
            style="border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;"
          >
            <!-- Pattern overlay -->
            <div class="absolute inset-0 opacity-20">
              <svg width="100%" height="100%">
                <defs>
                  <pattern
                    id="dots"
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle cx="5" cy="5" r="2" fill="white" opacity="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
              </svg>
            </div>
          </div>

          <!-- Main image -->
          <div class="relative mt-12 lg:mt-0">
            <div class="relative w-full max-w-md mx-auto">
              <img
                src={heroChild}
                alt="Happy student learning with Kodeflow Academy"
                class="w-full h-auto object-cover"
              />
            </div>
          </div>

          <!-- Stats Card -->
          <ScrollReveal animation="zoom" delay={600}>
            <div
              class="absolute -bottom-8 left-4 right-4 lg:-bottom-16 lg:left-auto lg:right-0 bg-white/95 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-2xl max-w-sm z-20 border border-white/50 hover:shadow-3xl transition-all duration-300 hover:scale-105 mx-auto lg:mx-0"
            >
              <!-- Main Stat -->
              <div class="text-center mb-4 lg:mb-6">
                <div class="flex items-baseline justify-center gap-1 mb-2">
                  <h3
                    class="text-5xl lg:text-6xl xl:text-7xl font-bold bg-linear-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent"
                  >
                    <CountUp target={489} duration={2500} />
                  </h3>
                  <span class="text-3xl lg:text-4xl font-bold text-primary-600">+</span>
                </div>
                <p class="text-gray-600 font-medium text-sm">
                  Siswa Telah Bergabung
                </p>
              </div>

              <!-- Divider -->
              <div
                class="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent mb-4 lg:mb-6"
              ></div>

              <!-- Info Stats Grid -->
              <div class="grid grid-cols-2 gap-3 lg:gap-4">
                <div class="text-center">
                  <div class="text-2xl lg:text-3xl font-bold text-primary-600">15+</div>
                  <div class="text-xs text-gray-600 mt-1">Program</div>
                </div>
                <div class="text-center">
                  <div class="text-2xl lg:text-3xl font-bold text-secondary-600">4.9</div>
                  <div class="text-xs text-gray-600 mt-1">Rating</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>

<style>
  /* Floating animation */
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .animate-float {
    animation: float 3s ease-in-out infinite;
  }

  /* Blob morphing animation */
  @keyframes blob {
    0%,
    100% {
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
    }
    25% {
      border-radius: 40% 60% 50% 50% / 60% 50% 50% 40%;
    }
    50% {
      border-radius: 50% 50% 40% 60% / 50% 60% 40% 50%;
    }
    75% {
      border-radius: 60% 40% 50% 50% / 50% 50% 60% 40%;
    }
  }

  .animate-blob {
    animation: blob 8s ease-in-out infinite;
  }

  /* Draw animation for ellipse */
  @keyframes draw {
    from {
      stroke-dasharray: 1000;
      stroke-dashoffset: 1000;
    }
    to {
      stroke-dasharray: 1000;
      stroke-dashoffset: 0;
    }
  }

  .animate-draw {
    animation: draw 2s ease-in-out forwards;
    animation-delay: 0.5s;
  }
</style>
