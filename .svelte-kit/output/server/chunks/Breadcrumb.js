import { J as sanitize_props, P as rest_props, Q as attributes, O as clsx, x as ensure_array_like, T as element, N as slot, V as bind_props, K as spread_props, y as attr_class, z as stringify, w as attr } from "./index2.js";
import { m as fallback, j as escape_html } from "./context.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
/**
 * @license lucide-svelte v0.552.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The MIT License (MIT) (for portions derived from Feather)
 * 
 * Copyright (c) 2013-2023 Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  $$renderer.component(($$renderer2) => {
    let name = fallback($$props["name"], void 0);
    let color = fallback($$props["color"], "currentColor");
    let size = fallback($$props["size"], 24);
    let strokeWidth = fallback($$props["strokeWidth"], 2);
    let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
    let iconNode = fallback($$props["iconNode"], () => [], true);
    const mergeClasses = (...classes) => classes.filter((className, index, array) => {
      return Boolean(className) && array.indexOf(className) === index;
    }).join(" ");
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes,
        ...$$restProps,
        width: size,
        height: size,
        stroke: color,
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]--><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></svg>`);
    bind_props($$props, {
      name,
      color,
      size,
      strokeWidth,
      absoluteStrokeWidth,
      iconNode
    });
  });
}
function Chevron_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.552.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  Icon($$renderer, spread_props([
    { name: "chevron-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ChevronRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtOSAxOCA2LTYtNi02IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/chevron-right
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Ellipsis($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.552.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "1" }],
    ["circle", { "cx": "19", "cy": "12", "r": "1" }],
    ["circle", { "cx": "5", "cy": "12", "r": "1" }]
  ];
  Icon($$renderer, spread_props([
    { name: "ellipsis" },
    $$sanitized_props,
    {
      /**
       * @component @name Ellipsis
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxIiAvPgogIDxjaXJjbGUgY3g9IjE5IiBjeT0iMTIiIHI9IjEiIC8+CiAgPGNpcmNsZSBjeD0iNSIgY3k9IjEyIiByPSIxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/ellipsis
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function House($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  /**
   * @license lucide-svelte v0.552.0 - ISC
   *
   * ISC License
   *
   * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2023 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2025.
   *
   * Permission to use, copy, modify, and/or distribute this software for any
   * purpose with or without fee is hereby granted, provided that the above
   * copyright notice and this permission notice appear in all copies.
   *
   * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
   * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
   * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
   * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
   * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
   * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
   * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * ---
   *
   * The MIT License (MIT) (for portions derived from Feather)
   *
   * Copyright (c) 2013-2023 Cole Bemis
   *
   * Permission is hereby granted, free of charge, to any person obtaining a copy
   * of this software and associated documentation files (the "Software"), to deal
   * in the Software without restriction, including without limitation the rights
   * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
   * copies of the Software, and to permit persons to whom the Software is
   * furnished to do so, subject to the following conditions:
   *
   * The above copyright notice and this permission notice shall be included in all
   * copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
   *
   */
  const iconNode = [
    [
      "path",
      { "d": "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" }
    ],
    [
      "path",
      {
        "d": "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "house" },
    $$sanitized_props,
    {
      /**
       * @component @name House
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTUgMjF2LThhMSAxIDAgMCAwLTEtMWgtNGExIDEgMCAwIDAtMSAxdjgiIC8+CiAgPHBhdGggZD0iTTMgMTBhMiAyIDAgMCAxIC43MDktMS41MjhsNy02YTIgMiAwIDAgMSAyLjU4MiAwbDcgNkEyIDIgMCAwIDEgMjEgMTB2OWEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnoiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/house
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
function Breadcrumb($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      items = [],
      variant = "light",
      separator = Chevron_right,
      showHome = true,
      maxItems = null,
      customClass = "",
      enableSchema = true
    } = $$props;
    const variantClasses = {
      light: {
        nav: "bg-white/80 backdrop-blur-md border border-white/20",
        link: "text-gray-600 hover:text-primary-500",
        active: "text-gray-900 font-semibold",
        separator: "text-gray-400",
        icon: "text-gray-500"
      },
      dark: {
        nav: "bg-white/10 backdrop-blur-md border border-white/20",
        link: "text-white/70 hover:text-white",
        active: "text-white font-semibold",
        separator: "text-white/50",
        icon: "text-white/60"
      },
      transparent: {
        nav: "bg-transparent",
        link: "text-gray-600 hover:text-primary-500",
        active: "text-gray-900 font-semibold",
        separator: "text-gray-400",
        icon: "text-gray-500"
      },
      solid: {
        nav: "bg-gray-100 border border-gray-200",
        link: "text-gray-600 hover:text-primary-500",
        active: "text-primary-600 font-semibold",
        separator: "text-gray-400",
        icon: "text-gray-500"
      }
    };
    const classes = variantClasses[variant] || variantClasses.light;
    const displayItems = (() => {
      if (!maxItems || items.length <= maxItems) {
        return items;
      }
      const firstItems = items.slice(0, 1);
      const lastItems = items.slice(-(maxItems - 2));
      return [
        ...firstItems,
        { label: "...", isCollapsed: true },
        ...lastItems
      ];
    })();
    const breadcrumbSchema = (() => {
      if (!enableSchema) return null;
      const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.filter((item) => !item.isCollapsed).map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: item.href ? `${baseUrl}${item.href}` : void 0
        }))
      };
    })();
    if (enableSchema && breadcrumbSchema) {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`${html(`<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}<\/script>`)}`);
    } else {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--> <nav aria-label="Breadcrumb"${attr_class(`py-2 ${stringify(customClass)}`)}><div${attr_class(`${stringify(classes.nav)} rounded-full px-3 md:px-4 py-1.5 md:py-2 inline-flex shadow-sm max-w-full`)}><ol class="flex items-center gap-1.5 md:gap-2 flex-wrap" itemscope="" itemtype="https://schema.org/BreadcrumbList"><!--[-->`);
    const each_array = ensure_array_like(displayItems);
    for (let index = 0, $$length = each_array.length; index < $$length; index++) {
      let item = each_array[index];
      $$renderer2.push(`<li class="flex items-center gap-1.5 md:gap-2" itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">`);
      if (index > 0) {
        $$renderer2.push("<!--[-->");
        const Separator = separator;
        $$renderer2.push(`<!---->`);
        Separator($$renderer2, {
          class: `w-3 h-3 md:w-4 md:h-4 ${stringify(classes.separator)}`
        });
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[!-->");
      }
      $$renderer2.push(`<!--]--> `);
      if (item.isCollapsed) {
        $$renderer2.push("<!--[-->");
        $$renderer2.push(`<span${attr_class(`${stringify(classes.separator)} text-sm`)}>`);
        Ellipsis($$renderer2, { class: "w-4 h-4" });
        $$renderer2.push(`<!----></span>`);
      } else {
        $$renderer2.push("<!--[!-->");
        if (item.href) {
          $$renderer2.push("<!--[-->");
          $$renderer2.push(`<a${attr("href", item.href)}${attr_class(`${stringify(classes.link)} transition-colors duration-200 text-xs md:text-sm font-medium flex items-center gap-1 md:gap-1.5`)} itemprop="item">`);
          if (showHome && index === 0) {
            $$renderer2.push("<!--[-->");
            House($$renderer2, {
              class: `w-3.5 h-3.5 md:w-4 md:h-4 ${stringify(classes.icon)}`
            });
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--> `);
          if (item.icon && index > 0) {
            $$renderer2.push("<!--[-->");
            const Icon2 = item.icon;
            $$renderer2.push(`<!---->`);
            Icon2($$renderer2, {
              class: `w-3.5 h-3.5 md:w-4 md:h-4 ${stringify(classes.icon)}`
            });
            $$renderer2.push(`<!---->`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--> <span itemprop="name" class="truncate max-w-[80px] sm:max-w-[120px] md:max-w-none">${escape_html(item.label)}</span> <meta itemprop="position"${attr("content", index + 1)}/></a>`);
        } else {
          $$renderer2.push("<!--[!-->");
          $$renderer2.push(`<span${attr_class(`${stringify(classes.active)} text-xs md:text-sm flex items-center gap-1 md:gap-1.5`)} aria-current="page" itemprop="item">`);
          if (showHome && index === 0) {
            $$renderer2.push("<!--[-->");
            House($$renderer2, {
              class: `w-3.5 h-3.5 md:w-4 md:h-4 ${stringify(classes.icon)}`
            });
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--> `);
          if (item.icon && index > 0) {
            $$renderer2.push("<!--[-->");
            const Icon2 = item.icon;
            $$renderer2.push(`<!---->`);
            Icon2($$renderer2, {
              class: `w-3.5 h-3.5 md:w-4 md:h-4 ${stringify(classes.icon)}`
            });
            $$renderer2.push(`<!---->`);
          } else {
            $$renderer2.push("<!--[!-->");
          }
          $$renderer2.push(`<!--]--> <span itemprop="name" class="truncate max-w-[80px] sm:max-w-[120px] md:max-w-none">${escape_html(item.label)}</span> <meta itemprop="position"${attr("content", index + 1)}/></span>`);
        }
        $$renderer2.push(`<!--]-->`);
      }
      $$renderer2.push(`<!--]--></li>`);
    }
    $$renderer2.push(`<!--]--></ol></div></nav>`);
  });
}
export {
  Breadcrumb as B,
  House as H,
  Icon as I
};
