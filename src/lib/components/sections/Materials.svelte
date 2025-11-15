<script>
  import { onDestroy } from 'svelte';
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import webDevImage from '$lib/assets/images/materi/appdev.png';
  import gameDevImage from '$lib/assets/images/materi/gamedev.png';
  import uiUxImage from '$lib/assets/images/materi/ux.png';
  import digitalMarketingImage from '$lib/assets/images/materi/digitalmarketing.png';
  import iotRoboticsImage from '$lib/assets/images/materi/scratch.png';
  import n8nAutomationImage from '$lib/assets/images/materi/thunkable.png';

  let currentIndex = 0;
  let isAutoPlaying = true;
  let autoPlayInterval;
  let touchStartX = 0;
  let touchEndX = 0;

  const materials = [
    {
      id: 1,
      title: 'Web & App Development',
      description:
        'Bangun aplikasi Web dan Mobile secara visual menggunakan platform modern seperti Scratch, Thunkable, dan FlutterFlow tanpa perlu menulis kode.',
      image: webDevImage,
      link: '/materi/web-mobile-app',
      colorClass: 'bg-primary-600',
      hoverColorClass: 'hover:bg-primary-700',
      bgColorClass: 'bg-primary-50',
      textColorClass: 'text-primary-600',
      ringColorClass: 'ring-primary-500',
    },
    {
      id: 2,
      title: 'Game Development',
      description:
        'Kembangkan game seru menggunakan Unity, Roblox Studio, dan game engine modern lainnya.',
      image: gameDevImage,
      link: '/materi/game-development',
      colorClass: 'bg-primary-600',
      hoverColorClass: 'hover:bg-primary-700',
      bgColorClass: 'bg-primary-50',
      textColorClass: 'text-primary-600',
      ringColorClass: 'ring-primary-500',
    },
    {
      id: 3,
      title: 'Desain UI/UX',
      description:
        'Pelajari prinsip desain interface dan user experience yang menarik menggunakan Figma dan Adobe XD.',
      image: uiUxImage,
      link: '/materi/design-ui-ux',
      colorClass: 'bg-primary-600',
      hoverColorClass: 'hover:bg-primary-700',
      bgColorClass: 'bg-primary-50',
      textColorClass: 'text-primary-600',
      ringColorClass: 'ring-primary-500',
    },
    {
      id: 4,
      title: 'Digital Marketing',
      description:
        'Kuasai strategi pemasaran digital, SEO, social media marketing, dan content strategy.',
      image: digitalMarketingImage,
      link: '/materi/digital-marketing',
      colorClass: 'bg-primary-600',
      hoverColorClass: 'hover:bg-primary-700',
      bgColorClass: 'bg-primary-50',
      textColorClass: 'text-primary-600',
      ringColorClass: 'ring-primary-500',
    },
    {
      id: 5,
      title: 'IoT dan Robotik',
      description:
        'Eksplorasi Internet of Things dan pembuatan robot dengan Arduino, Raspberry Pi, dan sensor modern.',
      image: iotRoboticsImage,
      link: '/materi/iot-robotik',
      colorClass: 'bg-primary-600',
      hoverColorClass: 'hover:bg-primary-700',
      bgColorClass: 'bg-primary-50',
      textColorClass: 'text-primary-600',
      ringColorClass: 'ring-primary-500',
    },
    {
      id: 6,
      title: 'AI & N8N Automation',
      description:
        'Otomatisasi workflow Anda dengan N8N, AI tools, dan platform no-code untuk produktivitas maksimal.',
      image: n8nAutomationImage,
      link: '/materi/automation',
      colorClass: 'bg-primary-600',
      hoverColorClass: 'hover:bg-primary-700',
      bgColorClass: 'bg-primary-50',
      textColorClass: 'text-primary-600',
      ringColorClass: 'ring-primary-500',
    },
  ];

  function nextSlide() {
    currentIndex = (currentIndex + 1) % materials.length;
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + materials.length) % materials.length;
  }

  function goToSlide(index) {
    currentIndex = index;
    stopAutoPlay();
  }

  function startAutoPlay() {
    if (autoPlayInterval) return;
    isAutoPlaying = true;
    autoPlayInterval = setInterval(nextSlide, 5000);
  }

  function stopAutoPlay() {
    isAutoPlaying = false;
    if (autoPlayInterval) {
      clearInterval(autoPlayInterval);
      autoPlayInterval = null;
    }
  }

  function toggleAutoPlay() {
    if (isAutoPlaying) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  }

  function handleTouchStart(e) {
    touchStartX = e.changedTouches[0].screenX;
  }

  function handleTouchEnd(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }

  function handleSwipe() {
    if (touchStartX - touchEndX > 50) {
      nextSlide();
    }
    if (touchEndX - touchStartX > 50) {
      prevSlide();
    }
  }

  $: if (typeof window !== 'undefined' && isAutoPlaying && !autoPlayInterval) {
    startAutoPlay();
  }

  onDestroy(() => {
    stopAutoPlay();
  });
