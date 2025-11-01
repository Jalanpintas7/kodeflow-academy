# 🎨 Panduan Theme Color System

Sistem warna theme yang mudah di-maintenance untuk Kodeflow Academy Website.

## 📋 Daftar Isi

- [Warna yang Tersedia](#warna-yang-tersedia)
- [Cara Menggunakan](#cara-menggunakan)
- [Contoh Penggunaan](#contoh-penggunaan)
- [Cara Mengubah Warna](#cara-mengubah-warna)

---

## 🎨 Warna yang Tersedia

### 1. **Primary (Warna Utama Brand)** - `#701F9B`

Warna ungu yang menjadi identitas utama brand.

```
primary-50  → primary-900 (dari paling terang ke paling gelap)
```

### 2. **Secondary (Warna Pendukung)**

Warna biru yang melengkapi warna primary.

```
secondary-50 → secondary-900
```

### 3. **Accent (Warna Aksen)**

Warna kuning/oranye untuk highlight dan perhatian.

```
accent-50 → accent-900
```

### 4. **Success (Warna Sukses)**

Warna hijau untuk notifikasi sukses.

```
success-50 → success-900
```

### 5. **Warning (Warna Peringatan)**

Warna kuning untuk peringatan.

```
warning-50 → warning-900
```

### 6. **Error (Warna Error)**

Warna merah untuk error dan bahaya.

```
error-50 → error-900
```

### 7. **Neutral (Warna Netral)**

Warna abu-abu untuk teks dan background netral.

```
neutral-50 → neutral-900
```

---

## 🚀 Cara Menggunakan

### Di Tailwind CSS Classes

#### Background Colors

```html
<!-- Primary colors -->
<div class="bg-primary-500">Warna Primary Utama</div>
<div class="bg-primary-100">Warna Primary Terang</div>
<div class="bg-primary-900">Warna Primary Gelap</div>

<!-- Secondary colors -->
<button class="bg-secondary-500 hover:bg-secondary-600">
  Button Secondary
</button>

<!-- Accent colors -->
<div class="bg-accent-400">Highlight Box</div>
```

#### Text Colors

```html
<h1 class="text-primary-500">Judul dengan warna Primary</h1>
<p class="text-neutral-700">Paragraph dengan warna abu-abu</p>
<span class="text-success-600">Teks sukses</span>
<span class="text-error-500">Teks error</span>
```

#### Border Colors

```html
<div class="border border-primary-500">Box dengan border primary</div>
<input class="border-2 border-secondary-300 focus:border-secondary-500" />
```

#### Gradient

```html
<div class="bg-linear-to-r from-primary-500 to-secondary-500">
  Gradient Background
</div>
```

### Di Svelte Component Styles

#### Menggunakan CSS Variables

```svelte
<style>
  .custom-button {
    background-color: var(--color-primary-500);
    color: white;
  }

  .custom-button:hover {
    background-color: var(--color-primary-600);
  }

  .header {
    background: linear-gradient(
      to right,
      var(--color-primary-500),
      var(--color-secondary-500)
    );
  }
</style>

<button class="custom-button">
  Click Me
</button>
```

---

## 💡 Contoh Penggunaan Lengkap

### 1. Button Component

```svelte
<!-- Primary Button -->
<button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg transition-colors">
  Primary Button
</button>

<!-- Secondary Button -->
<button class="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg">
  Secondary Button
</button>

<!-- Outline Button -->
<button class="border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-6 py-3 rounded-lg">
  Outline Button
</button>
```

### 2. Card Component

```svelte
<div class="bg-white border border-neutral-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
  <h3 class="text-primary-500 text-2xl font-bold mb-4">
    Card Title
  </h3>
  <p class="text-neutral-600 mb-4">
    Card description text here
  </p>
  <button class="bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded">
    Learn More
  </button>
</div>
```

### 3. Alert/Notification

```svelte
<!-- Success Alert -->
<div class="bg-success-50 border-l-4 border-success-500 p-4 rounded">
  <p class="text-success-700">Success! Your action was completed.</p>
</div>

<!-- Warning Alert -->
<div class="bg-warning-50 border-l-4 border-warning-500 p-4 rounded">
  <p class="text-warning-700">Warning! Please review your input.</p>
</div>

<!-- Error Alert -->
<div class="bg-error-50 border-l-4 border-error-500 p-4 rounded">
  <p class="text-error-700">Error! Something went wrong.</p>
</div>
```

### 4. Navbar

```svelte
<nav class="bg-primary-500 text-white shadow-lg">
  <div class="container mx-auto px-4">
    <div class="flex items-center justify-between h-16">
      <div class="text-2xl font-bold">Logo</div>
      <div class="flex space-x-6">
        <a href="/" class="hover:text-accent-300 transition-colors">Home</a>
        <a href="/about" class="hover:text-accent-300">About</a>
        <a href="/contact" class="hover:text-accent-300">Contact</a>
      </div>
    </div>
  </div>
</nav>
```

### 5. Hero Section

```svelte
<section class="bg-linear-to-br from-primary-500 via-primary-600 to-secondary-600 text-white py-20">
  <div class="container mx-auto px-4 text-center">
    <h1 class="text-5xl font-bold mb-6">
      Welcome to Kodeflow Academy
    </h1>
    <p class="text-xl text-primary-50 mb-8">
      Learn coding with fun and creative way
    </p>
    <button class="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105">
      Get Started
    </button>
  </div>
</section>
```

---

## 🔧 Cara Mengubah Warna

Semua warna terpusat di file **`src/app.css`**. Untuk mengubah warna:

### 1. Mengubah Primary Color

Buka `src/app.css` dan cari section `/* Primary Colors */`:

```css
@theme {
  /* Primary Colors - Warna Utama Brand */
  --color-primary-500: #701f9b; /* ← Ubah warna di sini */

  /* Atau ubah semua shade-nya: */
  --color-primary-50: #f5e6ff;
  --color-primary-100: #e6ccff;
  /* ... dst */
}
```

### 2. Menambah Warna Custom Baru

Tambahkan di section `@theme`:

```css
@theme {
  /* Custom Colors - Warna Kustom Anda */
  --color-custom-50: #your-color-50;
  --color-custom-100: #your-color-100;
  --color-custom-500: #your-main-color;
  --color-custom-900: #your-color-900;
}
```

Kemudian gunakan di Tailwind:

```html
<div class="bg-custom-500 text-custom-50">Custom Color</div>
```

### 3. Tool untuk Generate Color Palette

Gunakan tools berikut untuk generate shade warna (50-900):

- https://uicolors.app/create
- https://tailwindshades.com/
- https://www.tints.dev/

Cukup masukkan warna primary Anda (#701F9B), dan tool akan generate semua shade-nya!

---

## 📚 Best Practices

### ✅ DO (Yang Harus Dilakukan)

- ✅ Gunakan warna dari theme system
- ✅ Konsisten dengan primary color untuk brand
- ✅ Gunakan neutral colors untuk teks body
- ✅ Gunakan semantic colors (success, warning, error) sesuai konteks
- ✅ Gunakan hover states untuk interaktivitas

### ❌ DON'T (Yang Harus Dihindari)

- ❌ Jangan hardcode warna (contoh: `bg-[#701F9B]`)
- ❌ Jangan gunakan terlalu banyak warna dalam satu halaman
- ❌ Jangan gunakan primary color untuk semua elemen
- ❌ Jangan lupa accessibility (kontras warna untuk teks)

---

## 🎯 Quick Reference

### Warna Umum yang Sering Dipakai

```
Button Primary    → bg-primary-500 hover:bg-primary-600
Button Secondary  → bg-secondary-500 hover:bg-secondary-600
Button Outline    → border-primary-500 text-primary-500

Text Heading      → text-primary-500 atau text-neutral-900
Text Body         → text-neutral-700
Text Muted        → text-neutral-500

Background Light  → bg-neutral-50
Background Card   → bg-white
Border Light      → border-neutral-200
```

---

## 🆘 Troubleshooting

**Warna tidak muncul?**

1. Pastikan development server sudah restart: `npm run dev`
2. Clear cache browser (Ctrl + Shift + R)
3. Pastikan Tailwind CSS sudah ter-install

**Warna tidak sesuai?**

1. Cek di `src/app.css` bagian `@theme`
2. Pastikan menggunakan nama yang benar (contoh: `primary-500` bukan `primary`)

---

## 📞 Support

Jika ada pertanyaan atau butuh bantuan, silakan hubungi tim developer!

**Happy Coding! 🚀**
