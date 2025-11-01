<script>
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
  import Footer from '$lib/components/ui/Footer.svelte';
  import { Blocks, Palette, Gamepad2, Users } from 'lucide-svelte';
  import scratchImg from '$lib/assets/images/materi/scratchHD.png';

  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Daftar Materi', href: '/#materials' },
    { label: 'Web & Mobile App', href: '/materi/web-mobile-app' },
    { label: 'Scratch', href: null },
  ];

  const features = [
    {
      icon: Blocks,
      title: 'Coding Visual',
      description: 'Menggunakan blok warna-warni yang mudah disusun.',
      color: 'from-orange-400 to-pink-500',
    },
    {
      icon: Palette,
      title: 'Karakter & Animasi',
      description: 'Anak bisa memilih atau membuat karakter sendiri.',
      color: 'from-pink-400 to-rose-500',
    },
    {
      icon: Gamepad2,
      title: 'Game & Cerita Interaktif',
      description:
        'Membuat karya digital seperti game sederhana atau cerita animasi.',
      color: 'from-purple-400 to-indigo-500',
    },
    {
      icon: Users,
      title: 'Komunitas Aman',
      description: 'Bagikan karya dengan aman dan temukan inspirasi global.',
      color: 'from-green-400 to-emerald-500',
    },
  ];

  const projects = [
    {
      title: 'Game Mengejar Kucing',
      description:
        'Game interaktif dengan kontrol keyboard dan scoring system.',
      features: [
        'Kontrol keyboard',
        'Sprite movement',
        'Score tracking',
        'Sound effects',
      ],
    },
    {
      title: 'Cerita Animasi Interaktif',
      description: 'Cerita bergambar dengan dialog, musik, dan pilihan alur.',
      features: [
        'Multiple scenes',
        'Character dialog',
        'Background music',
        'Interactive choices',
      ],
    },
    {
      title: 'Kuis Edukasi',
      description: 'Quiz game dengan pertanyaan, jawaban, dan skor.',
      features: [
        'Question bank',
        'True/false logic',
        'Score display',
        'Feedback messages',
      ],
    },
    {
      title: 'Animasi Menari',
      description:
        'Sprite menari dengan musik, kostum berubah, dan efek visual.',
      features: [
        'Costume changes',
        'Music sync',
        'Loop animations',
        'Color effects',
      ],
    },
  ];

  const willLearn = [
    'Dasar-dasar logika komputasi',
    'Pembuatan game 2D',
    'Mengasah kreatifitas dan critical thinking',
    'Cara membuat karakter dan aset game',
  ];

  const willGet = [
    'Video Materi',
    '64 Pertemuan',
    'Bahan Praktek',
    'Sertifikat Kelulusan',
    'Kelas Online/Offline',
  ];

  const curriculum = [
    {
      section: 'Dasar dan Pengenalan',
      sessions: [
        {
          number: 1,
          title: 'Pengenalan Scratch dan Dunia Coding',
          topics: [
            'Menjelaskan apa itu coding secara sederhana',
            'Mengenalkan platform Scratch dan tampilan antarmukanya',
            'Menjelaskan tujuan pembelajaran',
            'Aktivitas: Eksplorasi antarmuka Scratch bersama guru',
          ],
        },
        {
          number: 2,
          title: 'Kenalan dengan Sprite dan Stage',
          topics: [
            'Apa itu sprite dan stage?',
            'Cara memilih sprite dari library',
            'Mengganti stage (latar belakang)',
            'Aktivitas: Memilih sprite dan background favorit',
          ],
        },
        {
          number: 3,
          title: 'Cara Menggerakkan Sprite',
          topics: [
            'Memahami blok "move" dan "turn"',
            'Latihan membuat sprite berjalan dan berputar',
            'Eksperimen dengan angka (jarak dan arah)',
            'Aktivitas: Membuat sprite berjalan zig-zag',
          ],
        },
        {
          number: 4,
          title: 'Mengganti Kostum dan Menambah Sprite',
          topics: [
            'Menjelaskan kostum pada sprite',
            'Menambahkan sprite kedua',
            'Pergantian kostum otomatis (animasi sederhana)',
            'Aktivitas: Sprite berganti baju sambil berjalan',
          ],
        },
        {
          number: 5,
          title: 'Mengubah Latar Belakang (Background)',
          topics: [
            'Menggunakan blok "switch backdrop to"',
            'Menjelaskan transisi background dalam cerita',
            'Aktivitas: Ganti latar saat sprite pindah tempat',
          ],
        },
        {
          number: 6,
          title: 'Menjalankan Program dengan Klik (Event)',
          topics: [
            'Mengenal event "when green flag clicked" dan "when sprite clicked"',
            'Menjelaskan trigger dalam coding',
            'Aktivitas: Sprite bergerak saat diklik',
          ],
        },
        {
          number: 7,
          title: 'Menambahkan Suara ke Sprite',
          topics: [
            'Memilih suara dari library',
            'Blok "play sound" dan "start sound"',
            'Aktivitas: Sprite bersuara saat bergerak atau diklik',
          ],
        },
        {
          number: 8,
          title: 'Menjelajahi Blok Tampilan (Looks)',
          topics: [
            'Memahami blok "say", "think", dan "change effect"',
            'Perubahan tampilan sprite',
            'Aktivitas: Membuat sprite berdialog dan mengubah warna',
          ],
        },
        {
          number: 9,
          title: 'Gerakan Berulang (Loop)',
          topics: [
            'Mengenal blok "repeat" dan "forever"',
            'Membuat animasi berulang',
            'Aktivitas: Sprite berjalan tanpa henti',
          ],
        },
        {
          number: 10,
          title: 'Logika Sederhana dengan "If"',
          topics: [
            'Blok "if" dan "if…then"',
            'Contoh logika dasar: jika menyentuh warna, maka berhenti',
            'Aktivitas: Sprite berhenti saat kena dinding',
          ],
        },
        {
          number: 11,
          title: 'Proyek Mini 1: Menari Bersama Sprite',
          topics: [
            'Menggabungkan semua blok dasar',
            'Membuat sprite menari, bersuara, dan berganti kostum',
            'Aktivitas: Tampilkan hasil proyek ke teman',
          ],
        },
        {
          number: 12,
          title: 'Review dan Kuis 1',
          topics: [
            'Review semua materi dari pertemuan 1–11',
            'Kuis pilihan ganda & praktik',
            'Sesi tanya jawab dan penguatan konsep',
          ],
        },
      ],
    },
    {
      section: 'Gerakan dan Kontrol Lanjut',
      sessions: [
        {
          number: 13,
          title: 'Koordinat X dan Y di Scratch',
          topics: [
            'Menjelaskan posisi sprite di panggung',
            'Memindahkan sprite ke titik tertentu',
            'Aktivitas: Sprite melompat dari titik ke titik',
          ],
        },
        {
          number: 14,
          title: 'Menggerakkan Sprite dengan Panah Keyboard',
          topics: [
            'Blok sensing: "key pressed?"',
            'Mengontrol sprite menggunakan tombol panah',
            'Aktivitas: Buat sprite bergerak seperti remote',
          ],
        },
        {
          number: 15,
          title: 'Menambah Interaksi Keyboard',
          topics: [
            'Kombinasi tombol dan logika if',
            'Mengatur arah sprite dengan keyboard',
            'Aktivitas: Game kecil gerak kanan–kiri',
          ],
        },
        {
          number: 16,
          title: 'Menggunakan "Say" dan "Think"',
          topics: [
            'Bedanya "say" dan "think"',
            'Membuat sprite ngobrol dan berpikir',
            'Aktivitas: Percakapan dua sprite',
          ],
        },
        {
          number: 17,
          title: 'Menambahkan Musik atau Efek Suara',
          topics: [
            'Blok sound lebih lanjut',
            'Loop musik latar',
            'Aktivitas: Tambahkan musik dalam cerita pendek',
          ],
        },
        {
          number: 18,
          title: 'Proyek Mini 2: Game Mengejar Kucing',
          topics: [
            'Sprite dikendalikan pemain',
            'Sprite kedua sebagai musuh atau target',
            'Skor sederhana (belum pakai variabel)',
          ],
        },
        {
          number: 19,
          title: 'Penjelasan Variabel Sederhana',
          topics: [
            'Apa itu variabel?',
            'Membuat variabel skor',
            'Blok "change", "set", dan "show/hide variable"',
            'Aktivitas: Tambah skor saat menyentuh target',
          ],
        },
        {
          number: 20,
          title: 'Mengubah Ukuran dan Arah Sprite',
          topics: [
            'Blok "set size", "change size"',
            'Flip sprite dengan arah (90, -90, 0)',
            'Aktivitas: Sprite berubah ukuran saat bergerak',
          ],
        },
        {
          number: 21,
          title: 'Menggunakan Timer',
          topics: [
            'Blok timer dan kontrol waktu',
            'Aktivitas: Game sederhana dengan batas waktu',
          ],
        },
        {
          number: 22,
          title: 'Proyek Mini 3: Stopwatch Lucu',
          topics: [
            'Timer + suara + interaksi klik',
            'Menampilkan waktu secara real-time',
            'Aktivitas: Stopwatch dengan sprite lucu',
          ],
        },
        {
          number: 23,
          title: 'Review & Kuis 2',
          topics: [
            'Review materi 13–22',
            'Kuis kombinasi pilihan ganda & praktik',
            'Diskusi hasil proyek mini',
          ],
        },
        {
          number: 24,
          title: 'Ujian Akhir Section 1',
          topics: [
            'Ujian praktik: Buat proyek bebas',
            'Minimal: Gerakan, Suara, Interaksi tombol, Dialog',
            'Presentasi hasil proyek',
            'Pemberian badge/lencana digital',
          ],
        },
      ],
    },
  ];
