import Glide from '@glidejs/glide';

export const glideHours = new Glide('.glide-hours', {
  type: 'slider',
  rewind: false,
  perView: 7,
  startAt: 0,
  focusAt: 0,
  swipeThreshold: false,
  dragThreshold: false,
  bound: true,
  peek: {
    before: 5,
    after: 5,
  },
  breakpoints: {
    1280: {
      swipeThreshold: 80,
      dragThreshold: 120,
      perView: 4,
    },
    768: {
      swipeThreshold: 80,
      dragThreshold: 120,
      perView: 2,
    },
  },
});

export const glideDays = new Glide('.glideDays', {
  swipeThreshold: false,
  dragThreshold: false,
  rewind: false,
  bound: true,
  perView: 5,
  breakpoints: {
    768: {
      swipeThreshold: 80,
      dragThreshold: 120,
      perView: 3,
    },
  },
});
