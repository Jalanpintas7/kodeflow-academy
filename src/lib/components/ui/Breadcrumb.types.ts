/**
 * Type definitions untuk Breadcrumb Component
 */

import type { ComponentType, SvelteComponent } from 'svelte';

/**
 * Breadcrumb item structure
 */
export interface BreadcrumbItem {
  /** Label text yang ditampilkan */
  label: string;

  /** URL link (null atau undefined untuk active/current page) */
  href?: string | null;

  /** Optional icon component dari lucide-svelte */
  icon?: ComponentType<SvelteComponent>;

  /** Internal flag untuk collapsed item (don't use manually) */
  isCollapsed?: boolean;
}

/**
 * Breadcrumb variant types
 */
export type BreadcrumbVariant = 'light' | 'dark' | 'transparent' | 'solid';

/**
 * Breadcrumb component props
 */
export interface BreadcrumbProps {
  /** Array of breadcrumb items */
  items?: BreadcrumbItem[];

  /** Style variant */
  variant?: BreadcrumbVariant;

  /** Custom separator icon component */
  separator?: ComponentType<SvelteComponent>;

  /** Show home icon on first item */
  showHome?: boolean;

  /** Maximum items to display (auto-collapse if exceeded) */
  maxItems?: number | null;

  /** Custom CSS class for container */
  customClass?: string;

  /** Enable JSON-LD schema markup for SEO */
  enableSchema?: boolean;
}

/**
 * Variant class configuration
 */
export interface VariantClasses {
  nav: string;
  link: string;
  active: string;
  separator: string;
  icon: string;
}

/**
 * JSON-LD BreadcrumbList schema
 */
export interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: BreadcrumbSchemaItem[];
}

/**
 * JSON-LD ListItem schema
 */
export interface BreadcrumbSchemaItem {
  '@type': string;
  position: number;
  name: string;
  item?: string;
}

/**
 * Helper type untuk create breadcrumb items dengan type safety
 */
export function createBreadcrumbItems(
  items: BreadcrumbItem[]
): BreadcrumbItem[] {
  return items;
}

/**
 * Example usage:
 *
 * ```typescript
 * import { createBreadcrumbItems } from './Breadcrumb.types';
 * import { Gamepad2 } from 'lucide-svelte';
 *
 * const breadcrumbItems = createBreadcrumbItems([
 *   { label: 'Home', href: '/' },
 *   { label: 'Games', href: '/games', icon: Gamepad2 },
 *   { label: 'Unity', href: null },
 * ]);
 * ```
 */

