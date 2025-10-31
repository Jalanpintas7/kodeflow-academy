# Hero Component - Panduan Penggunaan

## Cara Menambahkan Gambar

### 1. Simpan Gambar Anak
Simpan gambar anak (dengan headphone, tas, dll) di folder `static/images/` dengan nama misalnya `hero-kid.png` atau `hero-kid.jpg`

### 2. Update Component Hero.svelte

Ganti bagian placeholder di line ~103-115 dengan:

```svelte
<!-- Main image -->
<div class="relative mt-12 lg:mt-0">
    <div class="relative w-full aspect-3/4 max-w-md mx-auto">
        <img 
            src="/images/hero-kid.png" 
            alt="Happy student with headphones" 
            class="w-full h-full object-cover rounded-3xl shadow-2xl"
        />
    </div>
</div>
```

### 3. Atau Gunakan Props

Modifikasi component untuk menerima props:

```svelte
<script>
    let { 
        heroImage = '/images/hero-kid.png',
        title = "Kids' Language School",
        description = "Learn to express yourself in English...",
        studentCount = 489
    } = $props();
</script>
```

## Customisasi Warna

Warna utama yang digunakan:
- **Purple**: `from-purple-700 via-purple-600 to-purple-800`
- **Lime/Neon Green**: `bg-lime-400`, `hover:bg-lime-500`
- **White decorative**: `text-white opacity-40`

Untuk mengganti warna, cari dan replace class Tailwind CSS yang sesuai.

## Responsive Design

Component sudah responsive dengan breakpoints:
- Mobile: Single column, stacked layout
- Tablet (lg): Two column grid layout
- Desktop: Optimized spacing and sizing

## Animasi

Terdapat subtle floating animation pada section. Untuk menonaktifkan, hapus bagian style di bawah component.

