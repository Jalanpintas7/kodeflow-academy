# 🎨 Quick Color Cheatsheet

Referensi cepat untuk menggunakan theme colors di project Anda.

---

## 🚀 Copy-Paste Ready Classes

### Buttons

```html
<!-- Primary Button -->
<button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-lg">
  Primary Button
</button>

<!-- Secondary Button -->
<button class="bg-secondary-500 hover:bg-secondary-600 text-white px-6 py-3 rounded-lg">
  Secondary Button
</button>

<!-- Outline Primary Button -->
<button class="border-2 border-primary-500 text-primary-500 hover:bg-primary-50 px-6 py-3 rounded-lg">
  Outline Button
</button>

<!-- Ghost Button -->
<button class="text-primary-500 hover:bg-primary-50 px-6 py-3 rounded-lg">
  Ghost Button
</button>

<!-- Accent Button -->
<button class="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg">
  Accent Button
</button>
```

### Cards

```html
<!-- Basic Card -->
<div class="bg-white border border-neutral-200 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
  <h3 class="text-primary-500 text-xl font-bold mb-2">Card Title</h3>
  <p class="text-neutral-600">Card content</p>
</div>

<!-- Colored Card -->
<div class="bg-primary-50 border border-primary-200 rounded-xl p-6">
  <h3 class="text-primary-700 text-xl font-bold mb-2">Primary Card</h3>
  <p class="text-primary-600">Card content</p>
</div>

<!-- Card with Gradient -->
<div class="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl p-6 text-white">
  <h3 class="text-xl font-bold mb-2">Gradient Card</h3>
  <p>Card content</p>
</div>
```

### Alerts

```html
<!-- Success Alert -->
<div class="bg-success-50 border-l-4 border-success-500 p-4 rounded">
  <p class="text-success-700 font-medium">✓ Success message here</p>
</div>

<!-- Warning Alert -->
<div class="bg-warning-50 border-l-4 border-warning-500 p-4 rounded">
  <p class="text-warning-700 font-medium">⚠ Warning message here</p>
</div>

<!-- Error Alert -->
<div class="bg-error-50 border-l-4 border-error-500 p-4 rounded">
  <p class="text-error-700 font-medium">✗ Error message here</p>
</div>

<!-- Info Alert -->
<div class="bg-secondary-50 border-l-4 border-secondary-500 p-4 rounded">
  <p class="text-secondary-700 font-medium">ℹ Info message here</p>
</div>
```

### Badges

```html
<!-- Primary Badge -->
<span class="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
  Primary
</span>

<!-- Success Badge -->
<span class="bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-medium">
  Success
</span>

<!-- Warning Badge -->
<span class="bg-warning-100 text-warning-700 px-3 py-1 rounded-full text-sm font-medium">
  Warning
</span>

<!-- Error Badge -->
<span class="bg-error-100 text-error-700 px-3 py-1 rounded-full text-sm font-medium">
  Error
</span>
```

### Form Inputs

```html
<!-- Text Input -->
<input 
  type="text" 
  class="border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 rounded-lg px-4 py-2 w-full"
  placeholder="Enter text..."
/>

<!-- Textarea -->
<textarea 
  class="border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 rounded-lg px-4 py-2 w-full"
  rows="4"
  placeholder="Enter description..."
></textarea>

<!-- Select -->
<select class="border border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 rounded-lg px-4 py-2 w-full">
  <option>Option 1</option>
  <option>Option 2</option>
</select>
```

### Links

```html
<!-- Primary Link -->
<a href="#" class="text-primary-500 hover:text-primary-600 underline">
  Primary Link
</a>

<!-- Secondary Link -->
<a href="#" class="text-secondary-500 hover:text-secondary-600 underline">
  Secondary Link
</a>

<!-- Underline on Hover -->
<a href="#" class="text-neutral-700 hover:text-primary-500 hover:underline">
  Hover Underline
</a>
```

---

## 🎯 Color Classes Reference

### Background Colors
```
bg-primary-50    → Sangat terang
bg-primary-100
bg-primary-200
bg-primary-300
bg-primary-400
bg-primary-500   → Warna utama #701F9B
bg-primary-600   → Darker
bg-primary-700
bg-primary-800
bg-primary-900   → Sangat gelap
```

### Text Colors
```
text-primary-50
text-primary-100
...
text-primary-500   → Warna utama #701F9B
...
text-primary-900
```

