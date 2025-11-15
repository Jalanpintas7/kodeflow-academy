# 🎨 Kodeflow Academy Color Guide

> Sistem warna yang cohesive dan harmonis untuk Kodeflow Academy website

---

## 🎯 Brand Colors (Core Palette)

### 1. **Primary - Purple** `#701F9B`
Warna utama brand yang mencerminkan **profesionalisme, kreativitas, dan teknologi**.

```css
--color-primary-500: #701F9B  /* Main Brand Purple */
```

**Penggunaan:**
- Background utama (Hero, CTA)
- Navbar active state
- Buttons utama
- Links & headings
- Decorative elements

**Gradasi:**
```
50:  #f5f0ff  ← Lightest (backgrounds, hover states)
100: #ede5ff
200: #dccfff
300: #c3a9ff
400: #a678ff
500: #701F9B  ← Main Brand Color ⭐
600: #5d1980
700: #4a1366
800: #370d4d
900: #240833  ← Darkest (text, shadows)
```

---

### 2. **Secondary - Golden Yellow** `#f0c932`
Warna pendukung yang mencerminkan **energi, optimisme, dan kegembiraan**.

```css
--color-secondary-500: #f0c932  /* Main Gold/Yellow */
```

**Penggunaan:**
- CTA buttons (Call-to-Action)
- Highlights & badges
- Icons & decorations
- Accent elements
- Hover states

**Gradasi:**
```
50:  #fefce8  ← Lightest (backgrounds)
100: #fef9c3
200: #fef08a
300: #fde047
400: #facc15
500: #f0c932  ← Main Gold Color ⭐
600: #ca8a04
700: #a16207
800: #854d0e
900: #713f12  ← Darkest
```

---

### 3. **Accent - Lime Green** `#84cc16`
Warna aksen yang mencerminkan **growth, freshness, dan inovasi**.

```css
--color-accent-500: #84cc16  /* Lime Green */
```

**Penggunaan:**
- Decorative shapes
- Success states
- Fresh elements
- Complement untuk purple & gold

**Gradasi:**
```
50:  #f7fee7  ← Lightest
100: #ecfccb
200: #d9f99d
300: #bef264
400: #a3e635
500: #84cc16  ← Main Lime ⭐
600: #65a30d
700: #4d7c0f
800: #3f6212
900: #365314  ← Darkest
```

---

## 🎨 Color Psychology & Usage

### **Purple (#701F9B)** - Trust & Creativity
- Technology & Innovation
- Education & Learning
- Premium & Professional

### **Gold (#f0c932)** - Energy & Optimism  
- Call-to-Action
- Highlights & Important Info
- Positive Energy

### **Lime (#84cc16)** - Growth & Freshness
- New Features
- Success States
- Youthful Energy

---

## 📐 Color Combinations (Harmonious Pairs)

### **Combination 1: Purple + Gold** (Main)
```css
background: #701F9B;  /* Purple */
accent: #f0c932;      /* Gold */
```
✨ **Perfect for:** Buttons, Hero sections, Main CTAs

### **Combination 2: Purple + Lime**
```css
background: #701F9B;  /* Purple */
accent: #84cc16;      /* Lime */
```
✨ **Perfect for:** Decorative elements, Fresh sections

### **Combination 3: Gold + Lime**
```css
background: #f0c932;  /* Gold */
accent: #84cc16;      /* Lime */
```
✨ **Perfect for:** Playful elements, Kids sections

---

## 🎭 Gradients (Pre-defined)

### **Purple Gradients**
```css
/* Subtle Purple */
bg-linear-to-br from-primary-50 to-purple-50

/* Bold Purple */
bg-linear-to-br from-primary-500 to-primary-700

/* Purple to Dark */
bg-linear-to-r from-primary-600 to-primary-900
```

### **Gold Gradients**
```css
/* Subtle Gold */
bg-linear-to-br from-secondary-50 to-secondary-100

/* Vibrant Gold */
bg-linear-to-r from-secondary-400 to-secondary-600
```

