<script>
  import heroChild from '$lib/assets/images/hero/hero-child.png';
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import CountUp from '$lib/components/common/CountUp.svelte';
</script>

<section
  id="home"
  class="relative overflow-hidden bg-primary-500 min-h-screen m-5 rounded-3xl"
>
  <!-- Decorative wavy lines -->
  <div class="absolute top-20 left-0 w-32 h-32">
    <svg viewBox="0 0 100 100" class="w-full h-full text-white opacity-40">
      <path
        d="M 0 50 Q 25 30, 50 50 T 100 50"
        stroke="currentColor"
        stroke-width="3"
        fill="none"
      />
    </svg>
  </div>

  <div class="absolute bottom-32 left-10 w-24 h-24">
    <svg viewBox="0 0 100 100" class="w-full h-full text-white opacity-40">
      <path
        d="M 0 50 Q 25 70, 50 50 T 100 50"
        stroke="currentColor"
        stroke-width="3"
        fill="none"
      />
    </svg>
  </div>

  <div class="absolute top-1/3 right-20 w-40 h-40">
    <svg viewBox="0 0 100 100" class="w-full h-full text-white opacity-30">
      <path
        d="M 0 50 Q 25 30, 50 50 T 100 50"
        stroke="currentColor"
        stroke-width="3"
        fill="none"
      />
    </svg>
  </div>

  <div class="absolute bottom-20 right-32 w-28 h-28">
    <svg viewBox="0 0 100 100" class="w-full h-full text-accent-400 opacity-50">
      <path
        d="M 0 50 Q 25 70, 50 50 T 100 50"
        stroke="currentColor"
        stroke-width="3"
        fill="none"
      />
    </svg>
  </div>

  <!-- Main content -->
  <div class="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <!-- Left content -->
      <div class="space-y-8 z-10">
        <ScrollReveal animation="fade-up" delay={0}>
          <div class="space-y-4">
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
                  />
                </svg>
              </span>
            </h1>

            <p class="text-white text-lg lg:text-xl max-w-md leading-relaxed">
              Belajar Skill Digital, Bersiap Menyambut Era Baru. Tingkatkan
              kompetensi, kuasai teknologi, dan raih peluang di dunia kerja
              modern.
            </p>
          </div>
        </ScrollReveal>

        <!-- CTA Button -->
        <ScrollReveal animation="fade-up" delay={200}>
          <div class="flex items-center group">
            <button
              class="bg-secondary-500 hover:bg-secondary-500 text-black font-semibold px-8 py-4 rounded-full shadow-lg"
            >
              Read more
            </button>
            <div
              class="w-12 h-12 bg-secondary-500 hover:bg-secondary-500 rounded-full flex items-center justify-center cursor-pointer shadow-lg"
            >
              <svg
                class="w-6 h-6 text-black transition-transform duration-300 group-hover:rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <!-- Right content - Image with stats -->
      <ScrollReveal animation="fade-left" delay={200}>
        <div class="relative z-10">
          <!-- Green organic shape background -->
          <div
            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square bg-accent-400 opacity-90 -z-10 rounded-full"
            style="border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;"
          ></div>

          <!-- Main image -->
          <div class="relative mt-12 lg:mt-0">
            <div class="relative w-full max-w-md mx-auto">
              <img
                src={heroChild}
                alt="Happy student with headphones"
                class="w-full h-auto object-cover"
              />
            </div>
          </div>

          <!-- Stats card -->
          <ScrollReveal animation="zoom" delay={600}>
            <div
              class="absolute bottom-10 right-0 lg:right-0 bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-2xl max-w-xs z-20"
            >
              <div class="flex items-center gap-3 mb-3">
                <h3 class="text-5xl font-bold text-gray-800">
                  <CountUp target={489} duration={2500} />
                </h3>
                <span class="text-3xl font-light text-gray-600">+</span>
                <div
                  class="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              <p class="text-gray-600 text-sm mb-4">
                More than 489 students have been trained at our school.
              </p>
              <!-- Avatar group -->
              <div class="flex -space-x-3">
                <div
                  class="w-12 h-12 rounded-full bg-linear-to-br from-yellow-300 to-yellow-500 border-4 border-white"
                ></div>
                <div
                  class="w-12 h-12 rounded-full bg-linear-to-br from-orange-300 to-orange-500 border-4 border-white"
                ></div>
                <div
                  class="w-12 h-12 rounded-full bg-linear-to-br from-pink-300 to-pink-500 border-4 border-white"
                ></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>

<style>
  /* Custom animations */
  @keyframes float {
    0%,
    100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }
</style>
