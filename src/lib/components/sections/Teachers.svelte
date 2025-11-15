<script>
  import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
  import teacherImage from '$lib/assets/images/teachers/school.webp';
</script>

<section id="coaches" class="py-16 lg:py-24 bg-gray-50">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <!-- Left side - Image -->
      <ScrollReveal animation="fade-right">
        <div class="relative">
          <!-- Background decoration -->
          <div
            class="absolute inset-0 bg-purple-300 rounded-3xl -rotate-3 opacity-30"
          ></div>

          <!-- Main image container -->
          <div
            class="relative bg-purple-300 rounded-3xl overflow-hidden w-full max-w-md mx-auto p-10"
            style="aspect-ratio: 4/5;"
          >
            <img
              src={teacherImage}
              alt="Professional Teacher"
              class="w-full h-full object-cover object-top"
            />
          </div>

        <!-- Decorative elements -->
        <div
          class="absolute -bottom-6 -left-6 w-24 h-24 bg-accent-400 rounded-full opacity-60 blur-xl"
        ></div>
          <div
            class="absolute -top-6 -right-6 w-32 h-32 bg-purple-500 rounded-full opacity-30 blur-2xl"
          ></div>
        </div>
      </ScrollReveal>

      <!-- Right side - Content -->
      <ScrollReveal animation="fade-left" delay={200}>
        <div class="space-y-6">
          <!-- Title -->
          <h2
            class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
          >
            Untuk Sekolah dan
            <span class="block text-purple-600">Yayasan</span>
          </h2>

          <!-- Description -->
          <div
            class="space-y-4 text-gray-600 text-base lg:text-lg leading-relaxed"
          >
            <p>
              Kami memahami tantangan lembaga pendidikan dalam menyesuaikan diri
              dengan perkembangan teknologi. Kodeflow hadir sebagai mitra
              kolaboratif, bukan sekadar penyedia kursus.
            </p>
          </div>

          <!-- CTA Button -->
          <div class="pt-4">
            <button
              class="group bg-secondary-500 hover:bg-secondary-500 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-3"
            >
              <span>Jadwalkan Seminar Gratis</span>
              <div class="w-8 h-8 flex items-center justify-center">
                <svg
                  class="w-3 h-3 text-gray-900 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </ScrollReveal>
    </div>
  </div>
</section>
