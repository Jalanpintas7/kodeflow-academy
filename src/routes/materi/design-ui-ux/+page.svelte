<script>
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
  import Footer from '$lib/components/ui/Footer.svelte';
  import { Palette, Layers, Sparkles, Eye } from 'lucide-svelte';
  import CanvaImg from '$lib/assets/images/materi/canvaHD.png';
  import MarvelImg from '$lib/assets/images/materi/marvelAppHD.png';
  import FigmaImg from '$lib/assets/images/materi/figmaHD.png';

  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Daftar Materi', href: '/#materials' },
    { label: 'UI/UX Design', href: null },
  ];

  const programs = [
    {
      level: 'Sekolah Dasar',
      title: 'Canva – Belajar Design Grafis dengan Mudah dan Menyenangkan',
      description:
        'Canva adalah platform design yang sangat mudah digunakan, sempurna untuk anak-anak yang ingin mulai belajar membuat design visual yang menarik. Dengan ribuan template dan elemen drag-and-drop, siswa dapat membuat poster, kartu ucapan, presentasi, dan design sederhana lainnya.',
      extendedDesc:
        'Melalui Canva, anak-anak belajar dasar-dasar design seperti pemilihan warna, tipografi, komposisi, dan layout. Mereka juga mengembangkan kreativitas visual dan kemampuan komunikasi melalui design, sambil memahami prinsip-prinsip design thinking sejak dini.',
      bgColor: 'bg-primary-500',
      image: CanvaImg,
      ageRange: '6-12 Tahun',
      features: [
        'Design tool yang user-friendly',
        'Ribuan template siap pakai',
        'Belajar dasar design grafis',
        'Kreativitas & visual thinking',
      ],
      detailLink: '/materi/detail/canva',
    },
    {
      level: 'Sekolah Menengah Pertama',
      title: 'Marvel App – Buat Prototype Aplikasi Interaktif dengan Mudah',
      description:
        'Marvel App adalah platform prototyping yang mudah digunakan, sempurna untuk siswa SMP yang ingin belajar membuat prototype aplikasi mobile dan web interaktif. Dengan fitur drag-and-drop yang intuitif, siswa dapat mengubah design statis menjadi prototype yang bisa diklik dan diuji.',
      extendedDesc:
        'Siswa akan belajar membuat wireframe, mockup, dan prototype interaktif dengan transisi dan animasi yang smooth. Marvel App mengajarkan konsep user flow, navigation, dan interaction design dengan cara yang menyenangkan. Skill ini sangat berguna untuk karir di bidang product design dan user experience.',
      bgColor: 'bg-primary-500',
      image: MarvelImg,
      ageRange: '13-15 Tahun',
      features: [
        'Prototyping mudah & intuitif',
        'Interactive prototype dengan animasi',
        'User flow & navigation design',
        'Design untuk mobile & web',
      ],
      detailLink: '/materi/detail/marvel-app',
    },
    {
      level: 'Sekolah Menengah Atas',
      title: 'Figma – Menjadi UI/UX Designer Profesional',
      description:
        'Figma adalah tool design UI/UX industry-standard yang digunakan oleh perusahaan teknologi terkemuka di dunia. Program ini untuk siswa SMA yang ingin menguasai seluruh aspek UI/UX Design secara profesional. Belajar dari research, user persona, user journey, wireframing, prototyping, hingga usability testing dan handoff ke developer.',
      extendedDesc:
        'Siswa akan belajar complete design process seperti di perusahaan teknologi: user research, information architecture, interaction design, visual design, micro-interactions, design system, dan collaboration dengan developer. Mereka juga membangun portfolio profesional yang bisa digunakan untuk apply pekerjaan atau kuliah di bidang design. Figma adalah skill yang wajib dikuasai untuk karir sebagai Product Designer.',
      bgColor: 'bg-primary-500',
      image: FigmaImg,
      ageRange: '16-18 Tahun',
      features: [
        'Complete UI/UX design process',
        'User research & testing',
        'Advanced prototyping & animation',
        'Professional portfolio building',
      ],
      detailLink: '/materi/detail/figma',
    },
  ];
</script>

<svelte:head>
  <title>Belajar UI/UX Design - Kodeflow Academy</title>
  <meta
    name="description"
    content="Belajar UI/UX Design dari dasar hingga profesional dengan Canva, Marvel App, dan Figma. Dari design grafis sederhana hingga prototype aplikasi yang interaktif."
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
            Belajar UI/UX Design dari Nol Hingga Profesional
          </h1>
          <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Wujudkan kreativitasmu menjadi <span
              class="text-secondary-500 font-bold">UI/UX Designer</span
            >
            dengan membuat design yang indah dan
            <span class="text-secondary-500 font-bold">user-friendly</span>,
            dari konsep hingga prototype yang interaktif.
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
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20UI/UX%20Design"
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
                  <Palette class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Visual Design</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Layers class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">UI Components</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Sparkles class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Prototyping</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Eye class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">User Experience</p>
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
