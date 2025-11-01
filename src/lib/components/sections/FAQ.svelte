<script>
  // FAQ Component with 2 Column Layout
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  let selectedIndex = 0; // Default first item selected

  const faqs = [
    {
      id: 1,
      question: 'Apakah Kodeflow menyediakan trial class?',
      answer:
        'Ya, kami menyediakan trial class berupa seminar untuk siswa, untuk guru dan sesi konsultasi untuk menentukan minat siswa dalam memilih program yang kami sediakan.',
    },
    {
      id: 2,
      question: 'Apa itu Kodeflow.id?',
      answer:
        'Kodeflow.id adalah platform pembelajaran coding untuk anak-anak dan remaja yang menyediakan kurikulum terstruktur dari SD hingga Mahasiswa. Kami fokus pada pengembangan skill digital yang relevan dengan kebutuhan industri.',
    },
    {
      id: 3,
      question: 'Apa bedanya Kodeflow dengan kursus online lainnya?',
      answer:
        'Kodeflow dirancang khusus untuk lembaga pendidikan dengan kurikulum yang dapat diintegrasikan ke sistem sekolah. Kami menyediakan pendampingan penuh, laporan perkembangan siswa, dan materi yang disesuaikan dengan tingkat usia.',
    },
    {
      id: 4,
      question: 'Apakah semua siswa bisa mengikuti?',
      answer:
        'Ya, program kami dirancang bertahap sesuai usia dan kemampuan, mulai dari anak usia 6 tahun (SD) hingga mahasiswa. Setiap tingkatan memiliki materi yang disesuaikan dengan perkembangan kognitif siswa.',
    },
    {
      id: 5,
      question:
        'Apakah program Kodeflow harus dilakukan di jam pelajaran sekolah?',
      answer:
        'Tidak harus. Program Kodeflow fleksibel dan dapat diintegrasikan sebagai mata pelajaran formal atau kegiatan ekstrakurikuler di luar jam pelajaran sesuai kebutuhan sekolah.',
    },
    {
      id: 6,
      question: 'Apakah Kodeflow menyediakan pelatihan untuk guru?',
      answer:
        'Ya, kami menyediakan pelatihan dan pendampingan untuk guru agar dapat memahami materi dan membantu siswa dalam proses pembelajaran. Guru akan mendapat akses ke semua materi dan panduan mengajar.',
    },
    {
      id: 7,
      question: 'Bagaimana pelaporan perkembangan siswa dilakukan?',
      answer:
        'Setiap siswa memiliki dashboard progress yang dapat diakses oleh guru dan orang tua. Laporan mencakup materi yang sudah dipelajari, project yang diselesaikan, dan rekomendasi pembelajaran selanjutnya.',
    },
    {
      id: 8,
      question:
        'Apa saja kebutuhan teknis agar bisa menggunakan program Kodeflow?',
      answer:
        'Siswa membutuhkan laptop/komputer dengan koneksi internet yang stabil dan browser modern. Untuk beberapa program, kami akan memberikan panduan instalasi software yang diperlukan.',
    },
    {
      id: 9,
      question: 'Bagaimana cara bermitra dengan Kodeflow?',
      answer:
        'Sekolah atau yayasan dapat menghubungi kami melalui email atau WhatsApp untuk konsultasi gratis. Tim kami akan menjelaskan program, biaya, dan proses implementasi sesuai kebutuhan lembaga Anda.',
    },
  ];

  function selectFAQ(index) {
    selectedIndex = index;
  }
</script>

<section id="faq" class="py-16 lg:py-24 bg-linear-to-b from-white to-purple-50">
  <div class="container mx-auto px-6 lg:px-12">
    <!-- Section Header -->
    <ScrollReveal animation="fade-up">
      <div class="text-center mb-12 lg:mb-16">
        <h2 class="text-4xl lg:text-5xl font-bold text-purple-700 mb-4">
          Pertanyaan Umum (FAQ)
        </h2>
        <p class="text-xl text-purple-600 font-medium mb-2">
          untuk Sekolah & Yayasan
        </p>
        <p class="text-gray-600 text-lg max-w-3xl mx-auto">
          Temukan jawaban untuk pertanyaan yang sering diajukan seputar program
          Kodeflow Academy
        </p>
      </div>
    </ScrollReveal>

    <!-- 2 Column Layout: Questions on Left, Answer on Right -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
      <!-- Left Column - Questions List -->
      <ScrollReveal animation="fade-right">
        <div class="">
          {#each faqs as faq, index}
            <button
              on:click={() => selectFAQ(index)}
              class="group w-full text-left hover:bg-white rounded-2xl p-3 hover:shadow-lg transition-all duration-300 {selectedIndex ===
              index
                ? 'border-purple-400 bg-purple-50'
                : 'border-transparent hover:border-purple-200'}"
            >
              <!-- Question Text -->
              <h3
                class="text-base lg:text-lg font-bold leading-relaxed transition-colors duration-300 {selectedIndex ===
                index
                  ? 'text-primary-500'
                  : 'text-gray-900 group-hover:text-primary-500'}"
              >
                {faq.question}
              </h3>
            </button>
          {/each}
        </div>
      </ScrollReveal>

      <!-- Right Column - Answer Display -->
      <ScrollReveal animation="fade-left" delay={200}>
        <div class="lg:sticky lg:top-8 h-fit">
          <div
            class="bg-primary-500 rounded-3xl p-8 lg:p-10 shadow-2xl min-h-[400px] flex flex-col"
          >
            <!-- Selected Question Title -->
            <div class="mb-6">
              <h3
                class="text-2xl lg:text-3xl font-bold text-white leading-tight mb-6"
              >
                {faqs[selectedIndex].question}
              </h3>
            </div>

            <!-- Answer Content -->
            <div class="flex-1">
              <p class="text-purple-50 text-lg leading-relaxed">
                {faqs[selectedIndex].answer}
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>

    <!-- CTA Section -->
    <ScrollReveal animation="zoom" delay={400}>
      <div
        class="mt-16 text-center bg-primary-500 rounded-3xl p-8 lg:p-12 shadow-2xl"
      >
        <h3 class="text-2xl lg:text-3xl font-bold text-white mb-4">
          Masih Ada Pertanyaan?
        </h3>
        <p class="text-purple-100 mb-6 max-w-2xl mx-auto">
          Tim kami siap membantu Anda. Hubungi kami untuk konsultasi gratis dan
          demo program.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@kodeflow.academy"
            class="group bg-secondary-500 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-3"
          >
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span>Kirim Email</span>
          </a>
          <a
            href="https://wa.me/6285733235489"
            target="_blank"
            rel="noopener noreferrer"
            class="group bg-white hover:bg-gray-50 text-purple-700 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg inline-flex items-center justify-center gap-3"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
              />
            </svg>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </ScrollReveal>
  </div>
</section>
