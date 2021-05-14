$(function(){
  const anime = () =>
  {
      new Vivus('svg-animation', 
      {
        duration: 150 ,
        start: 'autostart',
        type: 'delayed'
      },
      function(obj)
      {
        obj.el.classList.add('finished');
      });
  }
  anime();

  setTimeout(() => {
    $("body").css("overflow", "scroll");
  }, 5500);

  $(window).on("scroll", function() {
    const logo = $(".main-visual__inner");
    logo.toggleClass("sticky", window.scrollY > 0);

    const nav = $("nav");
    nav.toggleClass("sticky", window.scrollY > 0);

    const icon = $(".mouth-icon > svg");
    icon.toggleClass("sticky", window.scrollY > 0);
  })
});