<script>
  const colors = {
    primary: [
      { shade: '50', hex: '#f5f0ff', name: 'Lightest Purple' },
      { shade: '100', hex: '#ede5ff' },
      { shade: '200', hex: '#dccfff' },
      { shade: '300', hex: '#c3a9ff' },
      { shade: '400', hex: '#a678ff' },
      { shade: '500', hex: '#701F9B', name: 'Brand Purple ⭐' },
      { shade: '600', hex: '#5d1980' },
      { shade: '700', hex: '#4a1366' },
      { shade: '800', hex: '#370d4d' },
      { shade: '900', hex: '#240833', name: 'Darkest Purple' },
    ],
    secondary: [
      { shade: '50', hex: '#fefce8', name: 'Lightest Gold' },
      { shade: '100', hex: '#fef9c3' },
      { shade: '200', hex: '#fef08a' },
      { shade: '300', hex: '#fde047' },
      { shade: '400', hex: '#facc15' },
      { shade: '500', hex: '#f0c932', name: 'Brand Gold ⭐' },
      { shade: '600', hex: '#ca8a04' },
      { shade: '700', hex: '#a16207' },
      { shade: '800', hex: '#854d0e' },
      { shade: '900', hex: '#713f12', name: 'Darkest Gold' },
    ],
    accent: [
      { shade: '50', hex: '#f7fee7', name: 'Lightest Lime' },
      { shade: '100', hex: '#ecfccb' },
      { shade: '200', hex: '#d9f99d' },
      { shade: '300', hex: '#bef264' },
      { shade: '400', hex: '#a3e635' },
      { shade: '500', hex: '#84cc16', name: 'Brand Lime ⭐' },
      { shade: '600', hex: '#65a30d' },
      { shade: '700', hex: '#4d7c0f' },
      { shade: '800', hex: '#3f6212' },
      { shade: '900', hex: '#365314', name: 'Darkest Lime' },
    ],
  };
</script>

<svelte:head>
  <title>Color Theme Preview - Kodeflow Academy</title>
</svelte:head>

<div class="min-h-screen bg-neutral-50 py-16">
  <div class="container mx-auto px-6 lg:px-12">
    <div class="text-center mb-12">
      <h1 class="text-5xl font-bold text-gray-900 mb-4">
        🎨 Kodeflow Academy Color Theme
      </h1>
      <p class="text-xl text-gray-600">
        Sistem warna yang cohesive dan harmonis
      </p>
    </div>

    <!-- Brand Colors Showcase -->
    <div class="grid md:grid-cols-3 gap-8 mb-16">
      <div class="bg-primary-500 rounded-3xl p-8 text-center text-white shadow-2xl">
        <div class="text-6xl mb-4">🟣</div>
        <h3 class="text-2xl font-bold mb-2">Primary Purple</h3>
        <p class="text-white/80">#701F9B</p>
        <p class="mt-4 text-sm">Brand Identity</p>
      </div>
      <div class="bg-secondary-500 rounded-3xl p-8 text-center text-black shadow-2xl">
        <div class="text-6xl mb-4">🟡</div>
        <h3 class="text-2xl font-bold mb-2">Secondary Gold</h3>
        <p class="text-black/80">#f0c932</p>
        <p class="mt-4 text-sm">CTA & Highlights</p>
      </div>
      <div class="bg-accent-500 rounded-3xl p-8 text-center text-white shadow-2xl">
        <div class="text-6xl mb-4">🟢</div>
        <h3 class="text-2xl font-bold mb-2">Accent Lime</h3>
        <p class="text-white/80">#84cc16</p>
        <p class="mt-4 text-sm">Energy & Fresh</p>
      </div>
    </div>

    <!-- Color Palettes -->
    <div class="space-y-12">
      <!-- Primary Colors -->
      <div>
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Primary - Purple</h2>
        <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {#each colors.primary as color}
            <div class="space-y-2">
              <div
                class="h-24 rounded-xl shadow-lg"
                style="background-color: {color.hex}"
              ></div>
              <div class="text-center">
                <p class="font-bold text-sm">{color.shade}</p>
                <p class="text-xs text-gray-600">{color.hex}</p>
                {#if color.name}
                  <p class="text-xs text-primary-600 font-semibold mt-1">
                    {color.name}
                  </p>
                {/if}
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Secondary Colors -->
      <div>
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Secondary - Gold</h2>
        <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {#each colors.secondary as color}
            <div class="space-y-2">
              <div
                class="h-24 rounded-xl shadow-lg"
                style="background-color: {color.hex}"
              ></div>
              <div class="text-center">
                <p class="font-bold text-sm">{color.shade}</p>
                <p class="text-xs text-gray-600">{color.hex}</p>
                {#if color.name}
                  <p class="text-xs text-secondary-600 font-semibold mt-1">
                    {color.name}
                  </p>
                {/if}
              </div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Accent Colors -->
      <div>
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Accent - Lime</h2>
        <div class="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
          {#each colors.accent as color}
            <div class="space-y-2">
              <div
                class="h-24 rounded-xl shadow-lg"
                style="background-color: {color.hex}"
              ></div>
              <div class="text-center">
                <p class="font-bold text-sm">{color.shade}</p>
                <p class="text-xs text-gray-600">{color.hex}</p>
                {#if color.name}
                  <p class="text-xs text-accent-600 font-semibold mt-1">
                    {color.name}
                  </p>
                {/if}
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>

    <!-- Usage Examples -->
    <div class="mt-16">
      <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">
        Component Examples
      </h2>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Buttons -->
        <div class="bg-white rounded-3xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold mb-6">Buttons</h3>
          <div class="space-y-4">
            <button
              class="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold px-6 py-3 rounded-full transition-all"
            >
              Primary Button
            </button>
            <button
              class="w-full bg-secondary-500 hover:bg-secondary-600 text-black font-bold px-6 py-3 rounded-full transition-all"
            >
              Secondary CTA Button
            </button>
            <button
              class="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold px-6 py-3 rounded-full transition-all"
            >
              Accent Button
            </button>
            <button
              class="w-full border-2 border-primary-500 text-primary-500 hover:bg-primary-50 font-bold px-6 py-3 rounded-full transition-all"
            >
              Outline Button
            </button>
          </div>
        </div>

        <!-- Cards -->
        <div class="bg-white rounded-3xl p-8 shadow-lg">
          <h3 class="text-2xl font-bold mb-6">Cards</h3>
          <div class="space-y-4">
            <div class="bg-primary-50 border-l-4 border-primary-500 p-4 rounded-lg">
              <p class="font-semibold text-primary-700">Primary Card</p>
              <p class="text-sm text-neutral-600">With primary accent</p>
            </div>
            <div
              class="bg-secondary-50 border-l-4 border-secondary-500 p-4 rounded-lg"
            >
              <p class="font-semibold text-secondary-700">Secondary Card</p>
              <p class="text-sm text-neutral-600">With gold accent</p>
            </div>
            <div class="bg-accent-50 border-l-4 border-accent-500 p-4 rounded-lg">
              <p class="font-semibold text-accent-700">Accent Card</p>
              <p class="text-sm text-neutral-600">With lime accent</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Back Button -->
    <div class="mt-12 text-center">
      <a
        href="/"
        class="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold"
      >
        ← Kembali ke Homepage
      </a>
    </div>
  </div>
</div>