### Border Colors
```
border-primary-50
border-primary-100
...
border-primary-500   → Warna utama #701F9B
...
border-primary-900
```

---

## 🎨 Color Combinations

### Light Mode (Background Terang)

```html
<!-- Heading + Body Text -->
<h1 class="text-primary-500">Main Heading</h1>
<h2 class="text-neutral-900">Sub Heading</h2>
<p class="text-neutral-700">Body text</p>
<p class="text-neutral-500">Muted text</p>

<!-- Card on Light Background -->
<div class="bg-neutral-50">
  <div class="bg-white border border-neutral-200">
    <h3 class="text-primary-500">Title</h3>
    <p class="text-neutral-600">Content</p>
  </div>
</div>
```

### Dark Mode (Background Gelap)

```html
<!-- On Dark Background -->
<div class="bg-neutral-900">
  <h1 class="text-primary-300">Heading</h1>
  <p class="text-neutral-100">Body text</p>
  <p class="text-neutral-400">Muted text</p>
</div>
```

### Primary Theme (Background Primary)

```html
<!-- White text on primary background -->
<div class="bg-primary-500">
  <h1 class="text-white">Heading</h1>
  <p class="text-primary-50">Body text</p>
</div>
```

---

## 💡 Common Patterns

### Hero Section
```html
<section class="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 text-white py-20">
  <h1 class="text-5xl font-bold">Hero Title</h1>
  <p class="text-primary-50">Hero description</p>
  <button class="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-full">
    Call to Action
  </button>
</section>
```

### Navbar
```html
<nav class="bg-white border-b border-neutral-200">
  <a href="#" class="text-neutral-700 hover:text-primary-500">Link</a>
  <button class="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full">
    CTA Button
  </button>
</nav>
```

### Footer
```html
<footer class="bg-neutral-900 text-white">
  <h3 class="text-primary-300">Section Title</h3>
  <a href="#" class="text-neutral-300 hover:text-primary-300">Footer Link</a>
  <p class="text-neutral-500">Copyright text</p>
</footer>
```

### Pricing Card
```html
<div class="bg-white border-2 border-primary-500 rounded-xl p-8">
  <div class="bg-primary-500 text-white px-4 py-2 rounded-full inline-block mb-4">
    Popular
  </div>
  <h3 class="text-3xl font-bold text-neutral-900">$99</h3>
  <ul class="space-y-3 my-6">
    <li class="text-neutral-700">✓ Feature 1</li>
    <li class="text-neutral-700">✓ Feature 2</li>
  </ul>
  <button class="w-full bg-primary-500 hover:bg-primary-600 text-white py-3 rounded-lg">
    Choose Plan
  </button>
</div>
```

---

## 🔥 Pro Tips

### Hover States
```html
<!-- Button -->
class="bg-primary-500 hover:bg-primary-600"

<!-- Link -->
class="text-primary-500 hover:text-primary-600"

<!-- Card -->
class="shadow-md hover:shadow-xl transition-shadow"

<!-- Transform -->
class="transform hover:scale-105 transition-transform"
```

### Focus States (Forms)
```html
class="border-neutral-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
```

### Gradients
```html
<!-- Left to Right -->
class="bg-gradient-to-r from-primary-500 to-secondary-500"

<!-- Top to Bottom -->
class="bg-gradient-to-b from-primary-500 to-primary-700"

<!-- Diagonal -->
class="bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600"

<!-- With Opacity -->
class="bg-gradient-to-r from-primary-500/80 to-secondary-500/80"
```

### Shadows with Color
```html
class="shadow-lg shadow-primary-500/30"
class="shadow-xl shadow-primary-500/20"
```

---

## 📱 Responsive Color Changes

```html
<!-- Different colors on different screen sizes -->
<div class="bg-primary-500 md:bg-secondary-500 lg:bg-accent-500">
  Responsive Background
</div>

<h1 class="text-primary-500 md:text-secondary-500">
  Responsive Text Color
</h1>
```

---

## ✨ Accessibility Tips

### Good Contrast Examples
✅ White text on `bg-primary-500`
✅ `text-primary-500` on white background
✅ `text-neutral-900` on white background
✅ `text-neutral-100` on `bg-neutral-900`

### Poor Contrast Examples (Avoid)
❌ `text-primary-300` on white background (too light)
❌ `text-neutral-500` on `bg-neutral-600` (not enough contrast)
❌ Light text on light background
❌ Dark text on dark background

---

**Happy Styling! 🎨**

