// SweetNecta Final — Main JavaScript
// Using homepage-master skill templates EXACTLY

// ============================================
// Lenis + ScrollTrigger Sync (REQUIRED)
// ============================================

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);
gsap.registerPlugin(ScrollTrigger);

// ============================================
// Navigation Scroll Effect
// ============================================

const nav = document.querySelector('.nav');
ScrollTrigger.create({
  trigger: document.body,
  start: 'top top',
  end: 'max',
  onUpdate: (self) => {
    nav.classList.toggle('scrolled', self.scroll() > 100);
  },
});

// ============================================
// SECTION 1: Hero - Scroll-Scrub Video (Apple Style)
// EXACT implementation from homepage-master template
// ============================================

const heroVideo = document.getElementById('video-1');
const isMobile = window.innerWidth < 768;

if (!isMobile && heroVideo) {
  heroVideo.pause();
  
  heroVideo.addEventListener('loadedmetadata', () => {
    // Scrub video based on scroll position
    ScrollTrigger.create({
      trigger: '.hero-section',
      start: 'top top',
      end: 'bottom bottom',
      onUpdate: (self) => {
        if (!isNaN(heroVideo.duration)) {
          heroVideo.currentTime = self.progress * heroVideo.duration;
        }
      }
    });
    
    // Hero text animations with scroll
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: '40% top',
        scrub: 1,
      }
    });
    
    // Opening text: visible from start, scrolls right and off screen
    heroTl.fromTo('.hero-opening', 
      { opacity: 1, x: 0 }, 
      { opacity: 0, x: '60vw', ease: 'power2.in' }, 
      0.2
    );
    heroTl.fromTo('.hero-title', 
      { opacity: 0, scale: 0.95 }, 
      { opacity: 1, scale: 1, duration: 0.25 }, 
      0.35
    );
    heroTl.fromTo('.hero-subtitle', 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.15 }, 
      0.6
    );
    heroTl.to(['.hero-title', '.hero-subtitle'], { 
      opacity: 0, y: -50, duration: 0.2 
    }, 0.9);
  });
}

// ============================================
// SECTIONS 2-7: Pinned Panels (Card Peel Effect)
// ============================================

const panels = gsap.utils.toArray('.panel');

panels.forEach((panel, i) => {
  // Pin each panel with proper spacing
  ScrollTrigger.create({
    trigger: panel,
    start: 'top top',
    pin: true,
    pinSpacing: true,
  });
  
  // Add peel effect for panels after first
  if (i > 0) {
    gsap.fromTo(panel,
      { 
        y: 100,
        opacity: 0.8 
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: panel,
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        }
      }
    );
  }
});

// ============================================
// Video 2-4: Scroll-Scrub for Panel Videos
// ============================================

const panelVideoMap = [
  { videoId: 'video-2', panelIndex: 1 },
  { videoId: 'video-3', panelIndex: 3 },
  { videoId: 'video-4', panelIndex: 5 }
];

panelVideoMap.forEach(({ videoId, panelIndex }) => {
  const video = document.getElementById(videoId);
  
  if (!isMobile && video) {
    video.pause();
    
    video.addEventListener('loadedmetadata', () => {
      const panel = panels[panelIndex];
      
      if (panel) {
        ScrollTrigger.create({
          trigger: panel,
          start: 'top top',
          end: 'bottom top',
          onUpdate: (self) => {
            if (!isNaN(video.duration)) {
              video.currentTime = self.progress * video.duration;
            }
          }
        });
      }
    });
  }
});

// ============================================
// Kinetic Typography for Coffee Titles
// EXACT implementation from homepage-master template
// ============================================

if (typeof SplitType !== 'undefined') {
  const kineticTitles = document.querySelectorAll('.kinetic-title');
  
  kineticTitles.forEach((title) => {
    const split = new SplitType(title, { 
      types: 'words,chars',
      wordClass: 'word',
      charClass: 'char'
    });

    gsap.fromTo(split.words,
      { 
        y: 120, 
        opacity: 0, 
        rotationZ: 4 
      },
      {
        y: 0,
        opacity: 1,
        rotationZ: 0,
        stagger: 0.08,
        ease: 'power4.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
          end: 'top 40%',
          scrub: 1,
        }
      }
    );
  });
}

// ============================================
// Section 8: Subscribe
// ============================================

gsap.fromTo('.subscribe-content > *',
  { y: 40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.8,
    stagger: 0.15,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.subscribe',
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    }
  }
);

// Form submission
const subscribeForm = document.querySelector('.subscribe-form');
if (subscribeForm) {
  subscribeForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = subscribeForm.querySelector('.form-submit');
    submitBtn.textContent = 'Brewing...';
    submitBtn.disabled = true;

    setTimeout(() => {
      submitBtn.textContent = 'Welcome to the ritual';
      
      setTimeout(() => {
        submitBtn.textContent = 'Begin';
        submitBtn.disabled = false;
        subscribeForm.reset();
      }, 2000);
    }, 1500);
  });
}

// ============================================
// Console
// ============================================

console.log('%c SWEETNECTA ', 'background: #F5F0E8; color: #0A0806; font-size: 20px; font-weight: bold;');
console.log('%c Built with homepage-master skill ', 'color: #F5F0E8; font-size: 12px;');
console.log('%c Scroll-scrub video + Pinned panels + Kinetic type ', 'color: #8A8580; font-size: 10px;');
