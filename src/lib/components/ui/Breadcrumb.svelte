<script>
  import { ChevronRight, Home, MoreHorizontal } from 'lucide-svelte';

  /**
   * Komponen Breadcrumb yang reusable dan dinamis
   * @prop {Array} items - Array of breadcrumb items dengan struktur: [{ label, href, icon }]
   * @prop {string} variant - Style variant: 'light', 'dark', 'transparent', 'solid'
   * @prop {Component} separator - Custom separator icon component
   * @prop {boolean} showHome - Tampilkan icon home di item pertama
   * @prop {number} maxItems - Maximum items yang ditampilkan (sisanya akan di-collapse)
   * @prop {string} customClass - Custom class tambahan untuk container
   * @prop {boolean} enableSchema - Enable JSON-LD schema markup untuk SEO
   */
  let {
    items = [],
    variant = 'light',
    separator = ChevronRight,
    showHome = true,
    maxItems = null,
    customClass = '',
    enableSchema = true,
  } = $props();

  // Variant classes yang lebih dinamis
  const variantClasses = {
    light: {
      nav: 'bg-white/80 backdrop-blur-md border border-white/20',
      link: 'text-gray-600 hover:text-primary-500',
      active: 'text-gray-900 font-semibold',
      separator: 'text-gray-400',
      icon: 'text-gray-500',
    },
    dark: {
      nav: 'bg-white/10 backdrop-blur-md border border-white/20',
      link: 'text-white/70 hover:text-white',
      active: 'text-white font-semibold',
      separator: 'text-white/50',
      icon: 'text-white/60',
    },
    transparent: {
      nav: 'bg-transparent',
      link: 'text-gray-600 hover:text-primary-500',
      active: 'text-gray-900 font-semibold',
      separator: 'text-gray-400',
      icon: 'text-gray-500',
    },
    solid: {
      nav: 'bg-gray-100 border border-gray-200',
      link: 'text-gray-600 hover:text-primary-500',
      active: 'text-primary-600 font-semibold',
      separator: 'text-gray-400',
      icon: 'text-gray-500',
    },
  };

  const classes = variantClasses[variant] || variantClasses.light;

  // Fungsi untuk collapse items jika melebihi maxItems
  const displayItems = $derived.by(() => {
    if (!maxItems || items.length <= maxItems) {
      return items;
    }

    // Tampilkan item pertama, collapse, dan beberapa item terakhir
    const firstItems = items.slice(0, 1);
    const lastItems = items.slice(-(maxItems - 2));
    return [...firstItems, { label: '...', isCollapsed: true }, ...lastItems];
  });

  // Generate JSON-LD schema untuk SEO
  const breadcrumbSchema = $derived.by(() => {
    if (!enableSchema) return null;

    const baseUrl =
      typeof window !== 'undefined' ? window.location.origin : '';
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items
        .filter((item) => !item.isCollapsed)
        .map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          item: item.href ? `${baseUrl}${item.href}` : undefined,
        })),
    };
  });
</script>

{#if enableSchema && breadcrumbSchema}
  {@html `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`}
{/if}

<nav aria-label="Breadcrumb" class="py-2 {customClass}">
  <div class="{classes.nav} rounded-full px-3 md:px-4 py-1.5 md:py-2 inline-flex shadow-sm max-w-full">
    <ol
      class="flex items-center gap-1.5 md:gap-2 flex-wrap"
      itemscope
      itemtype="https://schema.org/BreadcrumbList"
    >
      {#each displayItems as item, index}
        <li
          class="flex items-center gap-1.5 md:gap-2"
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
        >
          {#if index > 0}
            {@const Separator = separator}
            <Separator class="w-3 h-3 md:w-4 md:h-4 {classes.separator}" />
          {/if}

          {#if item.isCollapsed}
            <!-- Collapsed indicator -->
            <span class="{classes.separator} text-sm">
              <MoreHorizontal class="w-4 h-4" />
            </span>
          {:else if item.href}
            <!-- Link item -->
            <a
              href={item.href}
              class="{classes.link} transition-colors duration-200 text-xs md:text-sm font-medium flex items-center gap-1 md:gap-1.5"
              itemprop="item"
            >
              {#if showHome && index === 0}
                <Home class="w-3.5 h-3.5 md:w-4 md:h-4 {classes.icon}" />
              {/if}
              {#if item.icon && index > 0}
                {@const Icon = item.icon}
                <Icon class="w-3.5 h-3.5 md:w-4 md:h-4 {classes.icon}" />
              {/if}
              <span itemprop="name" class="truncate max-w-[80px] sm:max-w-[120px] md:max-w-none">{item.label}</span>
              <meta itemprop="position" content={index + 1} />
            </a>
          {:else}
            <!-- Active/current item -->
            <span
              class="{classes.active} text-xs md:text-sm flex items-center gap-1 md:gap-1.5"
              aria-current="page"
              itemprop="item"
            >
              {#if showHome && index === 0}
                <Home class="w-3.5 h-3.5 md:w-4 md:h-4 {classes.icon}" />
              {/if}
              {#if item.icon && index > 0}
                {@const Icon = item.icon}
                <Icon class="w-3.5 h-3.5 md:w-4 md:h-4 {classes.icon}" />
              {/if}
              <span itemprop="name" class="truncate max-w-[80px] sm:max-w-[120px] md:max-w-none">{item.label}</span>
              <meta itemprop="position" content={index + 1} />
            </span>
          {/if}
        </li>
      {/each}
    </ol>
  </div>
</nav>
