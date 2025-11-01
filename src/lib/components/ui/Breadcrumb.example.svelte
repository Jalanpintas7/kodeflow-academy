<script>
  import Breadcrumb from './Breadcrumb.svelte';
  import {
    Gamepad2,
    Code,
    ArrowRight,
    Slash,
    Database,
    Settings,
  } from 'lucide-svelte';

  // Contoh 1: Basic breadcrumb
  const basicItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Daftar Materi', href: '/#materials' },
    { label: 'Web Development', href: null },
  ];

  // Contoh 2: Breadcrumb dengan icon
  const itemsWithIcons = [
    { label: 'Home', href: '/' },
    { label: 'Game Dev', href: '/game-dev', icon: Gamepad2 },
    { label: 'Unity Tutorial', href: null, icon: Code },
  ];

  // Contoh 3: Long breadcrumb untuk collapse demo
  const longItems = [
    { label: 'Home', href: '/' },
    { label: 'Courses', href: '/courses' },
    { label: 'Programming', href: '/courses/programming' },
    { label: 'Web Development', href: '/courses/programming/web' },
    { label: 'Frontend', href: '/courses/programming/web/frontend' },
    { label: 'React', href: '/courses/programming/web/frontend/react' },
    { label: 'Hooks', href: null },
  ];

  // Contoh 4: Database breadcrumb
  const databaseItems = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Settings', href: '/dashboard/settings', icon: Settings },
    { label: 'Database', href: null, icon: Database },
  ];
</script>

<div class="min-h-screen bg-gray-50 py-12">
  <div class="container mx-auto px-6 space-y-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Breadcrumb Component Examples
      </h1>
      <p class="text-gray-600 text-lg">
        Komponen Breadcrumb yang reusable dan dinamis dengan berbagai fitur
      </p>
    </div>

    <!-- Section 1: Variants -->
    <section class="bg-white rounded-2xl p-8 shadow-lg">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">
        1. Breadcrumb Variants
      </h2>

      <div class="space-y-8">
        <!-- Light Variant -->
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">
            Light Variant (Default)
          </h3>
          <Breadcrumb items={basicItems} variant="light" />
        </div>

        <!-- Dark Variant with dark background -->
        <div class="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl p-6">
          <h3 class="text-lg font-semibold text-white mb-3">Dark Variant</h3>
          <Breadcrumb items={basicItems} variant="dark" />
        </div>

        <!-- Transparent Variant -->
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">
            Transparent Variant
          </h3>
          <Breadcrumb items={basicItems} variant="transparent" />
        </div>

        <!-- Solid Variant -->
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">Solid Variant</h3>
          <Breadcrumb items={basicItems} variant="solid" />
        </div>
      </div>
    </section>

    <!-- Section 2: Icon Features -->
    <section class="bg-white rounded-2xl p-8 shadow-lg">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">2. Icon Features</h2>

      <div class="space-y-8">
        <!-- With Home Icon (Default) -->
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">
            With Home Icon (Default)
          </h3>
          <Breadcrumb items={itemsWithIcons} showHome={true} />
        </div>

        <!-- Without Home Icon -->
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">
            Without Home Icon
          </h3>
          <Breadcrumb items={itemsWithIcons} showHome={false} />
        </div>

        <!-- Custom Icons in Items -->
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">
            Custom Icons per Item
          </h3>
          <Breadcrumb items={databaseItems} />
        </div>
      </div>
    </section>

    <!-- Section 3: Custom Separators -->
    <section class="bg-white rounded-2xl p-8 shadow-lg">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">
        3. Custom Separators
      </h2>

      <div class="space-y-8">
        <!-- Arrow Right Separator -->
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">
            Arrow Right Separator
          </h3>
          <Breadcrumb items={basicItems} separator={ArrowRight} />
        </div>

        <!-- Slash Separator -->
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">
            Slash Separator
          </h3>
          <Breadcrumb items={basicItems} separator={Slash} />
        </div>
      </div>
    </section>

    <!-- Section 4: Max Items with Collapse -->
    <section class="bg-white rounded-2xl p-8 shadow-lg">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">
        4. Max Items with Auto Collapse
      </h2>

      <div class="space-y-8">
        <!-- Full Breadcrumb -->
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">
            Full Breadcrumb (7 items)
          </h3>
          <Breadcrumb items={longItems} />
        </div>

        <!-- Collapsed to 5 items -->
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">
            Collapsed to 5 items
          </h3>
          <Breadcrumb items={longItems} maxItems={5} />
        </div>

        <!-- Collapsed to 3 items -->
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">
            Collapsed to 3 items
          </h3>
          <Breadcrumb items={longItems} maxItems={3} />
        </div>
      </div>
    </section>

    <!-- Section 5: Custom Class -->
    <section class="bg-white rounded-2xl p-8 shadow-lg">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">5. Custom Styling</h2>

      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">
            With Custom Class (margin bottom)
          </h3>
          <Breadcrumb items={basicItems} customClass="mb-8" />
          <p class="text-gray-500 text-sm">Konten di bawah breadcrumb</p>
        </div>
      </div>
    </section>

    <!-- Section 6: SEO Schema -->
    <section class="bg-white rounded-2xl p-8 shadow-lg">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">6. SEO Features</h2>

      <div class="space-y-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">
            With SEO Schema (Default)
          </h3>
          <Breadcrumb items={basicItems} enableSchema={true} />
          <p class="text-gray-500 text-sm mt-2">
            ✅ Includes JSON-LD schema markup for search engines
          </p>
        </div>

        <div>
          <h3 class="text-lg font-semibold text-gray-700 mb-3">
            Without SEO Schema
          </h3>
          <Breadcrumb items={basicItems} enableSchema={false} />
          <p class="text-gray-500 text-sm mt-2">
            ❌ No schema markup included
          </p>
        </div>
      </div>
    </section>

    <!-- Code Example -->
    <section class="bg-gray-900 rounded-2xl p-8 shadow-lg">
      <h2 class="text-2xl font-bold text-white mb-6">7. Code Example</h2>

      <pre class="bg-gray-800 rounded-lg p-6 overflow-x-auto"><code
          class="text-green-400 text-sm"
        >{`<script>
  import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';

  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Daftar Materi', href: '/#materials' },
    { label: 'Web Development', href: null },
  ];
</script>

<Breadcrumb items={breadcrumbItems} variant="dark" />
`}</code></pre>
    </section>
  </div>
</div>

