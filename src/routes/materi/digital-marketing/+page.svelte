<script>
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
  import Footer from '$lib/components/ui/Footer.svelte';
  import { TrendingUp, Share2, BarChart3, Megaphone } from 'lucide-svelte';
  import canvaImg from '$lib/assets/images/materi/ux.png';
  import metaAdsImg from '$lib/assets/images/materi/ux.png';
  import analyticsImg from '$lib/assets/images/materi/ux.png';

  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Daftar Materi', href: '/#materials' },
    { label: 'Digital Marketing', href: null },
  ];

  const programs = [
    {
      level: 'Sekolah Dasar',
      title: 'Canva for Social Media – Buat Konten Kreatif yang Menarik',
      description:
        'Canva adalah platform design yang sempurna untuk anak-anak yang ingin belajar membuat konten visual untuk media sosial. Dengan template yang mudah digunakan, siswa dapat membuat poster, infografis, kartu digital, dan konten menarik lainnya yang cocok untuk dibagikan di platform seperti Instagram, Facebook, atau TikTok.',
      extendedDesc:
        'Melalui Canva, anak-anak belajar dasar-dasar content creation, pemilihan warna, tipografi, dan storytelling visual. Mereka juga memahami bagaimana membuat konten yang menarik perhatian dan mudah dipahami, skill penting di era digital ini.',
      bgColor: 'from-pink-400 to-rose-500',
      image: canvaImg,
      ageRange: '6-12 Tahun',
      features: [
        'Buat konten media sosial',
        'Template siap pakai',
        'Belajar visual storytelling',
        'Design thinking untuk kids',
      ],
      detailLink: '/materi/detail/canva-marketing',
    },
    {
      level: 'Sekolah Menengah Pertama',
      title: 'Social Media Management – Kelola Akun Sosial Media Seperti Pro',
      description:
        'Belajar mengelola akun media sosial secara profesional dengan memahami strategi konten, engagement, dan analytics. Siswa SMP akan belajar cara membuat content calendar, menulis caption yang engaging, menggunakan hashtag dengan tepat, dan berinteraksi dengan audience.',
      extendedDesc:
        'Program ini mengajarkan siswa bagaimana membangun brand presence di platform seperti Instagram, TikTok, dan Facebook. Mereka belajar tentang algoritma media sosial, waktu posting yang tepat, dan cara menganalisis performa konten. Skill ini sangat berguna untuk membangun personal brand atau bahkan memulai bisnis online sejak dini.',
      bgColor: 'from-blue-400 to-cyan-500',
      image: metaAdsImg,
      ageRange: '13-15 Tahun',
      features: [
        'Content planning & scheduling',
        'Engagement strategies',
        'Hashtag & caption writing',
        'Basic analytics & insights',
      ],
      detailLink: '/materi/detail/social-media-management',
    },
    {
      level: 'Sekolah Menengah Atas',
      title: 'Digital Marketing Professional – Master SEO, Ads & Analytics',
      description:
        'Program komprehensif untuk siswa SMA yang ingin menguasai digital marketing secara profesional. Belajar SEO (Search Engine Optimization), Google Ads, Facebook & Instagram Ads, Email Marketing, Google Analytics, dan content marketing strategy. Siswa akan memahami full-funnel marketing dari awareness hingga conversion.',
      extendedDesc:
        'Siswa akan belajar bagaimana merencanakan dan menjalankan kampanye digital marketing yang efektif, mengoptimasi website untuk mesin pencari, membuat iklan yang menghasilkan ROI tinggi, dan menganalisis data untuk membuat keputusan marketing yang tepat. Program ini memberikan skill yang sangat dibutuhkan di industri dan bisa langsung digunakan untuk freelancing atau membangun bisnis sendiri.',
      bgColor: 'from-purple-400 to-indigo-600',
      image: analyticsImg,
      ageRange: '16-18 Tahun',
      features: [
        'SEO & Google Search optimization',
        'Google Ads & Meta Ads mastery',
        'Analytics & data-driven decisions',
        'Complete marketing funnel strategy',
      ],
      detailLink: '/materi/detail/digital-marketing-pro',
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
  class="relative overflow-hidden bg-linear-to-br from-primary-500 via-purple-600 to-primary-700 min-h-[70vh] flex items-center"
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
            Belajar Digital Marketing dari Nol Hingga Mahir
          </h1>
          <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Kuasai seni <span class="text-secondary-500 font-bold"
              >digital marketing</span
            >
            dari content creation, social media management, hingga
            <span class="text-secondary-500 font-bold"
              >SEO, Ads & Analytics</span
            >
            yang dibutuhkan industri.
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
            class="inline-flex bg-secondary-500 hover:bg-secondary-600 text-gray-900 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl items-center gap-2"
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
                  <p class="text-white font-semibold">Ad Campaigns</p>
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
          <div class={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
            <ScrollReveal
              animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div class="space-y-6">
                <div>
                  <div class="mb-3 flex flex-wrap gap-2 items-center">
                    <div
                      class="inline-block bg-linear-to-r {program.bgColor} text-white px-6 py-2 rounded-full font-semibold"
                    >
                      {program.level}
                    </div>
                    <span
                      class="bg-gray-100 text-gray-700 px-4 py-1 rounded-full text-sm font-semibold"
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
                        class="w-6 h-6 bg-linear-to-r {program.bgColor} rounded-full flex items-center justify-center shrink-0"
                      >
                        <span class="text-white text-xs">✓</span>
                      </div>
                      <span class="text-gray-700">{feature}</span>
                    </div>
                  {/each}
                </div>

                <a
                  href={program.detailLink}
                  class="inline-flex bg-linear-to-r {program.bgColor} text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Lihat Detail
                </a>
              </div>
            </ScrollReveal>
          </div>

          <!-- Image -->
          <div class={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
            <ScrollReveal
              animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}
              delay={200}
            >
              <div class="relative">
                <div
                  class="absolute inset-0 bg-linear-to-r {program.bgColor} rounded-3xl opacity-20 blur-2xl"
                ></div>
                <div
                  class="relative bg-linear-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-2xl"
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    class="w-full h-auto rounded-2xl"
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
