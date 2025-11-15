# 📁 Struktur Folder Kodeflow Academy

> Dokumentasi struktur folder project yang sudah direorganisasi untuk maintainability dan scalability yang lebih baik.

## 🗂️ Struktur Lengkap

```
kodeflow-academy/
├── src/
│   ├── lib/
│   │   ├── assets/
│   │   │   ├── favicon.svg
│   │   │   ├── logo/               # Logo assets
│   │   │   │   ├── favicon.png
│   │   │   │   ├── favicon.svg
│   │   │   │   ├── k.png
│   │   │   │   ├── logo.png
│   │   │   │   ├── logo&teks.png
│   │   │   │   └── logopng.png
│   │   │   └── images/
│   │   │       ├── hero/           # Hero section images
│   │   │       │   └── hero-child.png
│   │   │       ├── materi/         # Course material images
│   │   │       │   ├── appdev.png
│   │   │       │   ├── digitalmarketing.png
│   │   │       │   ├── ff.png
│   │   │       │   ├── flutterflow.png
│   │   │       │   ├── gamedev.png
│   │   │       │   ├── scratch.png
│   │   │       │   ├── thunkable.png
│   │   │       │   └── ux.png
│   │   │       ├── programs/       # Program level images
│   │   │       │   ├── sd.webp
│   │   │       │   ├── smp.webp
│   │   │       │   └── sma.webp
│   │   │       └── teachers/       # Teachers section images
│   │   │           └── school.webp
│   │   │
│   │   └── components/
│   │       ├── ui/                 # UI/Layout Components
│   │       │   ├── Navbar.svelte   # Navigation bar dengan glassmorphism
│   │       │   ├── Footer.svelte   # Footer dengan contact info
│   │       │   └── Breadcrumb.svelte # Breadcrumb navigation
│   │       │
│   │       ├── sections/           # Page Section Components
│   │       │   ├── Hero.svelte     # Landing hero section
│   │       │   ├── Programs.svelte # Program tingkatan (SD, SMP, SMA)
│   │       │   ├── TeachingMethod.svelte # Metode pengajaran
│   │       │   ├── Materials.svelte # Daftar materi pembelajaran
│   │       │   ├── Teachers.svelte  # Section untuk sekolah & yayasan
│   │       │   └── FAQ.svelte      # Frequently Asked Questions
│   │       │
│   │       ├── common/             # Utility/Reusable Components
│   │       │   ├── ScrollReveal.svelte # Scroll animation wrapper
│   │       │   └── CountUp.svelte   # Animated number counter
│   │       │
│   │       └── README.md
│   │
│   ├── routes/
│   │   ├── +layout.svelte          # Layout utama dengan Navbar
│   │   ├── +page.svelte            # Homepage
│   │   ├── color-preview/          # Color theme preview
│   │   │   └── +page.svelte
│   │   └── materi/
│   │       ├── web-mobile-app/     # Overview Web & Mobile App
│   │       │   └── +page.svelte
│   │       └── detail/             # ✨ Detail pages materi
│   │           └── scratch/        # Detail Scratch untuk SD
│   │               └── +page.svelte
│   │
│   ├── app.css                     # Global styles & Tailwind config
│   └── app.html                    # HTML template
│
├── static/
│   └── robots.txt
│
├── package.json
├── svelte.config.js
├── vite.config.js
└── README.md
```

---

## 📂 Penjelasan Struktur

### 1. **`src/lib/assets/`** - Asset Management

#### **`images/`** - Semua gambar diorganisir berdasarkan fungsi

- **`hero/`** - Gambar untuk hero section
- **`materi/`** - Screenshot/icon untuk berbagai materi pembelajaran
- **`programs/`** - Gambar untuk program SD, SMP, SMA
- **`teachers/`** - Gambar untuk section teachers/sekolah

#### **`logo/`** - Brand assets & logo variations

- Multiple format logo untuk berbagai kebutuhan

#### **`favicon.svg`** - Icon website

---

### 2. **`src/lib/components/`** - Komponen Svelte

#### **`ui/`** - UI & Layout Components

Komponen yang berkaitan dengan struktur dan navigation website:

