<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  // Navbar Component
  let mobileMenuOpen = false;
  let activeLink = '';

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Programs', href: '#programs' },
    { label: 'Coaches', href: '#coaches' },
    { label: 'Materials', href: '#materials' },
    { label: 'FAQ', href: '#faq' },
  ];

  // Set active link berdasarkan hash
  function setActiveFromHash() {
    if (browser) {
      const hash = window.location.hash || '#home';
      activeLink = hash;
    }
  }

  // Scroll spy untuk mendeteksi section yang aktif
  function setupScrollSpy() {
    if (!browser) return;

    function updateActiveLink() {
      // Get navbar height for offset (80px = h-20 in Tailwind)
      const navbarHeight = 80;
      const scrollPosition = window.scrollY + navbarHeight + 50;

      // Get all sections
      const sections = navLinks
        .map((link) => {
          const id = link.href.substring(1);
          const element = document.getElementById(id);
          if (!element) return null;

          return {
            id,
            href: link.href,
            top: element.offsetTop,
            bottom: element.offsetTop + element.offsetHeight,
          };
        })
        .filter((item) => item !== null);

      // Jika di paling atas halaman, set home sebagai aktif
      if (window.scrollY < 100) {
        activeLink = '#home';
        return;
      }

      // Cari section yang sedang aktif berdasarkan scroll position
      let foundActive = false;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (scrollPosition >= section.top) {
          activeLink = section.href;
          foundActive = true;
          break;
        }
      }

      // Fallback ke home jika tidak ada yang cocok
      if (!foundActive) {
        activeLink = '#home';
      }
    }

    // Throttle scroll event untuk performa lebih baik
    let scrollTimeout;
    const handleScroll = () => {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(() => {
        updateActiveLink();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('hashchange', setActiveFromHash);
    window.addEventListener('resize', updateActiveLink);

    // Set initial active link
    setActiveFromHash();
    updateActiveLink();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', setActiveFromHash);
      window.removeEventListener('resize', updateActiveLink);
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
    };
  }

  function handleLinkClick(href) {
    activeLink = href;
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  }

  onMount(() => {
    setupScrollSpy();
  });
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20 px-20"
>
  <div class="container mx-auto px-6 lg:px-12">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <a
        href="/"
        class="flex items-center gap-3 group"
        aria-label="Kodeflow Academy Home"
      >
        <div
          class="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        >
          <svg
            class="w-8 h-8 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"
            />
          </svg>
        </div>
      </a>

      <!-- Right Side - Desktop Menu, Sign Up & Hamburger -->
      <div class="flex items-center gap-4">
        <!-- Desktop Menu -->
        <div
          class="hidden lg:flex items-center gap-2 rounded-full bg-primary-50/60 backdrop-blur-md p-2 border border-white/40"
        >
          {#each navLinks as link}
            <a
              href={link.href}
              on:click={() => handleLinkClick(link.href)}
              class="font-medium transition-all duration-300 px-4 py-2 rounded-full {activeLink ===
              link.href
                ? 'bg-primary-500/95 text-white shadow-lg shadow-primary-500/30 scale-105 backdrop-blur-sm'
                : 'text-neutral-700 hover:bg-white/70 hover:text-primary-500 hover:backdrop-blur-sm'}"
            >
              {link.label}
            </a>
          {/each}
        </div>
        <!-- Sign Up Button -->
        <a
          href="#signup"
          class="bg-primary-500/90 backdrop-blur-sm hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/50 hover:scale-105 border border-white/20"
        >
          Hubungi Kami
        </a>

        <!-- Hamburger Menu Button -->
        <button
          on:click={toggleMobileMenu}
          class="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100/60 hover:backdrop-blur-sm transition-all duration-300"
          aria-label="Toggle menu"
        >
          <svg
            class="w-6 h-6 text-neutral-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {#if mobileMenuOpen}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            {:else}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            {/if}
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="lg:hidden py-4 border-t border-white/30 backdrop-blur-md">
        <div class="flex flex-col space-y-2 px-2">
          {#each navLinks as link}
            <a
              href={link.href}
              on:click={() => handleLinkClick(link.href)}
              class="font-medium px-4 py-3 rounded-xl transition-all duration-300 {activeLink ===
              link.href
                ? 'bg-primary-500/95 text-white shadow-lg shadow-primary-500/30 backdrop-blur-sm border border-white/20'
                : 'text-neutral-700 hover:bg-white/60 hover:text-primary-500 hover:backdrop-blur-sm hover:border hover:border-white/20'}"
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
