<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';
  import logo from '$lib/assets/logo/logo.png';

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
      // Jangan update activeLink jika tidak di homepage
      if ($page.url.pathname !== '/') {
        return;
      }

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

  async function handleLinkClick(e, href) {
    e.preventDefault();
    
    // Cek apakah sedang di homepage
    const isHomepage = $page.url.pathname === '/';
    
    if (isHomepage) {
      // Jika di homepage, scroll ke section
      const targetId = href.substring(1);
      const element = document.getElementById(targetId);
      if (element) {
        const navbarHeight = 80;
        const targetPosition = element.offsetTop - navbarHeight;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
        activeLink = href;
        // Update URL hash
        window.history.pushState(null, '', href);
      }
    } else {
      // Jika tidak di homepage, navigasi ke homepage dengan hash
      await goto(`/${href}`, { 
        noScroll: true,
        replaceState: false 
      });
      
      // Setelah navigasi, scroll ke section
      if (browser) {
        setTimeout(() => {
          const targetId = href.substring(1);
          const element = document.getElementById(targetId);
          if (element) {
            const navbarHeight = 80;
            const targetPosition = element.offsetTop - navbarHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
            activeLink = href;
          }
        }, 100);
      }
    }
    
    if (mobileMenuOpen) {
      toggleMobileMenu();
    }
  }

  // Track previous pathname untuk detect navigasi
  let previousPathname = '';
  
  // Reactive statement untuk handle perubahan halaman
  $: if (browser) {
    const currentPath = $page.url.pathname;
    const hash = window.location.hash || '#home';
    
    // Jika di halaman materi, set Materials sebagai active (prioritas tinggi)
    if (currentPath.startsWith('/materi')) {
      activeLink = '#materials';
    }
    // Jika navigasi ke homepage dari halaman lain
    else if (currentPath === '/' && previousPathname !== '/' && previousPathname !== '') {
      activeLink = hash;
      
      // Scroll ke section jika ada hash
      if (hash && hash !== '#home') {
        setTimeout(() => {
          const targetId = hash.substring(1);
          const element = document.getElementById(targetId);
          if (element) {
            const navbarHeight = 80;
            const targetPosition = element.offsetTop - navbarHeight;
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }, 200);
      }
    }
    // Jika di homepage, gunakan scroll spy (akan di-handle oleh setupScrollSpy)
    else if (currentPath === '/') {
      // Scroll spy akan handle ini
      // Set initial dari hash jika ada
      if (hash) {
        activeLink = hash;
      }
    }
    
    previousPathname = currentPath;
  }

  onMount(() => {
    // Initialize previousPathname
    if (browser) {
      previousPathname = $page.url.pathname;
      
      // Set initial active link berdasarkan pathname
      if ($page.url.pathname.startsWith('/materi')) {
        activeLink = '#materials';
      } else if ($page.url.pathname === '/') {
        const hash = window.location.hash;
        if (hash) {
          activeLink = hash;
        } else {
          activeLink = '#home';
        }
      }
    }
    
    // Setup scroll spy hanya untuk homepage
    setupScrollSpy();
  });
</script>

<nav
  class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20"
>
  <div class="container mx-auto px-6 lg:px-12">
    <div class="flex items-center justify-between h-20">
      <!-- Logo -->
      <a
        href="/"
        class="flex items-center gap-3 group"
        aria-label="Kodeflow Academy Home"
      >
        <img
          src={logo}
          alt="Kodeflow Academy Logo"
          class="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-110"
        />
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
              on:click={(e) => handleLinkClick(e, link.href)}
              class="font-medium transition-all duration-300 px-4 py-2 rounded-full {activeLink ===
              link.href
                ? 'bg-primary-500/95 text-white shadow-lg shadow-primary-500/30 scale-105 backdrop-blur-sm'
                : 'text-neutral-700 hover:bg-white/70 hover:text-primary-500 hover:backdrop-blur-sm'}"
            >
              {link.label}
            </a>
          {/each}
        </div>
        <!-- Sign Up Button (Hidden on Mobile) -->
        <a
          href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20bertanya%20tentang%20program"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden md:inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-5 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm md:text-base"
        >
          <span>Hubungi Kami</span>
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
              on:click={(e) => handleLinkClick(e, link.href)}
              class="font-medium px-4 py-3 rounded-xl transition-all duration-300 {activeLink ===
              link.href
                ? 'bg-primary-500/95 text-white shadow-lg shadow-primary-500/30 backdrop-blur-sm border border-white/20'
                : 'text-neutral-700 hover:bg-white/60 hover:text-primary-500 hover:backdrop-blur-sm hover:border hover:border-white/20'}"
            >
              {link.label}
            </a>
          {/each}

          <!-- Mobile CTA Button -->
          <a
            href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20bertanya%20tentang%20program"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-2 flex items-center justify-center gap-2 bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg"
          >
            <span>Hubungi Kami</span>
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
          </a>
        </div>
      </div>
    {/if}
  </div>
</nav>

<!-- Spacer to prevent content from going under fixed navbar -->
<div class="h-20"></div>
