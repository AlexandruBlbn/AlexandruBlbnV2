$(function () {
    $(document).scroll(function () {
      var $nav = $("#Navigatie");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });


  let sectiuni = document.querySelectorAll('section');
  window.onscroll = () => {
      sectiuni.forEach(sec => {
          let top = window.scrollY;
          let offset = sec.offsetTop - window.innerHeight / 2;
          let height = sec.offsetHeight;

          if (top >= offset && top < offset + height) {
              sec.classList.add('show-animate');
          } else {
              sec.classList.remove('show-animate');
          }
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
      // Intersection Observer for animations
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('animate');
              } else {
                  entry.target.classList.remove('animate');
              }
          });
      }, {
          threshold: 0.1
      });

      document.querySelectorAll('section').forEach((element) => {
          observer.observe(element);
      });

      // Smooth scrolling for links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
              e.preventDefault();
              document.querySelector(this.getAttribute('href')).scrollIntoView({
                  behavior: 'smooth'
              });
          });
      });
  });