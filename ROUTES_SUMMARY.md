# 🗺️ Routes Summary - Kodeflow Academy

> Dokumentasi lengkap semua routes dan halaman yang ada di website

---

## 📍 Site Map

```
/                                    # Homepage
├── /#home                          # Hero section
├── /#about                         # Teaching Method section
├── /#programs                      # Programs by level
├── /#coaches                       # For schools & institutions
├── /#materials                     # Course materials list
└── /#faq                          # FAQ section

/color-preview                       # Color theme preview (Dev tool)

/materi/
├── web-mobile-app/                 # Overview: Web & Mobile App Development
│   ├── Scratch (SD)               # With link to detail
│   ├── Thunkable (SMP)            # With link to detail
│   └── FlutterFlow (SMA)          # With link to detail
│
└── detail/                         # Detail Pages
    ├── scratch/                    # Scratch - Sekolah Dasar
    ├── thunkable/                  # Thunkable - SMP
    └── flutterflow/                # FlutterFlow - SMA
```

---

## 📄 Pages Overview

### **1. Homepage** `/`

**Sections:**
- Hero - Landing dengan stats 489+ students
- Teaching Method - Bento grid 5 methods
- Programs - SD, SMP, SMA, Mahasiswa
- Teachers - Info untuk sekolah & yayasan
- Materials - 7 course materials + CTA
- FAQ - 9 pertanyaan umum
- Footer - Contact & office info

**Components Used:**
- `Hero.svelte`
- `TeachingMethod.svelte`
- `Programs.svelte`
- `Teachers.svelte`
- `Materials.svelte`
- `FAQ.svelte`
- `Footer.svelte`

---

### **2. Web & Mobile App Overview** `/materi/web-mobile-app`

**Purpose:** Halaman overview untuk 3 platform pembelajaran

**Content:**
- Hero section dengan multi-platform highlight
- 3 Program cards:
  - **Scratch** (SD, 6-12 tahun) - Orange-Pink theme
  - **Thunkable** (SMP, 13-15 tahun) - Blue-Cyan theme
  - **FlutterFlow** (SMA, 16-18 tahun) - Purple-Indigo theme

**Navigation:**
- Dari Materials section di homepage
- Button "Lihat Detail" untuk setiap program

---

### **3. Scratch Detail** `/materi/detail/scratch`

**Target:** Sekolah Dasar (6-12 tahun)  
**Theme:** Orange-Pink gradient (Playful & Fun)

**Sections:**
1. **Hero** - Title, description, CTA
2. **Why Scratch** - Image kiri + Content kanan
3. **What Learn & Get** - 2 column cards
4. **Curriculum** - 24 pertemuan (dari total 64)
   - Section 1: Dasar dan Pengenalan (1-12)
   - Section 2: Gerakan dan Kontrol Lanjut (13-24)
5. **CTA** - Call to action
6. **Footer**

**Key Features:**
- Visual block-based coding (MIT platform)
- Game & animation creation
- 64 pertemuan total
- Sertifikat kelulusan

**Breadcrumb:** Beranda → Daftar Materi → Web & Mobile App → Scratch

---

### **4. Thunkable Detail** `/materi/detail/thunkable`

**Target:** Sekolah Menengah Pertama (13-15 tahun)  
**Theme:** Blue-Cyan gradient (Professional & Modern)

**Sections:**
1. **Hero** - Title, description, CTA
2. **Why Thunkable** - Image kiri + Content kanan
3. **Features Grid** - 4 features (Apps, Camera, GPS, Database)
4. **What Learn & Get** - 2 column cards
5. **Curriculum** - 6 modules:
   - Pengenalan Thunkable
   - Logika & Interaksi
   - Database & API
   - Fitur Device & Sensor
   - UI/UX Design
   - Final Project
6. **Projects** - 4 project examples
7. **CTA** - Call to action
8. **Footer**

**Key Features:**
- Android & iOS apps
- Drag-and-drop interface
- Camera, GPS, database integration
- UI/UX design learning

**Breadcrumb:** Beranda → Daftar Materi → Web & Mobile App → Thunkable

---

### **5. FlutterFlow Detail** `/materi/detail/flutterflow`

**Target:** Sekolah Menengah Atas (16-18 tahun)  
**Theme:** Purple-Indigo gradient (Advanced & Powerful)

**Sections:**
1. **Hero** - Title, description, CTA
2. **Why FlutterFlow** - Image kiri + Content kanan
3. **Features Grid** - 4 features (Multi-platform, UI Builder, Backend, Code Export)
4. **What Learn & Get** - 2 column cards
5. **Curriculum** - 8 modules:
   - FlutterFlow Fundamentals
   - Advanced UI/UX Design
   - State Management
   - Backend & Database
   - API Integration
   - Advanced Features
   - Deployment & Publishing
   - Final Capstone Project
6. **Projects** - 4 professional projects
7. **CTA** - Call to action
8. **Footer**