</script>

<svelte:head>
  <title>Belajar Dasar Pemrograman Dengan Scratch - Kodeflow Academy</title>
  <meta
    name="description"
    content="Platform coding visual dari MIT untuk anak SD. Belajar coding sambil bermain dengan membuat game, animasi, dan cerita interaktif."
  />
</svelte:head>

<!-- Hero Section -->
<section
  class="relative overflow-hidden bg-linear-to-br from-orange-400 via-pink-500 to-orange-600 min-h-[70vh] flex items-center"
>
  <!-- Decorative Background -->
  <div class="absolute inset-0 opacity-10">
    <div
      class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"
    ></div>
    <div
      class="absolute bottom-20 right-20 w-96 h-96 bg-yellow-300 rounded-full blur-3xl"
    ></div>
  </div>

  <div class="container mx-auto px-6 lg:px-12 py-16 relative z-10">
    <!-- Breadcrumb -->
    <ScrollReveal animation="fade-right">
      <Breadcrumb items={breadcrumbItems} variant="dark" />
    </ScrollReveal>

    <div class="grid lg:grid-cols-2 gap-12 items-center mt-8">
      <!-- Left Content -->
      <div class="space-y-6 lg:space-y-8">
        <ScrollReveal animation="fade-up">
          <div
            class="inline-block bg-white/20 backdrop-blur-md border border-white/30 px-4 py-2 rounded-full mb-4"
          >
            <span class="text-white font-semibold text-sm"
              >6-12 Tahun • Sekolah Dasar</span
            >
          </div>
          <h1 class="text-4xl lg:text-6xl font-bold text-white leading-tight">
            Belajar Dasar Pemrograman Dengan Scratch
          </h1>
          <p class="text-xl lg:text-2xl text-white/90 leading-relaxed">
            Platform coding visual yang dikembangkan oleh <span
              class="font-bold">MIT</span
            > ini dirancang khusus untuk anak-anak, menjadi pintu gerbang ideal menuju
            dunia pemrograman.
          </p>
        </ScrollReveal>

        <!-- CTA Button -->
        <ScrollReveal animation="fade-up" delay={200}>
          <a
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20tertarik%20dengan%20program%20Scratch"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex bg-white hover:bg-white/90 text-orange-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl items-center gap-2"
          >
            <span>Hubungi Kami</span>
            <span>→</span>
          </a>
        </ScrollReveal>
      </div>

      <!-- Right Content - Image -->
      <ScrollReveal animation="fade-left" delay={200}>
        <div class="relative">
          <div class="absolute inset-0 bg-white/20 rounded-3xl blur-2xl"></div>
          <div
            class="relative bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-2xl"
          >
            <img
              src={scratchImg}
              alt="Scratch Programming"
              class="w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>