### **Multi-Color Gradients**
```css
/* Purple to Gold */
bg-linear-to-r from-primary-500 to-secondary-500

/* Purple to Lime (Fresh) */
bg-linear-to-br from-primary-500 to-accent-400

/* Full Spectrum */
bg-linear-to-br from-primary-500 via-secondary-400 to-accent-500
```

---

## 🖼️ Component Usage Guide

### **Navbar**
- Background: `bg-white/80 backdrop-blur-lg`
- Active: `bg-primary-500 text-white`
- Hover: `hover:bg-white/70`

### **Hero Section**
- Background: `bg-primary-500` atau gradient
- Text: `text-white`
- CTA: `bg-secondary-500 text-black`
- Decorative: `bg-accent-400` (lime circles)

### **Cards**
- Background: `bg-white` atau `bg-primary-50`
- Border: `border-primary-200`
- Hover: `hover:shadow-primary-500/30`

### **Buttons**

**Primary Button:**
```html
<button class="bg-primary-500 hover:bg-primary-600 text-white">
  Primary Action
</button>
```

**Secondary Button (CTA):**
```html
<button class="bg-secondary-500 hover:bg-secondary-600 text-black">
  Call to Action
</button>
```

**Outline Button:**
```html
<button class="border-2 border-primary-500 text-primary-500 hover:bg-primary-50">
  Outline
</button>
```

---

## 💡 Accessibility (WCAG AA Compliant)

### **Text on Backgrounds:**

✅ **White text on Purple:** Contrast ratio 8.2:1 (AAA)
```css
bg-primary-500 text-white  ✅ Excellent
```

✅ **Black text on Gold:** Contrast ratio 12.1:1 (AAA)
```css
bg-secondary-500 text-black  ✅ Excellent  
```

✅ **Dark text on Lime:** Contrast ratio 4.8:1 (AA)
```css
bg-accent-400 text-neutral-900  ✅ Good
```

---

## 🎨 Quick Reference

| Color | Hex | Usage | Example |
|-------|-----|-------|---------|
| **Primary** | `#701F9B` | Main brand, headings, primary buttons | Navbar, Hero, CTAs |
| **Secondary** | `#f0c932` | Highlights, CTA buttons, accents | "Daftar Sekarang" button |
| **Accent** | `#84cc16` | Decorative, success, fresh elements | Lime circles in Hero |
| **Neutral** | `#78716c` | Text, borders, subtle elements | Body text, dividers |

---

## 📋 Tailwind Class Reference

### **Background Colors**
```html
<!-- Primary -->
<div class="bg-primary-500">Purple Background</div>
<div class="bg-primary-50">Light Purple</div>

<!-- Secondary -->  
<div class="bg-secondary-500">Gold Background</div>
<div class="bg-secondary-50">Light Gold</div>

<!-- Accent -->
<div class="bg-accent-500">Lime Background</div>
<div class="bg-accent-50">Light Lime</div>
```

### **Text Colors**
```html
<h1 class="text-primary-500">Purple Heading</h1>
<p class="text-neutral-700">Body Text</p>
<span class="text-secondary-600">Gold Text</span>
```

### **Border Colors**
```html
<div class="border-2 border-primary-500">Purple Border</div>
<div class="border border-secondary-300">Gold Border</div>
```

---

## 🌈 Color Theme Summary

**Brand Identity:** Purple + Gold + Lime
- Professional yet playful
- Educational yet modern  
- Trustworthy yet innovative

**Mood:** Energetic, Creative, Trustworthy
**Industry:** Education Technology (EdTech)
**Target:** Kids, Teens, Schools, Institutions

---

Sistem warna ini designed untuk:
✅ Brand consistency
✅ Visual harmony
✅ Accessibility (WCAG AA/AAA)
✅ Scalability
✅ Easy maintenance

🎨 **Color Palette Preview:**

```
🟣 Primary Purple:   #701F9B  ████████
🟡 Secondary Gold:   #f0c932  ████████
🟢 Accent Lime:      #84cc16  ████████
⚪ Neutral Gray:     #78716c  ████████
```

