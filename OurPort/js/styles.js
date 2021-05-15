$(function(){
  // リロード時スクロール位置をトップへ
  $('html,body').animate({ scrollTop: 0 }, '1');

  // svgアニメーションの設定
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

  // ページ表示直後5.5秒はスクロール無効
  setTimeout(() => {
    $("body").css("overflow", "scroll");
  }, 5500);

  // スクロール時にstickyの追加
  $(window).on("scroll", function() {
    const logo = $(".main-visual__inner");
    logo.toggleClass("sticky", window.scrollY > 0);

    const nav = $("nav");
    nav.toggleClass("sticky", window.scrollY > 0);

    const icon = $(".mouth-icon > svg");
    icon.toggleClass("sticky", window.scrollY > 0);
  })
});