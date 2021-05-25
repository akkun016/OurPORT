$(function(){
  // マウスカーソルのエフェクト
  let cursor = $(".cursor");
  $(document).on("mousemove", function(e) {
    let mousemove_left = e.clientX - 8;
    let mousemove_top = e.clientY - 8;

    cursor.css({"transform":`translate(${mousemove_left + "px"}, ${mousemove_top + "px"})`, "opacity": "1"});
  });

  $("a").hover(function(){
    cursor.css({"height":"80px", "width":"80px", "top":"-30px", "left":"-30px"})
  }, function(){
    cursor.css({"height":"16px", "width":"16px", "top":"0", "left":"0"})
  });

  $("label").hover(function(){
    cursor.css({"height":"80px", "width":"80px", "top":"-30px", "left":"-30px"})
  }, function(){
    cursor.css({"height":"16px", "width":"16px", "top":"0", "left":"0"})
  });

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

  // スクロール時の処理
  const logo = $(".header-title");
  const nav = $("nav");
  const icon = $(".mouth-icon > svg");

  const contentBlocks = document.querySelectorAll(".content-inner");
  const contentsHeight = document.querySelectorAll(".content-inner").length * 500 + 2200;
  $(window).on("scroll", function() {
    logo.toggleClass("sticky", window.scrollY > 0)
    nav.toggleClass("sticky", window.scrollY > 0);
    icon.toggleClass("sticky", window.scrollY > 0);

    if (window.scrollY > 2200 && window.scrollY < contentsHeight) {
      for (let i = 0; i < contentBlocks.length; i++) {
        const contentPosition = contentBlocks[i].getBoundingClientRect().top;
        if (window.innerHeight - 300 > contentPosition) {
          contentBlocks[i].children[0].style.display = 'flex';
        }
      }
    }
  })
});
