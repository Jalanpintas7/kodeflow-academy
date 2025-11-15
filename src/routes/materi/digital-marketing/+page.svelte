<script>
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
  import Footer from '$lib/components/ui/Footer.svelte';
  import { TrendingUp, Share2, BarChart3, Megaphone } from 'lucide-svelte';
  import instagramContentCreatorImg from '$lib/assets/images/materi/igHD.png';
  import tiktokContentCreatorImg from '$lib/assets/images/materi/ttHD.png';
  import facebookMarketingProImg from '$lib/assets/images/materi/fbHD.png';

  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Daftar Materi', href: '/#materials' },
    { label: 'Digital Marketing', href: null },
  ];

  const programs = [
    {
      level: 'Sekolah Dasar',
      title: 'Instagram Content Creator - Bikin Konten IG yang Hits!',
      description:
        'Yuk jadi Instagram Content Creator cilik! Belajar bikin konten Instagram yang keren mulai dari foto, reels, sampai stories yang menarik. Kamu akan belajar cara foto yang bagus, edit pakai filter yang kece, dan bikin caption yang lucu dan relate!',
      extendedDesc:
        'Di kelas ini, kamu akan belajar cara memilih warna dan tema yang cocok untuk feed Instagram, bikin reels yang viral, dan berinteraksi dengan followers. Kamu juga bisa bikin konten yang menarik perhatian teman-teman dan keluarga. Siap jadi influencer cilik?',
      bgColor: 'bg-primary-500',
      image: instagramContentCreatorImg,
      ageRange: '6-12 Tahun',
      features: [
        'Bikin foto & reels Instagram yang keren',
        'Edit konten dengan filter & effects',
        'Belajar nulis caption yang menarik',
        'Tips & trik buat feed yang aesthetic',
      ],
      detailLink: '/materi/detail/instagram-creator',
    },
    {
      level: 'Sekolah Menengah Pertama',
      title: 'TikTok Content Creator - Bikin Konten yang Viral!',
      description:
        'Pengen video TikTok kamu masuk FYP dan viral? Di sini kamu akan belajar cara bikin konten TikTok yang engaging dan banyak ditonton! Dari ide konten kreatif, editing video yang smooth, sampai strategi pakai musik dan hashtag yang tepat.',
      extendedDesc:
        'Kamu akan belajar trik-trik rahasia algoritma TikTok, timing posting yang tepat, cara bikin transisi yang keren, dan strategi kolaborasi dengan creator lain. Skill ini berguna banget untuk membangun personal brand atau bahkan mulai bisnis online dari sekarang!',
      bgColor: 'bg-primary-500',
      image: tiktokContentCreatorImg,
      ageRange: '13-15 Tahun',
      features: [
        'Strategi bikin konten yang viral di FYP',
        'Editing video & transisi yang smooth',
        'Pakai musik & hashtag yang trending',
        'Analisis performa & engagement konten',
      ],
      detailLink: '/materi/detail/tiktok-creator',
    },
    {
      level: 'Sekolah Menengah Atas',
      title: 'Facebook Marketing Pro - Kuasai Iklan & Bisnis Online!',
      description:
        'Siap jadi Facebook Marketing Professional? Program lengkap untuk kamu yang mau jualan online atau jadi digital marketer! Belajar Facebook Ads dari dasar sampai advanced, Facebook Page Management, Facebook Marketplace, dan strategi marketing yang terbukti menghasilkan sales!',
      extendedDesc:
        'Kamu akan belajar cara bikin iklan Facebook yang ROI-nya tinggi, targeting audience yang tepat, optimasi budget iklan, analisis data dengan Facebook Pixel & Analytics, dan strategi retargeting. Skill ini bisa langsung kamu pakai untuk jualan produk sendiri atau jadi freelance Facebook Ads specialist!',
      bgColor: 'bg-primary-500',
      image: facebookMarketingProImg,
      ageRange: '16-18 Tahun',
      features: [
        'Master Facebook Ads & targeting',
        'Facebook Page & Marketplace strategy',
        'Facebook Pixel & Analytics mastery',
        'Strategi sales funnel & retargeting',
      ],
      detailLink: '/materi/detail/facebook-creator',
    },
  ];
</script>

<svelte:head>
  <title>Belajar Digital Marketing - Kodeflow Academy</title>
  <meta
    name="description"
    content="Belajar digital marketing dari dasar hingga profesional. Dari membuat konten kreatif, mengelola media sosial, hingga menguasai SEO, Ads, dan Analytics."
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
            Yuk, Belajar Digital Marketing yang Seru!
          </h1>
          <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Mulai dari bikin <span class="text-secondary-500 font-bold"
              >konten kreatif</span
            >, kelola media sosial, sampai jago
            <span class="text-secondary-500 font-bold"
              >SEO, Iklan & Analytics</span
            >
            yang banyak dicari perusahaan!
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
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20Digital%20Marketing"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl items-center gap-2"
          >
            <span>Ikutan Seminar Gratis Yuk!</span>
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
                  <TrendingUp class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">SEO & Growth</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Share2 class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Social Media</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Megaphone class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Kampanye Iklan</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <BarChart3 class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Analytics</p>
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
