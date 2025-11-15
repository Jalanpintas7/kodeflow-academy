<script>
  // Programs Section Component
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import sdImage from '$lib/assets/images/programs/sd.webp';
  import smpImage from '$lib/assets/images/programs/smp.webp';
  import smaImage from '$lib/assets/images/programs/sma.webp';
  import mhsImage from '$lib/assets/images/programs/mhs.png';

  const programs = [
    {
      id: 1,
      ageRange: '6-12 Tahun',
      category: 'Anak',
      title: 'SD',
      description:
        'Belajar dasar coding dengan games, puzzle, dan cerita interaktif.',
      bgColor: 'bg-accent-400',
      textColor: 'text-gray-900',
      imageBg: 'bg-cyan-200',
      image: sdImage,
      featured: true,
    },
    {
      id: 2,
      ageRange: '13-15 Tahun',
      category: 'Remaja',
      title: 'SMP',
      description:
        'Scratch programming, logika dasar, dan kreativitas digital.',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-900',
      imageBg: 'bg-purple-300',
      image: smpImage,
      featured: false,
    },
    {
      id: 3,
      ageRange: '16-18 Tahun',
      category: 'Remaja',
      title: 'SMA',
      description: 'Web/Mobile development dan project based learning.',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-900',
      imageBg: 'bg-cyan-400',
      image: smaImage,
      featured: false,
    },
    {
      id: 4,
      ageRange: '18+ Tahun',
      category: 'Dewasa',
      title: 'Mahasiswa',
      description:
        'Full-stack development, mobile apps, dan portfolio building.',
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-900',
      imageBg: 'bg-purple-400',
      image: mhsImage,
      featured: false,
    },
  ];
</script>

<section id="programs" class="py-16 lg:py-24 bg-white">
  <div class="container mx-auto px-6 lg:px-12">
    <!-- Section Header (optional) -->
    <ScrollReveal animation="fade-up">
      <div class="text-center mb-12">
        <h2 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          Materi Sesuai Tingkatan
        </h2>
        <p class="text-gray-600 text-lg max-w-2xl mx-auto">
          Dirancang khusus untuk sekolah SD, SMP, SMA dan Mahasiswa — kami bantu
          lembaga Anda mempersiapkan generasi unggul di era teknologi tanpa
          perlu repot membangun sistem sendiri.
        </p>
      </div>
    </ScrollReveal>

    <!-- Programs Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each programs as program, index}
        <ScrollReveal animation="fade-up" delay={index * 100}>
          <div class="{program.bgColor} rounded-3xl overflow-hidden relative">
            <!-- Content with padding (top section) -->
            <div class="p-6 pb-0">
              <!-- Top badges and icon -->
              <div class="flex items-start justify-between mb-4">
                <div class="space-y-2">
                  <!-- Age badge -->
                  <div
                    class="inline-block bg-white/80 backdrop-blur-sm rounded-full px-4 py-2"
                  >
                    <span class="text-xs font-semibold {program.textColor}"
                      >{program.ageRange}</span
                    >
                  </div>
                  <!-- Category badge -->
                  <div
                    class="inline-block bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 ml-2"
                  >
                    <span class="text-xs font-semibold {program.textColor}"
                      >{program.category}</span
                    >
                  </div>
                </div>

                <!-- Circle icon -->
                <div
                  class="w-10 h-10 bg-white/50 backdrop-blur-sm rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-5 h-5 {program.textColor}"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="8" />
                  </svg>
                </div>
              </div>

              <!-- Title -->
              <h3
                class="text-3xl lg:text-4xl font-bold {program.textColor} mb-3 leading-tight"
              >
                {program.title}
              </h3>

              <!-- Description -->
              <p class="{program.textColor} opacity-80 text-sm mb-6 min-h-12">
                {program.description}
              </p>
            </div>

            <!-- Image - Full width without padding -->
            <div class="relative overflow-hidden aspect-4/5">
              <img
                src={program.image}
                alt={program.title}
                class="w-full h-full object-cover object-top z-10"
              />
              <!-- Read More Button -->
              <div
                class="flex items-center gap-3 z-40 absolute bottom-10 right-3 bg-white/50 backdrop-blur-sm rounded-3xl hover:bg-white/70 transition-all duration-300"
              >
                <button
                  class="p-6 {program.textColor} font-semibold px-6 py-3 rounded-full transition-all duration-300 text-sm hover:opacity-80"
                >
                  Read More
                </button>
                <div
                  class="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110"
                >
                  <svg
                    class="w-4 h-4 {program.textColor}"
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
            </div>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>
