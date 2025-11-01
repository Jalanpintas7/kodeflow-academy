# Breadcrumb Component - Dokumentasi

Komponen Breadcrumb yang reusable dan dinamis dengan fitur lengkap untuk navigasi yang lebih baik dan SEO-friendly.

## 📋 Fitur

- ✅ **Dinamis & Reusable** - Mudah digunakan di berbagai halaman
- ✅ **4 Variant Style** - Light, Dark, Transparent, Solid
- ✅ **Icon Support** - Tambahkan icon custom di setiap item
- ✅ **Home Icon** - Otomatis menampilkan icon home di item pertama
- ✅ **Custom Separator** - Ubah separator sesuai kebutuhan
- ✅ **Max Items dengan Collapse** - Otomatis collapse jika terlalu banyak items
- ✅ **SEO Optimized** - JSON-LD schema markup untuk search engines
- ✅ **Accessibility** - ARIA labels dan semantic HTML
- ✅ **Custom Class** - Tambahkan custom styling

## 🚀 Penggunaan Dasar

```svelte
<script>
  import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';

  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Daftar Materi', href: '/#materials' },
    { label: 'Web & Mobile App Development', href: null },
  ];
</script>

<Breadcrumb items={breadcrumbItems} />
```

## 📖 Props

| Prop | Type | Default | Deskripsi |
|------|------|---------|-----------|
| `items` | Array | `[]` | Array of breadcrumb items `[{ label, href, icon }]` |
| `variant` | String | `'light'` | Style variant: `'light'`, `'dark'`, `'transparent'`, `'solid'` |
| `separator` | Component | `ChevronRight` | Custom separator icon component |
| `showHome` | Boolean | `true` | Tampilkan icon home di item pertama |
| `maxItems` | Number | `null` | Maximum items yang ditampilkan (sisanya akan di-collapse) |
| `customClass` | String | `''` | Custom class tambahan untuk container |
| `enableSchema` | Boolean | `true` | Enable JSON-LD schema markup untuk SEO |

## 💡 Contoh Penggunaan

### 1. Breadcrumb dengan Variant Dark

```svelte
<Breadcrumb items={breadcrumbItems} variant="dark" />
```

### 2. Breadcrumb dengan Icon Custom

```svelte
<script>
  import { Gamepad2, Code, Layout } from 'lucide-svelte';
  
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Game Dev', href: '/game-dev', icon: Gamepad2 },
    { label: 'Unity Tutorial', href: null, icon: Code },
  ];
</script>

<Breadcrumb items={breadcrumbItems} />
```

### 3. Breadcrumb Tanpa Home Icon

```svelte
<Breadcrumb items={breadcrumbItems} showHome={false} />
```

### 4. Breadcrumb dengan Custom Separator

```svelte
<script>
  import { ArrowRight } from 'lucide-svelte';
</script>

<Breadcrumb items={breadcrumbItems} separator={ArrowRight} />
```

### 5. Breadcrumb dengan Max Items (Collapse)

```svelte
<!-- Jika ada 10 items, hanya tampilkan 5 items dengan collapse di tengah -->
<Breadcrumb items={breadcrumbItems} maxItems={5} />
```

### 6. Breadcrumb Transparent Style

```svelte
<Breadcrumb items={breadcrumbItems} variant="transparent" />
```

### 7. Breadcrumb dengan Custom Class

```svelte
<Breadcrumb items={breadcrumbItems} customClass="mb-8" />
```

### 8. Breadcrumb Tanpa SEO Schema

```svelte
<Breadcrumb items={breadcrumbItems} enableSchema={false} />
```

## 🎨 Variants

### Light (Default)
- Background: White dengan blur
- Text: Gray dengan hover primary
- Best for: Halaman dengan background terang

### Dark
- Background: White/10 dengan blur
- Text: White dengan opacity
- Best for: Hero sections dengan background gelap/gradient

### Transparent
- Background: Transparent
- Text: Gray dengan hover primary
- Best for: Overlay di atas gambar

### Solid
- Background: Gray 100
- Text: Gray dengan active primary
- Best for: Dashboard atau admin panel

## 📦 Item Structure

Setiap item dalam array `items` memiliki struktur:

```javascript
{
  label: 'Label Text',    // Required: Text yang ditampilkan
  href: '/path',          // Optional: URL link (null = active/current)
  icon: IconComponent,    // Optional: Lucide icon component
}
```

## 🔍 SEO Benefits

Komponen ini secara otomatis generate JSON-LD schema markup yang membantu search engines memahami struktur navigasi website Anda. Ini bisa meningkatkan tampilan di search results dengan breadcrumb yang rich.

## ♿ Accessibility

- Menggunakan semantic HTML `<nav>`, `<ol>`, `<li>`
- ARIA labels untuk screen readers
- `aria-current="page"` untuk halaman aktif
- Schema.org microdata untuk better semantics

## 🎯 Tips & Best Practices

1. **Jangan terlalu panjang** - Gunakan `maxItems` jika breadcrumb lebih dari 5-6 items
2. **Konsisten** - Gunakan variant yang sama di seluruh website
3. **Icon optional** - Hanya gunakan icon jika memang menambah clarity
4. **SEO enabled** - Biarkan `enableSchema={true}` untuk SEO benefits
5. **Last item tidak perlu href** - Item terakhir (current page) set `href: null`

## 🔄 Migration dari Versi Lama

Jika Anda menggunakan versi Breadcrumb sebelumnya, tidak ada breaking changes. Semua props lama masih compatible:

```svelte
<!-- Versi Lama - Masih berfungsi -->
<Breadcrumb items={breadcrumbItems} variant="dark" />

<!-- Versi Baru - Dengan fitur tambahan -->
<Breadcrumb 
  items={breadcrumbItems} 
  variant="dark"
  showHome={true}
  maxItems={5}
/>
```

## 🐛 Troubleshooting

**Icon tidak muncul?**
- Pastikan Anda import icon dari `lucide-svelte`
- Pastikan icon ditempatkan di property `icon` dalam item object

**Schema markup error?**
- Set `enableSchema={false}` jika ada conflict dengan schema lain
- Pastikan tidak ada duplicate schema di halaman yang sama

**Styling tidak sesuai?**
- Gunakan `customClass` untuk override styling
- Atau buat custom variant di `variantClasses` object

