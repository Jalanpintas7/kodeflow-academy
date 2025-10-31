<script>
	// Navbar Component
	let mobileMenuOpen = false;
	
	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	const navLinks = [
		{ label: 'Home', href: '#home' },
		{ label: 'About Us', href: '#about' },
		{ label: 'Programs', href: '#programs' },
		{ label: 'Coaches', href: '#coaches' }
	];
</script>

<nav class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md px-20">
	<div class="container mx-auto px-6 lg:px-12">
		<div class="flex items-center justify-between h-20">
            <div class="flex items-center gap-8">

                <!-- Logo -->
                <a href="/" class="flex items-center gap-3 group" aria-label="Kodeflow Academy Home">
                    <div class="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                        </svg>
                    </div>
                </a>
                <!-- Desktop Menu -->
			<div class="hidden lg:flex items-center gap-8 rounded-full bg-primary-50 p-3 px-6">
				{#each navLinks as link}
					<a 
						href={link.href} 
						class="text-neutral-700 hover:text-primary-500 font-medium transition-colors duration-300 relative group"
					>
						{link.label}
						<span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
					</a>
				{/each}
			</div>
            </div>

			

			<!-- Right Side - Sign Up & Hamburger -->
			<div class="flex items-center gap-4">
				<!-- Sign Up Button -->
				<a 
					href="#signup" 
					class="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105"
				>
					Hubungi Kami
				</a>

				<!-- Hamburger Menu Button -->
				<button 
					on:click={toggleMobileMenu}
					class="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100 transition-colors duration-300"
					aria-label="Toggle menu"
				>
					<svg class="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						{#if mobileMenuOpen}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
						{:else}
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
						{/if}
					</svg>
				</button>
			</div>
		</div>

		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<div class="lg:hidden py-4 border-t border-neutral-200">
				<div class="flex flex-col space-y-3">
					{#each navLinks as link}
						<a 
							href={link.href}
							on:click={toggleMobileMenu}
							class="text-neutral-700 hover:text-primary-500 hover:bg-primary-50 font-medium px-4 py-3 rounded-lg transition-all duration-300"
						>
							{link.label}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</nav>

<!-- Spacer to prevent content from going under fixed navbar -->
<div class="h-20"></div>