<!-- Why Scratch Section -->
<section class="py-16 lg:py-24 bg-white">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
      <!-- Left - Image -->
      <ScrollReveal animation="fade-right">
        <div class="relative">
          <div
            class="absolute inset-0 bg-linear-to-br from-orange-400 to-pink-500 rounded-3xl opacity-20 blur-2xl"
          ></div>
          <div
            class="relative bg-linear-to-br from-orange-50 to-pink-50 rounded-3xl p-6 lg:p-8 border border-orange-200"
          >
            <img
              src={scratchImg}
              alt="Scratch Programming Platform"
              class="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </ScrollReveal>

      <!-- Right - Content -->
      <ScrollReveal animation="fade-left" delay={200}>
        <div class="space-y-6">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-900">
            Kenapa Harus Scratch?
          </h2>

          <div class="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Scratch bukan hanya tentang belajar coding, tetapi juga
              mengembangkan cara berpikir <span
                class="font-bold text-orange-600"
                >logis, kreatif, dan sistematis</span
              > sejak dini. Anak-anak diajak menyelesaikan masalah dengan cara menyenangkan,
              seperti merancang game atau membuat karakter yang bisa bergerak dan
              berbicara.
            </p>
            <p>
              Cocok untuk <span class="font-bold text-orange-600"
                >kurikulum SD</span
              > karena mendorong eksplorasi bebas, kolaborasi, dan ekspresi diri
              secara visual.
            </p>
          </div>

          <a
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20jadwalkan%20seminar%20gratis%20Scratch"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Jadwalkan Seminar Gratis
          </a>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>

