import { y as attr_class, O as clsx } from "./index2.js";
function ScrollReveal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      delay = 0,
      duration = 600,
      animation = "fade-up",
      // 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'fade', 'zoom'
      threshold = 0.1,
      once = true
    } = $$props;
    const getAnimationClasses = (anim, visible) => {
      const base = `transition-all`;
      const durationClass = `duration-${duration}`;
      {
        switch (anim) {
          case "fade-up":
            return `${base} ${durationClass} opacity-0 translate-y-8`;
          case "fade-down":
            return `${base} ${durationClass} opacity-0 -translate-y-8`;
          case "fade-left":
            return `${base} ${durationClass} opacity-0 translate-x-8`;
          case "fade-right":
            return `${base} ${durationClass} opacity-0 -translate-x-8`;
          case "zoom":
            return `${base} ${durationClass} opacity-0 scale-95`;
          case "fade":
          default:
            return `${base} ${durationClass} opacity-0`;
        }
      }
      return `${base} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
    };
    $$renderer2.push(`<div${attr_class(clsx(getAnimationClasses(animation)))}>`);
    children?.($$renderer2);
    $$renderer2.push(`<!----></div>`);
  });
}
export {
  ScrollReveal as S
};