**Key Features:**
- Web, Android & iOS apps
- Professional UI builder
- Firebase/API integration
- Export to Flutter code
- Production deployment

**Breadcrumb:** Beranda → Daftar Materi → Web & Mobile App → FlutterFlow

---

## 🎨 Color Themes per Page

| Page | Age Range | Theme Colors | Gradient | Mood |
|------|-----------|--------------|----------|------|
| **Scratch** | 6-12 | Orange-Pink | `from-orange-400 to-pink-500` | Playful, Creative, Fun |
| **Thunkable** | 13-15 | Blue-Cyan | `from-blue-400 to-cyan-500` | Modern, Tech, Cool |
| **FlutterFlow** | 16-18 | Purple-Indigo | `from-purple-400 to-indigo-600` | Professional, Advanced, Powerful |

---

## 🔗 Navigation Flow

```
Homepage
   │
   ├─→ Materials Section (#materials)
   │      │
   │      └─→ Click "Web Development" card
   │             │
   │             └─→ /materi/web-mobile-app
   │                    │
   │                    ├─→ Sekolah Dasar → /materi/detail/scratch
   │                    ├─→ SMP → /materi/detail/thunkable
   │                    └─→ SMA → /materi/detail/flutterflow
   │
   ├─→ Programs Section (#programs)
   ├─→ About Section (#about)
   ├─→ Coaches Section (#coaches)
   └─→ FAQ Section (#faq)
```

---

## 📊 Component Reusability

### **Shared Components:**

**All Detail Pages Use:**
- `ScrollReveal` - Scroll animations
- `Breadcrumb` - Navigation breadcrumb
- `Footer` - Standard footer

**Layout Pattern (Consistent):**
1. Hero section dengan gradient
2. "Why [Platform]" dengan image + text
3. Features/Learn/Get cards
4. Curriculum/Modules
5. Projects showcase
6. Final CTA
7. Footer

---

## 🎯 SEO & Meta Tags

### **Scratch:**
```html
<title>Belajar Dasar Pemrograman Dengan Scratch - Kodeflow Academy</title>
<meta description="Platform coding visual dari MIT untuk anak SD...">
```

### **Thunkable:**
```html
<title>Belajar Membuat Aplikasi Mobile dengan Thunkable - Kodeflow Academy</title>
<meta description="Platform no-code untuk SMP. Buat aplikasi Android & iOS...">
```

### **FlutterFlow:**
```html
<title>Belajar FlutterFlow - Aplikasi Multi-Platform Professional - Kodeflow Academy</title>
<meta description="Platform no-code untuk SMA. Buat aplikasi Web, Android & iOS...">
```

---

## 📱 WhatsApp Integration

**All pages have WhatsApp CTAs with pre-filled messages:**

- Scratch: `?text=Halo Kodeflow, saya tertarik dengan program Scratch`
- Thunkable: `?text=Halo Kodeflow, saya tertarik dengan program Thunkable`
- FlutterFlow: `?text=Halo Kodeflow, saya tertarik dengan program FlutterFlow`

---

## 🗂️ File Structure

```
src/routes/
├── +layout.svelte                  # Root layout dengan Navbar
├── +page.svelte                    # Homepage
├── color-preview/
│   └── +page.svelte               # Color preview tool
└── materi/
    ├── web-mobile-app/             # Overview page
    │   └── +page.svelte
    └── detail/                     # Detail pages folder
        ├── scratch/                # SD Level
        │   └── +page.svelte
        ├── thunkable/              # SMP Level
        │   └── +page.svelte
        └── flutterflow/            # SMA Level
            └── +page.svelte
```

---

## ✅ Quality Checklist

All pages have:
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Scroll animations with ScrollReveal
- ✅ Glassmorphism effects
- ✅ Gradient themes
- ✅ SEO meta tags
- ✅ WhatsApp integration
- ✅ Breadcrumb navigation
- ✅ Footer
- ✅ No linter errors
- ✅ Accessibility friendly

---

## 🚀 Future Expansion

**Pattern untuk menambah halaman baru:**

1. Create folder: `src/routes/materi/detail/[nama-materi]/`
2. Create file: `+page.svelte`
3. Copy template dari Scratch/Thunkable/FlutterFlow
4. Update:
   - Breadcrumb items
   - Theme colors (gradient)
   - Content (curriculum, features, projects)
   - Meta tags
5. Add link di Materials section atau web-mobile-app

**Suggested Pages:**
- `/materi/detail/game-development`
- `/materi/detail/ui-ux-design`
- `/materi/detail/digital-marketing`
- `/materi/detail/iot-robotics`

---

Total Pages: **7 pages**
- 1 Homepage
- 1 Web & Mobile App overview
- 3 Detail pages (Scratch, Thunkable, FlutterFlow)
- 1 Color preview
- 1 Layout

🎉 Website structure siap untuk production dan future expansion!

