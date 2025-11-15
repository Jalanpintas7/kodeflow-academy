import { w as attr, x as ensure_array_like, y as attr_class, z as stringify, F as head } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../chunks/state.svelte.js";
import { j as escape_html } from "../../chunks/context.js";
const favicon = "data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='107'%20height='128'%20viewBox='0%200%20107%20128'%3e%3ctitle%3esvelte-logo%3c/title%3e%3cpath%20d='M94.157%2022.819c-10.4-14.885-30.94-19.297-45.792-9.835L22.282%2029.608A29.92%2029.92%200%200%200%208.764%2049.65a31.5%2031.5%200%200%200%203.108%2020.231%2030%2030%200%200%200-4.477%2011.183%2031.9%2031.9%200%200%200%205.448%2024.116c10.402%2014.887%2030.942%2019.297%2045.791%209.835l26.083-16.624A29.92%2029.92%200%200%200%2098.235%2078.35a31.53%2031.53%200%200%200-3.105-20.232%2030%2030%200%200%200%204.474-11.182%2031.88%2031.88%200%200%200-5.447-24.116'%20style='fill:%23ff3e00'/%3e%3cpath%20d='M45.817%20106.582a20.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.503%2018%2018%200%200%201%20.624-2.435l.49-1.498%201.337.981a33.6%2033.6%200%200%200%2010.203%205.098l.97.294-.09.968a5.85%205.85%200%200%200%201.052%203.878%206.24%206.24%200%200%200%206.695%202.485%205.8%205.8%200%200%200%201.603-.704L69.27%2076.28a5.43%205.43%200%200%200%202.45-3.631%205.8%205.8%200%200%200-.987-4.371%206.24%206.24%200%200%200-6.698-2.487%205.7%205.7%200%200%200-1.6.704l-9.953%206.345a19%2019%200%200%201-5.296%202.326%2020.72%2020.72%200%200%201-22.237-8.243%2019.17%2019.17%200%200%201-3.277-14.502%2017.99%2017.99%200%200%201%208.13-12.052l26.081-16.623a19%2019%200%200%201%205.3-2.329%2020.72%2020.72%200%200%201%2022.237%208.243%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-.624%202.435l-.49%201.498-1.337-.98a33.6%2033.6%200%200%200-10.203-5.1l-.97-.294.09-.968a5.86%205.86%200%200%200-1.052-3.878%206.24%206.24%200%200%200-6.696-2.485%205.8%205.8%200%200%200-1.602.704L37.73%2051.72a5.42%205.42%200%200%200-2.449%203.63%205.79%205.79%200%200%200%20.986%204.372%206.24%206.24%200%200%200%206.698%202.486%205.8%205.8%200%200%200%201.602-.704l9.952-6.342a19%2019%200%200%201%205.295-2.328%2020.72%2020.72%200%200%201%2022.237%208.242%2019.17%2019.17%200%200%201%203.277%2014.503%2018%2018%200%200%201-8.13%2012.053l-26.081%2016.622a19%2019%200%200%201-5.3%202.328'%20style='fill:%23fff'/%3e%3c/svg%3e";
const logo = "/_app/immutable/assets/logo.fslOsacv.png";
function Navbar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let activeLink = "";
    const navLinks = [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Programs", href: "#programs" },
      { label: "Coaches", href: "#coaches" },
      { label: "Materials", href: "#materials" },
      { label: "FAQ", href: "#faq" }
    ];
    $$renderer2.push(`<nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg shadow-lg border-b border-white/20"><div class="container mx-auto px-6 lg:px-12"><div class="flex items-center justify-between h-20"><a href="/" class="flex items-center gap-3 group" aria-label="Kodeflow Academy Home"><img${attr(
      "src",
      // Initialize previousPathname
      // Set initial active link dari hash jika ada
      logo
    )} alt="Kodeflow Academy Logo" class="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-110"/></a> <div class="flex items-center gap-4"><div class="hidden lg:flex items-center gap-2 rounded-full bg-primary-50/60 backdrop-blur-md p-2 border border-white/40"><!--[-->`);
    const each_array = ensure_array_like(navLinks);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let link = each_array[$$index];
      $$renderer2.push(`<a${attr("href", link.href)}${attr_class(`font-medium transition-all duration-300 px-4 py-2 rounded-full ${stringify(activeLink === link.href ? "bg-primary-500/95 text-white shadow-lg shadow-primary-500/30 scale-105 backdrop-blur-sm" : "text-neutral-700 hover:bg-white/70 hover:text-primary-500 hover:backdrop-blur-sm")}`)}>${escape_html(link.label)}</a>`);
    }
    $$renderer2.push(`<!--]--></div> <a href="https://wa.me/6285733235489?text=Halo%20Kodeflow%2C%20saya%20ingin%20bertanya%20tentang%20program" target="_blank" rel="noopener noreferrer" class="hidden md:inline-flex items-center gap-2 bg-secondary-500 hover:bg-secondary-400 text-primary-600 font-bold px-5 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm md:text-base"><span>Hubungi Kami</span></a> <button class="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-neutral-100/60 hover:backdrop-blur-sm transition-all duration-300" aria-label="Toggle menu"><svg class="w-6 h-6 text-neutral-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">`);
    {
      $$renderer2.push("<!--[!-->");
      $$renderer2.push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`);
    }
    $$renderer2.push(`<!--]--></svg></button></div></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></div></nav> <div class="h-20"></div>`);
  });
}
function _layout($$renderer, $$props) {
  let { children } = $$props;
  head("12qhfyh", $$renderer, ($$renderer2) => {
    $$renderer2.push(`<link rel="icon"${attr("href", favicon)}/>`);
  });
  Navbar($$renderer);
  $$renderer.push(`<!----> `);
  children?.($$renderer);
  $$renderer.push(`<!---->`);
}
export {
  _layout as default
};
