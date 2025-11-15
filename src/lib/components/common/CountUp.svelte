<script>
  import { onMount } from 'svelte';
  import { browser } from '$app/environment';

  // Props
  let {
    target = 0,
    duration = 2000,
    suffix = '',
    prefix = '',
    decimals = 0,
    threshold = 0.5,
  } = $props();

  let element;
  let currentValue = $state(0);
  let hasAnimated = false;

  const easeOutQuad = (t) => t * (2 - t);

  const animateCount = () => {
    if (hasAnimated) return;
    hasAnimated = true;

    const startTime = performance.now();
    const startValue = 0;
    const endValue = target;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutQuad(progress);

      currentValue = Math.floor(
        startValue + (endValue - startValue) * easedProgress
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        currentValue = endValue;
      }
    };

    requestAnimationFrame(animate);
  };

  onMount(() => {
    if (!browser) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount();
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: threshold,
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

  const formattedValue = $derived(
    prefix + currentValue.toFixed(decimals) + suffix
  );
</script>

<span bind:this={element}>{formattedValue}</span>
