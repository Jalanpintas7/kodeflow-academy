# Breadcrumb Component - Quick Reference

## 🚀 Import & Setup

```svelte
<script>
  import Breadcrumb from '$lib/components/ui/Breadcrumb.svelte';
  
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'Detail', href: null }, // null = current page
  ];
</script>
```

## 📝 Props Cheatsheet

| Prop | Values | Default |
|------|--------|---------|
| `items` | Array | `[]` |
| `variant` | `'light'` `'dark'` `'transparent'` `'solid'` | `'light'` |
| `separator` | Icon Component | `ChevronRight` |
| `showHome` | `true` `false` | `true` |
| `maxItems` | Number or `null` | `null` |
| `customClass` | String | `''` |
| `enableSchema` | `true` `false` | `true` |

## 💡 Quick Examples

### Basic
```svelte
<Breadcrumb items={items} />
```

### Dark Variant
```svelte
<Breadcrumb items={items} variant="dark" />
```

### With Icons
```svelte
<script>
  import { Gamepad2 } from 'lucide-svelte';
  
  const items = [
    { label: 'Home', href: '/' },
    { label: 'Games', href: '/games', icon: Gamepad2 },
  ];
</script>

<Breadcrumb items={items} />
```

### Custom Separator
```svelte
<script>
  import { ArrowRight } from 'lucide-svelte';
</script>

<Breadcrumb items={items} separator={ArrowRight} />
```

### No Home Icon
```svelte
<Breadcrumb items={items} showHome={false} />
```

### Auto Collapse
```svelte
<Breadcrumb items={longItems} maxItems={5} />
```

### Transparent
```svelte
<Breadcrumb items={items} variant="transparent" />
```

### Custom Class
```svelte
<Breadcrumb items={items} customClass="mb-6" />
```

### No SEO Schema
```svelte
<Breadcrumb items={items} enableSchema={false} />
```

## 🎨 All Variants

```svelte
<!-- Light - Default white bg -->
<Breadcrumb items={items} variant="light" />

<!-- Dark - For hero sections -->
<Breadcrumb items={items} variant="dark" />

<!-- Transparent - Overlay -->
<Breadcrumb items={items} variant="transparent" />

<!-- Solid - Gray background -->
<Breadcrumb items={items} variant="solid" />
```

## 🔧 Item Structure

```javascript
{
  label: 'Text',          // Required
  href: '/path',          // Optional, null = active
  icon: IconComponent,    // Optional, Lucide icon
}
```

## ✨ Common Patterns

### Blog Post
```svelte
const items = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Category', href: '/blog/category' },
  { label: 'Post Title', href: null },
];
```

### E-commerce
```svelte
const items = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop' },
  { label: 'Electronics', href: '/shop/electronics' },
  { label: 'Product Name', href: null },
];
```

### Documentation
```svelte
const items = [
  { label: 'Docs', href: '/docs' },
  { label: 'API', href: '/docs/api' },
  { label: 'Authentication', href: null },
];
```

## 🎯 Best Practices

✅ DO:
- Set last item `href: null` for current page
- Use `maxItems` for long breadcrumbs
- Keep `enableSchema={true}` for SEO
- Use appropriate variant for background

❌ DON'T:
- Don't make every item clickable
- Don't use too many items without collapse
- Don't forget to test on mobile
- Don't disable schema unless necessary

## 📱 Responsive

Component is automatically responsive with flex-wrap.

## ♿ Accessibility

Built-in features:
- Semantic HTML (`<nav>`, `<ol>`, `<li>`)
- ARIA labels
- `aria-current="page"` for current item
- Schema.org microdata

