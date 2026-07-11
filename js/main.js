(function () {
  'use strict'

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector('.nav-toggle')
  var navLinks = document.querySelector('.nav-links')

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      var isOpen = navLinks.classList.toggle('open')
      toggle.classList.toggle('active')
      toggle.setAttribute('aria-expanded', isOpen)
    })

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open')
        toggle.classList.remove('active')
        toggle.setAttribute('aria-expanded', 'false')
      })
    })
  }

  /* ---- Fade-in on scroll ---- */
  var fadeElements = document.querySelectorAll('.fade-in')

  if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    fadeElements.forEach(function (el) {
      observer.observe(el)
    })
  } else {
    fadeElements.forEach(function (el) {
      el.classList.add('visible')
    })
  }

  /* ---- Active nav link on scroll ---- */
  var sections = document.querySelectorAll('section[id]')
  var navAnchors = document.querySelectorAll('.nav-links a')

  if (sections.length && navAnchors.length) {
    var navObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navAnchors.forEach(function (a) {
              var href = a.getAttribute('href').replace('#', '')
              a.style.color =
                href === entry.target.id ? 'var(--green-accent)' : ''
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    sections.forEach(function (section) {
      navObserver.observe(section)
    })
  }
})()
