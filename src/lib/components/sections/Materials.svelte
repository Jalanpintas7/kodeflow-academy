<script>
  // Materials Section Component
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import webDevImage from '$lib/assets/images/materi/appdev.png';
  import gameDevImage from '$lib/assets/images/materi/gamedev.png';
  import mobileDevImage from '$lib/assets/images/materi/appdev.png';
  import uiUxImage from '$lib/assets/images/materi/ux.png';
  import digitalMarketingImage from '$lib/assets/images/materi/digitalmarketing.png';
  import iotRoboticsImage from '$lib/assets/images/materi/scratch.png';
  import n8nAutomationImage from '$lib/assets/images/materi/thunkable.png';

  const materials = [
    {
      id: 1,
      title: 'Web Development',
      description:
        'Bangun website modern dengan HTML, CSS, JavaScript, dan framework populer.',
      bgColor: 'bg-gray-200',
      image: webDevImage,
    },
    {
      id: 2,
      title: 'Game Development',
      description:
        'Kembangkan game seru menggunakan Unity, Roblox Studio, dan tools lainnya.',
      bgColor: 'bg-purple-200',
      image: gameDevImage,
    },
    {
      id: 3,
      title: 'Mobile Development',
      description:
        'Buat aplikasi mobile untuk Android dan iOS dengan Flutter dan React Native.',
      bgColor: 'bg-gray-200',
      image: mobileDevImage,
    },
    {
      id: 4,
      title: 'Desain UI/UX',
      description:
        'Pelajari prinsip desain interface dan user experience yang menarik.',
      bgColor: 'bg-purple-200',
      image: uiUxImage,
    },
    {
      id: 5,
      title: 'Digital Marketing',
      description:
        'Kuasai strategi pemasaran digital, SEO, dan social media marketing.',
      bgColor: 'bg-gray-200',
      image: digitalMarketingImage,
    },
    {
      id: 6,
      title: 'IoT dan Robotik',
      description:
        'Eksplorasi Internet of Things dan pembuatan robot dengan Arduino.',
      bgColor: 'bg-purple-200',
      image: iotRoboticsImage,
    },
    {
      id: 7,
      title: 'AI & N8N Automation',
      description:
        'Otomatisasi pekerjaan Anda dengan N8N, platform no-code yang memudahkan integrasi antar aplikasi.',
      bgColor: 'bg-purple-200',
      image: n8nAutomationImage,
    },
  ];
</script>

<section id="materials" class="py-16 lg:py-24 bg-white">
  <div class="container mx-auto px-6 lg:px-12">
    <!-- Section Header -->
    <ScrollReveal animation="fade-up">
      <div class="text-center mb-12 lg:mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Daftar Materi
        </h2>
        <p class="text-gray-600 text-lg lg:text-xl max-w-2xl mx-auto">
          Pilih materi yang sesuai minat dan mulai kembangkan skill digital Anda
        </p>
      </div>
    </ScrollReveal>

    <!-- Grid Layout -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      <!-- Card 1: Intro/Header Card -->
      <ScrollReveal animation="fade-up" delay={0}>
        <div
          class="bg-linear-to-br from-purple-50 to-white rounded-3xl p-8 lg:p-10 flex flex-col justify-center shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
        >
          <h3 class="text-3xl lg:text-4xl font-bold text-primary-500 mb-4">
            Daftar Materi
          </h3>
          <p class="text-gray-600 text-base lg:text-lg leading-relaxed">
            Kami menyediakan berbagai materi pembelajaran digital yang
            disesuaikan dengan kebutuhan industri terkini dan perkembangan
            teknologi.
          </p>
        </div>
      </ScrollReveal>

      <!-- Material Cards -->
      {#each materials as material, index}
        <ScrollReveal animation="fade-up" delay={(index + 1) * 100}>
          <a
            href={material.id === 1
              ? '/materi/web-mobile-app'
              : material.id === 2
                ? '/materi/game-development'
                : material.id === 3
                  ? '/materi/mobile-development'
                  : material.id === 4
                    ? '/materi/design-ui-ux'
                    : material.id == 5
                      ? '/materi/digital-marketing'
                      : material.id == 6
                        ? '/materi/iot-robotik'
                        : material.id == 7
                          ? '/materi/automation'
                          : '#materials'}
            class="group relative {material.bgColor} rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer h-full block"
          >
            <!-- Image Section -->
            <div class="relative aspect-4/5 overflow-hidden">
              <!-- Image -->
              <img
                src={material.image}
                alt={material.title}
                class="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <!-- Gradient Overlay -->
              <div
                class="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"
              ></div>

              <!-- Content Overlay -->
              <div class="absolute bottom-0 left-0 right-0 p-6 lg:p-7">
                <h4 class="text-xl lg:text-2xl font-bold text-white mb-2">
                  {material.title}
                </h4>
                <p class="text-white/90 text-sm lg:text-base leading-relaxed">
                  {material.description}
                </p>
              </div>
            </div>
          </a>
        </ScrollReveal>
      {/each}

      <!-- CTA Card -->
      <ScrollReveal animation="fade-up" delay={(materials.length + 1) * 100}>
        <div
          class="bg-linear-to-br from-purple-50 to-white rounded-3xl p-8 lg:p-10 flex flex-col justify-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] h-full"
        >
          <h3 class="text-3xl lg:text-4xl font-bold text-primary-500 mb-4">
            Pelajari Lebih Lanjut
          </h3>
          <p class="text-gray-800 text-base lg:text-lg leading-relaxed mb-6">
            Temukan lebih banyak tentang materi pembelajaran kami dan pendekatan
            unik dalam pengajaran.
          </p>
          <button
            class="group bg-secondary-500 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-3 w-full lg:w-auto"
          >
            <span class="text-base lg:text-lg">Lihat Detail</span>
            <svg
              class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
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
          </button>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>