- **`Navbar.svelte`** - Navigation bar dengan:
  - Glassmorphism effect
  - Scroll spy active state
  - Pill-style active links
  - Mobile responsive menu
- **`Footer.svelte`** - Footer dengan:
  - Contact information
  - Social media links
  - Office locations
- **`Breadcrumb.svelte`** - Breadcrumb navigation dengan:
  - Light & dark variants
  - Glassmorphism styling

#### **`sections/`** - Page Section Components

Komponen untuk section-section di homepage:

- **`Hero.svelte`** - Hero landing section
- **`TeachingMethod.svelte`** - Bento grid metode pengajaran
- **`Programs.svelte`** - Program tingkatan sekolah
- **`Teachers.svelte`** - Info untuk sekolah & yayasan
- **`Materials.svelte`** - Grid materi pembelajaran
- **`FAQ.svelte`** - Frequently asked questions

#### **`common/`** - Utility Components

Komponen reusable yang digunakan di banyak tempat:

- **`ScrollReveal.svelte`** - Scroll animation wrapper
  - Support 6 animation types
  - Intersection Observer API
  - Configurable delay & threshold
- **`CountUp.svelte`** - Animated counter
  - Smooth counting animation
  - Customizable duration & easing

---

### 3. **`src/routes/`** - SvelteKit Routes

#### **`+layout.svelte`** - Root layout

- Import global CSS
- Navbar component
- Favicon

#### **`+page.svelte`** - Homepage

- Compose semua section components

#### **`materi/web-mobile-app/`** - Detail Page

- Halaman detail untuk Web & Mobile App Development
- Showcase Scratch, Thunkable, FlutterFlow

---

## 🎯 Keuntungan Struktur Baru

### ✅ **Maintainability**

- Mudah mencari dan edit komponen
- Kategori yang jelas (ui, sections, common)
- Assets terorganisir berdasarkan fungsi

### ✅ **Scalability**

- Mudah menambah komponen baru
- Pattern yang konsisten
- Easy to onboard new developers

### ✅ **Import Paths yang Jelas**

```javascript
// UI Components
import Navbar from '$lib/components/ui/Navbar.svelte';
import Footer from '$lib/components/ui/Footer.svelte';

// Section Components
import Hero from '$lib/components/sections/Hero.svelte';
import FAQ from '$lib/components/sections/FAQ.svelte';

// Common/Utility Components
import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
import CountUp from '$lib/components/common/CountUp.svelte';

// Images
import heroImage from '$lib/assets/images/hero/hero-child.png';
import teacherImage from '$lib/assets/images/teachers/school.webp';
```

### ✅ **SEO Friendly Routes**

- `/` - Homepage
- `/materi/web-mobile-app` - Web & Mobile App detail
- Future: `/materi/game-development`, `/materi/ui-ux`, dll

---

## 📝 Naming Conventions

### **Components**

- PascalCase: `Hero.svelte`, `ScrollReveal.svelte`
- Descriptive names yang jelas

### **Routes**

- kebab-case: `web-mobile-app`, `game-development`
- Descriptive dan SEO-friendly

### **Images**

- kebab-case: `hero-child.png`, `school.webp`
- Organized in subfolders

---

## 🔄 Migration Guide

Jika ada import yang perlu diupdate:

### Before:

```javascript
import Navbar from '$lib/components/Navbar.svelte';
import Hero from '$lib/components/Hero.svelte';
import ScrollReveal from '$lib/components/ScrollReveal.svelte';
```

### After:

```javascript
import Navbar from '$lib/components/ui/Navbar.svelte';
import Hero from '$lib/components/sections/Hero.svelte';
import ScrollReveal from '$lib/components/common/ScrollReveal.svelte';
```

---

## 📊 Component Categories

| Category      | Purpose             | Components                                               |
| ------------- | ------------------- | -------------------------------------------------------- |
| **ui/**       | Navigation & Layout | Navbar, Footer, Breadcrumb                               |
| **sections/** | Page Sections       | Hero, Programs, Materials, Teachers, TeachingMethod, FAQ |
| **common/**   | Reusable Utilities  | ScrollReveal, CountUp                                    |

---

Struktur ini mengikuti **best practices** untuk SvelteKit projects dan siap untuk scale! 🚀
