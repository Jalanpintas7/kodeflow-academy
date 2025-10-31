<script>
	// Teachers Section Component
	import teacherImage from '$lib/assets/images/school.webp'; // placeholder
</script>

<section class="py-16 lg:py-24 bg-gray-50">
	<div class="container mx-auto px-6 lg:px-12">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<!-- Left side - Image -->
			<div class="relative">
				<!-- Background decoration -->
				<div class="absolute inset-0 bg-purple-300 rounded-[3rem] -rotate-3 opacity-30"></div>
				
				<!-- Main image container -->
				<div class="relative bg-purple-300 rounded-[3rem] overflow-hidden aspect-[4/5] max-w-md mx-auto p-10">
					<img src="{teacherImage}" alt="Professional Teacher" class="w-full h-full object-cover object-top" />
				</div>

				<!-- Decorative elements -->
				<div class="absolute -bottom-6 -left-6 w-24 h-24 bg-lime-400 rounded-full opacity-60 blur-xl"></div>
				<div class="absolute -top-6 -right-6 w-32 h-32 bg-purple-500 rounded-full opacity-30 blur-2xl"></div>
			</div>

			<!-- Right side - Content -->
			<div class="space-y-6">
				<!-- Title -->
				<h2 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
					Untuk Sekolah dan
					<span class="block text-purple-600">Yayasan</span>
				</h2>

				<!-- Description -->
				<div class="space-y-4 text-gray-600 text-base lg:text-lg leading-relaxed">
					<p>
						Kami memahami tantangan lembaga pendidikan dalam menyesuaikan diri dengan perkembangan teknologi. Kodeflow hadir sebagai mitra kolaboratif, bukan sekadar penyedia kursus.

					</p>
					
				</div>

				<!-- CTA Button -->
				<div class="pt-4">
					<button class="group bg-lime-400 hover:bg-lime-500 text-gray-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg flex items-center gap-3">
						<span>Jadwalkan Seminar Gratis</span>
						<div class="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
							<svg class="w-3 h-3 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
							</svg>
						</div>
					</button>
				</div>
			</div>
		</div>
	</div>
</section>

