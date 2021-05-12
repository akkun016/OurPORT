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
});