<!-- Features Grid -->
<section class="py-16 lg:py-24 bg-gray-50">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each features as feature, index}
        <ScrollReveal animation="fade-up" delay={index * 100}>
          <div
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group"
          >
            <div
              class="w-16 h-16 bg-linear-to-br {feature.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
            >
              <svelte:component
                this={feature.icon}
                class="w-8 h-8 text-white"
              />
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p class="text-gray-600 leading-relaxed">{feature.description}</p>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<!-- What Will Learn & Get Section -->
<section class="py-16 lg:py-24 bg-white">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      <!-- Will Learn -->
      <ScrollReveal animation="fade-right">
        <div
          class="bg-linear-to-br from-orange-50 to-pink-50 rounded-2xl p-6 lg:p-8 border border-orange-200 h-full"
        >
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Apa yang akan dipelajari
          </h3>
          <ul class="space-y-4">
            {#each willLearn as item}
              <li class="flex items-start gap-3">
                <div
                  class="w-6 h-6 bg-linear-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                >
                  <span class="text-white text-xs font-bold">✓</span>
                </div>
                <span class="text-gray-700">{item}</span>
              </li>
            {/each}
          </ul>
        </div>
      </ScrollReveal>

      <!-- Will Get -->
      <ScrollReveal animation="fade-left" delay={200}>
        <div
          class="bg-linear-to-br from-purple-50 to-indigo-50 rounded-2xl p-6 lg:p-8 border border-purple-200 h-full"
        >
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
            Apa yang akan didapatkan
          </h3>
          <ul class="space-y-4">
            {#each willGet as item}
              <li class="flex items-start gap-3">
                <div
                  class="w-6 h-6 bg-linear-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                >
                  <span class="text-white text-xs font-bold">✓</span>
                </div>
                <span class="text-gray-700">{item}</span>
              </li>
            {/each}
          </ul>

          <div class="mt-6 pt-6 border-t border-purple-200">
            <a
              href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20jadwalkan%20seminar%20gratis%20Scratch"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-center bg-linear-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm"
            >
              Jadwalkan Seminar Gratis
            </a>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>

<!-- Curriculum Section -->
<section class="py-16 lg:py-24 bg-gray-50">
  <div class="container mx-auto px-6 lg:px-12">
    <ScrollReveal animation="fade-up">
      <div class="text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Kurikulum Pembelajaran
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          64 Pertemuan terstruktur dari dasar hingga proyek final
        </p>
      </div>
    </ScrollReveal>

    <div class="max-w-6xl mx-auto space-y-16">
      {#each curriculum as section, sectionIndex}
        <div>
          <ScrollReveal animation="fade-up" delay={sectionIndex * 100}>
            <div class="mb-8">
              <div
                class="inline-block bg-linear-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-3"
              >
                {section.section}
              </div>
              <h3 class="text-2xl lg:text-3xl font-bold text-gray-900">
                Pertemuan {curriculum[sectionIndex].sessions[0].number} - {curriculum[
                  sectionIndex
                ].sessions[curriculum[sectionIndex].sessions.length - 1].number}
              </h3>
            </div>
          </ScrollReveal>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {#each section.sessions as session, sessionIndex}
              <ScrollReveal animation="fade-up" delay={sessionIndex * 50}>
                <div
                  class="bg-white rounded-xl p-4 lg:p-5 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-orange-400 h-full"
                >
                  <div class="flex items-start gap-3 mb-4">
                    <div
                      class="w-8 h-8 bg-linear-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center shrink-0"
                    >
                      <span class="text-white font-bold text-xs"
                        >{session.number}</span
                      >
                    </div>
                    <h4
                      class="text-base lg:text-lg font-bold text-gray-900 leading-tight flex-1"
                    >
                      {session.title}
                    </h4>
                  </div>
                  <ul class="space-y-2">
                    {#each session.topics as topic}
                      <li class="flex items-start gap-2 pl-1">
                        <span class="text-orange-500 mt-0.5 shrink-0">•</span>
                        <span class="text-gray-600 text-sm leading-relaxed"
                          >{topic}</span
                        >
                      </li>
                    {/each}
                  </ul>
                </div>
              </ScrollReveal>
            {/each}
          </div>
        </div>
      {/each}

      <!-- Note: 40 pertemuan lainnya bisa ditambahkan dengan pattern yang sama -->
      <ScrollReveal animation="fade-up">
        <div
          class="bg-linear-to-br from-orange-100 to-pink-100 rounded-2xl p-6 text-center border border-orange-300"
        >
          <p class="text-gray-700 mb-4">
            <span class="font-bold">40 pertemuan lainnya</span> akan membahas:
          </p>
          <div class="flex flex-wrap gap-3 justify-center">
            <span
              class="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700"
              >Interaktivitas Lanjut</span
            >
            <span
              class="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700"
              >Game Development</span
            >
            <span
              class="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700"
              >Animation Stories</span
            >
            <span
              class="bg-white px-4 py-2 rounded-full text-sm font-semibold text-gray-700"
              >Final Projects</span
            >
          </div>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>

<!-- Projects Section -->
<section class="py-16 lg:py-24 bg-white">
  <div class="container mx-auto px-6 lg:px-12">
    <ScrollReveal animation="fade-up">
      <div class="text-center mb-12">
        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
          Project yang Akan Dibuat
        </h2>
        <p class="text-gray-600 max-w-2xl mx-auto">
          Buat game dan animasi menarik untuk portfolio
        </p>
      </div>
    </ScrollReveal>

    <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {#each projects as project, index}
        <ScrollReveal animation="fade-up" delay={index * 100}>
          <div
            class="bg-linear-to-br from-orange-50 to-pink-50 rounded-2xl p-6 border border-orange-200 hover:shadow-xl transition-all duration-300"
          >
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              {project.title}
            </h3>
            <p class="text-gray-600 mb-4">{project.description}</p>
            <div class="space-y-2">
              {#each project.features as feature}
                <div class="flex items-center gap-2">
                  <div
                    class="w-5 h-5 bg-linear-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center shrink-0"
                  >
                    <span class="text-white text-xs">✓</span>
                  </div>
                  <span class="text-gray-700 text-sm">{feature}</span>
                </div>
              {/each}
            </div>
          </div>
        </ScrollReveal>
      {/each}
    </div>
  </div>
</section>

<!-- CTA Section -->
<section
  class="py-16 lg:py-24 bg-linear-to-r from-orange-500 via-pink-500 to-orange-600"
>
  <div class="container mx-auto px-6 lg:px-12">
    <ScrollReveal animation="zoom">
      <div class="text-center max-w-3xl mx-auto text-white">
        <h2 class="text-4xl lg:text-5xl font-bold mb-6">
          Siap Mulai Belajar Scratch?
        </h2>
        <p class="text-xl text-white/90 mb-8">
          Bergabunglah dengan ratusan anak yang sudah belajar coding sambil
          bermain bersama Scratch!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20daftar%20kelas%20Scratch"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-white hover:bg-white/90 text-orange-600 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl inline-flex items-center justify-center gap-2"
          >
            <span>Daftar Kelas Gratis</span>
          </a>
          <a
            href="/materi/web-mobile-app"
            class="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 border border-white/30"
          >
            Lihat Materi Lainnya
          </a>
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>
