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
        let offset = sec.offsetTop - 50;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        }
        else{
                sec.classList.remove('show-animate')
        }
    })
}