/* ============================================================
   ByVelvet Shopify Theme — Vanilla JS
   ============================================================ */

(function () {
  'use strict';

  /* ── Scroll Reveal ──────────────────────────────────────── */
  function initScrollReveal() {
    var els = document.querySelectorAll('.bv-reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('bv-visible'); });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('bv-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function (el) { observer.observe(el); });
  }

  /* ── Header Scroll State ────────────────────────────────── */
  function initHeaderScroll() {
    var header = document.querySelector('.header');
    if (!header) return;
    function onScroll() {
      if (window.scrollY > 40) {
        header.classList.add('bv-scrolled');
      } else {
        header.classList.remove('bv-scrolled');
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Hero ContainerScroll 3D Effect ────────────────────── */
  function initHeroScroll() {
    var card = document.querySelector('.bv-scroll-card');
    var hero = document.querySelector('.bv-hero');
    if (!card || !hero) return;

    function onScroll() {
      var rect = hero.getBoundingClientRect();
      var heroHeight = hero.offsetHeight;
      var progress = Math.max(0, Math.min(1, -rect.top / heroHeight));
      // rotateX: from 20deg at top → 0deg when scrolled through
      var rotateX = 20 * (1 - progress);
      var scale = 0.9 + (0.1 * progress);
      card.style.transform = 'rotateX(' + rotateX + 'deg) scale(' + scale + ')';
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Product Filter Tabs ────────────────────────────────── */
  function initProductFilter() {
    var tabs = document.querySelectorAll('.bv-filter-tab');
    var cards = document.querySelectorAll('.bv-product-card');
    if (!tabs.length || !cards.length) return;

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        var category = tab.getAttribute('data-category');

        // Update active tab
        tabs.forEach(function (t) { t.classList.remove('bv-active'); });
        tab.classList.add('bv-active');

        // Filter cards
        cards.forEach(function (card) {
          if (category === 'all') {
            card.removeAttribute('data-hidden');
          } else {
            var cardCat = card.getAttribute('data-category') || '';
            if (cardCat === category) {
              card.removeAttribute('data-hidden');
            } else {
              card.setAttribute('data-hidden', 'true');
            }
          }
        });
      });
    });
  }

  /* ── Wishlist Heart Toggle ──────────────────────────────── */
  function initWishlist() {
    document.querySelectorAll('.bv-product-card__wishlist').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();
        btn.classList.toggle('bv-wishlisted');
      });
    });
  }

  /* ── Newsletter Success State ───────────────────────────── */
  function initNewsletter() {
    var form = document.querySelector('.bv-newsletter__form');
    var success = document.querySelector('.bv-newsletter__success');
    if (!form || !success) return;

    form.addEventListener('submit', function (e) {
      var input = form.querySelector('.bv-newsletter__input');
      if (input && input.value) {
        // Shopify handles the actual form POST; we just show the UI state
        setTimeout(function () {
          form.style.display = 'none';
          success.style.display = 'block';
        }, 800);
      }
    });
  }

  /* ── Init all ───────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    initHeaderScroll();
    initHeroScroll();
    initProductFilter();
    initWishlist();
    initNewsletter();
  });

})();
