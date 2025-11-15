<script>
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
  import Footer from '$lib/components/ui/Footer.svelte';
  import { Workflow, Zap, RefreshCw, Bot } from 'lucide-svelte';
  import scratchImg from '$lib/assets/images/materi/scratchHD.png';
  import zapierImg from '$lib/assets/images/materi/zapierHD.png';
  import n8nImg from '$lib/assets/images/materi/n8nHD.png';

  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Daftar Materi', href: '/#materials' },
    { label: 'Automation', href: null },
  ];

  const programs = [
    {
      level: 'Sekolah Dasar',
      title: 'Scratch Automation – Belajar Konsep Otomasi dengan Bermain',
      description:
        'Scratch tidak hanya untuk membuat game, tapi juga sempurna untuk memahami konsep automation dan logic flow. Siswa SD akan belajar membuat project yang otomatis merespon kondisi tertentu, seperti quiz otomatis, sorting game, atau simulasi sistem yang berjalan sendiri berdasarkan rules yang ditentukan.',
      extendedDesc:
        'Melalui Scratch, anak-anak belajar konsep if-then logic, loops, dan event-driven programming yang merupakan fondasi dari automation. Mereka memahami bagaimana membuat sistem yang "berpikir" dan bereaksi otomatis, skill yang sangat berguna untuk memahami teknologi automation di masa depan.',
      bgColor: 'bg-primary-500',
      image: scratchImg,
      ageRange: '6-12 Tahun',
      features: [
        'Belajar konsep automation',
        'If-then logic & loops',
        'Event-driven programming',
        'Simulasi sistem otomatis',
      ],
      detailLink: '/materi/detail/scratch-automation',
    },
    {
      level: 'Sekolah Menengah Pertama',
      title: 'Zapier & Make – Otomasi Tugas Digital Tanpa Coding',
      description:
        'Zapier dan IFTTT adalah platform no-code automation yang memungkinkan siswa SMP mengotomasi tugas digital sehari-hari. Belajar menghubungkan berbagai aplikasi seperti Google Sheets, Gmail, Instagram, Notion, dan ratusan app lainnya untuk bekerja secara otomatis tanpa perlu intervensi manual.',
      extendedDesc:
        'Siswa akan belajar membuat automation workflows seperti auto-save Instagram posts ke Google Drive, auto-respond email, sync data antar aplikasi, scheduling posts, dan banyak lagi. Program ini mengajarkan workflow thinking, process optimization, dan bagaimana teknologi bisa membantu menghemat waktu dan meningkatkan produktivitas.',
      bgColor: 'bg-primary-500',
      image: zapierImg,
      ageRange: '13-15 Tahun',
      features: [
        'No-code automation platform',
        'Connect 5000+ apps & services',
        'Workflow design & optimization',
        'Productivity automation',
      ],
      detailLink: '/materi/detail/zapier',
    },
    {
      level: 'Sekolah Menengah Atas',
      title: 'n8n Automation – Build Professional Workflows',
      description:
        'n8n adalah platform automation open-source yang powerful, digunakan oleh perusahaan untuk mengotomasi business processes. Siswa SMA akan belajar membuat complex automation workflows dengan conditional logic, data transformation, API integration, webhooks, dan custom code execution untuk kebutuhan profesional.',
      extendedDesc:
        'Program ini memberikan pengalaman nyata dalam membangun enterprise-level automation: data scraping & processing, CRM automation, marketing automation, business intelligence workflows, dan sistem integration yang kompleks. Siswa juga belajar tentang error handling, scheduling, monitoring, dan best practices dalam production automation. Skill ini sangat valuable untuk karir di bidang DevOps, IT automation, dan business process optimization.',
      bgColor: 'bg-primary-500',
      image: n8nImg,
      ageRange: '16-18 Tahun',
      features: [
        'Open-source automation platform',
        'Complex workflows & custom code',
        'API integration & webhooks',
        'Enterprise-level automation',
      ],
      detailLink: '/materi/detail/n8n',
    },
  ];
</script>

<svelte:head>
  <title>Belajar Automation - Kodeflow Academy</title>
  <meta
    name="description"
    content="Belajar automation dari konsep dasar hingga enterprise-level. Dari Scratch, Zapier & IFTTT, hingga n8n untuk workflow automation profesional."
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
            Belajar Automation dari Konsep Hingga Enterprise-Level
          </h1>
          <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Kuasai seni <span class="text-secondary-500 font-bold"
              >workflow automation</span
            >, dari konsep dasar hingga
            <span class="text-secondary-500 font-bold"
              >business process optimization</span
            >
            yang menghemat waktu dan meningkatkan produktivitas.
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
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20Automation"
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
                  <Workflow class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Workflows</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Zap class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">No-Code</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <RefreshCw class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Auto Process</p>
                </div>
                <div
                  class="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-6 text-center"
                >
                  <Bot class="w-12 h-12 text-white mx-auto mb-2" />
                  <p class="text-white font-semibold">Smart Bots</p>
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
          <div
            class={index % 2 === 0
              ? 'lg:order-1 order-2'
              : 'lg:order-2 order-2'}
          >
            <ScrollReveal
              animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            >
              <div class="space-y-6">
                <div>
                  <div class="mb-3 flex flex-wrap gap-2 items-center">
                    <div
                      class="inline-block bg-primary-100 text-primary-600 px-6 py-2 rounded-full font-semibold text-sm"
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
                  <svg
                    class="w-5 h-5"
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
                </a>
              </div>
            </ScrollReveal>
          </div>

          <!-- Image -->
          <div
            class={index % 2 === 0
              ? 'lg:order-2 order-1'
              : 'lg:order-1 order-1'}
          >
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