</script>

<section
  id="materials"
  class="py-12 sm:py-16 lg:py-24 xl:py-32 bg-linear-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden"
>
  <!-- Background Decoration -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      class="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-500/5 rounded-full blur-3xl"
    ></div>
  </div>

  <div class="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
    <!-- Section Header -->
    <ScrollReveal animation="fade-up">
      <div class="text-center mb-10 sm:mb-12 lg:mb-16 xl:mb-20">
        <div class="inline-block mb-3 sm:mb-4">
          <span
            class="bg-primary-100 text-primary-600 px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold"
          >
            Pilihan Materi
          </span>
        </div>
        <h2
          class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-6 text-gray-900 px-4"
        >
          Materi Pembelajaran Kami
        </h2>
        <p
          class="text-gray-600 text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4"
        >
          Pilih kategori yang sesuai minatmu dan mulai belajar skill digital
          masa depan
        </p>
      </div>
    </ScrollReveal>

    <!-- Carousel Container -->
    <ScrollReveal animation="fade-up" delay={100}>
      <div class="relative max-w-7xl mx-auto">
        <!-- Main Carousel -->
        <div
          class="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl bg-white"
          role="region"
          aria-label="Materials carousel"
          on:mouseenter={stopAutoPlay}
          on:mouseleave={startAutoPlay}
          on:touchstart={handleTouchStart}
          on:touchend={handleTouchEnd}
        >
          <div
            class="relative h-[550px] sm:h-[600px] md:h-[550px] lg:h-[600px] xl:h-[650px]"
          >
            {#each materials as material, index}
              <div
                class="absolute inset-0 transition-all duration-700 ease-out"
                style="
                  opacity: {index === currentIndex ? 1 : 0};
                  transform: translateX({index === currentIndex
                  ? '0'
                  : index < currentIndex
                    ? '-100%'
                    : '100%'}) scale({index === currentIndex ? 1 : 0.95});
                  pointer-events: {index === currentIndex ? 'auto' : 'none'};
                "
              >
                <a href={material.link} class="block h-full group">
                  <div
                    class="grid grid-rows-[auto_1fr] md:grid-rows-1 md:grid-cols-2 h-full"
                  >
                    <!-- Image Side - First on mobile, Second on desktop -->
                    <div
                      class="relative overflow-hidden order-1 md:order-1 bg-white min-h-[180px] sm:min-h-[220px] md:min-h-0"
                    >
                      <img
                        src={material.image}
                        alt={material.title}
                        class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      />

                      <!-- Floating Badge -->
                      <div
                        class="absolute top-3 left-3 sm:top-4 sm:left-4 md:top-6 md:left-6 lg:top-8 lg:left-8"
                      >
                        <div
                          class="{material.colorClass} px-3 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full shadow-lg"
                        >
                          <span
                            class="text-xs sm:text-sm font-bold text-white"
                          >
                            Materi #{index + 1}
                          </span>
                        </div>
                      </div>
                    </div>

                    <!-- Content Side - Second on mobile, Second on desktop -->
                    <div
                      class="relative flex flex-col justify-center p-6 sm:p-8 lg:p-12 xl:p-16 {material.colorClass} order-2 md:order-2"
                    >
                      <div class="space-y-3 sm:space-y-4 lg:space-y-6">
                        <!-- Title -->
                        <h3
                          class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight transition-all duration-300 group-hover:translate-x-2"
                        >
                          {material.title}
                        </h3>

                        <!-- Description -->
                        <p
                          class="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed"
                        >
                          {material.description}
                        </p>

                        <!-- Stats -->
                        <div class="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
                          <div
                            class="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg transition-transform hover:scale-105"
                          >
                            <div
                              class="text-lg sm:text-xl lg:text-2xl font-bold text-white"
                            >
                              10+
                            </div>
                            <div class="text-xs text-white/80 mt-1">Modul</div>
                          </div>
                          <div
                            class="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg transition-transform hover:scale-105"
                          >
                            <div
                              class="text-lg sm:text-xl lg:text-2xl font-bold text-white"
                            >
                              5h
                            </div>
                            <div class="text-xs text-white/80 mt-1">Durasi</div>
                          </div>
                          <div
                            class="bg-white/20 backdrop-blur-sm p-3 sm:p-4 rounded-lg transition-transform hover:scale-105"
                          >
                            <div
                              class="text-lg sm:text-xl lg:text-2xl font-bold text-white"
                            >
                              4.8
                            </div>
                            <div class="text-xs text-white/80 mt-1">Rating</div>
                          </div>
                        </div>

                        <!-- CTA Button -->
                        <div class="pt-2">
                          <button
                            class="inline-flex items-center gap-2 sm:gap-3 bg-secondary-500 hover:bg-secondary-400 text-primary-600 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 group/btn hover:gap-4 sm:hover:gap-5 text-sm sm:text-base"
                          >
                            <span>Lihat Detail</span>
                            <svg
                              class="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover/btn:translate-x-1"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            {/each}
          </div>

          <!-- Navigation Arrows -->
          <button
            on:click={prevSlide}
            class="absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg sm:shadow-xl z-20 backdrop-blur-sm"
            aria-label="Previous slide"
          >
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2.5"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            on:click={nextSlide}
            class="absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 sm:p-3 lg:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-lg sm:shadow-xl z-20 backdrop-blur-sm"
            aria-label="Next slide"
          >
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6"
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
          </button>

          <!-- Progress Bar -->
          <div class="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
            <div
              class="h-full bg-primary-500 transition-all duration-300"
              style="width: {((currentIndex + 1) / materials.length) * 100}%"
            ></div>
          </div>
        </div>

        <!-- Controls Section -->
        <div
          class="flex flex-col sm:flex-row justify-between items-center mt-4 sm:mt-6 lg:mt-8 px-2 gap-4 sm:gap-0"
        >
          <!-- Dots Navigation -->
          <div class="flex items-center gap-2 order-2 sm:order-1">
            {#each materials as _, index}
              <button
                on:click={() => goToSlide(index)}
                class="transition-all duration-300 rounded-full {index ===
                currentIndex
                  ? 'bg-primary-500 w-6 sm:w-8 h-2'
                  : 'bg-gray-300 hover:bg-gray-400 w-2 h-2'}"
                aria-label="Go to slide {index + 1}"
              ></button>
            {/each}
          </div>

          <!-- Counter & Auto-play Control -->
          <div class="flex items-center gap-3 sm:gap-4 order-1 sm:order-2">
            <span class="text-gray-600 font-medium text-sm sm:text-base">
              {currentIndex + 1} / {materials.length}
            </span>
            <button
              on:click={toggleAutoPlay}
              class="bg-white hover:bg-gray-50 text-gray-800 p-2 sm:p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              aria-label={isAutoPlaying ? 'Pause autoplay' : 'Start autoplay'}
            >
              {#if isAutoPlaying}
                <svg
                  class="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                </svg>
              {:else}
                <svg
                  class="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              {/if}
            </button>
          </div>
        </div>

        <!-- Grid Preview (Hidden on Mobile, Show on Tablet+) -->
        <div
          class="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 lg:gap-4 mt-6 sm:mt-8 lg:mt-12"
        >
          {#each materials as material, index}
            <button
              on:click={() => goToSlide(index)}
              class="group relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 bg-white {index ===
              currentIndex
                ? 'ring-2 sm:ring-4 ring-primary-500 scale-105 shadow-xl sm:shadow-2xl'
                : 'opacity-60 hover:opacity-100 hover:scale-105'}"
            >
              <img
                src={material.image}
                alt={material.title}
                class="w-full h-full object-cover"
              />
              <!-- Overlay gradient untuk text readability -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
              <div class="absolute inset-0 flex items-end p-2 sm:p-3 lg:p-4">
                <span
                  class="text-white text-xs sm:text-sm font-bold line-clamp-2 leading-tight drop-shadow-lg"
                >
                  {material.title}
                </span>
              </div>
              {#if index === currentIndex}
                <div class="absolute top-1.5 right-1.5 sm:top-2 sm:right-2">
                  <div class="{material.colorClass} rounded-full p-0.5 sm:p-1">
                    <svg
                      class="w-3 h-3 sm:w-4 sm:h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                      />
                    </svg>
                  </div>
                </div>
              {/if}
            </button>
          {/each}
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>
