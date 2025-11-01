<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  // Props
  let {
    children,
    delay = 0,
    duration = 600,
    animation = 'fade-up', // 'fade-up', 'fade-down', 'fade-left', 'fade-right', 'fade', 'zoom'
    threshold = 0.1,
    once = true,
  } = $props();

  let element;
  let isVisible = $state(false);

  onMount(() => {
    if (!browser) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              isVisible = true;
            }, delay);

            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            isVisible = false;
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  });

  // Animation classes based on type
  const getAnimationClasses = (anim, visible) => {
    const base = `transition-all`;
    const durationClass = `duration-${duration}`;

    if (!visible) {
      switch (anim) {
        case 'fade-up':
          return `${base} ${durationClass} opacity-0 translate-y-8`;
        case 'fade-down':
          return `${base} ${durationClass} opacity-0 -translate-y-8`;
        case 'fade-left':
          return `${base} ${durationClass} opacity-0 translate-x-8`;
        case 'fade-right':
          return `${base} ${durationClass} opacity-0 -translate-x-8`;
        case 'zoom':
          return `${base} ${durationClass} opacity-0 scale-95`;
        case 'fade':
        default:
          return `${base} ${durationClass} opacity-0`;
      }
    }

    return `${base} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };
</script>

<div bind:this={element} class={getAnimationClasses(animation, isVisible)}>
  {@render children?.()}
</div>
