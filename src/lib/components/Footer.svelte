<script>
	// Footer Component
	import logoImage from '$lib/assets/favicon.svg'; // placeholder, ganti dengan logo kodeflow
</script>

<footer class="bg-linear-to-br from-purple-700 via-purple-600 to-purple-800 text-white">
	<!-- Main Footer Content -->
	<div class="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
			<!-- Logo & Description - Takes more space -->
			<div class="lg:col-span-5 space-y-6">
				<!-- Logo -->
				<div class="flex items-center gap-3">
					<div class="w-12 h-12 bg-lime-400 rounded-xl flex items-center justify-center">
						<svg class="w-8 h-8 text-purple-700" fill="currentColor" viewBox="0 0 24 24">
							<path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
						</svg>
					</div>
					<div>
						<h3 class="text-2xl font-bold">kodeflow</h3>
						<p class="text-xs text-purple-200">KIDS CODING ACADEMY ONLINE</p>
					</div>
				</div>

				<!-- Description -->
				<p class="text-purple-100 leading-relaxed">
					Membantu lembaga pendidikan menghadirkan program coding berkualitas untuk generasi digital masa depan.
				</p>

				<!-- Social Media -->
				<div class="space-y-3">
					<p class="text-sm font-semibold text-purple-200">Follow Us</p>
					<div class="flex gap-3">
						<a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
							class="w-10 h-10 bg-lime-400 hover:bg-lime-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
							<svg class="w-5 h-5 text-purple-700" fill="currentColor" viewBox="0 0 24 24">
								<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
							</svg>
						</a>
						<a href="https://youtube.com" target="_blank" rel="noopener noreferrer"
							class="w-10 h-10 bg-lime-400 hover:bg-lime-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
							<svg class="w-5 h-5 text-purple-700" fill="currentColor" viewBox="0 0 24 24">
								<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
							</svg>
						</a>
						<a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
							class="w-10 h-10 bg-lime-400 hover:bg-lime-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group">
							<svg class="w-5 h-5 text-purple-700" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
							</svg>
						</a>
					</div>
				</div>
			</div>

			<!-- Address & Contact - Office 1 -->
			<div class="lg:col-span-3 space-y-4">
				<h4 class="text-lg font-bold mb-4">Kantor Pasuruan</h4>
				<div class="space-y-3 text-purple-100 text-sm">
					<p class="leading-relaxed">
						Green Bangil, C1-07. Pasuruan, Jawa Timur<br />
						Indonesia, 67153
					</p>
				</div>
                <h4 class="text-lg font-bold mb-4">Head Office</h4>
				<div class="space-y-4 text-purple-100 text-sm">
					<p class="leading-relaxed">
						Jl. Bohar Timur 30, Bohar, Taman, Sidoarjo,<br />
						Jawa Timur, Indonesia 61257
					</p>
				</div>
			</div>

			<!-- Address & Contact - Office 2 -->
			<div class="lg:col-span-4 space-y-4">
				
				<h4 class="text-lg font-bold mb-4">Contact Us</h4>

					<!-- Contact Info -->
					<div class="space-y-3">
						<a href="mailto:info@deeppink-cormorant-883009.hostingersite.com" 
							class="flex items-center gap-3 hover:text-lime-400 transition-colors duration-300">
							<div class="w-8 h-8 bg-purple-500/50 rounded-lg flex items-center justify-center shrink-0">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<span class="text-xs break-all">info@deeppink-cormorant-883009.hostingersite.com</span>
						</a>

						<a href="tel:+6285733235489" 
							class="flex items-center gap-3 hover:text-lime-400 transition-colors duration-300">
							<div class="w-8 h-8 bg-purple-500/50 rounded-lg flex items-center justify-center shrink-0">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
							</div>
							<span>+62857-3323-5489</span>
						</a>
					</div>
			</div>
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="border-t border-purple-500/30">
		<div class="container mx-auto px-6 lg:px-12 py-6">
			<div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-purple-200">
				<p>&copy; 2024 Kodeflow Academy. All rights reserved.</p>
				<div class="flex gap-6">
					<a href="/privacy" class="hover:text-lime-400 transition-colors duration-300">Privacy Policy</a>
					<a href="/terms" class="hover:text-lime-400 transition-colors duration-300">Terms of Service</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Decorative Elements -->
	<div class="absolute bottom-0 left-0 w-64 h-64 bg-lime-400 rounded-full opacity-5 blur-3xl -z-10"></div>
	<div class="absolute top-0 right-0 w-96 h-96 bg-purple-900 rounded-full opacity-20 blur-3xl -z-10"></div>
</footer>

